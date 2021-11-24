window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 1472803,
    "r": 1.0,
    "rec_value": 1.0,
    "state_change_listen_mode": "automatic",
    "record": false,
    "continuous_capture_enabled": false,
    "recording_capture_keystrokes": false,
    "anonymize_digits": true,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_text": false,
    "suppress_location": false,
    "user_attributes_enabled": false,
    "legal_name": "DK Sp. z o.o.",
    "privacy_policy_url": "https://blogonyourown.com/privacy-policy/",
    "deferred_page_contents": [],
    "record_targeting_rules": [],
    "feedback_widgets": [],
    "heatmaps": [],
    "polls": [],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        },
        "google_optimize": {
            "tag_recordings": true
        }
    },
    "features": ["feedback.widgetV2", "feedback.widget_telemetry", "heatmap.continuous_capture", "recordings.page_content_ws", "settings.billing_v2", "survey.impressions"]
};

! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(o, a, function(t) {
                return e[t]
            }.bind(null, a));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 332)
}({
    332: function(e, t) {
        window.hjBootstrap = window.hjBootstrap || function(e, t, n) {
            var o = ["bot", "google", "headless", "baidu", "bing", "msn", "duckduckbot", "teoma", "slurp", "yandex", "phantomjs", "pingdom", "ahrefsbot"].join("|"),
                a = new RegExp(o, "i"),
                i = window.navigator || {
                    userAgent: "unknown"
                },
                r = i.userAgent ? i.userAgent : "unknown";
            if (a.test(r)) console.warn("Hotjar not launching due to suspicious userAgent:", r);
            else {
                var s = function(e, t, n) {
                    window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(n), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
                };
                s(0, 0, n);
                var d, l, p, _, u = window.document,
                    c = u.head || u.getElementsByTagName("head")[0];
                u.addEventListener && (hj.scriptDomain = e, (d = u.createElement("script")).async = 1, d.src = hj.scriptDomain + t, d.charset = "utf-8", c.appendChild(d), _ = ["iframe#_hjRemoteVarsFrame {", "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;", "}"], (l = u.createElement("style")).type = "text/css", l.styleSheet ? l.styleSheet.cssText = _.join("") : l.appendChild(u.createTextNode(_.join(""))), c.appendChild(l), (p = u.createElement("iframe")).style.cssText = _[1], p.name = "_hjRemoteVarsFrame", p.title = "_hjRemoteVarsFrame", p.id = "_hjRemoteVarsFrame", p.src = "https://" + (window._hjSettings.varsHost || "vars.hotjar.com") + "/box-ad575b5823df97fc9725e14a57070642.html", p.onload = function() {
                    s.varsLoaded = !0, "undefined" != typeof hj && hj.event && hj.event.signal && hj.event.signal("varsLoaded")
                }, s.varsJar = p, "interactive" === u.readyState || "complete" === u.readyState || "loaded" === u.readyState ? h() : u.addEventListener("DOMContentLoaded", h), s.revision = "bd14ac8375b0", window.hjBootstrap = s)
            }

            function h() {
                setTimeout(function() {
                    u.body.appendChild(p)
                }, 50)
            }
        }, window.hjBootstrap("https://script.hotjar.com/", "modules.376dac12c7cbd03331c3.js", "1472803"), window.hjLazyModules = window.hjLazyModules || {
            SURVEY_V2: {
                js: "survey-v2.429c0bf5a09fbd56fc99.js"
            },
            SURVEY_BOOTSTRAPPER: {
                js: "survey-bootstrapper.6af2dd4b6e1c253928fa.js"
            },
            SURVEY_ISOLATED: {
                js: "survey-isolated.d915bf826f0fb304404c.js"
            },
            HEATMAP_SCREENSHOTTER: {
                js: "heatmap-screenshotter.17a68bb1539caf5ced72.js"
            },
            HEATMAP_VIEWER: {
                js: "heatmap-viewer.3a45b318185fc4aff07c.js"
            },
            SURVEY_INVITATION: {
                js: "survey-invitation.170229e6706669489892.js"
            },
            NOTIFICATION: {
                js: "notification.8f945762bf549506ecef.js"
            },
            INCOMING_FEEDBACK: {
                js: "incoming-feedback.03cb64ccbb3d8603cc61.js"
            },
            PREACT_INCOMING_FEEDBACK: {
                js: "preact-incoming-feedback.d1e853229c284f1f38c1.js"
            },
            SENTRY: {
                js: "sentry.2988a68a9024d700bb01.js"
            }
        }
    }
});