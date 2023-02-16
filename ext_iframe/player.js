(function() {
    function Ga(a, b, e, g) {
        function l() {
            return function() {
                g() ? b && b() : e && e()
            }
        }

        function f(a) {
            return function() {
                a = a.splice(0, a.length);
                q(a).each(function() {
                    this()
                })
            }
        }

        function m() {
            var b = void 0;
            q(wb).each(function() {
                if (this.url === a) return b = this, !1
            });
            return b
        }(function() {
            if (g()) b && setTimeout(b, 1);
            else {
                var d = m();
                d ? d.runs.length ? d.runs.push(l()) : e && setTimeout(e, 1) : (d = [l()], wb.push({
                    url: a,
                    runs: d
                }), q.ajax({
                    dataType: "script",
                    cache: !0,
                    url: a
                }).always(f(d)))
            }
        })()
    }

    function ja(a, b, e, g, l) {
        var f = xa(l);
        if (g(f)) return b(f);
        g = l.ownerDocument;
        l = g.createElement("script");
        l.async = !0;
        l.src = a;
        l.onload = function() {
            b(f)
        };
        l.onerror = e;
        g.body.appendChild(l);
        return l
    }

    function xa(a) {
        a = a.ownerDocument;
        return a.defaultView || a.parentWindow
    }

    function da() {
        var a = window;
        try {
            for (; a !== a.parent && a.parent.document;) a = a.parent
        } catch (b) {}
        return a
    }

    function bb(a) {
        var b = null;
        try {
            for (;;) {
                var e = xa(b || a).frameElement;
                if (!e) break;
                b = e
            }
        } catch (g) {}
        return b
    }

    function cb(a, b, e, g, l) {
        function f(d) {
            var c = null;
            try {
                c = JSON.parse(d.data)
            } catch (n) {
                A.log("JSON.parse: " +
                    n);
                return
            }
            null !== c && c.id === b && (a.contentWindow ? (m.removeEventListener("message", f), g()) : l && "function" === typeof l && l())
        }
        if (function(a, b, n) {
                b = '\x3cscript type\x3d"text/javascript"\x3e(' + da + ')().postMessage(\'{"event": "ready", "id": "' + b + "\"}', '*');\x3c/script\x3e";
                a = a.contentWindow || a.contentDocument;
                a.document && (a = a.document);
                if (!a) return !1;
                a.write('\x3chtml lang\x3d"en"\x3e\x3chead\x3e\x3cmeta charset\x3d"UTF-8"\x3e\x3c/head\x3e\x3cbody style\x3d"margin:0;padding:0"\x3e' + (n || "") + b + "\x3c/body\x3e\x3c/html\x3e");
                a.close();
                return !0
            }(a, b, e)) {
            var m = da();
            m.addEventListener("message", f)
        } else l && "function" === typeof l && l()
    }

    function Pb(a, b, e, g) {
        if (b && b.fraudTag) {
            var l = q("\x3ciframe\x3e\x3c/iframe\x3e").hide()[0];
            q(a).append(l);
            cb(l, "" + Math.random(), null, function() {
                La(b.fraudTag, 0, 0, !1, e, b, function(a) {
                    var b = l.contentWindow;
                    b.apiPro = g;
                    q(b.document.body).append("\x3cdiv\x3e" + a + "\x3c/div\x3e")
                })
            })
        }
    }

    function xb(a) {
        function b(b) {
            A.log("isAutoplaySupported " + b);
            a(b);
            a = T;
            g.remove()
        }
        var e = !V,
            g = function() {
                var a = document.createElement("video");
                a.setAttribute("webkit-playsinline", "");
                a.setAttribute("playsinline", "");
                a.playing = !1;
                a.autoplay = !0;
                a.muted = !e;
                a.src = e ? Ma + "/player/video/t.mp4" : "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAATKbW9vdgAAAGxtdmhkAAAAANLEP5XSxD+VAAB1MAAAdU4AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACFpb2RzAAAAABCAgIAQAE////9//w6AgIAEAAAAAQAABDV0cmFrAAAAXHRraGQAAAAH0sQ/ldLEP5UAAAABAAAAAAAAdU4AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAoAAAAFoAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAHVOAAAH0gABAAAAAAOtbWRpYQAAACBtZGhkAAAAANLEP5XSxD+VAAB1MAAAdU5VxAAAAAAANmhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABMLVNNQVNIIFZpZGVvIEhhbmRsZXIAAAADT21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAw9zdGJsAAAAwXN0c2QAAAAAAAAAAQAAALFhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAoABaABIAAAASAAAAAAAAAABCkFWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAOGF2Y0MBZAAf/+EAHGdkAB+s2UCgL/lwFqCgoKgAAB9IAAdTAHjBjLABAAVo6+yyLP34+AAAAAATY29scm5jbHgABQAFAAUAAAAAEHBhc3AAAAABAAAAAQAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAAQBjdHRzAAAAAAAAAB4AAAABAAAH0gAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAB9IAAAAUc3RzcwAAAAAAAAABAAAAAQAAACpzZHRwAAAAAKaWlpqalpaampaWmpqWlpqalpaampaWmpqWlpqalgAAABxzdHNjAAAAAAAAAAEAAAABAAAAHgAAAAEAAACMc3RzegAAAAAAAAAAAAAAHgAAA5YAAAAVAAAAEwAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABRzdGNvAAAAAAAAAAEAAAT6AAAAGHNncGQBAAAAcm9sbAAAAAIAAAAAAAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAeAAAAAAAAAAhmcmVlAAAGC21kYXQAAAMfBgX///8b3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMTEgNzU5OTIxMCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTUgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0xMSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgc3RpdGNoYWJsZT0xIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PWluZmluaXRlIGtleWludF9taW49Mjkgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz0ycGFzcyBtYnRyZWU9MSBiaXRyYXRlPTExMiByYXRldG9sPTEuMCBxY29tcD0wLjYwIHFwbWluPTUgcXBtYXg9NjkgcXBzdGVwPTQgY3BseGJsdXI9MjAuMCBxYmx1cj0wLjUgdmJ2X21heHJhdGU9ODI1IHZidl9idWZzaXplPTkwMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAG9liIQAFf/+963fgU3DKzVrulc4tMurlDQ9UfaUpni2SAAAAwAAAwAAD/DNvp9RFdeXpgAAAwB+ABHAWYLWHUFwGoHeKCOoUwgBAAADAAADAAADAAADAAAHgvugkks0lyOD2SZ76WaUEkznLgAAFFEAAAARQZokbEFf/rUqgAAAAwAAHVAAAAAPQZ5CeIK/AAADAAADAA6ZAAAADwGeYXRBXwAAAwAAAwAOmAAAAA8BnmNqQV8AAAMAAAMADpkAAAAXQZpoSahBaJlMCCv//rUqgAAAAwAAHVEAAAARQZ6GRREsFf8AAAMAAAMADpkAAAAPAZ6ldEFfAAADAAADAA6ZAAAADwGep2pBXwAAAwAAAwAOmAAAABdBmqxJqEFsmUwIK//+tSqAAAADAAAdUAAAABFBnspFFSwV/wAAAwAAAwAOmQAAAA8Bnul0QV8AAAMAAAMADpgAAAAPAZ7rakFfAAADAAADAA6YAAAAF0Ga8EmoQWyZTAgr//61KoAAAAMAAB1RAAAAEUGfDkUVLBX/AAADAAADAA6ZAAAADwGfLXRBXwAAAwAAAwAOmQAAAA8Bny9qQV8AAAMAAAMADpgAAAAXQZs0SahBbJlMCCv//rUqgAAAAwAAHVAAAAARQZ9SRRUsFf8AAAMAAAMADpkAAAAPAZ9xdEFfAAADAAADAA6YAAAADwGfc2pBXwAAAwAAAwAOmAAAABdBm3hJqEFsmUwIK//+tSqAAAADAAAdUQAAABFBn5ZFFSwV/wAAAwAAAwAOmAAAAA8Bn7V0QV8AAAMAAAMADpkAAAAPAZ+3akFfAAADAAADAA6ZAAAAF0GbvEmoQWyZTAgr//61KoAAAAMAAB1QAAAAEUGf2kUVLBX/AAADAAADAA6ZAAAADwGf+XRBXwAAAwAAAwAOmAAAAA8Bn/tqQV8AAAMAAAMADpkAAAAXQZv9SahBbJlMCCv//rUqgAAAAwAAHVE\x3d";
                a.load();
                return a
            }(),
            l = g.play();
        void 0 !== l ? l.then(function() {
            b(!0)
        }).catch(function() {
            b(!1)
        }) : (g.play(), g.onplay = function() {
            b(!0)
        }, g.oncanplaythrough = function() {
            setTimeout(function() {
                b(!1)
            }, 50)
        });
        e && setTimeout(function() {
            a !== T && (A.log("isAutoplaySupported timeout"), g.pause(), b(!1))
        }, 1E3)
    }

    function Na(a, b, e) {
        b ? setTimeout(a, e || 0) : a()
    }

    function ka(a) {
        if (!Qb || !a || "string" !== typeof a || !Ha(a, "http://")) return a;
        A.log("checkProtocol replace for " + a);
        return "https" + a.substring(4, a.length)
    }

    function za(a, b) {
        if (!a ||
            "string" !== typeof a) return !1;
        a = a.toLowerCase();
        b = b.toLowerCase();
        return -1 !== a.indexOf(b) && a.length === a.indexOf(b) + b.length
    }

    function yb(a) {
        if (!a) return !0;
        a = a.toLowerCase();
        return "null" === a || "undefined" === a
    }

    function Rb(a, b) {
        a._pType || (a._pType = "df");
        a.muted = Oa(a.muted, !1);
        a.width && (a.width += "");
        a.type || (a.type = "inStream"); - 1 === ["inStream", "inPage", "inView", "inBanner"].indexOf(a.type) ? delete a.margin : a.margin || "inView" === a.type || "inPage" === a.type || (a.margin = "initial");
        "inApp" === a.type && (a._vType = "inApp",
            a.type = "inBanner", a.inApp = !0);
        "amp" === a._type && (delete a.margin, a._vType = "av", a.type = "rewarded");
        b || a.aspectratio || a.height || -1 === ["inStream", "inPage", "inBanner"].indexOf(a.type) || (a.height = 160);
        if (b) {
            delete a.soundByHover;
            delete a.aspectratio;
            delete a.videoCloseButton;
            delete a.margin;
            a.autoStart = !0;
            a.type = "inBanner";
            var e = !0
        }
        "inStream" === a.type && (e = !0);
        a.muted || delete a.soundByHover;
        if (a.file)
            if ("string" === typeof a.file && yb(a.file)) delete a.file;
            else {
                var g = Aa(a.file);
                a.file = a.autoStart || "string" !==
                    typeof g || -1 !== g.indexOf("#") || za(a.file, ".m3u8") || za(a.file, ".mpd") ? g : g.trim() + "#t\x3d0.1"
            }(function() {
                function g(a) {
                    if (a && a.types) {
                        var b = [],
                            c;
                        for (c in a.types)
                            if (a.types.hasOwnProperty(c)) {
                                var n = {
                                    type: a.types[c]
                                };
                                a.types[c] === ia.MID && (a.startOn && (n.startOn = a.startOn), a.startOnPercent && (n.startOnPercent = a.startOnPercent));
                                b.push(n)
                            }
                        return b
                    }
                }
                var f = a.advertising;
                f ? (b && (delete f.watermarkLink, delete f.watermarkIcon, delete f.controls), (!a.advertising.sticky || "inBanner" !== a.type && "inPage" !== a.type) &&
                    delete f.stickyCloseButton, f.breakSchedule || (f.breakSchedule = g(f.adBreakSchedule)), delete f.adBreakSchedule, f.tag && (q.isArray(f.tag) || (f.tag = [f.tag]), f.tag.forEach(function(a, b) {
                            "string" === typeof a && (f.tag[b] = {
                                url: a
                            })
                        }), f.tag = function() {
                            function b(b) {
                                if (!b.breakScheduleType) return b;
                                if (!b.breakScheduleType.length) return delete b.breakScheduleType, b;
                                if (f.breakSchedule) {
                                    var d = !1,
                                        n;
                                    for (n in b.breakScheduleType) b.breakScheduleType.hasOwnProperty(n) && -1 < q.inArray(b.breakScheduleType[n], c) && (d = b[b.breakScheduleType[n]] = !0);
                                    d && "inStream" !== a.type && (a.forceFile = !0);
                                    return d && b
                                }
                                if (-1 < q.inArray(ia.PRE, b.breakScheduleType)) return b[ia.PRE] = !0, delete b.breakScheduleType, b
                            }
                            var d = [],
                                c = [];
                            f.breakSchedule && f.breakSchedule.forEach(function(a) {
                                c.push(a.type)
                            });
                            f.tag.forEach(function(a) {
                                (a = b(a)) && d.push(a)
                            });
                            return d
                        }(), f.tag = function() {
                            return f.tag.filter(function(a) {
                                var b = a.platform;
                                return (void 0 === b || V && "mobile" === b || !V && "desktop" === b) && !Pa(a.vtId, a)
                            })
                        }(), f.bestTimeout = Oa(f.bestTimeout, 2E3), f.requestTimeout = f.requestTimeout ||
                        (e ? 2E3 : 1 === f.tag.length ? 3E4 : 1E4), f.creativeTimeout = f.creativeTimeout || (e ? 5E3 : 1 === f.tag.length ? 3E4 : 1E4))) : a.advertising = {}
            })()
    }

    function Oa(a, b) {
        return void 0 === a ? b : a
    }

    function Sb(a, b, e) {
        return a ? void 0 === a[b] ? e : a[b] : e
    }

    function Qa(a) {
        if (!a || 1 > a) return "00:00";
        a = Math.floor(a);
        for (var b = "", e = 0; 3 > e && (0 !== a || 2 !== e); e++) {
            var g = a % 60;
            b = (9 < g ? g : "0" + g) + (b ? ":" + b : b);
            if (0 === a) break;
            a = (a - g) / 60
        }
        return b
    }

    function Ba(a) {
        return !0 === a || "true" === a
    }

    function db(a, b) {
        a.attr("data-hidden", !b)
    }

    function zb(a, b) {
        if (!a) return "";
        var e = a.copyright,
            g = e && e.playbackIcon ? e.playbackIcon : a.watermarkIcon;
        e = e && e.playbackLink ? e.playbackLink : a.watermarkLink;
        var l = g ? '\x3cimg src\x3d"' + g + '" /\x3e' : eb || b ? "" : "Advertisement";
        return l ? e ? '\x3ca href\x3d"' + e + '" class\x3d"orp-control orp-title" style\x3d"display: none" target\x3d"_blank"\x3e' + l + "\x3c/a\x3e" : '\x3cdiv class\x3d"orp-control orp-title ' + (g ? "" : "orp-title-text") + '" style\x3d"display: none"\x3e' + l + "\x3c/div\x3e" : ""
    }

    function Ab(a, b, e) {
        try {
            if (b)(100 > b.width() || 100 > b.height()) && A.log("init element is small");
            else {
                var g = q(a).closest("body");
                a ? q(a).closest("html").length ? g.length ? q(a).is(":hidden") && A.log("init element is hidden", e) : A.initError(a, "element not in body", e) : A.initError(a, "element not in html", e) : A.initError(a, "element is null", e)
            }
        } catch (l) {
            A.log(l)
        }
    }

    function Tb(a) {
        try {
            var b = Ca(a.url);
            b && b !== Ca(Ra()) && A.log("init element invalid domain " + b)
        } catch (e) {
            A.log(e)
        }
    }

    function Aa(a) {
        return a && "string" === typeof a && Ha(a.trim(), "{") ? JSON.parse(a.trim()) : a
    }

    function fb(a, b, e) {
        var g = q("\x3cdiv\x3e\x3c/div\x3e");
        g.attr("data-id", b);
        a = q(a);
        e && !a.is("body") ? a.after(g) : a.append(g);
        return g.get(0)
    }

    function Sa() {
        try {
            return localStorage.getItem(""), !0
        } catch (a) {
            return !1
        }
    }

    function gb(a, b) {
        return function() {
            try {
                return a.apply(this, arguments)
            } catch (e) {
                try {
                    b && console.error(e)
                } catch (g) {}
            }
        }
    }

    function hb(a, b, e, g, l) {
        function f(c) {
            var n = c.pageX;
            void 0 === n && c.originalEvent.touches && (n = c.originalEvent.touches[0].pageX);
            d = n - a.offset().left;
            d /= a.width();
            d = 1 < d ? 1 : 0 > d ? 0 : d;
            b.width(100 * d + "%");
            g && g(d)
        }
        var m = q(a.get(0).ownerDocument),
            d = 0,
            c = !1;
        if (e || g) {
            var n = !1;
            a.on("mousedown touchstart", function(a) {
                function b() {
                    m.off("mousemove touchmove", f).off("mouseup touchend", b);
                    l && l(d);
                    n = !1
                }
                c || n || (n = !0, e && e(), m.on("mousemove touchmove", f).on("mouseup touchend", b), f(a))
            });
            return function(a) {
                c = a
            }
        }
        a.mouseenter(function() {
            a.on("mousemove touchmove", f)
        }).mouseleave(function() {
            a.off("mousemove touchmove", f);
            b.width(0)
        })
    }

    function Ra() {
        return Ub(function() {
            if (window.top !== window) {
                try {
                    return window.top.location.href
                } catch (b) {}
                var a = da().document.referrer;
                if (Ca(a)) return a
            }
            return window.location.href
        }())
    }

    function T() {}

    function La(a, b, e, g, l, f, m) {
        function d(b, d, f) {
            d = d || "";
            !f && d && (d = encodeURIComponent(d));
            a = a.replace(b, d || "")
        }
        l = Ra();
        d(/\$\$REFERER\$\$/g, l);
        d(/\$\$REFERER_DOMAIN\$\$/g, Ca(l));
        d(/\$\$REFERER_PAGE\$\$/g, function() {
            try {
                var a = window.top.document.referrer;
                if (Ca(a)) return a
            } catch (n) {}
            return ""
        }());
        d(/\$\$CLIENT_USER_AGENT\$\$/g, navigator.userAgent);
        d(/\$\$RANDOM\$\$/g, Math.random(), !0);
        d(/\$\$RANDOM_10\$\$/g, Math.floor(9E9 * Math.random() + 1E9), !0);
        d(/\$\$HEIGHT\$\$/g, b, !0);
        d(/\$\$WIDTH\$\$/g, e, !0);
        f && d(/\$\$PLACEMENT_ID\$\$/g, f[fa], !0);
        g && (d(/\$\$APP_LAT\$\$/g, g.appLat), d(/\$\$APP_LON\$\$/g, g.appLon), d(/\$\$DNT\$\$/g, g.dnt), d(/\$\$APP_BUNDLE\$\$/g, g.appBundle), d(/\$\$APP_NAME\$\$/g, g.appName), d(/\$\$APP_STORE_URL\$\$/g, g.appStoreUrl), d(/\$\$APP_VERSION\$\$/g, g.appVersion), d(/\$\$DEVICE_ID\$\$/g, g.deviceId), d(/\$\$DEVICE_MAKE\$\$/g, g.deviceMake), Bb(g, function(a, b) {
            d(new RegExp("\\$\\$" + a + "\\$\\$", "g"), b)
        }));
        (function() {
            var b = 0,
                n = function() {
                    b--
                };
            (function() {
                function c(a, b) {
                    var c = !1,
                        p = "";
                    b && (c = a.gdprApplies || a.isUserInEu, p = a.tcString || a.consentData);
                    d(/\$\$GDPR\$\$/g, c ? "1" : "0");
                    d(/\$\$GDPR_CONSENT\$\$/g, p);
                    n()
                }
                if (-1 !== a.indexOf("$$GDPR$$") || -1 !== a.indexOf("$$GDPR_CONSENT$$")) b++, Ta("__tcfapi", "getTCData", 2, c) || Ta("__cmp", "getConsentData", null, c) || c()
            })();
            (function() {
                function c(a, b) {
                    var c = "1---";
                    b && (c = a.uspString);
                    d(/\$\$CCPA\$\$/g, c);
                    n()
                } - 1 !== a.indexOf("$$CCPA$$") && (b++, Ta("__uspapi", "getUSPData", 1, c) || c())
            })();
            0 === b ? m(a) : n = function() {
                0 ===
                    --b && m(a)
            }
        })()
    }

    function Ta(a, b, e, g, l) {
        function f() {
            for (var c = window; c;) {
                try {
                    if (c[a]) return d("find"), c[a](b, e, g), !0;
                    if (c.frames[a + "Locator"]) return d("find Locator"), m(c), !0
                } catch (w) {
                    console.log(w), g()
                }
                if (c === window.top) break;
                c = c.parent
            }
        }

        function m(d) {
            var n = a + Math.random();
            c = function(b) {
                var c = {};
                try {
                    c = "string" === typeof b.data ? JSON.parse(b.data) : b.data
                } catch (E) {}(b = c[a + "Return"]) && b.callId === n && g(b.returnValue, b.success)
            };
            window.addEventListener("message", c, !1);
            var p = {};
            p[a + "Call"] = {
                command: b,
                parameter: l,
                version: e,
                callId: n
            };
            d.postMessage(p, "*")
        }

        function d(b) {
            A.log("cmp " + a + " " + b)
        }
        var c, n = g,
            t;
        g = function(a, b) {
            d("callback " + b);
            n(a, b);
            n = T;
            t && clearTimeout(t);
            t = 0;
            c && removeEventListener("message", c)
        };
        return function() {
            if (!f()) return !1;
            t = setTimeout(function() {
                d("timeout");
                g()
            }, 1E3);
            return !0
        }()
    }

    function Vb(a) {
        var b = {};
        a && Bb(a, function(a, g) {
            b[a] = g
        });
        return b
    }

    function Bb(a, b) {
        for (var e in a) a.hasOwnProperty(e) && Ha(e, "C_") && b(e, a[e])
    }

    function na(a) {
        var b;
        a || (a = 0);
        if ("number" === typeof a) {
            if (b = Da[a]) return b.getApi()
        } else if ("string" ===
            typeof a && (a = document.getElementById(a)), Ab(a), a) {
            for (var e in Da)
                if ((b = Da[e]) && b instanceof Ua && b.getElement().parentElement === a) return b.getApi();
            b = new Ua(function(a) {
                var b = document.createElement("div");
                b.classList.add("orp-player-wrapper");
                a.appendChild(b);
                return b
            }(a), function() {
                Da[g] = null
            }, a.id, !1);
            new Cb(b);
            Da.push(b);
            var g = Da.length - 1;
            return b.getApi()
        }
    }

    function Ua(a, b, e, g) {
        function l(a, b) {
            function c() {
                u || (u = !0, V || Ea ? (p.initAdPlayer(), setTimeout(function() {
                    t.trigger(y.beforePlay)
                }, 1)) : t.trigger(y.beforePlay))
            }
            if (!1 === a) {
                L.trigger(y.showAd);
                if (b) q(da()).one("touchstart", c);
                q(t.getWrapper()).one("click", c)
            } else t.trigger(y.beforePlay)
        }

        function f() {
            x || (x = !0, L.trigger(y.startLoad, n))
        }

        function m(a) {
            var b = O("dotceIesarPtlecnmenrIf"),
                c = O("gTafVjIrg7k-gQDSkaswT9pRMVr8o6t_jC0hXe-smR-TJxfq5Ngp");
            c && c !== b || (c = e);
            c = a[fa] || c;
            a.advertising[fa] = c
        }

        function d() {
            A.event(A.types.init, n.advertising, "", function() {
                C = !0
            })
        }
        var c = this,
            n, t, p, w, v, x = !1,
            u = !1,
            E = !1,
            C = !1,
            P, L = new Va;
        this.d = function() {
            return C
        };
        this.inStream = function() {
            return E
        };
        this.getAdController = function() {
            return p
        };
        this.getSizeController = function() {
            return w
        };
        this.setDisableResizeAd = function(a) {};
        this.on = L.on;
        this.one = L.one;
        this.trigger = L.trigger;
        this.destroy = function() {
            P = !0;
            w && w.off();
            t && t.destroy()
        };
        this.getElement = function() {
            return a
        };
        this.isAdapter = function() {
            return g
        };
        var F = new function() {
            this.setup = function(b) {
                function g(a, b) {
                    var c = "data-player-orp-" + (b ? "e" : "i");
                    q("style[" + c + "]", a).get(0) || (c = '\x3cstyle type\x3d"text/css" ' + c + "\x3e" + (b ? "/*basic in-view styles (ivm \x3d in-view mode) */ [class*\x3d'orp-player-ivm-'] { position: fixed !important; box-shadow: 0 0 10px rgba(0,0,0,0.3); transition: left 0.4s 0s linear, right 0.4s 0s linear, top 0.4s 0s linear, bottom 0.4s 0s linear; z-index: 9999; opacity: 0; max-width: 100%; } .orp-player-ipm [class*\x3d'orp-player-ivm-'] { transition: none !important; opacity: 1; position: fixed !important; padding: 0 !important; } .orp-player-ipm.orp-went-sticky .orp-light-player-wrapper { transition: none !important; } .orp-player-ipm [class*\x3d'orp-player-ivm-'].orp-js-positioned-sticky { position: absolute !important; /*fix controls hiding when some parent transformed*/ } /*in-view player positioning:*/ /*top*/ .orp-player-ivm-TL {top: 20px; left: 20px; opacity: 1;} .orp-player-ivm-TC {top: 20px; left: 50vw; opacity: 1; transform: translateX(-50%);} .orp-player-ivm-TR {top: 20px; right: 20px; opacity: 1;} /*mid*/ .orp-player-ivm-ML {left: 20px; top: 0; bottom: 0; margin: auto; opacity: 1;} .orp-player-ivm-MR {right: 20px; top: 0; bottom: 0; margin: auto; opacity: 1;} /*bottom*/ .orp-player-ivm-BL {bottom: 20px; left: 20px; opacity: 1;} .orp-player-ivm-BC {bottom: 20px; left: 50vw; opacity: 1; transform: translateX(-50%);} .orp-player-ivm-BR {bottom: 20px; right: 20px; opacity: 1;} /*hidden in-view player*/ .orp-player-ivm-hidden.orp-player-ivm-TL, .orp-player-ivm-hidden.orp-player-ivm-ML, .orp-player-ivm-hidden.orp-player-ivm-BL {left: -100%; right: auto;} .orp-player-ivm-hidden.orp-player-ivm-TR, .orp-player-ivm-hidden.orp-player-ivm-MR, .orp-player-ivm-hidden.orp-player-ivm-BR {right: -100%; left: auto;} .orp-player-ivm-hidden.orp-player-ivm-TC {top: -100%;} .orp-player-ivm-hidden.orp-player-ivm-BC {bottom: -150%;} /*hidden in-page player*/ /* rewarded type (based on in-view type) */ .orp-player-rewarded { width: 100% !important; height: 100% !important; margin: auto; position: fixed !important; top: 0; left: 0; right: 0; bottom: 0; box-shadow: 0 0 10px rgba(0,0,0,0.3); transition: all 0.2s 0s; z-index: 9999; max-width: 100%; } .orp-player-ivm-hidden.orp-player-rewarded { top: -100%; bottom: auto; } .orp-player-ipm { transition: height 0.5s 0s, margin-top 0.5s 0s, margin-bottom 0.5s 0s; margin: 0 auto; display: block; } .orp-player-ipm-hidden, .orp-player-ipm-hidden .orp-player-iframe { height: 0 !important; opacity: 0; } .orp-player-ipm-hidden.orp-aspectRateFixed .orp-light-player-wrapper { padding-bottom: 1px !important; } .orp-player-ipm-hidden { margin: 0 !important; } .orp-player-wrapper:not(.orp-aspectRateFixed) { height: 100%; } .orp-light-player-wrapper { width: 100%; height: 100%; } .orp-aspectRateFixed .orp-light-player-wrapper { position: relative; height: 0; transition: padding 0.5s 0s; } .orp-player-iframe .orp-light-player-wrapper { height: 100%; } .orp-player-iframe { position: absolute; left: 0; top: 0; width: 100%; height: 100%; } .orp-player-ipm-hidden.orp-proReady .orp-player-iframe, .orp-player-ivm-hidden.orp-proReady .orp-player-iframe { height: 100px !important; width: 100px !important; position: fixed; bottom: 0; right: 0; opacity: 0; transition-duration: 0s; } /*XS screen styles*/ @media (max-width: 768px) { .orp-player-ivm-TL, .orp-player-ivm-ML, .orp-player-ivm-BL {left: 0;} .orp-player-ivm-TR, .orp-player-ivm-MR, .orp-player-ivm-BR {right: 0;} } /*copy styles for default banner */ .orp-close { position: absolute; width: 19px; height: 19px; right: 19px; top: 20px; opacity: 0.5; cursor: pointer; z-index: 3; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTkgMTkiPjx0aXRsZT5BcnRib2FyZCAxPC90aXRsZT48cG9seWdvbiBwb2ludHM9IjE3IDQgMTUgMiA5LjUgNy41IDQgMiAyIDQgNy41IDkuNSAyIDE1IDQgMTcgOS41IDExLjUgMTUgMTcgMTcgMTUgMTEuNSA5LjUgMTcgNCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNSwybDIsMkwxMS41LDkuNSwxNywxNWwtMiwyTDkuNSwxMS41LDQsMTcsMiwxNSw3LjUsOS41LDIsNCw0LDIsOS41LDcuNSwxNSwybTAtMWExLDEsMCwwLDAtLjcxLjI5TDkuNSw2LjA5LDQuNzEsMS4yOWExLDEsMCwwLDAtMS40MiwwbC0yLDJhMSwxLDAsMCwwLDAsMS40Mkw2LjA5LDkuNWwtNC44LDQuNzlhMSwxLDAsMCwwLDAsMS40MmwyLDJhMSwxLDAsMCwwLDEuNDIsMGw0Ljc5LTQuOCw0Ljc5LDQuOGExLDEsMCwwLDAsMS40MiwwbDItMmExLDEsMCwwLDAsMC0xLjQyTDEyLjkxLDkuNWw0LjgtNC43OWExLDEsMCwwLDAsMC0xLjQybC0yLTJBMSwxLDAsMCwwLDE1LDFaIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4\x3d') no-repeat 0 0; background-size: contain; } .orp-defaultTag { text-align: center; background-color: #d9d9d9; overflow: hidden; } .orp-defaultTag.orp-rel { position: relative; } .orp-defaultTag img { max-height: 100%; max-width: 100%; } .orp-defaultTag.orp-aspectRateFixed, .orp-defaultTag.orp-aspectRateFixed * { max-height: 600px; transition: all 0.3s 0s; } .orp-defaultTag .orp-close { background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOSAxOS4wNCI+PHBhdGggZD0iTTE3IDRsLTItMi01LjUgNS41TDQgMiAyIDRsNS41IDUuNUwyIDE1bDIgMiA1LjUtNS41TDE1IDE3bDItMi01LjUtNS41TDE3IDR6IiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg\x3d\x3d'); } .orp-defaultTag .orp-close:hover { opacity: 1; } /*iPhone 4-5 screen styles*/ @media (max-width: 320px) { .orp-player-ipm, .orp-player-ipm .orp-player-iframe { transition: height 0s; } .orp-aspectRateFixed .orp-light-player-wrapper { position: relative; height: 0; transition: padding 0s; } } .orp-force-hide-player { overflow: hidden; position: relative; transition-timing-function: linear; transition-duration: 0.3s; margin-top: 0 !important; margin-bottom: 0 !important; } .orp-force-hide-player:before { content: ' '; display: block; height: 1px; background: #fff; } .orp-force-hide-player:not(.orp-defaultTag) { background: #000000; } .orp-force-hide-player:not(.orp-aspectRateFixed) { height: 0 !important; } .orp-force-hide-player.orp-aspectRateFixed .orp-light-player-wrapper { padding-bottom: 0 !important; transition: padding 0.5s 0s !important; } .orp-force-hide-player.orp-went-sticky .orp-light-player-wrapper { height: 0 !important; } .orp-force-hide-player.orp-went-sticky .orp-fkstck { transition: padding 0.2s 0s; padding-bottom: 0 !important; } .orp-force-hide-player.orp-aspectRateFixed.orp-defaultTag, .orp-force-hide-player.orp-aspectRateFixed.orp-defaultTag * { max-height: 0; padding: 0; } [data-hidden\x3d'true'] { height: 0 !important; overflow: hidden; } [class*\x3d'orp-player-ivm-'].orp-defaultTag.orp-force-hide-player { display: none; } .orp-powered { position: absolute; right: 20px; bottom: 10px; opacity: 0.8; z-index: 3; display: inline-block; text-decoration: none; } .orp-powered:before { /*vertical align helper*/ content: ''; display: inline-block; vertical-align: middle; height: 100%; width: 0; } div.orp-powered, div.orp-powered * { cursor: default !important; } .orp-powered span { font-size: 12px; color: #000; display: inline-block; vertical-align: middle; line-height: 100%; padding-right: 5px; font-family: Arial, sans-serif; } .orp-powered img { max-width: 200px; max-height: 90px; display: inline-block; vertical-align: middle; line-height: 100%; } .orp-notMobile a.orp-powered:hover { opacity: 1; text-shadow: 0 0 1px rgba(0,0,0,0.2); }" :
                            ".orp-light-player-wrapper { position: relative; width: 100%; height: 100%; background: #000; text-align: center; user-select: none; /*min-width: 250px;*/ max-width: 100%; } .orp-light-player-wrapper * { -webkit-tap-highlight-color: rgba(0,0,0,0); font-family: Arial, sans-serif !important; } .orp-light-player-wrapper .orp-lp-holder { height: 100%; /*display: inline-block;*/ /*line-height: 1px;*/ position: relative; overflow: hidden; /*min-width: 250px;*/ max-width: 100%; outline: none !important; } .orp-defaultTag { text-align: center; background-color: #d9d9d9; overflow: hidden; } .orp-defaultTag.orp-rel { position: relative; } .orp-defaultTag img { max-height: 100%; max-width: 100%; } .orp-full-screened.orp-lp-holder { position: fixed; width: 100%; height: 100%; top: 0; bottom: 0; left: 0; right: 0; background: #000; } .orp-lp-holder .orp-error-block { position: absolute; display: none; width: 100%; height: 100%; left: 0; top: 0; color: #fff; background: -moz-linear-gradient(top, #121212 0%, #181818 100%); background: -webkit-linear-gradient(top, #121212 0%,#181818 100%); background: linear-gradient(to bottom, #121212 0%, #181818 100%); z-index: 5; vertical-align: middle; } .orp-lp-holder .orp-error-block span { vertical-align: middle; line-height: normal; font-size: 16px; font-weight: bold; color: #efefef; } .orp-lp-holder .orp-error-block:before { content: ''; display: inline-block; vertical-align: middle; height: 100%; width: 0; } .orp-lp-holder.orp-error .orp-error-block { display: block; } .orp-lp-holder.orp-fit-fill video { object-fit: fill; } .orp-light-player-wrapper video { top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; max-width: 100%; max-height: 100%; margin: auto; position: relative; } .orp-lp-controls-wrapper { position: absolute; width: 100%; height: 100%; top: 0; left: 0; } .orp-lp-controls-wrapper .orp-lp-controls-wrapper { /*for wrapper*/ width: auto; max-width: 100%; height: 100%; } .orp-light-player-wrapper .orp-ctrls { position: absolute; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; z-index: 2; background: rgba(0,0,0,0.6); margin: auto; box-sizing: border-box; transition: opacity 0.2s; } .orp-isHiddenControls.orp-isPlaying .orp-ctrls, .orp-isInit .orp-c-close { opacity: 0; z-index: -1; } .orp-isHiddenControls.orp-isPlaying .orp-sliderInUse .orp-ctrls { opacity: 1; z-index: 2; } .orp-isHiddenControls.orp-full-screened, .orp-isHiddenControls.orp-full-screened * { cursor: none !important; } .orp-isHiddenControls.orp-full-screened .orp-vast-blocker { cursor: default !important; } .orp-isHiddenControls.orp-full-screened .orp-vast-skip-button { cursor: pointer !important; } .orp-light-player-wrapper .orp-ctrl { color: #dddddc; position: absolute; } .orp-ctrl.orp-c-play-big { display: none; } .orp-ctrl.orp-c-play { width: 64px; height: 64px; border-radius: 32px; left: 50%; margin-left: -32px; top: 50%; margin-top: -32px; background-color: rgba(0,0,0,0.5); } .orp-ctrl.orp-c-play:before { content: ''; position: absolute; width: 21px; height: 24px; top: 50%; margin-top: -12px; left: 50%; margin-left: -10px; } .orp-isPlaying .orp-ctrl.orp-c-play:before { width: 25px; height: 21px; margin-top: -11px; margin-left: -12px; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjMgMjYiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNOSAyM0gzVjNoNnpNMjAgM2gtNnYyMGg2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik05IDN2MjBIM1YzaDZtMC0xSDNhMSAxIDAgMCAwLTEgMXYyMGExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVYzYTEgMSAwIDAgMC0xLTF6bTExIDF2MjBoLTZWM2g2bTAtMWgtNmExIDEgMCAwIDAtMSAxdjIwYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjNhMSAxIDAgMCAwLTEtMXoiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyM3YyNkgweiIvPjwvZz48L2c+PC9zdmc+') no-repeat center center; background-size: contain; } .orp-ctrl.orp-c-next { display: none; width: 80px; height: 80px; border-radius: 40px; top: 50%; margin-top: -40px; left: auto; margin-left: 0; right: 25%; margin-right: -40px; } .orp-ctrl.orp-c-next:before { content: ''; position: absolute; width: 22px; height: 22px; top: 50%; margin-top: -11px; left: 50%; margin-left: -11px; } .orp-ctrl.orp-c-next:before, .orp-vast-skip-button:before { background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7ZmlsbDpub25lO30uY2xzLTN7b3BhY2l0eTowLjE7fS5jbHMtNHtvcGFjaXR5OjAuMTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmljb24tbmV4dC12MzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjE2IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjYgMTggMTQgMTIgNiA2IDYgMTgiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02LDZsOCw2TDYsMThWNk02LDVhLjkxLjkxLDAsMCwwLS40NS4xMUExLDEsMCwwLDAsNSw2VjE4YTEsMSwwLDAsMCwuNTUuODlBLjkxLjkxLDAsMCwwLDYsMTlhMSwxLDAsMCwwLC42LS4ybDgtNmExLDEsMCwwLDAsMC0xLjZsLTgtNkExLDEsMCwwLDAsNiw1WiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTYiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjEyIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTguMTQsNUgxNS44NmEuODIuODIsMCwwLDAtLjg2Ljc4VjE4LjIyYS44Mi44MiwwLDAsMCwuODYuNzhoMi4yOGEuODIuODIsMCwwLDAsLjg2LS43OFY1Ljc4QS44Mi44MiwwLDAsMCwxOC4xNCw1WiIvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTggNiAxOCAxOCAxNiAxOCAxNiA2IDE4IDYiLz48L2c+PC9nPjwvc3ZnPg\x3d\x3d') no-repeat 0 0; background-size: contain; } .orp-light-player-wrapper .orp-ctrls { height: 70px; padding: 28px 15px 0; background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%); background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%); } div.orp-isInit .orp-lp-holder .orp-ctrls, div.orp-isInit .orp-lp-holder .orp-c-play-big { display: none; } .orp-ctrls:after { content: ''; display: block; height: 0; float: none; clear: both; } .orp-ctrls .orp-ctrl { width: 36px; height: 36px; line-height: 36px; position: relative; float: left; border-radius: 18px; background: none; margin: 0 6px; left: auto; right: auto; top: auto; font-size: 11px; color: #fff; font-weight: bold; opacity: 0.85; cursor: pointer; transition: all 0.2s; } .orp-ctrls .orp-ctrl.orp-isSelected, .orp-ctrls .orp-ctrl.orp-isSelected .orp-ctrl, .orp-ctrls .orp-ctrl:hover { opacity: 1; } .orp-ctrl.orp-c-screen, .orp-ctrl.orp-c-settings { float: right; } .orp-ctrl.orp-c-progress-bg { position: absolute; height: 15px; left: 15px; right: 15px; bottom: 43px; z-index: 1; width: auto; background: none; cursor: pointer; opacity: 1 !important; touch-action: none; } .orp-c-progress-bg:before, .orp-c-progress-cache, .orp-c-progress-curr, .orp-c-progress-hover { content: ''; width: 100%; max-width: 100% !important; height: 3px; left: 0; top: 6px; border-radius: 1px; position: absolute; background-color: rgba(255,255,255,0.1); } .orp-c-progress-bg:hover:before, .orp-c-progress-bg:hover .orp-c-progress-cache, .orp-c-progress-bg:hover .orp-c-progress-curr, .orp-c-progress-bg:hover .orp-c-progress-hover { height: 5px; top: 5px; border-radius: 2px; } .orp-c-progress-cache { z-index: 2; background-color: rgba(255,255,255,0.15); width: 0; } .orp-c-progress-curr { z-index: 5; background-color: rgb(46, 149, 255); width: 0; } .orp-c-progress-curr:after { content: ''; position: absolute; width: 0; height: 0; right: 0; top: 0; background-color: #3686d0; z-index: 10; transition: all 0.2s 0s; } .orp-c-progress-bg:hover .orp-c-progress-curr { background-color: rgba(46, 149, 255, 0.76); } .orp-c-progress-bg:hover .orp-c-progress-curr:after { width: 11px; height: 11px; border-radius: 6px; right: -5px; top: -3px; } .orp-c-progress-hover { z-index: 3; background-color: rgba(255,255,255,0.30); width: 0; opacity: 0; transition: opacity 0.2s; } .orp-c-progress { width: 1%; height: 3px; max-width: 100% !important; top: 6px; position: absolute; background-color: #fffa19; z-index: 4; } .orp-c-progress-bg:hover .orp-c-progress-hover { opacity: 1; } .orp-ctrls .orp-c-time { width: auto; padding: 0 5px; line-height: 35px; opacity: 0.85 !important; cursor: default; } .orp-c-play-big:before { display: none; } .orp-ctrl.orp-c-play-big { width: 100%; height: 100%; left: 0; top: 0; cursor: default; opacity: 1; transition: opacity 0.2s; display: block; border-radius: 0; margin: 0; background: none; } .orp-init-placeholder { width: 100%; height: 100%; left: 0; top: 0; cursor: default; background: rgba(0,0,0,0.5); display: none; position: absolute; } .orp-isInit .orp-init-placeholder { display: block; } .orp-c-play-big i, .orp-init-placeholder .orp-init-button { display: block; position: absolute; width: 80px; height: 80px; border-radius: 40px; left: 50%; margin-left: -40px; top: 50%; margin-top: -40px; background-color: rgba(0,0,0,0.5); z-index: 2; transition: all 0.2s 0s; } .orp-c-play-big i:hover, .orp-init-placeholder .orp-init-button:hover { cursor: pointer; background-color: rgba(0,0,0,0.7); } .orp-c-play-big i:before, .orp-init-placeholder .orp-init-button:before { content: ''; position: absolute; top: 50%; left: 50%; width: 24px; height: 27px; margin: -13px 0 0 -10px; z-index: 2; } .orp-c-play-big i:before, .orp-ctrl.orp-c-play:before, .orp-init-placeholder .orp-init-button:before { background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMzEiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNMjMuMzEgMTQuMTdMNS4yNiAzLjIyQTEuNSAxLjUgMCAwIDAgMyA0LjU1djIxLjlhMS41IDEuNSAwIDAgMCAyLjI2IDEuMzNsMTgtMTFhMS41NyAxLjU3IDAgMCAwIC4wNS0yLjYxeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00LjUgM2ExLjQyIDEuNDIgMCAwIDEgLjc2LjIybDE4IDExYTEuNTcgMS41NyAwIDAgMSAwIDIuNjZsLTE4IDExYTEuNDIgMS40MiAwIDAgMS0uNzYuMTJBMS41MyAxLjUzIDAgMCAxIDMgMjYuNDVWNC41NUExLjUzIDEuNTMgMCAwIDEgNC41IDNtMC0xQTIuNTEgMi41MSAwIDAgMCAyIDQuNTV2MjEuOUEyLjUxIDIuNTEgMCAwIDAgNC41IDI5YTIuNDcgMi40NyAwIDAgMCAxLjI2LS4zNWwxOC0xMC45NWEyLjU5IDIuNTkgMCAwIDAgMC00LjRsLTE4LTExQTIuNDcgMi40NyAwIDAgMCA0LjUgMnoiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyOHYzMUgweiIvPjwvZz48L2c+PC9zdmc+') no-repeat center center; background-size: contain; } .orp-landing-page { width: 100%; height: 100%; left: 0; top: 0; cursor: default; display: none; position: absolute; z-index: 100; } .orp-jsLandingPage .orp-landing-page { display: block; } .orp-isOver .orp-c-play-big i:before, .orp-isOver .orp-c-play:before, .orp-isPlaylist.orp-isOverPlaylist.orp-isOver .orp-c-play-big i:before, .orp-isPlaylist.orp-isOverPlaylist.orp-isOver .orp-c-play:before { background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyNCI+PHBhdGggZD0iTTI1LjMzIDEzLjA5bC00LjYgNS4wOWEuNzYuNzYgMCAwIDEtMS4wOCAwbC00LjgxLTUuMDhhLjY2LjY2IDAgMCAxIC41My0xLjFoNC4xOGMwLTQuMS0yLjg2LTcuNDQtNy03LjQ0YTcuNDQgNy40NCAwIDEgMCAwIDE0Ljg4VjIyYTEwIDEwIDAgMSAxIDAtMjBjNS41NiAwIDkuMjUgNC40OCA5LjI1IDEwaDNhLjY2LjY2IDAgMCAxIC41MyAxLjA5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi41NiAyYzUuNTYgMCA5LjI1IDQuNDggOS4yNSAxMGgzYS42Ni42NiAwIDAgMSAuNTQgMS4wOWwtNC42IDUuMDlhLjc2Ljc2IDAgMCAxLTEuMDggMGwtNC44My01LjA4YS42Ni42NiAwIDAgMSAuNTMtMS4xaDQuMThjMC00LjEtMi44Ni03LjQ0LTctNy40NGE3LjQ0IDcuNDQgMCAxIDAgMCAxNC44OFYyMmExMCAxMCAwIDEgMSAwLTIwbTAtMWExMSAxMSAwIDEgMCAwIDIyLjA2IDEgMSAwIDAgMCAxLTF2LTIuNjJhMSAxIDAgMCAwLTEtMSA2LjQxIDYuNDEgMCAxIDEgMC0xMi44MiA2IDYgMCAwIDEgNS45IDUuMzhoLTMuMDhhMS43MyAxLjczIDAgMCAwLTEuNiAxIDEuNjQgMS42NCAwIDAgMCAuMzIgMS44bDQuODIgNS4wOGExLjc0IDEuNzQgMCAwIDAgMS4yOC41NSAxLjc4IDEuNzggMCAwIDAgMS4zLS41N2w0LjYtNS4wOWExLjY2IDEuNjYgMCAwIDAgLjMtMS43OSAxLjc1IDEuNzUgMCAwIDAtMS42LTFoLTJDMjIuMzUgNS4yIDE4LjEgMSAxMi41NiAxeiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4\x3d'); } .orp-isPlaylist.orp-isOver .orp-c-play-big i:before, .orp-isPlaylist.orp-isOver .orp-c-play:before { background-image: none; } .orp-isPlaying .orp-c-play-big i { display: none; } .orp-isPlaying .orp-proVideo .orp-isPlaying .orp-c-play-big i { display: none; } .orp-isPlaying .orp-proVideo .orp-c-play-big i { display: block; } /*loading spinner*/ @keyframes spin { 100% {transform:rotate(360deg);} } @keyframes lp-loader-fade { 0% { background-color: rgba(204,204,204,.5) } 50% { background-color: rgba(204,204,204,.15) } to { background-color: rgba(204,204,204,.15) } } @keyframes IE_fix_shake { 0% {margin-top: -1px;} to {margin-top: 0;} } /*----MS IE11 CSS----*/ @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) { .orp-light-player-wrapper \x3e .orp-isPlaying video { animation-name: IE_fix_shake; animation-duration: .1s; animation-iteration-count: 2; } } /*----MS Edge CSS----*/ @supports (display:-ms-grid) { .orp-light-player-wrapper \x3e .orp-isPlaying video { animation-name: IE_fix_shake; animation-duration: .1s; animation-iteration-count: 2; } } .orp-lp-loader-dots { pointer-events: none; position: absolute; width: 20%; padding-bottom: 20%; top: 50%; left: 50%; margin-top: -10%; margin-left: -10%; display: none; } .orp-lp-loader-dot { position: absolute; width: 100%; padding-bottom: 100%; border-radius: 100%; background-color: rgba(204,204,204,0); animation: lp-loader-fade .8s cubic-bezier(0.4,0.0,0.2,1) infinite } .orp-lp-loader-dot-0 { top: -143.5%; left: 0 } .orp-lp-loader-dot-1 { top: -101.5%; left: 101.5%; animation-delay: .1s } .orp-lp-loader-dot-2 { top: 0; left: 143.5%; animation-delay: .2s } .orp-lp-loader-dot-3 { top: 101.5%; left: 101.5%; animation-delay: .3s } .orp-lp-loader-dot-4 { top: 143.5%; left: 0; animation-delay: .4s } .orp-lp-loader-dot-5 { top: 101.5%; left: -101.5%; animation-delay: .5s } .orp-lp-loader-dot-6 { top: 0; left: -143.5%; animation-delay: .6s } .orp-lp-loader-dot-7 { top: -101.5%; left: -101.5%; animation-delay: .7s } .orp-isPlaying.orp-isLoading .orp-c-play-big i { opacity: 1 !important; z-index: 2; } .orp-isPlaying.orp-isLoading .orp-c-play-big i, .orp-isPlaying.orp-isLoading .orp-lp-loader-dots { display: block; } .orp-isPlaying.orp-isLoading .orp-c-play-big i:before { display: none; } .orp-init-loading .orp-init-placeholder .orp-init-button { background-color: rgba(0,0,0,0.5); cursor: default; } .orp-init-loading .orp-init-placeholder .orp-init-button:before { display: none; } .orp-init-loading .orp-init-placeholder .orp-lp-loader-dots { display: block; } .orp-ctrl.orp-c-screen:before { content: ''; display: block; position: absolute; top: 50%; left: 50%; width: 18px; height: 18px; margin: -10px 0 0 -9px; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTE4IDJ2NmgtM1Y1aC0zVjJoNnptLTMgMTB2M2gtM3YzaDZ2LTZ6TTggMkgydjZoM1Y1aDN6TTUgMTV2LTNIMnY2aDZ2LTN6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE4IDJ2NmgtM1Y1aC0zVjJoNm0wLTFoLTZhMSAxIDAgMCAwLTEgMXYzYTEgMSAwIDAgMCAxIDFoMnYyYTEgMSAwIDAgMCAxIDFoM2ExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMXptMCAxMXY2aC02di0zaDN2LTNoM20wLTFoLTNhMSAxIDAgMCAwLTEgMXYyaC0yYTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xek04IDJ2M0g1djNIMlYyaDZtMC0xSDJhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoM2ExIDEgMCAwIDAgMS0xVjZoMmExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMXpNNSAxMnYzaDN2M0gydi02aDNtMC0xSDJhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xdi0zYTEgMSAwIDAgMC0xLTFINnYtMmExIDEgMCAwIDAtMS0xeiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4\x3d') no-repeat 0 0; background-size: contain; } .orp-full-screened .orp-ctrl.orp-c-screen:before { background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTEyIDhWMmgzdjNoM3YzaC02em0zIDEwdi0zaDN2LTNoLTZ2NnpNMiA4aDZWMkg1djNIMnptMyA3djNoM3YtNkgydjN6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE1IDJ2M2gzdjNoLTZWMmgzbTAtMWgtM2ExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTFWNWExIDEgMCAwIDAtMS0xaC0yVjJhMSAxIDAgMCAwLTEtMXptMyAxMXYzaC0zdjNoLTN2LTZoNm0wLTFoLTZhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoM2ExIDEgMCAwIDAgMS0xdi0yaDJhMSAxIDAgMCAwIDEtMXYtM2ExIDEgMCAwIDAtMS0xek04IDJ2NkgyVjVoM1YyaDNtMC0xSDVhMSAxIDAgMCAwLTEgMXYySDJhMSAxIDAgMCAwLTEgMXYzYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMXptMCAxMXY2SDV2LTNIMnYtM2g2bTAtMUgyYTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMSAxaDJ2MmExIDEgMCAwIDAgMSAxaDNhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xeiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4\x3d'); } .orp-ctrl.orp-c-playlist { float: right; margin: 0; } .orp-ctrl.orp-c-playlist:before { content: ''; display: block; position: absolute; top: 50%; left: 50%; width: 23px; height: 23px; margin: -12px 0 0 -7px; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zIDVINEgyMEgyMVY3SDIwSDRIM1Y1Wk0xMCA5SDExTDIwIDlIMjFWMTFIMjBMMTEgMTFIMTBWOVpNMTEgMTNIMTBWMTVIMTFMMjAgMTVIMjFWMTNIMjBMMTEgMTNaTTMgMTdINEgyMEgyMVYxOUgyMEg0SDNWMTdaTTMgOS4wNDAzMVYxNC45NTk3QzMgMTUuMzc4OSAzLjQ4NDk3IDE1LjYxMiAzLjgxMjM1IDE1LjM1MDFMNy41MTE5NiAxMi4zOTA0QzcuNzYyMTYgMTIuMTkwMyA3Ljc2MjE2IDExLjgwOTcgNy41MTE5NiAxMS42MDk2TDMuODEyMzUgOC42NDk4OEMzLjQ4NDk3IDguMzg3OTcgMyA4LjYyMTA2IDMgOS4wNDAzMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo\x3d') no-repeat 0 0; background-size: contain; } .orp-ctrl.orp-c-settings:before { content: ''; display: block; position: absolute; top: 50%; left: 50%; width: 18px; height: 18px; margin: -10px 0 0 -7px; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC44NSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNjI3NyAyLjg1MTY2QzE0LjU1NDMgMi4zNjIxNCAxNC4xMzM4IDIgMTMuNjM4OCAySDEwLjM2MTFDOS44NjYxNCAyIDkuNDQ1NjMgMi4zNjIxNCA5LjM3MjIgMi44NTE2Nkw5LjAxMTE0IDUuMjU4NjlDOC45MTU4MSA1Ljg5NDI2IDguMjU0MjkgNi4yNzYxOSA3LjY1NjIxIDYuMDQwOTZMNS4zOTExMSA1LjE1MDEyQzQuOTMwNDYgNC45Njg5NSA0LjQwNjU4IDUuMTUyMDYgNC4xNTkwOCA1LjU4MDc0TDIuNTIwMjcgOC40MTkyNEMyLjI3Mjc3IDguODQ3OTIgMi4zNzYxNCA5LjM5MzE3IDIuNzYzMzYgOS43MDE1Mkw0LjY2NzM4IDExLjIxNzdDNS4xNzAxNCAxMS42MTgxIDUuMTcwMTQgMTIuMzgxOSA0LjY2NzM4IDEyLjc4MjNMMi43NjMzNiAxNC4yOTg1QzIuMzc2MTQgMTQuNjA2OCAyLjI3Mjc3IDE1LjE1MjEgMi41MjAyNyAxNS41ODA3TDQuMTU5MDggMTguNDE5MkM0LjQwNjU4IDE4Ljg0NzkgNC45MzA0NiAxOS4wMzEgNS4zOTExMSAxOC44NDk5TDcuNjU2MiAxNy45NTlDOC4yNTQyOSAxNy43MjM4IDguOTE1ODEgMTguMTA1NyA5LjAxMTE0IDE4Ljc0MTNMOS4zNzIyIDIxLjE0ODNDOS40NDU2MyAyMS42Mzc5IDkuODY2MTQgMjIgMTAuMzYxMSAyMkgxMy42Mzg4QzE0LjEzMzggMjIgMTQuNTU0MyAyMS42Mzc5IDE0LjYyNzcgMjEuMTQ4M0wxNC45ODg4IDE4Ljc0MTNDMTUuMDg0MSAxOC4xMDU3IDE1Ljc0NTYgMTcuNzIzOCAxNi4zNDM3IDE3Ljk1OUwxOC42MDg3IDE4Ljg0OTlDMTkuMDY5NCAxOS4wMzEgMTkuNTkzMyAxOC44NDc5IDE5Ljg0MDggMTguNDE5MkwyMS40Nzk2IDE1LjU4MDdDMjEuNzI3MSAxNS4xNTIxIDIxLjYyMzcgMTQuNjA2OCAyMS4yMzY1IDE0LjI5ODVMMTkuMzMyNSAxMi43ODIzQzE4LjgyOTcgMTIuMzgxOSAxOC44Mjk3IDExLjYxODEgMTkuMzMyNSAxMS4yMTc3TDIxLjIzNjUgOS43MDE1MkMyMS42MjM3IDkuMzkzMTcgMjEuNzI3MSA4Ljg0NzkyIDIxLjQ3OTYgOC40MTkyNEwxOS44NDA4IDUuNTgwNzRDMTkuNTkzMyA1LjE1MjA2IDE5LjA2OTQgNC45Njg5NSAxOC42MDg3IDUuMTUwMTJMMTYuMzQzNyA2LjA0MDk1QzE1Ljc0NTYgNi4yNzYxNyAxNS4wODQxIDUuODk0MjUgMTQuOTg4NyA1LjI1ODY4TDE0LjYyNzcgMi44NTE2NlpNMTIgMTUuNTk3NkMxMy45ODY5IDE1LjU5NzYgMTUuNTk3NiAxMy45ODY5IDE1LjU5NzYgMTJDMTUuNTk3NiAxMC4wMTMxIDEzLjk4NjkgOC40MDIzNCAxMiA4LjQwMjM0QzEwLjAxMzEgOC40MDIzNCA4LjQwMjM0IDEwLjAxMzEgOC40MDIzNCAxMkM4LjQwMjM0IDEzLjk4NjkgMTAuMDEzMSAxNS41OTc2IDEyIDE1LjU5NzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo\x3d') no-repeat 0 0; background-size: contain; } .orp-ctrl.orp-c-vol:before { content: ''; display: block; position: absolute; top: 50%; width: 23px; height: 18px; left: 6px; margin: -9px 0 0 0; } .orp-ctrl.orp-c-vol:before, .orp-vol { background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyMCI+PHBhdGggZD0iTTE0LjcgNGEzMS41MiAzMS41MiAwIDAgMSAxLjMgNiAzMS41MiAzMS41MiAwIDAgMS0xLjMgNnMzLjMtMi41IDMuMy02LTMuMy02LTMuMy02ek03IDZINEMzIDYgMiA5IDIgOXYycy45IDMgMiAzaDRsMyAzaDFWM2gtMXptMTIuMi0zLjdsLTEuOS0uMUE5LjA5IDkuMDkgMCAwIDEgMjEgMTBhOS4yOSA5LjI5IDAgMCAxLTMuNiA3LjhsMS45LS4xQTEwLjE4IDEwLjE4IDAgMCAwIDIzIDEwYTEwLjEyIDEwLjEyIDAgMCAwLTMuOC03Ljd6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE0LjcgNFMxOCA2LjUgMTggMTBzLTMuMyA2LTMuMyA2YTMxLjUyIDMxLjUyIDAgMCAwIDEuMy02IDMxLjUyIDMxLjUyIDAgMCAwLTEuMy02bTAtMWExIDEgMCAwIDAtLjU3LjE4IDEgMSAwIDAgMC0uMzkgMS4xMkEyOS4wOSAyOS4wOSAwIDAgMSAxNSAxMGEyOS4wOSAyOS4wOSAwIDAgMS0xLjI2IDUuNyAxIDEgMCAwIDAgLjM5IDEuMTIgMSAxIDAgMCAwIC41Ny4xOCAxIDEgMCAwIDAgLjYtLjJjLjE1LS4xMiAzLjctMi44IDMuNy02LjhzLTMuNTUtNi42OC0zLjctNi44YTEgMSAwIDAgMC0uNi0uMnpNMTIgM3YxNGgtMWwtMy0zSDRjLTEuMSAwLTItMy0yLTNWOXMxLTMgMi0zaDNsNC0zaDFtMC0xaC0xYTEgMSAwIDAgMC0uNi4yTDYuNjcgNUg0QzIuNTggNSAxLjYxIDcgMS4wNSA4LjY4QTEuMTkgMS4xOSAwIDAgMCAxIDl2MmExIDEgMCAwIDAgMCAuMjlDMS40NiAxMi42NyAyLjQgMTUgNCAxNWgzLjU5bDIuNyAyLjcxQTEgMSAwIDAgMCAxMSAxOGgxYTEgMSAwIDAgMCAxLTFWM2ExIDEgMCAwIDAtMS0xem01LjMuMmwxLjkuMUExMC4xMiAxMC4xMiAwIDAgMSAyMyAxMGExMC4xOCAxMC4xOCAwIDAgMS0zLjcgNy43bC0xLjkuMUE5LjI5IDkuMjkgMCAwIDAgMjEgMTBhOS4wOSA5LjA5IDAgMCAwLTMuNy03LjhtMC0xYTEgMSAwIDAgMC0uOTUuNjhBMSAxIDAgMCAwIDE2Ljc0IDMgOC4xOCA4LjE4IDAgMCAxIDIwIDEwYTguMzEgOC4zMSAwIDAgMS0zLjE5IDcgMSAxIDAgMCAwIC41OSAxLjgxaC4wNWwxLjktLjFhMSAxIDAgMCAwIC42MS0uMjVBMTEuMTcgMTEuMTcgMCAwIDAgMjQgMTBhMTEuMDUgMTEuMDUgMCAwIDAtNC4xNi04LjQ3IDEgMSAwIDAgMC0uNTktLjIzbC0xLjktLjF6IiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg\x3d\x3d') no-repeat 0 0; background-size: contain; } .orp-ctrl.orp-c-vol.orp-vol-mid:before { background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyMCI+PHBhdGggZD0iTTE0LjcgNGEzMS41MiAzMS41MiAwIDAgMSAxLjMgNiAzMS41MiAzMS41MiAwIDAgMS0xLjMgNnMzLjMtMi41IDMuMy02LTMuMy02LTMuMy02ek03IDZINEMzIDYgMiA5IDIgOXYycy45IDMgMiAzaDRsMyAzaDFWM2gtMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTQuNyA0UzE4IDYuNSAxOCAxMHMtMy4zIDYtMy4zIDZhMzEuNTIgMzEuNTIgMCAwIDAgMS4zLTYgMzEuNTIgMzEuNTIgMCAwIDAtMS4zLTZtMC0xYTEgMSAwIDAgMC0uNTcuMTggMSAxIDAgMCAwLS4zOSAxLjEyQTI5LjA5IDI5LjA5IDAgMCAxIDE1IDEwYTI5LjA5IDI5LjA5IDAgMCAxLTEuMjYgNS43IDEgMSAwIDAgMCAuMzkgMS4xMiAxIDEgMCAwIDAgLjU3LjE4IDEgMSAwIDAgMCAuNi0uMmMuMTUtLjEyIDMuNy0yLjggMy43LTYuOHMtMy41NS02LjY4LTMuNy02LjhhMSAxIDAgMCAwLS42LS4yek0xMiAzdjE0aC0xbC0zLTNINGMtMS4xIDAtMi0zLTItM1Y5czEtMyAyLTNoM2w0LTNoMW0wLTFoLTFhMSAxIDAgMCAwLS42LjJMNi42NyA1SDRDMi41OCA1IDEuNjEgNyAxLjA1IDguNjhBMS4xOSAxLjE5IDAgMCAwIDEgOXYyYTEgMSAwIDAgMCAwIC4yOUMxLjQ2IDEyLjY3IDIuNCAxNSA0IDE1aDMuNTlsMi43IDIuNzFBMSAxIDAgMCAwIDExIDE4aDFhMSAxIDAgMCAwIDEtMVYzYTEgMSAwIDAgMC0xLTF6IiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg\x3d\x3d'); } .orp-ctrl.orp-c-vol.orp-vol-off:before, .orp-is-muted .orp-vol { background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyMCI+PHBhdGggZD0iTTcgNkg0QzMgNiAyIDkgMiA5djJzLjkgMyAyIDNoNGwzIDNoMVYzaC0xem0xNS45LjM4YS44Mi44MiAwIDAgMSAwIDEuMTZsLTIuNiAyLjYgMi42IDIuNmEuODIuODIgMCAwIDEtMS4xNiAxLjE2bC0yLjYtMi42LTIuNiAyLjZhLjgyLjgyIDAgMCAxLTEuMTYtMS4xNmwyLjYtMi42LTIuNi0yLjZhLjgyLjgyIDAgMCAxIDEuMTYtMS4xNkwxOS4xNCA5bDIuNi0yLjZhLjgyLjgyIDAgMCAxIDEuMTYgMHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTIgM3YxNGgtMWwtMy0zSDRjLTEuMSAwLTItMy0yLTNWOXMxLTMgMi0zaDNsNC0zaDFtMC0xaC0xYTEgMSAwIDAgMC0uNi4yTDYuNjcgNUg0QzIuNTggNSAxLjYxIDcgMS4wNSA4LjY4QTEuMTkgMS4xOSAwIDAgMCAxIDl2MmExIDEgMCAwIDAgMCAuMjlDMS40NiAxMi42NyAyLjQgMTUgNCAxNWgzLjU5bDIuNyAyLjcxQTEgMSAwIDAgMCAxMSAxOGgxYTEgMSAwIDAgMCAxLTFWM2ExIDEgMCAwIDAtMS0xem0xMC4zMiA0LjE0YS44Mi44MiAwIDAgMSAuNTggMS40bC0yLjYgMi42IDIuNiAyLjZhLjgyLjgyIDAgMCAxLTEuMTYgMS4xNmwtMi42LTIuNi0yLjYgMi42YS44Mi44MiAwIDAgMS0xLjE2LTEuMTZsMi42LTIuNi0yLjYtMi42YS44Mi44MiAwIDAgMSAxLjE2LTEuMTZMMTkuMTQgOWwyLjYtMi42YS44Mi44MiAwIDAgMSAuNTgtLjI0bTAtMWExLjgxIDEuODEgMCAwIDAtMS4zMi41MWwtMS45IDEuOS0xLjktMS45YTEuODEgMS44MSAwIDAgMC0xLjItLjUzQTEuODEgMS44MSAwIDAgMCAxNC4xNCA3YTEuODEgMS44MSAwIDAgMCAuNTMgMS4yOGwxLjkgMS45LTEuOSAxLjgyYTEuODIgMS44MiAwIDAgMCAyLjU3IDIuNTdsMS45LTEuOSAxLjkgMS45YTEuODEgMS44MSAwIDAgMCAxLjI4LjUzIDEuODIgMS44MiAwIDAgMCAxLjI5LTMuMWwtMS45LTEuOSAxLjktMS45YTEuODEgMS44MSAwIDAgMCAuNTMtMS4yIDEuODEgMS44MSAwIDAgMC0xLjgyLTEuODJ6IiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg\x3d\x3d'); } .orp-notMobile .orp-ctrl.orp-c-vol.orp-isSelected, .orp-notMobile .orp-ctrl.orp-c-vol:hover { width: 114px; } .orp-c-vol-changer { display: none; } .orp-notMobile .orp-ctrl.orp-c-vol.orp-isSelected .orp-c-vol-changer, .orp-notMobile .orp-ctrl.orp-c-vol:hover .orp-c-vol-changer { display: block; height: 11px; position: absolute; left: 40px; top: 12px; width: 60px; background: none; margin: 0; opacity: 1; } .orp-c-vol-changer:before, .orp-c-vol-curr{ content: ''; position: absolute; width: 60px; height: 3px; background: #9d9d9d; left: 0; top: 4px; } .orp-c-vol-toggle { width: 36px; height: 36px; position: absolute; left: 0; top: 0; } .orp-c-vol-curr { background: #fff; width: 100%; max-width: 100%; } .orp-c-vol-curr:after { content: ''; position: absolute; width: 11px; height: 11px; background: #fff; right: -4px; top: -4px; border-radius: 6px; } .orp-isMobile .orp-lp-controls-wrapper .orp-ctrl.orp-c-vol { /*display: none !important;*/ } .orp-c-live { display: none; width: auto; padding: 0 5px 0 10px; line-height: 35px; opacity: 0.85 !important; cursor: default !important; margin: 0 6px !important; } .orp-c-live:before { content: ''; position: absolute; width: 6px; height: 6px; border-radius: 50%; background: #FF3333; left: 0; top: 50%; margin-top: -3px; } .orp-live .orp-c-live {display: block !important;} .orp-live .orp-c-progress-bg, .orp-live .orp-c-time {display: none !important;} /*mobile styles*/ .orp-isMobile .orp-c-vol-changer { display: none !important; } .orp-isMobile .orp-ctrl.orp-c-progress-bg:before, .orp-isMobile .orp-c-progress-cache, .orp-isMobile .orp-c-progress-curr, .orp-isMobile .orp-c-progress-hover, .orp-isMobile .orp-c-progress { height: 2px !important; top: 7px !important; } .orp-isMobile .orp-ctrl.orp-c-progress-bg:before { background-color: rgba(255,255,255,0.2); } .orp-isMobile .orp-c-progress-curr:after { width: 16px !important; height: 16px !important; border-radius: 8px !important; top: -7px !important; right: -7px !important; } .orp-isMobile .orp-isPlaying .orp-ctrls, .orp-isMobile .orp-full-screened .orp-ctrls { display: block; } .orp-isMobile .orp-lp-holder .orp-error-block span { font-size: 12px; } .orp-vast-blocker { display: block; position: absolute; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0; } .orp-vast-skip-button.orp-counter { background: rgba(0,0,0,0.5); color: #e6e6e6; display: block; position: absolute; bottom: 37px; right: 0; margin-left: -40px; font: normal 11px Arial, sans-serif; min-width: 155px; width: auto; padding: 7px 20px; line-height: 21px; text-align: center; border: 0; cursor: default; } .orp-vast-skip-button.orp-counter:before { display: none; } .orp-notMobile .orp-vast-skip-button.orp-counter:hover { background: rgba(0,0,0,0.5); } .orp-vast-skip-button { background: rgba(0,0,0,0.5); display: block; position: absolute; bottom: 37px; right: 0; margin-left: -40px; font: normal 18px Arial, sans-serif; padding: 9px 32px 8px 10px; width: auto; text-align: center; cursor: pointer; transition: background 0.2s; border: 1px solid rgba(255, 255, 255, 0.5); border-right: 0; } .orp-vast-skip-button:before { content: ''; position: absolute; width: 24px; height: 24px; right: 6px; top: 7px; } .orp-notMobile .orp-vast-skip-button:hover { border-color: rgba(255, 255, 255, 1); } .orp-notMobile .orp-vast-skip-button:hover { background: rgba(0,0,0,0.8); } .orp-vast-icon { display: block; position: absolute; z-index: 2; } .orp-vast-icon * { width: 100%; height: 100%; overflow: hidden; } .orp-nonlinear { bottom: 70px; width: 100%; position: absolute; text-align: center; left: 0; right: 0; margin: auto; z-index: 10; } .orp-nonlinear .orp-nonlinear-holder { display: inline-block; text-align: center; position: relative; } .orp-nonlinear .orp-nonlinear-holder \x3e * { max-height: 100%; } .orp-nonlinear .orp-close { /*round close*/ background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTEgMTEiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PHBhdGggZD0iTTUuNSAxQTQuNSA0LjUgMCAxIDEgMSA1LjUgNC41MSA0LjUxIDAgMCAxIDUuNSAxbTAtMUE1LjUgNS41IDAgMSAwIDExIDUuNSA1LjUgNS41IDAgMCAwIDUuNSAwem0yLjM1IDMuODVsLS43LS43TDUuNSA0Ljc5IDMuODUgMy4xNWwtLjcuN0w0Ljc5IDUuNSAzLjE1IDcuMTVsLjcuN0w1LjUgNi4yMWwxLjY1IDEuNjQuNy0uN0w2LjIxIDUuNXoiIGZpbGw9IiM0MTQ4NTEiIGRhdGEtbmFtZT0iTGF5ZXIgMSIvPjwvZz48L3N2Zz4\x3d')no-repeat center center; width: 15px; height: 15px; border-radius: 8px; top: 0; right: 0; position: absolute; cursor: pointer; background-size: contain; } .orp-proVideo { top: 0; left: 0; right: 0; bottom: 0; width: auto; height: 100%; max-width: 100%; max-height: 100%; z-index: -1000; margin: auto; position: absolute; } .orp-proVideo.orp-jsShow { z-index: 100; } .orp-proVideo .orp-vast-skip-button { z-index: 100; } .orp-proVideo .orp-lp-holder { position: absolute; width: 100%; height: 100%; display: block; line-height: normal; } .orp-vpaid-container { z-index: 1; position: absolute; width: 100%; height: 100%; top: 0; } .orp-vpaid-container iframe { position: absolute; left: 0; top: 0; margin: 0; padding: 0; border: none; width: 100%; height: 100%; } /*outstream player block*/ .orp-controls-wrapper { position: absolute; width: 100%; height: 100%; } .orp-more, .orp-close, .orp-c-close, .orp-title, .orp-vol, .orp-progress-bg, .orp-replay { z-index: 2; opacity: 0.5; } .orp-went-sticky.orp-sticky-close .orp-ima-container .orp-close-bg, .orp-went-sticky.orp-sticky-close .orp-ima-container .orp-close, .orp-went-sticky.orp-sticky-close .orp-c-close { display: block !important; } .orp-notMobile .orp-more:hover, .orp-notMobile .orp-close:hover, .orp-notMobile .orp-c-close:hover, .orp-defaultTag .orp-close:hover, .orp-defaultTag .orp-c-close:hover, .orp-notMobile .orp-vol:hover, .orp-notMobile .orp-progress-bg:hover, .orp-notMobile .orp-replay:hover { opacity: 1; } .orp-socials { position: absolute; top: 56px; left: 20px; z-index: 2; text-align: left; max-height: calc(100% - 106px); display: flex; flex-direction: column; flex-wrap: wrap; justify-content: left; align-content: flex-start; } .orp-socials a { display: inline-block; width: 40px; height: 40px; border-radius: 4px; background: #000 no-repeat center center; margin: 0 4px 4px 0; opacity: 0.7; } .orp-notMobile .orp-socials a:hover { opacity: 1; } /*yt, fb, ig, tt, sc, tw, ok, vk*/ .orp-socials .orp-social-yt {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADXSURBVHgB7VXRDYIwEL0QB2CEjsAojuAGuoEj6AZdwU1wA9hANnje2QYvRuFOyh8veQkkj/factcj2uABgMC8MDvmA3aItmVG8fhl3jhNp8KabysvYa5DXjupcsaZWVM5iNdRBzRUHnsdEGbEA7MnH94nYjjTkHUHpAozwRygl4VUEBEG/BXgCRJdRcsQTCrPDvi1Zl5hgDlATLPuBEdDyje7nCFlONVobQ7xNKN4jv9gmBEH8nd6rwNuVB738QkrXnY6ZL3r+mMnEWl4eAdOhzSsAm3w4AkT1lmoeoMC7gAAAABJRU5ErkJggg\x3d\x3d')} .orp-socials .orp-social-fb {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABuSURBVHgB7ZLBDYAgEAQXYyGWYofagS3RAXZgCes9fBAieBqMCd4km0DI3vA44FeQHCSTZGMEanAMDzwBNZA5CzOUej30jMl9lvirkoOS9KdO0PQ6vEzjgtKmRE/hsUCJ/1Rga2oCE9wTrJlz4+wDo3HdgzsmBQAAAABJRU5ErkJggg\x3d\x3d')} .orp-socials .orp-social-ig {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADqSURBVHgB7ZXvDYIwEMVPJ8ANdAM2sBvABriBcQJYwUl0E9wANigbnNdwxgv2D239yC95kPTa99IeDQAbKSCiIj1IA0mjn57nNmvNO0ynC5lfMB8lPfeLjAryufoCjhDHiSUpfQEl2BlJinTYEfSuecxGAS4cZzqQCsvcgms/xAZUXDMfgGbThsdUdoCoDWJYi114A/YQQByPPKbJPKgdU2h9MAC+jb/B3Fhj2nF4DTGgnQH/2GTtCamFsXKZhwKciyLopeeyBy/IZ/QF3CGfp7dKW2wxnRbWgPOtNT+RPmD4udlm7hk2UngDXQCsUTgrG3EAAAAASUVORK5CYII\x3d')} .orp-socials .orp-social-tt {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADaSURBVHgB7ZTtEYIwDIZTzgFwAh3BERjBDWQEN8ANHIFRcAPdADeADWJ6V8+2pp+Ufzx37/GR8iY0BICN0iDiiD8mKA3+c/Ctr2A5VygJ8vSkE7deQCLSzROehRD7NRMAJTA8q4BZQ7qTBtIFMtg5jGs69KSzdvvh8GjUOtmDGmJQFdt0KmYQ8qoY81ZVtQ5M9YM+TKlvwCWwOfriIb+YSZ5hAVyCt3XdfU+o4JsVe0Eq8mthtmlSskmfDXqoRvOX7GKEXGRjA0lGu/m5iVrSUzMe1BbGTexGDB8m/225MJv01wAAAABJRU5ErkJggg\x3d\x3d')} .orp-socials .orp-social-sc {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADYSURBVHgB7ZRvDcIwEMWvKJiEOgAUIAUk4AAJm4NJQEJxMAkMBzh4vIaFkWbdtd0+7pe8NE0ud+39E9lYAwBXymGko86yBnTUIE4rS6CDC3TKfxKkJYab87FTYhxEx8qCAIvRArxl7QDMqaXu1I3XSnQq2tZDvXR7b+TbD/m4pADBT1KxMT9zNUh/jdJJkyBtBn7pyXXeIJ86xbFfDR3KeSJYHWEN9lKSzxFfN336Udamk5vVRAJYHieqp47U1ND5KW+ox3B/GWN6KQHfmWj/Xusw0/sbWXwAXVsHeEiFmzEAAAAASUVORK5CYII\x3d')} .orp-socials .orp-social-tw {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADbSURBVHgB7ZNfEcIwDMZTFNQBlYCDVQIOwAFzMFAwCZOABEDBcFAJ4CBk1zzkof+POx7Y7y63W5d+X9I1ACv/ByLqgpyewqFnpjjwuqXYJcV5o0nknDHMi810ysByctREVB5i+TZApgPJJI1EATHi4kJkDGy88XqfMdjmxA3FFf15VlNSvW4VJ+aQ5ka+KKXe9LhAG8/iTKrmiOnbEqKDXAcCS5EdOMGdun8UZ6P/2a6iegO1sMlQYHSCFtAP1fRVcdqwRz9ULiO85HTQAh/NyCJyJhx31Ca88jM+60R3HppKyJQAAAAASUVORK5CYII\x3d')} .orp-socials .orp-social-ok {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgB5ZThEYIwDIWDE7CB3cBuoCO4gSPIBrCBbqAbOAJswAjABI4Q0+P15GLhhPJLv7teveZ4L01Sif4CZraySllP7qllnWgNIO6FNReKRUQaiDmT3GWO23gOtBT5+DgQMirmTR5TGhuaZoe9TZKkVbEKu6UIgw57KpmmKma8OS3FiQ5K5CbH4CwbnJ8pBjR2jCZws9VMSt34EAl9CTJ1TTeyKml6RzGIYIFMb6FM0YsC72N+qdx8B+pdwrDmz9e9nWtg+f2Kp3BGyydJPt4HbuNvlPNKU2QDBvF/dBA3PF6qjGJBQz3ud6bqb2PEr6rmKc7z0PlccaNEjIrfB/H5U8T9Q2pQBjMSr8fiv8MLgtM2oWHEGrQAAAAASUVORK5CYII\x3d')} .orp-socials .orp-social-vk {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgB7ZNhEYMwDIVTB5WAhE3BkDAHzAE4QAISamFOtikoDsBBltzKXQYpdMf41+8u5CCvfW1oATKZvRh+IGJJqQjfRmPMfRJQzVJqKGoKGz73FGfSjUJ3olTxeIoXxZPq/VQc8JtODuR3XHIRmoLCz+oehKBVJihFvdwwcEq9kgZW2YUP7Vk1oHxTag7mRHbRJRh4ZWGFZmAVMdNEzOtQkwzq5Bu9/oUWtoisNhWP4nAcZcJUe0241/wP3IrmmmLS4PL4Mq3Q8EX02iIgBfzcUkfxiLUA9ZvcQSbzF97UqdgNRfvkCgAAAABJRU5ErkJggg\x3d\x3d')} .orp-controls-wrapper .orp-isOver { cursor: default; } .orp-controls-wrapper .orp-isOver:before { content: ''; position: absolute; left: 0; right: 0; top: 0; bottom: 0; background-color: rgba(0, 255, 255, 0); z-index: 2; } .orp-isInBanner .orp-controls-wrapper .orp-isOver { background-color: rgba(255, 255, 255, 0.85); } .orp-controls-wrapper * { cursor: pointer; color: #fff; font-family: Arial, sans-serif; box-sizing: border-box; transition: opacity 0.2s; } @keyframes reduceWidth { 100% { width: 34px; padding: 9px 0 9px 36px; color: #fff; } } @-ms-keyframes reduceWidth { 100% { width: 34px; padding: 9px 0 9px 36px; color: #fff; } } .orp-tap-unmute { background: #fff; position: absolute; width: 147px; padding: 9px 12px 9px 36px; left: 20px; top: 54px; font-size: 12px; z-index: 5; text-transform: uppercase; border: 1px solid #eee; color: #000; border-radius: 1px; animation: reduceWidth 0.2s 2.5s linear forwards; -ms-animation: reduceWidth 0.2s 2.5s linear forwards; white-space: nowrap; overflow: hidden; } .orp-tap-unmute:before { content: ''; display: block; position: absolute; top: 50%; width: 23px; height: 18px; left: 6px; margin: -9px 0 0 0; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNSAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGQ9Ik03LDZjMCwwLTIsMC0zLDBTMiw5LDIsOXYyYzAsMCwwLjksMywyLDNzNCwwLDQsMGwzLDNoMVYzaC0xTDcsNnogTTIyLjksNi40YzAuMywwLjMsMC4zLDAuOCwwLDEuMmwtMi42LDIuNmwyLjYsMi42DQoJYzAuMywwLjMsMC4zLDAuOCwwLDEuMmMtMC4yLDAuMi0wLjQsMC4yLTAuNiwwLjJjLTAuMiwwLTAuNC0wLjEtMC42LTAuMmwtMi42LTIuNmwtMi42LDIuNmMtMC4yLDAuMi0wLjQsMC4yLTAuNiwwLjINCgljLTAuMiwwLTAuNC0wLjEtMC42LTAuMmMtMC4zLTAuMy0wLjMtMC44LDAtMS4ybDIuNi0yLjZsLTIuNi0yLjZjLTAuMy0wLjMtMC4zLTAuOCwwLTEuMmMwLjItMC4yLDAuNC0wLjIsMC42LTAuMg0KCWMwLjIsMCwwLjQsMC4xLDAuNiwwLjJMMTkuMSw5bDIuNi0yLjZjMC4yLTAuMiwwLjQtMC4yLDAuNi0wLjJDMjIuNSw2LjEsMjIuNyw2LjIsMjIuOSw2LjR6Ii8+DQo8L3N2Zz4NCg\x3d\x3d') no-repeat center center; background-size: contain; } .orp-notMobile .orp-tap-unmute:hover { border-color: #bfbfbf; } .orp-lp-holder .orp-more { position: absolute; padding: 6px 14px; border: 2px solid #fff; border-radius: 4px; color: #fff!important; left: 20px; top: 20px; font-size: 12px; } .orp-close, .orp-c-close { position: absolute; width: 19px; height: 19px; right: 19px; top: 20px; opacity: 0.5; cursor: pointer; z-index: 3; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTkgMTkiPjx0aXRsZT5BcnRib2FyZCAxPC90aXRsZT48cG9seWdvbiBwb2ludHM9IjE3IDQgMTUgMiA5LjUgNy41IDQgMiAyIDQgNy41IDkuNSAyIDE1IDQgMTcgOS41IDExLjUgMTUgMTcgMTcgMTUgMTEuNSA5LjUgMTcgNCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNSwybDIsMkwxMS41LDkuNSwxNywxNWwtMiwyTDkuNSwxMS41LDQsMTcsMiwxNSw3LjUsOS41LDIsNCw0LDIsOS41LDcuNSwxNSwybTAtMWExLDEsMCwwLDAtLjcxLjI5TDkuNSw2LjA5LDQuNzEsMS4yOWExLDEsMCwwLDAtMS40MiwwbC0yLDJhMSwxLDAsMCwwLDAsMS40Mkw2LjA5LDkuNWwtNC44LDQuNzlhMSwxLDAsMCwwLDAsMS40MmwyLDJhMSwxLDAsMCwwLDEuNDIsMGw0Ljc5LTQuOCw0Ljc5LDQuOGExLDEsMCwwLDAsMS40MiwwbDItMmExLDEsMCwwLDAsMC0xLjQyTDEyLjkxLDkuNWw0LjgtNC43OWExLDEsMCwwLDAsMC0xLjQybC0yLTJBMSwxLDAsMCwwLDE1LDFaIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4\x3d')no-repeat 0 0; background-size: contain; } .orp-close-bg { position: absolute; width: 30px; height: 30px; right: 15px; top: 15px; z-index: 3; padding: 5px 0 0 5px; pointer-events: none; } .orp-ima-container .orp-close-bg { pointer-events: auto; } /*IE10-11 hack*/ @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { .orp-isPlaying .orp-close, .orp-isPlaying .orp-c-close, .orp-isPlaying .orp-vol { transition: right 0.1s 0.5s; right: 18px; } } /*Edge hack*/ @supports (-ms-ime-align:auto) { .orp-isPlaying .orp-close, .orp-isPlaying .orp-c-close, .orp-isPlaying .orp-vol { transition: right 0.1s 0.5s; right: 18px; } } .orp-lp-holder .orp-title { position: absolute; left: 20px; bottom: 66px; font-size: 12px; opacity: 0.5; text-decoration: none; cursor: default !important; color: #fff!important; } .orp-isPlaying.orp-isHiddenControls .orp-title, .orp-controls-wrapper .orp-title { bottom: 16px; } .orp-isPlaying.orp-isHiddenControls .orp-sliderInUse .orp-title{ bottom: 66px; } .orp-notMobile a.orp-title:hover { opacity: 1; cursor: pointer !important; } .orp-title img { max-height: 90px; max-width: 200px; } div.orp-title img { cursor: default; } .orp-isInit .orp-title { display: none !important; } .orp-vol { position: absolute; width: 25px; height: 20px; right: 19px; bottom: 14px; } .orp-progress-bg, .orp-progress { position: absolute; height: 3px; width: 100%; left: 0; bottom: 0; background-color: rgba(255, 255, 255, 0.2); opacity: 1 !important; cursor: default; } .orp-progress { background-color: #2e95ff; width: 0; z-index: 2; } .orp-replay, .orp-isOver .orp-progress-bg, .orp-isOver .orp-vol { display: none; } .orp-isOver .orp-replay, .orp-isOver .orp-more { position: absolute; width: 140px; height: 40px; padding: 0 25px 0 42px; left: 50%; top: 50%; margin-left: -70px; margin-top: -46px; border: 0; border-radius: 4px; font-size: 12px; line-height: 40px; color: #000; font-weight: bold; background-color: rgba(0,0,0,0.06); z-index: 3; opacity: 1 !important; display: block; } .orp-notMobile .orp-isOver .orp-replay:hover, .orp-notMobile .orp-isOver .orp-more:hover { background-color: rgba(0,0,0,0.15); } .orp-isOver .orp-replay:before, .orp-isOver .orp-more:before { content: ''; width: 23px; height: 20px; position: absolute; left: 10px; top: 10px; background-position: 0 -13px; background-size: 25px; } .orp-isOver .orp-more { margin-top: 6px; } .orp-isOver .orp-more:before { height: 12px; top: 14px; background-position: 3px 0; } .orp-timer { font-size: 11px; color: #fff; cursor: default; position: absolute; background: rgba(0,0,0,0.4); bottom: 10px; left: 50%; z-index: 10; width: 36px; border-radius: 2px; padding: 2px 0; margin-left: -18px; } .orp-isOver .orp-close { background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOSAxOS4wNCI+PHBhdGggZD0iTTE3IDRsLTItMi01LjUgNS41TDQgMiAyIDRsNS41IDUuNUwyIDE1bDIgMiA1LjUtNS41TDE1IDE3bDItMi01LjUtNS41TDE3IDR6IiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg\x3d\x3d') no-repeat 0 0; } .orp-proVideo .orp-isOver .orp-ctrl.orp-c-play-big, .orp-proVideo .orp-isOver .orp-vast-blocker { display: none !important; } .orp-isMobile .orp-c-vol.orp-vol-off { display: block !important; width: 36px; z-index: 3; } /*.orp-isMobile .orp-lp-controls-wrapper .orp-vol-off .orp-c-vol-toggle:before {*/ /* content: 'Enable volume';*/ /* position: absolute;*/ /* display: block;*/ /* color: #000;*/ /* background: #fff;*/ /* font-size: 10px;*/ /* padding: 5px 0;*/ /* width: 90px;*/ /* top: -20px;*/ /* left: 50%;*/ /* margin-left: -45px;*/ /* line-height: normal;*/ /* border-radius: 2px;*/ /*}*/ /*.orp-isMobile .orp-lp-controls-wrapper .orp-vol-off .orp-c-vol-toggle:after {*/ /* content: '';*/ /* position: absolute;*/ /* display: block;*/ /* border: 6px solid transparent;*/ /* border-top-color: #fff;*/ /* left: 50%;*/ /* margin-left: -6px;*/ /*}*/ .orp-isMobile .orp-vol-off .orp-c-vol-changer { display: none !important; } /*XS screen styles*/ @media (max-width: 768px) { .orp-isOver .orp-replay { margin-top: -56px; } .orp-isOver .orp-more { margin-top: -4px; } } .orp-ima-container div:first-child { z-index: 2; } .orp-ima-container .orp-close-bg { left: 15px; right: auto; } .orp-ima-container .orp-close { left: 20px; right: auto; } .orp-ima-container .orp-lp-holder div:first-child { max-width: 100%; } .orp-ya-container .orp-close { top: 40px; left: 10px; } .orp-ya-container .orp-c-play-big { display: none!important; } /*RSS styles*/ .orp-isRss .orp-ctrls { display: none!important; } .orp-isRss .orp-c-close, .orp-isOver.orp-isRss .orp-c-close { top: 6px; right: 7px; z-index: 6; } .orp-error .orp-rss-container { display: none; } .orp-rss-container { width: 100%; height: 100%; } .orp-rss-container .orp-item { position: absolute; display: none; width: 100%; height: 100%; overflow: hidden; } .orp-rss-container i { display: block; width: 100%; height: 100%; background: no-repeat center center; background-size: contain; } .orp-rss-container .orp-play { display: block; } .orp-rss-container .orp-play i { transform: scale(1.15, 1.15); } .orp-rss-container .orp-reset i { transition: none 0s ease 0s; transform: none; } .orp-rss-container .orp-rss-control { position: absolute; display: flex; justify-content: space-between; width: 100%; left: 0; bottom: 0; } .orp-rss-container .orp-rss-control .orp-progressHover { height: 30px; cursor: pointer; } .orp-rss-container .orp-rss-control .orp-progress { background: rgba(255, 255, 255, 0.5); width: 100%; height: 3px; position: relative; margin-top: 27px; } .orp-rss-container .orp-rss-control .orp-progress div { position: absolute; bottom: 0; left: 0; width: 0; height: 3px; } .orp-rss-container .orp-rss-control .orp-progressHover:hover div { margin-top: 25px; height: 5px; } .orp-rss-container .orp-rss-control .orp-play div { width: 100%; } .orp-rss-container .orp-rss-control .orp-viewed div { width: 100%; transition: none 0s ease 0s!important; transform: none!important; } .orp-rss-container .orp-rss-control .orp-reset div { width: 0; transition: none 0s ease 0s!important; transform: none!important; } .orp-rss-container .orp-title { position: absolute; left: 20px; right: 20px; bottom: 20px; background: rgba(0, 0, 0, 0.6); border-radius: 4px; padding: 16px 112px 16px 60px; } .orp-rss-container .orp-text { font-style: normal; font-size: 13px; line-height: 16px; color: rgba(255,255,255,0.85); max-height: 32px; overflow: hidden; } .orp-rss-container .orp-counter { position: absolute; width: 36px; height: 24px; font-size: 14px; line-height: 24px; left: 12px; top: 50%; margin-top: -12px; color: rgba(255,255,255,0.85); background: rgba(255, 255, 255, 0.15); border-radius: 4px; text-align: center; } .orp-rss-container .orp-button { position: absolute; width: 90px; height: 28px; right: 12px; top: 50%; margin-top: -14px; background: rgba(0, 0, 0, 0.1); border: 2px solid rgba(255, 255, 255, 0.5); box-sizing: border-box; border-radius: 4px; font-size: 12px; line-height: 24px; text-align: center; color: rgba(255, 255, 255, 0.6); cursor: pointer; } .orp-notMobile .orp-rss-container .orp-button:hover { border-color: #fff; color: #fff; } @media (max-width: 400px) { .orp-rss-container .orp-title { padding: 12px 52px 12px 12px; } .orp-rss-container .orp-title .orp-counter, .orp-rss-container .orp-title .orp-button { display: none; } .orp-rss-container .orp-title:after { content: ''; position: absolute; width: 24px; height: 24px; top: 50%; margin-top: -12px; right: 12px; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LDE5SDVWNWg2VjNINUMzLjksMywzLDMuOSwzLDV2MTRjMCwxLjEsMC45LDIsMiwyaDE0YzEuMSwwLDItMC45LDItMnYtNmgtMlYxOXogTTE0LjUsMwoJQzE0LjIsMywxNCwzLjIsMTQsMy41djFDMTQsNC44LDE0LjIsNSwxNC41LDVoMy4xbC03LjUsNy41Yy0wLjIsMC4yLTAuMiwwLjUsMCwwLjdsMC43LDAuN2MwLjIsMC4yLDAuNSwwLjIsMC43LDBMMTksNi40djMuMQoJYzAsMC4zLDAuMiwwLjUsMC41LDAuNWgxYzAuMywwLDAuNS0wLjIsMC41LTAuNVYzSDE0LjV6Ii8+Cjwvc3ZnPgo\x3d') no-repeat center center; } } /*Ad controls*/ .orp-proVideo .orp-ctrls { background: none; pointer-events: none; } .orp-proVideo .orp-isControlsDisplay:not(.orp-isHiddenControls) .orp-title { bottom: 38px; } .orp-proVideo .orp-ctrls .orp-ctrl { pointer-events: all; } .orp-proVideo .orp-ctrls :before, .orp-proVideo .orp-c-vol-curr:after { filter: drop-shadow(0 0 3px rgba(0,0,0,0.5)); } /*fix buttons overlap for ipad fuulscreen*/ .orp-full-screened .orp-ipad-os .orp-tap-unmute, .orp-full-screened .orp-ipad-os .videoAdUiLearnMore { transform: translateY(30px); } .orp-full-screened .orp-ipad-os .orp-close { display: none; } /*playlist*/ .orp-c-playlist-holder { display: none; position: absolute; top: 0; right: 0; bottom: 0; z-index: 4; background: rgba(0, 0, 0, 0.85); width: 320px; text-align: left; max-width: 100%; } .orp-show-playlist .orp-c-playlist-holder { display: block; } .orp-c-playlist-holder * { box-sizing: border-box; } .orp-c-playlist-head { position: absolute; top: 0; left: 0; right: 0; height: 54px; border-bottom: 1px solid rgba(255, 255, 255, 0.15); } .orp-c-playlist-close { width: 24px; height: 24px; position: absolute; right: 16px; top: 16px; cursor: pointer; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNUwxMiAxMC41OUw2LjQxIDVMNSA2LjQxTDEwLjU5IDEyTDUgMTcuNTlMNi40MSAxOUwxMiAxMy40MUwxNy41OSAxOUwxOSAxNy41OUwxMy40MSAxMkwxOSA2LjQxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg\x3d\x3d') no-repeat center center; } .orp-c-playlist-count { position: absolute; height: 24px; top: 16px; left: 16px; background: rgba(255, 255, 255, 0.15); border-radius: 4px; padding: 4px; color: #fff; font-weight: bold; font-size: 14px; line-height: 16px; text-align: center; max-width: 42px; min-width: 38px; } .orp-c-playlist-name { position: absolute; left: 62px; right: 40px; top: 16px; font-weight: bold; font-size: 14px; line-height: 24px; color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .orp-c-playlist-body { position: absolute; top: 57px; left: 0; right: 2px; bottom: 2px; overflow: auto; scrollbar-color: #aaa #eee; } .orp-c-playlist-body::-webkit-scrollbar { width: 8px; } .orp-c-playlist-body::-webkit-scrollbar-track, .orp-c-playlist-body::-webkit-scrollbar-thumb { background-color: transparent; border-radius: 4px; } .orp-c-playlist-body:hover::-webkit-scrollbar-track { background-color: #eee; opacity: 0.9; } .orp-c-playlist-body:hover::-webkit-scrollbar-thumb { background-color: #aaaaaa; } .orp-c-playlist-body::-webkit-scrollbar-thumb:hover { background-color: #8f8f8f; } .orp-c-playlist-item { padding: 8px 16px 8px 112px; position: relative; color: #fff; min-height: 96px; cursor: pointer; } .orp-c-playlist-it-poster { position: absolute; width: 80px; height: 80px; left: 16px; top: 8px; background: no-repeat center center; background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzMzMzMzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgNEMxNS41NTIzIDQgMTYgNC40NDc3MiAxNiA1QzE2IDUuNTUyMjggMTUuNTUyMyA2IDE1IDZIN0M2LjQ0NzcyIDYgNiA2LjQ0NzcyIDYgN1YxNUM2IDE1LjU1MjMgNS41NTIyOSAxNiA1IDE2QzQuNDQ3NzEgMTYgNCAxNS41NTIzIDQgMTVWN0M0IDUuMzQzMTUgNS4zNDMxNSA0IDcgNEgxNVpNNjQgNUM2NCA0LjQ0NzcyIDY0LjQ0NzcgNCA2NSA0SDczQzc0LjY1NjkgNCA3NiA1LjM0MzE1IDc2IDdWMTVDNzYgMTUuNTUyMyA3NS41NTIzIDE2IDc1IDE2Qzc0LjQ0NzcgMTYgNzQgMTUuNTUyMyA3NCAxNVY3Qzc0IDYuNDQ3NzIgNzMuNTUyMyA2IDczIDZINjVDNjQuNDQ3NyA2IDY0IDUuNTUyMjggNjQgNVpNNjQgNzVDNjQgNzUuNTUyMyA2NC40NDc3IDc2IDY1IDc2SDczQzc0LjY1NjkgNzYgNzYgNzQuNjU2OSA3NiA3M1Y2NUM3NiA2NC40NDc3IDc1LjU1MjMgNjQgNzUgNjRDNzQuNDQ3NyA2NCA3NCA2NC40NDc3IDc0IDY1VjczQzc0IDczLjU1MjMgNzMuNTUyMyA3NCA3MyA3NEg2NUM2NC40NDc3IDc0IDY0IDc0LjQ0NzcgNjQgNzVaTTE2IDc1QzE2IDc1LjU1MjMgMTUuNTUyMyA3NiAxNSA3Nkg3QzUuMzQzMTUgNzYgNCA3NC42NTY5IDQgNzNWNjVDNCA2NC40NDc3IDQuNDQ3NzEgNjQgNSA2NEM1LjU1MjI5IDY0IDYgNjQuNDQ3NyA2IDY1VjczQzYgNzMuNTUyMyA2LjQ0NzcyIDc0IDcgNzRIMTVDMTUuNTUyMyA3NCAxNiA3NC40NDc3IDE2IDc1Wk0xNiAxOEMxNiAxNS43OTA5IDE3Ljc5MDkgMTQgMjAgMTRINjBDNjIuMjA5MSAxNCA2NCAxNS43OTA5IDY0IDE4VjU4QzY0IDYwLjIwOTEgNjIuMjA5MSA2MiA2MCA2MkgyMEMxNy43OTA5IDYyIDE2IDYwLjIwOTEgMTYgNThWMThaTTI5Ljk4NzUgMzJDMzIuMTk3NCAzMiAzMy45ODkgMzAuMjA5MSAzMy45ODkgMjhDMzMuOTg5IDI1Ljc5MDkgMzIuMTk3NCAyNCAyOS45ODc1IDI0QzI3Ljc3NzUgMjQgMjUuOTg2IDI1Ljc5MDkgMjUuOTg2IDI4QzI1Ljk4NiAzMC4yMDkxIDI3Ljc3NzUgMzIgMjkuOTg3NSAzMlpNNjIgNThWNTEuNTgxM0w0OC44OTE3IDM0LjUxNjRDNDguNjkxNSAzNC4yNTU4IDQ4LjI5ODUgMzQuMjU1OCA0OC4wOTgzIDM0LjUxNjRMMzUuMjg2NSA1MS4xOTU0TDI5Ljg3NzYgNDQuNDgzM0MyOS42NzczIDQ0LjIzNDkgMjkuMjk4NyA0NC4yMzQ5IDI5LjA5ODUgNDQuNDgzM0wxOCA1OC4yNTU3QzE4LjEyNTYgNTkuMjM5NSAxOC45NjYyIDYwIDE5Ljk4NDUgNjBINTkuOTk5M0M2MS4xMDQyIDYwIDYyIDU5LjEwNDYgNjIgNThaIiBmaWxsPSIjNEQ0RDREIi8+Cjwvc3ZnPgo\x3d'); background-size: cover; } .orp-c-playlist-it-time { position: absolute; display: none; height: 20px; right: 4px; bottom: 4px; font-size: 12px; line-height: 16px; background: rgba(0, 9, 25, 0.8); border-radius: 4px; padding: 2px; color: #FFFFFF; opacity: 0.85; } .orp-c-playlist-it-name { font-weight: bold; font-size: 14px; line-height: 16px; } .orp-c-playlist-it-description { font-size: 12px; line-height: 16px; color: #FFFFFF; opacity: 0.7; margin-top: 5px; height: 34px; text-overflow: ellipsis; max-height: 34px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; } .orp-c-playlist-item:hover { background: rgba(255, 255, 255, 0.1); /*background: #313131;*/ } .orp-c-playlist-item.orp-is-playing .orp-c-playlist-it-poster { box-shadow: inset -2px -2px #008BF6, inset 2px 2px #008BF6; } .orp-c-playlist-item.orp-is-playing .orp-c-playlist-it-name { color: #008BF6; } .orp-size-small .orp-c-playlist-item { padding-left: 92px; min-height: 76px; } .orp-size-small .orp-c-playlist-it-poster { width: 60px; height: 60px; } .orp-size-small .orp-c-playlist-it-name { font-size: 12px; } @media (max-width: 400px) { .orp-c-playlist-item { padding-left: 92px; min-height: 76px; } .orp-c-playlist-it-poster { width: 60px; height: 60px; } .orp-c-playlist-it-name { font-size: 12px; } } /*settings*/ .orp-settings-holder { display: none; position: absolute; top: 0; right: 0; bottom: 0; z-index: 4; background: rgba(0, 0, 0, 0.85); width: 200px; text-align: left; max-width: 100%; } .orp-show-settings .orp-settings-holder { display: block; } .orp-settings-holder * { box-sizing: border-box; text-align: left; } .orp-settings-head { position: absolute; top: 0; left: 0; right: 0; height: 54px; border-bottom: 1px solid rgba(255, 255, 255, 0.15); } .orp-settings-close { width: 24px; height: 24px; position: absolute; right: 16px; top: 16px; cursor: pointer; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNUwxMiAxMC41OUw2LjQxIDVMNSA2LjQxTDEwLjU5IDEyTDUgMTcuNTlMNi40MSAxOUwxMiAxMy40MUwxNy41OSAxOUwxOSAxNy41OUwxMy40MSAxMkwxOSA2LjQxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg\x3d\x3d') no-repeat center center; } .orp-settings-name { position: absolute; left: 16px; right: 40px; top: 16px; font-size: 14px; line-height: 24px; color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .orp-settings-body { position: absolute; top: 57px; left: 0; right: 2px; bottom: 2px; overflow: auto; scrollbar-color: #aaa #eee; } .orp-settings-body::-webkit-scrollbar { width: 8px; } .orp-settings-body::-webkit-scrollbar-track, .orp-settings-body::-webkit-scrollbar-thumb { background-color: transparent; border-radius: 4px; } .orp-settings-body:hover::-webkit-scrollbar-track { background-color: #eee; opacity: 0.9; } .orp-settings-body:hover::-webkit-scrollbar-thumb { background-color: #aaaaaa; } .orp-settings-body::-webkit-scrollbar-thumb:hover { background-color: #8f8f8f; } .orp-settings-item { padding: 8px 16px; position: relative; color: rgba(255,255,255,0.7); cursor: pointer; font-size: 12px; line-height: 16px; } .orp-settings-item:hover { background: rgba(255, 255, 255, 0.1); /*background: #313131;*/ } .orp-settings-item.orp-is-active:before { content: ''; position: absolute; width: 24px; height: 24px; right: 16px; top: 4px; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTk5OSAxNS4yTDUuNzk5OSAxMUw0LjM5OTkgMTIuNEw5Ljk5OTkgMThMMTkuNSA4LjVMMTguMSA3LjFMOS45OTk5IDE1LjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuOTk5OSAxNS4yTDUuNzk5OSAxMUw0LjM5OTkgMTIuNEw5Ljk5OTkgMThMMTkuNSA4LjVMMTguMSA3LjFMOS45OTk5IDE1LjJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K') no-repeat 0 0; } .orp-settings-item.orp-is-hd:after { content: 'HD'; color: red; font-weight: 600; font-size: 10px; line-height: 10px; vertical-align: top; padding: 0 2px; } .orp-c-settings.orp-is-hd-selected:after { content: ''; position: absolute; width: 18px; height: 12px; right: -2px; top: 6px; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxOCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMkMwIDAuODk1NDMxIDAuODk1NDMxIDAgMiAwSDE1Ljk5OTVDMTcuMTA0IDAgMTcuOTk5NSAwLjg5NTQzMSAxNy45OTk1IDJWMTBDMTcuOTk5NSAxMS4xMDQ2IDE3LjEwNCAxMiAxNS45OTk1IDEySDJDMC44OTU0MzEgMTIgMCAxMS4xMDQ2IDAgMTBWMloiIGZpbGw9IiNGRjMzMzMiLz4KPHBhdGggZD0iTTcuOTg0MjggNFYxMEg2LjU5NDUyVjcuNTQwODVINC4zODk3NlYxMEgzVjRINC4zODk3NlY2LjMyMzk0SDYuNTk0NTJWNEg3Ljk4NDI4WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC43Ii8+CjxwYXRoIGQ9Ik0xMC4wMjQ0IDEwVjRIMTEuOTk5NEMxMi40OTY1IDQgMTIuOTMxNSA0LjA3ODg3IDEzLjMwNDQgNC4yMzY2MkMxMy42NzczIDQuMzk0MzcgMTMuOTg4IDQuNjA4NDUgMTQuMjM2NiA0Ljg3ODg3QzE0LjQ5MDggNS4xNDkzIDE0LjY4MDEgNS40Njc2MSAxNC44MDQzIDUuODMzOEMxNC45MzQzIDYuMTk0MzcgMTQuOTk5MiA2LjU4MDI4IDE0Ljk5OTIgNi45OTE1NUMxNC45OTkyIDcuNDQ3ODkgMTQuOTI4NiA3Ljg2MTk3IDE0Ljc4NzQgOC4yMzM4QzE0LjY0NjIgOC42IDE0LjQ0MjggOC45MTU0OSAxNC4xNzczIDkuMTgwMjhDMTMuOTE3NCA5LjQzOTQ0IDEzLjYwMSA5LjY0MjI1IDEzLjIyODEgOS43ODg3M0MxMi44NjA5IDkuOTI5NTggMTIuNDUxMyAxMCAxMS45OTk0IDEwSDEwLjAyNDRaTTEzLjU4NDEgNi45OTE1NUMxMy41ODQxIDYuNzI2NzYgMTMuNTQ3MyA2LjQ4NzMyIDEzLjQ3MzkgNi4yNzMyNEMxMy40MDYxIDYuMDUzNTIgMTMuMzA0NCA1Ljg2NDc5IDEzLjE2ODggNS43MDcwNEMxMy4wMzMyIDUuNTQ5MyAxMi44NjY2IDUuNDI4MTcgMTIuNjY4OSA1LjM0MzY2QzEyLjQ3MTEgNS4yNTkxNSAxMi4yNDggNS4yMTY5IDExLjk5OTQgNS4yMTY5SDExLjQxNDJWOC43ODMxSDExLjk5OTRDMTIuMjUzNiA4Ljc4MzEgMTIuNDc5NiA4LjczODAzIDEyLjY3NzMgOC42NDc4OUMxMi44NzUxIDguNTU3NzUgMTMuMDM4OSA4LjQzMzggMTMuMTY4OCA4LjI3NjA2QzEzLjMwNDQgOC4xMTI2OCAxMy40MDYxIDcuOTIzOTQgMTMuNDczOSA3LjcwOTg2QzEzLjU0NzMgNy40OTAxNCAxMy41ODQxIDcuMjUwNyAxMy41ODQxIDYuOTkxNTVaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPHBhdGggZD0iTTcuOTg0MjggM1Y5SDYuNTk0NTJWNi41NDA4NUg0LjM4OTc2VjlIM1YzSDQuMzg5NzZWNS4zMjM5NEg2LjU5NDUyVjNINy45ODQyOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMC4wMjQ0IDlWM0gxMS45OTk0QzEyLjQ5NjUgMyAxMi45MzE1IDMuMDc4ODcgMTMuMzA0NCAzLjIzNjYyQzEzLjY3NzMgMy4zOTQzNyAxMy45ODggMy42MDg0NSAxNC4yMzY2IDMuODc4ODdDMTQuNDkwOCA0LjE0OTMgMTQuNjgwMSA0LjQ2NzYxIDE0LjgwNDMgNC44MzM4QzE0LjkzNDMgNS4xOTQzNyAxNC45OTkyIDUuNTgwMjggMTQuOTk5MiA1Ljk5MTU1QzE0Ljk5OTIgNi40NDc4OSAxNC45Mjg2IDYuODYxOTcgMTQuNzg3NCA3LjIzMzhDMTQuNjQ2MiA3LjYgMTQuNDQyOCA3LjkxNTQ5IDE0LjE3NzMgOC4xODAyOEMxMy45MTc0IDguNDM5NDQgMTMuNjAxIDguNjQyMjUgMTMuMjI4MSA4Ljc4ODczQzEyLjg2MDkgOC45Mjk1OCAxMi40NTEzIDkgMTEuOTk5NCA5SDEwLjAyNDRaTTEzLjU4NDEgNS45OTE1NUMxMy41ODQxIDUuNzI2NzYgMTMuNTQ3MyA1LjQ4NzMyIDEzLjQ3MzkgNS4yNzMyNEMxMy40MDYxIDUuMDUzNTIgMTMuMzA0NCA0Ljg2NDc5IDEzLjE2ODggNC43MDcwNEMxMy4wMzMyIDQuNTQ5MyAxMi44NjY2IDQuNDI4MTcgMTIuNjY4OSA0LjM0MzY2QzEyLjQ3MTEgNC4yNTkxNSAxMi4yNDggNC4yMTY5IDExLjk5OTQgNC4yMTY5SDExLjQxNDJWNy43ODMxSDExLjk5OTRDMTIuMjUzNiA3Ljc4MzEgMTIuNDc5NiA3LjczODAzIDEyLjY3NzMgNy42NDc4OUMxMi44NzUxIDcuNTU3NzUgMTMuMDM4OSA3LjQzMzggMTMuMTY4OCA3LjI3NjA2QzEzLjMwNDQgNy4xMTI2OCAxMy40MDYxIDYuOTIzOTQgMTMuNDczOSA2LjcwOTg2QzEzLjU0NzMgNi40OTAxNCAxMy41ODQxIDYuMjUwNyAxMy41ODQxIDUuOTkxNTVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K') no-repeat 0 0; } .orp-tiny-size .orp-ctrl { margin-left: 0; margin-right: 0; } .orp-yt-container .orp-yt-player { width: 100%; height: 100%; } .orp-yt-container .orp-c-play-big { display: none!important; } .orp-yt-container .orp-vol { left: 5px; bottom: 3px; } .orp-proVideo .orp-yt-container .orp-title, .orp-yt-container:not(.orp-isPlaying) .orp-title { display:none; left: 6px; bottom: 30px; } .orp-yt-container .orp-title.orp-title-text { display:block; left: 37px; bottom: 6px; } .orp-yt-container .orp-close, .orp-yt-container .orp-c-close { display: none; top: 15px; right: 9px; } .orp-yt-container.orp-isPlaying .orp-title, .orp-yt-container.orp-isPlaying .orp-close, .orp-yt-container.orp-isPlaying .orp-c-close { display:block; } .orp-yt-container .orp-skip { bottom: 46px; }") +
                        "\x3c/style\x3e", q("head", a).append(c))
                }

                function e() {
                    E && b.file && "string" === typeof b.file && t.src(b.file);
                    var n = new Wb(t, b, L);
                    n.build();
                    t.on("fullscreenChange", function(a) {
                        w.setFullscreen(a)
                    });
                    E && (new Xb(t, b)).build();
                    v = b.type;
                    d();
                    var m = new Yb(c, t, b, n.startLoad);
                    p = m.build(u);
                    w.setAdController(p);
                    f();
                    (function() {
                        p.onAdStart(n.startLoad);
                        p.onForceShow(n.endLoad);
                        p.onAdStarted(n.endLoad);
                        p.onBeforeGlobalStop(function() {
                            n.startLoad(!0)
                        });
                        p.onGlobalStopped(function() {
                            if (E || "inBanner" === v) n.isOver(), t.on("ended",
                                n.isOver)
                        });
                        p.onAdVolumeChange(function() {
                            p.soundByHover() || p.isMuted() === t.muted() || t.muted(p.isMuted())
                        });
                        (function() {
                            var a = window.mobPlayerProStart,
                                b = window.mobPlayerProStop;
                            q.isFunction(a) && q.isFunction(b) && (p.onAdStarted(a), p.onGlobalStopped(b))
                        })()
                    })();
                    L.on(y.close, p.videoUserClose);
                    L.trigger(y.apiReady);
                    x(function(a, b, c) {
                        m.soundBehavior(b);
                        n.autoplay(a);
                        l(a, c)
                    });
                    Pb(t.getWrapper(), b.advertising, a, G)
                }

                function u(a, c) {
                    var d = q('\x3cvideo playsinline preload\x3d"' + (c ? b.preload || "metadata" : "auto") +
                            '" ' + (c ? "" : "autoplay") + "/\x3e"),
                        p = q('\x3cdiv class\x3d"orp-lp-holder"\x3e\x3c/div\x3e'),
                        f = new Zb(p.get(0), d.get(0), c, function() {
                            return w && w.width() / w.height()
                        });
                    d = q(f.getWrapper()).append(d);
                    c ? (p = q('\x3cdiv class\x3d"orp-light-player-wrapper"\x3e\x3c/div\x3e').append(d), a.append(p), d.wrap("\x3cdiv class\x3d'orp-player-iframe'\x3e\x3cdiv class\x3d'orp-light-player-wrapper'\x3e\x3c/div\x3e\x3c/div\x3e"), setTimeout(function() {
                        e()
                    }, 0)) : (q(a).append(p), d.wrap("\x3cdiv class\x3d'orp-light-player-wrapper'\x3e\x3c/div\x3e"));
                    c && new $b(f, n);
                    c && new mc(f, n, F);
                    c && new nc(f, n);
                    c && !V && new oc(f, n);
                    c && new pc(f, n);
                    return f
                }

                function x(a) {
                    !V && Ea ? a(n.autoStart, !0) : V && n.autoStart ? xb(function(b) {
                        a(b, !0, !b)
                    }) : !V && (n.autoStart && !n.muted || n.soundByHover) ? xb(function(b) {
                        n.soundByHover && b && p.soundByHover(!0);
                        a(n.autoStart, !b || n.muted)
                    }) : a(n.autoStart, n.muted)
                }
                b = q.extend(!0, {}, b);
                if (!("mobile" === b.platform && !V || "desktop" === b.platform && V)) return Rb(b, c.isAdapter()), n = b, A.prepare(n, c), a.innerHTML = "", "inView" !== b.type && "rewarded" !== b.type ? q(a).css({
                        display: "block",
                        overflow: "hidden"
                    }) : q(a).css("position", "absolute"), (E = "inStream" === b.type) || db(q(a)), b.advertising && (A.debugMode(b.advertising.debugMode), b.advertising.id = (new Date).getTime() + Math.random(), m(b)),
                    function() {
                        var c = xa(a[0] || a).document;
                        g(c, !0);
                        g(c, !1);
                        t = u(q(a), !0);
                        w = new qc(a, b);
                        Ab(a, w, b)
                    }(), this
            };
            this.load = function(a) {
                t.trigger(y.resetStatus, a);
                if (!x) return t.next(a.file), this;
                f();
                t.next(a.file);
                t.trigger(y.beforePlay);
                return this
            };
            this.globalStop = function() {
                p && p.globalStop()
            };
            this.getHeight = function() {
                return w.height()
            };
            this.getWidth = function() {
                return w.width()
            };
            this.resize = function(a, b, c) {
                w.resizeApi(a, b, c)
            };
            this.remove = function() {
                b();
                P || (p && p.adClose(), c.destroy(), q(a).empty())
            }
        };
        this.getCurrentApi = function() {
            return F
        };
        var G = new rc(this);
        this.getApi = function() {
            return G
        }
    }

    function rc(a) {
        function b() {
            l.forEach(function(a) {
                e(a[0], a[1], a[2])
            })
        }

        function e(b, m, d) {
            if (g) {
                var c = a.getAdController().getPlayerListeners();
                d = d ? c.safeOn : c.off;
                b === y.adStopped ? d(y.globalStopped, m) : "AdClicked" === b ? d(y.adClickThru, m) : (b === y.adLoaded &&
                    (b = y.globalLoaded), d(b, m))
            } else l.push([b, m, d])
        }
        var g = !1,
            l = [];
        a.one(y.apiReady, function() {
            g = !0;
            b()
        });
        this.setup = function(b) {
            try {
                return a.getCurrentApi().setup(b), this
            } catch (m) {
                throw A.initError(a.getElement(), "setup " + m, b), m;
            }
        };
        this.load = function(b) {
            a.getCurrentApi().load(b)
        };
        this.resize = function(b, m, d) {
            a.getCurrentApi().resize(b, m, d)
        };
        this.remove = function() {
            a.getCurrentApi().remove()
        };
        this.on = function(a, b) {
            e(a, b, !0);
            return this
        };
        this.off = function(a, b) {
            e(a, b, !1);
            return this
        };
        this.resizeAd = function(b,
            m, d) {
            a.getCurrentApi().resize(b, m, "fullscreen" === d)
        };
        this.stopAd = function() {
            a.getAdController().adClose()
        };
        this.pauseAd = function() {
            a.getAdController().pauseAd()
        };
        this.resumeAd = function() {
            a.getAdController().resumeAd()
        };
        this.skipAd = function() {
            a.getAdController().skipAd()
        };
        this.getAdWidth = function() {
            return a.getCurrentApi().getWidth()
        };
        this.getAdHeight = function() {
            return a.getCurrentApi().getHeight()
        };
        this.getAdRemainingTime = function() {
            return a.getAdController().getAdRemainingTime()
        };
        this.getAdDuration =
            function() {
                return a.getAdController().getAdDuration()
            };
        this.getAdVolume = function() {
            return a.getAdController().volume()
        };
        this.setAdVolume = function(b) {
            return a.getAdController().volume(b)
        };
        this.getAdSkippableState = function() {
            return a.getAdController().getAdSkippableState()
        }
    }

    function sc() {
        function a(a, b) {
            function d() {
                0 === m && (m = 1, b())
            }

            function n() {
                1 !== m && (m = 2, b())
            }
            if (a !== y.adStarted) g.getApi().on(a, b);
            else {
                var m = 0;
                g.getApi().on(y.forceShow, d);
                g.getApi().on(y.adStarted, n);
                var f = c[b];
                c[b] = function() {
                    f &&
                        f();
                    g.getApi().off(y.forceShow, d);
                    g.getApi().off(y.adStarted, n)
                }
            }
        }

        function b(a) {
            A.log("vpaid " + a)
        }

        function e() {
            return g.getAdController()
        }
        var g, l, f = [],
            m, d, c = {};
        this.handshakeVersion = function(a) {
            return "2.0"
        };
        this.subscribe = function(c, d, p) {
            b("subscribe " + d);
            var n = c.bind(p);
            d !== y.adError && d !== y.adSkipped && (g ? a(d, n) : (b("subscribe array"), f.push({
                f: function() {
                    b("call event " + d);
                    n()
                },
                e: d
            })))
        };
        this.unsubscribe = function(a, d) {
            b("unsubscribe " + d);
            g.getApi().off(d, a);
            d === y.adStarted && c[a] && c[a]()
        };
        this.initAd =
            function(c, l, p, e, v, x) {
                b("initAd");
                p = JSON.parse(v.AdParameters);
                e = p.attributes;
                e[fa] = p.id;
                e.width = c;
                e.height = l;
                m = c;
                d = l;
                e._pType = "vp";
                g = new Ua(fb(x.slot, p.id), T, p.id, !0);
                new Cb(g);
                g.getApi().setup(e);
                q(f).each(function() {
                    b("initAd " + this.e);
                    a(this.e, this.f)
                });
                f = null;
                Tb(p)
            };
        this.resizeAd = function(a, b, c) {
            e() && g.getApi().resize(a, b, "fullscreen" === c)
        };
        this.startAd = function() {
            e() && (b("startAd"), l || (l = !0, e().adStart(), g.getApi().on(y.globalLoaded, e().adStart)))
        };
        this.stopAd = function() {
            e() && (b("stopAd"), e().adClose())
        };
        this.pauseAd = function() {
            e() && e().pauseAd()
        };
        this.resumeAd = function() {
            e() && e().resumeAd()
        };
        this.expandAd = function() {};
        this.collapseAd = function() {};
        this.skipAd = function() {
            e() && e().skipAd()
        };
        this.getAdLinear = function() {
            return !0
        };
        this.getAdWidth = function() {
            return e() ? g.getApi().getAdWidth() : m
        };
        this.getAdHeight = function() {
            return e() ? g.getApi().getAdHeight() : d
        };
        this.getAdExpanded = function() {
            return !1
        };
        this.skipOffset = function() {
            return -1
        };
        this.getAdSkippableState = function() {
            return !1
        };
        this.getAdRemainingTime =
            function() {
                return e() ? e().getAdRemainingTime() : -2
            };
        this.getAdDuration = function() {
            return e() ? e().getAdDuration() : -2
        };
        this.getAdVolume = function() {
            return e() ? e().volume() : -1
        };
        this.setAdVolume = function(a) {
            if (e()) return e().volume(a)
        };
        this.getAdCompanions = function() {
            return ""
        };
        this.getAdIcons = function() {
            return !1
        }
    }

    function Va(a) {
        function b(a, b, n) {
            var c = n ? gb(a, !0) : a;
            this.original = function() {
                return a
            };
            this.run = function(d) {
                var n = c;
                b && (a = c = T);
                n(d);
                return b
            }
        }

        function e(a) {
            function b() {
                0 === f && (d = d.filter(function(a) {
                    return a.original() !==
                        T
                }))
            }
            var d = [a],
                f = 0;
            this.off = function(a) {
                d.forEach(function(b, c) {
                    a && d[c].original() !== a || (d[c] = m)
                });
                b()
            };
            this.trigger = function(a) {
                f++;
                try {
                    for (var c = 0; c < d.length; c++) d.hasOwnProperty(c) && d[c].run(a)
                } finally {
                    f--
                }
                b()
            };
            this.push = function(a) {
                d.push(a)
            }
        }

        function g(d, c, n, m) {
            var p = l[d];
            c = new b(c, n, m);
            p ? p.push(c) : (l[d] = new e(c), a && a.addEventListener(d.toLowerCase(), function() {
                f.trigger(d)
            }))
        }
        var l = {},
            f = this,
            m = new b(T);
        this.on = function(a, b, n) {
            g(a, b, n)
        };
        this.one = function(a, b) {
            f.on(a, b, !0)
        };
        this.safeOn = function(a,
            b, n) {
            g(a, b, n, !0)
        };
        this.off = function(a, b) {
            var c = l[a];
            c && c.off(b)
        };
        this.offAll = function() {
            for (var a in l) l.hasOwnProperty(a) && f.off(a)
        };
        this.trigger = function(a, b) {
            var c = l[a];
            c && c.trigger(b)
        }
    }

    function tc(a, b, e) {
        function g(a, b, c) {
            var d;
            if (d = a ? b.requestFullscreen || b.webkitRequestFullscreen || b.mozRequestFullScreen || b.enterFullscreen || b.webkitEnterFullscreen || b.msRequestFullscreen : b.exitFullscreen || b.webkitCancelFullScreen || b.webkitExitFullscreen || b.mozCancelFullScreen || b.msExitFullscreen) return void 0 ===
                Wa && (Wa = !c),
                function() {
                    var a = d.apply(c ? q(b).parent().get(0) : b);
                    void 0 !== a && "function" === typeof a.then && a.then(null, function(a) {
                        A.log("fullscreen conflict, reason:" + a)
                    })
                }
        }

        function l(a) {
            return function() {
                m = a;
                e.trigger("fullscreenChange", a)
            }
        }

        function f() {
            var a = document;
            return !!(m || a.fullscreenElement || a.webkitFullscreenElement || a.webkitCurrentFullScreenElement || a.mozFullScreenElement || a.msFullscreenElement)
        }
        var m = !1,
            d = !1;
        this.fullscreenOpen = g(!0, a, !0);
        this.fullscreenOpen || (this.fullscreenOpen = g(!0, b)) &&
            (d = !0);
        this.fullscreenClose = g(!1, document);
        this.fullscreenClose || (this.fullscreenClose = g(!1, b));
        this.isFullscreenElement = function() {
            return d
        };
        !this.fullscreenOpen && (this.fullscreenOpen = l(!0));
        !this.fullscreenClose && (this.fullscreenClose = l(!1));
        this.isFullscreen = f;
        q(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange", function() {
            e.trigger("fullscreenChange", f())
        });
        q(b).on("webkitbeginfullscreen", function() {
            m = !0;
            e.trigger("fullscreenChange", f())
        });
        q(b).on("webkitendfullscreen",
            function() {
                m = !1;
                e.trigger("fullscreenChange", f())
            });
        var c = !1;
        this.isError = function() {
            return c
        };
        e.on("error", function() {
            c = !0
        });
        e.on(y.resetStatus, function() {
            c = !1
        })
    }

    function Zb(a, b, e, g) {
        function l() {
            if (za(t, ".m3u8"))
                if (b.canPlayType("application/vnd.apple.mpegurl")) p = function() {
                    return Infinity === b.duration
                }, m.one("loadedmetadata", function() {
                    w && u.play()
                });
                else return ja("https://serving.stat-rock.com/player/hls/0.12.4.js", function(a) {
                    var c = new a.Hls;
                    c.loadSource(t);
                    c.attachMedia(b);
                    c.on(a.Hls.Events.LEVEL_LOADED,
                        function(a, b) {
                            p = function() {
                                return b.details.live
                            }
                        });
                    c.on(a.Hls.Events.MANIFEST_PARSED, function() {
                        w && u.play()
                    })
                }, function() {
                    A.log("fail hls")
                }, function(a) {
                    return !!a.Hls
                }, b), !0;
            else p = !1
        }

        function f() {
            function a(a) {
                var c = a.dashjs.MediaPlayer().create();
                c.updateSettings({
                    debug: {
                        logLevel: a.dashjs.Debug.LOG_LEVEL_ERROR
                    }
                });
                c.initialize(b, t, !1);
                p = function() {
                    return !isNaN(c.getCurrentLiveLatency())
                };
                c.on("playbackMetaDataLoaded", function() {
                    m.trigger("loadedPlayerDash", c)
                });
                c.on("canPlay", function() {
                    w && c.play()
                });
                m.one("destroy", function() {
                    c && c.reset()
                })
            }
            if (za(t, ".mpd")) return ja("https://serving.stat-rock.com/player/dash/3.0.0.js", a, function() {
                A.log("fail dash")
            }, function(a) {
                return !!a.dashjs
            }, b), !0
        }
        var m = new Va(b),
            d = new tc(a, b, m),
            c = this,
            n = !1,
            t, p = !1,
            w = !1,
            v = q(a),
            x = q(b),
            u = this;
        this.getWrapper = function() {
            return a
        };
        this.getVideo = function() {
            return b
        };
        this.play = function() {
            w = !0;
            var a = b.play();
            void 0 !== a && "function" === typeof a.then && a.then(null, function(a) {
                a && (c.muted() ? c.pause() : (c.muted(!0), c.play()))
            })
        };
        this.promisePlay =
            function() {
                if (n || Ea) this.play();
                else c.one("canplay", this.play)
            };
        this.pause = function() {
            b.pause()
        };
        this.currentTime = function(a) {
            if (void 0 === a || isNaN(a)) return b.currentTime > b.duration ? b.duration : b.currentTime;
            b.currentTime = a
        };
        this.duration = function() {
            return b.duration
        };
        this.ended = function() {
            return b.ended
        };
        this.src = function(a) {
            void 0 !== a && (p = !1, t = yb(a) ? "" : a, l() || f() || (b.src = t), n = !1);
            return t
        };
        this.preload = function(a) {
            b.preload = a
        };
        this.volume = function(a) {
            void 0 !== a && (b.volume = a);
            return b.volume
        };
        this.muted =
            function(a) {
                void 0 !== a && (b.muted = a);
                return b.muted
            };
        this.buffered = function() {
            return b.buffered
        };
        this.canPlayType = function(a) {
            return b.canPlayType(a)
        };
        this.isPaused = function() {
            return b.paused
        };
        this.next = function(a) {
            c.src(a);
            b.load()
        };
        this.getBuffer = function() {
            var a = c.buffered(),
                b = c.duration(),
                d = c.currentTime();
            if (a && a.length && b)
                for (var n = 0; n < a.length; n++)
                    if (d >= a.start(n) && d <= a.end(n)) return Math.min(100 * a.end(n) / b, 100);
            return 0
        };
        this.calcFit = function() {
            if (c.isFullscreen()) v.toggleClass("orp-fit-fill", !1);
            else {
                try {
                    var a = v.hasClass("orp-ima-container") ? 16 / 9 : b.videoWidth / b.videoHeight;
                    a /= g()
                } catch (C) {}
                a && A.log("orp-fit-fill " + a);
                v.toggleClass("orp-fit-fill", .98 < a && 1.02 > a)
            }
        };
        x.on("loadedmetadata", u.calcFit);
        this.isLive = function() {
            return p && p()
        };
        x.on("canplay", function() {
            n = !0
        });
        m.on("ended", function() {
            m.trigger(y.beforeComplete)
        });
        m.on("error", function() {
            var a = c.src();
            setTimeout(function() {
                a === c.src() && (b.error || c.error) && m.trigger(y.beforeComplete)
            }, 3E3)
        });
        (function() {
            function a(a, b) {
                if (!c) return b;
                var d = localStorage.getItem(O("odPleyarPrA") + "." + a);
                return d ? d : b
            }
            var c = e;
            Sa() || (c = !1);
            b.volume = Number(a("volume", 100)) / 100;
            b.muted = "true" === a("muted", b.muted);
            var d = b.volume,
                n = b.muted;
            q(b).on("volumechange", function() {
                if (d !== b.volume) {
                    d = b.volume;
                    b.muted = 0 === d;
                    var a = Math.round(100 * d);
                    c && localStorage.setItem(O("odPleyarPrA") + ".volume", a);
                    m.trigger("volume", {
                        volume: a
                    })
                }
                n !== b.muted && (a = b.muted, c && localStorage.setItem(O("odPleyarPrA") + ".muted", a), n = b.muted, m.trigger("mute", {
                    mute: n
                }))
            })
        })();
        this.on = m.on;
        this.one = m.one;
        this.offAndOne = function(a, b) {
            m.off(a, b);
            m.one(a, b)
        };
        this.off = m.off;
        this.offAll = m.offAll;
        this.trigger = m.trigger;
        this.isError = d.isError;
        this.fullscreenOpen = d.fullscreenOpen;
        this.fullscreenClose = d.fullscreenClose;
        this.isFullscreen = d.isFullscreen;
        this.isFullscreenElement = d.isFullscreenElement;
        this.destroy = function() {
            m.trigger("destroy");
            b.pause();
            b.removeAttribute("src");
            b.load()
        }
    }

    function qc(a, b) {
        function e() {
            var a = M ? D.width() : n(),
                b = M ? D.height() : t();
            g(a, b, G && !M)
        }

        function g(a, b, c) {
            if (a !==
                P || b !== L) c && J.width(a).height(b), F && F.resize(a, b, M), P = a, L = b
        }

        function l(a) {
            400 > a.width() ? S.addClass("orp-tiny-size") : S.removeClass("orp-tiny-size")
        }

        function f() {
            if (b.fixTransform) return S.parents().toArray().find(function(a) {
                return "none" !== q(a).css("transform")
            })
        }

        function m(a, c, d, n, p) {
            a && b.advertising.position !== a || J.css({
                right: n || 0,
                bottom: p || "auto",
                transform: c || d ? "translate(" + c + "px, " + d + "px)" : "none"
            })
        }

        function d() {
            if (K) {
                var a = D[0].scrollY - q(K).offset().top + 20,
                    b = D[0].scrollY - q(K).offset().top + D[0].innerHeight -
                    20,
                    c = -q(K).offset().left,
                    d = D[0].innerWidth - q(K).offset().left - 40,
                    n = D[0].innerWidth / 2 - (K.clientWidth / 2 + q(K).offset().left);
                m("TL", c, a, !1, !1);
                m("TC", n, a, !1, !1);
                m("TR", d, a, K.clientWidth, !1);
                m("BL", c, b, !1, K.clientHeight);
                m("BC", n, b, !1, K.clientHeight);
                m("BR", d, b, K.clientWidth, K.clientHeight)
            }
        }

        function c() {
            S.width(v).height(x);
            C && (N = q('\x3cdiv class\x3d"orp-fkstck"\x3e\x3c/div\x3e'), S.append(N).addClass("orp-aspectRateFixed"), J.css("paddingBottom", 100 * C + "%"));
            l(S)
        }

        function n(a) {
            return M || U ? D.width() : G &&
                !a && u ? Math.floor(u) : Math.floor(S.width())
        }

        function t(a) {
            if (M || U) return D.height();
            if (G && !a && E) return Math.floor(E);
            a = C ? C * n(a) : x || D.height();
            return Math.floor(a)
        }

        function p(a) {
            return a ? ~~a : a
        }

        function w() {
            D.off("resize", e);
            D.off("scroll resize", d);
            e()
        }
        var v, x, u, E, C, P, L, F, G, I, M = !1,
            B, K, S = q(a),
            J = q(".orp-light-player-wrapper:first", S),
            N, D = q(xa(a)),
            U;
        (function() {
            U = "rewarded" === b.type;
            if (b.aspectratio) {
                var a = b.aspectratio.split(":");
                C = (a[1] / a[0]).toFixed(2)
            } else C = void 0;
            C && (S.parent().css("flex", "0 1 100%"),
                b.maxWidth && S.css("max-width", ("" + b.maxWidth).replace("px", "") + "px"));
            v = (a = b.width) ? C ? a.replace("%", "") + "%" : a : "100%";
            x = C ? void 0 : p(b.height);
            (a = b.advertising) && a.sticky && (u = p(a.stickyWidth), E = p(a.stickyHeight), I = "orp-player-ivm-" + (a.position || "BR"));
            c();
            P = n();
            L = t();
            D.resize(e);
            K = f()
        })();
        this.resizeApi = function(a, b, d) {
            w();
            v = a;
            x = b;
            E = u = 0;
            C && (C = 0, N.remove(), N = 0, S.removeClass("orp-aspectRateFixed"), J.css("paddingBottom", ""));
            M = d;
            c();
            g(n(), t(), G)
        };
        this.setAdController = function(a) {
            F = a;
            F.sizeController(this)
        };
        this.stickyState = function(a) {
            if (G = a) {
                var b = n();
                var c = t();
                C ? N && N.css("paddingBottom", 100 * C + "%") : N && N.height(t(!0));
                J.addClass(I).width(b).height(c);
                S.addClass("orp-went-sticky");
                l(J)
            } else J.removeClass(I).width("").height(""), N && N.height("").css("paddingBottom", 0), l(S);
            a = G;
            K && (J.toggleClass("orp-js-positioned-sticky", a), a ? (setTimeout(d, 0), D.on("scroll resize", d)) : (D.off("scroll resize", d), setTimeout(m, 100)));
            g(b || n(), c || t());
            B = B || q(F.getWrapper()).parents(".orp-light-player-wrapper");
            B.toggleClass("orp-went-sticky",
                G)
        };
        this.setFullscreen = function(a) {
            a = !!a;
            a !== M && (M = a, e())
        };
        this.isInSticky = function() {
            return G
        };
        this.getAspectRatio = function() {
            return C
        };
        this.width = n;
        this.height = t;
        this.off = w
    }

    function Wb(a, b, e) {
        function g(a, b, c, d, n) {
            return hb(a, b, function() {
                a.parents(".orp-lp-controls-wrapper").addClass("orp-sliderInUse");
                c && c()
            }, d, function(b) {
                a.parents(".orp-lp-controls-wrapper").removeClass("orp-sliderInUse");
                n && n(b)
            })
        }

        function l() {
            w = setTimeout(function() {
                f(!0)
            }, 3E3)
        }

        function f(a, b) {
            clearTimeout(w);
            a === v || c.toggleClass("orp-isHiddenControls",
                a);
            b && l();
            v = a
        }

        function m(a) {
            a ? (c.removeClass("orp-isOver orp-isLoading orp-error").addClass("orp-isPlaying"), f(!1, !0), p(!1)) : c.removeClass("orp-isPlaying");
            t = a
        }

        function d(c) {
            if (b.image) {
                var d = q(a.getWrapper(), ".orp-init-placeholder");
                c ? d.css({
                    "background-image": "url(" + b.image + ")",
                    "background-repeat": "no-repeat",
                    "background-position": "center"
                }) : d.removeAttr("style")
            }
        }
        var c, n = !1,
            t = !1,
            p, w, v, x = this;
        this.build = function() {
            function u(a) {
                return L.find(a)
            }

            function w() {
                a.isFullscreen() ? a.fullscreenClose() :
                    a.fullscreenOpen()
            }

            function C() {
                c.hasClass("orp-isOver") && (a.isPaused() || a.pause(), a.currentTime(0));
                a.isPaused() ? (a.play(), m(!0)) : (a.pause(), m(!1))
            }
            var P = b && b.errorMessage ? b.errorMessage : "An error occurred. Please try again later";
            c = q(a.getWrapper(), ".orp-light-player-wrapper");
            c.parent().addClass("orp-isInit");
            "inBanner" === b.type && (c.parent().addClass("orp-isInBanner"), b.inApp && c.parent().addClass("orp-isInApp"));
            var L = q('\x3cdiv class\x3d"orp-lp-controls-wrapper"\x3e\x3c/div\x3e').appendTo(a.getWrapper()).append('\x3cdiv class\x3d"orp-ctrl orp-c-close" style\x3d"display: none"\x3e\x3c/div\x3e' +
                    zb(b.advertising, !0) + '\x3cdiv class\x3d"orp-ctrl orp-c-play-big"\x3e\x3ci class\x3d"orp-c-play-small"\x3e\x3cdiv class\x3d"orp-lp-loader-dots"\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-0"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-1"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-2"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-3"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-4"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-5"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-6"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-7"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrls"\x3e\x3cdiv id\x3d"ct2" class\x3d"orp-ctrl orp-c-progress-bg"\x3e\x3cdiv class\x3d"orp-c-progress-cache"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-progress-curr"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-progress-hover"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-play"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-next"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-vol"\x3e\x3cdiv class\x3d"orp-c-vol-toggle"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-vol-changer"\x3e\x3cdiv class\x3d"orp-c-vol-curr"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-time"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-live"\x3eLIVE\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-screen"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-error-block"\x3e\x3cspan\x3e' +
                    P + '\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-init-placeholder"\x3e\x3cdiv class\x3d"orp-init-button"\x3e\x3cdiv class\x3d"orp-lp-loader-dots"\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-0"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-1"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-2"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-3"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-4"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-5"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-6"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-7"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-landing-page"\x3e\x3c/div\x3e'),
                F = u(".orp-c-progress-bg");
            a.on("playing", function() {
                n = !0;
                u(".orp-title").show();
                x.endLoad()
            });
            a.on("durationchange", function() {
                u(".orp-ctrls").toggleClass("orp-live", a.isLive())
            });
            a.one(y.beforePlay, function() {
                c.parent().addClass("orp-init-loading");
                d(!1)
            });
            "inStream" !== b.type && (b.videoCloseButton || b.advertising.stickyCloseButton) && (P = u(".orp-c-close"), b.videoCloseButton && P.show(), P.click(function() {
                a.isPaused() || a.pause();
                e.trigger(y.close)
            }));
            (function() {
                F.remove(".orp-c-progress");
                a.on(y.timeTags,
                    function(b) {
                        function c() {
                            var c = a.duration();
                            c && q(b).each(function() {
                                var a = ~~this; - 1 === a && (a = ~~c);
                                0 <= a && a <= c && F.append('\x3cdiv class\x3d"orp-c-progress" style\x3d"left: ' + Math.floor(100 * a / c) + '%"\x3e\x3c/div\x3e')
                            })
                        }
                        if (b && b.length)
                            if (a.duration()) c();
                            else a.one("loadedmetadata", c)
                    })
            })();
            a.on("canplaythrough playing", function() {
                c.removeClass("orp-isLoading")
            });
            a.on("waiting", function() {
                c.addClass("orp-isLoading");
                a.one("timeupdate", function() {
                    c.removeClass("orp-isLoading")
                })
            });
            a.on("play", function() {
                m(!0)
            });
            a.on("pause", function() {
                a.ended() || m(!1)
            });
            a.on("ended", function() {
                p(!0);
                a.isFullscreenElement() && a.isFullscreen() && a.fullscreenClose()
            });
            var G = u(".orp-c-play-big");
            V ? (u(".orp-c-play-big").click(function() {
                a.isPaused() || (v ? f(!1, !0) : f(!0))
            }), u(".orp-ctrls").on("touchstart", function() {
                f(!1)
            }).on("touchend touchcancel", l)) : (G.mousemove(function() {
                f(!1, !0)
            }), c.mouseleave(function() {
                f(!0)
            }), u(".orp-ctrls").mouseenter(function() {
                f(!1)
            }));
            a.on("adShow", function() {
                a.isFullscreenElement() && a.isFullscreen() &&
                    a.fullscreenClose()
            });
            var I = u(".orp-c-screen").click(w);
            a.on(y.hideScreen, function() {
                I.hide();
                G.off("dblclick", w)
            });
            G.dblclick(w);
            a.on("fullscreenChange", function(b) {
                a.isFullscreenElement() ? b || m(!a.isPaused()) : (c.toggleClass("orp-full-screened", b), c.parent().toggleClass("orp-full-screened", b))
            });
            V ? (u(".orp-c-play-small").click(function() {
                (a.isPaused() || c.hasClass("orp-isOver")) && C()
            }), u(".orp-c-play").click(C)) : u(".orp-c-play,.orp-c-play-big").click(C);
            var M = u(".orp-c-progress-curr");
            a.on("timeupdate",
                function() {
                    var b = 0;
                    a.duration() && (b = 100 * a.currentTime() / a.duration());
                    M.width(b + "%")
                });
            p = g(F, M, T, null, function(b) {
                a.currentTime(a.duration() * b);
                t && !a.ended() ? a.play() : 1 <= b && !a.ended() && a.play()
            });
            g(F, u(".orp-c-progress-hover"));
            P = new function() {
                var b = u(".orp-c-progress-cache"),
                    c;
                this.init = function() {
                    c || (c = setInterval(function() {
                        b.width(a.getBuffer() + "%")
                    }, 100))
                };
                this.clear = function() {
                    c && clearInterval(c);
                    c = 0
                }
            };
            a.one("playing", P.init);
            a.on("play", P.init);
            a.on("pause", P.clear);
            a.on("ended", P.clear);
            a.on("error", P.clear);
            var B = u(".orp-c-time");
            a.on("timeupdate", function() {
                B.text(Qa(a.currentTime()) + " / " + Qa(a.duration()))
            });
            (function() {
                b.landingPage && (c.addClass("orp-jsLandingPage"), u(".orp-landing-page").one("click", function() {
                    window.open(b.landingPage, "_blank");
                    a.pause();
                    c.removeClass("orp-jsLandingPage");
                    return !1
                }))
            })();
            a.on(y.resetStatus, function() {
                a.getVideo().error = null;
                c.removeClass("orp-error")
            });
            a.on("error", function() {
                c.addClass("orp-error")
            });
            V ? c.parent().addClass("orp-isMobile") :
                c.parent().addClass("orp-notMobile");
            (function() {
                function b() {
                    var b = a.volume();
                    a.muted() && (b = 0);
                    var c = b;
                    .5 < c ? d.removeClass("orp-vol-mid orp-vol-off") : 0 === c ? d.removeClass("orp-vol-mid").addClass("orp-vol-off") : d.removeClass("orp-vol-off").addClass("orp-vol-mid");
                    n.width(100 * b + "%")
                }
                var c = a.volume(),
                    d = u(".orp-c-vol"),
                    n = u(".orp-c-vol-curr");
                b();
                g(u(".orp-c-vol-changer"), n, function() {
                    d.addClass("orp-isSelected")
                }, function(b) {
                    a.volume(b);
                    !!b === a.muted() && a.muted(!b)
                }, function() {
                    var b = a.volume();
                    !!b === a.muted() &&
                        a.muted(!b);
                    a.volume() ? c = a.volume() : a.volume(c || .1);
                    d.removeClass("orp-isSelected")
                });
                u(".orp-c-vol-toggle").click(function() {
                    d.hasClass("orp-vol-off") ? (a.volume(c || .1), a.muted(!1)) : a.muted(!0)
                });
                a.on("volume", b);
                a.on("mute", b)
            })()
        };
        this.autoplay = function(a) {
            a || d(!0)
        };
        this.startLoad = function(b) {
            (b || !n && !a.ended()) && c.parent().addClass("orp-isInit")
        };
        this.endLoad = function() {
            c.parent().removeClass("orp-isInit")
        };
        this.isOver = function() {
            m(!1);
            x.endLoad();
            c.addClass("orp-isOver")
        }
    }

    function Xb(a, b) {
        this.build =
            function() {
                function e(b) {
                    var d = a.duration(),
                        c = b ? a.currentTime() + f.seekStep : a.currentTime() - f.seekStep;
                    c >= d && l.removeClass("orp-isPlaying orp-isLoading orp-error").addClass("orp-isOver");
                    a.currentTime(c);
                    !b && l.hasClass("orp-isOver") && a.play()
                }

                function g(b) {
                    var d = a.volume();
                    b ? (b = d + f.volumeStep, b = 1 < b ? 1 : b) : (b = d - f.volumeStep, b = 0 > b ? 0 : b);
                    a.volume(b)
                }
                var l = q(a.getWrapper(), ".orp-light-player-wrapper");
                l.attr("tabIndex", "-1");
                var f = {
                    volumeStep: .1,
                    seekStep: 5
                };
                if (!b.autoStart) a.one("play", function() {
                    l.focus()
                });
                l.on("keydown", function(b) {
                    if (q(".orp-proVideo", l).is(":visible")) return !1;
                    switch (b.which) {
                        case 32:
                            b.preventDefault();
                            a.isPaused() ? (a.play(), l.removeClass("orp-isOver orp-isLoading orp-error").addClass("orp-isPlaying")) : (a.pause(), l.removeClass("orp-isPlaying"));
                            break;
                        case 37:
                            b.preventDefault();
                            e(!1);
                            break;
                        case 39:
                            b.preventDefault();
                            e(!0);
                            break;
                        case 40:
                            b.preventDefault();
                            g(!1);
                            break;
                        case 38:
                            b.preventDefault();
                            g(!0);
                            break;
                        case 77:
                            a.muted(!a.muted());
                            break;
                        case 70:
                            a.isFullscreen() ? a.fullscreenClose() :
                                a.fullscreenOpen(), l.focus()
                    }
                })
            }
    }

    function nc(a, b) {
        function e(b) {
            function f(a) {
                return function() {
                    n.find(".orp-is-active").removeClass("orp-is-active");
                    q(this).addClass("orp-is-active");
                    w.toggleClass("orp-is-hd-selected", q(this).hasClass("orp-is-hd"));
                    var c = "true" === q(this).attr("data-quality-auto");
                    c && g || !c && !g || (g = c, b.updateSettings({
                        streaming: {
                            abr: {
                                autoSwitchBitrate: {
                                    video: c
                                }
                            }
                        }
                    }));
                    b.setQualityFor("video", a);
                    e()
                }
            }

            function e() {
                c.hide()
            }
            var d = q(".orp-lp-controls-wrapper", q(a.getWrapper())),
                c = q('\x3cdiv class\x3d"orp-settings-holder"\x3e\x3c/div\x3e');
            d.append(c);
            c.append('\x3cdiv class\x3d"orp-settings-head"\x3e\x3cdiv class\x3d"orp-settings-name"\x3eVideo quality\x3c/div\x3e\x3cdiv class\x3d"orp-settings-close"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-settings-body"\x3e\x3c/div\x3e');
            var n = q(".orp-settings-body", c),
                l, p = function() {
                    var a = [];
                    b.getBitrateInfoListFor("video").reverse().forEach(function(b) {
                        a.find(function(a) {
                            return b.height === a.height
                        }) || a.push(b)
                    });
                    return a
                }();
            p.forEach(function(a, c) {
                var d = q('\x3cdiv class\x3d"orp-settings-item" data-quality-id\x3d"' +
                    a.qualityIndex + '"\x3e' + a.height + "p\x3c/div\x3e");
                1080 <= a.height && d.addClass("orp-is-hd");
                d.click(f(a.qualityIndex));
                n.append(d);
                b.getQualityFor("video") === a.qualityIndex && (l = a)
            });
            var w = q('\x3cdiv class\x3d"orp-ctrl orp-c-settings"\x3e\x3c/div\x3e');
            w.click(function() {
                c.show()
            });
            d.find(".orp-ctrls").append(w);
            c.find(".orp-settings-close").click(e);
            (function() {
                l = l || p[p.length - 1];
                var a = q('.orp-settings-item[data-quality-id\x3d"' + l.qualityIndex + '"]', n);
                a.attr("data-quality-auto", !0).addClass("orp-is-active").text("Auto (" +
                    l.height + "p)");
                w.toggleClass("orp-is-hd-selected", a.hasClass("orp-is-hd"))
            })()
        }
        var g = !0;
        if (b.file && za(b.file, ".mpd")) a.one("loadedPlayerDash", e)
    }

    function $b(a, b) {
        function e() {
            t = n.limit || t;
            a.play = m;
            a.promisePlay = m;
            a.src = function() {
                return n.url
            };
            a.next = T;
            q.get(n.url, g).fail(function() {
                f([])
            })
        }

        function g(a) {
            function b(a, b) {
                var c = 0;
                0 === a.length ? b() : a.forEach(function(n) {
                    d(n, e, function(d) {
                        (d || e) && (n._skip = !0);
                        d && g.push(d);
                        ++c === a.length && b()
                    })
                })
            }

            function c() {
                p = p.filter(function(a) {
                    return !a._skip
                })
            }

            function d(a,
                b, c) {
                var d = l(a);
                d && d.title && d.link && d.img ? c(d) : b && d && d.link ? q.get(d.link, function(b) {
                    b = l(a, b);
                    c(b && b.title && b.link && b.img ? b : !1)
                }).fail(function() {
                    c()
                }) : c()
            }
            var p = q(a).find("item").toArray(),
                g = [],
                e = !1;
            p.forEach(function(a, b) {
                a._id = b
            });
            b(p, function() {
                g.length >= t || !n.parsePage ? f(g) : (e = !0, c(), b(p.slice(0, Math.min(t - g.length, p.length)), function() {
                    f(g)
                }))
            })
        }

        function l(a, b) {
            try {
                var c = q(a),
                    d = b && q("\x3cb\x3e" + b + "\x3c/b\x3e"),
                    p = {
                        title: function() {
                            return c.find("title").text()
                        },
                        link: function() {
                            return c.find("link").text()
                        },
                        img: function() {
                            return q("\x3cb\x3e" + c.find("description").text() + "\x3c/b\x3e").find("img").attr("src")
                        }
                    };
                n.parser && (new Function("parser", "$item", "$", "$page", "page", n.parser))(p, c, q, d, b);
                return {
                    _id: a._id,
                    title: p.title(),
                    link: p.link(),
                    img: p.img()
                }
            } catch (E) {
                A.log([E, a])
            }
        }

        function f(p) {
            p.sort(function(a, b) {
                return a._id - b._id
            });
            p = p.slice(0, Math.min(t, p.length));
            b.advertising && b.advertising.barColor && (n.barColor = b.advertising.barColor);
            d = new uc(a, n, p);
            c && d.play()
        }

        function m() {
            d ? d.play() : c = !0
        }
        var d, c, n,
            t = 5;
        (n = b.file && Aa(b.file)) && n.url && "rss" === n.type && e()
    }

    function uc(a, b, e) {
        function g(b) {
            t && q(a.getWrapper()).removeClass("orp-isOver").addClass("orp-isPlaying orp-isHiddenControls");
            l(b);
            b = q.isNumeric(b) ? b : d + 1;
            b >= m.length ? (t = !0, a.trigger("ended")) : (m[d].img.hide().removeClass("orp-play").addClass("orp-reset").off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", g), d = b, m[d].img.show(), setTimeout(function() {
                m[d].progress.removeClass("orp-reset").addClass("orp-play");
                m[d].img.removeClass("orp-reset").addClass("orp-play").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", g)
            }, 300))
        }

        function l(a) {
            q.isNumeric(a) && (m[a].progress.find("div").css("with", "0"), m.forEach(function(b, c) {
                c < a ? b.progress.removeClass("orp-reset").addClass("orp-viewed") : b.progress.removeClass("orp-viewed").addClass("orp-reset")
            }))
        }

        function f() {
            function d(a) {
                V || a.hover(function() {
                    q(".orp-progress", this).css("background", b.barColor || "#2e95ff")
                }, function() {
                    q(".orp-progress",
                        this).css("background", "")
                })
            }

            function f(a) {
                return function() {
                    window.open(a, "_blank");
                    return !1
                }
            }

            function l(a) {
                return function() {
                    g(a)
                }
            }
            p = !0;
            q(".orp-lp-controls-wrapper", q(a.getWrapper())).append(n);
            q(a.getWrapper()).addClass("orp-isRss");
            var t = q('\x3cdiv class\x3d"orp-rss-items"\x3e\x3c/div\x3e'),
                E = q('\x3cdiv class\x3d"orp-rss-control"\x3e\x3c/div\x3e');
            n.append(t).append(E);
            var C = Math.floor(100 / e.length) + (1 < e.length ? "% - 4px" : "%"),
                P = "animation-duration: " + c + "s; transition: transform " + c + "000ms linear 0s;",
                L = "transition: width " + c + "s linear; background-color:" + (b.barColor || "#2e95ff");
            e.forEach(function(a, b) {
                var c = q('\x3cdiv class\x3d"orp-item orp-reset"\x3e\x3ci style\x3d"' + P + '"\x3e\x3c/i\x3e\x3cdiv class\x3d"orp-title"\x3e\x3cdiv class\x3d"orp-counter"\x3e' + (b + 1) + "/" + e.length + '\x3c/div\x3e\x3cdiv class\x3d"orp-text"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-button"\x3eRead more\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
                c.find("i").css("background-image", "url(" + a.img + ")").attr("alt", a.title);
                c.find(".text").text(a.title);
                c.click(f(a.link));
                t.append(c);
                var n = q('\x3cdiv class\x3d"orp-progressHover" style\x3d"width: calc(' + C + ')"\x3e\x3cdiv class\x3d"orp-progress"\x3e\x3cdiv style\x3d"' + L + '"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
                d(n, b);
                n.click(l(b));
                E.append(n);
                m.push({
                    img: c,
                    progress: n.find(".orp-progress")
                })
            })
        }
        var m = [],
            d = 0,
            c = b && b.speed ? b.speed : "6",
            n = q('\x3cdiv class\x3d"orp-rss-container" style\x3d"display: none"\x3e\x3c/div\x3e'),
            t = !1,
            p;
        this.play = function() {
            !p && f();
            A.log("RssControlsPlugin " + (e && e.length));
            e.length ?
                (q(a.getWrapper()).parent().removeClass("orp-isInit"), t = !0, n.show(), g(0)) : (A.log("RssControlsPlugin error"), q(a.getWrapper()).addClass("orp-error"), a.error = !0, a.trigger("error"))
        }
    }

    function pc(a, b) {
        function e() {
            q(a.getWrapper()).addClass("orp-isInit orp-isYTContent");
            t.type = b.type;
            a.isYTContent = !0;
            a.play = g;
            a.promisePlay = g;
            a.preload = f(a.preload);
            a.preload();
            a.src = function() {
                return t.videoId
            };
            m(function() {
                c = new vc(a, t, d());
                a.pause = c.pause;
                a.ended = c.ended;
                a.isPaused = c.isPaused;
                a.currentTime = c.currentTime;
                a.duration = c.duration;
                a.volume = l(a.volume, c.volume);
                a.destroy = l(a.destroy, c.destroy);
                a.isError = c.isError;
                a.next = T;
                n && c.play()
            })
        }

        function g() {
            c ? c.play() : n = !0
        }

        function l(a, b) {
            return function(c) {
                return b(a, c)
            }
        }

        function f(a) {
            return function() {
                a("none")
            }
        }

        function m(c) {
            ja("https://www.youtube.com/iframe_api", function() {
                d().loaded ? c() : d().ready(c)
            }, function() {
                A.event(A.types.error, b, "load js yt")
            }, function() {
                return !!d()
            }, a.getVideo())
        }

        function d() {
            return xa(a.getVideo()).YT
        }
        var c, n, t;
        (t = b.file && Aa(b.file)) &&
        t.videoId && "youtube" === t.type && e()
    }

    function vc(a, b, e) {
        function g() {
            function g(b) {
                t.clear();
                A.log("error init youtube: " + b);
                x = !0;
                a.trigger("error")
            }

            function C(a, b) {
                clearTimeout(n);
                u.toggleClass("orp-isHiddenControls", a);
                b && P()
            }

            function P() {
                n = setTimeout(function() {
                    C(!0)
                }, 3E3)
            }
            f || (f = !0, q("\x3cdiv\x3e").attr("id", b.videoId).addClass("orp-yt-player").prependTo(q(a.getVideo()).parent().find(".orp-lp-controls-wrapper")), Wa && q(".orp-c-screen", u).hide(), l = new e.Player(b.videoId, {
                width: "100%",
                height: "100%",
                videoId: b.videoId,
                playerVars: {
                    controls: 0,
                    enablejsapi: 1,
                    modestbranding: 1,
                    rel: 0,
                    fs: 0
                },
                events: {
                    onReady: function() {
                        function b() {
                            (d = a.muted()) && l.mute() || l.unMute();
                            p = 100 * a.volume();
                            l.setVolume(p)
                        }
                        0 === l.getDuration() ? g("yt duration is 0") : (l.addEventListener("onStateChange", function(c) {
                            function d() {
                                w && (a.trigger("play"), a.trigger("playing"));
                                w = !1;
                                t.init()
                            }
                            q(a.getWrapper()).parent().removeClass("orp-isInit");
                            v = !1;
                            m || !V && c.data !== e.PlayerState.PLAYING ? c.data === e.PlayerState.PLAYING ? d() : c.data === e.PlayerState.PAUSED ?
                                (w || a.trigger("pause"), w = !0, t.clear()) : c.data === e.PlayerState.ENDED && (w = !0, m && (v = !0, a.trigger("ended"), t.clear())) : (m = !0, b(), u.removeClass("orp-isInit").addClass("orp-isPlaying orp-yt-container"), d(), C(!1, !0))
                        }), a.trigger("loadedmetadata"), a.trigger("canplay"), b(), c && l.playVideo())
                    },
                    onError: g
                }
            }), t = new function() {
                function b() {
                    a.trigger("timeupdate")
                }
                var c;
                this.init = function() {
                    c || (c = setInterval(b, 50))
                };
                this.clear = function() {
                    c && clearInterval(c);
                    c = 0;
                    b()
                }
            }, u.mouseover(function() {
                C(!1, !0)
            }), u.mouseleave(function() {
                C(!0)
            }))
        }
        var l, f, m, d, c, n, t, p, w = !0,
            v = !1,
            x = !1,
            u = q(a.getWrapper());
        this.play = function() {
            f && l && l.playVideo ? l.playVideo() : (c = !0, g())
        };
        this.pause = function() {
            l && l.pauseVideo && l.pauseVideo()
        };
        this.isPaused = function() {
            return w
        };
        this.ended = function() {
            return v
        };
        this.duration = function() {
            return l && l.getDuration && l.getDuration()
        };
        this.currentTime = function(b) {
            if (l && l.seekTo) return void 0 !== b && (v = !1, l.seekTo(b)), b = v && l.getDuration() || l.getCurrentTime(), a.getVideo().currentTime = b
        };
        this.volume = function(b, c) {
            if (!l || !l.setVolume) return b(c);
            void 0 === c && a.muted() && !l.isMuted() && (c = 0);
            void 0 !== c && (l.setVolume(100 * c), 0 === c && l.mute() || l.unMute());
            return b(c)
        };
        this.destroy = function(a) {
            t && t.clear();
            a()
        };
        this.isError = function() {
            return x
        };
        a.one(y.beforePlay, g)
    }

    function wc(a, b) {
        function e(a) {
            return Ha(a, "http") ? a : m + a
        }

        function g(a) {
            a = a.split(".");
            a = a[0].split(":");
            return 1E3 * (a[2] ? 3600 * a[0] + 60 * a[1] + 1 * a[2] : a[1] ? 60 * a[0] + 1 * a[1] : 1 * a[0])
        }

        function l(a) {
            if (null == a || "object" != typeof a) return a;
            var b = a.constructor(),
                d;
            for (d in a) a.hasOwnProperty(d) && (b[d] =
                a[d]);
            return b
        }

        function f(a, b) {
            var c = RegExp("(?:#xywh\x3d)([0-9]+),([0-9]+),([0-9]+),([0-9]+)", "gi").exec(b);
            return q.extend(!0, {
                x: c[1],
                y: c[2],
                w: c[3],
                h: c[4]
            }, a)
        }
        var m = a.substring(0, a.lastIndexOf("/") + 1);
        return new Promise(function(a) {
            var c = {},
                d = [],
                m = !1,
                p = b.split("\n");
            p.forEach(function(a, b) {
                " " !== a.replace(/<\/?[^>]+(>|$)/g, "") && "" !== a.replace(/<\/?[^>]+(>|$)/g, "") && (-1 !== a.indexOf("--\x3e") ? (m = !0, c.start && d.push(l(c)), c = {
                    start: g(a.split("--\x3e")[0].trimRight().split(" ").pop()),
                    end: g(a.split("--\x3e")[1].trimLeft().split(" ").shift()),
                    part: ""
                }) : "" !== a.replace(/<\/?[^>]+(>|$)/g, "") && " " !== a.replace(/<\/?[^>]+(>|$)/g, "") && m && (0 !== d.length ? d[d.length - 1].part.replace(/<\/?[^>]+(>|$)/g, "") !== a.replace(/<\/?[^>]+(>|$)/g, "") && (0 === c.part.length ? (c.part = e(a), c = f(c, a)) : c.part = "${current.part} ${line}", b === p.length - 1 && d.push(l(c))) : (c.part = e(a), c = f(c, a), d.push(l(c)), c.part = "")))
            });
            0 > q.inArray(c, d) && d.push(l(c));
            c = [];
            d.forEach(function(a) {
                a.part = a.part && a.part.replace(/<\/?[^>]+(>|$)/g, "") || ""
            });
            a(d)
        })
    }

    function oc(a, b) {
        function e(b, f) {
            function e() {
                g &&
                    g.load([])
            }
            e();
            if (b.file && (b.tracks || a.isPlaylist)) {
                var d = a.isPlaylist && f && b.file.playlist.length ? b.file.playlist[0].tracks : b.tracks;
                q.isArray(d) && (d = d[0]);
                if (d && d.file) a.one(y.beforePlay, function() {
                    q.get(d.file, function(b) {
                        wc(d.file, b).then(function(b) {
                            g || (g = new xc(a));
                            g.load(b)
                        })
                    }).fail(e)
                })
            }
        }
        var g;
        e(b, !0);
        a.on(y.resetStatus, e)
    }

    function xc(a) {
        function b(b) {
            var c = b.pageX;
            b.changedTouches && (c = b.changedTouches[0].pageX);
            var d = c - f[0].getBoundingClientRect().left;
            b = Math.floor(a.duration() / (f.width() /
                d));
            var e = g(b || 0);
            e && (m.css({
                left: function() {
                    var a = e.w,
                        b = e.w / 2;
                    return d + b > f.width() ? f.width() - a + 21 : 0 <= d - b ? d + 21 - b : 21
                }() + "px",
                "background-image": "url(" + e.part + ")",
                "background-repeat": "no-repeat",
                "background-position": "-" + e.x + "px -" + e.y + "px"
            }), m.show())
        }

        function e() {
            m.hide()
        }

        function g(a) {
            a *= 1E3;
            return l.find(function(b) {
                if (b.start <= a && b.end > a) return b
            })
        }
        var l = [],
            f = q(".orp-c-progress-bg", a.getWrapper()),
            m = q('\x3cdiv class\x3d"orp-vtt" style\x3d"display: none"\x3e\x3c/div\x3e');
        this.load = function(a) {
            l =
                a;
            (a = g(0)) && m.css({
                position: "absolute",
                top: "-" + (a.h - 10) + "px",
                width: a.w + "px",
                height: a.h + "px"
            })
        };
        f.after(m);
        f.on("mousemove", b);
        f.on("touchmove", b);
        f.on("mouseout", e);
        f.on("touchcancel", e);
        f.on("touchend", e)
    }

    function mc(a, b, e) {
        function g(a) {
            return function() {
                c ? c.play(a) : m = !0
            }
        }

        function l(a) {
            var b = [];
            a.forEach(function(a, c) {
                a.file && (a.id = c, b.push(a))
            });
            return b
        }

        function f() {
            var a = b.advertising && b.advertising.lifecycleLoop;
            return a ? Ba(a) ? !0 : isNaN(parseInt(a)) ? d.playlist.length - 1 : (parseInt(a) + 1) * d.playlist.length -
                1 : d.playlist.length - 1
        }
        var m, d;
        if ((d = b.file && Aa(b.file)) && "playlist" === d.type && (b.forceFile = !0, d.playlist = l(d.playlist), d.playlist.length)) {
            b.advertising.lifecycleLoop = f();
            var c = new yc(a, b, e, d);
            m && c.play();
            a.isPlaylist = !0;
            a.src = c.src;
            a.play = g(a.play);
            a.promisePlay = g(a.play);
            a.next = T;
            a.on(y.beforeComplete, c.next)
        }
    }

    function yc(a, b, e, g) {
        var l = this,
            f = g.playlist,
            m = q('\x3cdiv class\x3d"orp-c-playlist-holder"\x3e\x3c/div\x3e'),
            d = 0,
            c, n, t, p = b.advertising.lifecycleLoop,
            w = 0;
        this.src = function() {
            var b = f[d];
            a.getVideo().getAttribute("src") !==
                b.file && a.getVideo().setAttribute("src", b.file);
            return b.file
        };
        this.play = function(d) {
            c ? (q(a.getWrapper()).removeClass("orp-isOverPlaylist"), l.next(0), p = b.advertising.lifecycleLoop) : d()
        };
        this.next = function(n) {
            m.hide();
            t && t.find("[data-playlist-id]").removeClass("orp-is-playing");
            d = void 0 !== n ? n : ++d;
            f[d] || (d = 0);
            n = f[d];
            !n || !(p && 2 > w || c) || a.isError() && a.getVideo().getAttribute("src") === n.file ? (q(a.getWrapper()).addClass("orp-isOverPlaylist"), d = f.length - 1, c = !0) : (a.isError() || (w = 0), !0 === p || 0 === p || p--, c = !1,
                a.currentTime(0), t && t.find('[data-playlist-id\x3d"' + d + '"]').addClass("orp-is-playing"), b.file = n.file, b.tracks = n.tracks, e.load(b))
        };
        a.one(y.beforePlay, function() {
            function c(a) {
                return function() {
                    l.next(a);
                    return !1
                }
            }

            function p(a) {
                if (a) {
                    var b = new Date(0);
                    b.setSeconds(a);
                    return 3600 <= a ? b.toISOString().substr(11, 8) : b.toISOString().substr(14, 5)
                }
            }
            q(a.getWrapper()).addClass("orp-isPlaylist");
            if (!b.type || "inStream" === b.type) {
                var e = q(".orp-lp-controls-wrapper", q(a.getWrapper()));
                e.append(m);
                m.append('\x3cdiv class\x3d"orp-c-playlist-head"\x3e\x3cdiv class\x3d"orp-c-playlist-count"\x3e' +
                    (d + 1 + "/" + f.length) + '\x3c/div\x3e\x3cdiv class\x3d"orp-c-playlist-name"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-playlist-close"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-playlist-body"\x3e\x3c/div\x3e');
                m.find(".orp-c-playlist-name").text(g.name);
                t = q(".orp-c-playlist-body", m);
                f.forEach(function(a, b) {
                    var d = q('\x3cdiv class\x3d"orp-c-playlist-item" data-playlist-id\x3d"' + b + '"\x3e\x3cdiv class\x3d"orp-c-playlist-it-poster"\x3e\x3cdiv class\x3d"orp-c-playlist-it-time"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-playlist-it-name"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-playlist-it-description"\x3e\x3c/div\x3e\x3c/div\x3e');
                    0 === b && d.addClass("orp-is-playing");
                    a.image && d.find(".orp-c-playlist-it-poster").css("background-image", "url(" + a.image + ")").attr("alt", a.title);
                    a.duration && d.find(".orp-c-playlist-it-time").css("display", "block").text(p(~~a.duration));
                    d.find(".orp-c-playlist-it-name").text(a.title);
                    d.find(".orp-c-playlist-it-description").text(a.description);
                    d.click(c(a.id));
                    t.append(d)
                });
                var w = m.find(".orp-c-playlist-count"),
                    C = q('\x3cdiv class\x3d"orp-ctrl orp-c-playlist"\x3e\x3c/div\x3e');
                C.click(function() {
                    w.text(d +
                        1 + "/" + f.length);
                    m.show();
                    (n = a.isPaused()) || a.pause()
                });
                e.find(".orp-ctrls").append(C);
                m.find(".orp-c-playlist-close").click(function() {
                    m.hide();
                    n || a.play()
                })
            }
        });
        a.on("error", function() {
            w++
        })
    }

    function Db(a) {
        function b(b, d) {
            g("AdError");
            b && A.log(b);
            a.trigger(y.adError, d || b + "")
        }

        function e() {
            d || setTimeout(function() {
                a.trigger(y.adImpression)
            }, 1);
            d = !0
        }

        function g(a) {
            A.log("tag, event: " + m + ", " + a)
        }
        var l, f, m, d;
        this.setVastTracker = function(a) {
            l = a
        };
        this.getVastTracker = function() {
            return l
        };
        this.setAdvertisingOptions =
            function(a) {
                m = (f = a) && f.tag ? f.tag.tagId || f.tag.url.partnerId && JSON.stringify(f.tag.url) || f.tag.url : "noAdvOptsTag"
            };
        this.onAdLoaded = function() {
            A.event(A.types.loaded, f);
            g("AdLoaded");
            a.trigger(y.adLoaded);
            d = !1
        };
        this.onAdStarted = function() {
            g("AdStarted");
            a.trigger(y.adStarted)
        };
        this.onAdImpression = function() {
            A.event(A.types.impression, f);
            l && l.load();
            g("AdImpression");
            e()
        };
        this.onAdPaused = function() {
            l && l.setPaused(!0);
            a.trigger(y.adPaused);
            g("AdPaused")
        };
        this.onAdUserClose = function() {
            l && l.close();
            a.trigger(y.adUserClose);
            g("onAdUserClose")
        };
        this.onAdPlaying = function() {
            l && l.setPaused(!1);
            a.trigger(y.adResumed);
            g("AdPlaying")
        };
        this.onAdStopped = function() {
            l && l.stop();
            g("AdStopped");
            a.trigger(y.adStopped)
        };
        this.onAdSkipped = function() {
            l && l.skip();
            g("AdSkipped");
            a.trigger(y.adSkipped)
        };
        this.onAdCompleted = function() {
            l && l.complete();
            g("AdCompleted");
            a.trigger(y.adCurrentPercent, 100);
            a.trigger(y.adCompleted)
        };
        this.onAdSizeChange = function(b) {
            l && void 0 !== b && l.setFullscreen(b);
            g("AdSizeChange to: new dimensions");
            a.trigger(y.adSizeChange)
        };
        this.onAdSkippableStateChange = function() {
            g("AdSkippableStateChange");
            a.trigger(y.adSkippableStateChange)
        };
        this.onAdDurationChange = function() {
            g("AdDurationChange")
        };
        this.onAdVolumeChange = function(b) {
            l && b && l.setMuted(0 === b);
            g("AdVolumeChange: " + b);
            a.trigger(y.adVolumeChange)
        };
        this.onAdClickThru = function(b, d, e) {
            A.event(A.types.click, f);
            l && l.click();
            a.trigger(y.adClickThru);
            g("AdClickThru " + b + " " + d + " " + e);
            b && e && window.open(b)
        };
        this.onAdError = function(a, d) {
            a = a || "";
            d && d.message && (a = a + " | " + d.message);
            A.event(A.types.error,
                f, a);
            l && l.errorWithCode(a);
            b(d, a)
        };
        this.onAdErrorStatic = b;
        this.onAdTimeUpdate = function(a, b) {
            l && (b && 0 < b && l.assetDuration !== b && l.setDuration(b), l.setProgress(a))
        };
        this.onProgressPercent = function(b) {
            l && l.setProgressPercent(b);
            g("onProgress " + b + "%");
            a.trigger(y.adCurrentPercent, b)
        };
        this.onAdLog = g
    }

    function zc(a, b, e) {
        function g(a) {
            if (m.getVastTracker()) {
                if (a = a || m.getVastTracker().clickThroughURLTemplate) {
                    m.getVastTracker().setProgress(b.currentTime());
                    var c = DMVAST.util.resolveURLTemplates([a], {
                        CACHEBUSTER: Math.round(1E10 *
                            Math.random()),
                        CONTENTPLAYHEAD: m.getVastTracker().progressFormated()
                    })[0]
                }
                return c
            }
        }
        var l = new Va,
            f = this,
            m = a.getAdTracker(),
            d = function(a) {
                var b = -1,
                    c = m.getVastTracker();
                c && (b = c.skipDelay);
                if (null == a.skipOffset && 0 > b) return -1;
                a = ~~a.skipOffset;
                b = ~~b;
                var d = Math.max(b, a);
                if (0 > d) return -1;
                d = 0 < a && a < b ? a : d;
                c && c.setSkipDelay(d);
                return d
            }(e);
        this.getType = function() {
            return "vast"
        };
        this.initAd = function() {
            m.onAdLog("initAd");
            init()
        };
        this.resizeAd = function() {
            m.onAdLog("resizeAd");
            setTimeout(function() {
                    m.onAdSizeChange()
                },
                1)
        };
        this.startAd = function() {
            m.onAdLog("startAd");
            m.onAdStarted();
            m.onAdImpression();
            b.promisePlay()
        };
        this.stopAd = function() {
            m.onAdLog("stopAd");
            m.onAdStopped()
        };
        this.pauseAd = function() {
            m.onAdLog("pauseAd");
            b.pause()
        };
        this.resumeAd = function() {
            m.onAdLog("resumeAd");
            b.promisePlay()
        };
        this.skipAd = function() {
            f.destroy();
            m.onAdLog("skipAd");
            m.onAdSkipped()
        };
        this.clickAd = function() {
            f.pauseAd();
            m.onAdClickThru(g(), void 0, !0)
        };
        this.volume = function(a) {
            if (void 0 !== a) {
                var c = 0 === a;
                b.volume(a);
                b.muted(c)
            }
            return b.muted() ?
                0 : b.volume()
        };
        this.mute = function(a) {
            b.trigger("mute", a)
        };
        this.muteByHover = function(c) {
            var d = c ? 0 : a.defaultVolume(),
                e = !b.isPaused();
            c || b.volume() || b.volume(d);
            b.muted(c);
            e && b.play()
        };
        this.getAdDuration = function() {
            return b.duration()
        };
        this.getAdRemainingTime = function() {
            return b.duration() - b.currentTime()
        };
        this.getAdSkippableState = function() {
            return -1 < d && b.currentTime() > d
        };
        this.skipOffset = function() {
            return d
        };
        this.destroy = function() {
            b.offAll();
            b.pause();
            l.offAll();
            b.destroy()
        };
        this.isMuted = function() {
            return b.muted() ||
                0 === b.volume()
        };
        this.isPaused = function() {
            return b.isPaused()
        };
        this.onMute = function(a) {
            b.on("mute", a)
        };
        this.onAdTimeUpdate = function(a) {
            b.on("timeupdate", function() {
                a(b.currentTime())
            })
        };
        (function() {
            b.one("canplay", f.startAd);
            b.on("durationchange", m.onAdDurationChange);
            b.on("ended", function() {
                m.onAdCompleted();
                setTimeout(m.onAdStopped, 1)
            });
            b.on("volumechange", function() {
                m.onAdVolumeChange(b.volume())
            });
            b.on("error", m.onAdError);
            b.on("loadedmetadata", m.onAdLoaded);
            b.on("pause", m.onAdPaused);
            b.on("play",
                m.onAdPlaying);
            b.on("skipDelay", function() {
                m.onAdSkipped(b.duration())
            });
            b.on("fullscreenChange", m.onAdSizeChange)
        })()
    }

    function Eb(a, b, e) {
        function g(a) {
            return function() {
                S.clear();
                l(a)
            }
        }

        function l(a) {
            d || J.init(function() {
                B.pauseAd();
                N.init(n.onAdStopped, 50)
            }, a || 100)
        }

        function f() {
            S.clear();
            J.clear();
            N.clear()
        }

        function m(a) {
            var b, c = this;
            this.init = function(d, e) {
                c.clear();
                b = setTimeout(function() {
                    n.onAdLog(a);
                    d()
                }, e)
            };
            this.clear = function() {
                b && clearTimeout(b);
                b = 0
            }
        }
        var d, c, n, t, p = new Va,
            w = !1,
            v = !1,
            x = !1,
            u,
            E, C, q = !0,
            L = !1,
            F = !1,
            G = !0,
            I = !1,
            M = T,
            B = this;
        this.getPlayerListeners = function() {
            return p
        };
        this.adStop = function() {
            q = !0;
            f()
        };
        this.skipAd = function() {
            c && c.skipAd()
        };
        this.setAdPlayerWrapper = function(a) {
            c = a
        };
        this.setAdTracker = function(a) {
            n = a
        };
        this.getAdTracker = function() {
            return n
        };
        this.setSkipForceStop = function(a) {
            d = a
        };
        this.sizeController = function(a) {
            a && (t = a);
            return t
        };
        this.getAdDuration = function() {
            if (c) return c.getAdDuration()
        };
        this.getAdRemainingTime = function() {
            if (c) return c.getAdRemainingTime()
        };
        this.skipOffset =
            function() {
                if (c) return c.skipOffset()
            };
        this.getAdSkippableState = function() {
            if (c) return c.getAdSkippableState()
        };
        this.resize = function(d, e, g) {
            p.off(y.adLoaded, M);
            M = function() {
                c && c.resizeAd(d, e, g);
                b.calcFit();
                a && a.calcFit()
            };
            p.one(y.adLoaded, M);
            M()
        };
        this.isFullscreen = function() {
            return b.isFullscreen()
        };
        this.initAdPlayer = function() {
            a && (a.play(), a.pause())
        };
        this.isUserClicked = function(a) {
            void 0 !== a && (F = a);
            return F
        };
        this.isPaused = function() {
            if (c) return c.isPaused()
        };
        this.pauseAd = function() {
            q || c && (c.isPaused() ||
                c.pauseAd())
        };
        this.resumeAd = function() {
            q || c && c.isPaused() && c.resumeAd()
        };
        this.muteByHover = function(a) {
            if (!q) {
                var b = a ? 0 : B.defaultVolume();
                c && (B.isVast() ? c.muteByHover(a) : c.volume(b))
            }
        };
        this.isMuted = function() {
            if (c) return c.isMuted()
        };
        this.mute = function(a) {
            B.isVast() ? c.mute(a) : p.trigger("mute", a)
        };
        this.onMute = function(a) {
            if (B.isVast()) c.onMute(a);
            else p.on("mute", a)
        };
        this.defaultVolume = function() {
            return b.volume() || 1
        };
        this.volume = function(a) {
            if (c) return void 0 !== a && c.volume(a), c.volume()
        };
        this.destroy =
            function() {
                d = !1;
                f();
                n.setVastTracker(null);
                c && (c.destroy(), c = null)
            };
        this.isVpaid = function() {
            return c && "vpaid" === c.getType()
        };
        this.isLikeIma = function() {
            return c && ("ima" === c.getType() || "youtube" === c.getType() || "fw" === c.getType() || "yandex" === c.getType())
        };
        this.isIma = function() {
            return c && "ima" === c.getType()
        };
        this.isYa = function() {
            return c && "yandex" === c.getType()
        };
        this.isYt = function() {
            return c && "youtube" === c.getType()
        };
        this.isFw = function() {
            return c && "fw" === c.getType()
        };
        this.isVast = function() {
            return c &&
                "vast" === c.getType()
        };
        this.forceFile = function(a) {
            void 0 !== a && (G = a);
            return G
        };
        this.adType = function(a) {
            void 0 !== a && (u = 0 === a ? "PRE" : 0 < a ? "MID" : -1 === a ? "POST" : "X");
            return u
        };
        this.adVideoType = function(a) {
            void 0 !== a && (E = a);
            return E
        };
        this.soundByHover = function(a) {
            void 0 !== a && (v = a) && p.trigger(y.addSoundByHover);
            return v
        };
        this.volumeChanged = function(a) {
            void 0 !== a && (w = a);
            return w
        };
        this.adStart = function() {
            C || J.init(B.adClose, e);
            p.trigger(y.adStart)
        };
        this.onAdStart = function(a, b) {
            p.on(y.adStart, a, b)
        };
        this.onAdLoaded =
            function(a, b) {
                p.on(y.adLoaded, a, b)
            };
        this.onAdStarted = function(a, b) {
            p.on(y.adStarted, a, b)
        };
        this.onAdError = function(a, b) {
            p.on(y.adError, a, b)
        };
        this.onAdSkipped = function(a, b) {
            p.on(y.adSkipped, a, b)
        };
        this.onAdStopped = function(a, b) {
            p.on(y.adStopped, a, b)
        };
        this.onAdCompleted = function(a, b) {
            p.on(y.adCompleted, a, b)
        };
        this.onAdTimeUpdate = function(a) {
            p.on("timeupdate", a)
        };
        this.offAdTimeUpdate = function(a) {
            p.off("timeupdate", a)
        };
        this.onAdCurrentPercent = function(a) {
            p.on(y.adCurrentPercent, a)
        };
        this.onAddSoundByHover =
            function(a) {
                p.on(y.addSoundByHover, a)
            };
        this.onAddImpression = function(a) {
            p.on(y.adImpression, a)
        };
        this.getWrapper = function() {
            return a && a.getWrapper()
        };
        this.onAdPaused = function(a, b) {
            p.on(y.adPaused, a, b)
        };
        this.onAdResumed = function(a, b) {
            p.on(y.adResumed, a, b)
        };
        this.isUserClose = function() {
            return x
        };
        this.adUserClose = function() {
            x = !0;
            n && n.onAdUserClose();
            B.adClose()
        };
        this.videoUserClose = function() {
            x = !0;
            B.adClose()
        };
        this.adClose = function() {
            I || (c ? (l(), c.stopAd()) : B.globalStop())
        };
        this.onAdVolumeChange = function(a,
            b) {
            p.on(y.adVolumeChange, a, b)
        };
        this.clickAd = function() {
            c && c.clickAd()
        };
        this.onAdClicked = function(a) {
            p.on(y.adClickThru, a)
        };
        this.toggleFullScreened = function() {
            b.isFullscreen() ? b.fullscreenClose() : b.fullscreenOpen()
        };
        this.forceShow = function() {
            p.trigger(y.forceShow)
        };
        this.onForceShow = function(a, b) {
            p.on(y.forceShow, a, b)
        };
        this.isAdStarted = function() {
            return L
        };
        this.globalShow = function() {
            p.trigger(y.globalShowed)
        };
        this.onGlobalShowed = function(a, b) {
            p.on(y.globalShowed, a, b)
        };
        this.globalLoad = function() {
            n.onAdLog("globalLoad");
            p.trigger(y.globalLoaded)
        };
        this.globalStop = function() {
            p.trigger(y.beforeGlobalStopped);
            n.onAdLog("globalStopped");
            I = !0;
            setTimeout(function() {
                p.trigger(y.globalStopped)
            }, 200)
        };
        this.onGlobalLoaded = function(a) {
            p.on(y.globalLoaded, a)
        };
        this.onGlobalStopped = function(a) {
            p.on(y.globalStopped, a)
        };
        this.onBeforeGlobalStop = function(a) {
            p.on(y.beforeGlobalStopped, a)
        };
        this.setDisableAdWaitingTimer = function(a) {
            C = a
        };
        var K = function() {
            L && (v = !1, b.off("volumechange", K));
            w = !0
        };
        b.on("volumechange", K);
        B.onAdStarted(function() {
            q = !1;
            L = !0;
            f()
        });
        B.onAdClicked(B.pauseAd);
        B.onAdError(g());
        B.onAdSkipped(g());
        B.onAdCompleted(function() {
            B.isVpaid() && g(1E3)()
        });
        var S = new function() {
            var a;
            this.init = function() {
                a || (a = setInterval(function() {
                    var a = B.getAdDuration(),
                        b = B.getAdRemainingTime(),
                        c = -1;
                    0 < a && 0 <= b && (c = a - b);
                    p.trigger("timeupdate", c);
                    n.onAdTimeUpdate(c, a)
                }, 100))
            };
            this.clear = function() {
                a && clearInterval(a);
                a = 0
            }
        };
        var J = new m("waiting timeout");
        var N = new m("stop timeout");
        B.onAdStarted(S.init);
        B.onAdResumed(S.init);
        B.onAdLoaded(S.clear);
        B.onAdPaused(S.clear);
        B.onAdCompleted(S.clear);
        B.onAdStopped(f);
        B.onGlobalStopped(f)
    }

    function Ac(a, b, e) {
        function g(a) {
            b.countdown && (0 > a ? K.hide() : K.show().text(Qa(a)))
        }

        function l() {
            f(a.isMuted() ? a.defaultVolume() : 0)
        }

        function f(b) {
            a.isUserClicked(!0);
            a.volume(b);
            t();
            ba.hide();
            a.volumeChanged(!0)
        }

        function m() {
            P = !0
        }

        function d() {
            P = !1
        }

        function c() {
            P || a.muteByHover(!0)
        }

        function n() {
            P || a.muteByHover(!1)
        }

        function t() {
            a.soundByHover() && (a.soundByHover(!1), A.log("adSoundByHoverOff"), F.off("mouseenter", n).off("mouseleave",
                c), y.off("mouseenter", m).off("mouseleave", d))
        }

        function p() {
            function b(a) {
                0 > a && (a = 0);
                var b = a;
                .5 < b ? c.removeClass("orp-vol-mid orp-vol-off") : 0 === b ? c.removeClass("orp-vol-mid").addClass("orp-vol-off") : c.removeClass("orp-vol-off").addClass("orp-vol-mid");
                d.width(100 * a + "%")
            }
            var c = C(".orp-c-vol"),
                d = C(".orp-c-vol-curr"),
                e;
            b(a.isMuted() ? a.defaultVolume() : 0);
            hb(C(".orp-c-vol-changer"), d, function() {
                c.addClass("orp-isSelected")
            }, function(a) {
                f(a)
            }, function(a) {
                f(a);
                a && (e = a);
                c.removeClass("orp-isSelected")
            });
            C(".orp-c-vol-toggle").click(function() {
                c.hasClass("orp-vol-off") ?
                    f(e || a.defaultVolume()) : a.volume(0)
            });
            a.onAdVolumeChange(function() {
                b(a.volume())
            })
        }

        function w() {
            C(".orp-ctrls .orp-c-play").click(function() {
                a.isUserClicked(!0);
                F.hasClass("orp-isPlaying") ? a.pauseAd() : a.resumeAd()
            })
        }

        function v() {
            Fb.click(function() {
                a.toggleFullScreened()
            })
        }

        function x() {
            function b(c) {
                0 > a.skipOffset() ? a.offAdTimeUpdate(b) : (J.show().unbind("click"), c = Math.ceil(a.skipOffset() - c), 0 < c ? J.addClass("orp-vast-skip-button").text(O("$$$You can skip this ad in$$$") + " " + c).addClass("orp-counter") :
                    (a.offAdTimeUpdate(b), a.getAdTracker().onAdSkippableStateChange(), J.text(O("$$$Skip Ad$$$")).removeClass("orp-counter").addClass("orp-vast-skip-button"), J.unbind("click").click(function() {
                        a.isUserClicked(!0);
                        a.skipAd()
                    })))
            }
            a.onAdTimeUpdate(b)
        }

        function u() {
            a.isVpaid() || a.isLikeIma() || (R.show(), R.unbind("click").click(function() {
                a.isUserClicked(!0);
                a.clickAd()
            }), e || eb || (S.show(), S.unbind("click").click(function() {
                a.isUserClicked(!0);
                a.clickAd()
            })))
        }

        function E(a) {
            Xa.empty();
            a && (a.forEach(function(a) {
                var b =
                    q("\x3ca\x3e\x3c/a\x3e");
                b.addClass("orp-control orp-social-" + a.type).attr("target", "_blank").attr("href", a.link);
                Xa.append(b)
            }), Xa.show().addClass("orp-length-" + a.length))
        }

        function C(a) {
            return F.find(a)
        }
        var P = !1,
            L = !1,
            F = q(a.getWrapper()),
            G = F.parents(".orp-light-player-wrapper"),
            I = !0;
        q(F).append(q('\x3cdiv class\x3d"orp-control orp-tap-unmute" style\x3d"display: none"\x3e' + O("$$$Tap to unmute$$$") + '\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-more" style\x3d"display: none"\x3e' + O("$$$Learn more$$$") +
            '\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-skip" style\x3d"display: none"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-close-bg" style\x3d"display: none;"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-close" style\x3d"display: none"\x3e\x3c/div\x3e' + zb(b) + '\x3cdiv class\x3d"orp-control orp-socials" style\x3d"display: none"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-timer" style\x3d"display: none"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-vol" style\x3d"display: none"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrls" style\x3d"display: none"\x3e\x3cdiv class\x3d"orp-ctrl orp-c-play"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-vol"\x3e\x3cdiv class\x3d"orp-c-vol-toggle"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-vol-changer"\x3e\x3cdiv class\x3d"orp-c-vol-curr"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-screen" style\x3d"display: none"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-progress-bg" style\x3d"display: none"\x3e\x3cdiv class\x3d"orp-control orp-progress"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-ctrl orp-c-play orp-c-play-big" style\x3d"display: none"\x3e\x3ci\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-init orp-init-placeholder"\x3e\x3cdiv class\x3d"orp-init-button"\x3e\x3cdiv class\x3d"orp-lp-loader-dots"\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-0"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-1"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-2"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-3"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-4"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-5"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-6"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-7"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-blocker orp-vast-blocker" style\x3d"display: none"\x3e\x3c/div\x3e'));
        var M = C(".orp-progress-bg"),
            B = C(".orp-progress"),
            K = C(".orp-timer"),
            S = C(".orp-more"),
            J = C(".orp-skip"),
            N = C(".orp-c-play-big"),
            D = C(".orp-vol"),
            U = C(".orp-close"),
            X = C(".orp-close-bg"),
            R = C(".orp-blocker"),
            y = C(".orp-close,.orp-vol,.orp-c-play i,.orp-tap-unmute"),
            la = C(".orp-title"),
            ba = C(".orp-tap-unmute"),
            Xa = C(".orp-socials"),
            Fa = C(".orp-ctrls"),
            Fb = C(".orp-c-screen");
        (function() {
            if (!e) a.onAdTimeUpdate(function(b) {
                if (0 > b) M.hide(), g(-1);
                else {
                    var c = a.getAdDuration(),
                        d = 0;
                    c && (d = 100 * b / c, g(c - b));
                    L || (M.show(), B.width(d +
                        "%"))
                }
            })
        })();
        (function() {
            function b() {
                A.log("set fnSoundByHover");
                F.on("mouseenter", n).on("mouseleave", c).one("touchstart", function() {
                    t()
                });
                y.on("mouseenter", m).on("mouseleave", d)
            }
            e || (F.toggleClass("orp-is-muted", a.isMuted()), a.onAdVolumeChange(function() {
                F.toggleClass("orp-is-muted", a.isMuted())
            }), D.click(l), a.soundByHover() ? b() : a.onAddSoundByHover(b))
        })();
        (function() {
            if (b.closeButton || b.stickyCloseButton) b.stickyCloseButton && G.addClass("orp-sticky-close"), b.closeButton && setTimeout(function() {
                U.show();
                X.show()
            }, 1E3 * ~~b.closeDelay), U.click(a.adUserClose)
        })();
        (function() {
            N.click(function() {
                a.isUserClicked(!0);
                a.resumeAd()
            })
        })();
        (function() {
            b.tapToUnmute && ba.click(function() {
                f(a.defaultVolume())
            })
        })();
        b.controls && (p(), w(), v());
        a.onAdResumed(function() {
            F.addClass("orp-isPlaying");
            N.hide()
        });
        a.onAdPaused(function() {
            F.removeClass("orp-isPlaying");
            N.show()
        });
        this.init = function(c) {
            -1 < a.skipOffset() && J.show();
            u();
            x();
            E(c.tag.socialLinks);
            e || (L = a.isYa() || a.isVpaid() || a.isYt(), L || (b.barColor && B.css("background-color",
                b.barColor), M.show()));
            F.removeClass("orp-isOver").addClass("orp-isPlaying");
            F.toggleClass("orp-ima-container", a.isLikeIma() && !a.isFw() && !a.isYt());
            F.toggleClass("orp-ya-container", a.isYa());
            F.toggleClass("orp-yt-container", a.isYt());
            e || la.show();
            e || a.isYa() || (b.tapToUnmute && a.adVideoType() && (!a.volumeChanged() || I) && a.isMuted() && ba.show(), a.adVideoType() && D.show(), b.controls && a.isIma() && (Fa.show(), D.hide(), F.addClass("orp-isControlsDisplay"), !Wa && "rewarded" !== b.type && Fb.show(), V || Gb || F.addClass("orp-isHiddenControls"),
                Gb && F.addClass("orp-ipad-os")), F.toggleClass("orp-is-muted", a.isMuted()), I = !1)
        };
        this.reset = function() {
            M.hide();
            B.width("0");
            g(-1);
            S.hide();
            J.hide().removeClass("orp-vast-skip-button");
            N.hide();
            R.hide();
            D.hide();
            la.hide();
            ba.hide();
            Xa.hide();
            Fa.hide();
            F.removeClass("orp-isControlsDisplay")
        };
        this.off = function() {
            t()
        };
        a.onGlobalStopped(function() {
            F.removeClass("orp-isPlaying").addClass("orp-isOver")
        });
        (function() {
            function b() {
                d = setTimeout(function() {
                    F.addClass("orp-isHiddenControls")
                }, 3E3)
            }

            function c(a) {
                a ?
                    F.hasClass("orp-isPlaying") && b() : (F.removeClass("orp-isHiddenControls"), d && clearTimeout(d), d = 0)
            }
            var d;
            V || (F.mousemove(function() {
                c(!1)
            }), F.mouseleave(function() {
                c(!0)
            }), C(".orp-ctrls").mouseenter(function() {
                c(!1)
            }), a.onAdPaused(function() {
                c(!1)
            }))
        })()
    }

    function Yb(a, b, e, g) {
        function l() {
            B.isLikeIma() || B.destroy();
            B.isAdStarted();
            (X || a.inStream()) && N.sendOpportunity();
            if (N.tryReplayAd()) N.isShown() && (g(!0), P());
            else if (B.isUserClose() || U) P(), x();
            else {
                var c = N.isMidRoll();
                if (!a.inStream() && !c) {
                    B.forceFile(!!b.src() &&
                        (e.forceFile || N.isAdStartedLoop() && R));
                    if (!B.forceFile()) {
                        x();
                        return
                    }
                    e.advertising.controls || b.trigger(y.hideScreen);
                    b.preload("metadata")
                }
                c && N.isMidRoll(!1);
                P();
                E(f)
            }
        }

        function f() {
            R = !1;
            B.adStop();
            b.src() || b.getVideo().error || b.trigger("error");
            !a.inStream() && B.isUserClose() || !b.src() ? B.globalStop() : (void 0 !== G && I !== G && (b.muted(I), G = void 0), b.ended() || b.getVideo().error || (b.one("canplay", B.globalShow), la && (b.off("timeupdate", m), b.on("timeupdate", m), la = !1), Na(function() {
                b.play()
            }, Ea)))
        }

        function m() {
            0 <
                b.currentTime() && (b.off("timeupdate", m), A.event(A.types.content, e.advertising))
        }

        function d() {
            B.onAdLoaded(function() {
                B.volume(I ? 0 : M);
                I === B.isMuted() || B.mute(I);
                void 0 === G && (G = I)
            }, !0);
            B.onAdStart(c);
            B.onForceShow(C);
            B.onAdStarted(function() {
                b.isPaused() || b.pause();
                N.started();
                var a = N.getAdOptions();
                K.init(a);
                F.calcFit();
                !R && a.tag.file && (R = !0);
                J.start(a);
                C();
                if (B.isLikeIma()) {
                    a = B.isFw();
                    var c = B.isYa(),
                        d = B.isYt();
                    b.trigger("adShow");
                    A.log(a && "fw adStart" || c && "ya adStart" || d && "yt adStart" || "ima adStart");
                    d || !b.muted() && !B.isUserClicked() || (B.mute(b.muted()), B.volume(b.muted() ? 0 : b.volume() || 1));
                    var e = N.getAdOptions();
                    A.event(A.types.started, e, a && "FW" || c && "YA" || d && "YT" || "IMA");
                    b.pause()
                } else a = N.getAdOptions(), A.event(A.types.started, a, "VAST")
            });
            if (e.advertising[O("iu")]) B.onAddImpression(n);
            else B.onAdStarted(n);
            B.onAdSkipped(t);
            B.onAdCompleted(t);
            B.onAdStopped(function() {
                t();
                N.adNext()
            });
            B.onGlobalStopped(K.off)
        }

        function c() {
            X = !0;
            J.start(N.getAdOptions());
            N.sendOpportunity();
            N.start()
        }

        function n() {
            var a =
                N.getAdOptions();
            ib(a);
            jb(a)
        }

        function t() {
            -1 < B.volume() && (I = B.isMuted(), M = B.volume());
            K.reset()
        }

        function p() {
            function a() {
                if (!B.isAdStarted()) {
                    var a = e.advertising.passback;
                    q.isFunction(a) ? a() : (a = window[a], q.isFunction(a) && a())
                }
            }
            if (e.advertising && e.advertising.passback) B.onGlobalStopped(a)
        }

        function w() {
            b.one(y.beforeComplete, function() {
                b.isPlaylist ? Na(x, !0) : N.inProgress() ? (U = !0, g(!0)) : D.post() ? (U = !0, g(!0), N.load(ia.POST)) : N.postRoll() ? U = !0 : Na(x, !0)
            })
        }

        function v() {
            function a() {
                D.checkMid(b.currentTime()) &&
                    (N.load(ia.MID), N.isMidRoll(!0))
            }
            b.one("canplay", function() {
                if (D.createMid(b.duration())) b.on("timeupdate", a)
            })
        }

        function x() {
            B.isUserClose() || !Ba(ta) && !ta-- || !N.isMaxFailOk(2) || b.isError() ? (U = !1, E(B.globalStop), b.isPlaylist && a.inStream() && (ta = e.advertising.lifecycleLoop || 0, b.one("playing", w))) : (la = !0, U = !1, b.muted() && !F.muted() && (I = !0, F.muted(I)), b.src() && ((Hb || b.isYTContent) && b.pause(), b.currentTime(0)), g(!0), P(), w(), u())
        }

        function u() {
            D.refreshMid();
            D.pre() ? N.load(ia.PRE) : f()
        }

        function E(a) {
            X ? (N.sendOpportunity(),
                a()) : (B.onAdStart(a, !0), B.globalLoad())
        }

        function C() {
            L.addClass("orp-jsShow")
        }

        function P() {
            L.removeClass("orp-jsShow")
        }
        e = q.extend(!0, {}, e);
        var L = q('\x3cdiv class\x3d"orp-proVideo orp-controls-wrapper"\x3e\x3c/div\x3e');
        q(b.getWrapper()).parent().append(L);
        var F, G, I = !0,
            M, B, K, S, J, N, D, U = !1,
            X, R = !1,
            ta = 0,
            la = !0;
        this.soundBehavior = function(a) {
            I = a;
            M = b.volume();
            V && b.volume(1);
            I !== b.muted() && b.muted(I);
            F && (I !== F.muted() && F.muted(I), F.volume(I ? 0 : M), F.muted(I))
        };
        this.build = function(c) {
            e.advertising && e.advertising.tag &&
                e.advertising.tag.length ? (ta = e.advertising.lifecycleLoop || 0, kb.prepare(e.advertising), e.file && !a.inStream() && (e.autoStart && b.preload("none"), b.src(ka(e.file))), F = c(L, !1), b.on(y.beforePlay, u), w(), v(), B = new Eb(F, b, e.advertising.creativeTimeout), S = new Db(B.getPlayerListeners()), B.setAdTracker(S), c = e.advertising ? q.extend({}, {
                    tapToUnmute: e.tapToUnmute,
                    type: e.type
                }, e.advertising) : {}, K = new Ac(B, c, a.isAdapter()), J = new Bc(B), N = new Cc(a, b, F, B, l, e, f), D = new Dc(c), d()) : (B = new Eb(F, b, null), S = new Db(B.getPlayerListeners()),
                    B.setAdTracker(S), b.on(y.beforePlay, f), b.one(y.beforeComplete, B.globalStop));
            p();
            return B
        }
    }

    function Cc(a, b, e, g, l, f, m) {
        function d(c) {
            function d() {
                var a = q.extend(!0, {}, f.advertising);
                a.tag = f.advertising.tag.filter(function(a) {
                    return (!a.breakScheduleType || !0 === a[la]) && !(c && !1 === a[c]) && !(D && !1 === a.replay) && !(a.shown && !1 === a.repeat) && !Pa(a.vtId, a) && !(!y && "googima" === a.client)
                });
                return a
            }
            K = !1;
            if (0 === d().tag.length) var l = !1;
            else F = new Ec(function(a) {
                return "googima" === a.tag.client ? new Fc(g, b, e, a) : "bidding" ===
                    a.tag.type ? new Gc(g, a) : "freewheel" === a.tag.type ? new Hc(g, b, e, a) : "yandex" === a.tag.type ? new Ic(g, b, e, a) : "youtube" === a.tag.type ? new Jc(g, b, e, a) : new lb(g, a)
            }, function(a) {
                B = !1;
                g.setDisableAdWaitingTimer(!0 === a.isYt);
                if (a.isIma || "freewheel" === a.getOptions().tag.type || a.isYa || a.isYt) {
                    I = a;
                    var b = w
                } else "bidding" === a.getOptions().tag.type && (a = a.getClient()), G = a, b = p;
                M.setAdvertisingOptions(a.getOptions());
                b()
            }, n, d(), function(b, c) {
                if ("yandex" === b.type || "youtube" === b.type) return c();
                var d = b.realUrl;
                d || (d = b.url,
                    b.realUrl = d);
                La(d, g.sizeController().height(), g.sizeController().width(), f.appParams, a.getElement(), f.advertising, function(a) {
                    b.url = a;
                    c()
                })
            }), F.start(), l = !0;
            return l
        }

        function c() {
            if (I || G) return (I || G).getOptions()
        }

        function n() {
            P();
            K || N++;
            if (!K && 0 < S) {
                S--;
                var a = d("rotation")
            } else a = void 0;
            a || (!g.isUserClose() && (Ba(J) || 0 < J) && t() ? (Ba(J) || J--, E(), a = d()) : a = void 0);
            a || l()
        }

        function t(a) {
            return N < 10 * f.advertising.tag.length * (a || 1)
        }

        function p() {
            g.destroy();
            g.adType(0);
            var c = G && G.getNext(!B, K);
            B = !1;
            if (c || K)
                if (!c ||
                    b.isError()) l();
                else {
                    b.trigger("adShow");
                    M.setVastTracker(new DMVAST.tracker(c.ad, c.creative));
                    var d = new Kc(a, g, c.ad, c.creative, M);
                    U = v(function() {
                        d.init(b, m, G.getOptions(), x)
                    });
                    g.globalLoad()
                }
            else P(), F.tryNext()
        }

        function w() {
            U = function() {
                I.load(v(I.start))
            };
            g.globalLoad()
        }

        function v(c) {
            return function() {
                if (!b.isError() && !a.d())
                    if (A.log("call start"), y || R || b.ended() || !b.isPaused() || K) c();
                    else b.one("play", c)
            }
        }

        function x(a) {
            e.src(a);
            return e
        }

        function u(a) {
            E();
            f.advertising && f.advertising.tag.length &&
                (J = C(a), f.advertising.tag.forEach(function(a) {
                    delete a.shown
                }));
            R = !1
        }

        function E() {
            f.advertising && f.advertising.tag.length && (S = f.advertising.rotation || 0)
        }

        function C(a) {
            var b = f.advertising.replay || 0,
                c = function() {
                    return a && f.advertising.breakSchedule && f.advertising.breakSchedule.find(function(b) {
                        return a === b.type
                    })
                }();
            return c && void 0 !== c.replay ? c.replay : b
        }

        function P() {
            g.destroy();
            I && I.destroy();
            I = G = null
        }

        function L(a) {
            return function() {
                X = !1;
                a()
            }
        }
        l = L(l);
        m = L(m);
        var F, G, I, M = g.getAdTracker(),
            B = !1,
            K = !1,
            S =
            0,
            J = 0,
            N = 0,
            D = !1,
            U, X = !1,
            R = !1,
            y = !1,
            la = ia.PRE,
            ba = !1;
        u(ia.PRE);
        this.isMidRoll = function(a) {
            void 0 !== a && (ba = a);
            return ba
        };
        this.postRoll = function() {
            return I && I.startPostRoll()
        };
        this.sendOpportunity = function() {
            F && F.sendOpportunity();
            g.setSkipForceStop(!0);
            F && F.callErrors(g.getAdTracker().onAdErrorStatic);
            g.setSkipForceStop(!1)
        };
        this.inProgress = function() {
            return X
        };
        this.load = function(a) {
            X || (la = a, y = la === ia.PRE, X = !0, U = K = B = D = !1, u(la), d() || l())
        };
        this.adNext = function() {
            K && (g.isUserClose() || I) ? l() : I ? (P(), F.tryNext()) :
                p()
        };
        this.tryReplayAd = function() {
            if (!g.isUserClose() && (Ba(J) || 0 < J) && t()) return n(), !0
        };
        this.getAdOptions = c;
        this.start = function() {
            U && U();
            U = !1
        };
        this.started = function() {
            N = 0;
            R = D = B = K = !0;
            c().tag.shown = !0
        };
        this.isMaxFailOk = t;
        this.isAdStartedLoop = function() {
            return D
        };
        this.isShown = function() {
            return R
        }
    }

    function Dc(a) {
        function b(a) {
            return l && l.find(function(b) {
                return a === b.type
            })
        }

        function e(a) {
            function c(a) {
                if (!a) return [];
                var b = a.split(/, +| ?, ?| +/);
                b.forEach(function(a, c) {
                    b[c] = ~~a
                });
                return b
            }
            var d = b(ia.MID);
            if (!a || !d) return [];
            var e = [];
            d.startOn && (e = e.concat(c(d.startOn)));
            d.startOnPercent && c(d.startOnPercent).forEach(function(b) {
                e.push(Math.floor(a * b / 100))
            });
            e.sort(function(a, b) {
                return a - b
            });
            return e = e.filter(function(b, c, d) {
                return d.indexOf(b) === c && b <= a
            })
        }

        function g(a) {
            function b(b) {
                c = -1;
                a.forEach(function(a, d) {
                    -1 === c && a >= b && (c = d)
                })
            }
            var c = 0,
                d = 0;
            this.check = function(e) {
                d > e && b(e);
                d = e;
                if (-1 === c) return !1;
                if (e >= a[c]) return a.splice(c, 1), b(e), !0
            }
        }
        var l = a.breakSchedule,
            f, m, d = this;
        this.pre = function() {
            return !l ||
                !!b(ia.PRE)
        };
        this.post = function() {
            return !!b(ia.POST)
        };
        this.mid = function() {
            return !!b(ia.MID)
        };
        this.createMid = function(a) {
            m = a;
            a = e(a);
            if (a.length) return f = new g(a), !0
        };
        this.refreshMid = function() {
            m && f && d.createMid(m)
        };
        this.checkMid = function(a) {
            return f && f.check(a)
        }
    }

    function Kc(a, b, e, g, l) {
        function f() {
            P && P.find(".orp-jsProElement").remove()
        }

        function m() {
            (function(a) {
                function d() {
                    u.onclick = function() {
                        if (b.isPaused()) b.resumeAd();
                        else {
                            l.onAdClickThru(a.nonlinearClickTrackingURLTemplates, null, null, adPlayed.currentTime());
                            var d = c(l.getVastTracker(), a.nonlinearClickThroughURLTemplate);
                            d && window.open(d, "_blank")
                        }
                    }
                }

                function e() {
                    m = function(b) {
                        void 0 === t ? x.off("expandedAd", m) : (0 < ~~a.expandedWidth && (w.width = b ? a.expandedWidth : a.width, t.style.width = b ? a.expandedWidth : a.width), 0 < ~~a.expandedHeight && (w.height = b ? a.expandedHeight : a.height))
                    };
                    x.on("fullscreenChange", m)
                }

                function g() {
                    t.appendChild(v);
                    v.onclick = function() {
                        l.onAdUserClose();
                        n()
                    };
                    setTimeout(function() {
                        v.style.display = "block"
                    }, 1E3 * ~~a.minSuggestedDuration)
                }

                function n() {
                    "function" ===
                    typeof m && x.off("fullscreenChange", m);
                    f()
                }
                if (void 0 !== a) {
                    var p = !1,
                        m;
                    var t = document.createElement("div");
                    t.className = "orp-jsProElement orp-nonlinear";
                    var u = a.iframeResource ? document.createElement("iframe") : document.createElement("div");
                    t.appendChild(u);
                    var v = document.createElement("div");
                    v.className = "orp-jsProElement orp-close";
                    v.style.display = "none";
                    0 < ~~a.width && (u.width = a.width, t.style.width = a.width);
                    0 < ~~a.height && (u.height = a.height);
                    0 < ~~a.expandedWidth && (p = !0, u.setAttribute("expandedWidth", a.expandedWidth));
                    0 < ~~a.expandedHeight && (p = !0, u.setAttribute("expandedHeight", a.expandedHeight));
                    0 < ~~a.minSuggestedDuration && u.setAttribute("minSuggestedDuration", a.minSuggestedDuration);
                    u.setAttribute("scalable", !!a.scalable);
                    u.setAttribute("maintainAspectRatio", !!a.maintainAspectRatio);
                    if (a.nonlinearClickThroughURLTemplate) {
                        d();
                        var L = "cursor:pointer;"
                    }
                    u.setAttribute("style", L);
                    if (a.staticResource && -1 < a.type.indexOf("image")) {
                        var w = document.createElement("img");
                        w.src = ka(ka(a.staticResource));
                        u.appendChild(w)
                    }
                    a.iframeResource &&
                        (w = a.iframeResource, u.src = ka(w));
                    a.htmlResource && (w = a.htmlResource, u.innerHTML = w);
                    void 0 !== w && (0 < ~~a.width && (w.width = a.width), 0 < ~~a.height && (w.height = a.height), p && e(), g(), x.one(y.beforeComplete, n), x.getWrapper().appendChild(t), l.onAdLoaded())
                }
            })(p(u.sort(function(a, b) {
                return a.width - b.width
            })))
        }

        function d() {
            function a() {
                var a = "",
                    d = b.iframeResource ? document.createElement("iframe") : document.createElement("div");
                d.className = "orp-jsProElement orp-vast-icon ";
                void 0 !== b.xPosition && (a += "number" === typeof b.xPosition ?
                    "left:" + b.xPosition + "px;" : b.xPosition + ":0;");
                void 0 !== b.yPosition && (a += "number" === typeof b.yPosition ? "top:" + b.yPosition + "px;" : b.yPosition + ":0;");
                0 < ~~b.width && (a += "width:" + b.width + "px;");
                0 < ~~b.height && (a += "height:" + b.height + "px;");
                p.clickThroughURLTemplate && (a += "cursor:pointer;", d.onclick = function() {
                    if (x.isPaused()) return x.play(), !1;
                    p.click();
                    var a = c(p);
                    a && window.open(a, "_blank")
                });
                d.setAttribute("style", a);
                if (b.staticResource && -1 < b.type.indexOf("image")) {
                    var e = document.createElement("img");
                    e.className =
                        "orp-jsProElement orp-vast-icon-img";
                    e.src = ka(b.staticResource);
                    e.onerror = function() {
                        this.remove()
                    };
                    0 < ~~b.width && (e.width = b.width);
                    0 < ~~b.height && (e.height = b.height);
                    d.appendChild(e)
                } else b.iframeResource ? (e = b.iframeResource, d.src = ka(e)) : b.htmlResource && (e = b.htmlResource, d.innerHTML = e);
                void 0 !== e && (x.getWrapper().appendChild(d), p.load());
                return d
            }
            if (g.icons && g.icons.length) {
                var b = g.icons[0],
                    d = ~~b.offset,
                    f = ~~b.duration,
                    n, p = new DMVAST.iconTracker(e, b),
                    l = function() {
                        p.setProgress(x.currentTime());
                        null ===
                            n && (-1 === d || x.currentTime() >= d) && (n = a(), -1 === f && x.off("timeupdate", l));
                        0 < f && n && x.currentTime() >= f && (n.parentNode && n.parentNode.removeChild(n), x.off("timeupdate", l))
                    };
                x.on("timeupdate", l)
            }
        }

        function c(a, b) {
            if (b = b || a.clickThroughURLTemplate) {
                a.setProgress(x.currentTime());
                var c = DMVAST.util.resolveURLTemplates([b], {
                    CACHEBUSTER: Math.round(1E10 * Math.random()),
                    CONTENTPLAYHEAD: a.progressFormated()
                })[0]
            }
            return c
        }

        function n(a, b) {
            void 0 !== a && DMVAST.util.track(a, b)
        }

        function t(a, b) {
            if (!C) {
                d = b.variations;
                if (!d ||
                    !d.length) {
                    n(a.errorURLTemplates, {
                        ERRORCODE: 401
                    });
                    return
                }
                return d
            }
            var c = b.mediaFiles;
            if (c.length) {
                var d = function(a) {
                    for (var b = 0; b < c.length; b++) v(c[b]) ? a.vpaid.push(c[b]) : "" !== x.canPlayType(c[b].mimeType) && a.media.push({
                        src: c[b].fileURL,
                        type: c[b].mimeType,
                        width: c[b].width,
                        height: c[b].height,
                        bitrate: c[b].bitrate
                    });
                    return a
                }({
                    media: [],
                    vpaid: []
                });
                if (0 < d.media.length) return p(d.media.sort(function(a, b) {
                    return a.width - b.width || b.bitrate - a.bitrate
                }));
                if (0 < d.vpaid.length) return d.vpaid[0]
            } else n(a.errorURLTemplates, {
                ERRORCODE: 401
            })
        }

        function p(a) {
            return w(a.filter(function(a) {
                a = a.type.toLowerCase();
                return "video/mp4" === a || "video/webm" === a || "video/ogg" === a
            })) || w(a)
        }

        function w(a) {
            if (a && a.length) {
                for (var c, d = b.sizeController().width(), e = 1; e < a.length; e++) {
                    c = a[e - 1];
                    if (!(d >= c.width && d >= a[e].width && c.width !== a[e].width) && d <= a[e].width) return c;
                    if (a[e].bitrate > c.bitrate || a[e].width > c.width || a[e].height > c.height) c = a[e]
                }
                return void 0 !== c ? c : a[0]
            }
        }

        function v(a) {
            return !!a && "VPAID" === a.apiFramework && -1 !== a.mimeType.indexOf("javascript")
        }
        var x, u, E, C = "linear" === g.type,
            P;
        this.init = function(c, n, p, w) {
            E = p;
            x = c;
            u = t(e, g);
            if (void 0 === u) l.onAdError(403, e.errorURLTemplates);
            else if (b.adVideoType(C), u.src = ka(u.src), u.fileURL = ka(u.fileURL), v(u)) {
                E.tag._isVpaid = !0;
                x = w(u.src);
                try {
                    Lc(a, x, E, l).init(u, g)
                } catch (M) {
                    l.onAdError("startVPAID")
                }
            } else E.tag._isVpaid = void 0, C ? (x = w(u.src), P = q(x.getWrapper()).parents(".orp-controls-wrapper"), f(), b.setAdPlayerWrapper(new zc(b, x, p))) : "nonlinear" === g.type && (f(), m(), b.onAdLoaded(function() {
                n()
            })), d(g)
        }
    }

    function lb(a,
        b) {
        function e(a, b) {
            a = g(a);
            for (var c = 0; c < a.length; c++) {
                var d = new t(a[c]);
                b.addChild(d);
                a[c].ads && e(a[c].ads, d)
            }
            return b
        }

        function g(a) {
            var b = a.filter(function(a) {
                return null != a.sequence
            }).sort(function(a, b) {
                return ~~a.sequence - ~~b.sequence
            });
            a = a.filter(function(a) {
                return null == a.sequence
            });
            return b.concat(a)
        }

        function l(a, b) {
            x = null == x ? m(v[0], a) : f(x, a, b);
            if (null != x) {
                var c = null != x.value.sequence;
                u = g(x.value.creatives.filter(function(a) {
                    return "linear" === a.type || !c && "nonlinear" === a.type
                }))
            }
        }

        function f(a,
            b, c) {
            a = "root" !== a.value || c ? a.parent : a;
            if (null != a) return a.showed = !0, a.children.splice(0, 1), m(a, b, c)
        }

        function m(a, b, c) {
            if (null == a || !v.length) return null;
            if (a && a.children.length) return m(a.children[0], b, c);
            if ("root" == a.value) return null;
            if (null != a.value.sequence || !c) {
                if (a.wrapper || !b && a.parent.showed && null == a.value.sequence) return f(a.parent, b, c);
                a.showed = !0;
                return a
            }
        }

        function d(a) {
            return a ? a.splice(0, 1)[0] : a
        }

        function c() {
            function a(a) {
                return a.active && 0 < a.adBreak.length ? !0 : a.active = !1
            }
            return a(w.preRoll) ?
                w.preRoll : a(w.midRoll) ? w.midRoll : a(w.postRoll) ? w.postRoll : null
        }

        function n() {
            E && E.trackingEvent && (new VMAP.tracker(E.trackingEvent)).breakEnd();
            var a = c();
            if (null == a) return null;
            E = d(a.adBreak);
            if (!E) return null;
            E.trackingEvent && (new VMAP.tracker(E.trackingEvent)).breakStart();
            v = E.vastAdData;
            return p.getNext()
        }

        function t(a) {
            this.value = a;
            this.showed = this.wrapper = !1;
            this.children = [];
            this.parent = null;
            this.addChild = function(a) {
                a.parent = this;
                this.wrapper = !0;
                this.children.push(a)
            }
        }
        var p = this,
            w = {
                preRoll: {
                    active: !1,
                    adBreak: []
                },
                midRoll: {
                    active: !1,
                    adBreak: []
                },
                postRoll: {
                    active: !1,
                    adBreak: []
                }
            },
            v = [],
            x, u, E, q = [],
            P = 0;
        this.getOptions = function() {
            return b
        };
        this.getContent = function(a, c) {
            function g(a) {
                var b = a.tag.url.trim();
                Ha(b, "\x3c") && (a.response = (new DOMParser).parseFromString(b, "text/xml"))
            }
            b.tag && "bidding" === b.tag.type || A.event(A.types.request, b);
            b.requestTimeout && (b.timeout = b.requestTimeout);
            b.withCredentials = !0;
            var f = 0,
                n = !1;
            (function(a, b, p) {
                f++;
                g(a);
                DMVAST.client.get(a.tag.url, a, function(a, g) {
                    a && b && "start" == b.timeOffset &&
                        q.push(a);
                    if (a) {
                        var l = e(a.ads, new t("root")).children;
                        E ? E.vastAdData = !E.allowMultipleAds && 1 < l.length ? [d(l)] : l : v = l
                    }
                    E && "start" == E.timeOffset && P--;
                    if (a) p(b), n = !0;
                    else if (!n && 0 === --f) {
                        var m;
                        g ? m = g.message || "error" : a || (m = "no ad");
                        c(m)
                    }
                })
            })(b, null, a)
        };
        this.getNext = function(a, b) {
            null != x && u && 0 !== u.length || v && 0 !== v.length && (null == v[0].value.sequence && b || l(a, b));
            var c;
            u && u.length && (c = d(u));
            return void 0 !== c ? {
                ad: x.value,
                creative: c,
                adShowed: !a
            } : n()
        }
    }

    function Lc(a, b, e, g) {
        return new function(b, e) {
            var f = a.getAdController(),
                d = this;
            this.id = "vpaid" + Math.random();
            this.iframe = null;
            this.vpClassName = "orp-vpaid-element";
            this.vpaidContaine = null;
            this.init = function(c, n) {
                function l() {
                    g.onAdError("callbackIframeError");
                    v()
                }

                function p() {
                    var c = d.iframe.contentWindow.getVPAIDAd;
                    if (c && "function" === typeof c)
                        if (c = new aa(a, b, e, c(), v, g), c.handshakeVersion("2.0"), c.checkVPAIDInterface()) {
                            f.setAdPlayerWrapper(c);
                            c.setCallbacksForCreative();
                            var p = f.sizeController().width(),
                                l = f.sizeController().height();
                            c.initAd(p, l, "normal", -1, {
                                AdParameters: n.adParameters
                            }, {
                                slot: d.iframe.contentWindow.document.querySelector("." + d.vpClassName),
                                videoSlot: b.getVideo()
                            })
                        } else g.onAdError("checkVPAIDInterface false"), v();
                    else g.onAdError("getVPAIDAd not foud"), v()
                }

                function m(a, b) {
                    var c = document.createElement("iframe");
                    c.title = "pro";
                    c.marginWidth = "0";
                    c.marginHeight = "0";
                    c.frameBorder = "0";
                    c.width = "100%";
                    c.height = "100%";
                    c.style.margin = "0px";
                    c.style.padding = "0px";
                    c.style.border = "none";
                    b && (c.style.zIndex = b);
                    c.setAttribute("SCROLLING", "NO");
                    a.innerHTML = "";
                    a.appendChild(c);
                    return c
                }
                d.vpaidContaine = document.createElement("div");
                d.vpaidContaine.className = "orp-vpaid-container";
                q(b.getWrapper()).prepend(d.vpaidContaine);
                var v = function() {
                    b.pause();
                    q(d.vpaidContaine).hide();
                    Mc && f.isAdStarted() || setTimeout(function() {
                        q(d.vpaidContaine).remove()
                    }, 1E3)
                };
                try {
                    var x = '\x3cdiv class\x3d"' + d.vpClassName + '" style\x3d"height: 100%"\x3e\x3c/div\x3e\x3cscript type\x3d"text/javascript" src\x3d"' + c.fileURL + '"\x3e\x3c/script\x3e';
                    d.iframe = m(d.vpaidContaine, c.zIndex);
                    cb(d.iframe, d.id, x, p, l)
                } catch (u) {
                    g.onAdError("setIframeContent",
                        u), v()
                }
            }
        }(b, e)
    }

    function Nc(a) {
        this.start = a.adStart;
        this.show = T;
        this.resumeAdAfterClick = a.resumeAd;
        this.off = T
    }

    function Oc(a, b) {
        function e() {
            m();
            var b = Ya(u, a.sizeController().height(!0)),
                c = b >= p.playPercent;
            b >= p.showPercent && g() || !d || (x = v || c, !t && a.isPaused() || !x ? a.pauseAd() : a.resumeAd(), v && E !== c && !a.isFullscreen() && a.sizeController().stickyState(!c), E = c)
        }

        function g() {
            if (d) return !1;
            if (!c || n) return !0;
            A.log("wait ini");
            a.adStart();
            return n = !0
        }

        function l(a) {
            t = !a;
            A.log("isAutoStarted: " + t)
        }

        function f(b) {
            A.log("showAd remove ivm-hidden");
            a.getElement().removeClass("orp-player-ipm-hidden");
            b || (d = !0, e())
        }

        function m() {
            function b(a) {
                !0 !== C[a] && (void 0 === C[a] ? (C[a] = !0, setTimeout(function() {
                    C[a] = !1
                }, 3E3)) : (C[a] = !0, A.log("init element is at the end of html"), "send" === a && A.event(A.types.error, p, "init element is at the end of html")))
            }
            if (!C.send && !d) {
                var c = w.get(0).document.body.offsetHeight,
                    e = a.sizeController().height(!0) * p.playPercent / 100,
                    g = u.offset().top,
                    f = w.get(0);
                g + e > c && (b("log"), f.innerHeight + f.scrollY >= f.document.body.offsetHeight &&
                    b("send"))
            }
        }
        var d, c, n, t = !0,
            p = q.extend({}, {
                showPercent: 30,
                playPercent: 30
            }, b.advertising),
            w = q(da()),
            v = p.sticky,
            x, u = function() {
                var b = bb(a.getElement().get(0));
                return b ? q(b) : a.getElement()
            }(),
            E = !1,
            C = {};
        this.show = function(a) {
            f(a)
        };
        this.resumeAdAfterClick = function() {
            l(!1);
            e()
        };
        this.off = function() {
            w.off("scroll resize", e);
            a.isUserClose() || c && !a.noAd() || !a.showDefaultTag(!0) ? (a.getElement().addClass("orp-force-hide-player"), a.clearViewElement()) : (a.getElement().addClass("orp-rel"), f())
        };
        this.start = function() {
            c ||
                (e(), x && d && (d = !1, x && g()));
            c ? (n = d = !1, x && g(), e()) : (c = !0, a.onAdStart(function() {
                d = !0
            }), a.onAdPaused(function() {
                x && l(!0)
            }), a.onAdResumed(function() {
                l(!1)
            }), a.onAdClicked(function() {
                l(!0)
            }), e(), w.on("scroll resize", e))
        }
    }

    function mb(a) {
        function b(b) {
            e || (a.getElement().removeClass("orp-player-ivm-hidden"), b || (A.log("showAd remove ivm-hidden"), e = !0, a.resumeAd()))
        }
        var e;
        this.start = a.adStart;
        this.show = function(a) {
            b(a)
        };
        this.resumeAdAfterClick = a.resumeAd;
        this.off = function() {
            a.isUserClose() || e && !a.noAd() || !a.showDefaultTag(!0) ?
                (a.getElement().addClass("orp-player-ivm-hidden"), a.clearViewElement()) : b(!0)
        }
    }

    function Pc(a, b) {
        function e() {
            var b = Ya(x, a.sizeController().height(!0));
            b >= t.showPercent && g() || !f || (b = b >= t.playPercent, v = w || b, !n && a.isPaused() || !v ? a.pauseAd() : a.resumeAd(), w && u !== b && !a.isFullscreen() && a.sizeController().stickyState(!b), u = b)
        }

        function g() {
            if (f) return !1;
            if (!m || d) return !0;
            A.log("wait ini");
            a.adStart();
            return d = !0
        }

        function l(a) {
            n = !a;
            A.log("isAutoStarted: " + n)
        }
        var f, m, d, c, n = !0,
            t = q.extend({}, {
                    showPercent: 30,
                    playPercent: 30
                },
                b.advertising),
            p = q(da()),
            w = t.sticky,
            v, x = function() {
                var b = bb(a.getElement().get(0));
                return b ? q(b) : a.getElement()
            }(),
            u = !1;
        this.show = function(a) {
            a || f || (A.log("showAd InBanner"), f = !0, e())
        };
        this.resumeAdAfterClick = function() {
            l(!1);
            e()
        };
        this.off = function() {
            p.off("scroll", e);
            w && !u && a.sizeController().stickyState(!1);
            a.isUserClose() ? a.showDefaultTag() || a.createStub() : a.showDefaultTag() || a.isForceFile() && m && (!a.noAd() || f || c) || a.createStub()
        };
        this.start = function() {
            m || (e(), v && f && (f = !1, v && g()));
            m ? (f && (c = !0),
                d = f = !1, v && g()) : (m = !0, a.onAdPaused(function() {
                v && l(!0)
            }), a.onAdResumed(function() {
                l(!1)
            }), a.onAdClicked(function() {
                l(!0)
            }), p.on("scroll", e));
            e()
        }
    }

    function Qc(a) {
        this.show = this.start = T;
        this.resumeAdAfterClick = a.resumeAd;
        this.off = T
    }

    function Cb(a) {
        function b() {
            A.log("viewPlugin adReady");
            d();
            t.start()
        }

        function e() {
            A.log("viewPlugin adShow");
            t.show()
        }

        function g() {
            A.log("viewPlugin adHide");
            f();
            t.off()
        }

        function l() {
            x.hidden || (f(), t.resumeAdAfterClick())
        }

        function f() {
            q(x).off("visibilitychange", l)
        }

        function m() {
            u.onGlobalLoaded(b);
            u.onForceShow(function() {
                A.log("viewPlugin force adShow");
                t.show(!1)
            });
            u.onAdStarted(e);
            u.onGlobalShowed(e, !0);
            u.onGlobalStopped(g, !0);
            u.onAdClicked(function() {
                f();
                q(x).on("visibilitychange", l)
            })
        }

        function d() {
            function a() {
                return w.hasClass("orp-player-ipm-hidden") || w.hasClass("orp-player-ivm-hidden")
            }

            function b() {
                a() ? u.isVpaid() && (w.addClass("orp-proReady"), setTimeout(function() {
                    w.removeClass("orp-proReady")
                }, 50)) : clearInterval(d)
            }
            c();
            var d;
            a() && (d = setInterval(b, 2E3))
        }

        function c() {
            if (w.hasClass("orp-player-ipm-hidden")) {
                var a =
                    q(u.getWrapper());
                0 < a.css("height") || (a.css("height", u.sizeController().height()), u.onAdStarted(function() {
                    a.css("height", "")
                }, !0))
            }
        }
        var n = this,
            t, p, w, v = !1,
            x = a.getElement().ownerDocument,
            u;
        this.getElement = function() {
            return w
        };
        this.adStart = function() {
            u.adStart()
        };
        this.resumeAd = function() {
            u.resumeAd()
        };
        this.isPaused = function() {
            return u.isPaused()
        };
        this.pauseAd = function() {
            u.pauseAd()
        };
        this.sizeController = function() {
            return a.getSizeController()
        };
        this.resize = function(a, b, c) {
            u.resize(a, b, c)
        };
        this.setDisableResizeAd =
            function(b) {
                a.setDisableResizeAd(b)
            };
        this.noAd = function() {
            return !u.isAdStarted()
        };
        this.isUserClose = function() {
            return u.isUserClose()
        };
        this.isVpaid = function() {
            return u.isVpaid()
        };
        this.isLikeIma = function() {
            return u.isLikeIma()
        };
        this.isForceFile = function() {
            return u.forceFile()
        };
        this.isFullscreen = function() {
            return u.isFullscreen()
        };
        this.onAdStart = function(a) {
            u.onAdStart(a)
        };
        this.onAdPaused = function(a) {
            u.onAdPaused(a)
        };
        this.onAdResumed = function(a) {
            u.onAdResumed(a)
        };
        this.onAdClicked = function(a) {
            u.onAdClicked(a)
        };
        this.showDefaultTag = function(b) {
            if (!p.advertising || !p.advertising.defaultTag) return !1;
            A.event(A.types.default, p.advertising);
            var c = p.advertising.defaultTag || "",
                d = -1 !== c.indexOf("$$insertOutOfPlayer$$");
            La(c, u.sizeController().height(), u.sizeController().width(), p.appParams, a.getElement(), p.advertising, function(a) {
                w = n.createStub();
                d ? w.after(a.replace("$$insertOutOfPlayer$$", "")) : (w.html(a), b && (a = q('\x3cdiv class\x3d"orp-close"\x3e\x3c/div\x3e'), w.append(a), a.click(function() {
                    w.addClass("orp-force-hide-player orp-force-hide-margin");
                    n.clearViewElement()
                })))
            });
            a.destroy();
            return !d
        };
        this.createStub = function() {
            var b = q("\x3cdiv\x3e\x3c/div\x3e");
            b.attr("class", w.attr("class")).attr("style", w.attr("style")).addClass("orp-defaultTag");
            b.addClass(V ? "orp-isMobile" : "orp-notMobile");
            if (v && u.isAdStarted()) {
                "absolute" !== b.css("position") && b.css("position", "relative");
                var c = p.advertising,
                    d = c.copyright,
                    e = d && d.icon ? d.icon : c.copyrightIcon,
                    f = d && d.link ? d.link : c.copyrightLink;
                c = d && d.text ? d.text : c.copyrightText;
                e = e ? '\x3cimg src\x3d"' + e + '" /\x3e' :
                    "";
                c = c ? c : "";
                f ? b.append('\x3ca href\x3d"' + f + '" class\x3d"orp-powered" target\x3d"_blank"\x3e\x3cspan\x3e' + c + "\x3c/span\x3e " + e + "\x3c/a\x3e") : b.append('\x3cdiv class\x3d"orp-powered"\x3e\x3cspan\x3e' + c + "\x3c/span\x3e " + e + "\x3c/div\x3e")
            }
            u.sizeController().getAspectRatio() && b.append(q("\x3cdiv\x3e\x3c/div\x3e").css("paddingBottom", 100 * u.sizeController().getAspectRatio() + "%"));
            w.replaceWith(b);
            a.destroy();
            return w = b
        };
        this.clearViewElement = function() {
            setTimeout(function() {
                var b = q("\x3cdiv\x3e\x3c/div\x3e").attr("class",
                    w.attr("class")).attr("style", w.attr("style"));
                w.replaceWith(b);
                a.destroy()
            }, 1E3)
        };
        a.one(y.startLoad, function(b) {
            p = q.extend({}, p, b);
            u = a.getAdController();
            w = q(a.getElement());
            b = !1 === p.inView || "inPage" === p.type;
            var c = !0 === p.inView || "inView" === p.type,
                d = "inBanner" === p.type,
                e = "rewarded" === p.type,
                f = "inStream" === p.type;
            if (d && p.advertising) {
                var g = p.advertising.copyright;
                v = (g && g.icon ? g.icon : p.advertising.copyrightIcon) || (g && g.text ? g.text : p.advertising.copyrightText)
            } else v = !1;
            a.isAdapter() ? t = new Qc(n) : b ? (t =
                new Oc(n, p), w.addClass("orp-player-ipm orp-player-ipm-hidden")) : c ? (t = new mb(n), w.addClass("orp-player-ivm-hidden orp-player-ivm-" + Sb(p.advertising, "position", "BR"))) : e ? (t = new mb(n), w.addClass("orp-player-ivm-hidden orp-player-rewarded")) : d ? (t = new Pc(n, p), w.addClass("orp-player-ipm")) : f && (t = new Nc(n, p));
            db(w, !0);
            p.margin && w.css("margin", p.margin);
            m()
        });
        a.one(y.showAd, function() {
            t.show(!0)
        })
    }

    function Ec(a, b, e, g, l) {
        function f() {
            function a(a, c, d, e) {
                Na(function() {
                    p(a, c, d, !1, e);
                    L && L.ok || t(a) || w()
                }, !b)
            }
            q(g.tag).each(function(b, c) {
                var e = E;
                E++;
                "bidding" === c.type && C++;
                d(c, function(b) {
                    b.getContent(function() {
                        a(e, b, !0)
                    }, function(c) {
                        a(e, b, !1, c)
                    })
                })
            });
            var b = !0
        }

        function m() {
            var a = E,
                c = g.tag[a];
            c ? (E++, d(c, function(c) {
                c.getContent(function() {
                    p(a, c, !0, !0);
                    b(c)
                }, function(b) {
                    p(a, c, !1, !1, b);
                    m()
                })
            })) : e()
        }

        function d(b, d) {
            c(b, function(b) {
                d(a(b))
            })
        }

        function c(a, b) {
            var c = q.extend(!0, {}, g);
            l(a, function() {
                c.tag = a;
                b(c)
            })
        }

        function n() {
            g.bestTimeout ? setTimeout(function() {
                G = !0;
                L || w()
            }, g.bestTimeout) : G = !0
        }

        function t(a) {
            if (G ||
                L || !x(y[a])) return !1;
            var b = 0,
                c = 0;
            q(y).each(function(a, d) {
                d && b++;
                x(d) && c++
            });
            return b !== E && c !== C
        }

        function p(a, b, c, d, e) {
            y[a] = {
                client: b,
                ok: c,
                error: e
            };
            d && (L = y[a]);
            v()
        }

        function w() {
            var a = 0;
            q(y).each(function(c, d) {
                if (d)
                    if (a++, d && !d.ok) c === F && F++;
                    else if (y[0] || G || c === F) return L = u(d), b(L.client), !1
            });
            L && L.ok || a !== E || (L = !0, e())
        }

        function v() {
            M && y.some(function(a) {
                var b = L === a;
                a.sentOpportunity || !b && a.ok || (a.sentOpportunity = !0, A.event(A.types.opportunity, a.client.getOptions()), nb(a.client.getOptions()));
                return b ||
                    void 0 === a
            })
        }

        function x(a) {
            return a && "bidding" === a.client.getOptions().tag.type
        }

        function u(a) {
            x(a) && q(y).each(function(b, c) {
                x(c) && c.ok && c.client.getOptions().tag._cpm > a.client.getOptions().tag._cpm && (a = c)
            });
            return a
        }
        var E = 0,
            C = 0,
            y = [],
            L = !1,
            F = 0,
            G = !1,
            I = !0 === g.sequential,
            M, B = this;
        this.callErrors = function(a) {
            y.forEach(function(b) {
                b.error && (a(b.error), b.error = !1)
            })
        };
        this.tryNext = function() {
            I ? m() : !0 !== L && (L.ok = !1, w())
        };
        this.start = function() {
            I ? m() : (f(), n());
            return B
        };
        this.sendOpportunity = function() {
            M = !0;
            v()
        }
    }

    function Rc(a, b, e) {
        function g(b, d) {
            a.addEventListener(b, function(a) {
                a.getAd().isLinear() && d()
            })
        }

        function l() {
            var b = a.getCurrentAd();
            return b && b.getDuration ? b.getDuration() : 0
        }
        var f = !0;
        b.volume() || a.getVolume();
        var m, d = e.getAdTracker();
        (function() {
            function b() {
                var b = a.getCurrentAd().getContentType();
                return b && (0 === b.indexOf("text") || 0 === b.indexOf("image"))
            }

            function n(a) {
                return function() {
                    d.onProgressPercent(a)
                }
            }
            g(google.ima.AdEvent.Type.STARTED, function() {
                m = l();
                e.adType(a.getCurrentAd().getAdPodInfo().getTimeOffset());
                e.adVideoType(!b());
                f = !1;
                d.onAdStarted();
                d.onAdImpression()
            });
            g(google.ima.AdEvent.Type.PAUSED, function() {
                f = !0;
                d.onAdPaused()
            });
            g(google.ima.AdEvent.Type.RESUMED, function() {
                f = !1;
                d.onAdPlaying()
            });
            g(google.ima.AdEvent.Type.LOADED, d.onAdLoaded);
            g(google.ima.AdEvent.Type.USER_CLOSE, d.onAdUserClose);
            g(google.ima.AdEvent.Type.CLICK, d.onAdClickThru);
            g(google.ima.AdEvent.Type.FIRST_QUARTILE, n(25));
            g(google.ima.AdEvent.Type.MIDPOINT, n(50));
            g(google.ima.AdEvent.Type.THIRD_QUARTILE, n(75));
            g(google.ima.AdEvent.Type.COMPLETE,
                d.onAdCompleted);
            g(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, d.onAdSkippableStateChange);
            g(google.ima.AdEvent.Type.SKIPPED, d.onAdSkipped)
        })();
        this.getType = function() {
            return "ima"
        };
        this.isPaused = function() {
            return f
        };
        this.pauseAd = function() {
            a.pause()
        };
        this.skipAd = function() {
            d.onAdLog("skipAd");
            a.skip()
        };
        this.clickAd = function() {
            d.onAdLog("not implement clickAd")
        };
        this.play = function() {
            a.resume()
        };
        this.resumeAd = function() {
            a.resume()
        };
        this.volume = function(b) {
            void 0 !== b && (a.setVolume(b), setTimeout(function() {
                    d.onAdVolumeChange(b)
                },
                1));
            return a.getVolume()
        };
        this.isMuted = function() {
            return 0 === a.getVolume()
        };
        this.getAdDuration = function() {
            return m = l() || m
        };
        this.getAdRemainingTime = function() {
            return a.getRemainingTime()
        };
        this.skipOffset = function() {
            return -1
        };
        this.getAdSkippableState = function() {
            return a.getAdSkippableState()
        };
        this.stopAd = function() {
            a.stop()
        };
        this.resizeAd = function(c, f, g) {
            void 0 === g && !!g !== b.isFullscreen() && e.toggleFullScreened();
            a.resize(c, f, g ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL);
            setTimeout(function() {
                    d.onAdSizeChange(g)
                },
                1)
        };
        this.destroy = function() {
            a.destroy()
        }
    }

    function Fc(a, b, e, g) {
        function l(c) {
            var d = new google.ima.AdsRenderingSettings;
            d.restoreCustomPlaybackStateOnAdBreakComplete = !1;
            n = c.getAdsManager(b.getVideo(), d);
            u = new Rc(n, b, a);
            a.setAdPlayerWrapper(u);
            n.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, f);
            n.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, m);
            E()
        }

        function f(a) {
            a = a.getError && a.getError();
            C.onAdError(a || "onError", a)
        }

        function m() {
            e.pause();
            C.onAdStopped()
        }

        function d(a, b) {
            Ga("https://imasdk.googleapis.com/js/sdkloader/ima3.js",
                a,
                function() {
                    A.event(A.types.error, g, "load js");
                    b()
                },
                function() {
                    return window.google && google.ima && google.ima.AdsLoader
                })
        }

        function c(a) {
            if (a) {
                var c = [];
                a.forEach(function(a) {
                    c.push(a); - 1 === a && (w = !0)
                });
                b.trigger(y.timeTags, c)
            }
        }
        var n, t, p, w, v, x, u, E, C = a.getAdTracker();
        this.isIma = !0;
        this.getOptions = function() {
            return g
        };
        this.load = function(b) {
            v = a.sizeController().width();
            x = a.sizeController().height();
            E = b;
            try {
                p = new google.ima.AdDisplayContainer(e.getWrapper(), e.getVideo());
                t = new google.ima.AdsLoader(p);
                t.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                    l, !1);
                t.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, f, !1);
                var c = new google.ima.AdsRequest;
                c.adTagUrl = ka(g.tag.url);
                c.linearAdSlotWidth = v;
                c.linearAdSlotHeight = x;
                c.nonLinearAdSlotWidth = v;
                c.nonLinearAdSlotHeight = x;
                c.setAdWillAutoPlay(!0);
                void 0 !== g.tag.willPlayMuted && c.setAdWillPlayMuted(g.tag.willPlayMuted);
                c.forceNonLinearFullSlot = !0;
                t.requestAds(c);
                A.event(A.types.request, g)
            } catch (F) {
                C.onAdError("load", F)
            }
        };
        this.start = function() {
            try {
                try {
                    p.initialize(), n.init(v, x, b.isFullscreen() ? google.ima.ViewMode.FULLSCREEN :
                        google.ima.ViewMode.NORMAL), q(e.getWrapper()).parent().parent().filter(".orp-proVideo").show(), c(n.getCuePoints()), n.start()
                } catch (P) {
                    C.onAdError("start2", P)
                }
            } catch (P) {
                C.onAdError("start", P)
            }
        };
        this.destroy = function() {
            n && n.destroy()
        };
        this.getContent = function(a, b) {
            d(a, b)
        };
        this.startPostRoll = function() {
            if (w) return t.contentComplete(), !0
        }
    }

    function Sc(a, b, e) {
        function g(b, c) {
            a.subscribe(b, c)
        }
        var l = !0,
            f;
        b.volume() || a.getAdVolume();
        var m = e.getAdTracker();
        this.getType = function() {
            return "yandex"
        };
        this.isPaused =
            function() {
                return l = "play" !== a.getAdPlayingState()
            };
        this.pauseAd = function() {
            a.pauseAd()
        };
        this.skipAd = function() {
            m.onAdLog("skipAd");
            a.skipAd()
        };
        this.clickAd = function() {
            m.onAdLog("not implement clickAd")
        };
        this.playAd = function() {
            a.playAd()
        };
        this.play = function() {
            a.resumeAd()
        };
        this.resumeAd = function() {
            a.resumeAd()
        };
        this.volume = function(b) {
            void 0 !== b && (a.setAdVolume(b), setTimeout(function() {
                m.onAdVolumeChange(b)
            }, 1));
            return a.getAdVolume()
        };
        this.isMuted = function() {
            return 0 === a.getAdVolume()
        };
        this.getAdDuration =
            function() {
                return a.getAdDuration()
            };
        this.getAdRemainingTime = function() {
            return a.getAdRemainingTime()
        };
        this.skipOffset = function() {
            return -1
        };
        this.getAdSkippableState = function() {
            return a.getAdSkippableState()
        };
        this.stopAd = function() {
            a.stopAd()
        };
        this.resizeAd = function(a, b, e) {
            setTimeout(function() {
                m.onAdSizeChange(e)
            }, 1)
        };
        this.destroy = function() {
            a && a.destroy && a.destroy()
        };
        (function() {
            function a(a) {
                return function() {
                    m.onProgressPercent(a)
                }
            }
            g(y.adLoaded, m.onAdLoaded);
            g(y.adStarted, function() {
                f = !0;
                e.adVideoType(!0);
                l = !1
            });
            g("AdPodStarted", m.onAdStarted);
            g("AdPodImpression", m.onAdImpression);
            g("AdPodVideoFirstQuartile", a(25));
            g("AdPodVideoMidpoint", a(50));
            g("AdPodVideoThirdQuartile", a(75));
            g("AdUserClose", m.onAdUserClose);
            g("AllAdPodVideoComplete", m.onAdCompleted);
            g("AdPlayingStateChange", function(a) {
                if (f)
                    if ("play" === a.playingState) m.onAdPlaying();
                    else if ("pause" === a.playingState) m.onAdPaused()
            });
            g(y.adVolumeChange, m.onAdVolumeChange);
            g(y.adClickThru, m.onAdClickThru);
            g(y.adSkippableStateChange, m.onAdSkippableStateChange);
            g(y.adSkipped, m.onAdSkipped);
            g(y.adCompleted, m.onAdCompleted)
        })()
    }

    function Ic(a, b, e, g) {
        function l(b) {
            ya.videoAd.loadModule("AdLoader").then(function(a) {
                A.log("yandex ad create");
                return a.AdLoader.create(b)
            }).then(function(a) {
                A.log("yandex ad load");
                return a.loadAd()
            }).then(function(a) {
                A.log("yandex ad viewer");
                a.preload({
                    videoSlot: e.getVideo()
                });
                return new Promise(function(b) {
                    b(a)
                })
            }).then(function(b) {
                A.log("yandex ad start");
                n.onAdLoaded();
                d = b.createPlaybackController(e.getVideo(), e.getWrapper(), {
                    skipDelay: 2
                });
                c = new Sc(d, e, a);
                a.setAdPlayerWrapper(c);
                d.subscribe(y.adStopped, f);
                d.playAd()
            }).catch(function(a) {
                n.onAdError("setup", a)
            });
            A.event(A.types.request, g)
        }

        function f() {
            e.pause();
            n.onAdStopped()
        }

        function m(a, b) {
            Ga("https://an.yandex.ru/system/video-ads-sdk/adsdk.js", a, function() {
                A.event(A.types.error, g, "load js ya");
                b()
            }, function() {
                return !!window.ya
            })
        }
        var d, c, n = a.getAdTracker();
        this.isYa = !0;
        this.getOptions = function() {
            return g
        };
        this.load = function(a) {
            q(e.getWrapper()).parent().parent().filter(".orp-proVideo").show();
            a()
        };
        this.start = function() {
            try {
                var a = "string" === typeof g.tag.url ? JSON.parse(g.tag.url) : g.tag.url;
                l(a)
            } catch (p) {
                n.onAdError("start", p)
            }
        };
        this.destroy = function() {
            d && d.destroy && d.destroy()
        };
        this.getContent = function(a, b) {
            m(a, b)
        };
        this.startPostRoll = T
    }

    function Gc(a, b) {
        function e(a, b) {
            var c = n.pbjs;
            c.logging = A.debugMode();
            var e = "code" + Math.random(),
                f = d;
            f.code = e;
            var g = f.minCpm || 0;
            delete f.minCpm;
            c.que.push(function() {
                c.addAdUnits(f);
                c.setConfig({
                    useBidCache: !0,
                    cache: {
                        url: "https://prebid.adnxs.com/pbc/v1/cache"
                    }
                });
                c.requestBids({
                    bidsBackHandler: function(c) {
                        if (c && c[e] && c[e].bids && c[e].bids[0]) {
                            c = c[e].bids;
                            var d;
                            for (d in c)
                                if (c.hasOwnProperty(d)) {
                                    var f = c[d],
                                        n = f,
                                        l = f.vastUrl || f.vastXml;
                                    if (!l) try {
                                        l = f.adResponse.ad.video.content
                                    } catch (M) {}
                                    n.urlOrXml = l;
                                    if (f.urlOrXml && f.cpm >= g) {
                                        g = f.cpm;
                                        var p = f
                                    }
                                }
                            if (p) {
                                a(p.urlOrXml, p.cpm);
                                return
                            }
                        }
                        b()
                    }
                })
            })
        }

        function g(a, c) {
            var e = {
                    command: "PPCP:prebidRequest",
                    messageId: "APP:" + Math.random()
                },
                f = function(b) {
                    if (b && b.data && "string" === typeof b.data) {
                        try {
                            var d = JSON.parse(b.data)
                        } catch (L) {
                            A.log(L);
                            return
                        }
                        "PPCP:prebidResponse" === d.command && d.messageId === e.messageId && (l && clearTimeout(l), window.removeEventListener("message", f), A.log(d), d.url && "failed" !== d.url ? a(d.url, d.cpm) : c())
                    }
                };
            window.addEventListener("message", f);
            n.postMessage(JSON.stringify(e), "*");
            var g = Math.max(d.prebidTimeout || 0, b.requestTimeout);
            if (g) {
                var l = setTimeout(function() {
                    A.log("prebidClient requestTimeout");
                    n.removeEventListener("message", f);
                    c()
                }, g);
                d.prebidTimeout = g
            }
            n.prebidPluginCP.doPrebid(d)
        }

        function l(e, f) {
            function g() {
                0 ===
                    --p && e()
            }

            function l() {
                f();
                f = T
            }
            var p = 1;
            c = q("\x3ciframe\x3e\x3c/iframe\x3e").hide();
            q(a.getWrapper()).append(c);
            cb(c[0], "" + Math.random(), null, function() {
                n = c[0].contentWindow;
                d = Aa(b.tag.url);
                d.prebidPath || (d.prebidPath = "https://serving.stat-rock.com/player/pb/3.21.0.js");
                ja(d.prebidPath, g, l, T, n.document.body).id = "prebidJsScript";
                d.biddersSpec && ++p && ja("https://serving.stat-rock.com/player/pb/cp.0.1.6.c.js", g, l, T, n.document.body)
            })
        }

        function f() {
            c && c.remove()
        }
        var m, d, c, n, t = f;
        this.getClient = function() {
            return m
        };
        this.getOptions = function() {
            return b
        };
        this.getContent = function(c, n) {
            t = function() {
                n();
                f()
            };
            gb(l, !0)(function() {
                A.event(A.types.request, b);
                (d.biddersSpec ? g : e)(function(d, e) {
                    b.tag._cpm = e || 0;
                    b.tag.url = d;
                    m = new lb(a, b);
                    m.getContent(c, n);
                    f()
                }, t)
            }, t)
        }
    }

    function Tc(a, b, e, g, l, f) {
        function m(a, c) {
            b.addEventListener(a, c)
        }

        function d() {
            function b() {
                c = !0;
                t.onAdPaused()
            }

            function d() {
                c = !1;
                t.onAdPlaying()
            }

            function e(a, b, c) {
                if (b === a.subType) return c(), !0
            }

            function f(a) {
                return function() {
                    t.onProgressPercent(a)
                }
            }
            var g = f(25),
                l = f(50),
                n = f(75);
            return function(c) {
                e(c, a.EVENT_AD_PAUSE, b) || e(c, a.EVENT_AD_RESUME, d) || e(c, a.EVENT_AD_CLOSE, t.onAdUserClose) || e(c, a.EVENT_AD_CLICK, t.onAdClickThru) || e(c, a.EVENT_AD_FIRST_QUARTILE, g) || e(c, a.EVENT_AD_MIDPOINT, l) || e(c, a.EVENT_AD_THIRD_QUARTILE, n) || e(c, a.EVENT_AD_COMPLETE, t.onAdCompleted)
            }
        }
        var c = !0;
        g.volume() || b.getAdVolume();
        var n = function(a) {
                a = a.skipOffset;
                return null == a ? -1 : ~~a
            }(f),
            t = l.getAdTracker();
        (function() {
            e.setParameter(a.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE, !1);
            t.onAdLoaded();
            m(a.EVENT_SLOT_STARTED, function() {
                l.adType(0);
                l.adVideoType(!0);
                c = !1;
                t.onAdStarted();
                t.onAdImpression();
                e.d
            });
            m(a.EVENT_AD, d())
        })();
        this.getType = function() {
            return "fw"
        };
        this.isPaused = function() {
            return c
        };
        this.pauseAd = function() {
            e.pause()
        };
        this.skipAd = function() {
            t.onAdLog("skipAd");
            e.skipCurrentAd()
        };
        this.clickAd = function() {
            t.onAdLog("not implement clickAd")
        };
        this.play = function() {
            e.resume()
        };
        this.resumeAd = function() {
            e.resume()
        };
        this.volume = function(a) {
            void 0 !== a && (b.setAdVolume(a), setTimeout(function() {
                    t.onAdVolumeChange(a)
                },
                1));
            return b.getAdVolume()
        };
        this.isMuted = function() {
            return 0 === b.getAdVolume()
        };
        this.getAdDuration = function() {
            return e.getTotalDuration()
        };
        this.getAdRemainingTime = function() {
            return e.getTotalDuration() - e.getPlayheadTime()
        };
        this.stopAd = function() {
            e.stop()
        };
        this.resizeAd = function(a, b, c) {
            setTimeout(function() {
                t.onAdSizeChange(c)
            }, 1)
        };
        this.destroy = function() {
            b.dispose()
        };
        this.skipOffset = function() {
            return n
        };
        this.getAdSkippableState = function() {
            return -1 < n && e.getPlayheadTime() > n
        }
    }

    function Hc(a, b, e, g) {
        function l(l) {
            var m =
                window.tv && window.tv.freewheel && window.tv.freewheel.SDK;
            m.setLogLevel(A.debugMode() ? m.LOG_LEVEL_INFO : m.LOG_LEVEL_QUIET);
            var w = p.networkId;
            d = new m.AdManager;
            d.setNetwork(w);
            d.setServer(p.serverUrl);
            c = d.newContext();
            c.setProfile(p.profileId);
            c.setSiteSection(p.sectionId, w);
            c.setVideoAsset(p.videoAssetId || "ok", b.duration() || 500, w);
            c.setContentVideoElement(e.getVideo());
            c.addTemporalSlot("Preroll_1", m.ADUNIT_PREROLL, 0);
            c.addEventListener(m.EVENT_REQUEST_COMPLETE, function(d) {
                if (d.success && null !== c) {
                    d =
                        c.getTemporalSlots();
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        console.debug("SLOT - ", f);
                        f.getTimePositionClass() === m.TIME_POSITION_CLASS_PREROLL && n.push(f)
                    }
                    if (n[0]) a.setAdPlayerWrapper(new Tc(m, c, n[0], b, a, g)), l();
                    else t.onAdError("empty tags", void 0)
                } else t.onAdError("!e.success", void 0)
            });
            c.addEventListener(m.EVENT_SLOT_ENDED, f);
            c.submitRequest();
            A.event(A.types.request, g)
        }

        function f() {
            e.pause();
            t.onAdStopped()
        }

        function m(a, b) {
            function c() {
                return window.tv && window.tv.freewheel && window.tv.freewheel.SDK
            }

            function d() {
                A.event(A.types.error, g, "load js");
                b()
            }
            a: {
                try {
                    p = JSON.parse(g.tag.url);
                    break a
                } catch (E) {
                    A.log(E)
                }
                p = void 0
            }
            p ? Ga(p.managerUrl, a, d, c) : d()
        }
        var d, c, n = [],
            t = a.getAdTracker(),
            p;
        this.getOptions = function() {
            return g
        };
        this.getContent = function(a, b) {
            m(a, b)
        };
        this.load = function(a) {
            try {
                l(a)
            } catch (v) {
                t.onAdError("load", v)
            }
        };
        this.start = function() {
            try {
                try {
                    n[0].play()
                } catch (w) {
                    t.onAdError("start2", w)
                }
            } catch (w) {
                t.onAdError("start", w)
            }
        };
        this.destroy = function() {
            n[0] && n[0].stop()
        };
        this.startPostRoll = T
    }

    function Uc(a,
        b, e, g, l) {
        var f = this,
            m = !0,
            d, c, n, t, p, w, v, q = g.getAdTracker();
        (function() {
            q.onAdLoaded();
            b.addEventListener("onStateChange", function(b) {
                c || !V && b.data !== a.PlayerState.PLAYING ? b.data === a.PlayerState.PLAYING ? (m = !1, q.onAdPlaying()) : b.data === a.PlayerState.PAUSED ? (m = !0, q.onAdPaused()) : b.data === a.PlayerState.ENDED && (q.onProgressPercent(100), q.onAdCompleted(), q.onAdStopped()) : (c = !0, m = !1, q.onAdStarted(), q.onAdImpression())
            });
            g.onAdTimeUpdate(function() {
                function a(a) {
                    var c = Math.floor(100 * b.getCurrentTime() / f.getAdDuration()) >=
                        a;
                    c && q.onProgressPercent(a);
                    return c
                }!n && a(0) && (n = !0);
                !t && a(25) && (t = !0);
                !p && a(50) && (p = !0);
                !w && a(75) && (w = !0)
            });
            g.adType(0);
            g.adVideoType(!0);
            g.forceShow();
            (v = e.muted()) && b.mute() || b.unMute();
            d = 100 * e.volume();
            b.setVolume(d)
        })();
        this.getType = function() {
            return "youtube"
        };
        this.isPaused = function() {
            return m
        };
        this.pauseAd = function() {
            b.pauseVideo()
        };
        this.skipAd = function() {
            q.onAdLog("skipAd");
            b.stopVideo();
            q.onAdSkipped();
            q.onAdStopped()
        };
        this.clickAd = function() {
            q.onAdLog("not implement clickAd")
        };
        this.play =
            function() {
                b.playVideo()
            };
        this.resumeAd = function() {
            b.playVideo()
        };
        this.volume = function(a) {
            void 0 !== a && (b.setVolume(100 * a), (v = 0 === a) ? b.isMuted() || b.mute() : (d = 100 * a, b.isMuted() && b.unMute()), setTimeout(function() {
                q.onAdVolumeChange(a)
            }, 100));
            if (b.isMuted()) return 0;
            a = b.getVolume();
            return 0 < a ? a / 100 : a
        };
        this.isMuted = function() {
            return b.isMuted()
        };
        this.getAdDuration = function() {
            return b.getDuration()
        };
        this.getAdRemainingTime = function() {
            return f.getAdDuration() - b.getCurrentTime()
        };
        this.skipOffset = function() {
            return isNaN(l.skipOffset) ?
                -1 : ~~l.skipOffset
        };
        this.getAdSkippableState = function() {
            return -1
        };
        this.stopAd = function() {
            q.onAdLog("stopAd");
            b.stopVideo();
            q.onAdStopped()
        };
        this.resizeAd = function(a, c, d) {
            b.setSize(a, c);
            setTimeout(function() {
                q.onAdSizeChange(d)
            }, 1)
        };
        this.destroy = function() {
            b.destroy()
        }
    }

    function Jc(a, b, e, g) {
        function l(l) {
            q(e.getWrapper()).parent().parent().filter(".orp-proVideo").show();
            q("\x3cdiv\x3e").attr("id", t).addClass("orp-yt-player").prependTo(q(e.getVideo()).parent());
            A.event(A.types.request, g);
            var m = Aa(g.tag.url);
            c = new(d().Player)(t, {
                width: a.sizeController().width(),
                height: a.sizeController().height(),
                videoId: m.videoId || m,
                playerVars: {
                    controls: 0,
                    disablekb: 1,
                    fs: 0
                },
                events: {
                    onReady: function() {
                        0 === c.getDuration() ? f("yt duration is 0") : (n = new Uc(d(), c, b, a, g), a.setAdPlayerWrapper(n), l())
                    },
                    onError: f
                }
            })
        }

        function f(a, b) {
            p.onAdError(a, b)
        }

        function m(a, c) {
            ja("https://www.youtube.com/iframe_api", function() {
                d().loaded ? a() : d().ready(a)
            }, function() {
                A.event(A.types.error, g, "load js yt");
                c()
            }, function() {
                return !!d()
            }, b.getVideo())
        }

        function d() {
            return xa(b.getVideo()).YT
        }
        var c, n, t = "orp-yt-player-id-" + Math.random(),
            p = a.getAdTracker();
        this.isYt = !0;
        this.getOptions = function() {
            return g
        };
        this.load = function(a) {
            try {
                l(a)
            } catch (v) {
                f("load", v)
            }
        };
        this.start = function() {};
        this.destroy = function() {
            try {
                c && c.destroy && c.destroy()
            } catch (w) {
                A.event(A.types.error, g, "destroy")
            }
        };
        this.getContent = function(a, b) {
            m(a, b)
        };
        this.startPostRoll = T
    }

    function Bc(a) {
        function b(b) {
            if (!b.isSend) {
                b.isSend = !0;
                var d = a.adVideoType() ? "VIDEO" : "STATIC";
                A.viewed(b.rate, e,
                    a.adType(), d);
                a.getPlayerListeners().trigger(y.adVideo[b.percent])
            }
        }
        var e, g = 0,
            l = [{
                percent: 0,
                rate: O("0IDWEE_V")
            }, {
                percent: 25,
                rate: O("5I_WEDE2V")
            }, {
                percent: 50,
                rate: O("0I_WEDE5V")
            }, {
                percent: 75,
                rate: O("5I_WEDE7V")
            }, {
                percent: 100,
                rate: O("0I1WDE_E0V")
            }],
            f = q.extend(!0, [], l);
        a.onAdTimeUpdate(function(e) {
            var d = a.getAdDuration(),
                c = f[g];
            d && c && (void 0 === c.time && (c.time = c.percent * d / 100, 100 === c.percent && (c.time -= .6)), e > c.time && (g++, b(c)))
        });
        a.onAdCurrentPercent(function(a) {
            q(f).each(function(d, c) {
                if (c.percent ===
                    a) return b(c), !1
            })
        });
        this.start = function(a) {
            e = a;
            f = q.extend(!0, [], l);
            g = 0
        }
    }
    var q = function(a, b) {
            function e(a, b) {
                b = b || W;
                var k = b.createElement("script");
                k.text = a;
                b.head.appendChild(k).parentNode.removeChild(k)
            }

            function g(a) {
                var b = !!a && "length" in a && a.length,
                    k = h.type(a);
                return "function" !== k && !h.isWindow(a) && ("array" === k || 0 === b || "number" == typeof b && 0 < b && b - 1 in a)
            }

            function l(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            }

            function f(a, b, c) {
                return h.isFunction(b) ? h.grep(a, function(a, k) {
                    return !!b.call(a,
                        k, a) !== c
                }) : b.nodeType ? h.grep(a, function(a) {
                    return a === b !== c
                }) : "string" != typeof b ? h.grep(a, function(a) {
                    return -1 < ob.call(b, a) !== c
                }) : Ma.test(b) ? h.filter(b, a, c) : (b = h.filter(b, a), h.grep(a, function(a) {
                    return -1 < ob.call(b, a) !== c && 1 === a.nodeType
                }))
            }

            function m(a, b) {
                for (;
                    (a = a[b]) && 1 !== a.nodeType;);
                return a
            }

            function d(a) {
                var b = {};
                return h.each(a.match(oa) || [], function(a, k) {
                    b[k] = !0
                }), b
            }

            function c(a) {
                return a
            }

            function n(a) {
                throw a;
            }

            function t(a, b, c, d) {
                var k;
                try {
                    a && h.isFunction(k = a.promise) ? k.call(a).done(b).fail(c) :
                        a && h.isFunction(k = a.then) ? k.call(a, b, c) : b.apply(void 0, [a].slice(d))
                } catch (ha) {
                    c.apply(void 0, [ha])
                }
            }

            function p() {
                W.removeEventListener("DOMContentLoaded", p);
                a.removeEventListener("load", p);
                h.ready()
            }

            function q() {
                this.expando = h.expando + q.uid++
            }

            function v(a, b, c) {
                var k;
                if (void 0 === c && 1 === a.nodeType)
                    if (k = "data-" + b.replace(cb, "-$\x26").toLowerCase(), c = a.getAttribute(k), "string" == typeof c) {
                        try {
                            k = c, c = "true" === k || "false" !== k && ("null" === k ? null : k === +k + "" ? +k : bb.test(k) ? JSON.parse(k) : k)
                        } catch (ca) {}
                        ma.set(a,
                            b, c)
                    } else c = void 0;
                return c
            }

            function x(a, b, c, d) {
                var k, r = 1,
                    z = 20,
                    H = d ? function() {
                        return d.cur()
                    } : function() {
                        return h.css(a, b, "")
                    },
                    e = H(),
                    f = c && c[3] || (h.cssNumber[b] ? "" : "px"),
                    g = (h.cssNumber[b] || "px" !== f && +e) && pb.exec(h.css(a, b));
                if (g && g[3] !== f) {
                    f = f || g[3];
                    c = c || [];
                    g = +e || 1;
                    do r = r || ".5", g /= r, h.style(a, b, g + f); while (r !== (r = H() / e) && 1 !== r && --z)
                }
                return c && (g = +g || +e || 0, k = c[1] ? g + (c[1] + 1) * c[2] : +c[2], d && (d.unit = f, d.start = g, d.end = k)), k
            }

            function u(a, b) {
                for (var k, c, r = [], d = 0, e = a.length; d < e; d++)
                    if (c = a[d], c.style)
                        if (k = c.style.display,
                            b) {
                            if ("none" === k && (r[d] = Q.get(c, "display") || null, r[d] || (c.style.display = "")), "" === c.style.display && Ib(c)) {
                                k = d;
                                var f = void 0;
                                var g = c.ownerDocument;
                                var l = c.nodeName;
                                g = (c = Qa[l]) ? c : (f = g.body.appendChild(g.createElement(l)), c = h.css(f, "display"), f.parentNode.removeChild(f), "none" === c && (c = "block"), Qa[l] = c, c);
                                r[k] = g
                            }
                        } else "none" !== k && (r[d] = "none", Q.set(c, "display", k));
                for (d = 0; d < e; d++) null != r[d] && (a[d].style.display = r[d]);
                return a
            }

            function y(a, b) {
                var k;
                return k = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b ||
                    "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && l(a, b) ? h.merge([a], k) : k
            }

            function C(a, b) {
                for (var k = 0, c = a.length; k < c; k++) Q.set(a[k], "globalEval", !b || Q.get(b[k], "globalEval"))
            }

            function A(a, b, c, d, e) {
                for (var k, r, z, H, f = b.createDocumentFragment(), g = [], ca = 0, l = a.length; ca < l; ca++)
                    if (k = a[ca], k || 0 === k)
                        if ("object" === h.type(k)) h.merge(g, k.nodeType ? [k] : k);
                        else if (ib.test(k)) {
                    r = r || f.appendChild(b.createElement("div"));
                    z = (Ta.exec(k) || ["", ""])[1].toLowerCase();
                    z = pa[z] || pa._default;
                    r.innerHTML = z[1] + h.htmlPrefilter(k) + z[2];
                    for (z = z[0]; z--;) r = r.lastChild;
                    h.merge(g, r.childNodes);
                    r = f.firstChild;
                    r.textContent = ""
                } else g.push(b.createTextNode(k));
                f.textContent = "";
                for (ca = 0; k = g[ca++];)
                    if (d && -1 < h.inArray(k, d)) e && e.push(k);
                    else if (H = h.contains(k.ownerDocument, k), r = y(f.appendChild(k), "script"), H && C(r), c)
                    for (z = 0; k = r[z++];) Ua.test(k.type || "") && c.push(k);
                return f
            }

            function L() {
                return !0
            }

            function F() {
                return !1
            }

            function G() {
                try {
                    return W.activeElement
                } catch (k) {}
            }

            function I(a, b, c, d, e, f) {
                var k, r;
                if ("object" ==
                    typeof b) {
                    "string" != typeof c && (d = d || c, c = void 0);
                    for (r in b) I(a, r, c, d, b[r], f);
                    return a
                }
                if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = F;
                else if (!e) return a;
                return 1 === f && (k = e, e = function(a) {
                    return h().off(a), k.apply(this, arguments)
                }, e.guid = k.guid || (k.guid = h.guid++)), a.each(function() {
                    h.event.add(this, b, e, d, c)
                })
            }

            function M(a, b) {
                return l(a, "table") && l(11 !== b.nodeType ? b : b.firstChild, "tr") ? h("\x3etbody", a)[0] || a : a
            }

            function B(a) {
                return a.type =
                    (null !== a.getAttribute("type")) + "/" + a.type, a
            }

            function K(a) {
                var b = xb.exec(a.type);
                return b ? a.type = b[1] : a.removeAttribute("type"), a
            }

            function S(a, b) {
                var k, c, r, d, e, f;
                if (1 === b.nodeType) {
                    if (Q.hasData(a) && (k = Q.access(a), c = Q.set(b, k), f = k.events))
                        for (r in delete c.handle, c.events = {}, f)
                            for (k = 0, c = f[r].length; k < c; k++) h.event.add(b, r, f[r][k]);
                    ma.hasData(a) && (d = ma.access(a), e = h.extend({}, d), ma.set(b, e))
                }
            }

            function J(a, b, c, d) {
                b = na.apply([], b);
                var k, r, z, H = 0,
                    f = a.length,
                    g = f - 1,
                    l = b[0],
                    n = h.isFunction(l);
                if (n || 1 < f && "string" ==
                    typeof l && !Z.checkClone && wb.test(l)) return a.each(function(k) {
                    var r = a.eq(k);
                    n && (b[0] = l.call(this, k, r.html()));
                    J(r, b, c, d)
                });
                if (f && (k = A(b, a[0].ownerDocument, !1, a, d), r = k.firstChild, 1 === k.childNodes.length && (k = r), r || d)) {
                    r = h.map(y(k, "script"), B);
                    for (z = r.length; H < f; H++) {
                        var m = k;
                        H !== g && (m = h.clone(m, !0, !0), z && h.merge(r, y(m, "script")));
                        c.call(a[H], m, H)
                    }
                    if (z)
                        for (k = r[r.length - 1].ownerDocument, h.map(r, K), H = 0; H < z; H++) m = r[H], Ua.test(m.type || "") && !Q.access(m, "globalEval") && h.contains(k, m) && (m.src ? h._evalUrl && h._evalUrl(m.src) :
                            e(m.textContent.replace(yb, ""), k))
                }
                return a
            }

            function N(a, b, c) {
                for (var k = b ? h.filter(b, a) : a, r = 0; null != (b = k[r]); r++) c || 1 !== b.nodeType || h.cleanData(y(b)), b.parentNode && (c && h.contains(b.ownerDocument, b) && C(y(b, "script")), b.parentNode.removeChild(b));
                return a
            }

            function D(a, b, c) {
                var k, r, d, z, e = a.style;
                return c = c || Jb(a), c && (z = c.getPropertyValue(b) || c[b], "" !== z || h.contains(a.ownerDocument, a) || (z = h.style(a, b)), !Z.pixelMarginRight() && bc.test(z) && db.test(b) && (k = e.width, r = e.minWidth, d = e.maxWidth, e.minWidth = e.maxWidth =
                    e.width = z, z = c.width, e.width = k, e.minWidth = r, e.maxWidth = d)), void 0 !== z ? z + "" : z
            }

            function U(a, b) {
                return {
                    get: function() {
                        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                    }
                }
            }

            function X(a) {
                var b = h.cssProps[a];
                if (!b) {
                    b = h.cssProps;
                    a: {
                        var k = a;
                        if (!(k in hb)) {
                            for (var c = k[0].toUpperCase() + k.slice(1), d = gb.length; d--;)
                                if (k = gb[d] + c, k in hb) break a;
                            k = void 0
                        }
                    }
                    b = b[a] = k || a
                }
                return b
            }

            function R(a, b, c) {
                return (a = pb.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b
            }

            function ta(a, b, c, d, e) {
                var k = 0;
                for (b = c === (d ?
                        "border" : "content") ? 4 : "width" === b ? 1 : 0; 4 > b; b += 2) "margin" === c && (k += h.css(a, c + Ia[b], !0, e)), d ? ("content" === c && (k -= h.css(a, "padding" + Ia[b], !0, e)), "margin" !== c && (k -= h.css(a, "border" + Ia[b] + "Width", !0, e))) : (k += h.css(a, "padding" + Ia[b], !0, e), "padding" !== c && (k += h.css(a, "border" + Ia[b] + "Width", !0, e)));
                return k
            }

            function la(a, b, c) {
                var k, d = Jb(a),
                    r = D(a, b, d),
                    z = "border-box" === h.css(a, "boxSizing", !1, d);
                return bc.test(r) ? r : (k = z && (Z.boxSizingReliable() || r === a.style[b]), "auto" === r && (r = a["offset" + b[0].toUpperCase() + b.slice(1)]),
                    r = parseFloat(r) || 0, r + ta(a, b, c || (z ? "border" : "content"), k, d) + "px")
            }

            function ba(a, b, c, d, h) {
                return new ba.prototype.init(a, b, c, d, h)
            }

            function O() {
                Kb && (!1 === W.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(O) : a.setTimeout(O, h.fx.interval), h.fx.tick())
            }

            function Fa() {
                return a.setTimeout(function() {
                    Za = void 0
                }), Za = h.now()
            }

            function T(a, b) {
                var k = 0,
                    c = {
                        height: a
                    };
                for (b = b ? 1 : 0; 4 > k; k += 2 - b) {
                    var d = Ia[k];
                    c["margin" + d] = c["padding" + d] = a
                }
                return b && (c.opacity = c.width = a), c
            }

            function sa(a, b, c) {
                for (var k, d = (V.tweeners[b] || []).concat(V.tweeners["*"]), r = 0, h = d.length; r < h; r++)
                    if (k = d[r].call(c, b, a)) return k
            }

            function aa(a, b) {
                var k, c, d, r, e;
                for (k in a)
                    if (c = h.camelCase(k), d = b[c], r = a[k], Array.isArray(r) && (d = r[1], r = a[k] = r[0]), k !== c && (a[c] = r, delete a[k]), e = h.cssHooks[c], e && "expand" in e)
                        for (k in r = e.expand(r), delete a[c], r) k in a || (a[k] = r[k], b[k] = d);
                    else b[c] = d
            }

            function V(a, b, c) {
                var k, d = 0,
                    r = V.prefilters.length,
                    e = h.Deferred().always(function() {
                        delete z.elem
                    }),
                    z = function() {
                        if (k) return !1;
                        var b = Za || Fa();
                        b = Math.max(0, f.startTime + f.duration -
                            b);
                        for (var c = 1 - (b / f.duration || 0), d = 0, r = f.tweens.length; d < r; d++) f.tweens[d].run(c);
                        return e.notifyWith(a, [f, c, b]), 1 > c && r ? b : (r || e.notifyWith(a, [f, 1, 0]), e.resolveWith(a, [f]), !1)
                    },
                    f = e.promise({
                        elem: a,
                        props: h.extend({}, b),
                        opts: h.extend(!0, {
                            specialEasing: {},
                            easing: h.easing._default
                        }, c),
                        originalProperties: b,
                        originalOptions: c,
                        startTime: Za || Fa(),
                        duration: c.duration,
                        tweens: [],
                        createTween: function(b, k) {
                            var c = h.Tween(a, f.opts, b, k, f.opts.specialEasing[b] || f.opts.easing);
                            return f.tweens.push(c), c
                        },
                        stop: function(b) {
                            var c =
                                0,
                                d = b ? f.tweens.length : 0;
                            if (k) return this;
                            for (k = !0; c < d; c++) f.tweens[c].run(1);
                            return b ? (e.notifyWith(a, [f, 1, 0]), e.resolveWith(a, [f, b])) : e.rejectWith(a, [f, b]), this
                        }
                    });
                c = f.props;
                for (aa(c, f.opts.specialEasing); d < r; d++)
                    if (b = V.prefilters[d].call(f, a, c, f.opts)) return h.isFunction(b.stop) && (h._queueHooks(f.elem, f.opts.queue).stop = h.proxy(b.stop, b)), b;
                return h.map(c, sa, f), h.isFunction(f.opts.start) && f.opts.start.call(a, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
                    h.fx.timer(h.extend(z, {
                        elem: a,
                        anim: f,
                        queue: f.opts.queue
                    })), f
            }

            function ra(a) {
                return (a.match(oa) || []).join(" ")
            }

            function ua(a) {
                return a.getAttribute && a.getAttribute("class") || ""
            }

            function ia(a, b, c, d) {
                var k;
                if (Array.isArray(b)) h.each(b, function(b, k) {
                    c || Pb.test(a) ? d(a, k) : ia(a + "[" + ("object" == typeof k && null != k ? b : "") + "]", k, c, d)
                });
                else if (c || "object" !== h.type(b)) d(a, b);
                else
                    for (k in b) ia(a + "[" + k + "]", b[k], c, d)
            }

            function Lb(a) {
                return function(b, k) {
                    "string" != typeof b && (k = b, b = "*");
                    var c, d = 0,
                        r = b.toLowerCase().match(oa) || [];
                    if (h.isFunction(k))
                        for (; c = r[d++];) "+" === c[0] ? (c = c.slice(1) || "*", (a[c] = a[c] || []).unshift(k)) : (a[c] = a[c] || []).push(k)
                }
            }

            function ka(a, b, c, d) {
                function k(z) {
                    var f;
                    return r[z] = !0, h.each(a[z] || [], function(a, h) {
                        var z = h(b, c, d);
                        return "string" != typeof z || e || r[z] ? e ? !(f = z) : void 0 : (b.dataTypes.unshift(z), k(z), !1)
                    }), f
                }
                var r = {},
                    e = a === cc;
                return k(b.dataTypes[0]) || !r["*"] && k("*")
            }

            function da(a, b) {
                var k, c, d = h.ajaxSettings.flatOptions || {};
                for (k in b) void 0 !== b[k] && ((d[k] ? a : c || (c = {}))[k] = b[k]);
                return c && h.extend(!0,
                    a, c), a
            }
            var va = [],
                W = a.document,
                qb = Object.getPrototypeOf,
                wa = va.slice,
                na = va.concat,
                rb = va.push,
                ob = va.indexOf,
                Mb = {},
                Ja = Mb.toString,
                fa = Mb.hasOwnProperty,
                ja = fa.toString,
                xa = ja.call(Object),
                Z = {},
                h = function(a, b) {
                    return new h.fn.init(a, b)
                },
                Aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                Ca = /^-ms-/,
                Da = /-([a-z])/g,
                Ha = function(a, b) {
                    return b.toUpperCase()
                };
            h.fn = h.prototype = {
                jquery: "3.2.1",
                constructor: h,
                length: 0,
                toArray: function() {
                    return wa.call(this)
                },
                get: function(a) {
                    return null == a ? wa.call(this) : 0 > a ? this[a + this.length] :
                        this[a]
                },
                pushStack: function(a) {
                    a = h.merge(this.constructor(), a);
                    return a.prevObject = this, a
                },
                each: function(a) {
                    return h.each(this, a)
                },
                map: function(a) {
                    return this.pushStack(h.map(this, function(b, k) {
                        return a.call(b, k, b)
                    }))
                },
                slice: function() {
                    return this.pushStack(wa.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(a) {
                    var b = this.length;
                    a = +a + (0 > a ? b : 0);
                    return this.pushStack(0 <= a && a < b ? [this[a]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: rb,
                sort: va.sort,
                splice: va.splice
            };
            h.extend = h.fn.extend = function() {
                var a, b, c, d, e = arguments[0] || {},
                    f = 1,
                    g = arguments.length,
                    l = !1;
                "boolean" == typeof e && (l = e, e = arguments[f] || {}, f++);
                "object" == typeof e || h.isFunction(e) || (e = {});
                for (f === g && (e = this, f--); f < g; f++)
                    if (null != (a = arguments[f]))
                        for (b in a) {
                            var n = e[b];
                            var m = a[b];
                            e !== m && (l && m && (h.isPlainObject(m) || (c = Array.isArray(m))) ? (c ? (c = !1, d = n && Array.isArray(n) ? n : []) : d = n && h.isPlainObject(n) ? n : {}, e[b] = h.extend(l, d, m)) : void 0 !== m && (e[b] = m))
                        }
                return e
            };
            h.extend({
                expando: "jQuery" +
                    ("3.2.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(a) {
                    throw Error(a);
                },
                noop: function() {},
                isFunction: function(a) {
                    return "function" === h.type(a)
                },
                isWindow: function(a) {
                    return null != a && a === a.window
                },
                isNumeric: function(a) {
                    var b = h.type(a);
                    return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
                },
                isPlainObject: function(a) {
                    var b, k;
                    return !(!a || "[object Object]" !== Ja.call(a)) && (!(b = qb(a)) || (k = fa.call(b, "constructor") && b.constructor, "function" == typeof k && ja.call(k) === xa))
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                type: function(a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? Mb[Ja.call(a)] || "object" : typeof a
                },
                globalEval: function(a) {
                    e(a)
                },
                camelCase: function(a) {
                    return a.replace(Ca, "ms-").replace(Da, Ha)
                },
                each: function(a, b) {
                    var k, c = 0;
                    if (g(a))
                        for (k = a.length; c < k && !1 !== b.call(a[c], c, a[c]); c++);
                    else
                        for (c in a)
                            if (!1 === b.call(a[c], c, a[c])) break;
                    return a
                },
                trim: function(a) {
                    return null == a ? "" : (a + "").replace(Aa, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    return null != a && (g(Object(a)) ? h.merge(c, "string" ==
                        typeof a ? [a] : a) : rb.call(c, a)), c
                },
                inArray: function(a, b, c) {
                    return null == b ? -1 : ob.call(b, a, c)
                },
                merge: function(a, b) {
                    for (var c = +b.length, k = 0, d = a.length; k < c; k++) a[d++] = b[k];
                    return a.length = d, a
                },
                grep: function(a, b, c) {
                    for (var k = [], d = 0, r = a.length, h = !c; d < r; d++) c = !b(a[d], d), c !== h && k.push(a[d]);
                    return k
                },
                map: function(a, b, c) {
                    var k, d = 0,
                        r = [];
                    if (g(a))
                        for (k = a.length; d < k; d++) {
                            var h = b(a[d], d, c);
                            null != h && r.push(h)
                        } else
                            for (d in a) h = b(a[d], d, c), null != h && r.push(h);
                    return na.apply([], r)
                },
                guid: 1,
                proxy: function(a, b) {
                    var c,
                        k, d;
                    if ("string" == typeof b && (c = a[b], b = a, a = c), h.isFunction(a)) return k = wa.call(arguments, 2), d = function() {
                        return a.apply(b || this, k.concat(wa.call(arguments)))
                    }, d.guid = a.guid = a.guid || h.guid++, d
                },
                now: Date.now,
                support: Z
            });
            "function" == typeof Symbol && (h.fn[Symbol.iterator] = va[Symbol.iterator]);
            h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
                Mb["[object " + b + "]"] = b.toLowerCase()
            });
            var Ka = function(a) {
                function b(a, b, c, k) {
                    var d, r, h, e, f = b && b.ownerDocument,
                        z = b ? b.nodeType : 9;
                    if (c = c || [], "string" != typeof a || !a || 1 !== z && 9 !== z && 11 !== z) return c;
                    if (!k && ((b ? b.ownerDocument || b : F) !== D && ja(b), b = b || D, C)) {
                        if (11 !== z && (e = ma.exec(a)))
                            if (d = e[1])
                                if (9 === z) {
                                    if (!(r = b.getElementById(d))) return c;
                                    if (r.id === d) return c.push(r), c
                                } else {
                                    if (f && (r = f.getElementById(d)) && S(b, r) && r.id === d) return c.push(r), c
                                }
                        else {
                            if (e[2]) return sa.apply(c, b.getElementsByTagName(a)), c;
                            if ((d = e[3]) && ea.getElementsByClassName && b.getElementsByClassName) return sa.apply(c, b.getElementsByClassName(d)), c
                        }
                        if (!(!ea.qsa ||
                                ba[a + " "] || A && A.test(a))) {
                            if (1 !== z) {
                                f = b;
                                var g = a
                            } else if ("object" !== b.nodeName.toLowerCase()) {
                                (h = b.getAttribute("id")) ? h = h.replace(na, oa): b.setAttribute("id", h = E);
                                r = qa(a);
                                for (d = r.length; d--;) r[d] = "#" + h + " " + t(r[d]);
                                g = r.join(",");
                                f = qb.test(a) && m(b.parentNode) || b
                            }
                            if (g) try {
                                return sa.apply(c, f.querySelectorAll(g)), c
                            } catch (ad) {} finally {
                                h === E && b.removeAttribute("id")
                            }
                        }
                    }
                    return I(a.replace(Z, "$1"), b, c, k)
                }

                function c() {
                    function a(c, k) {
                        return b.push(c + " ") > Y.cacheLength && delete a[b.shift()], a[c + " "] = k
                    }
                    var b = [];
                    return a
                }

                function k(a) {
                    return a[E] = !0, a
                }

                function d(a) {
                    var b = D.createElement("fieldset");
                    try {
                        return !!a(b)
                    } catch (Zc) {
                        return !1
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b)
                    }
                }

                function h(a, b) {
                    for (var c = a.split("|"), k = c.length; k--;) Y.attrHandle[c[k]] = b
                }

                function e(a, b) {
                    var c = b && a,
                        k = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                    if (k) return k;
                    if (c)
                        for (; c = c.nextSibling;)
                            if (c === b) return -1;
                    return a ? 1 : -1
                }

                function f(a) {
                    return function(b) {
                        return "input" === b.nodeName.toLowerCase() && b.type === a
                    }
                }

                function g(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a
                    }
                }

                function l(a) {
                    return function(b) {
                        return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && va(b) === a : b.disabled === a : "label" in b && b.disabled === a
                    }
                }

                function n(a) {
                    return k(function(b) {
                        return b = +b, k(function(c, k) {
                            for (var d, r = a([], c.length, b), h = r.length; h--;) c[d = r[h]] && (c[d] = !(k[d] = c[d]))
                        })
                    })
                }

                function m(a) {
                    return a && "undefined" != typeof a.getElementsByTagName && a
                }

                function p() {}

                function t(a) {
                    for (var b = 0, c = a.length, k = ""; b < c; b++) k += a[b].value;
                    return k
                }

                function u(a, b, c) {
                    var k = b.dir,
                        d = b.next,
                        r = d || k,
                        h = c && "parentNode" === r,
                        e = L++;
                    return b.first ? function(b, c, d) {
                        for (; b = b[k];)
                            if (1 === b.nodeType || h) return a(b, c, d);
                        return !1
                    } : function(b, c, f) {
                        var z, g, l, n = [U, e];
                        if (f)
                            for (; b = b[k];) {
                                if ((1 === b.nodeType || h) && a(b, c, f)) return !0
                            } else
                                for (; b = b[k];)
                                    if (1 === b.nodeType || h)
                                        if (l = b[E] || (b[E] = {}), g = l[b.uniqueID] || (l[b.uniqueID] = {}), d && d === b.nodeName.toLowerCase()) b = b[k] || b;
                                        else {
                                            if ((z = g[r]) && z[0] === U && z[1] === e) return n[2] = z[2];
                                            if (g[r] = n, n[2] = a(b, c, f)) return !0
                                        }
                        return !1
                    }
                }

                function q(a) {
                    return 1 < a.length ? function(b, c, k) {
                        for (var d = a.length; d--;)
                            if (!a[d](b, c, k)) return !1;
                        return !0
                    } : a[0]
                }

                function v(a, b, c, k, d) {
                    for (var r, h = [], e = 0, f = a.length, z = null != b; e < f; e++)(r = a[e]) && (c && !c(r, k, d) || (h.push(r), z && b.push(e)));
                    return h
                }

                function B(a, c, d, r, h, e) {
                    return r && !r[E] && (r = B(r)), h && !h[E] && (h = B(h, e)), k(function(k, e, f, z) {
                        var g, l = [],
                            n = [],
                            m = e.length,
                            H;
                        if (!(H = k)) {
                            H = c || "*";
                            for (var p = f.nodeType ? [f] : f, ca = [], $a = 0, t = p.length; $a < t; $a++) b(H, p[$a], ca);
                            H = ca
                        }
                        H = !a || !k && c ? H : v(H, l, a, f, z);
                        p = d ? h || (k ? a : m || r) ? [] : e : H;
                        if (d && d(H, p, f, z), r) {
                            var ha = v(p, n);
                            r(ha, [], f, z);
                            for (f = ha.length; f--;)(g = ha[f]) && (p[n[f]] = !(H[n[f]] = g))
                        }
                        if (k) {
                            if (h || a) {
                                if (h) {
                                    ha = [];
                                    for (f = p.length; f--;)(g = p[f]) && ha.push(H[f] = g);
                                    h(null, p = [], ha, z)
                                }
                                for (f = p.length; f--;)(g = p[f]) && -1 < (ha = h ? T(k, g) : l[f]) && (k[ha] = !(e[ha] = g))
                            }
                        } else p = v(p === e ? p.splice(m, p.length) : p), h ? h(null, e, p, z) : sa.apply(e, p)
                    })
                }

                function G(a) {
                    var b,
                        c, k = a.length,
                        d = Y.relative[a[0].type];
                    var r = d || Y.relative[" "];
                    for (var h = d ? 1 : 0, e = u(function(a) {
                            return a === b
                        }, r, !0), f = u(function(a) {
                            return -1 < T(b, a)
                        }, r, !0), z = [function(a, c, k) {
                            a = !d && (k || c !== y) || ((b = c).nodeType ? e(a, c, k) : f(a, c, k));
                            return b = null, a
                        }]; h < k; h++)
                        if (r = Y.relative[a[h].type]) z = [u(q(z), r)];
                        else {
                            if (r = Y.filter[a[h].type].apply(null, a[h].matches), r[E]) {
                                for (c = ++h; c < k && !Y.relative[a[c].type]; c++);
                                return B(1 < h && q(z), 1 < h && t(a.slice(0, h - 1).concat({
                                        value: " " === a[h - 2].type ? "*" : ""
                                    })).replace(Z, "$1"), r, h < c &&
                                    G(a.slice(h, c)), c < k && G(a = a.slice(c)), c < k && t(a))
                            }
                            z.push(r)
                        }
                    return q(z)
                }

                function w(a, c) {
                    var d = 0 < c.length,
                        r = 0 < a.length,
                        h = function(k, h, e, f, z) {
                            var g, l, n = 0,
                                H = "0",
                                m = k && [],
                                p = [],
                                ca = y,
                                ha = k || r && Y.find.TAG("*", z),
                                t = U += null == ca ? 1 : Math.random() || .1,
                                $a = ha.length;
                            for (z && (y = h === D || h || z); H !== $a && null != (g = ha[H]); H++) {
                                if (r && g) {
                                    var u = 0;
                                    for (h || g.ownerDocument === D || (ja(g), e = !C); l = a[u++];)
                                        if (l(g, h || D, e)) {
                                            f.push(g);
                                            break
                                        }
                                    z && (U = t)
                                }
                                d && ((g = !l && g) && n--, k && m.push(g))
                            }
                            if (n += H, d && H !== n) {
                                for (u = 0; l = c[u++];) l(m, p, h, e);
                                if (k) {
                                    if (0 < n)
                                        for (; H--;) m[H] ||
                                            p[H] || (p[H] = Fa.call(f));
                                    p = v(p)
                                }
                                sa.apply(f, p);
                                z && !k && 0 < p.length && 1 < n + c.length && b.uniqueSort(f)
                            }
                            return z && (U = t, y = ca), m
                        };
                    return d ? k(h) : h
                }
                var x, J, I, y, X, K, D, R, C, A, M, N, S, E = "sizzle" + 1 * new Date,
                    F = a.document,
                    U = 0,
                    L = 0,
                    ta = c(),
                    P = c(),
                    ba = c(),
                    O = function(a, b) {
                        return a === b && (K = !0), 0
                    },
                    la = {}.hasOwnProperty,
                    Q = [],
                    Fa = Q.pop,
                    W = Q.push,
                    sa = Q.push,
                    V = Q.slice,
                    T = function(a, b) {
                        for (var c = 0, k = a.length; c < k; c++)
                            if (a[c] === b) return c;
                        return -1
                    },
                    aa = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
                    Z = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                        "g"),
                    Fb = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                    rb = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                    Xa = RegExp("\x3d[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
                    ia = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                    Lb = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
                    Ja = {
                        ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                        CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                        TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                        ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                        PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                        CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                        bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                        needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
                    },
                    ka = /^(?:input|select|textarea|button)$/i,
                    ua = /^h\d$/i,
                    ra =
                    /^[^{]+\{\s*\[native \w/,
                    ma = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    qb = /[+~]/,
                    da = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
                    fa = function(a, b, c) {
                        a = "0x" + b - 65536;
                        return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
                    },
                    na = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    oa = function(a, b) {
                        return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
                    },
                    pa = function() {
                        ja()
                    },
                    va = u(function(a) {
                        return !0 ===
                            a.disabled && ("form" in a || "label" in a)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    sa.apply(Q = V.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
                } catch ($a) {
                    sa = {
                        apply: Q.length ? function(a, b) {
                            W.apply(a, V.call(b))
                        } : function(a, b) {
                            for (var c = a.length, k = 0; a[c++] = b[k++];);
                            a.length = c - 1
                        }
                    }
                }
                var ea = b.support = {};
                var wa = b.isXML = function(a) {
                    a = a && (a.ownerDocument || a).documentElement;
                    return !!a && "HTML" !== a.nodeName
                };
                var ja = b.setDocument = function(a) {
                    var b, c;
                    a = a ? a.ownerDocument || a : F;
                    return a !== D && 9 === a.nodeType &&
                        a.documentElement ? (D = a, R = D.documentElement, C = !wa(D), F !== D && (c = D.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", pa, !1) : c.attachEvent && c.attachEvent("onunload", pa)), ea.attributes = d(function(a) {
                                return a.className = "i", !a.getAttribute("className")
                            }), ea.getElementsByTagName = d(function(a) {
                                return a.appendChild(D.createComment("")), !a.getElementsByTagName("*").length
                            }), ea.getElementsByClassName = ra.test(D.getElementsByClassName), ea.getById = d(function(a) {
                                return R.appendChild(a).id =
                                    E, !D.getElementsByName || !D.getElementsByName(E).length
                            }), ea.getById ? (Y.filter.ID = function(a) {
                                var b = a.replace(da, fa);
                                return function(a) {
                                    return a.getAttribute("id") === b
                                }
                            }, Y.find.ID = function(a, b) {
                                if ("undefined" != typeof b.getElementById && C) {
                                    var c = b.getElementById(a);
                                    return c ? [c] : []
                                }
                            }) : (Y.filter.ID = function(a) {
                                var b = a.replace(da, fa);
                                return function(a) {
                                    return (a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                                }
                            }, Y.find.ID = function(a, b) {
                                if ("undefined" != typeof b.getElementById &&
                                    C) {
                                    var c, k, d = b.getElementById(a);
                                    if (d) {
                                        if (c = d.getAttributeNode("id"), c && c.value === a) return [d];
                                        var r = b.getElementsByName(a);
                                        for (k = 0; d = r[k++];)
                                            if (c = d.getAttributeNode("id"), c && c.value === a) return [d]
                                    }
                                    return []
                                }
                            }), Y.find.TAG = ea.getElementsByTagName ? function(a, b) {
                                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : ea.qsa ? b.querySelectorAll(a) : void 0
                            } : function(a, b) {
                                var c, k = [],
                                    d = 0,
                                    r = b.getElementsByTagName(a);
                                if ("*" === a) {
                                    for (; c = r[d++];) 1 === c.nodeType && k.push(c);
                                    return k
                                }
                                return r
                            }, Y.find.CLASS =
                            ea.getElementsByClassName && function(a, b) {
                                if ("undefined" != typeof b.getElementsByClassName && C) return b.getElementsByClassName(a)
                            }, M = [], A = [], (ea.qsa = ra.test(D.querySelectorAll)) && (d(function(a) {
                                R.appendChild(a).innerHTML = "\x3ca id\x3d'" + E + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + E + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
                                a.querySelectorAll("[msallowcapture^\x3d'']").length && A.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                                a.querySelectorAll("[selected]").length ||
                                    A.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                                a.querySelectorAll("[id~\x3d" + E + "-]").length || A.push("~\x3d");
                                a.querySelectorAll(":checked").length || A.push(":checked");
                                a.querySelectorAll("a#" + E + "+*").length || A.push(".#.+[+~]")
                            }), d(function(a) {
                                a.innerHTML = "\x3ca href\x3d'' disabled\x3d'disabled'\x3e\x3c/a\x3e\x3cselect disabled\x3d'disabled'\x3e\x3coption/\x3e\x3c/select\x3e";
                                var b =
                                    D.createElement("input");
                                b.setAttribute("type", "hidden");
                                a.appendChild(b).setAttribute("name", "D");
                                a.querySelectorAll("[name\x3dd]").length && A.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
                                2 !== a.querySelectorAll(":enabled").length && A.push(":enabled", ":disabled");
                                R.appendChild(a).disabled = !0;
                                2 !== a.querySelectorAll(":disabled").length && A.push(":enabled", ":disabled");
                                a.querySelectorAll("*,:x");
                                A.push(",.*:")
                            })), (ea.matchesSelector = ra.test(N = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector ||
                                R.msMatchesSelector)) && d(function(a) {
                                ea.disconnectedMatch = N.call(a, "*");
                                N.call(a, "[s!\x3d'']:x");
                                M.push("!\x3d", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                            }), A = A.length && new RegExp(A.join("|")),
                            M = M.length && new RegExp(M.join("|")), b = ra.test(R.compareDocumentPosition), S = b || ra.test(R.contains) ? function(a, b) {
                                var c = 9 === a.nodeType ? a.documentElement : a,
                                    k = b && b.parentNode;
                                return a === k || !(!k || 1 !== k.nodeType || !(c.contains ? c.contains(k) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(k)))
                            } : function(a, b) {
                                if (b)
                                    for (; b = b.parentNode;)
                                        if (b === a) return !0;
                                return !1
                            }, O = b ? function(a, b) {
                                if (a === b) return K = !0, 0;
                                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                return c ? c : (c = (a.ownerDocument || a) ===
                                    (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !ea.sortDetached && b.compareDocumentPosition(a) === c ? a === D || a.ownerDocument === F && S(F, a) ? -1 : b === D || b.ownerDocument === F && S(F, b) ? 1 : X ? T(X, a) - T(X, b) : 0 : 4 & c ? -1 : 1)
                            } : function(a, b) {
                                if (a === b) return K = !0, 0;
                                var c = 0;
                                var k = a.parentNode;
                                var d = b.parentNode,
                                    r = [a],
                                    h = [b];
                                if (!k || !d) return a === D ? -1 : b === D ? 1 : k ? -1 : d ? 1 : X ? T(X, a) - T(X, b) : 0;
                                if (k === d) return e(a, b);
                                for (k = a; k = k.parentNode;) r.unshift(k);
                                for (k = b; k = k.parentNode;) h.unshift(k);
                                for (; r[c] === h[c];) c++;
                                return c ? e(r[c],
                                    h[c]) : r[c] === F ? -1 : h[c] === F ? 1 : 0
                            }, D) : D
                };
                b.matches = function(a, c) {
                    return b(a, null, null, c)
                };
                b.matchesSelector = function(a, c) {
                    if ((a.ownerDocument || a) !== D && ja(a), c = c.replace(Xa, "\x3d'$1']"), !(!ea.matchesSelector || !C || ba[c + " "] || M && M.test(c) || A && A.test(c))) try {
                        var k = N.call(a, c);
                        if (k || ea.disconnectedMatch || a.document && 11 !== a.document.nodeType) return k
                    } catch ($c) {}
                    return 0 < b(c, D, null, [a]).length
                };
                b.contains = function(a, b) {
                    return (a.ownerDocument || a) !== D && ja(a), S(a, b)
                };
                b.attr = function(a, b) {
                    (a.ownerDocument || a) !==
                    D && ja(a);
                    var c = Y.attrHandle[b.toLowerCase()];
                    c = c && la.call(Y.attrHandle, b.toLowerCase()) ? c(a, b, !C) : void 0;
                    return void 0 !== c ? c : ea.attributes || !C ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
                };
                b.escape = function(a) {
                    return (a + "").replace(na, oa)
                };
                b.error = function(a) {
                    throw Error("Syntax error, unrecognized expression: " + a);
                };
                b.uniqueSort = function(a) {
                    var b, c = [],
                        k = 0,
                        d = 0;
                    if (K = !ea.detectDuplicates, X = !ea.sortStable && a.slice(0), a.sort(O), K) {
                        for (; b = a[d++];) b === a[d] && (k = c.push(d));
                        for (; k--;) a.splice(c[k],
                            1)
                    }
                    return X = null, a
                };
                var ac = b.getText = function(a) {
                    var b, c = "",
                        k = 0;
                    if (b = a.nodeType)
                        if (1 === b || 9 === b || 11 === b) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += ac(a)
                        } else {
                            if (3 === b || 4 === b) return a.nodeValue
                        }
                    else
                        for (; b = a[k++];) c += ac(b);
                    return c
                };
                var Y = b.selectors = {
                    cacheLength: 50,
                    createPseudo: k,
                    match: Ja,
                    attrHandle: {},
                    find: {},
                    relative: {
                        "\x3e": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(a) {
                            return a[1] =
                                a[1].replace(da, fa), a[3] = (a[3] || a[4] || a[5] || "").replace(da, fa), "~\x3d" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                        },
                        PSEUDO: function(a) {
                            var b, c = !a[6] && a[2];
                            return Ja.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ia.test(c) && (b = qa(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0,
                                b), a[2] = c.slice(0, b)), a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(a) {
                            var b = a.replace(da, fa).toLowerCase();
                            return "*" === a ? function() {
                                return !0
                            } : function(a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                        },
                        CLASS: function(a) {
                            var b = ta[a + " "];
                            return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), ta(a, function(a) {
                                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(a, c, k) {
                            return function(d) {
                                d = b.attr(d,
                                    a);
                                return null == d ? "!\x3d" === c : !c || (d += "", "\x3d" === c ? d === k : "!\x3d" === c ? d !== k : "^\x3d" === c ? k && 0 === d.indexOf(k) : "*\x3d" === c ? k && -1 < d.indexOf(k) : "$\x3d" === c ? k && d.slice(-k.length) === k : "~\x3d" === c ? -1 < (" " + d.replace(aa, " ") + " ").indexOf(k) : "|\x3d" === c && (d === k || d.slice(0, k.length + 1) === k + "-"))
                            }
                        },
                        CHILD: function(a, b, c, k, d) {
                            var r = "nth" !== a.slice(0, 3),
                                h = "last" !== a.slice(-4),
                                e = "of-type" === b;
                            return 1 === k && 0 === d ? function(a) {
                                return !!a.parentNode
                            } : function(b, c, f) {
                                var z, g;
                                c = r !== h ? "nextSibling" : "previousSibling";
                                var l =
                                    b.parentNode,
                                    n = e && b.nodeName.toLowerCase();
                                f = !f && !e;
                                var H = !1;
                                if (l) {
                                    if (r) {
                                        for (; c;) {
                                            for (z = b; z = z[c];)
                                                if (e ? z.nodeName.toLowerCase() === n : 1 === z.nodeType) return !1;
                                            var m = c = "only" === a && !m && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (m = [h ? l.firstChild : l.lastChild], h && f) {
                                        z = l;
                                        var p = z[E] || (z[E] = {});
                                        var ca = p[z.uniqueID] || (p[z.uniqueID] = {});
                                        var ha = ca[a] || [];
                                        H = (g = ha[0] === U && ha[1]) && ha[2];
                                        for (z = g && l.childNodes[g]; z = ++g && z && z[c] || (H = g = 0) || m.pop();)
                                            if (1 === z.nodeType && ++H && z === b) {
                                                ca[a] = [U, g, H];
                                                break
                                            }
                                    } else if (f && (z = b, p = z[E] || (z[E] = {}),
                                            ca = p[z.uniqueID] || (p[z.uniqueID] = {}), ha = ca[a] || [], g = ha[0] === U && ha[1], H = g), !1 === H)
                                        for (;
                                            (z = ++g && z && z[c] || (H = g = 0) || m.pop()) && ((e ? z.nodeName.toLowerCase() !== n : 1 !== z.nodeType) || !++H || (f && (p = z[E] || (z[E] = {}), ca = p[z.uniqueID] || (p[z.uniqueID] = {}), ca[a] = [U, H]), z !== b)););
                                    return H -= d, H === k || 0 === H % k && 0 <= H / k
                                }
                            }
                        },
                        PSEUDO: function(a, c) {
                            var d, r = Y.pseudos[a] || Y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                            return r[E] ? r(c) : 1 < r.length ? (d = [a, a, "", c], Y.setFilters.hasOwnProperty(a.toLowerCase()) ? k(function(a,
                                b) {
                                for (var k, d = r(a, c), h = d.length; h--;) k = T(a, d[h]), a[k] = !(b[k] = d[h])
                            }) : function(a) {
                                return r(a, 0, d)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: k(function(a) {
                            var b = [],
                                c = [],
                                d = J(a.replace(Z, "$1"));
                            return d[E] ? k(function(a, b, c, k) {
                                var r;
                                c = d(a, null, k, []);
                                for (k = a.length; k--;)(r = c[k]) && (a[k] = !(b[k] = r))
                            }) : function(a, k, r) {
                                return b[0] = a, d(b, null, r, c), b[0] = null, !c.pop()
                            }
                        }),
                        has: k(function(a) {
                            return function(c) {
                                return 0 < b(a, c).length
                            }
                        }),
                        contains: k(function(a) {
                            return a = a.replace(da, fa),
                                function(b) {
                                    return -1 < (b.textContent || b.innerText || ac(b)).indexOf(a)
                                }
                        }),
                        lang: k(function(a) {
                            return Lb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(da, fa).toLowerCase(),
                                function(b) {
                                    var c;
                                    do
                                        if (c = C ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                    return !1
                                }
                        }),
                        target: function(b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        },
                        root: function(a) {
                            return a === R
                        },
                        focus: function(a) {
                            return a === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(a.type || a.href ||
                                ~a.tabIndex)
                        },
                        enabled: l(!1),
                        disabled: l(!0),
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                        },
                        empty: function(a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (6 > a.nodeType) return !1;
                            return !0
                        },
                        parent: function(a) {
                            return !Y.pseudos.empty(a)
                        },
                        header: function(a) {
                            return ua.test(a.nodeName)
                        },
                        input: function(a) {
                            return ka.test(a.nodeName)
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        text: function(a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                        },
                        first: n(function() {
                            return [0]
                        }),
                        last: n(function(a, b) {
                            return [b - 1]
                        }),
                        eq: n(function(a, b, c) {
                            return [0 > c ? c + b : c]
                        }),
                        even: n(function(a, b) {
                            for (var c = 0; c < b; c += 2) a.push(c);
                            return a
                        }),
                        odd: n(function(a, b) {
                            for (var c = 1; c < b; c += 2) a.push(c);
                            return a
                        }),
                        lt: n(function(a, b, c) {
                            for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                            return a
                        }),
                        gt: n(function(a,
                            b, c) {
                            for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                            return a
                        })
                    }
                };
                Y.pseudos.nth = Y.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) Y.pseudos[x] = f(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) Y.pseudos[x] = g(x);
                p.prototype = Y.filters = Y.pseudos;
                Y.setFilters = new p;
                var qa = b.tokenize = function(a, c) {
                    var k, d, r, h, e;
                    if (h = P[a + " "]) return c ? 0 : h.slice(0);
                    h = a;
                    var f = [];
                    for (e = Y.preFilter; h;) {
                        z && !(k = Fb.exec(h)) || (k && (h = h.slice(k[0].length) || h), f.push(d = []));
                        var z = !1;
                        (k = rb.exec(h)) && (z = k.shift(), d.push({
                            value: z,
                            type: k[0].replace(Z,
                                " ")
                        }), h = h.slice(z.length));
                        for (r in Y.filter) !(k = Ja[r].exec(h)) || e[r] && !(k = e[r](k)) || (z = k.shift(), d.push({
                            value: z,
                            type: r,
                            matches: k
                        }), h = h.slice(z.length));
                        if (!z) break
                    }
                    return c ? h.length : h ? b.error(a) : P(a, f).slice(0)
                };
                return J = b.compile = function(a, b) {
                    var c, k = [],
                        d = [],
                        r = ba[a + " "];
                    if (!r) {
                        b || (b = qa(a));
                        for (c = b.length; c--;) r = G(b[c]), r[E] ? k.push(r) : d.push(r);
                        r = ba(a, w(d, k));
                        r.selector = a
                    }
                    return r
                }, I = b.select = function(a, b, c, k) {
                    var d, r, h, e, z, f = "function" == typeof a && a,
                        g = !k && qa(a = f.selector || a);
                    if (c = c || [], 1 === g.length) {
                        if (r =
                            g[0] = g[0].slice(0), 2 < r.length && "ID" === (h = r[0]).type && 9 === b.nodeType && C && Y.relative[r[1].type]) {
                            if (b = (Y.find.ID(h.matches[0].replace(da, fa), b) || [])[0], !b) return c;
                            f && (b = b.parentNode);
                            a = a.slice(r.shift().value.length)
                        }
                        for (d = Ja.needsContext.test(a) ? 0 : r.length; d-- && (h = r[d], !Y.relative[e = h.type]);)
                            if ((z = Y.find[e]) && (k = z(h.matches[0].replace(da, fa), qb.test(r[0].type) && m(b.parentNode) || b))) {
                                if (r.splice(d, 1), a = k.length && t(r), !a) return sa.apply(c, k), c;
                                break
                            }
                    }
                    return (f || J(a, g))(k, b, !C, c, !b || qb.test(a) && m(b.parentNode) ||
                        b), c
                }, ea.sortStable = E.split("").sort(O).join("") === E, ea.detectDuplicates = !!K, ja(), ea.sortDetached = d(function(a) {
                    return 1 & a.compareDocumentPosition(D.createElement("fieldset"))
                }), d(function(a) {
                    return a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e", "#" === a.firstChild.getAttribute("href")
                }) || h("type|href|height|width", function(a, b, c) {
                    if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), ea.attributes && d(function(a) {
                    return a.innerHTML = "\x3cinput/\x3e", a.firstChild.setAttribute("value", ""), "" ===
                        a.firstChild.getAttribute("value")
                }) || h("value", function(a, b, c) {
                    if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
                }), d(function(a) {
                    return null == a.getAttribute("disabled")
                }) || h("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
                    var k;
                    if (!c) return !0 === a[b] ? b.toLowerCase() : (k = a.getAttributeNode(b)) && k.specified ? k.value : null
                }), b
            }(a);
            h.find = Ka;
            h.expr = Ka.selectors;
            h.expr[":"] = h.expr.pseudos;
            h.uniqueSort =
                h.unique = Ka.uniqueSort;
            h.text = Ka.getText;
            h.isXMLDoc = Ka.isXML;
            h.contains = Ka.contains;
            h.escapeSelector = Ka.escape;
            var ab = function(a, b, c) {
                    for (var k = [], d = void 0 !== c;
                        (a = a[b]) && 9 !== a.nodeType;)
                        if (1 === a.nodeType) {
                            if (d && h(a).is(c)) break;
                            k.push(a)
                        }
                    return k
                },
                za = function(a, b) {
                    for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                    return c
                },
                Ba = h.expr.match.needsContext,
                Ea = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                Ma = /^.[^:#\[\.,]*$/;
            h.filter = function(a, b, c) {
                var k = b[0];
                return c &&
                    (a = ":not(" + a + ")"), 1 === b.length && 1 === k.nodeType ? h.find.matchesSelector(k, a) ? [k] : [] : h.find.matches(a, h.grep(b, function(a) {
                        return 1 === a.nodeType
                    }))
            };
            h.fn.extend({
                find: function(a) {
                    var b, c = this.length,
                        k = this;
                    if ("string" != typeof a) return this.pushStack(h(a).filter(function() {
                        for (b = 0; b < c; b++)
                            if (h.contains(k[b], this)) return !0
                    }));
                    var d = this.pushStack([]);
                    for (b = 0; b < c; b++) h.find(a, k[b], d);
                    return 1 < c ? h.uniqueSort(d) : d
                },
                filter: function(a) {
                    return this.pushStack(f(this, a || [], !1))
                },
                not: function(a) {
                    return this.pushStack(f(this,
                        a || [], !0))
                },
                is: function(a) {
                    return !!f(this, "string" == typeof a && Ba.test(a) ? h(a) : a || [], !1).length
                }
            });
            var Na = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (h.fn.init = function(a, b, c) {
                var k, d;
                if (!a) return this;
                if (c = c || Pa, "string" == typeof a) {
                    if (k = "\x3c" === a[0] && "\x3e" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : Na.exec(a), !k || !k[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (k[1]) {
                        if (b = b instanceof h ? b[0] : b, h.merge(this, h.parseHTML(k[1], b && b.nodeType ? b.ownerDocument || b : W, !0)), Ea.test(k[1]) &&
                            h.isPlainObject(b))
                            for (k in b) h.isFunction(this[k]) ? this[k](b[k]) : this.attr(k, b[k]);
                        return this
                    }
                    return d = W.getElementById(k[2]), d && (this[0] = d, this.length = 1), this
                }
                return a.nodeType ? (this[0] = a, this.length = 1, this) : h.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(h) : h.makeArray(a, this)
            }).prototype = h.fn;
            var Pa = h(W);
            var Ra = /^(?:parents|prev(?:Until|All))/,
                Va = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            h.fn.extend({
                has: function(a) {
                    var b = h(a, this),
                        c = b.length;
                    return this.filter(function() {
                        for (var a = 0; a < c; a++)
                            if (h.contains(this,
                                    b[a])) return !0
                    })
                },
                closest: function(a, b) {
                    var c, k = 0,
                        d = this.length,
                        r = [],
                        e = "string" != typeof a && h(a);
                    if (!Ba.test(a))
                        for (; k < d; k++)
                            for (c = this[k]; c && c !== b; c = c.parentNode)
                                if (11 > c.nodeType && (e ? -1 < e.index(c) : 1 === c.nodeType && h.find.matchesSelector(c, a))) {
                                    r.push(c);
                                    break
                                }
                    return this.pushStack(1 < r.length ? h.uniqueSort(r) : r)
                },
                index: function(a) {
                    return a ? "string" == typeof a ? ob.call(h(a), this[0]) : ob.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(a, b) {
                    return this.pushStack(h.uniqueSort(h.merge(this.get(),
                        h(a, b))))
                },
                addBack: function(a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }
            });
            h.each({
                parent: function(a) {
                    return (a = a.parentNode) && 11 !== a.nodeType ? a : null
                },
                parents: function(a) {
                    return ab(a, "parentNode")
                },
                parentsUntil: function(a, b, c) {
                    return ab(a, "parentNode", c)
                },
                next: function(a) {
                    return m(a, "nextSibling")
                },
                prev: function(a) {
                    return m(a, "previousSibling")
                },
                nextAll: function(a) {
                    return ab(a, "nextSibling")
                },
                prevAll: function(a) {
                    return ab(a, "previousSibling")
                },
                nextUntil: function(a, b, c) {
                    return ab(a,
                        "nextSibling", c)
                },
                prevUntil: function(a, b, c) {
                    return ab(a, "previousSibling", c)
                },
                siblings: function(a) {
                    return za((a.parentNode || {}).firstChild, a)
                },
                children: function(a) {
                    return za(a.firstChild)
                },
                contents: function(a) {
                    return l(a, "iframe") ? a.contentDocument : (l(a, "template") && (a = a.content || a), h.merge([], a.childNodes))
                }
            }, function(a, b) {
                h.fn[a] = function(c, k) {
                    var d = h.map(this, b, c);
                    return "Until" !== a.slice(-5) && (k = c), k && "string" == typeof k && (d = h.filter(k, d)), 1 < this.length && (Va[a] || h.uniqueSort(d), Ra.test(a) && d.reverse()),
                        this.pushStack(d)
                }
            });
            var oa = /[^\x20\t\r\n\f]+/g;
            h.Callbacks = function(a) {
                a = "string" == typeof a ? d(a) : h.extend({}, a);
                var b, c, k, e, f = [],
                    g = [],
                    l = -1,
                    n = function() {
                        e = e || a.once;
                        for (k = b = !0; g.length; l = -1)
                            for (c = g.shift(); ++l < f.length;) !1 === f[l].apply(c[0], c[1]) && a.stopOnFalse && (l = f.length, c = !1);
                        a.memory || (c = !1);
                        b = !1;
                        e && (f = c ? [] : "")
                    },
                    m = {
                        add: function() {
                            return f && (c && !b && (l = f.length - 1, g.push(c)), function Wc(b) {
                                    h.each(b, function(b, c) {
                                        h.isFunction(c) ? a.unique && m.has(c) || f.push(c) : c && c.length && "string" !== h.type(c) && Wc(c)
                                    })
                                }(arguments),
                                c && !b && n()), this
                        },
                        remove: function() {
                            return h.each(arguments, function(a, b) {
                                for (var c; - 1 < (c = h.inArray(b, f, c));) f.splice(c, 1), c <= l && l--
                            }), this
                        },
                        has: function(a) {
                            return a ? -1 < h.inArray(a, f) : 0 < f.length
                        },
                        empty: function() {
                            return f && (f = []), this
                        },
                        disable: function() {
                            return e = g = [], f = c = "", this
                        },
                        disabled: function() {
                            return !f
                        },
                        lock: function() {
                            return e = g = [], c || b || (f = c = ""), this
                        },
                        locked: function() {
                            return !!e
                        },
                        fireWith: function(a, c) {
                            return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || n()), this
                        },
                        fire: function() {
                            return m.fireWith(this,
                                arguments), this
                        },
                        fired: function() {
                            return !!k
                        }
                    };
                return m
            };
            h.extend({
                Deferred: function(b) {
                    var k = [
                            ["notify", "progress", h.Callbacks("memory"), h.Callbacks("memory"), 2],
                            ["resolve", "done", h.Callbacks("once memory"), h.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", h.Callbacks("once memory"), h.Callbacks("once memory"), 1, "rejected"]
                        ],
                        d = "pending",
                        e = {
                            state: function() {
                                return d
                            },
                            always: function() {
                                return f.done(arguments).fail(arguments), this
                            },
                            "catch": function(a) {
                                return e.then(null, a)
                            },
                            pipe: function() {
                                var a =
                                    arguments;
                                return h.Deferred(function(b) {
                                    h.each(k, function(c, k) {
                                        var d = h.isFunction(a[k[4]]) && a[k[4]];
                                        f[k[1]](function() {
                                            var a = d && d.apply(this, arguments);
                                            a && h.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[k[0] + "With"](this, d ? [a] : arguments)
                                        })
                                    });
                                    a = null
                                }).promise()
                            },
                            then: function(b, d, r) {
                                function e(b, k, d, r) {
                                    return function() {
                                        var z = this,
                                            g = arguments,
                                            l = function() {
                                                var a;
                                                if (!(b < f)) {
                                                    if (a = d.apply(z, g), a === k.promise()) throw new TypeError("Thenable self-resolution");
                                                    var l =
                                                        a && ("object" == typeof a || "function" == typeof a) && a.then;
                                                    h.isFunction(l) ? r ? l.call(a, e(f, k, c, r), e(f, k, n, r)) : (f++, l.call(a, e(f, k, c, r), e(f, k, n, r), e(f, k, c, k.notifyWith))) : (d !== c && (z = void 0, g = [a]), (r || k.resolveWith)(z, g))
                                                }
                                            },
                                            m = r ? l : function() {
                                                try {
                                                    l()
                                                } catch (hc) {
                                                    h.Deferred.exceptionHook && h.Deferred.exceptionHook(hc, m.stackTrace), b + 1 >= f && (d !== n && (z = void 0, g = [hc]), k.rejectWith(z, g))
                                                }
                                            };
                                        b ? m() : (h.Deferred.getStackHook && (m.stackTrace = h.Deferred.getStackHook()), a.setTimeout(m))
                                    }
                                }
                                var f = 0;
                                return h.Deferred(function(a) {
                                    k[0][3].add(e(0,
                                        a, h.isFunction(r) ? r : c, a.notifyWith));
                                    k[1][3].add(e(0, a, h.isFunction(b) ? b : c));
                                    k[2][3].add(e(0, a, h.isFunction(d) ? d : n))
                                }).promise()
                            },
                            promise: function(a) {
                                return null != a ? h.extend(a, e) : e
                            }
                        },
                        f = {};
                    return h.each(k, function(a, b) {
                        var c = b[2],
                            r = b[5];
                        e[b[1]] = c.add;
                        r && c.add(function() {
                            d = r
                        }, k[3 - a][2].disable, k[0][2].lock);
                        c.add(b[3].fire);
                        f[b[0]] = function() {
                            return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                        };
                        f[b[0] + "With"] = c.fireWith
                    }), e.promise(f), b && b.call(f, f), f
                },
                when: function(a) {
                    var b = arguments.length,
                        c = b,
                        k = Array(c),
                        d = wa.call(arguments),
                        e = h.Deferred(),
                        f = function(a) {
                            return function(c) {
                                k[a] = this;
                                d[a] = 1 < arguments.length ? wa.call(arguments) : c;
                                --b || e.resolveWith(k, d)
                            }
                        };
                    if (1 >= b && (t(a, e.done(f(c)).resolve, e.reject, !b), "pending" === e.state() || h.isFunction(d[c] && d[c].then))) return e.then();
                    for (; c--;) t(d[c], f(c), e.reject);
                    return e.promise()
                }
            });
            var Wa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            h.Deferred.exceptionHook = function(b, c) {
                a.console && a.console.warn && b && Wa.test(b.name) && a.console.warn("jQuery.Deferred exception: " +
                    b.message, b.stack, c)
            };
            h.readyException = function(b) {
                a.setTimeout(function() {
                    throw b;
                })
            };
            var Ga = h.Deferred();
            h.fn.ready = function(a) {
                return Ga.then(a)["catch"](function(a) {
                    h.readyException(a)
                }), this
            };
            h.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(a) {
                    (!0 === a ? --h.readyWait : h.isReady) || (h.isReady = !0, !0 !== a && 0 < --h.readyWait || Ga.resolveWith(W, [h]))
                }
            });
            h.ready.then = Ga.then;
            "complete" === W.readyState || "loading" !== W.readyState && !W.documentElement.doScroll ? a.setTimeout(h.ready) : (W.addEventListener("DOMContentLoaded",
                p), a.addEventListener("load", p));
            var qa = function(a, b, c, d, e, f, g) {
                    var k = 0,
                        r = a.length,
                        z = null == c;
                    if ("object" === h.type(c))
                        for (k in e = !0, c) qa(a, b, k, c[k], !0, f, g);
                    else if (void 0 !== d && (e = !0, h.isFunction(d) || (g = !0), z && (g ? (b.call(a, d), b = null) : (z = b, b = function(a, b, c) {
                            return z.call(h(a), c)
                        })), b))
                        for (; k < r; k++) b(a[k], c, g ? d : d.call(a[k], k, b(a[k], c)));
                    return e ? a : z ? b.call(a) : r ? b(a[0], c) : f
                },
                Nb = function(a) {
                    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
                };
            q.uid = 1;
            q.prototype = {
                cache: function(a) {
                    var b = a[this.expando];
                    return b || (b = {}, Nb(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                        value: b,
                        configurable: !0
                    }))), b
                },
                set: function(a, b, c) {
                    var k;
                    a = this.cache(a);
                    if ("string" == typeof b) a[h.camelCase(b)] = c;
                    else
                        for (k in b) a[h.camelCase(k)] = b[k];
                    return a
                },
                get: function(a, b) {
                    return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][h.camelCase(b)]
                },
                access: function(a, b, c) {
                    return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
                },
                remove: function(a, b) {
                    var c,
                        k = a[this.expando];
                    if (void 0 !== k) {
                        if (void 0 !== b)
                            for (Array.isArray(b) ? b = b.map(h.camelCase) : (b = h.camelCase(b), b = b in k ? [b] : b.match(oa) || []), c = b.length; c--;) delete k[b[c]];
                        (void 0 === b || h.isEmptyObject(k)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                    }
                },
                hasData: function(a) {
                    a = a[this.expando];
                    return void 0 !== a && !h.isEmptyObject(a)
                }
            };
            var Q = new q,
                ma = new q,
                bb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                cb = /[A-Z]/g;
            h.extend({
                hasData: function(a) {
                    return ma.hasData(a) || Q.hasData(a)
                },
                data: function(a, b, c) {
                    return ma.access(a,
                        b, c)
                },
                removeData: function(a, b) {
                    ma.remove(a, b)
                },
                _data: function(a, b, c) {
                    return Q.access(a, b, c)
                },
                _removeData: function(a, b) {
                    Q.remove(a, b)
                }
            });
            h.fn.extend({
                data: function(a, b) {
                    var c, k, d, r = this[0],
                        e = r && r.attributes;
                    if (void 0 === a) {
                        if (this.length && (d = ma.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                            for (c = e.length; c--;) e[c] && (k = e[c].name, 0 === k.indexOf("data-") && (k = h.camelCase(k.slice(5)), v(r, k, d[k])));
                            Q.set(r, "hasDataAttrs", !0)
                        }
                        return d
                    }
                    return "object" == typeof a ? this.each(function() {
                        ma.set(this, a)
                    }) : qa(this,
                        function(b) {
                            var c;
                            if (r && void 0 === b) {
                                if ((c = ma.get(r, a), void 0 !== c) || (c = v(r, a), void 0 !== c)) return c
                            } else this.each(function() {
                                ma.set(this, a, b)
                            })
                        }, null, b, 1 < arguments.length, null, !0)
                },
                removeData: function(a) {
                    return this.each(function() {
                        ma.remove(this, a)
                    })
                }
            });
            h.extend({
                queue: function(a, b, c) {
                    var k;
                    if (a) return b = (b || "fx") + "queue", k = Q.get(a, b), c && (!k || Array.isArray(c) ? k = Q.access(a, b, h.makeArray(c)) : k.push(c)), k || []
                },
                dequeue: function(a, b) {
                    b = b || "fx";
                    var c = h.queue(a, b),
                        k = c.length,
                        d = c.shift(),
                        r = h._queueHooks(a,
                            b),
                        e = function() {
                            h.dequeue(a, b)
                        };
                    "inprogress" === d && (d = c.shift(), k--);
                    d && ("fx" === b && c.unshift("inprogress"), delete r.stop, d.call(a, e, r));
                    !k && r && r.empty.fire()
                },
                _queueHooks: function(a, b) {
                    var c = b + "queueHooks";
                    return Q.get(a, c) || Q.access(a, c, {
                        empty: h.Callbacks("once memory").add(function() {
                            Q.remove(a, [b + "queue", c])
                        })
                    })
                }
            });
            h.fn.extend({
                queue: function(a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? h.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                        var c = h.queue(this, a, b);
                        h._queueHooks(this, a);
                        "fx" === a && "inprogress" !== c[0] && h.dequeue(this, a)
                    })
                },
                dequeue: function(a) {
                    return this.each(function() {
                        h.dequeue(this, a)
                    })
                },
                clearQueue: function(a) {
                    return this.queue(a || "fx", [])
                },
                promise: function(a, b) {
                    var c, k = 1,
                        d = h.Deferred(),
                        r = this,
                        e = this.length,
                        f = function() {
                            --k || d.resolveWith(r, [r])
                        };
                    "string" != typeof a && (b = a, a = void 0);
                    for (a = a || "fx"; e--;)(c = Q.get(r[e], a + "queueHooks")) && c.empty && (k++, c.empty.add(f));
                    return f(), d.promise(b)
                }
            });
            var La = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                pb =
                new RegExp("^(?:([+-])\x3d|)(" + La + ")([a-z%]*)$", "i"),
                Ia = ["Top", "Right", "Bottom", "Left"],
                Ib = function(a, b) {
                    return a = b || a, "none" === a.style.display || "" === a.style.display && h.contains(a.ownerDocument, a) && "none" === h.css(a, "display")
                },
                Oa = function(a, b, c, d) {
                    var k, h = {};
                    for (k in b) h[k] = a.style[k], a.style[k] = b[k];
                    c = c.apply(a, d || []);
                    for (k in b) a.style[k] = h[k];
                    return c
                },
                Qa = {};
            h.fn.extend({
                show: function() {
                    return u(this, !0)
                },
                hide: function() {
                    return u(this)
                },
                toggle: function(a) {
                    return "boolean" == typeof a ? a ? this.show() :
                        this.hide() : this.each(function() {
                            Ib(this) ? h(this).show() : h(this).hide()
                        })
                }
            });
            var Sa = /^(?:checkbox|radio)$/i,
                Ta = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                Ua = /^$|\/(?:java|ecma)script/i,
                pa = {
                    option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
                    thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
                    col: [2, "\x3ctable\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
                    tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
                    td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
                    _default: [0, "", ""]
                };
            pa.optgroup = pa.option;
            pa.tbody = pa.tfoot = pa.colgroup = pa.caption = pa.thead;
            pa.th = pa.td;
            var ib = /<|&#?\w+;/;
            ! function() {
                var a = W.createDocumentFragment().appendChild(W.createElement("div")),
                    b = W.createElement("input");
                b.setAttribute("type", "radio");
                b.setAttribute("checked", "checked");
                b.setAttribute("name", "t");
                a.appendChild(b);
                Z.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
                a.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e";
                Z.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
            }();
            var Ob = W.documentElement,
                jb = /^key/,
                kb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ya = /^([^.]*)(?:\.(.+)|)/;
            h.event = {
                global: {},
                add: function(a, b, c, d, e) {
                    var k, r, f, g, z, l, n, m;
                    if (g = Q.get(a))
                        for (c.handler && (k = c, c = k.handler, e = k.selector), e && h.find.matchesSelector(Ob, e), c.guid || (c.guid = h.guid++), (f = g.events) || (f = g.events = {}), (r = g.handle) || (r = g.handle = function(b) {
                                return "undefined" != typeof h && h.event.triggered !== b.type ? h.event.dispatch.apply(a, arguments) : void 0
                            }), b = (b || "").match(oa) || [""], g = b.length; g--;) {
                            var p =
                                Ya.exec(b[g]) || [];
                            var H = m = p[1];
                            p = (p[2] || "").split(".").sort();
                            H && (l = h.event.special[H] || {}, H = (e ? l.delegateType : l.bindType) || H, l = h.event.special[H] || {}, z = h.extend({
                                type: H,
                                origType: m,
                                data: d,
                                handler: c,
                                guid: c.guid,
                                selector: e,
                                needsContext: e && h.expr.match.needsContext.test(e),
                                namespace: p.join(".")
                            }, k), (n = f[H]) || (n = f[H] = [], n.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, p, r) || a.addEventListener && a.addEventListener(H, r)), l.add && (l.add.call(a, z), z.handler.guid || (z.handler.guid = c.guid)), e ? n.splice(n.delegateCount++,
                                0, z) : n.push(z), h.event.global[H] = !0)
                        }
                },
                remove: function(a, b, c, d, e) {
                    var k, r, f, g, z, l, n, m, p = Q.hasData(a) && Q.get(a);
                    if (p && (g = p.events)) {
                        b = (b || "").match(oa) || [""];
                        for (z = b.length; z--;)
                            if (f = Ya.exec(b[z]) || [], l = m = f[1], n = (f[2] || "").split(".").sort(), l) {
                                var H = h.event.special[l] || {};
                                l = (d ? H.delegateType : H.bindType) || l;
                                var t = g[l] || [];
                                f = f[2] && new RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)");
                                for (r = k = t.length; k--;) {
                                    var ca = t[k];
                                    !e && m !== ca.origType || c && c.guid !== ca.guid || f && !f.test(ca.namespace) || d && d !== ca.selector &&
                                        ("**" !== d || !ca.selector) || (t.splice(k, 1), ca.selector && t.delegateCount--, H.remove && H.remove.call(a, ca))
                                }
                                r && !t.length && (H.teardown && !1 !== H.teardown.call(a, n, p.handle) || h.removeEvent(a, l, p.handle), delete g[l])
                            } else
                                for (l in g) h.event.remove(a, l + b[z], c, d, !0);
                        h.isEmptyObject(g) && Q.remove(a, "handle events")
                    }
                },
                dispatch: function(a) {
                    var b = h.event.fix(a),
                        c, k, d, e, f = Array(arguments.length);
                    var g = (Q.get(this, "events") || {})[b.type] || [];
                    var l = h.event.special[b.type] || {};
                    f[0] = b;
                    for (c = 1; c < arguments.length; c++) f[c] =
                        arguments[c];
                    if (b.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, b)) {
                        var n = h.event.handlers.call(this, b, g);
                        for (c = 0;
                            (d = n[c++]) && !b.isPropagationStopped();)
                            for (b.currentTarget = d.elem, g = 0;
                                (e = d.handlers[g++]) && !b.isImmediatePropagationStopped();) b.rnamespace && !b.rnamespace.test(e.namespace) || (b.handleObj = e, b.data = e.data, k = ((h.event.special[e.origType] || {}).handle || e.handler).apply(d.elem, f), void 0 !== k && !1 === (b.result = k) && (b.preventDefault(), b.stopPropagation()));
                        return l.postDispatch &&
                            l.postDispatch.call(this, b), b.result
                    }
                },
                handlers: function(a, b) {
                    var c, k = [],
                        d = b.delegateCount,
                        e = a.target;
                    if (d && e.nodeType && !("click" === a.type && 1 <= a.button))
                        for (; e !== this; e = e.parentNode || this)
                            if (1 === e.nodeType && ("click" !== a.type || !0 !== e.disabled)) {
                                var r = [];
                                var f = {};
                                for (c = 0; c < d; c++) {
                                    var g = b[c];
                                    var l = g.selector + " ";
                                    void 0 === f[l] && (f[l] = g.needsContext ? -1 < h(l, this).index(e) : h.find(l, this, null, [e]).length);
                                    f[l] && r.push(g)
                                }
                                r.length && k.push({
                                    elem: e,
                                    handlers: r
                                })
                            }
                    return e = this, d < b.length && k.push({
                            elem: e,
                            handlers: b.slice(d)
                        }),
                        k
                },
                addProp: function(a, b) {
                    Object.defineProperty(h.Event.prototype, a, {
                        enumerable: !0,
                        configurable: !0,
                        get: h.isFunction(b) ? function() {
                            if (this.originalEvent) return b(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[a]
                        },
                        set: function(b) {
                            Object.defineProperty(this, a, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: b
                            })
                        }
                    })
                },
                fix: function(a) {
                    return a[h.expando] ? a : new h.Event(a)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== G() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === G() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
                        },
                        _default: function(a) {
                            return l(a.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                        }
                    }
                }
            };
            h.removeEvent = function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c)
            };
            h.Event = function(a, b) {
                return this instanceof
                h.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? L : F, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && h.extend(this, b), this.timeStamp = a && a.timeStamp || h.now(), void(this[h.expando] = !0)) : new h.Event(a, b)
            };
            h.Event.prototype = {
                constructor: h.Event,
                isDefaultPrevented: F,
                isPropagationStopped: F,
                isImmediatePropagationStopped: F,
                isSimulated: !1,
                preventDefault: function() {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = L;
                    a && !this.isSimulated && a.preventDefault()
                },
                stopPropagation: function() {
                    var a = this.originalEvent;
                    this.isPropagationStopped = L;
                    a && !this.isSimulated && a.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = L;
                    a && !this.isSimulated && a.stopImmediatePropagation();
                    this.stopPropagation()
                }
            };
            h.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                "char": !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(a) {
                    var b = a.button;
                    return null == a.which && jb.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && kb.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
                }
            }, h.event.addProp);
            h.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(a, b) {
                h.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        var c, d = a.relatedTarget,
                            k = a.handleObj;
                        return d && (d === this || h.contains(this, d)) || (a.type = k.origType, c = k.handler.apply(this, arguments), a.type = b), c
                    }
                }
            });
            h.fn.extend({
                on: function(a, b, c, d) {
                    return I(this, a, b, c, d)
                },
                one: function(a, b, c, d) {
                    return I(this, a, b, c, d, 1)
                },
                off: function(a, b, c) {
                    var d, k;
                    if (a && a.preventDefault && a.handleObj) return d = a.handleObj, h(a.delegateTarget).off(d.namespace ?
                        d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                    if ("object" == typeof a) {
                        for (k in a) this.off(k, b, a[k]);
                        return this
                    }
                    return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = F), this.each(function() {
                        h.event.remove(this, a, c, b)
                    })
                }
            });
            var nb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                vb = /<script|<style|<link/i,
                wb = /checked\s*(?:[^=]|=\s*.checked.)/i,
                xb = /^true\/(.*)/,
                yb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            h.extend({
                htmlPrefilter: function(a) {
                    return a.replace(nb,
                        "\x3c$1\x3e\x3c/$2\x3e")
                },
                clone: function(a, b, c) {
                    var d, k = a.cloneNode(!0),
                        e = h.contains(a.ownerDocument, a);
                    if (!(Z.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || h.isXMLDoc(a))) {
                        var f = y(k);
                        var r = y(a);
                        var g = 0;
                        for (d = r.length; g < d; g++) {
                            var l = r[g],
                                n = f[g],
                                z = n.nodeName.toLowerCase();
                            "input" === z && Sa.test(l.type) ? n.checked = l.checked : "input" !== z && "textarea" !== z || (n.defaultValue = l.defaultValue)
                        }
                    }
                    if (b)
                        if (c)
                            for (r = r || y(a), f = f || y(k), g = 0, d = r.length; g < d; g++) S(r[g], f[g]);
                        else S(a, k);
                    return f = y(k, "script"), 0 < f.length &&
                        C(f, !e && y(a, "script")), k
                },
                cleanData: function(a) {
                    for (var b, c, d, k = h.event.special, e = 0; void 0 !== (c = a[e]); e++)
                        if (Nb(c)) {
                            if (b = c[Q.expando]) {
                                if (b.events)
                                    for (d in b.events) k[d] ? h.event.remove(c, d) : h.removeEvent(c, d, b.handle);
                                c[Q.expando] = void 0
                            }
                            c[ma.expando] && (c[ma.expando] = void 0)
                        }
                }
            });
            h.fn.extend({
                detach: function(a) {
                    return N(this, a, !0)
                },
                remove: function(a) {
                    return N(this, a)
                },
                text: function(a) {
                    return qa(this, function(a) {
                        return void 0 === a ? h.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType &&
                                9 !== this.nodeType || (this.textContent = a)
                        })
                    }, null, a, arguments.length)
                },
                append: function() {
                    return J(this, arguments, function(a) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || M(this, a).appendChild(a)
                    })
                },
                prepend: function() {
                    return J(this, arguments, function(a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = M(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                },
                before: function() {
                    return J(this, arguments, function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                },
                after: function() {
                    return J(this,
                        arguments,
                        function(a) {
                            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                        })
                },
                empty: function() {
                    for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (h.cleanData(y(a, !1)), a.textContent = "");
                    return this
                },
                clone: function(a, b) {
                    return a = null != a && a, b = null == b ? a : b, this.map(function() {
                        return h.clone(this, a, b)
                    })
                },
                html: function(a) {
                    return qa(this, function(a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                        if ("string" == typeof a && !vb.test(a) && !pa[(Ta.exec(a) || ["",
                                ""
                            ])[1].toLowerCase()]) {
                            a = h.htmlPrefilter(a);
                            try {
                                for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (h.cleanData(y(b, !1)), b.innerHTML = a);
                                b = 0
                            } catch (ha) {}
                        }
                        b && this.empty().append(a)
                    }, null, a, arguments.length)
                },
                replaceWith: function() {
                    var a = [];
                    return J(this, arguments, function(b) {
                        var c = this.parentNode;
                        0 > h.inArray(this, a) && (h.cleanData(y(this)), c && c.replaceChild(b, this))
                    }, a)
                }
            });
            h.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(a, b) {
                h.fn[a] =
                    function(a) {
                        for (var c = [], d = h(a), k = d.length - 1, e = 0; e <= k; e++) a = e === k ? this : this.clone(!0), h(d[e])[b](a), rb.apply(c, a.get());
                        return this.pushStack(c)
                    }
            });
            var db = /^margin/,
                bc = new RegExp("^(" + La + ")(?!px)[a-z%]+$", "i"),
                Jb = function(b) {
                    var c = b.ownerDocument.defaultView;
                    return c && c.opener || (c = a), c.getComputedStyle(b)
                };
            ! function() {
                function b() {
                    if (l) {
                        l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                        l.innerHTML = "";
                        Ob.appendChild(g);
                        var b =
                            a.getComputedStyle(l);
                        c = "1%" !== b.top;
                        f = "2px" === b.marginLeft;
                        d = "4px" === b.width;
                        l.style.marginRight = "50%";
                        e = "4px" === b.marginRight;
                        Ob.removeChild(g);
                        l = null
                    }
                }
                var c, d, e, f, g = W.createElement("div"),
                    l = W.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === l.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(l), h.extend(Z, {
                    pixelPosition: function() {
                        return b(),
                            c
                    },
                    boxSizingReliable: function() {
                        return b(), d
                    },
                    pixelMarginRight: function() {
                        return b(), e
                    },
                    reliableMarginLeft: function() {
                        return b(), f
                    }
                }))
            }();
            var zb = /^(none|table(?!-c[ea]).+)/,
                eb = /^--/,
                Ab = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                fb = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                gb = ["Webkit", "Moz", "ms"],
                hb = W.createElement("div").style;
            h.extend({
                cssHooks: {
                    opacity: {
                        get: function(a, b) {
                            if (b) {
                                var c = D(a, "opacity");
                                return "" === c ? "1" : c
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function(a, b, c, d) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var k, e, f, r = h.camelCase(b),
                            g = eb.test(b),
                            l = a.style;
                        return g || (b = X(r)), f = h.cssHooks[b] || h.cssHooks[r], void 0 === c ? f && "get" in f && void 0 !== (k = f.get(a, !1, d)) ? k : l[b] : (e = typeof c, "string" === e && (k = pb.exec(c)) && k[1] && (c = x(a, b, k), e = "number"), null != c && c === c && ("number" === e && (c += k && k[3] || (h.cssNumber[r] ?
                            "" : "px")), Z.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (l[b] = "inherit"), f && "set" in f && void 0 === (c = f.set(a, c, d)) || (g ? l.setProperty(b, c) : l[b] = c)), void 0)
                    }
                },
                css: function(a, b, c, d) {
                    var k, e, f, r = h.camelCase(b);
                    return eb.test(b) || (b = X(r)), f = h.cssHooks[b] || h.cssHooks[r], f && "get" in f && (k = f.get(a, !0, c)), void 0 === k && (k = D(a, b, d)), "normal" === k && b in fb && (k = fb[b]), "" === c || c ? (e = parseFloat(k), !0 === c || isFinite(e) ? e || 0 : k) : k
                }
            });
            h.each(["height", "width"], function(a, b) {
                h.cssHooks[b] = {
                    get: function(a, c, d) {
                        if (c) return !zb.test(h.css(a,
                            "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? la(a, b, d) : Oa(a, Ab, function() {
                            return la(a, b, d)
                        })
                    },
                    set: function(a, c, d) {
                        var k, e = d && Jb(a);
                        d = d && ta(a, b, d, "border-box" === h.css(a, "boxSizing", !1, e), e);
                        return d && (k = pb.exec(c)) && "px" !== (k[3] || "px") && (a.style[b] = c, c = h.css(a, b)), R(a, c, d)
                    }
                }
            });
            h.cssHooks.marginLeft = U(Z.reliableMarginLeft, function(a, b) {
                if (b) return (parseFloat(D(a, "marginLeft")) || a.getBoundingClientRect().left - Oa(a, {
                        marginLeft: 0
                    }, function() {
                        return a.getBoundingClientRect().left
                    })) +
                    "px"
            });
            h.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(a, b) {
                h.cssHooks[a + b] = {
                    expand: function(c) {
                        var d = 0,
                            k = {};
                        for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) k[a + Ia[d] + b] = c[d] || c[d - 2] || c[0];
                        return k
                    }
                };
                db.test(a) || (h.cssHooks[a + b].set = R)
            });
            h.fn.extend({
                css: function(a, b) {
                    return qa(this, function(a, b, c) {
                        var d, k = {},
                            e = 0;
                        if (Array.isArray(b)) {
                            c = Jb(a);
                            for (d = b.length; e < d; e++) k[b[e]] = h.css(a, b[e], !1, c);
                            return k
                        }
                        return void 0 !== c ? h.style(a, b, c) : h.css(a, b)
                    }, a, b, 1 < arguments.length)
                }
            });
            h.Tween = ba;
            ba.prototype = {
                constructor: ba,
                init: function(a, b, c, d, e, f) {
                    this.elem = a;
                    this.prop = c;
                    this.easing = e || h.easing._default;
                    this.options = b;
                    this.start = this.now = this.cur();
                    this.end = d;
                    this.unit = f || (h.cssNumber[c] ? "" : "px")
                },
                cur: function() {
                    var a = ba.propHooks[this.prop];
                    return a && a.get ? a.get(this) : ba.propHooks._default.get(this)
                },
                run: function(a) {
                    var b, c = ba.propHooks[this.prop];
                    return this.options.duration ? this.pos = b = h.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) *
                        b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : ba.propHooks._default.set(this), this
                }
            };
            ba.prototype.init.prototype = ba.prototype;
            ba.propHooks = {
                _default: {
                    get: function(a) {
                        var b;
                        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = h.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                    },
                    set: function(a) {
                        h.fx.step[a.prop] ? h.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[h.cssProps[a.prop]] && !h.cssHooks[a.prop] ?
                            a.elem[a.prop] = a.now : h.style(a.elem, a.prop, a.now + a.unit)
                    }
                }
            };
            ba.propHooks.scrollTop = ba.propHooks.scrollLeft = {
                set: function(a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            };
            h.easing = {
                linear: function(a) {
                    return a
                },
                swing: function(a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                },
                _default: "swing"
            };
            h.fx = ba.prototype.init;
            h.fx.step = {};
            var Za, Kb, Bb = /^(?:toggle|show|hide)$/,
                Cb = /queueHooks$/;
            h.Animation = h.extend(V, {
                tweeners: {
                    "*": [function(a, b) {
                        var c = this.createTween(a, b);
                        return x(c.elem, a, pb.exec(b), c), c
                    }]
                },
                tweener: function(a, b) {
                    h.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(oa);
                    for (var c, d = 0, k = a.length; d < k; d++) c = a[d], V.tweeners[c] = V.tweeners[c] || [], V.tweeners[c].unshift(b)
                },
                prefilters: [function(a, b, c) {
                    var d, k, e, f, g, r, l, n, m = "width" in b || "height" in b,
                        p = this,
                        z = {},
                        t = a.style,
                        q = a.nodeType && Ib(a),
                        v = Q.get(a, "fxshow");
                    c.queue || (f = h._queueHooks(a, "fx"), null == f.unqueued && (f.unqueued = 0, g = f.empty.fire, f.empty.fire = function() {
                        f.unqueued || g()
                    }), f.unqueued++, p.always(function() {
                        p.always(function() {
                            f.unqueued--;
                            h.queue(a,
                                "fx").length || f.empty.fire()
                        })
                    }));
                    for (d in b)
                        if (k = b[d], Bb.test(k)) {
                            if (delete b[d], e = e || "toggle" === k, k === (q ? "hide" : "show")) {
                                if ("show" !== k || !v || void 0 === v[d]) continue;
                                q = !0
                            }
                            z[d] = v && v[d] || h.style(a, d)
                        }
                    if (r = !h.isEmptyObject(b), r || !h.isEmptyObject(z))
                        for (d in m && 1 === a.nodeType && (c.overflow = [t.overflow, t.overflowX, t.overflowY], l = v && v.display, null == l && (l = Q.get(a, "display")), n = h.css(a, "display"), "none" === n && (l ? n = l : (u([a], !0), l = a.style.display || l, n = h.css(a, "display"), u([a]))), ("inline" === n || "inline-block" ===
                                n && null != l) && "none" === h.css(a, "float") && (r || (p.done(function() {
                                t.display = l
                            }), null == l && (n = t.display, l = "none" === n ? "" : n)), t.display = "inline-block")), c.overflow && (t.overflow = "hidden", p.always(function() {
                                t.overflow = c.overflow[0];
                                t.overflowX = c.overflow[1];
                                t.overflowY = c.overflow[2]
                            })), r = !1, z) r || (v ? "hidden" in v && (q = v.hidden) : v = Q.access(a, "fxshow", {
                            display: l
                        }), e && (v.hidden = !q), q && u([a], !0), p.done(function() {
                            q || u([a]);
                            Q.remove(a, "fxshow");
                            for (d in z) h.style(a, d, z[d])
                        })), r = sa(q ? v[d] : 0, d, p), d in v || (v[d] = r.start,
                            q && (r.end = r.start, r.start = 0))
                }],
                prefilter: function(a, b) {
                    b ? V.prefilters.unshift(a) : V.prefilters.push(a)
                }
            });
            h.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? h.extend({}, a) : {
                    complete: c || !c && b || h.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !h.isFunction(b) && b
                };
                return h.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in h.fx.speeds ? d.duration = h.fx.speeds[d.duration] : d.duration = h.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    h.isFunction(d.old) &&
                        d.old.call(this);
                    d.queue && h.dequeue(this, d.queue)
                }, d
            };
            h.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(Ib).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var k = h.isEmptyObject(a),
                        e = h.speed(b, c, d);
                    b = function() {
                        var b = V(this, h.extend({}, a), e);
                        (k || Q.get(this, "finish")) && b.stop(!0)
                    };
                    return b.finish = b, k || !1 === e.queue ? this.each(b) : this.queue(e.queue, b)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop;
                        b(c)
                    };
                    return "string" != typeof a && (c = b, b = a,
                        a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            k = null != a && a + "queueHooks",
                            e = h.timers,
                            f = Q.get(this);
                        if (k) f[k] && f[k].stop && d(f[k]);
                        else
                            for (k in f) f[k] && f[k].stop && Cb.test(k) && d(f[k]);
                        for (k = e.length; k--;) e[k].elem !== this || null != a && e[k].queue !== a || (e[k].anim.stop(c), b = !1, e.splice(k, 1));
                        !b && c || h.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return !1 !== a && (a = a || "fx"), this.each(function() {
                        var b = Q.get(this),
                            c = b[a + "queue"];
                        var d = b[a + "queueHooks"];
                        var k = h.timers,
                            e = c ? c.length : 0;
                        b.finish = !0;
                        h.queue(this, a, []);
                        d && d.stop && d.stop.call(this, !0);
                        for (d = k.length; d--;) k[d].elem === this && k[d].queue === a && (k[d].anim.stop(!0), k.splice(d, 1));
                        for (d = 0; d < e; d++) c[d] && c[d].finish && c[d].finish.call(this);
                        delete b.finish
                    })
                }
            });
            h.each(["toggle", "show", "hide"], function(a, b) {
                var c = h.fn[b];
                h.fn[b] = function(a, d, k) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(T(b, !0), a, d, k)
                }
            });
            h.each({
                slideDown: T("show"),
                slideUp: T("hide"),
                slideToggle: T("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                h.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            });
            h.timers = [];
            h.fx.tick = function() {
                var a = 0,
                    b = h.timers;
                for (Za = h.now(); a < b.length; a++) {
                    var c = b[a];
                    c() || b[a] !== c || b.splice(a--, 1)
                }
                b.length || h.fx.stop();
                Za = void 0
            };
            h.fx.timer = function(a) {
                h.timers.push(a);
                h.fx.start()
            };
            h.fx.interval = 13;
            h.fx.start = function() {
                Kb || (Kb = !0, O())
            };
            h.fx.stop = function() {
                Kb = null
            };
            h.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            };
            h.fn.delay = function(b, c) {
                return b = h.fx ? h.fx.speeds[b] || b :
                    b, c = c || "fx", this.queue(c, function(c, d) {
                        var k = a.setTimeout(c, b);
                        d.stop = function() {
                            a.clearTimeout(k)
                        }
                    })
            };
            (function() {
                var a = W.createElement("input"),
                    b = W.createElement("select").appendChild(W.createElement("option"));
                a.type = "checkbox";
                Z.checkOn = "" !== a.value;
                Z.optSelected = b.selected;
                a = W.createElement("input");
                a.value = "t";
                a.type = "radio";
                Z.radioValue = "t" === a.value
            })();
            var sb = h.expr.attrHandle;
            h.fn.extend({
                attr: function(a, b) {
                    return qa(this, h.attr, a, b, 1 < arguments.length)
                },
                removeAttr: function(a) {
                    return this.each(function() {
                        h.removeAttr(this,
                            a)
                    })
                }
            });
            h.extend({
                attr: function(a, b, c) {
                    var d, k, e = a.nodeType;
                    if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof a.getAttribute ? h.prop(a, b, c) : (1 === e && h.isXMLDoc(a) || (k = h.attrHooks[b.toLowerCase()] || (h.expr.match.bool.test(b) ? Db : void 0)), void 0 !== c ? null === c ? void h.removeAttr(a, b) : k && "set" in k && void 0 !== (d = k.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : k && "get" in k && null !== (d = k.get(a, b)) ? d : (d = h.find.attr(a, b), null == d ? void 0 : d))
                },
                attrHooks: {
                    type: {
                        set: function(a, b) {
                            if (!Z.radioValue && "radio" === b && l(a, "input")) {
                                var c =
                                    a.value;
                                return a.setAttribute("type", b), c && (a.value = c), b
                            }
                        }
                    }
                },
                removeAttr: function(a, b) {
                    var c, d = 0,
                        k = b && b.match(oa);
                    if (k && 1 === a.nodeType)
                        for (; c = k[d++];) a.removeAttribute(c)
                }
            });
            var Db = {
                set: function(a, b, c) {
                    return !1 === b ? h.removeAttr(a, c) : a.setAttribute(c, c), c
                }
            };
            h.each(h.expr.match.bool.source.match(/\w+/g), function(a, b) {
                var c = sb[b] || h.find.attr;
                sb[b] = function(a, b, d) {
                    var k, e, f = b.toLowerCase();
                    return d || (e = sb[f], sb[f] = k, k = null != c(a, b, d) ? f : null, sb[f] = e), k
                }
            });
            var Eb = /^(?:input|select|textarea|button)$/i,
                Gb =
                /^(?:a|area)$/i;
            h.fn.extend({
                prop: function(a, b) {
                    return qa(this, h.prop, a, b, 1 < arguments.length)
                },
                removeProp: function(a) {
                    return this.each(function() {
                        delete this[h.propFix[a] || a]
                    })
                }
            });
            h.extend({
                prop: function(a, b, c) {
                    var d, k, e = a.nodeType;
                    if (3 !== e && 8 !== e && 2 !== e) return 1 === e && h.isXMLDoc(a) || (b = h.propFix[b] || b, k = h.propHooks[b]), void 0 !== c ? k && "set" in k && void 0 !== (d = k.set(a, c, b)) ? d : a[b] = c : k && "get" in k && null !== (d = k.get(a, b)) ? d : a[b]
                },
                propHooks: {
                    tabIndex: {
                        get: function(a) {
                            var b = h.find.attr(a, "tabindex");
                            return b ?
                                parseInt(b, 10) : Eb.test(a.nodeName) || Gb.test(a.nodeName) && a.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            });
            Z.optSelected || (h.propHooks.selected = {
                get: function(a) {
                    a = a.parentNode;
                    return a && a.parentNode && a.parentNode.selectedIndex, null
                },
                set: function(a) {
                    a = a.parentNode;
                    a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex)
                }
            });
            h.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
                h.propFix[this.toLowerCase()] =
                    this
            });
            h.fn.extend({
                addClass: function(a) {
                    var b, c, d, k, e, f, g = 0;
                    if (h.isFunction(a)) return this.each(function(b) {
                        h(this).addClass(a.call(this, b, ua(this)))
                    });
                    if ("string" == typeof a && a)
                        for (b = a.match(oa) || []; c = this[g++];)
                            if (k = ua(c), d = 1 === c.nodeType && " " + ra(k) + " ") {
                                for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                                d = ra(d);
                                k !== d && c.setAttribute("class", d)
                            }
                    return this
                },
                removeClass: function(a) {
                    var b, c, d, k, e, f, g = 0;
                    if (h.isFunction(a)) return this.each(function(b) {
                        h(this).removeClass(a.call(this, b, ua(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof a && a)
                        for (b = a.match(oa) || []; c = this[g++];)
                            if (k = ua(c), d = 1 === c.nodeType && " " + ra(k) + " ") {
                                for (f = 0; e = b[f++];)
                                    for (; - 1 < d.indexOf(" " + e + " ");) d = d.replace(" " + e + " ", " ");
                                d = ra(d);
                                k !== d && c.setAttribute("class", d)
                            }
                    return this
                },
                toggleClass: function(a, b) {
                    var c = typeof a;
                    return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : h.isFunction(a) ? this.each(function(c) {
                        h(this).toggleClass(a.call(this, c, ua(this), b), b)
                    }) : this.each(function() {
                        var b,
                            d;
                        if ("string" === c) {
                            var k = 0;
                            var e = h(this);
                            for (d = a.match(oa) || []; b = d[k++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                        } else void 0 !== a && "boolean" !== c || (b = ua(this), b && Q.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : Q.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(a) {
                    var b, c = 0;
                    for (a = " " + a + " "; b = this[c++];)
                        if (1 === b.nodeType && -1 < (" " + ra(ua(b)) + " ").indexOf(a)) return !0;
                    return !1
                }
            });
            var Hb = /\r/g;
            h.fn.extend({
                val: function(a) {
                    var b, c, d, k = this[0];
                    if (arguments.length) return d =
                        h.isFunction(a), this.each(function(c) {
                            var k;
                            1 === this.nodeType && (k = d ? a.call(this, c, h(this).val()) : a, null == k ? k = "" : "number" == typeof k ? k += "" : Array.isArray(k) && (k = h.map(k, function(a) {
                                return null == a ? "" : a + ""
                            })), b = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, k, "value") || (this.value = k))
                        });
                    if (k) return b = h.valHooks[k.type] || h.valHooks[k.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(k, "value")) ? c : (c = k.value, "string" == typeof c ? c.replace(Hb, "") : null ==
                        c ? "" : c)
                }
            });
            h.extend({
                valHooks: {
                    option: {
                        get: function(a) {
                            var b = h.find.attr(a, "value");
                            return null != b ? b : ra(h.text(a))
                        }
                    },
                    select: {
                        get: function(a) {
                            var b, c, d = a.options,
                                k = a.selectedIndex,
                                e = "select-one" === a.type,
                                f = e ? null : [],
                                g = e ? k + 1 : d.length;
                            for (c = 0 > k ? g : e ? k : 0; c < g; c++)
                                if (b = d[c], !(!b.selected && c !== k || b.disabled || b.parentNode.disabled && l(b.parentNode, "optgroup"))) {
                                    if (a = h(b).val(), e) return a;
                                    f.push(a)
                                }
                            return f
                        },
                        set: function(a, b) {
                            for (var c, d, k = a.options, e = h.makeArray(b), f = k.length; f--;) d = k[f], (d.selected = -1 < h.inArray(h.valHooks.option.get(d),
                                e)) && (c = !0);
                            return c || (a.selectedIndex = -1), e
                        }
                    }
                }
            });
            h.each(["radio", "checkbox"], function() {
                h.valHooks[this] = {
                    set: function(a, b) {
                        if (Array.isArray(b)) return a.checked = -1 < h.inArray(h(a).val(), b)
                    }
                };
                Z.checkOn || (h.valHooks[this].get = function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                })
            });
            var lb = /^(?:focusinfocus|focusoutblur)$/;
            h.extend(h.event, {
                trigger: function(b, c, d, e) {
                    var k, f, g, l, n, m = [d || W],
                        p = fa.call(b, "type") ? b.type : b;
                    var r = fa.call(b, "namespace") ? b.namespace.split(".") : [];
                    if (k = f = d = d || W, 3 !==
                        d.nodeType && 8 !== d.nodeType && !lb.test(p + h.event.triggered) && (-1 < p.indexOf(".") && (r = p.split("."), p = r.shift(), r.sort()), g = 0 > p.indexOf(":") && "on" + p, b = b[h.expando] ? b : new h.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : h.makeArray(c, [b]), n = h.event.special[p] || {}, e || !n.trigger || !1 !== n.trigger.apply(d, c))) {
                        if (!e && !n.noBubble && !h.isWindow(d)) {
                            var t =
                                n.delegateType || p;
                            for (lb.test(t + p) || (k = k.parentNode); k; k = k.parentNode) m.push(k), f = k;
                            f === (d.ownerDocument || W) && m.push(f.defaultView || f.parentWindow || a)
                        }
                        for (r = 0;
                            (k = m[r++]) && !b.isPropagationStopped();) b.type = 1 < r ? t : n.bindType || p, (l = (Q.get(k, "events") || {})[b.type] && Q.get(k, "handle")) && l.apply(k, c), (l = g && k[g]) && l.apply && Nb(k) && (b.result = l.apply(k, c), !1 === b.result && b.preventDefault());
                        return b.type = p, e || b.isDefaultPrevented() || n._default && !1 !== n._default.apply(m.pop(), c) || !Nb(d) || g && h.isFunction(d[p]) &&
                            !h.isWindow(d) && (f = d[g], f && (d[g] = null), h.event.triggered = p, d[p](), h.event.triggered = void 0, f && (d[g] = f)), b.result
                    }
                },
                simulate: function(a, b, c) {
                    a = h.extend(new h.Event, c, {
                        type: a,
                        isSimulated: !0
                    });
                    h.event.trigger(a, null, b)
                }
            });
            h.fn.extend({
                trigger: function(a, b) {
                    return this.each(function() {
                        h.event.trigger(a, b, this)
                    })
                },
                triggerHandler: function(a, b) {
                    var c = this[0];
                    if (c) return h.event.trigger(a, b, c, !0)
                }
            });
            h.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
                function(a, b) {
                    h.fn[b] = function(a, c) {
                        return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
                    }
                });
            h.fn.extend({
                hover: function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }
            });
            Z.focusin = "onfocusin" in a;
            Z.focusin || h.each({
                focus: "focusin",
                blur: "focusout"
            }, function(a, b) {
                var c = function(a) {
                    h.event.simulate(b, a.target, h.event.fix(a))
                };
                h.event.special[b] = {
                    setup: function() {
                        var d = this.ownerDocument || this,
                            k = Q.access(d, b);
                        k || d.addEventListener(a, c, !0);
                        Q.access(d, b, (k || 0) + 1)
                    },
                    teardown: function() {
                        var d = this.ownerDocument ||
                            this,
                            k = Q.access(d, b) - 1;
                        k ? Q.access(d, b, k) : (d.removeEventListener(a, c, !0), Q.remove(d, b))
                    }
                }
            });
            var tb = a.location,
                mb = h.now(),
                ec = /\?/;
            h.parseXML = function(b) {
                if (!b || "string" != typeof b) return null;
                try {
                    var c = (new a.DOMParser).parseFromString(b, "text/xml")
                } catch (z) {
                    c = void 0
                }
                return c && !c.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + b), c
            };
            var Pb = /\[\]$/,
                ic = /\r?\n/g,
                Qb = /^(?:submit|button|image|reset|file)$/i,
                Rb = /^(?:input|select|textarea|keygen)/i;
            h.param = function(a, b) {
                var c, d = [],
                    k = function(a,
                        b) {
                        var c = h.isFunction(b) ? b() : b;
                        d[d.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(null == c ? "" : c)
                    };
                if (Array.isArray(a) || a.jquery && !h.isPlainObject(a)) h.each(a, function() {
                    k(this.name, this.value)
                });
                else
                    for (c in a) ia(c, a[c], b, k);
                return d.join("\x26")
            };
            h.fn.extend({
                serialize: function() {
                    return h.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var a = h.prop(this, "elements");
                        return a ? h.makeArray(a) : this
                    }).filter(function() {
                        var a = this.type;
                        return this.name && !h(this).is(":disabled") &&
                            Rb.test(this.nodeName) && !Qb.test(a) && (this.checked || !Sa.test(a))
                    }).map(function(a, b) {
                        var c = h(this).val();
                        return null == c ? null : Array.isArray(c) ? h.map(c, function(a) {
                            return {
                                name: b.name,
                                value: a.replace(ic, "\r\n")
                            }
                        }) : {
                            name: b.name,
                            value: c.replace(ic, "\r\n")
                        }
                    }).get()
                }
            });
            var Sb = /%20/g,
                Tb = /#.*$/,
                Ub = /([?&])_=[^&]*/,
                Vb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Wb = /^(?:GET|HEAD)$/,
                Xb = /^\/\//,
                jc = {},
                cc = {},
                kc = "*/".concat("*"),
                fc = W.createElement("a");
            fc.href = tb.href;
            h.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: tb.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tb.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
                    accepts: {
                        "*": kc,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": h.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(a, b) {
                    return b ? da(da(a, h.ajaxSettings), b) : da(h.ajaxSettings, a)
                },
                ajaxPrefilter: Lb(jc),
                ajaxTransport: Lb(cc),
                ajax: function(b, c) {
                    function d(b, c, d, f) {
                        var n, p, z, B = c;
                        if (!I) {
                            I = !0;
                            g && a.clearTimeout(g);
                            k = void 0;
                            e = f || "";
                            x.readyState = 0 < b ? 4 : 0;
                            f = 200 <= b && 300 > b || 304 === b;
                            if (d) {
                                var G = m;
                                for (var w = x, D, y, X, R, A = G.contents, E = G.dataTypes;
                                    "*" === E[0];) E.shift(), void 0 === D && (D = G.mimeType || w.getResponseHeader("Content-Type"));
                                if (D)
                                    for (y in A)
                                        if (A[y] &&
                                            A[y].test(D)) {
                                            E.unshift(y);
                                            break
                                        }
                                if (E[0] in d) X = E[0];
                                else {
                                    for (y in d) {
                                        if (!E[0] || G.converters[y + " " + E[0]]) {
                                            X = y;
                                            break
                                        }
                                        R || (R = y)
                                    }
                                    X = X || R
                                }
                                d = X ? (X !== E[0] && E.unshift(X), d[X]) : void 0;
                                G = d
                            }
                            a: {
                                d = m;D = G;y = x;X = f;
                                var K, H, C;G = {};w = d.dataTypes.slice();
                                if (w[1])
                                    for (K in d.converters) G[K.toLowerCase()] = d.converters[K];
                                for (R = w.shift(); R;)
                                    if (d.responseFields[R] && (y[d.responseFields[R]] = D), !C && X && d.dataFilter && (D = d.dataFilter(D, d.dataType)), C = R, R = w.shift())
                                        if ("*" === R) R = C;
                                        else if ("*" !== C && C !== R) {
                                    if (K = G[C + " " + R] || G["* " + R], !K)
                                        for (M in G)
                                            if (H = M.split(" "), H[1] === R && (K = G[C + " " + H[0]] || G["* " + H[0]])) {
                                                !0 === K ? K = G[M] : !0 !== G[M] && (R = H[0], w.unshift(H[1]));
                                                break
                                            }
                                    if (!0 !== K)
                                        if (K && d["throws"]) D = K(D);
                                        else try {
                                            D = K(D)
                                        } catch (Xc) {
                                            var M = {
                                                state: "parsererror",
                                                error: K ? Xc : "No conversion from " + C + " to " + R
                                            };
                                            break a
                                        }
                                }
                                M = {
                                    state: "success",
                                    data: D
                                }
                            }
                            G = M;
                            f ? (m.ifModified && (z = x.getResponseHeader("Last-Modified"), z && (h.lastModified[J] = z), z = x.getResponseHeader("etag"), z && (h.etag[J] = z)), 204 === b || "HEAD" === m.type ? B = "nocontent" : 304 === b ? B = "notmodified" : (B = G.state,
                                n = G.data, p = G.error, f = !p)) : (p = B, !b && B || (B = "error", 0 > b && (b = 0)));
                            x.status = b;
                            x.statusText = (c || B) + "";
                            f ? u.resolveWith(r, [n, B, x]) : u.rejectWith(r, [x, B, p]);
                            x.statusCode(v);
                            v = void 0;
                            l && t.trigger(f ? "ajaxSuccess" : "ajaxError", [x, m, f ? n : p]);
                            q.fireWith(r, [x, B]);
                            l && (t.trigger("ajaxComplete", [x, m]), --h.active || h.event.trigger("ajaxStop"))
                        }
                    }
                    "object" == typeof b && (c = b, b = void 0);
                    c = c || {};
                    var k, e, f, g, l, n, p, m = h.ajaxSetup({}, c),
                        r = m.context || m,
                        t = m.context && (r.nodeType || r.jquery) ? h(r) : h.event,
                        u = h.Deferred(),
                        q = h.Callbacks("once memory"),
                        v = m.statusCode || {},
                        B = {},
                        G = {},
                        w = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function(a) {
                                var b;
                                if (I) {
                                    if (!f)
                                        for (f = {}; b = Vb.exec(e);) f[b[1].toLowerCase()] = b[2];
                                    b = f[a.toLowerCase()]
                                }
                                return null == b ? null : b
                            },
                            getAllResponseHeaders: function() {
                                return I ? e : null
                            },
                            setRequestHeader: function(a, b) {
                                return null == I && (a = G[a.toLowerCase()] = G[a.toLowerCase()] || a, B[a] = b), this
                            },
                            overrideMimeType: function(a) {
                                return null == I && (m.mimeType = a), this
                            },
                            statusCode: function(a) {
                                var b;
                                if (a)
                                    if (I) x.always(a[x.status]);
                                    else
                                        for (b in a) v[b] = [v[b], a[b]];
                                return this
                            },
                            abort: function(a) {
                                a = a || w;
                                return k && k.abort(a), d(0, a), this
                            }
                        };
                    if (u.promise(x), m.url = ((b || m.url || tb.href) + "").replace(Xb, tb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(oa) || [""], null == m.crossDomain) {
                        var D = W.createElement("a");
                        try {
                            D.href = m.url, D.href = D.href, m.crossDomain = fc.protocol + "//" + fc.host != D.protocol + "//" + D.host
                        } catch (dc) {
                            m.crossDomain = !0
                        }
                    }
                    if (m.data && m.processData && "string" != typeof m.data && (m.data = h.param(m.data,
                            m.traditional)), ka(jc, m, c, x), I) return x;
                    (l = h.event && m.global) && 0 === h.active++ && h.event.trigger("ajaxStart");
                    m.type = m.type.toUpperCase();
                    m.hasContent = !Wb.test(m.type);
                    var J = m.url.replace(Tb, "");
                    m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Sb, "+")) : (p = m.url.slice(J.length), m.data && (J += (ec.test(J) ? "\x26" : "?") + m.data, delete m.data), !1 === m.cache && (J = J.replace(Ub, "$1"), p = (ec.test(J) ? "\x26" : "?") + "_\x3d" + mb++ + p), m.url = J +
                        p);
                    m.ifModified && (h.lastModified[J] && x.setRequestHeader("If-Modified-Since", h.lastModified[J]), h.etag[J] && x.setRequestHeader("If-None-Match", h.etag[J]));
                    (m.data && m.hasContent && !1 !== m.contentType || c.contentType) && x.setRequestHeader("Content-Type", m.contentType);
                    x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + kc + "; q\x3d0.01" : "") : m.accepts["*"]);
                    for (n in m.headers) x.setRequestHeader(n, m.headers[n]);
                    if (m.beforeSend && (!1 === m.beforeSend.call(r,
                            x, m) || I)) return x.abort();
                    if (w = "abort", q.add(m.complete), x.done(m.success), x.fail(m.error), k = ka(cc, m, c, x)) {
                        if (x.readyState = 1, l && t.trigger("ajaxSend", [x, m]), I) return x;
                        m.async && 0 < m.timeout && (g = a.setTimeout(function() {
                            x.abort("timeout")
                        }, m.timeout));
                        try {
                            var I = !1;
                            k.send(B, d)
                        } catch (dc) {
                            if (I) throw dc;
                            d(-1, dc)
                        }
                    } else d(-1, "No Transport");
                    return x
                },
                getJSON: function(a, b, c) {
                    return h.get(a, b, c, "json")
                },
                getScript: function(a, b) {
                    return h.get(a, void 0, b, "script")
                }
            });
            h.each(["get", "post"], function(a, b) {
                h[b] = function(a,
                    c, d, k) {
                    return h.isFunction(c) && (k = k || d, d = c, c = void 0), h.ajax(h.extend({
                        url: a,
                        type: b,
                        dataType: k,
                        data: c,
                        success: d
                    }, h.isPlainObject(a) && a))
                }
            });
            h._evalUrl = function(a) {
                return h.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            };
            h.fn.extend({
                wrapAll: function(a) {
                    var b;
                    return this[0] && (h.isFunction(a) && (a = a.call(this[0])), b = h(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                        return a
                    }).append(this)), this
                },
                wrapInner: function(a) {
                    return h.isFunction(a) ? this.each(function(b) {
                        h(this).wrapInner(a.call(this, b))
                    }) : this.each(function() {
                        var b = h(this),
                            c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    })
                },
                wrap: function(a) {
                    var b = h.isFunction(a);
                    return this.each(function(c) {
                        h(this).wrapAll(b ? a.call(this, c) : a)
                    })
                },
                unwrap: function(a) {
                    return this.parent(a).not("body").each(function() {
                        h(this).replaceWith(this.childNodes)
                    }), this
                }
            });
            h.expr.pseudos.hidden = function(a) {
                return !h.expr.pseudos.visible(a)
            };
            h.expr.pseudos.visible = function(a) {
                return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
            };
            h.ajaxSettings.xhr = function() {
                try {
                    return new a.XMLHttpRequest
                } catch (k) {}
            };
            var Yb = {
                    0: 200,
                    1223: 204
                },
                ub = h.ajaxSettings.xhr();
            Z.cors = !!ub && "withCredentials" in ub;
            Z.ajax = ub = !!ub;
            h.ajaxTransport(function(b) {
                var c, d;
                if (Z.cors || ub && !b.crossDomain) return {
                    send: function(e, k) {
                        var f, h = b.xhr();
                        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                            for (f in b.xhrFields) h[f] = b.xhrFields[f];
                        b.mimeType &&
                            h.overrideMimeType && h.overrideMimeType(b.mimeType);
                        b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        for (f in e) h.setRequestHeader(f, e[f]);
                        c = function(a) {
                            return function() {
                                c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? k(0, "error") : k(h.status, h.statusText) : k(Yb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                        binary: h.response
                                    } : {
                                        text: h.responseText
                                    },
                                    h.getAllResponseHeaders()))
                            }
                        };
                        h.onload = c();
                        d = h.onerror = c("error");
                        void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                            4 === h.readyState && a.setTimeout(function() {
                                c && d()
                            })
                        };
                        c = c("abort");
                        try {
                            h.send(b.hasContent && b.data || null)
                        } catch (Vc) {
                            if (c) throw Vc;
                        }
                    },
                    abort: function() {
                        c && c()
                    }
                }
            });
            h.ajaxPrefilter(function(a) {
                a.crossDomain && (a.contents.script = !1)
            });
            h.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(a) {
                        return h.globalEval(a), a
                    }
                }
            });
            h.ajaxPrefilter("script", function(a) {
                void 0 === a.cache && (a.cache = !1);
                a.crossDomain && (a.type = "GET")
            });
            h.ajaxTransport("script", function(a) {
                if (a.crossDomain) {
                    var b, c;
                    return {
                        send: function(d, e) {
                            b = h("\x3cscript\x3e").prop({
                                charset: a.scriptCharset,
                                src: a.url
                            }).on("load error", c = function(a) {
                                b.remove();
                                c = null;
                                a && e("error" === a.type ? 404 : 200, a.type)
                            });
                            W.head.appendChild(b[0])
                        },
                        abort: function() {
                            c && c()
                        }
                    }
                }
            });
            var lc = [],
                gc = /(=)\?(?=&|$)|\?\?/;
            h.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var a = lc.pop() || h.expando + "_" + mb++;
                    return this[a] = !0, a
                }
            });
            h.ajaxPrefilter("json jsonp", function(b, c, d) {
                var e, f, k, g = !1 !== b.jsonp && (gc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && gc.test(b.data) && "data");
                if (g || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = h.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, g ? b[g] = b[g].replace(gc, "$1" + e) : !1 !== b.jsonp && (b.url += (ec.test(b.url) ? "\x26" : "?") + b.jsonp +
                    "\x3d" + e), b.converters["script json"] = function() {
                    return k || h.error(e + " was not called"), k[0]
                }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                    k = arguments
                }, d.always(function() {
                    void 0 === f ? h(a).removeProp(e) : a[e] = f;
                    b[e] && (b.jsonpCallback = c.jsonpCallback, lc.push(e));
                    k && h.isFunction(f) && f(k[0]);
                    k = f = void 0
                }), "script"
            });
            Z.createHTMLDocument = function() {
                var a = W.implementation.createHTMLDocument("").body;
                return a.innerHTML = "\x3cform\x3e\x3c/form\x3e\x3cform\x3e\x3c/form\x3e", 2 === a.childNodes.length
            }();
            h.parseHTML =
                function(a, b, c) {
                    if ("string" != typeof a) return [];
                    "boolean" == typeof b && (c = b, b = !1);
                    var d, e, f;
                    return b || (Z.createHTMLDocument ? (b = W.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = W.location.href, b.head.appendChild(d)) : b = W), e = Ea.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = A([a], b, f), f && f.length && h(f).remove(), h.merge([], e.childNodes))
                };
            h.fn.load = function(a, b, c) {
                var d, e, f, k = this,
                    g = a.indexOf(" ");
                return -1 < g && (d = ra(a.slice(g)), a = a.slice(0, g)), h.isFunction(b) ? (c = b, b = void 0) : b && "object" ==
                    typeof b && (e = "POST"), 0 < k.length && h.ajax({
                        url: a,
                        type: e || "GET",
                        dataType: "html",
                        data: b
                    }).done(function(a) {
                        f = arguments;
                        k.html(d ? h("\x3cdiv\x3e").append(h.parseHTML(a)).find(d) : a)
                    }).always(c && function(a, b) {
                        k.each(function() {
                            c.apply(this, f || [a.responseText, b, a])
                        })
                    }), this
            };
            h.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
                h.fn[b] = function(a) {
                    return this.on(b, a)
                }
            });
            h.expr.pseudos.animated = function(a) {
                return h.grep(h.timers, function(b) {
                    return a === b.elem
                }).length
            };
            h.offset = {
                setOffset: function(a, b, c) {
                    var d, e, f, k = h.css(a, "position"),
                        g = h(a),
                        l = {};
                    "static" === k && (a.style.position = "relative");
                    var m = g.offset();
                    var n = h.css(a, "top");
                    var p = h.css(a, "left");
                    ("absolute" === k || "fixed" === k) && -1 < (n + p).indexOf("auto") ? (d = g.position(), f = d.top, e = d.left) : (f = parseFloat(n) || 0, e = parseFloat(p) || 0);
                    h.isFunction(b) && (b = b.call(a, c, h.extend({}, m)));
                    null != b.top && (l.top = b.top - m.top + f);
                    null != b.left && (l.left = b.left - m.left + e);
                    "using" in b ? b.using.call(a, l) : g.css(l)
                }
            };
            h.fn.extend({
                offset: function(a) {
                    if (arguments.length) return void 0 ===
                        a ? this : this.each(function(b) {
                            h.offset.setOffset(this, a, b)
                        });
                    var b, c, d, e, f = this[0];
                    if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
                        top: d.top + e.pageYOffset - c.clientTop,
                        left: d.left + e.pageXOffset - c.clientLeft
                    }) : {
                        top: 0,
                        left: 0
                    }
                },
                position: function() {
                    if (this[0]) {
                        var a, b, c = this[0],
                            d = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === h.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), l(a[0], "html") || (d = a.offset()), d = {
                            top: d.top +
                                h.css(a[0], "borderTopWidth", !0),
                            left: d.left + h.css(a[0], "borderLeftWidth", !0)
                        }), {
                            top: b.top - d.top - h.css(c, "marginTop", !0),
                            left: b.left - d.left - h.css(c, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var a = this.offsetParent; a && "static" === h.css(a, "position");) a = a.offsetParent;
                        return a || Ob
                    })
                }
            });
            h.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(a, b) {
                var c = "pageYOffset" === b;
                h.fn[a] = function(d) {
                    return qa(this, function(a, d, e) {
                        var f;
                        return h.isWindow(a) ? f = a : 9 === a.nodeType &&
                            (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                    }, a, d, arguments.length)
                }
            });
            h.each(["top", "left"], function(a, b) {
                h.cssHooks[b] = U(Z.pixelPosition, function(a, c) {
                    if (c) return c = D(a, b), bc.test(c) ? h(a).position()[b] + "px" : c
                })
            });
            h.each({
                Height: "height",
                Width: "width"
            }, function(a, b) {
                h.each({
                    padding: "inner" + a,
                    content: b,
                    "": "outer" + a
                }, function(c, d) {
                    h.fn[d] = function(e, f) {
                        var k = arguments.length && (c || "boolean" != typeof e),
                            g = c || (!0 === e || !0 === f ? "margin" : "border");
                        return qa(this, function(b, c, e) {
                            var f;
                            return h.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? h.css(b, c, g) : h.style(b, c, e, g)
                        }, b, k ? e : void 0, k)
                    }
                })
            });
            h.fn.extend({
                bind: function(a, b, c) {
                    return this.on(a, null, b, c)
                },
                unbind: function(a, b) {
                    return this.off(a, null, b)
                },
                delegate: function(a, b, c, d) {
                    return this.on(b, a, c, d)
                },
                undelegate: function(a,
                    b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }
            });
            h.holdReady = function(a) {
                a ? h.readyWait++ : h.ready(!0)
            };
            h.isArray = Array.isArray;
            h.parseJSON = JSON.parse;
            h.nodeName = l;
            "function" == typeof define && define.amd && define("jquery", [], function() {
                return h
            });
            var Zb = a.jQuery,
                $b = a.$;
            return h.noConflict = function(b) {
                return a.$ === h && (a.$ = $b), b && a.jQuery === h && (a.jQuery = Zb), h
            }, b || (a.jQuery = a.$ = h), h
        }(window, !0),
        wb = [],
        V = /(android|iphone|ipad|ipod)/i.test(navigator.userAgent),
        Gb = navigator.maxTouchPoints &&
        2 < navigator.maxTouchPoints && /MacIntel/.test(navigator.platform);
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var Ea = /(Safari)/i.test(navigator.userAgent) && !/(Chrome)/i.test(navigator.userAgent),
        Hb = !!window.MSInputMethodContext && !!document.documentMode,
        Qb = "https:" === window.location.protocol,
        Mc = Hb || Ea;
    navigator.userAgent.toLowerCase().indexOf("firefox");
    var Wa;
    (function() {
        function a(a) {
            q.event.special[a] = {
                setup: function(b, g, l) {
                    this.addEventListener(a, l, {
                        passive: !0
                    })
                }
            }
        }(function() {
            var a = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                window.addEventListener("testPassive", null, e);
                window.removeEventListener("testPassive", null, e)
            } catch (g) {}
            return a
        })() && (a("touchstart"), a("touchmove"))
    })();
    var Ha = function() {
            return "1".startsWith ? function(a, b) {
                return a.startsWith(b)
            } : function(a, b) {
                return 0 === a.indexOf(b)
            }
        }(),
        kb = {
            prepare: function(a) {
                var b = {};
                a.tag && a.tag.forEach(function(a) {
                    a.sentEvents = b
                })
            },
            getIteration: function(a, b) {
                function e(a) {
                    if (a[b]) return 1;
                    a[b] = !0;
                    return 0
                }
                return e(a.tag.sentEvents, b) + e(a.tag, b)
            }
        },
        Ub = function() {
            return function(a) {
                if (!(a && -1 < Ca(a).indexOf(".cdn.ampproject.org"))) return a;
                var b = RegExp(".cdn.ampproject.org(?:/.{1,4}){0,6}/(.*)", "gi").exec(a);
                return b && 1 < b.length ? "https://" + b[1] : a
            }
        }(),
        Ca = function() {
            var a = /^[^:\/?#]*:\/\/\/?([^:\/?#]*)/;
            return function(b) {
                return b ? (b = b.match(a)) && 1 < b.length ? b[1] : "" : ""
            }
        }(),
        vb = function() {
            var a = Sa(),
                b = [];
            return {
                setStorage: function(e, g) {
                    b[e] = g;
                    a && localStorage.setItem(e, g)
                },
                getStorage: function(e, g) {
                    if (!a) return void 0 ===
                        b[e] ? g : b[e];
                    var l = localStorage.getItem(e);
                    return null === l ? g : l
                }
            }
        }(),
        O = function(a) {
            if (!a) return a;
            if (5 < a.length && 0 === a.indexOf("$$$") && a.lastIndexOf("$$$") === a.length - 3) return a.substr(3, a.length - 6);
            a = a.split("");
            for (var b = Math.floor(a.length / 2), e = 0; e < b; e += 2) {
                var g = a.length - e - 1,
                    l = a[g];
                a[g] = a[e];
                a[e] = l
            }
            return a.join("")
        },
        Ma = O("mtcpe:r/sde.alpynrce/vs.toh"),
        Yc = O("801"),
        eb = !1,
        fa = O("dltcemenaIp"),
        A = new function() {
            function a(a, d, f, m, n, p) {
                d = d || {};
                var u = {};
                a: {
                    if ((a === v || a === C) && d.tag) {
                        var q = kb.getIteration(d,
                            a);
                        if (2 === q && (a === C || a === v && !d.tag.rc)) {
                            q = !0;
                            break a
                        }
                        q && (u.d = q)
                    }
                    q = !1
                }
                if (!q) {
                    q = d.tag ? d.tag.url ? d.tag : 1 === d.tag.length ? d.tag[0] : void 0 : void 0;
                    u[L] = d.id;
                    u[F] = a;
                    u[G] = d[G];
                    u[I] = q && q.id;
                    q && q[M] && (u[M] = q[M]);
                    q && q[B] && (u[B] = q[B]);
                    u[K] = f ? f + "" : f;
                    n && (u[S] = n);
                    p && (u[J] = p);
                    u.u = Ra();
                    u.t = Date.now() - c;
                    u.v = Yc;
                    if (f = O("")) u.p = f;
                    if (f = O("")) u.w = f;
                    d._constructor && (u.width = d._constructor.getApi().getAdWidth());
                    l(u, d);
                    u.r = Math.random();
                    !d.sendEventsAsBatch || a !== C && a !== v && a !== t || vb.getStorage("ap.log", !1) ? D.length ? (D.push(u),
                        e(), f = !0) : f = void 0 : (D.push(u), 100 <= D.length ? e() : U || (U = setTimeout(e, d.sendEventsAsBatch)), f = !0);
                    f || b(m, u);
                    g(a, d)
                }
            }

            function b(a, b) {
                var c = new Image;
                c.crossOrigin = "Anonymous";
                a && (c.onload = function() {
                    a: try {
                        var b = document.createElement(O("savnac")).getContext("2d");
                        b.drawImage(c, 0, 0);
                        var d = b.getImageData(0, 0, 1, 1).data,
                            e;
                        for (e in d)
                            if (255 !== d[e]) break a;
                        a()
                    } catch (Fa) {}
                });
                c.src = Ma + N + q.param(b)
            }

            function e() {
                U && (clearTimeout(U), U = 0);
                if (D.length) {
                    var a = D;
                    D = [];
                    q.ajax({
                        type: "POST",
                        url: Ma + N,
                        data: JSON.stringify(a),
                        contentType: "application/json",
                        success: function(c, d, e) {
                            200 === e.status && "image/gif" === e.getResponseHeader("content-type") && (a.forEach(function(a) {
                                a.z = (a.z || "") + "sg:1;";
                                b(T, a)
                            }), vb.setStorage("ap.log", "1"))
                        }
                    })
                }
            }

            function g(a, b) {
                var c = b.clickUrl;
                a === A.types.click && c && q("body").append(q("\x3ciframe/\x3e").on("load", function() {
                    q(this).remove()
                }).hide().attr("src", ka(c)))
            }

            function l(a, b) {
                function c(a, b) {
                    b && (d += a + ":" + b + ";")
                }
                var d = "";
                c("p", b._pType);
                c("v", b._vType || b.type);
                var e = b.tag;
                e && (c("c", e.client),
                    c("t", e.type), c("vp", e._isVpaid && "1"));
                vb.getStorage("ap.log", !1) && c("sg", "2");
                d && (a.z = d)
            }
            var f = /dMod_/.test(navigator.userAgent),
                m = da().location.hash,
                d, c = Date.now(),
                n = O("TNII"),
                t = O("DODAEL"),
                p = O("DTTRAES"),
                w = O("RRROE"),
                v = O("TEEUQSR"),
                x = O("TEUAFLD"),
                u = O("KLICC"),
                y = O("NMIRSESPOI"),
                C = O("YPIOUTRNPTO"),
                P = O("TOETNNC"),
                L = O("di"),
                F = O("eypt"),
                G = fa,
                I = O("dagIt"),
                M = O("dtIv"),
                B = O("pm"),
                K = O("eeassgm"),
                S = O("Aypet"),
                J = O("AoptTnteynec"),
                N = O("?v//jog/ls11/"),
                D = [],
                U;
            this.types = {
                init: n,
                loaded: t,
                started: p,
                error: w,
                request: v,
                default: x,
                click: u,
                impression: y,
                opportunity: C,
                content: P
            };
            this.prepare = function(a, b) {
                a._constructor = b;
                a.advertising && (a.advertising._constructor = b, a.advertising._pType = a._pType, a.advertising._vType = a._vType || a.type)
            };
            this.debugMode = function(a) {
                void 0 !== a && (f = a);
                return f
            };
            this.log = function(a) {
                if (f || -1 !== m.indexOf("dMod_")) {
                    if (window.console) try {
                        console.log(a)
                    } catch (R) {}
                    V && (d || (d = q("\x3cdiv class\x3d'logMobEl'\x3e\x3c/div\x3e"), q("body").append(d)), d.append(a + "\x3cbr/\x3e"))
                }
            };
            this.initError = function(b,
                c, d) {
                var e = {};
                d ? e = d.advertising : e[fa] = O("gTafVjIrg7k-gQDSkaswT9pRMVr8o6t_jC0hXe-smR-TJxfq5Ngp") || b && (q(b).attr("data-id") || b.id) || "initError";
                a(A.types.error, e, "init " + c)
            };
            this.event = function(b, c, d, e) {
                a(b, c, d, e)
            };
            this.viewed = function(b, c, d, e) {
                a(b, c, null, null, d, e)
            }
        },
        Pa, ib, nb, jb;
    (function() {
        function a(a, f) {
            if (a && f) {
                var g = b(a, "frequencyCapping get");
                if (g) {
                    var d = ++g.counterShowed;
                    localStorage.setItem(a, g.timeExpire + "." + d + "." + g.frequency)
                } else g = f.split("/"), d = parseInt(g[1]), d = (new Date((new Date).setHours((new Date).getHours() +
                    d))).getTime(), (g = e(a, d, 1, g[0], "frequencyCapping create")) && localStorage.setItem(a, g.timeExpire + "." + g.counterShowed + "." + g.frequency)
            }
        }

        function b(a, b) {
            var f = localStorage.getItem(a);
            if (f) return f = f.split("."), e(a, parseInt(f[0]), parseInt(f[1]), parseInt(f[2]), b)
        }

        function e(a, b, e, d, c) {
            if (isNaN(b) || isNaN(e) || isNaN(d)) localStorage.removeItem(a), A.event(A.types.error, {
                placementId: a
            }, c);
            else return {
                timeExpire: b,
                counterShowed: e,
                frequency: d
            }
        }
        var g = Sa();
        Pa = function(a, e) {
            function f(a, c) {
                if (!a || !c) return !1;
                if (!g) return !0;
                var d = b(a, "frequencyCapping reached");
                return !d || d.counterShowed < d.frequency ? !1 : (new Date).getTime() >= d.timeExpire ? (localStorage.removeItem(a), !1) : !0
            }
            return f(a, e.frequencyCapping) || f("o:" + a, e.opportunitiesFrequencyCapping)
        };
        ib = function(b) {
            b.placementId && a(b.placementId, b.frequencyCapping);
            b.tag && b.tag.vtId && a(b.tag.vtId, b.tag.frequencyCapping)
        };
        nb = function(b) {
            var e = kb.getIteration(b, "FC_OPPORTUNITY");
            b.placementId && 1 > e && a("o:" + b.placementId, b.opportunitiesFrequencyCapping);
            b.tag && b.tag.vtId && 2 > e &&
                a("o:" + b.tag.vtId, b.tag.opportunitiesFrequencyCapping)
        };
        jb = function(a) {
            a && (a.placementId && localStorage.removeItem("o:" + a.placementId), a.tag && a.tag.vtId && localStorage.removeItem("o:" + a.tag.vtId))
        };
        g || (jb = nb = ib = T)
    })();
    var Ya;
    (function() {
        var a = da(),
            b = q(a);
        Ya = function(e, g) {
            var l = e.offset().top,
                f = b.scrollTop(),
                m = a.innerHeight;
            l = f > l ? l + g - f : f + m - l;
            if (0 >= l) return 0;
            l = Math.min(l, m, g);
            return Math.floor(100 * l / g)
        }
    })();
    var Da = [];
    na.setup = function(a) {
        function b() {
            return "inView" === a.type || "rewarded" === a.type
        }

        function e() {
            var a =
                q("\x3cspan\x3e\x3c/span\x3e");
            b() ? q("body", da().document).append(a) : q(bb(document.body)).after(a);
            return a.get(0)
        }
        a && (a._pType = "st");
        if (a.safeFrame || b()) return na(e()).setup(a);
        document.write("\x3cspan\x3e\x3c/span\x3e");
        return na(q("span:last").get(0)).setup(a)
    };
    na.push = function(a) {
        function b(b) {
            function c(c, e, f) {
                var g = Oa(a[c], d.attr("data-" + c));
                g && ("true" === g ? g = !0 : "false" === g && (g = !1), (f || b)[e || c] = g)
            }
            var d = q("#" + f);
            if (!b && !d.attr("data-file")) return e();
            b = b || {};
            b._pType = "pl";
            b[fa] = f;
            c("file");
            c("autoStart");
            c("muted");
            c("width");
            c("height");
            c("_type");
            b.advertising && Pa(f, b.advertising) && (b.advertising.tag = []);
            b.advertising && c("advertising-passback", "passback", b.advertising);
            b.after && (m = l(m, b.after, b.type));
            g(b);
            m ? e(new na(fb(m, f, !0))).setup(b) : e(new na(f)).setup(b)
        }

        function e(b) {
            a.init && a.init(b);
            return b
        }

        function g(b) {
            a.appParams && (b.appParams = a.appParams);
            a.clickUrl && b.advertising && (b.advertising.clickUrl = a.clickUrl)
        }

        function l(a, b, e) {
            b = b.trim();
            if ("TOP_IFRAME" !== b) return eval(b);
            for (b = window; b.parent.frameElement;) b =
                b.parent;
            return "inView" === e || "rewarded" === e ? b.parent.document.body : b.frameElement || a
        }
        if (q.isFunction(a)) return setTimeout(a, 1), e();
        var f = a.id || a,
            m = a.after;
        q.get(Ma + "/v1/placements/" + f + "/code/js/1", function() {
            var b = Vb(a.appParams);
            b.url = Ra();
            b.b = Math.random();
            return b
        }(), b).fail(function(a, c, e) {
            A.event(A.types.error, {
                placementId: f
            }, "get options " + a.status + " " + c + " " + e);
            b()
        })
    };
    var y = {
            resetStatus: "resetStatus",
            startLoad: "startLoad",
            endLoad: "endLoad",
            beforePlay: "beforePlay",
            beforeComplete: "beforeComplete",
            beforeGlobalStopped: "beforeGlobalStopped",
            time: "timeUpdate",
            timeTags: "timeTags",
            showAd: "showAd",
            hideScreen: "hideScreen",
            apiReady: "apiReady",
            addSoundByHover: "addSoundByHover",
            close: "close",
            forceShow: "forceShow",
            adStart: "AdStart",
            adLoaded: "AdLoaded",
            adStarted: "AdStarted",
            adImpression: "AdImpression",
            adStopped: "AdStopped",
            adPaused: "AdPaused",
            adResumed: "AdPlaying",
            adClickThru: "AdClickThru",
            adCompleted: "AdCompleted",
            adError: "AdError",
            adSkippableStateChange: "AdSkippableStateChange",
            adSkipped: "AdSkipped",
            adCurrentPercent: "AdCurrentPercent",
            adVolumeChange: "AdVolumeChange",
            adSizeChange: "AdSizeChange",
            adUserClose: "AdUserClose",
            adVideo: {
                0: "AdVideoStart",
                25: "AdVideoFirstQuartile",
                50: "AdVideoMidpoint",
                75: "AdVideoThirdQuartile",
                100: "AdVideoComplete"
            },
            globalShowed: "globalShowed",
            globalLoaded: "globalLoaded",
            globalStopped: "globalStopped"
        },
        ia = {
            PRE: "PRE",
            MID: "MID",
            POST: "POST"
        };
    (function() {
        (function() {
            try {
                var a = document.currentScript;
                return !a || a.src && -1 !== a.src.indexOf("adapter1")
            } catch (b) {
                return !0
            }
        })() && (window.getVPAIDAd =
            function() {
                return new sc
            })
    })();
    var aa = function(a, b, e, g, l, f) {
        function m(a) {
            return function() {
                f.onProgressPercent(a)
            }
        }

        function d(a) {
            return function() {
                f.onAdLog(a)
            }
        }

        function c(a) {
            return function(b) {
                p.ended();
                a(b)
            }
        }

        function n(a, b) {
            return function() {
                try {
                    return a.apply(p._creative, arguments)
                } catch (C) {
                    A.log(C), b && (f.onAdError("tryCatchVpaidWrap"), p.ended())
                }
            }
        }

        function t() {
            if (b.getVideo().muted) {
                var a = setInterval(function() {
                    try {
                        b.getVideo().muted || (b.getVideo().muted = !0)
                    } catch (E) {
                        q()
                    }
                }, 50);
                q = function() {
                    clearInterval(a);
                    q = T
                }
            }
        }
        var p = this,
            q = T;
        this._creative = g;
        this.player = b;
        this.callbacks = {};
        this.methods = "handshakeVersion initAd startAd stopAd skipAd resizeAd pauseAd resumeAd expandAd collapseAd subscribe unsubscribe".split(" ");
        var v = this.isEnded = !1,
            x;
        this.getType = function() {
            return "vpaid"
        };
        this.isPaused = function() {
            return x
        };
        this.skipAd = function() {
            p.destroy();
            f.onAdLog("skipAd");
            f.onAdSkipped()
        };
        this.clickAd = function() {
            f.onAdLog("not implement clickAd")
        };
        this.volume = function(a) {
            if (v) return void 0 !== a && (f.onAdLog("volume: " +
                a), p.setAdVolume(a)), p.getAdVolume()
        };
        this.isMuted = function() {
            if (v) return 0 === p.getAdVolume()
        };
        this.destroy = function() {
            p.ended("call destroy")
        };
        this.checkVPAIDInterface = function() {
            return p.methods.every(function(a) {
                return p._creative[a] && "function" === typeof p._creative[a]
            })
        };
        this.ended = function(a) {
            f.onAdLog("vpaid ended is alredy ended: " + p.isEnded + ",   error: " + a);
            if (!p.isEnded) {
                if (p._creative) {
                    f.onAdLog("unSubscribeCreative");
                    for (var b in p.callbacks) p.callbacks.hasOwnProperty(b) && p._creative.unsubscribe(p.callbacks[b],
                        b)
                }
                p.isEnded = !0;
                l();
                q()
            }
        };
        this.skipOffset = function() {
            return -1
        };
        aa.prototype.setCallbacksForCreative = function() {
            p.callbacks = {
                AdStarted: p.onAdStarted,
                AdStopped: c(f.onAdStopped),
                AdSkipped: c(f.onAdSkipped),
                AdLoaded: p.onAdLoaded,
                AdLinearChange: d("AdLinearChange"),
                AdSizeChange: p.onAdSizeChange,
                AdExpandedChange: d("AdExpandedChange"),
                AdSkippableStateChange: f.onAdSkippableStateChange,
                AdDurationChange: d("AdDurationChange"),
                AdRemainingTimeChange: T,
                AdVolumeChange: p.onAdVolumeChange,
                AdImpression: f.onAdImpression,
                AdClickThru: f.onAdClickThru,
                AdInteraction: d("AdInteraction"),
                AdVideoStart: m(0),
                AdVideoFirstQuartile: m(25),
                AdVideoMidpoint: m(50),
                AdVideoThirdQuartile: m(75),
                AdVideoComplete: f.onAdCompleted,
                AdUserAcceptInvitation: d("AdUserAcceptInvitation"),
                AdUserMinimize: d("AdUserMinimize"),
                AdUserClose: f.onAdUserClose,
                AdPaused: p.onAdPaused,
                AdPlaying: p.onAdPlaying,
                AdError: c(f.onAdError),
                AdLog: f.onAdLog
            };
            for (var a in p.callbacks) p.callbacks.hasOwnProperty(a) && p._creative.subscribe(p.callbacks[a], a, p)
        };
        aa.prototype.unsubscribeEvents =
            function() {
                f.onAdLog("unSubscribeCreative");
                for (var a in p.callbacks) p.callbacks.hasOwnProperty(a) && p._creative.unsubscribe(p.callbacks[a], a)
            };
        aa.prototype.handshakeVersion = function(a) {
            return p._creative.handshakeVersion(a)
        };
        aa.prototype.initAd = function(a, b, c, d, e, f) {
            t();
            p._creative.initAd(a, b, c, d, e, f)
        };
        aa.prototype.onAdStarted = function() {
            x = !1;
            f.onAdStarted();
            q()
        };
        aa.prototype.onAdPaused = function() {
            x = !0;
            f.onAdLog("onAdPaused");
            f.onAdPaused()
        };
        aa.prototype.onAdPlaying = function() {
            x = !1;
            f.onAdLog("onAdPlaying");
            f.onAdPlaying()
        };
        aa.prototype.getAdExpanded = function() {
            f.onAdLog("getAdExpanded");
            return n(p._creative.getAdExpanded)()
        };
        aa.prototype.getAdSkippableState = function() {
            f.onAdLog("getAdSkippableState");
            return n(p._creative.getAdSkippableState)()
        };
        aa.prototype.onAdSizeChange = function() {
            f.onAdLog("Adsizechangedto:  w\x3d" + n(p._creative.getAdWidth)() + " h\x3d" + n(p._creative.getAdHeight)());
            f.onAdSizeChange()
        };
        aa.prototype.getAdDuration = function() {
            return n(p._creative.getAdDuration)()
        };
        aa.prototype.getAdRemainingTime =
            function() {
                return p._creative.getAdRemainingTime ? n(p._creative.getAdRemainingTime)() : p._creative.getRemainingTime ? n(p._creative.getRemainingTime)() : -2
            };
        aa.prototype.getAdLinear = function() {
            f.onAdLog("getAdLinear");
            return n(p._creative.getAdLinear)()
        };
        aa.prototype.onAdLoaded = function() {
            f.onAdLog("ad has been loaded  isAdLoaded before: " + v);
            v || (x = v = !0, f.onAdLoaded(), n(p._creative.startAd, !0)())
        };
        aa.prototype.setAdVolume = function(a) {
            f.onAdLog("setAdVolume: " + a);
            b.muted(0 === a);
            n(p._creative.setAdVolume)(a)
        };
        aa.prototype.getAdVolume = function() {
            return n(p._creative.getAdVolume)()
        };
        aa.prototype.onAdVolumeChange = function() {
            var a = n(p._creative.getAdVolume)();
            f.onAdVolumeChange(a)
        };
        aa.prototype.resizeAd = function(a, b, c) {
            v && (c = c ? "fullscreen" : "normal", f.onAdLog("resizeAd width, height, viewMode: " + a + b + c), n(p._creative.resizeAd)(a, b, c))
        };
        aa.prototype.pauseAd = function() {
            v && (f.onAdLog("pauseAd"), n(p._creative.pauseAd)())
        };
        aa.prototype.resumeAd = function() {
            v && (f.onAdLog("resumeAd"), n(p._creative.resumeAd, !0)())
        };
        aa.prototype.expandAd = function() {
            v && (f.onAdLog("expandAd"), n(p._creative.expandAd)())
        };
        aa.prototype.collapseAd = function() {
            v && (f.onAdLog("collapseAd"), n(p._creative.collapseAd, !0)())
        };
        aa.prototype.stopAd = function() {
            v && (f.onAdLog("stopAd"), n(p._creative.stopAd, !0)())
        }
    };
    (function(a) {
        "object" === typeof exports && "undefined" !== typeof module ? module.exports = a() : "function" === typeof define && define.amd ? define([], a) : ("undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ?
            self : this).DMVAST = a()
    })(function() {
        return function l(b, e, g) {
            function f(c, d) {
                if (!e[c]) {
                    if (!b[c]) {
                        var n = "function" == typeof require && require;
                        if (!d && n) return n(c, !0);
                        if (m) return m(c, !0);
                        n = Error("Cannot find module '" + c + "'");
                        throw n.code = "MODULE_NOT_FOUND", n;
                    }
                    n = e[c] = {
                        exports: {}
                    };
                    b[c][0].call(n.exports, function(d) {
                        var e = b[c][1][d];
                        return f(e ? e : d)
                    }, n, n.exports, l, b, e, g)
                }
                return e[c].exports
            }
            for (var m = "function" == typeof require && require, d = 0; d < g.length; d++) f(g[d]);
            return f
        }({
            1: [function(b, e, g) {
                function l() {
                    this._events =
                        this._events || {};
                    this._maxListeners = this._maxListeners || void 0
                }

                function f(b) {
                    return "function" === typeof b
                }

                function m(b) {
                    return "object" === typeof b && null !== b
                }
                e.exports = l;
                l.EventEmitter = l;
                l.prototype._events = void 0;
                l.prototype._maxListeners = void 0;
                l.defaultMaxListeners = 10;
                l.prototype.setMaxListeners = function(b) {
                    if ("number" !== typeof b || 0 > b || isNaN(b)) throw TypeError("n must be a positive number");
                    this._maxListeners = b;
                    return this
                };
                l.prototype.emit = function(b) {
                    var c;
                    this._events || (this._events = {});
                    if ("error" ===
                        b && (!this._events.error || m(this._events.error) && !this._events.error.length)) {
                        var d = arguments[1];
                        if (d instanceof Error) throw d;
                        var e = Error('Uncaught, unspecified "error" event. (' + d + ")");
                        e.context = d;
                        throw e;
                    }
                    e = this._events[b];
                    if (void 0 === e) return !1;
                    if (f(e)) switch (arguments.length) {
                        case 1:
                            e.call(this);
                            break;
                        case 2:
                            e.call(this, arguments[1]);
                            break;
                        case 3:
                            e.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            d = Array.prototype.slice.call(arguments, 1), e.apply(this, d)
                    } else if (m(e)) {
                        d = Array.prototype.slice.call(arguments,
                            1);
                        var g = e.slice();
                        e = g.length;
                        for (c = 0; c < e; c++) g[c].apply(this, d)
                    }
                    return !0
                };
                l.prototype.addListener = function(b, c) {
                    var d;
                    if (!f(c)) throw TypeError("listener must be a function");
                    this._events || (this._events = {});
                    this._events.newListener && this.emit("newListener", b, f(c.listener) ? c.listener : c);
                    this._events[b] ? m(this._events[b]) ? this._events[b].push(c) : this._events[b] = [this._events[b], c] : this._events[b] = c;
                    m(this._events[b]) && !this._events[b].warned && (d = void 0 !== this._maxListeners ? this._maxListeners : l.defaultMaxListeners) &&
                        0 < d && this._events[b].length > d && (this._events[b].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[b].length), "function" === typeof console.trace && console.trace());
                    return this
                };
                l.prototype.on = l.prototype.addListener;
                l.prototype.once = function(b, c) {
                    function d() {
                        this.removeListener(b, d);
                        e || (e = !0, c.apply(this, arguments))
                    }
                    if (!f(c)) throw TypeError("listener must be a function");
                    var e = !1;
                    d.listener =
                        c;
                    this.on(b, d);
                    return this
                };
                l.prototype.removeListener = function(b, c) {
                    if (!f(c)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[b]) return this;
                    var d = this._events[b];
                    var e = d.length;
                    var g = -1;
                    if (d === c || f(d.listener) && d.listener === c) delete this._events[b], this._events.removeListener && this.emit("removeListener", b, c);
                    else if (m(d)) {
                        for (; 0 < e--;)
                            if (d[e] === c || d[e].listener && d[e].listener === c) {
                                g = e;
                                break
                            }
                        if (0 > g) return this;
                        1 === d.length ? (d.length = 0, delete this._events[b]) : d.splice(g,
                            1);
                        this._events.removeListener && this.emit("removeListener", b, c)
                    }
                    return this
                };
                l.prototype.removeAllListeners = function(b) {
                    if (!this._events) return this;
                    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[b] && delete this._events[b], this;
                    if (0 === arguments.length) {
                        for (c in this._events) "removeListener" !== c && this.removeAllListeners(c);
                        this.removeAllListeners("removeListener");
                        this._events = {};
                        return this
                    }
                    var c = this._events[b];
                    if (f(c)) this.removeListener(b, c);
                    else if (c)
                        for (; c.length;) this.removeListener(b,
                            c[c.length - 1]);
                    delete this._events[b];
                    return this
                };
                l.prototype.listeners = function(b) {
                    return this._events && this._events[b] ? f(this._events[b]) ? [this._events[b]] : this._events[b].slice() : []
                };
                l.prototype.listenerCount = function(b) {
                    if (this._events) {
                        b = this._events[b];
                        if (f(b)) return 1;
                        if (b) return b.length
                    }
                    return 0
                };
                l.listenerCount = function(b, c) {
                    return b.listenerCount(c)
                }
            }, {}],
            2: [function(b, e, g) {
                b = function() {
                    return function() {
                        this.survey = this.pricing = this.advertiser = this.description = this.title = this.system =
                            this.sequence = this.id = null;
                        this.errorURLTemplates = [];
                        this.impressionURLTemplates = [];
                        this.creatives = [];
                        this.extensions = []
                    }
                }();
                e.exports = b
            }, {}],
            3: [function(b, e, g) {
                var l = b("./parser");
                var f = b("./util");
                b = function() {
                    function b() {}
                    b.cappingFreeLunch = 0;
                    b.cappingMinimumTimeInterval = 0;
                    b.options = {
                        withCredentials: !1,
                        timeout: 2E3
                    };
                    b.get = function(b, c, e) {
                        var d = +new Date;
                        var f = g.extend = function(b, c) {
                            var d;
                            for (d in c) {
                                var e = c[d];
                                b[d] = e
                            }
                            return b
                        };
                        if (!e) {
                            "function" === typeof c && (e = c);
                            var m = {}
                        }
                        m = f(f({}, this.options),
                            c);
                        this.totalCallsTimeout < d ? (this.totalCalls = 1, this.totalCallsTimeout = d + 36E5) : this.totalCalls++;
                        if (this.cappingFreeLunch >= this.totalCalls) e(null, Error("VAST call canceled \ufffd\ufffd\ufffd FreeLunch capping not reached yet " + this.totalCalls + "/" + this.cappingFreeLunch));
                        else {
                            c = d - this.lastSuccessfullAd;
                            if (0 > c) this.lastSuccessfullAd = 0;
                            else if (c < this.cappingMinimumTimeInterval) {
                                e(null, Error("VAST call canceled \ufffd\ufffd\ufffd (" + this.cappingMinimumTimeInterval + ")ms minimum interval reached"));
                                return
                            }
                            return l.parse(b,
                                m,
                                function(b) {
                                    return function(b, c) {
                                        return e(b, c)
                                    }
                                }(this))
                        }
                    };
                    (function() {
                        var d = f.storage;
                        var c = Object.defineProperty;
                        ["lastSuccessfullAd", "totalCalls", "totalCallsTimeout"].forEach(function(e) {
                            c(b, e, {
                                get: function() {
                                    return d.getItem(e)
                                },
                                set: function(b) {
                                    return d.setItem(e, b)
                                },
                                configurable: !1,
                                enumerable: !0
                            })
                        });
                        null == b.lastSuccessfullAd && (b.lastSuccessfullAd = 0);
                        null == b.totalCalls && (b.totalCalls = 0);
                        null == b.totalCallsTimeout && (b.totalCallsTimeout = 0)
                    })();
                    return b
                }();
                e.exports = b
            }, {
                "./parser": 12,
                "./util": 18
            }],
            4: [function(b, e, g) {
                b = function() {
                    return function() {
                        this.id = null;
                        this.height = this.width = 0;
                        this.companionClickThroughURLTemplate = this.iframeResource = this.htmlResource = this.staticResource = this.type = null;
                        this.trackingEvents = {}
                    }
                }();
                e.exports = b
            }, {}],
            5: [function(b, e, g) {
                var l = function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        for (var e in c) f.call(c, e) && (b[e] = c[e]);
                        d.prototype = c.prototype;
                        b.prototype = new d;
                        b.__super__ = c.prototype;
                        return b
                    },
                    f = {}.hasOwnProperty;
                var m = function() {
                    return function() {
                        this.trackingEvents = {}
                    }
                }();
                b = function(b) {
                    function c() {
                        c.__super__.constructor.apply(this, arguments);
                        this.type = "linear";
                        this.duration = 0;
                        this.skipDelay = null;
                        this.mediaFiles = [];
                        this.videoClickThroughURLTemplate = null;
                        this.videoClickTrackingURLTemplates = [];
                        this.videoCustomClickURLTemplates = [];
                        this.adParameters = null;
                        this.icons = []
                    }
                    l(c, b);
                    return c
                }(m);
                g = function(b) {
                    function c() {
                        c.__super__.constructor.apply(this, arguments);
                        this.type = "nonlinear";
                        this.variations = []
                    }
                    l(c, b);
                    return c
                }(m);
                m = function(b) {
                    function c() {
                        this.type = "companion";
                        this.variations = []
                    }
                    l(c, b);
                    return c
                }(m);
                e.exports = {
                    VASTCreativeLinear: b,
                    VASTCreativeNonLinear: g,
                    VASTCreativeCompanion: m
                }
            }, {}],
            6: [function(b, e, g) {
                b = function() {
                    return function() {
                        this.attributes = {};
                        this.children = []
                    }
                }();
                e.exports = b
            }, {}],
            7: [function(b, e, g) {
                b = function() {
                    return function() {
                        this.value = this.name = null;
                        this.attributes = {}
                    }
                }();
                e.exports = b
            }, {}],
            8: [function(b, e, g) {
                b = function() {
                    return function() {
                        this.program = null;
                        this.yPosition = this.xPosition = this.width = this.height = 0;
                        this.offset = this.apiFramework =
                            null;
                        this.duration = 0;
                        this.iconClickThroughURLTemplate = this.iframeResource = this.htmlResource = this.staticResource = this.type = null;
                        this.iconClickTrackingURLTemplates = [];
                        this.iconViewTrackingURLTemplate = null
                    }
                }();
                e.exports = b
            }, {}],
            9: [function(b, e, g) {
                e.exports = {
                    client: b("./client"),
                    tracker: b("./tracker"),
                    iconTracker: b("./iconTracker"),
                    parser: b("./parser"),
                    util: b("./util")
                }
            }, {
                "./client": 3,
                "./parser": 12,
                "./tracker": 14,
                "./iconTracker": 19,
                "./util": 18
            }],
            10: [function(b, e, g) {
                b = function() {
                    return function() {
                        this.fileURL =
                            this.id = null;
                        this.deliveryType = "progressive";
                        this.codec = this.mimeType = null;
                        this.height = this.width = this.maxBitrate = this.minBitrate = this.bitrate = 0;
                        this.maintainAspectRatio = this.scalable = this.apiFramework = null
                    }
                }();
                e.exports = b
            }, {}],
            11: [function(b, e, g) {
                b = function() {
                    return function() {
                        this.id = null;
                        this.height = this.width = 0;
                        this.expandedHeight = this.expandedWidth = null;
                        this.minSuggestedDuration = 0;
                        this.apiFramework = "static";
                        this.nonlinearClickThroughURLTemplate = this.iframeResource = this.htmlResource = this.staticResource =
                            this.type = null;
                        this.nonlinearClickTrackingURLTemplates = []
                    }
                }();
                e.exports = b
            }, {}],
            12: [function(b, e, g) {
                var l = [].indexOf || function(b) {
                    for (var c = 0, d = this.length; c < d; c++)
                        if (c in this && this[c] === b) return c;
                    return -1
                };
                var f = b("./urlhandler");
                var m = b("./response");
                var d = b("./ad");
                var c = b("./extension");
                var n = b("./extensionchild");
                var t = b("./util");
                var p = b("./creative").VASTCreativeLinear;
                var q = b("./creative").VASTCreativeCompanion;
                var v = b("./creative").VASTCreativeNonLinear;
                var x = b("./mediafile");
                var u = b("./icon");
                var y = b("./companionad");
                var C = b("./nonlinear");
                var O = b("events").EventEmitter;
                b = function() {
                    function b() {}
                    var e = [];
                    b.addURLTemplateFilter = function(b) {
                        "function" === typeof b && e.push(b)
                    };
                    b.removeURLTemplateFilter = function() {
                        return e.pop()
                    };
                    b.countURLTemplateFilters = function() {
                        return e.length
                    };
                    b.clearUrlTemplateFilters = function() {
                        return e = []
                    };
                    b.parse = function(b, c, d) {
                        d || ("function" === typeof c && (d = c), c = {});
                        return this._parse(b, null, c, function(b, c) {
                            return d(c, b)
                        })
                    };
                    b.vent = new O;
                    b.track = function(b, c) {
                        this.vent.emit("VAST-error",
                            c);
                        c && 302 === c.ERRORCODE && A.log("vast errorCode 302 Wrapper limit reached");
                        return t.track(b, c)
                    };
                    b.on = function(b, c) {
                        return this.vent.on(b, c)
                    };
                    b.once = function(b, c) {
                        return this.vent.once(b, c)
                    };
                    b._parse = function(b, c, d, g) {
                        function p(b, c) {
                            b.ads = b.ads || [];
                            b._forEvents = [];
                            c.ads.forEach(function(c) {
                                -1 === b.ads.indexOf(c) && (b.ads.push(c), b._forEvents.push(c));
                                b._forEvents = b._forEvents.concat(c._forEvents || []);
                                c._forEvents = []
                            });
                            return b._forEvents
                        }
                        var n;
                        g || ("function" === typeof d && (g = d), d = {});
                        var t = 0;
                        for (n = e.length; t <
                            n; t++) {
                            var q = e[t];
                            b = q(b)
                        }
                        null == c && (c = []);
                        c.push(b);
                        return f.get(b, d, function(e) {
                            return function(f, n) {
                                var t;
                                if (null != f) return g(f);
                                var q = new m;
                                if (null == (null != n ? n.documentElement : void 0) || "VAST" !== n.documentElement.nodeName) return g(Error("Invalid VAST XMLDocument"));
                                var v = n.documentElement.childNodes;
                                var u = 0;
                                for (t = v.length; u < t; u++) {
                                    var B = v[u];
                                    "Error" === B.nodeName && q.errorURLTemplates.push(e.parseNodeText(B))
                                }
                                v = n.documentElement.childNodes;
                                u = 0;
                                for (t = v.length; u < t; u++)
                                    if (B = v[u], "Ad" === B.nodeName) {
                                        var x =
                                            e.parseAdElement(B);
                                        null != x ? q.ads.push(x) : e.track(q.errorURLTemplates, {
                                            ERRORCODE: 101
                                        })
                                    }
                                var G = function(b) {
                                    var c;
                                    null == b && (b = !1);
                                    if (q) {
                                        var d = !0;
                                        var f = q.ads;
                                        var l = 0;
                                        for (c = f.length; l < c; l++) {
                                            x = f[l];
                                            if (null != x.nextWrapperURL) return;
                                            0 < x.creatives.length && (d = !1)
                                        }
                                        d && (b || e.track(q.errorURLTemplates, {
                                            ERRORCODE: 303
                                        }));
                                        0 === q.ads.length && (q = null);
                                        return g(null, q)
                                    }
                                };
                                for (B = q.ads.length; B--;) x = q.ads[B], null != x.nextWrapperURL && function(f) {
                                    var g;
                                    if (5 <= c.length || (g = f.nextWrapperURL, 0 <= l.call(c, g))) e.track(f.errorURLTemplates, {
                                        ERRORCODE: 302
                                    }), q.ads.splice(q.ads.indexOf(f), 1), G();
                                    else return 0 === f.nextWrapperURL.indexOf("//") ? (g = location.protocol, f.nextWrapperURL = "" + g + f.nextWrapperURL) : -1 === f.nextWrapperURL.indexOf("://") && (g = b.slice(0, b.lastIndexOf("/")), f.nextWrapperURL = g + "/" + f.nextWrapperURL), e._parse(f.nextWrapperURL, c, d, function(b, c) {
                                        var d, g, l, m;
                                        var n = !1;
                                        if (null != b) e.track(f.errorURLTemplates, {
                                            ERRORCODE: 301
                                        }), q.ads.splice(q.ads.indexOf(f), 1), n = !0;
                                        else if (null == c) e.track(f.errorURLTemplates, {
                                            ERRORCODE: 303
                                        }), q.ads.splice(q.ads.indexOf(f),
                                            1), n = !0;
                                        else {
                                            q.errorURLTemplates = q.errorURLTemplates.concat(c.errorURLTemplates);
                                            var t = p(f, c);
                                            var v = 0;
                                            for (g = t.length; v < g; v++) {
                                                var u = t[v];
                                                u.errorURLTemplates = f.errorURLTemplates.concat(u.errorURLTemplates);
                                                u.impressionURLTemplates = f.impressionURLTemplates.concat(u.impressionURLTemplates);
                                                u.extensions = f.extensions.concat(u.extensions);
                                                if (null != f.trackingEvents) {
                                                    var B = u.creatives;
                                                    var x = 0;
                                                    for (l = B.length; x < l; x++) {
                                                        var w = B[x];
                                                        if (null != f.trackingEvents[w.type]) {
                                                            var J = Object.keys(f.trackingEvents[w.type]);
                                                            var D = 0;
                                                            for (m = J.length; D < m; D++) {
                                                                var y = J[D];
                                                                (d = w.trackingEvents)[y] || (d[y] = []);
                                                                w.trackingEvents[y] = w.trackingEvents[y].concat(f.trackingEvents[w.type][y])
                                                            }
                                                        }
                                                    }
                                                }
                                                if (null != f.videoClickTrackingURLTemplates)
                                                    for (m = u.creatives, l = 0, y = m.length; l < y; l++) w = m[l], "linear" === w.type && (w.videoClickTrackingURLTemplates = w.videoClickTrackingURLTemplates.concat(f.videoClickTrackingURLTemplates));
                                                if (null != f.videoCustomClickURLTemplates)
                                                    for (m = u.creatives, l = 0, y = m.length; l < y; l++) w = m[l], "linear" === w.type && (w.videoCustomClickURLTemplates =
                                                        w.videoCustomClickURLTemplates.concat(f.videoCustomClickURLTemplates));
                                                if (null != f.videoClickThroughURLTemplate)
                                                    for (l = u.creatives, y = 0, u = l.length; y < u; y++) w = l[y], "linear" === w.type && null == w.videoClickThroughURLTemplate && (w.videoClickThroughURLTemplate = f.videoClickThroughURLTemplate)
                                            }
                                        }
                                        delete f.nextWrapperURL;
                                        return G(n)
                                    })
                                }(x);
                                return G()
                            }
                        }(this))
                    };
                    b.childByName = function(b, c) {
                        var d;
                        var e = b.childNodes;
                        var f = 0;
                        for (d = e.length; f < d; f++) {
                            var g = e[f];
                            if (g.nodeName === c) return g
                        }
                    };
                    b.childsByName = function(b, c) {
                        var d;
                        var e = [];
                        var f = b.childNodes;
                        var g = 0;
                        for (d = f.length; g < d; g++) {
                            var l = f[g];
                            l.nodeName === c && e.push(l)
                        }
                        return e
                    };
                    b.parseAdElement = function(b) {
                        var c, d;
                        var e = b.childNodes;
                        var f = 0;
                        for (c = e.length; f < c; f++) {
                            var g = e[f];
                            if ("Wrapper" === (d = g.nodeName) || "InLine" === d) {
                                this.copyNodeAttribute("id", b, g);
                                this.copyNodeAttribute("sequence", b, g);
                                if ("Wrapper" === g.nodeName) return this.parseWrapperElement(g);
                                if ("InLine" === g.nodeName) return this.parseInLineElement(g)
                            }
                        }
                    };
                    b.parseWrapperElement = function(b) {
                        var c = this.parseInLineElement(b);
                        var d = this.childByName(b, "VASTAdTagURI");
                        null != d ? c.nextWrapperURL = this.parseNodeText(d) : (d = this.childByName(b, "VASTAdTagURL"), null != d && (c.nextWrapperURL = this.parseNodeText(this.childByName(d, "URL"))));
                        var e = c.creatives;
                        b = 0;
                        for (d = e.length; b < d; b++) {
                            var f = e[b];
                            "linear" !== f.type && "nonlinear" !== f.type || null == f || (null != f.trackingEvents && (c.trackingEvents || (c.trackingEvents = {}), c.trackingEvents[f.type] = f.trackingEvents), null != f.videoClickTrackingURLTemplates && (c.videoClickTrackingURLTemplates = f.videoClickTrackingURLTemplates),
                                null != f.videoClickThroughURLTemplate && (c.videoClickThroughURLTemplate = f.videoClickThroughURLTemplate), null != f.videoCustomClickURLTemplates && (c.videoCustomClickURLTemplates = f.videoCustomClickURLTemplates))
                        }
                        if (null != c.nextWrapperURL) return c
                    };
                    b.parseInLineElement = function(b) {
                        var c, e, f;
                        var g = new d;
                        g.id = b.getAttribute("id") || null;
                        g.sequence = b.getAttribute("sequence") || null;
                        var l = b.childNodes;
                        b = 0;
                        for (c = l.length; b < c; b++) {
                            var m = l[b];
                            switch (m.nodeName) {
                                case "Error":
                                    g.errorURLTemplates.push(this.parseNodeText(m));
                                    break;
                                case "Impression":
                                    g.impressionURLTemplates.push(this.parseNodeText(m));
                                    break;
                                case "Creatives":
                                    var n = this.childsByName(m, "Creative");
                                    m = 0;
                                    for (e = n.length; m < e; m++) {
                                        var p = n[m];
                                        var q = p.childNodes;
                                        p = 0;
                                        for (f = q.length; p < f; p++) {
                                            var t = q[p];
                                            switch (t.nodeName) {
                                                case "Linear":
                                                    (t = this.parseCreativeLinearElement(t)) && g.creatives.push(t);
                                                    break;
                                                case "NonLinearAds":
                                                    (t = this.parseNonLinear(t)) && g.creatives.push(t);
                                                    break;
                                                case "CompanionAds":
                                                    (t = this.parseCompanionAd(t)) && g.creatives.push(t)
                                            }
                                        }
                                    }
                                    break;
                                case "Extensions":
                                    this.parseExtension(g.extensions,
                                        this.childsByName(m, "Extension"));
                                    break;
                                case "AdSystem":
                                    g.system = {
                                        value: this.parseNodeText(m),
                                        version: m.getAttribute("version") || null
                                    };
                                    break;
                                case "AdTitle":
                                    g.title = this.parseNodeText(m);
                                    break;
                                case "Description":
                                    g.description = this.parseNodeText(m);
                                    break;
                                case "Advertiser":
                                    g.advertiser = this.parseNodeText(m);
                                    break;
                                case "Pricing":
                                    g.pricing = {
                                        value: this.parseNodeText(m),
                                        model: m.getAttribute("model") || null,
                                        currency: m.getAttribute("currency") || null
                                    };
                                    break;
                                case "Survey":
                                    g.survey = this.parseNodeText(m)
                            }
                        }
                        return g
                    };
                    b.parseExtension = function(b, d) {
                        var e, f, g;
                        var l = [];
                        var m = 0;
                        for (e = d.length; m < e; m++) {
                            var p = d[m];
                            var q = new c;
                            if (p.attributes) {
                                var t = p.attributes;
                                var u = 0;
                                for (f = t.length; u < f; u++) {
                                    var v = t[u];
                                    q.attributes[v.nodeName] = v.nodeValue
                                }
                            }
                            f = p.childNodes;
                            v = 0;
                            for (u = f.length; v < u; v++) {
                                t = f[v];
                                var x = this.parseNodeText(t);
                                if ("#comment" !== t.nodeName && "" !== x) {
                                    p = new n;
                                    p.name = t.nodeName;
                                    p.value = x;
                                    if (t.attributes) {
                                        var w = t.attributes;
                                        x = 0;
                                        for (g = w.length; x < g; x++) t = w[x], p.attributes[t.nodeName] = t.nodeValue
                                    }
                                    q.children.push(p)
                                }
                            }
                            l.push(b.push(q))
                        }
                        return l
                    };
                    b.parseCreativeLinearElement = function(b) {
                        var c, d;
                        var e = new p;
                        e.sequence = b.parentNode.getAttribute("sequence") || null;
                        e.duration = this.parseDuration(this.parseNodeText(this.childByName(b, "Duration")));
                        if (-1 === e.duration && "Wrapper" !== b.parentNode.parentNode.parentNode.nodeName) return null;
                        var f = b.getAttribute("skipoffset");
                        null == f ? e.skipDelay = null : "%" === f.charAt(f.length - 1) ? (f = parseInt(f, 10), e.skipDelay = f / 100 * e.duration) : e.skipDelay = this.parseDuration(f);
                        var g = this.childByName(b, "VideoClicks");
                        if (null !=
                            g) {
                            e.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(g, "ClickThrough"));
                            var l = this.childsByName(g, "ClickTracking");
                            var m = 0;
                            for (d = l.length; m < d; m++) f = l[m], e.videoClickTrackingURLTemplates.push(this.parseNodeText(f));
                            l = this.childsByName(g, "CustomClick");
                            m = 0;
                            for (d = l.length; m < d; m++) f = l[m], e.videoCustomClickURLTemplates.push(this.parseNodeText(f))
                        }
                        f = this.childByName(b, "AdParameters");
                        null != f && (e.adParameters = this.parseNodeText(f));
                        d = this.childsByName(b, "TrackingEvents");
                        f = 0;
                        for (m = d.length; f <
                            m; f++) {
                            l = d[f];
                            var n = this.childsByName(l, "Tracking");
                            l = 0;
                            for (g = n.length; l < g; l++) {
                                var t = n[l];
                                var q = t.getAttribute("event");
                                var v = this.parseNodeText(t);
                                if (null != q && null != v) {
                                    if ("progress" === q) {
                                        q = t.getAttribute("offset");
                                        if (!q) continue;
                                        q = "%" === q.charAt(q.length - 1) ? "progress-" + q : "progress-" + Math.round(this.parseDuration(q))
                                    }
                                    null == (c = e.trackingEvents)[q] && (c[q] = []);
                                    e.trackingEvents[q].push(v)
                                }
                            }
                        }
                        m = this.childsByName(b, "MediaFiles");
                        f = 0;
                        for (c = m.length; f < c; f++)
                            for (d = m[f], n = this.childsByName(d, "MediaFile"), g =
                                0, d = n.length; g < d; g++) v = n[g], l = new x, l.id = v.getAttribute("id"), l.fileURL = this.parseNodeText(v), l.deliveryType = v.getAttribute("delivery"), l.codec = v.getAttribute("codec"), l.mimeType = v.getAttribute("type"), l.apiFramework = v.getAttribute("apiFramework"), l.bitrate = parseInt(v.getAttribute("bitrate") || 0), l.minBitrate = parseInt(v.getAttribute("minBitrate") || 0), l.maxBitrate = parseInt(v.getAttribute("maxBitrate") || 0), l.width = parseInt(v.getAttribute("width") || 0), l.height = parseInt(v.getAttribute("height") || 0), (q =
                                v.getAttribute("scalable")) && "string" === typeof q && (q = q.toLowerCase(), "true" === q ? l.scalable = !0 : "false" === q && (l.scalable = !1)), (v = v.getAttribute("maintainAspectRatio")) && "string" === typeof v && (v = v.toLowerCase(), "true" === v ? l.maintainAspectRatio = !0 : "false" === v && (l.maintainAspectRatio = !1)), e.mediaFiles.push(l);
                        b = this.childByName(b, "Icons");
                        if (null != b)
                            for (d = this.childsByName(b, "Icon"), m = 0, f = d.length; m < f; m++) {
                                c = d[m];
                                b = new u;
                                b.program = c.getAttribute("program");
                                b.height = parseInt(c.getAttribute("height") || 0);
                                b.width = parseInt(c.getAttribute("width") || 0);
                                b.xPosition = this.parseXPosition(c.getAttribute("xPosition"));
                                b.yPosition = this.parseYPosition(c.getAttribute("yPosition"));
                                b.apiFramework = c.getAttribute("apiFramework");
                                b.offset = this.parseDuration(c.getAttribute("offset"));
                                b.duration = this.parseDuration(c.getAttribute("duration"));
                                v = this.childsByName(c, "HTMLResource");
                                n = 0;
                                for (g = v.length; n < g; n++) l = v[n], b.type = l.getAttribute("creativeType") || "text/html", b.htmlResource = this.parseNodeText(l);
                                v = this.childsByName(c,
                                    "IFrameResource");
                                n = 0;
                                for (g = v.length; n < g; n++) l = v[n], b.type = l.getAttribute("creativeType") || 0, b.iframeResource = this.parseNodeText(l);
                                n = this.childsByName(c, "StaticResource");
                                g = 0;
                                for (l = n.length; g < l; g++) v = n[g], b.type = v.getAttribute("creativeType") || 0, b.staticResource = this.parseNodeText(v);
                                l = this.childByName(c, "IconClicks");
                                if (null != l)
                                    for (b.iconClickThroughURLTemplate = this.parseNodeText(this.childByName(l, "IconClickThrough")), n = this.childsByName(l, "IconClickTracking"), v = 0, g = n.length; v < g; v++) l = n[v], b.iconClickTrackingURLTemplates.push(this.parseNodeText(l));
                                b.iconViewTrackingURLTemplate = this.parseNodeText(this.childByName(c, "IconViewTracking"));
                                e.icons.push(b)
                            }
                        return e
                    };
                    b.parseNonLinear = function(b) {
                        var c, d, e;
                        var f = new v;
                        var g = this.childsByName(b, "TrackingEvents");
                        var l = 0;
                        for (d = g.length; l < d; l++) {
                            var m = g[l];
                            var n = this.childsByName(m, "Tracking");
                            var p = 0;
                            for (e = n.length; p < e; p++) {
                                var q = n[p];
                                m = q.getAttribute("event");
                                q = this.parseNodeText(q);
                                null != m && null != q && (null == (c = f.trackingEvents)[m] && (c[m] = []), f.trackingEvents[m].push(q))
                            }
                        }
                        d = this.childsByName(b, "NonLinear");
                        b = 0;
                        for (c = d.length; b < c; b++) {
                            g = d[b];
                            l = new C;
                            l.id = g.getAttribute("id") || null;
                            l.width = g.getAttribute("width");
                            l.height = g.getAttribute("height");
                            l.expandedWidth = g.getAttribute("expandedWidth");
                            l.expandedHeight = g.getAttribute("expandedHeight");
                            l.minSuggestedDuration = this.parseDuration(g.getAttribute("minSuggestedDuration"));
                            l.apiFramework = g.getAttribute("apiFramework");
                            n = this.childsByName(g, "HTMLResource");
                            p = 0;
                            for (e = n.length; p < e; p++) m = n[p], l.type = m.getAttribute("creativeType") || "text/html", l.htmlResource =
                                this.parseNodeText(m);
                            n = this.childsByName(g, "IFrameResource");
                            e = 0;
                            for (p = n.length; e < p; e++) m = n[e], l.type = m.getAttribute("creativeType") || 0, l.iframeResource = this.parseNodeText(m);
                            e = this.childsByName(g, "StaticResource");
                            p = 0;
                            for (m = e.length; p < m; p++) n = e[p], l.type = n.getAttribute("creativeType") || 0, l.staticResource = this.parseNodeText(n);
                            l.nonlinearClickThroughURLTemplate = this.parseNodeText(this.childByName(g, "NonLinearClickThrough"));
                            l.nonlinearClickTrackingURLTemplates = [];
                            e = this.childsByName(g, "NonLinearClickTracking");
                            m = 0;
                            for (p = e.length; m < p; m++) g = e[m], l.nonlinearClickTrackingURLTemplates.push(this.parseNodeText(g));
                            f.variations.push(l)
                        }
                        return f
                    };
                    b.parseCompanionAd = function(b) {
                        var c, d, e, f;
                        var g = new q;
                        var l = this.childsByName(b, "Companion");
                        var m = 0;
                        for (d = l.length; m < d; m++) {
                            var n = l[m];
                            b = new y;
                            b.id = n.getAttribute("id") || null;
                            b.width = n.getAttribute("width");
                            b.height = n.getAttribute("height");
                            b.companionClickTrackingURLTemplates = [];
                            var p = this.childsByName(n, "HTMLResource");
                            var t = 0;
                            for (e = p.length; t < e; t++) {
                                var v = p[t];
                                b.type =
                                    v.getAttribute("creativeType") || "text/html";
                                b.htmlResource = this.parseNodeText(v)
                            }
                            p = this.childsByName(n, "IFrameResource");
                            t = 0;
                            for (e = p.length; t < e; t++) v = p[t], b.type = v.getAttribute("creativeType") || 0, b.iframeResource = this.parseNodeText(v);
                            e = this.childsByName(n, "StaticResource");
                            v = 0;
                            for (t = e.length; v < t; v++) p = e[v], b.type = p.getAttribute("creativeType") || 0, b.staticResource = this.parseNodeText(p);
                            e = this.childsByName(n, "TrackingEvents");
                            t = 0;
                            for (v = e.length; t < v; t++) {
                                p = e[t];
                                var u = this.childsByName(p, "Tracking");
                                var x = 0;
                                for (f = u.length; x < f; x++) {
                                    var w = u[x];
                                    p = w.getAttribute("event");
                                    w = this.parseNodeText(w);
                                    null != p && null != w && (null == (c = b.trackingEvents)[p] && (c[p] = []), b.trackingEvents[p].push(w))
                                }
                            }
                            p = this.childsByName(n, "CompanionClickTracking");
                            e = 0;
                            for (t = p.length; e < t; e++) v = p[e], b.companionClickTrackingURLTemplates.push(this.parseNodeText(v));
                            b.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(n, "CompanionClickThrough"));
                            b.companionClickTrackingURLTemplate = this.parseNodeText(this.childByName(n,
                                "CompanionClickTracking"));
                            g.variations.push(b)
                        }
                        return g
                    };
                    b.parseDuration = function(b) {
                        if (null == b) return -1;
                        var c = b.split(":");
                        if (3 !== c.length) return -1;
                        var d = c[2].split(".");
                        b = parseInt(d[0]);
                        2 === d.length && (b += parseFloat("0." + d[1]));
                        d = parseInt(60 * c[1]);
                        c = parseInt(3600 * c[0]);
                        return isNaN(c || isNaN(d || isNaN(b || 3600 < d || 60 < b))) ? -1 : c + d + b
                    };
                    b.parseXPosition = function(b) {
                        return "left" === b || "right" === b ? b : parseInt(b || 0)
                    };
                    b.parseYPosition = function(b) {
                        return "top" === b || "bottom" === b ? b : parseInt(b || 0)
                    };
                    b.parseNodeText =
                        function(b) {
                            return b && (b.textContent || b.text || "").trim()
                        };
                    b.copyNodeAttribute = function(b, c, d) {
                        if (c = c.getAttribute(b)) return d.setAttribute(b, c)
                    };
                    return b
                }();
                e.exports = b
            }, {
                "./ad": 2,
                "./companionad": 4,
                "./creative": 5,
                "./extension": 6,
                "./extensionchild": 7,
                "./icon": 8,
                "./mediafile": 10,
                "./nonlinear": 11,
                "./response": 13,
                "./urlhandler": 15,
                "./util": 18,
                events: 1
            }],
            13: [function(b, e, g) {
                b = function() {
                    return function() {
                        this.ads = [];
                        this.errorURLTemplates = []
                    }
                }();
                e.exports = b
            }, {}],
            19: [function(b, e, g) {
                var l = function(b, c) {
                        function d() {
                            this.constructor =
                                b
                        }
                        for (var e in c) f.call(c, e) && (b[e] = c[e]);
                        d.prototype = c.prototype;
                        b.prototype = new d;
                        b.__super__ = c.prototype;
                        return b
                    },
                    f = {}.hasOwnProperty;
                var m = b("./util");
                b = function(b) {
                    function c(b, c) {
                        this.ad = b;
                        this.icon = c;
                        this.skipable = this.impressed = !1;
                        this.skipDelayDefault = -1;
                        this.skipDelay = c.skipDelay;
                        this.linear = !0;
                        this.clickThroughURLTemplate = c.iconClickThroughURLTemplate;
                        this.clickTrackingURLTemplates = c.iconClickTrackingURLTemplates;
                        this.iconViewed = !1;
                        this.iconViewTrackingURLTemplate = c.iconViewTrackingURLTemplate
                    }
                    l(c, b);
                    c.prototype.load = function() {
                        this.iconViewed || (this.iconViewed = !0, void 0 !== this.iconViewTrackingURLTemplate && this.trackURLs([this.iconViewTrackingURLTemplate]))
                    };
                    c.prototype.trackURLs = function(b, c) {
                        null == c && (c = {});
                        this.linear && (c.CONTENTPLAYHEAD = this.progressFormated());
                        return m.track(b, c)
                    };
                    return c
                }(b("./tracker"));
                e.exports = b
            }, {
                "./tracker": 14,
                "./creative": 5,
                "./util": 18
            }],
            14: [function(b, e, g) {
                var l = function(b, c) {
                        function d() {
                            this.constructor = b
                        }
                        for (var e in c) f.call(c, e) && (b[e] = c[e]);
                        d.prototype =
                            c.prototype;
                        b.prototype = new d;
                        b.__super__ = c.prototype;
                        return b
                    },
                    f = {}.hasOwnProperty;
                var m = b("./client");
                var d = b("./util");
                var c = b("./creative").VASTCreativeLinear;
                var n = b("./creative").VASTCreativeNonLinear;
                b = function(b) {
                    function e(b, d) {
                        var e;
                        this.ad = b;
                        this.creative = d;
                        this.skipable = this.impressed = this.muted = !1;
                        this.skipDelayDefault = -1;
                        this.trackingEvents = {};
                        this.emitAlwaysEvents = "creativeView start firstQuartile midpoint thirdQuartile complete resume pause rewind skip closeLinear close".split(" ");
                        var f = this.creative ? this.creative.trackingEvents : [];
                        for (e in f) {
                            var g = f[e];
                            this.trackingEvents[e] = g.slice(0)
                        }
                        this.skipDelay = -1;
                        this.linear = !1;
                        this.creative instanceof c && (this.setDuration(this.creative.duration), this.skipDelay = this.creative.skipDelay || this.skipDelay, this.linear = !0, this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate, this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates);
                        this.creative instanceof n && (this.nonlinear = !0);
                        this.on("start", function() {
                            m.lastSuccessfullAd = +new Date
                        })
                    }
                    l(e, b);
                    e.prototype.setDuration = function(b) {
                        this.assetDuration = b;
                        return this.quartiles = {
                            firstQuartile: Math.round(25 * this.assetDuration) / 100,
                            midpoint: Math.round(50 * this.assetDuration) / 100,
                            thirdQuartile: Math.round(75 * this.assetDuration) / 100
                        }
                    };
                    e.prototype.setProgress = function(b) {
                        var c = null === this.skipDelay ? this.skipDelayDefault : this.skipDelay; - 1 === c || this.skipable || (c > b ? this.emit("skip-countdown", c - b) : (this.skipable = !0, this.emit("skip-countdown", 0)));
                        if (this.linear && 0 < this.assetDuration) {
                            c = [];
                            if (0 < b) {
                                c.push("start");
                                var d = Math.round(b / this.assetDuration * 100);
                                c.push("progress-" + d + "%");
                                c.push("progress-" + Math.round(b));
                                d = this.quartiles;
                                for (f in d) {
                                    var e = d[f];
                                    e <= b && b <= e + 1 && c.push(f)
                                }
                            }
                            d = 0;
                            for (e = c.length; d < e; d++) {
                                var f = c[d];
                                this.track(f, !0)
                            }
                            b < this.progress && this.track("rewind")
                        }
                        return this.progress = b
                    };
                    var f = {
                        0: "start",
                        25: "firstQuartile",
                        50: "midpoint",
                        75: "thirdQuartile",
                        100: "complete"
                    };
                    e.prototype.setProgressPercent = function(b) {
                        (b = f[b + ""]) && this.track(b, !0)
                    };
                    e.prototype.setMuted = function(b) {
                        this.muted !==
                            b && this.track(b ? "mute" : "unmute");
                        return this.muted = b
                    };
                    e.prototype.setPaused = function(b) {
                        this.paused !== b && this.track(b ? "pause" : "resume");
                        return this.paused = b
                    };
                    e.prototype.setFullscreen = function(b) {
                        this.fullscreen !== b && this.track(b ? "fullscreen" : "exitFullscreen");
                        return this.fullscreen = b
                    };
                    e.prototype.setExpand = function(b) {
                        this.expanded !== b && this.track(b ? "expand" : "collapse");
                        return this.expanded = b
                    };
                    e.prototype.setSkipDelay = function(b) {
                        if ("number" === typeof b) return this.skipDelay = b
                    };
                    e.prototype.load = function() {
                        if (!this.impressed) return this.impressed = !0, void 0 !== this.ad.impressionURLTemplates && this.trackURLs(this.ad.impressionURLTemplates), this.track("creativeView")
                    };
                    e.prototype.errorWithCode = function(b) {
                        return void 0 !== this.ad.errorURLTemplates ? this.trackURLs(this.ad.errorURLTemplates, {
                            ERRORCODE: b
                        }) : null
                    };
                    e.prototype.complete = function() {
                        return this.track("complete")
                    };
                    e.prototype.close = function() {
                        return this.track(this.linear ? "closeLinear" : "close")
                    };
                    e.prototype.stop = function() {};
                    e.prototype.skip = function() {
                        this.track("skip");
                        return this.trackingEvents = []
                    };
                    e.prototype.click = function() {
                        var b, c;
                        null != (b = this.clickTrackingURLTemplates) && b.length && this.trackURLs(this.clickTrackingURLTemplates);
                        if (null != this.clickThroughURLTemplate) return this.linear && (c = {
                            CONTENTPLAYHEAD: this.progressFormated()
                        }), b = d.resolveURLTemplates([this.clickThroughURLTemplate], c)[0], this.emit("clickthrough", b)
                    };
                    e.prototype.clickTrackingURL = function(b) {
                        var c;
                        null != b && b.length && this.trackURLs(b);
                        if (null != this.clickThroughURLTemplate) return this.linear && (c = {
                                CONTENTPLAYHEAD: this.progressFormated()
                            }),
                            b = d.resolveURLTemplates([this.clickThroughURLTemplate], c)[0], this.emit("clickthrough", b)
                    };
                    e.prototype.track = function(b, c) {
                        null == c && (c = !1);
                        "closeLinear" === b && null == this.trackingEvents[b] && null != this.trackingEvents.close && (b = "close");
                        var d = this.trackingEvents[b];
                        var e = this.emitAlwaysEvents.indexOf(b);
                        null != d ? (this.emit(b, ""), this.trackURLs(d)) : -1 !== e && this.emit(b, "");
                        !0 === c && (delete this.trackingEvents[b], -1 < e && this.emitAlwaysEvents.splice(e, 1))
                    };
                    e.prototype.trackURLs = function(b, c) {
                        var e;
                        null == c && (c = {});
                        this.linear && (null != (null != (e = this.creative.mediaFiles[0]) ? e.fileURL : void 0) && (c.ASSETURI = this.creative.mediaFiles[0].fileURL), c.CONTENTPLAYHEAD = this.progressFormated());
                        return d.track(b, c)
                    };
                    e.prototype.progressFormated = function() {
                        var b = parseInt(this.progress);
                        var c = b / 3600;
                        2 > c.length && (c = "0" + c);
                        var d = b / 60 % 60;
                        2 > d.length && (d = "0" + d);
                        var e = b % 60;
                        2 > e.length && (e = "0" + d);
                        b = parseInt(100 * (this.progress - b));
                        return c + ":" + d + ":" + e + "." + b
                    };
                    return e
                }(b("events").EventEmitter);
                e.exports = b
            }, {
                "./client": 3,
                "./creative": 5,
                "./util": 18,
                events: 1
            }],
            15: [function(b, e, g) {
                var l = b("./urlhandlers/xmlhttprequest");
                var f = b("./urlhandlers/flash");
                g = function() {
                    function e() {}
                    e.get = function(d, c, e) {
                        var g;
                        e || ("function" === typeof c && (e = c), c = {});
                        return null != c.response ? (d = c.response, delete c.response, e(null, d)) : null != (g = c.urlhandler) && g.supported() ? c.urlhandler.get(d, c, e) : "undefined" === typeof window || null === window ? b("./urlhandlers/node").get(d, c, e) : l.supported() ? l.get(d, c, e) : f.supported() ? f.get(d, c, e) : e(Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"))
                    };
                    return e
                }();
                e.exports = g
            }, {
                "./urlhandlers/flash": 16,
                "./urlhandlers/xmlhttprequest": 17
            }],
            16: [function(b, e, g) {
                b = function() {
                    function b() {}
                    b.xdr = function() {
                        var b;
                        window.XDomainRequest && (b = new XDomainRequest);
                        return b
                    };
                    b.supported = function() {
                        return !!this.xdr()
                    };
                    b.get = function(b, e, d) {
                        var c;
                        if (c = "function" === typeof window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLDOM") : void 0) c.async = !1;
                        else return d(Error("FlashURLHandler: Microsoft.XMLDOM format not supported"));
                        var f = this.xdr();
                        f.open("GET",
                            b);
                        f.timeout = e.timeout || 0;
                        f.withCredentials = e.withCredentials || !1;
                        f.send();
                        f.onprogress = function() {};
                        return f.onload = function() {
                            c.loadXML(f.responseText);
                            return d(null, c)
                        }
                    };
                    return b
                }();
                e.exports = b
            }, {}],
            17: [function(b, e, g) {
                b = function() {
                    function b() {}
                    b.xhr = function() {
                        var b = new window.XMLHttpRequest;
                        if ("withCredentials" in b) return b
                    };
                    b.supported = function() {
                        return !!this.xhr()
                    };
                    b.get = function(b, e, d) {
                        function c(g) {
                            b = ka(b);
                            try {
                                var l = f.xhr();
                                l.open("GET", b);
                                l.timeout = e.timeout || 0;
                                l.withCredentials = g;
                                l.overrideMimeType &&
                                    l.overrideMimeType("text/xml");
                                l.onreadystatechange = function() {
                                    if (4 === l.readyState) return 200 === l.status ? d(null, l.responseXML) : 0 === l.status && g ? c(!1) : d(Error("XHRURLHandler: " + l.statusText))
                                };
                                return l.send()
                            } catch (w) {
                                return d(Error("XHRURLHandler: Unexpected error"))
                            }
                        }
                        var f = this;
                        c(e.withCredentials || !1)
                    };
                    return b
                }();
                e.exports = b
            }, {}],
            18: [function(b, e, g) {
                b = function() {
                    function b() {}
                    b.track = function(b, e) {
                        var d;
                        var c = this.resolveURLTemplates(b, e);
                        var f = [];
                        var g = 0;
                        for (d = c.length; g < d; g++) {
                            var l = c[g];
                            if ("undefined" !==
                                typeof window && null !== window) {
                                var m = new Image;
                                f.push(m.src = ka(l))
                            }
                        }
                        return f
                    };
                    b.resolveURLTemplates = function(b, e) {
                        function d(b) {
                            if (q = c = b) {
                                for (f in e) x = e[f], l = "[" + f + "]", m = "%%" + f + "%%", q = q.replace(l, x), q = q.replace(m, x);
                                u.push(q)
                            }
                        }
                        var c, f, g, l, m, q, x;
                        null == e && (e = {});
                        var u = [];
                        null != e.ASSETURI && (e.ASSETURI = this.encodeURIComponentRFC3986(e.ASSETURI));
                        null != e.CONTENTPLAYHEAD && (e.CONTENTPLAYHEAD = this.encodeURIComponentRFC3986(e.CONTENTPLAYHEAD));
                        null == e.ERRORCODE || /^[0-9]{3}$/.test(e.ERRORCODE) || (e.ERRORCODE =
                            900);
                        e.CACHEBUSTING = this.leftpad(Math.round(1E8 * Math.random()).toString());
                        e.TIMESTAMP = this.encodeURIComponentRFC3986((new Date).toISOString());
                        e.RANDOM = e.random = e.CACHEBUSTING;
                        if (Array.isArray(b)) {
                            var y = 0;
                            for (g = b.length; y < g; y++) d(b[y])
                        } else d(b);
                        return u
                    };
                    b.encodeURIComponentRFC3986 = function(b) {
                        return encodeURIComponent(b).replace(/[!'()*]/g, function(b) {
                            return "%" + b.charCodeAt(0).toString(16)
                        })
                    };
                    b.leftpad = function(b) {
                        if (8 > b.length) {
                            var e;
                            var d = [];
                            var c = 0;
                            for (e = 8 - b.length; 0 <= e ? c < e : c > e; 0 <= e ? c++ : c--) d.push("0");
                            return d.join("") + b
                        }
                        return b
                    };
                    b.storage = function() {
                        try {
                            var b = "undefined" !== typeof window && null !== window ? window.localStorage || window.sessionStorage : null
                        } catch (c) {
                            b = null
                        }
                        var e = function(b) {
                            try {
                                if (b.setItem("__VASTUtil__", "__VASTUtil__"), "__VASTUtil__" !== b.getItem("__VASTUtil__")) return !0
                            } catch (n) {
                                return !0
                            }
                            return !1
                        };
                        if (null == b || e(b)) {
                            var d = {};
                            b = {
                                length: 0,
                                getItem: function(b) {
                                    return d[b]
                                },
                                setItem: function(b, e) {
                                    d[b] = e;
                                    this.length = Object.keys(d).length
                                },
                                removeItem: function(b) {
                                    delete d[b];
                                    this.length = Object.keys(d).length
                                },
                                clear: function() {
                                    d = {};
                                    this.length = 0
                                }
                            }
                        }
                        return b
                    }();
                    return b
                }();
                e.exports = b
            }, {}]
        }, {}, [9])(9)
    });
    (function() {
        [O("odPleyarPrA"), O("olPyerarp"), O("odPleyarPrA")].forEach(function(a) {
            var b = window[a];
            b && b instanceof na || (q.isArray(b) && b.forEach(na.push), window[a] = na)
        })
    })()
})();