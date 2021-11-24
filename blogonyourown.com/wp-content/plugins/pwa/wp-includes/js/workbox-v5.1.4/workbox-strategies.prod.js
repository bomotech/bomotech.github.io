this.workbox = this.workbox || {}, this.workbox.strategies = function(t, e, s, i, n) {
    "use strict";
    try {
        self["workbox:strategies:5.1.4"] && _()
    } catch (t) {}
    const r = {
        cacheWillUpdate: async ({
            response: t
        }) => 200 === t.status || 0 === t.status ? t : null
    };
    return t.CacheFirst = class {
        constructor(t = {}) {
            this.t = e.cacheNames.getRuntimeName(t.cacheName), this.s = t.plugins || [], this.i = t.fetchOptions, this.h = t.matchOptions
        }
        async handle({
            event: t,
            request: e
        }) {
            "string" == typeof e && (e = new Request(e));
            let i, r = await s.cacheWrapper.match({
                cacheName: this.t,
                request: e,
                event: t,
                matchOptions: this.h,
                plugins: this.s
            });
            if (!r) try {
                r = await this.o(e, t)
            } catch (t) {
                i = t
            }
            if (!r) throw new n.WorkboxError("no-response", {
                url: e.url,
                error: i
            });
            return r
        }
        async o(t, e) {
            const n = await i.fetchWrapper.fetch({
                    request: t,
                    event: e,
                    fetchOptions: this.i,
                    plugins: this.s
                }),
                r = n.clone(),
                h = s.cacheWrapper.put({
                    cacheName: this.t,
                    request: t,
                    response: r,
                    event: e,
                    plugins: this.s
                });
            if (e) try {
                e.waitUntil(h)
            } catch (t) {}
            return n
        }
    }, t.CacheOnly = class {
        constructor(t = {}) {
            this.t = e.cacheNames.getRuntimeName(t.cacheName), this.s = t.plugins || [], this.h = t.matchOptions
        }
        async handle({
            event: t,
            request: e
        }) {
            "string" == typeof e && (e = new Request(e));
            const i = await s.cacheWrapper.match({
                cacheName: this.t,
                request: e,
                event: t,
                matchOptions: this.h,
                plugins: this.s
            });
            if (!i) throw new n.WorkboxError("no-response", {
                url: e.url
            });
            return i
        }
    }, t.NetworkFirst = class {
        constructor(t = {}) {
            if (this.t = e.cacheNames.getRuntimeName(t.cacheName), t.plugins) {
                const e = t.plugins.some(t => !!t.cacheWillUpdate);
                this.s = e ? t.plugins : [r, ...t.plugins]
            } else this.s = [r];
            this.u = t.networkTimeoutSeconds || 0, this.i = t.fetchOptions, this.h = t.matchOptions
        }
        async handle({
            event: t,
            request: e
        }) {
            const s = [];
            "string" == typeof e && (e = new Request(e));
            const i = [];
            let r;
            if (this.u) {
                const {
                    id: n,
                    promise: h
                } = this.l({
                    request: e,
                    event: t,
                    logs: s
                });
                r = n, i.push(h)
            }
            const h = this.p({
                timeoutId: r,
                request: e,
                event: t,
                logs: s
            });
            i.push(h);
            let o = await Promise.race(i);
            if (o || (o = await h), !o) throw new n.WorkboxError("no-response", {
                url: e.url
            });
            return o
        }
        l({
            request: t,
            logs: e,
            event: s
        }) {
            let i;
            return {
                promise: new Promise(e => {
                    i = setTimeout(async () => {
                        e(await this.q({
                            request: t,
                            event: s
                        }))
                    }, 1e3 * this.u)
                }),
                id: i
            }
        }
        async p({
            timeoutId: t,
            request: e,
            logs: n,
            event: r
        }) {
            let h, o;
            try {
                o = await i.fetchWrapper.fetch({
                    request: e,
                    event: r,
                    fetchOptions: this.i,
                    plugins: this.s
                })
            } catch (t) {
                h = t
            }
            if (t && clearTimeout(t), h || !o) o = await this.q({
                request: e,
                event: r
            });
            else {
                const t = o.clone(),
                    i = s.cacheWrapper.put({
                        cacheName: this.t,
                        request: e,
                        response: t,
                        event: r,
                        plugins: this.s
                    });
                if (r) try {
                    r.waitUntil(i)
                } catch (t) {}
            }
            return o
        }
        q({
            event: t,
            request: e
        }) {
            return s.cacheWrapper.match({
                cacheName: this.t,
                request: e,
                event: t,
                matchOptions: this.h,
                plugins: this.s
            })
        }
    }, t.NetworkOnly = class {
        constructor(t = {}) {
            this.s = t.plugins || [], this.i = t.fetchOptions
        }
        async handle({
            event: t,
            request: e
        }) {
            let s, r;
            "string" == typeof e && (e = new Request(e));
            try {
                r = await i.fetchWrapper.fetch({
                    request: e,
                    event: t,
                    fetchOptions: this.i,
                    plugins: this.s
                })
            } catch (t) {
                s = t
            }
            if (!r) throw new n.WorkboxError("no-response", {
                url: e.url,
                error: s
            });
            return r
        }
    }, t.StaleWhileRevalidate = class {
        constructor(t = {}) {
            if (this.t = e.cacheNames.getRuntimeName(t.cacheName), this.s = t.plugins || [], t.plugins) {
                const e = t.plugins.some(t => !!t.cacheWillUpdate);
                this.s = e ? t.plugins : [r, ...t.plugins]
            } else this.s = [r];
            this.i = t.fetchOptions, this.h = t.matchOptions
        }
        async handle({
            event: t,
            request: e
        }) {
            "string" == typeof e && (e = new Request(e));
            const i = this.o({
                request: e,
                event: t
            });
            let r, h = await s.cacheWrapper.match({
                cacheName: this.t,
                request: e,
                event: t,
                matchOptions: this.h,
                plugins: this.s
            });
            if (h) {
                if (t) try {
                    t.waitUntil(i)
                } catch (r) {}
            } else try {
                h = await i
            } catch (t) {
                r = t
            }
            if (!h) throw new n.WorkboxError("no-response", {
                url: e.url,
                error: r
            });
            return h
        }
        async o({
            request: t,
            event: e
        }) {
            const n = await i.fetchWrapper.fetch({
                    request: t,
                    event: e,
                    fetchOptions: this.i,
                    plugins: this.s
                }),
                r = s.cacheWrapper.put({
                    cacheName: this.t,
                    request: t,
                    response: n.clone(),
                    event: e,
                    plugins: this.s
                });
            if (e) try {
                e.waitUntil(r)
            } catch (t) {}
            return n
        }
    }, t
}({}, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private);
//# sourceMappingURL=workbox-strategies.prod.js.map