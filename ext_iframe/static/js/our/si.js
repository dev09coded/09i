function SocketInterface() {}

SocketInterface.init = function(hostport, initial_subscriptions, initial_handlers, log_outsize_after_mins, reconnect_attempts) {
    log_outsize_after_mins = defaultFor(log_outsize_after_mins, 0);
    reconnect_attempts = defaultFor(reconnect_attempts, Infinity);
    initial_subscriptions = defaultFor(
        initial_subscriptions, {
            'trades': {},
            'avgprice': {},
            'mktcap': {}
        });
    initial_handlers = defaultFor(
        initial_handlers, {
            'trades': {},
            'avgprice': {},
            'mktcap': {}
        });

    SocketInterface.hostport = hostport;
    SocketInterface.subscriptions = initial_subscriptions;
    SocketInterface.handlers = initial_handlers;
    SocketInterface.disconnect_time = 0;
    SocketInterface.connects = 0;
    SocketInterface.disconnect_time = get_timestamp();
    SocketInterface.log_outsize_after_mins = log_outsize_after_mins;
    if (SocketInterface.log_outsize_after_mins) {
        setTimeout(
            function() {
                console.log('Total streamed bytes within the first ' + SocketInterface.log_outsize_after_mins +
                    ' minutes: ' + SocketInterface.total_bytes);
            }, 60000 * SocketInterface.log_outsize_after_mins);
    }
    SocketInterface.total_bytes = 0;
    SocketInterface.on_reconnect_handler = function() {
        update_small_charts();
    }
}

SocketInterface.reset = function(subs, handlers) {
    SocketInterface.subscriptions = subs;
    SocketInterface.handlers = handlers;
    SocketInterface.send_subscriptions();
}

SocketInterface.connect = function() {
    SocketInterface.socket = io.connect(SocketInterface.hostport, {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 3000,
        reconnectionAttempts: Infinity
    });
    SocketInterface.socket.on('trades', function(data) {
        SocketInterface.handle_trade(data);
    });
    SocketInterface.socket.on('multi_trades', function(dataarray) {
        for (var i = 0; i < dataarray.length; i++) {
            SocketInterface.handle_trade(dataarray[i]);
        }
    });
    SocketInterface.socket.on('avgprice', function(data) {
        SocketInterface.handle_avgprice(data);
    });
    SocketInterface.socket.on('multi_avgprice', function(dataarray) {
        for (var i = 0; i < dataarray.length; i++) {
            SocketInterface.handle_avgprice(dataarray[i]);
        }
    });
    SocketInterface.socket.on('mktcap', function(data) {
        SocketInterface.handle_mktcap(data);
    });
    SocketInterface.socket.on('connect', function() {
        SocketInterface.connects++;
        if (SocketInterface.connects == 1) {
            SocketInterface.heartbeat(1);
        } else {
            SocketInterface.heartbeat(3);
        }
        if (SocketInterface.connects > 1 && get_timestamp() - SocketInterface.disconnect_time > 120) {
            // only do this if it's a reconnect and we've been disconnected for more than 2 minutes
            SocketInterface.send_subscriptions_sync();
            if (SocketInterface.on_reconnect_handler) SocketInterface.on_reconnect_handler();
        }
        SocketInterface.send_subscriptions();
    });
    SocketInterface.socket.on('disconnect', function() {
        SocketInterface.disconnect_time = get_timestamp();
    });
}

SocketInterface.send_subscriptions_sync = function() {
    $.ajax({
        type: 'POST',
        url: '/api/streams',
        data: 'req=' + JSON.stringify(SocketInterface.subscriptions),
        dataType: 'json'
    }).done(function(data) {
        for (var rtype in data) {
            for (var ix in data[rtype]) {
                row = data[rtype][ix];
                if (rtype == 'trade') {
                    SocketInterface.handle_trade(row);
                } else if (rtype == 'avgprice') {
                    SocketInterface.handle_avgprice(row);
                } else if (rtype == 'mktcap') {
                    SocketInterface.handle_mktcap(row);
                }
            }
        }
    });
}

SocketInterface.get_signature = function(subs) {
    var signature = 0
    var salt = 8263
    for (var iy in subs) {
        var v = subs[iy];
        for (var ix = 1; ix < v.length; ix++) {
            signature += (parseInt(v[ix]) * salt) % 1000000;
        }
    }
    return signature;
}

// subs = array of [from_coin_id, to_coin_id, exchange_id, force_real_pair, pref_coin_id]
SocketInterface.add_trade_subscriptions = function(subs) {
    multi = [];
    for (var ix in subs) {
        var s = subs[ix]
        sub_str = "[" + s[0] + "," + s[1] + "," + s[2] + "," + s[3] + "," + s[4] + "]";
        SocketInterface.subscriptions['trades'][sub_str] = 0;
        multi.push(['trades', s[0], s[1], s[2], s[3], s[4]]);
    }
    SocketInterface.socket.emit('multi_subscribe', multi, SocketInterface.get_signature(multi));
}

SocketInterface.add_trade_subscription = function(
    from_coin_id, to_coin_id, exchange_id, force_real_pair, pref_coin_id) {
    sub = "[" + from_coin_id + "," + to_coin_id + "," + exchange_id +
        "," + force_real_pair + "," + pref_coin_id + "]";
    SocketInterface.subscriptions['trades'][sub] = 0;
    multi = [
        ["trades", from_coin_id, to_coin_id, exchange_id, force_real_pair, pref_coin_id]
    ];
    SocketInterface.socket.emit(
        'multi_subscribe', multi, SocketInterface.get_signature(multi));
}

SocketInterface.add_avgprice_subscription = function(
    from_coin_id, to_coin_id, pref_coin_id) {
    sub = "[" + from_coin_id + "," + to_coin_id + "," + pref_coin_id + "]";
    SocketInterface.subscriptions['avgprice'][sub] = 0;
    multi = [
        ["avgprice", from_coin_id, to_coin_id, pref_coin_id]
    ];
    SocketInterface.socket.emit(
        'multi_subscribe', multi, SocketInterface.get_signature(multi))
}

SocketInterface.add_mktcap_subscription = function(pref_coin_id) {
    sub = "[" + pref_coin_id + "]";
    SocketInterface.subscriptions['mktcap'][sub] = 0;
    multi = [
        ["mktcap", pref_coin_id]
    ];
    SocketInterface.socket.emit(
        'multi_subscribe', multi, SocketInterface.get_signature(multi));
}

SocketInterface.add_trade_handler = function(
    from_coin_id, to_coin_id, exchange_id, callback) {
    sub = "[" + from_coin_id + "," + to_coin_id + "," + exchange_id + "]";
    if (SocketInterface.handlers['trades'][sub] == undefined) {
        SocketInterface.handlers['trades'][sub] = [];
    }
    SocketInterface.handlers['trades'][sub].push(callback);
}

SocketInterface.add_avgprice_handler = function(from_coin_id, to_coin_id, callback) {
    sub = "[" + from_coin_id + "," + to_coin_id + "]";
    if (SocketInterface.handlers['avgprice'][sub] == undefined) {
        SocketInterface.handlers['avgprice'][sub] = [];
    }
    SocketInterface.handlers['avgprice'][sub].push(callback);
}

SocketInterface.add_raw_trade_handler = function(callback) {
    if (SocketInterface.handlers['trades']['raw'] == undefined) {
        SocketInterface.handlers['trades']['raw'] = [];
    }
    SocketInterface.handlers['trades']['raw'].push(callback);
}

SocketInterface.add_raw_avgprice_handler = function(callback) {
    if (SocketInterface.handlers['avgprice']['raw'] == undefined) {
        SocketInterface.handlers['avgprice']['raw'] = [];
    }
    SocketInterface.handlers['avgprice']['raw'].push(callback);
}

SocketInterface.add_mktcap_handler = function(callback) {
    if (SocketInterface.handlers['mktcap']['raw'] == undefined) {
        SocketInterface.handlers['mktcap']['raw'] = [];
    }
    SocketInterface.handlers['mktcap']['raw'].push(callback);
}

SocketInterface.send_subscriptions = function() {
    var multi_subscribe = [];
    for (var s_type in SocketInterface.subscriptions) {
        for (var s_vector in SocketInterface.subscriptions[s_type]) {
            v = [s_type];
            v.push.apply(v, JSON.parse(s_vector));
            if (s_type == 'avgprice' && SocketInterface.subscriptions[s_type][s_vector] > 1) {
                v.push.apply(v, [SocketInterface.subscriptions[s_type][s_vector]]);
            }
            multi_subscribe.push(v);
        }
    }
    SocketInterface.socket.emit('multi_subscribe', multi_subscribe, SocketInterface.get_signature(multi_subscribe));
}

SocketInterface.handle_trade = function(data) {
    if (SocketInterface.log_outsize_after_mins) {
        SocketInterface.total_bytes += JSON.stringify(data).length;
    }
    exchange_id = data[0];
    from_coin_id = data[1];
    to_coin_id = data[2];
    at = Math.floor(Date.now() / 1000); // used to be `at = data[3];` but streamer currently always sends 0
    price = data[4];
    volume = data[5];
    volume24_from = data[6];
    volume24_to = data[7];
    delta24 = data[8];
    high = data[9];
    low = data[10];
    from_to_pref_rate = data[11];

    if (SocketInterface.handlers['trades']['raw'] != undefined) {
        for (var ix in SocketInterface.handlers['trades']['raw']) {
            SocketInterface.handlers['trades']['raw'][ix]();
        }
    }
    for (sub in SocketInterface.handlers['trades']) {
        if (sub == '[' + from_coin_id + ',' + to_coin_id + ']') {
            for (var ix in SocketInterface.handlers['trades'][sub]) {
                SocketInterface.handlers['trades'][sub][ix]();
            }
        }
    }
}

SocketInterface.handle_avgprice = function(data) {
    if (SocketInterface.log_outsize_after_mins) {
        SocketInterface.total_bytes += JSON.stringify(data).length;
    }
    from_coin_id = data[0];
    to_coin_id = data[1];
    price = data[2];
    at = Math.floor(Date.now() / 1000); // used to be `at = data[3];` but streamer currently always sends 0
    delta24pct = data[4];
    volume24_from = data[5];
    volume24_to = data[6];
    current_supply = data[7];
    max_supply = data[8];
    desc = data[9];
    high24 = data[10];
    low24 = data[11];
    marketcap = data[12];
    from_to_pref_rate = data[13];
    pref_coin_id = data[14];
    total_volume24f = data[15];
    total_volume24t = data[16];
    total_volume1t = data[17];
    total_volume7t = data[18];
    total_volume30t = data[19];
    delta1pct = data[20];
    delta7pct = data[21];
    delta30pct = data[22];
    is_direct_pair = data[23];

    if (SocketInterface.handlers['avgprice']['raw'] != undefined) {
        for (var ix in SocketInterface.handlers['avgprice']['raw']) {
            SocketInterface.handlers['avgprice']['raw'][ix]();
        }
    }
    for (sub in SocketInterface.handlers['avgprice']) {
        if (sub == '[' + from_coin_id + ',' + to_coin_id + ']') {
            for (var ix in SocketInterface.handlers['avgprice'][sub]) {
                SocketInterface.handlers['avgprice'][sub][ix]();
            }
        }
    }
}

SocketInterface.handle_mktcap = function(data) {
    if (SocketInterface.log_outsize_after_mins) {
        SocketInterface.total_bytes += JSON.stringify(data).length;
    }
    total_market_cap = data[0];
    btc_market_cap = data[1];
    total_volume24 = data[2];

    if (SocketInterface.handlers['mktcap']['raw'] != undefined) {
        for (var ix in SocketInterface.handlers['mktcap']['raw']) {
            SocketInterface.handlers['mktcap']['raw'][ix]();
        }
    }
}

SocketInterface.heartbeat = function(type) {
    return; // disabled
    $.ajax({
        type: 'POST',
        url: '/hb',
        data: 'type=' + type + '&sid=' + SocketInterface.socket.io.engine.id + '&url=' + window.location.pathname,
        dataType: 'json'
    });
}