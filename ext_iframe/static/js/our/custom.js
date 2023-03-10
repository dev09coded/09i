function Settings() {}

Settings.init = function(prefShortSymbol) {
    Settings.prefShortSymbol = prefShortSymbol;
}

var coin_search_options = {
    source: [],
    autoSelect: true,
    afterSelect: function(item) {
        Generic.blockUI();
        if (item.symbol != '') {
            s = item.name.substr(0, item.name.indexOf('(') - 1); // no symbol
            top.location.href = '/coin/' + item.symbol + '/' + s.replace(/ /g, '+');
        } else {
            top.location.href = '/exchange/' + item.name.toLowerCase();
        }
    },
    highlighter: function(item) {
        return item;
    },
    sorter: function(items) {
        var symbolBegins = [];
        var nameBegins = [];
        var contains = [];
        var query = this.query.toLowerCase();
        var item;

        while ((item = items.shift())) {
            var symbol = item.symbol.toLowerCase();
            var name = item.name.toLowerCase();
            if (symbol.indexOf(query) == 0) {
                symbolBegins.push(item);
            } else if (name.indexOf(query) == 0) {
                nameBegins.push(item);
            } else {
                contains.push(item);
            }
        }

        return symbolBegins.concat(nameBegins, contains);
    }
}

function Selector_Cache() {
    var collection = {};

    function get_from_cache(selector) {
        if (undefined === collection[selector]) {
            collection[selector] = $(selector);
        }

        return collection[selector];
    }

    function invalidate() {
        collection = {};
    }

    return {
        get: get_from_cache,
        invalidate: invalidate
    };
}

var Generic = function() {

    var handlePrefCoin = function() {
        $('#pref_coin_id').change(function() {
            $('#pref_coin_id').attr('disabled', 'disabled');
            Generic.blockUI();
            $.ajax({
                type: 'POST',
                url: '/pref_coin_save',
                data: 'pref_coin_id=' + $(this).val(),
                dataType: 'json'
            }).done(function(data) {
                location.reload(true);
            }).fail(function($xhr) {
                Generic.unblockUI();
                $('#pref_coin_id').removeAttr('disabled');
                var data = $xhr.responseJSON;
                alertErr('.page-header', data.error);
            });
        });
    };

    var handleLights = function() {
        $('.lights').click(function() {
            var theme = '';
            if ($('body').hasClass('dark')) {
                theme = 'light';
                $('body').removeClass('dark')
            } else {
                theme = 'dark';
                $('body').addClass('dark')
            }
            $.ajax({
                type: 'POST',
                url: '/stars',
                data: 'theme=' + theme,
                dataType: 'json'
            });
        });
    };


    var handleStars = function() {
        $('body').on('click', '.star-add', function() {
            var classes = $(this).attr('class').split(' ');
            var coin_id = 0;
            for (var i = 0; i < classes.length; i++) {
                if (classes[i].match(/star-\d+/)) {
                    coin_id = classes[i].substring(5);
                    break;
                }
            }
            if (coin_id > 0) {
                Generic.add_star(coin_id);
            }
        });

        $('body').on('click', '.star-del', function() {
            classes = $(this).attr('class').split(' ');
            var coin_id = 0;
            for (var i = 0; i < classes.length; i++) {
                if (classes[i].match(/star-\d+/)) {
                    coin_id = classes[i].substring(5);
                    break;
                }
            }
            if (coin_id == 0) {
                return false;
            }
            var sel = '.star-' + coin_id;

            $(sel).removeClass('fa-star starred star-del');
            $(sel).addClass('fa-spin fa-spinner');

            $.ajax({
                type: 'POST',
                url: '/stars',
                data: 'del=' + coin_id,
                dataType: 'json'
            }).done(function(data) {
                $(sel).removeClass('fas fa-spin fa-spinner');
                $(sel).addClass('fal fa-star unstarred star-add');
                var tab = $('ul.nav.nav-tabs a.active').attr('href').substr(1);
                if (tab == 'starred') {
                    $('#starred').load(i18n.normalizeURL('/home_tab_load?tab=starred'), function() {
                        setTimeout(drawSmallCharts, 100); // make sure small charts are drawn later
                    });
                }
            }).fail(function($xhr) {
                $(sel).removeClass('fa-spin fa-spinner');
                $(sel).addClass('fa-star starred star-del');
            });
        });
    };

    var handleCoinList = function() {
        $('body').on('click', '.clickable-coin-td', function(e) {
            // if middle click, or control/command is pressed exit so we can open links in background tab
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf('MSIE') > 0;
            if (e.ctrlKey || e.metaKey || (!msie && e.button == 1) || (msie && e.button == 4)) {
                return;
            }

            var tr = $(this).parent('tr');
            if (window.self !== window.top) {
                var r = document.referrer.split('/');
                var source = 'unknown';
                if (r.length >= 3) {
                    var source = escape(r[2]);
                }
                window.top.location.href = tr.attr('coin_url') + '?utm_source=' + source + '&utm_medium=clwidget&utm_campaign=unknown';
            } else {
                window.location.href = tr.attr('coin_url');
            }
            tr.addClass('highlighted');
        });
    };

    var increaseVisitCounter = function() {
        if (Generic.jsCookies.hasItem('RVCW')) {
            rvcw = parseInt(Generic.jsCookies.getItem('RVCW'));
        } else {
            rvcw = 0;
        }
        now = Math.floor((new Date).getTime() / 1000);
        if (now > rvcw + 3600) {
            if (Generic.jsCookies.hasItem('RVC')) {
                rvc = parseInt(Generic.jsCookies.getItem('RVC'));
            } else {
                rvc = 0;
            }
            Generic.jsCookies.setItem('RVC', rvc + 1, Infinity, '/');
        }
        Generic.jsCookies.setItem('RVCW', now, Infinity, '/');
    };

    return {
        jsCookies: {
            getItem: function(sKey) {
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
            },
            setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                    return false;
                }
                var sExpires = "";
                if (vEnd) {
                    switch (vEnd.constructor) {
                        case Number:
                            sExpires = vEnd === Infinity ? "; expires=Wed, 31 Dec 2031 15:00:00 GMT" : "; max-age=" + vEnd;
                            break;
                        case String:
                            sExpires = "; expires=" + vEnd;
                            break;
                        case Date:
                            sExpires = "; expires=" + vEnd.toUTCString();
                            break;
                    }
                }
                document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                return true;
            },

            removeItem: function(sKey, sPath, sDomain) {
                if (!sKey || !this.hasItem(sKey)) {
                    return false;
                }
                document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
                return true;
            },
            hasItem: function(sKey) {
                return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
            }
        },

        showGenericMsg: function(title, body) {
            $('#generic-msg-title').html(title);
            $('#generic-msg-body').html(body);
            $('#modal_generic .modal-content').hide();
            $('#generic-msg-container').show();
            $('#modal_generic').modal('show');
        },

        init: function(searchable_items_version) {
            handlePrefCoin();
            handleLights();
            handleStars();
            handleCoinList();
            increaseVisitCounter();

            // init quick search
            $.get('/searchable_items_json?v=' + searchable_items_version, 'json', function(data) {
                coin_search_options.source = data;
                $('#top_search').typeahead(coin_search_options);

                // also take care of starred quick search
                // NOTE: this will alter coin_search_options
                if (typeof Homepage !== 'undefined') {
                    Homepage.handleStarredSearch();
                }
            });
            this.selector = new Selector_Cache();

            $('.selectpicker').on('loaded.bs.select', function(e) {
                // make searchcoin visible
                $('#top_search').css('visibility', 'visible');
            });
        },

        initNotifications: function(id) {
            if (Generic.jsCookies.hasItem('VC')) {
                vc = parseInt(Generic.jsCookies.getItem('VC'));
            } else {
                vc = 0;
            }
            if (vc < id) {
                // we have new notifs
                $('.notifications a span').addClass('indicator');
            }
            $('.notifications a').click(function() {
                Generic.jsCookies.setItem('VC', id, Infinity, '/');
                $('.notifications a span').removeClass('indicator');
            });
        },

        add_star: function(coin_id) {
            var sel = '.star-' + coin_id;
            $(sel).removeClass('fal fa-star star-add unstarred');
            $(sel).addClass('fas fa-spin fa-spinner');
            $.ajax({
                type: 'POST',
                url: '/stars',
                data: 'add=' + coin_id,
                dataType: 'json'
            }).done(function(data) {
                $(sel).removeClass('fa-spin fa-spinner');
                $(sel).addClass('fa-star starred star-del');
                var tab = $('ul.nav.nav-tabs a.active').attr('href').substr(1);
                if (tab == 'starred') {
                    $('#starred').load(i18n.normalizeURL('/home_tab_load?tab=starred'), function() {
                        $('#starred_search').focus();
                        setTimeout(drawSmallCharts, 100); // make sure small charts are drawn later
                    });
                }
            }).fail(function($xhr) {
                $(sel).removeClass('fas fa-spin fa-spinner');
                $(sel).addClass('fal fa-star star-add unstarred');
            });
        },

        blockUI: function(target) {
            var options = {
                message: '<i class="fal fa-spin fa-sync" style="font-size:20px; margin-top: 25px;"></i>',
                css: {
                    border: '1px solid gray',
                    padding: '10px 10px',
                    backgroundColor: '#fff',
                    width: '100px',
                    height: '100px'
                },
                overlayCSS: {
                    backgroundColor: '#555',
                    opacity: 0.5,
                    cursor: 'wait'
                }
            }
            if (target) {
                var el = $(target);
                el.block(options);
            } else {
                $.blockUI(options);
            }
        },

        unblockUI: function(target) {
            if (target) {
                $(target).unblock();
            } else {
                $.unblockUI();
            }
        },

        csrfAjax: function() {
            $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                if (originalOptions.type !== 'POST') {
                    return;
                }
                if (typeof originalOptions.data === 'string' || originalOptions.data instanceof String) {
                    var csrf = 'csrf_token=' + window.csrf['csrf_token'];
                    if (options.data.length > 0) {
                        options.data += '&' + csrf;
                    } else {
                        options.data = csrf;
                    }
                } else {
                    options.data = $.extend(originalOptions.data, window.csrf);
                    options.data = $.param(options.data);
                }
            });
        },

        checkCoinlibShare: function() {
            if (Generic.jsCookies.hasItem('RVC')) {
                rvc = parseInt(Generic.jsCookies.getItem('RVC'));
                var showit = false;
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    if (rvc == 40) {
                        showit = true;
                    }
                } else {
                    if (rvc == 10) {
                        showit = true;
                    }
                }
                if (showit) {
                    Generic.jsCookies.setItem('RVC', rvc + 1, Infinity, '/'); // make sure we won't show it again on refresh
                    Generic.showCoinlibShare();
                }
            }
        },

        showCoinlibShare: function() {
            $('#coinlib-needs-your-help').modal('show');
            $('#coinlib-needs-your-help-social').append('<script src="/static/js/lib/twitter-widgets.js"></script>');
            $('#coinlib-needs-your-help-social').append("<script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=141127902677496&autoLogAppEvents=1';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>");
            $('#coinlib-needs-your-help-social').append('<div class="fb-share-button float-left ml-2" style="margin-top: -1px;" data-href="https://coinlib.io" data-layout="button" data-size="small" data-mobile-iframe="false"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcoinlib.io%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>');
        },

    };

}();



/* Helpers */

function alertMsg(selector, msg) {
    clearCustomMessage(alertMsg.id);

    alertMsg.id = setTimeout(function() {
        clearCustomMessage(alertMsg.id);
        alertMsg.id = null;
    }, 7000);

    $(selector).append('<div id="custom_msg_' + alertMsg.id + '" class="alert alert-success mt-3 custom_msg" role="alert">' + msg + '</div>');
}

function alertErr(selector, msg) {
    clearCustomMessage(alertErr.id);

    alertErr.id = setTimeout(function() {
        clearCustomMessage(alertErr.id);
        alertErr.id = null;
    }, 7000);

    $(selector).append('<div id="custom_msg_' + alertErr.id + '" class="alert alert-danger mt-3 custom_msg" role="alert">' + msg + '</div>');
}

function clearCustomMessage(alertId) {
    if (alertId != null) {
        $('#custom_msg_' + alertId).remove();
        clearTimeout(alertId);
    }
}

function drawSmallCharts(skip_invisible) {
    skip_invisible = defaultFor(skip_invisible, false);
    var options = {
        chart: {
            type: 'area',
            backgroundColor: undefined,
            spacing: [0, 0, 0, 0], // otherwise it won't align nicely with text above it (home page - mobile)
        },
        plotOptions: {
            area: {
                lineWidth: 1,
                marker: {
                    enabled: false
                },
                animation: false,
                dataGrouping: {
                    enabled: true,
                },
            }
        },
        tooltip: {
            useHTML: true,
            formatter: function() {
                return Highcharts.dateFormat('%e %b %Y', this.x) + '<br>' + htmlDecode(Settings.prefShortSymbol) + format_price(this.point.y);
            },
            borderWidth: 1,
            padding: 2,
            valueDecimals: 2,
            hideDelay: 100,
        },
        credits: false,
        xAxis: {
            visible: false,
            type: 'datetime'
        },
        yAxis: [{
            visible: false,
            alignTicks: false,
            startOnTick: false,
            endOnTick: false
        }],
        title: {
            text: undefined
        },
        legend: false,
    };

    var first = true; // hack

    $('.small-chart').each(function() {
        if (skip_invisible && !$(this).is(':visible')) {
            return;
        }
        var opt = clone(options); // make a deep copy
        var data = $(this).attr('values').split(',').map(Number);

        opt.plotOptions.series = {
            pointStart: parseInt($(this).attr('date-start')) * 1000,
            pointInterval: parseInt($(this).attr('point-interval')),
        };
        if ($(this).width() < 120) {
            opt.tooltip.enabled = false;
            opt.plotOptions.series.states = {
                hover: {
                    enabled: false
                }
            };
        }
        if ($(this).attr('numberooltip') == '1') {
            opt.tooltip.formatter =
                function() {
                    return Highcharts.dateFormat('%e %b %Y', this.x) + '<br>' + format_price(this.point.y);
                };
        } else if (parseInt($(this).attr('point-interval')) <= 60 * 1000) {
            opt.tooltip.formatter =
                function() {
                    return Highcharts.dateFormat('%e %b %H:%M', this.x) + '<br>' + htmlDecode(Settings.prefShortSymbol) + format_price(this.point.y);
                };
        } else if (parseInt($(this).attr('point-interval')) < 24 * 60 * 60 * 1000) {
            opt.tooltip.formatter =
                function() {
                    return Highcharts.dateFormat('%e %b %H:00', this.x) + '<br>' + htmlDecode(Settings.prefShortSymbol) + format_price(this.point.y);
                };
        }
        opt.series = [{
            data: data,
            fillOpacity: 0.15,
            marker: {
                enabled: false
            },
            color: '#2ecc71',
            negativeColor: '#e74c3c',
            threshold: $(this).attr('threshold') == undefined ? data[0] : parseFloat($(this).attr('threshold'))
        }];
        opt.yAxis.plotLines = [{
            color: '#888888',
            width: 1,
            value: data[0]
        }];
        var ch = new Highcharts.Chart(this, opt);

        // Removing this makes the 1st chart in homepage smaller some times :/
        if (first) {
            ch.reflow();
            first = false;
        }
    });
    $('.small-live-chart').each(function() {
        var t = this;

        var interval = 10 * 60000; // 10 minutes
        if (parseInt($(this).attr('point-interval')) <= 60000) {
            interval = 3 * 60000; // 3 minutes if hourly
        }

        setTimeout(function() {
            setInterval(function() {
                update_chart(t)
            }, interval);
        }, Math.round(30000 + Math.random() * 30000));
    });
}

function update_small_charts() {
    // called when socket reconnects to refresh small live charts
    var i = 0;
    $('.small-live-chart').each(function() {
        var t = this;
        setTimeout(function() {
            update_chart(t);
        }, i * 1000); // max 1 update / sec
        i++;
    });
}

function update_chart(chart) {
    if (!$(chart).is(':visible')) {
        return;
    }
    $.ajax({
        type: 'GET',
        url: '/api/sc',
        data: 'fsym=' + $(chart).attr('fsym') + '&tsym=' + $(chart).attr('tsym') + '&days=' + $(chart).attr('days'),
        dataType: 'json'
    }).done(function(data) {
        var hc = $(chart).highcharts();
        if (!hc) {
            return;
        }
        data['data'] = data['data'].map(Number);
        hc.series[0].update({
            data: data['data'],
            threshold: data['data'][0],
            pointStart: new Date(data['date_start']).getTime()
        }, false);
        hc.yAxis[0].setExtremes(Math.min.apply(null, data['data']), Math.max.apply(null, data['data']), false);
        hc.redraw(); // only redraw once, the above functions better have redraw=false
    });
}

function update_value(element, new_value, colored, bolded) {
    var cl = '';
    var font_classes = '';
    var old_value = element.html();

    // we do this always to make sure new_value is HTML encoded ie euro symbol to &euro;, same spaces etc
    element.html(new_value);
    new_value = element.html();
    if (old_value) {
        old_value = old_value.replace(/&nbsp;/g, ' ');
    }
    if (new_value) {
        new_value = new_value.replace(/&nbsp;/g, ' ');
    }

    if (new_value != old_value) {
        element.html(new_value);
        if (old_value == '') return;
        var dimmed = element.hasClass('dimmed');
        if (new_value > old_value) {
            if (colored) {
                cl = 'up ';
                element.removeClass('dimmed');
            }
            if (bolded) cl += 'sbold ';
            if (bolded || colored) element.addClass(cl);
        } else if (new_value < old_value) {
            if (colored) {
                cl = 'down ';
                element.removeClass('dimmed');
            }
            if (bolded) cl += 'sbold ';
            if (bolded || colored) element.addClass(cl);
        }
        if (bolded || colored) setTimeout(function() {
            element.removeClass('up down sbold');
            if (dimmed) element.addClass('dimmed');
        }, 1500);
    }
}

function format_large_number(number, high_accuracy) {
    high_accuracy = defaultFor(high_accuracy, false);
    if (!$.isNumeric(number)) {
        return '0';
    }
    if (number <= 10000) {
        if (!high_accuracy) {
            return number.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(/\..*/g, '');
        } else {
            return format_price(number);
        }
    }
    if (number >= 1000000000000) {
        return (Math.round(number / 10000000000.0) / 100.0).toFixed(2) + '&nbsp;T';
    }
    if (number >= 1000000000) {
        return (Math.round(number / 10000000.0) / 100.0).toFixed(2) + '&nbsp;B';
    }
    if (number >= 1000000) {
        return (Math.round(number / 10000.0) / 100.0).toFixed(2) + '&nbsp;M';
    }
    if (number >= 10000) {
        return (Math.round(number / 10.0) / 100.0).toFixed(0) + 'K';
    }
}

function format_price(price, no_commas, extra_precision, no_decimals_after) {
    no_commas = defaultFor(no_commas, false);
    no_decimals_after = defaultFor(no_decimals_after, 100000);
    extra_precision = defaultFor(extra_precision, 0);
    if (!price) {
        return '0';
    }
    if (price < 0) {
        return '-' + format_price(-price, no_commas);
    }
    price = parseFloat(price);
    if (price > -1 && price < 1) {
        d = Math.ceil(-Math.log10(Math.abs(price)) + 2)
        if (d >= 5) d = 8; // if < 0.001 show 8 decimals
        decimals = (price % 1).toFixed(15);
        r = decimals.substring(0, d + 2 + extra_precision);
        if (extra_precision > 0) {
            return r.replace(/0+$/, '');
        }
        return r;
    }
    if (price > -10 && price < 10) {
        return price.toFixed(3);
    }
    if (price > no_decimals_after) {
        r = price.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(/\..*/g, '');
    } else {
        r = price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    if (no_commas) {
        r = r.replace(/,/g, '');
    }
    return r;
}

// This price is used in form fields (ie portfolio).
/*
    var tests = [
        [999.999998, "1000"],
        [999.99999, "999.99999"],
        [0.100000008, "0.100000008"],
        [0.100000001, "0.100000001"],
        [1.100000001, "1.1"],
        [0.1000000008, "0.1"],
        [1234.50002, "1234.50002"],
        [1234.500009, "1234.500009"],
        [1234567.50301, "1234567.503"],
        [1234567.50309, "1234567.5031"],
        [0.00000001, "0.00000001"],
        [0.000000001, "0.000000001"],
        [10.3729999999999, "10.373"],
        [0.99999999, "0.99999999"],
        [0.999999998, "1"],
        [110.99999999, "111"],
        [110.49999999, "110.5"],
    ];
    for (t of tests) {
        if (format_price_exact(t[0]) != t[1])
            console.log(t[0], t[1], format_price_exact(t[0]));
    }
*/
function format_price_exact(price) {
    if (!$.isNumeric(price)) {
        return 0;
    }
    price = parseFloat(price);
    if (price < 0) {
        return '-' + format_price_exact(-price);
    }

    whole_digits = price < 1 ? 0 : Math.floor(price).toString().length;
    fixed = price.toFixed(Math.max(8 - whole_digits, 4)); // round to up to 8 digits
    fixed = fixed.replace(/0+$/, '').replace(/\.$/, ''); // remove trailing zeroes

    d = (parseFloat(fixed) / price).toFixed(8);
    if (parseFloat(d) == 1) {
        return fixed;
    }

    if (price.toString().indexOf('e') == -1) {
        r = price.toString();
    } else {
        r = price.toFixed(20);
    }
    r = r.substring(0, whole_digits + 1 + 10); // 1 for the . and up to 10 precision
    r = r.replace(/0+$/, '').replace(/\.$/, ''); // remove trailing zeroes
    return r;
}

function filter_pie_data(data, pct_threshold) {
    pct_threshold = defaultFor(pct_threshold, 4);
    data.sort(function(a, b) {
        return b[1] - a[1];
    });
    var sum = 0;
    for (var ix = 0; ix < data.length; ++ix) {
        sum += data[ix][1];
    }
    var filtered_data = [];
    var other = 0;
    for (var ix = 0; ix < data.length; ++ix) {
        if (data[ix][1] * 100.0 / sum < pct_threshold) {
            other += data[ix][1];
        } else {
            filtered_data.push(data[ix]);
        }
    }
    if (other > 0) {
        filtered_data.push(['Other', other]);
    }
    return filtered_data;
}

function htmlDecode(value) {
    return $('<textarea/>').html(value).text();
}

function htmlEncode(value) {
    return $('<textarea/>').text(value).html();
}

function get_pie_chart(container, data, prefShortSymbol) {
    Highcharts.chart(container, {
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                        spacing: [10, 0, 10, 0]
                    },
                }
            }]
        },
        chart: {
            type: 'pie',
            backgroundColor: undefined,
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        tooltip: {
            useHTML: true,
            formatter: function() {
                return this.point.name + ': <b>' + htmlDecode(prefShortSymbol) + ' ' + format_large_number(this.point.y) + ' (' + (Math.round(this.point.percentage * 10) / 10) + '%)</b>';
            }
        },
        plotOptions: {
            pie: {
                minSize: 400,
                innerSize: 100,
                dataLabels: {
                    enabled: true,
                    distance: -40,
                    style: {
                        fontSize: '12px',
                        fontWeight: 'regular',
                        color: 'white',
                        textOutline: 0,
                    }
                },
            }
        },
        series: [{
            name: _t('Volume'),
            data: data
        }]
    });
}

function get_short_symbol(coin_id) {
    return window.ALL_COINS_ != undefined ? window.ALL_COINS_[coin_id] : '';
}

function defaultFor(arg, val) {
    return typeof arg !== 'undefined' ? arg : val;
}

// useless IE <=11
Math.log10 = Math.log10 || function(x) {
    return Math.log(x) * Math.LOG10E;
};

// return a deep copy of an item
function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' != typeof obj) {
        return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = clone(obj[attr]);
            }
        }
        return copy;
    }

    throw new Error('Unable to copy obj! Its type is not supported.');
}

function get_timestamp() {
    if (!Date.now) {
        Date.now = function() {
            return new Date().getTime();
        }
    }
    return Math.floor(Date.now() / 1000);
}

function get_percent(a, b, decimals, formatted, delta) {
    decimals = defaultFor(decimals, 2);
    formatted = defaultFor(formatted, false);
    delta = defaultFor(delta, true);
    if (b != 0) {
        p = (delta ? (parseFloat(a) - parseFloat(b)) : parseFloat(a)) * 100.0 / parseFloat(b);
        p = p.toFixed(decimals);
        if (parseFloat(p) == 0) {
            p = 0;
            p = p.toFixed(decimals);
        }
        if (formatted && p > 0) p = '+' + p;
        return p;
    }
    return 0;
}

function updateGraphCustomLabels(label, chart, prefShortSymbol, suffix, format_fn) {
    suffix = defaultFor(suffix, '');
    format_fn = defaultFor(format_fn, format_price);
    var last = undefined;
    var first = undefined;
    for (var ix = chart.series[0].points.length - 1; ix >= 0; ix--) {
        if (chart.series[0].points[ix] != undefined) {
            last = chart.series[0].points[ix].y;
            break;
        }
    }
    for (var ix = 0; ix < chart.series[0].points.length; ix++) {
        if (chart.series[0].points[ix] != undefined) {
            first = chart.series[0].points[ix].y;
            break;
        }
    }
    var pcnt = get_percent(last, first, 2, true);
    var low = Number.MAX_SAFE_INTEGER,
        high = 0;
    for (ix = 0; ix < chart.series[0].points.length; ix++) {
        if (chart.series[0].points[ix] != undefined) {
            var cur = chart.series[0].points[ix].y;
            low = Math.min(low, cur);
            high = Math.max(high, cur);
        }
    }
    var totalvolume = 0;
    for (var six = 0; six < chart.series.length; six++) {
        if (chart.series[six].options.id == 'mainvolume') {
            for (ix = 0; ix < chart.series[six].points.length; ix++) {
                if (chart.series[six].points[ix] != undefined) {
                    totalvolume += chart.series[six].points[ix].y;
                }
            }
        }
    }

    label.attr({
        text: '<div>&nbsp;<b>D</b>:<span style="color:#' + (pcnt > 0 ? '68db73' : 'ee5630') + ';">' + pcnt + '% &nbsp;</span><b>L/H</b>:' + format_fn(low) + suffix + ' / ' + format_fn(high) + suffix +
            ((totalvolume > 0) ?
                (' &nbsp;<b>V</b>:' + prefShortSymbol + format_large_number(totalvolume) + suffix) : '') +
            '</div>'
    });
}