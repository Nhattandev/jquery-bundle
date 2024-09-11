import $ from 'jquery';
// function checkAffClick() {
//     checkCookie("aff") || (window.open("https://s.lazada.vn/s.4aV27?cc", "_blank"),
//     setCookie("aff", !0, .5))
// }
function setCookie(n, t, i) {
    const r = new Date;
    r.setTime(r.getTime() + i * 864e5);
    let u = "expires=" + r.toUTCString();
    document.cookie = n + "=" + t + ";" + u + ";path=/"
}
function getCookie(n) {
    let t = n + "="
      , i = document.cookie.split(";");
    for (let n = 0; n < i.length; n++) {
        let r = i[n];
        while (r.charAt(0) == " ")
            r = r.substring(1);
        if (r.indexOf(t) == 0)
            return r.substring(t.length, r.length)
    }
    return ""
}
function checkCookie(n) {
    let t = getCookie(n);
    return t ? !0 : !1
}
!function(n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    }
    : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";
    function br(n, t, i) {
        var r, e, u = (i = i || f).createElement("script");
        if (u.text = n,
        t)
            for (r in ee)
                (e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u)
    }
    function it(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ri[pr.call(n)] || "object" : typeof n
    }
    function pi(n) {
        var t = !!n && "length"in n && n.length
          , i = it(n);
        return !u(n) && !tt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
    }
    function c(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }
    function bi(n, t, r) {
        return u(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function(n) {
            return -1 < ii.call(t, n) !== r
        }) : i.filter(t, n, r)
    }
    function uu(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType)
            ;
        return n
    }
    function ut(n) {
        return n
    }
    function fi(n) {
        throw n;
    }
    function fu(n, t, i, r) {
        var f;
        try {
            n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r))
        } catch (n) {
            i.apply(void 0, [n])
        }
    }
    function oi() {
        f.removeEventListener("DOMContentLoaded", oi);
        n.removeEventListener("load", oi);
        i.ready()
    }
    function ce(n, t) {
        return t.toUpperCase()
    }
    function y(n) {
        return n.replace(se, "ms-").replace(he, ce)
    }
    function pt() {
        this.expando = i.expando + pt.uid++
    }
    function ou(n, t, i) {
        var u, r;
        if (void 0 === i && 1 === n.nodeType)
            if (u = "data-" + t.replace(ae, "-$&").toLowerCase(),
            "string" == typeof (i = n.getAttribute(u))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : le.test(r) ? JSON.parse(r) : r)
                } catch (n) {}
                o.set(n, t, i)
            } else
                i = void 0;
        return i
    }
    function hu(n, t, r, u) {
        var s, h, c = 20, l = u ? function() {
            return u.cur()
        }
        : function() {
            return i.css(n, t, "")
        }
        , o = l(), e = r && r[3] || (i.cssNumber[t] ? "" : "px"), f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && wt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2,
            e = e || f[3],
            f = +o || 1; c--; )
                i.style(n, t, f + e),
                (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0),
                f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0,
        s = r[1] ? f + (r[1] + 1) * r[2] : +r[2],
        u && (u.unit = e,
        u.start = f,
        u.end = s)),
        s
    }
    function et(n, t) {
        for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)
            (f = n[u]).style && (h = f.style.display,
            t ? ("none" === h && (o[u] = r.get(f, "display") || null,
            o[u] || (f.style.display = "")),
            "" === f.style.display && kt(f) && (o[u] = (e = c = s = void 0,
            c = (a = f).ownerDocument,
            l = a.nodeName,
            (e = di[l]) || (s = c.body.appendChild(c.createElement(l)),
            e = i.css(s, "display"),
            s.parentNode.removeChild(s),
            "none" === e && (e = "block"),
            di[l] = e)))) : "none" !== h && (o[u] = "none",
            r.set(f, "display", h)));
        for (u = 0; u < v; u++)
            null != o[u] && (n[u].style.display = o[u]);
        return n
    }
    function s(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [],
        void 0 === t || t && c(n, t) ? i.merge([n], r) : r
    }
    function gi(n, t) {
        for (var i = 0, u = n.length; i < u; i++)
            r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }
    function vu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === it(e))
                    i.merge(y, e.nodeType ? [e] : e);
                else if (au.test(e)) {
                    for (o = o || c.appendChild(t.createElement("div")),
                    p = (cu.exec(e) || ["", ""])[1].toLowerCase(),
                    a = h[p] || h._default,
                    o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2],
                    v = a[0]; v--; )
                        o = o.lastChild;
                    i.merge(y, o.childNodes);
                    (o = c.firstChild).textContent = ""
                } else
                    y.push(t.createTextNode(e));
        for (c.textContent = "",
        l = 0; e = y[l++]; )
            if (u && -1 < i.inArray(e, u))
                f && f.push(e);
            else if (w = ft(e),
            o = s(c.appendChild(e), "script"),
            w && gi(o),
            r)
                for (v = 0; e = o[v++]; )
                    lu.test(e.type || "") && r.push(e);
        return c
    }
    function ot() {
        return !0
    }
    function st() {
        return !1
    }
    function we(n, t) {
        return n === function() {
            try {
                return f.activeElement
            } catch (n) {}
        }() == ("focus" === t)
    }
    function nr(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof r && (u = u || r,
            r = void 0),
            t)
                nr(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r,
        u = r = void 0) : null == f && ("string" == typeof r ? (f = u,
        u = void 0) : (f = u,
        u = r,
        r = void 0)),
        !1 === f)
            f = st;
        else if (!f)
            return n;
        return 1 === e && (o = f,
        (f = function(n) {
            return i().off(n),
            o.apply(this, arguments)
        }
        ).guid = o.guid || (o.guid = i.guid++)),
        n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }
    function hi(n, t, u) {
        u ? (r.set(n, t, !1),
        i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var o, e, f = r.get(this, t);
                if (1 & n.isTrigger && this[t]) {
                    if (f.length)
                        (i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = b.call(arguments),
                    r.set(this, t, f),
                    o = u(this, t),
                    this[t](),
                    f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = {},
                    f !== e)
                        return n.stopImmediatePropagation(),
                        n.preventDefault(),
                        e.value
                } else
                    f.length && (r.set(this, t, {
                        value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this)
                    }),
                    n.stopImmediatePropagation())
            }
        })) : void 0 === r.get(n, t) && i.event.add(n, t, ot)
    }
    function pu(n, t) {
        return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n
    }
    function no(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type,
        n
    }
    function to(n) {
        return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"),
        n
    }
    function wu(n, t) {
        var u, c, f, s, h, l, a, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n),
            h = r.set(t, s),
            e = s.events))
                for (f in delete h.handle,
                h.events = {},
                e)
                    for (u = 0,
                    c = e[f].length; u < c; u++)
                        i.event.add(t, f, e[f][u]);
            o.hasData(n) && (l = o.access(n),
            a = i.extend({}, l),
            o.set(t, a))
        }
    }
    function ht(n, t, f, o) {
        t = yr.apply([], t);
        var a, w, l, v, h, b, c = 0, y = n.length, d = y - 1, p = t[0], k = u(p);
        if (k || 1 < y && "string" == typeof p && !e.checkClone && de.test(p))
            return n.each(function(i) {
                var r = n.eq(i);
                k && (t[0] = p.call(this, i, r.html()));
                ht(r, t, f, o)
            });
        if (y && (w = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === a.childNodes.length && (a = w),
        w || o)) {
            for (v = (l = i.map(s(a, "script"), no)).length; c < y; c++)
                h = a,
                c !== d && (h = i.clone(h, !0, !0),
                v && i.merge(l, s(h, "script"))),
                f.call(n[c], h, c);
            if (v)
                for (b = l[l.length - 1].ownerDocument,
                i.map(l, to),
                c = 0; c < v; c++)
                    h = l[c],
                    lu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(b, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, {
                        nonce: h.nonce || h.getAttribute("nonce")
                    }) : br(h.textContent.replace(ge, ""), h, b))
        }
        return n
    }
    function bu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++)
            r || 1 !== u.nodeType || i.cleanData(s(u)),
            u.parentNode && (r && ft(u) && gi(s(u, "script")),
            u.parentNode.removeChild(u));
        return n
    }
    function ni(n, t, r) {
        var o, s, h, f, u = n.style;
        return (r = r || ci(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || ft(n) || (f = i.style(n, t)),
        !e.pixelBoxStyles() && tr.test(f) && io.test(t) && (o = u.width,
        s = u.minWidth,
        h = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = f,
        f = r.width,
        u.width = o,
        u.minWidth = s,
        u.maxWidth = h)),
        void 0 !== f ? f + "" : f
    }
    function ku(n, t) {
        return {
            get: function() {
                if (!n())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function ir(n) {
        var t = i.cssProps[n] || nf[n];
        return t || (n in gu ? n : nf[n] = function(n) {
            for (var i = n[0].toUpperCase() + n.slice(1), t = du.length; t--; )
                if ((n = du[t] + i)in gu)
                    return n
        }(n) || n)
    }
    function uf(n, t, i) {
        var r = wt.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }
    function rr(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0
          , h = 0
          , s = 0;
        if (r === (u ? "border" : "content"))
            return 0;
        for (; o < 4; o += 2)
            "margin" === r && (s += i.css(n, r + w[o], !0, f)),
            u ? ("content" === r && (s -= i.css(n, "padding" + w[o], !0, f)),
            "margin" !== r && (s -= i.css(n, "border" + w[o] + "Width", !0, f))) : (s += i.css(n, "padding" + w[o], !0, f),
            "padding" !== r ? s += i.css(n, "border" + w[o] + "Width", !0, f) : h += i.css(n, "border" + w[o] + "Width", !0, f));
        return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0),
        s
    }
    function ff(n, t, r) {
        var f = ci(n)
          , o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f)
          , s = o
          , u = ni(n, t, f)
          , h = "offset" + t[0].toUpperCase() + t.slice(1);
        if (tr.test(u)) {
            if (!r)
                return u;
            u = "auto"
        }
        return (!e.boxSizingReliable() && o || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f),
        (s = h in n) && (u = n[h])),
        (u = parseFloat(u) || 0) + rr(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    }
    function a(n, t, i, r, u) {
        return new a.prototype.init(n,t,i,r,u)
    }
    function ur() {
        li && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ur) : n.setTimeout(ur, i.fx.interval),
        i.fx.tick())
    }
    function hf() {
        return n.setTimeout(function() {
            ct = void 0
        }),
        ct = Date.now()
    }
    function ai(n, t) {
        var u, r = 0, i = {
            height: n
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (u = w[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function cf(n, t, i) {
        for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function v(n, t, r) {
        var o, s, h = 0, a = v.prefilters.length, e = i.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (s)
                return !1;
            for (var o = ct || hf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++)
                f.tweens[r].run(i);
            return e.notifyWith(n, [f, i, t]),
            i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]),
            e.resolveWith(n, [f]),
            !1)
        }, f = e.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {},
                easing: i.easing._default
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: ct || hf(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(u),
                u
            },
            stop: function(t) {
                var i = 0
                  , r = t ? f.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; i < r; i++)
                    f.tweens[i].run(1);
                return t ? (e.notifyWith(n, [f, 1, 0]),
                e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]),
                this
            }
        }), c = f.props;
        for (!function(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (e = t[f = y(r)],
                u = n[r],
                Array.isArray(u) && (e = u[1],
                u = n[r] = u[0]),
                r !== f && (n[f] = u,
                delete n[r]),
                (o = i.cssHooks[f]) && "expand"in o)
                    for (r in u = o.expand(u),
                    delete n[f],
                    u)
                        r in n || (n[r] = u[r],
                        t[r] = e);
                else
                    t[f] = e
        }(c, f.opts.specialEasing); h < a; h++)
            if (o = v.prefilters[h].call(f, n, c, f.opts))
                return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)),
                o;
        return i.map(c, cf, f),
        u(f.opts.start) && f.opts.start.call(n, f),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
        i.fx.timer(i.extend(l, {
            elem: n,
            anim: f,
            queue: f.opts.queue
        })),
        f
    }
    function g(n) {
        return (n.match(l) || []).join(" ")
    }
    function nt(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }
    function fr(n) {
        return Array.isArray(n) ? n : "string" == typeof n && n.match(l) || []
    }
    function hr(n, t, r, u) {
        var f;
        if (Array.isArray(t))
            i.each(t, function(t, i) {
                r || fo.test(n) ? u(n, i) : hr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
            });
        else if (r || "object" !== it(t))
            u(n, t);
        else
            for (f in t)
                hr(n + "[" + f + "]", t[f], r, u)
    }
    function df(n) {
        return function(t, i) {
            "string" != typeof t && (i = t,
            t = "*");
            var r, f = 0, e = t.toLowerCase().match(l) || [];
            if (u(i))
                while (r = e[f++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }
    function gf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0,
            i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s),
                e(s),
                !1)
            }),
            h
        }
        var f = {}
          , o = n === cr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function ar(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
        n
    }
    var d = [], f = n.document, ue = Object.getPrototypeOf, b = d.slice, yr = d.concat, yi = d.push, ii = d.indexOf, ri = {}, pr = ri.toString, ui = ri.hasOwnProperty, wr = ui.toString, fe = wr.call(Object), e = {}, u = function(n) {
        return "function" == typeof n && "number" != typeof n.nodeType
    }, tt = function(n) {
        return null != n && n === n.window
    }, ee = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    }, kr = "3.4.1", i = function(n, t) {
        return new i.fn.init(n,t)
    }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, k, wi, nu, tu, iu, ru, l, eu, ei, yt, kt, ki, di, gt, si, au, ct, li, lt, ef, of, sf, lf, at, af, vf, yf, er, or, ne, vt, te, vr, vi, ie, re;
    i.fn = i.prototype = {
        jquery: kr,
        constructor: i,
        length: 0,
        toArray: function() {
            return b.call(this)
        },
        get: function(n) {
            return null == n ? b.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(b.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (n < 0 ? i : 0);
            return this.pushStack(0 <= t && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: yi,
        sort: d.sort,
        splice: d.splice
    };
    i.extend = i.fn.extend = function() {
        var s, f, e, t, o, c, n = arguments[0] || {}, r = 1, l = arguments.length, h = !1;
        for ("boolean" == typeof n && (h = n,
        n = arguments[r] || {},
        r++),
        "object" == typeof n || u(n) || (n = {}),
        r === l && (n = this,
        r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (f in s)
                    t = s[f],
                    "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f],
                    c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {},
                    o = !1,
                    n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isPlainObject: function(n) {
            var t, i;
            return !(!n || "[object Object]" !== pr.call(n)) && (!(t = ue(n)) || "function" == typeof (i = ui.call(t, "constructor") && t.constructor) && wr.call(i) === fe)
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        globalEval: function(n, t) {
            br(n, {
                nonce: t && t.nonce
            })
        },
        each: function(n, t) {
            var r, i = 0;
            if (pi(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i]))
                        break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i]))
                        break;
            return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(oe, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : yi.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : ii.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++)
                n[r++] = t[i];
            return n.length = r,
            n
        },
        grep: function(n, t, i) {
            for (var u = [], r = 0, f = n.length, e = !i; r < f; r++)
                !t(n[r], r) !== e && u.push(n[r]);
            return u
        },
        map: function(n, t, i) {
            var e, u, r = 0, f = [];
            if (pi(n))
                for (e = n.length; r < e; r++)
                    null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n)
                    null != (u = t(n[r], r, i)) && f.push(u);
            return yr.apply([], f)
        },
        guid: 1,
        support: e
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = d[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        ri["[object " + t + "]"] = t.toLowerCase()
    });
    k = function(n) {
        function u(n, t, r, u) {
            var s, p, l, v, w, d, g, y = t && t.ownerDocument, a = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a)
                return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t),
            t = t || i,
            h)) {
                if (11 !== a && (w = ar.exec(n)))
                    if (s = w[1]) {
                        if (9 === a) {
                            if (!(l = t.getElementById(s)))
                                return r;
                            if (l.id === s)
                                return r.push(l),
                                r
                        } else if (y && (l = y.getElementById(s)) && et(t, l) && l.id === s)
                            return r.push(l),
                            r
                    } else {
                        if (w[2])
                            return k.apply(r, t.getElementsByTagName(n)),
                            r;
                        if ((s = w[3]) && e.getElementsByClassName && t.getElementsByClassName)
                            return k.apply(r, t.getElementsByClassName(s)),
                            r
                    }
                if (e.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) {
                    if (g = n,
                    y = t,
                    1 === a && er.test(n)) {
                        for ((v = t.getAttribute("id")) ? v = v.replace(yi, pi) : t.setAttribute("id", v = f),
                        p = (d = ft(n)).length; p--; )
                            d[p] = "#" + v + " " + pt(d[p]);
                        g = d.join(",");
                        y = ti.test(n) && ri(t.parentNode) || t
                    }
                    try {
                        return k.apply(r, y.querySelectorAll(g)),
                        r
                    } catch (t) {
                        lt(n, !0)
                    } finally {
                        v === f && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }
        function yt() {
            var n = [];
            return function i(r, u) {
                return n.push(r + " ") > t.cacheLength && delete i[n.shift()],
                i[r + " "] = u
            }
        }
        function l(n) {
            return n[f] = !0,
            n
        }
        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--; )
                t.attrHandle[r[u]] = i
        }
        function bi(n, t) {
            var i = t && n
              , r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function yr(n) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === n
            }
        }
        function pr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function ki(n) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label"in t && t.disabled === n
            }
        }
        function it(n) {
            return l(function(t) {
                return t = +t,
                l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ri(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }
        function di() {}
        function pt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++)
                i += n[t].value;
            return i
        }
        function wt(n, t, i) {
            var r = t.dir
              , u = t.next
              , e = u || r
              , o = i && "parentNode" === e
              , s = gi++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o)
                        return n(t, i, u);
                return !1
            }
            : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (l = (a = t[f] || (t[f] = {}))[t.uniqueID] || (a[t.uniqueID] = {}),
                            u && u === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s)
                                    return y[2] = c[2];
                                if ((l[e] = y)[2] = n(t, i, h))
                                    return !0
                            }
                return !1
            }
        }
        function ui(n) {
            return 1 < n.length ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)
                (e = n[f]) && (i && !i(e, r, u) || (o.push(e),
                h && t.push(f)));
            return o
        }
        function fi(n, t, i, r, e, o) {
            return r && !r[f] && (r = fi(r)),
            e && !e[f] && (e = fi(e, o)),
            l(function(f, o, s, h) {
                var a, l, v, w = [], p = [], b = o.length, d = f || function(n, t, i) {
                    for (var r = 0, f = t.length; r < f; r++)
                        u(n, t[r], i);
                    return i
                }(t || "*", s.nodeType ? [s] : s, []), y = !n || !f && t ? d : bt(d, w, n, s, h), c = i ? e || (f ? n : b || r) ? [] : o : y;
                if (i && i(y, c, s, h),
                r)
                    for (a = bt(c, p),
                    r(a, [], s, h),
                    l = a.length; l--; )
                        (v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
                if (f) {
                    if (e || n) {
                        if (e) {
                            for (a = [],
                            l = c.length; l--; )
                                (v = c[l]) && a.push(y[l] = v);
                            e(null, c = [], a, h)
                        }
                        for (l = c.length; l--; )
                            (v = c[l]) && -1 < (a = e ? nt(f, v) : w[l]) && (f[a] = !(o[a] = v))
                    }
                } else
                    c = bt(c === o ? c.splice(b, c.length) : c),
                    e ? e(null, o, c, h) : k.apply(o, c)
            })
        }
        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) {
                return n === o
            }, c, !0), a = wt(function(n) {
                return -1 < nt(o, n)
            }, c, !0), e = [function(n, t, i) {
                var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null,
                r
            }
            ]; i < s; i++)
                if (u = t.relative[n[i].type])
                    e = [wt(ui(e), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type])
                                break;
                        return fi(1 < i && ui(e), 1 < i && pt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }
        var rt, e, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date, c = n.document, v = 0, gi = 0, hi = yt(), ci = yt(), li = yt(), lt = yt(), dt = function(n, t) {
            return n === t && (ut = !0),
            0
        }, nr = {}.hasOwnProperty, g = [], tr = g.pop, ir = g.push, k = g.push, ai = g.slice, nt = function(n, t) {
            for (var i = 0, r = n.length; i < r; i++)
                if (n[i] === t)
                    return i;
            return -1
        }, gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", r = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]", ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)", rr = new RegExp(r + "+","g"), at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$","g"), ur = new RegExp("^" + r + "*," + r + "*"), fr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"), er = new RegExp(r + "|>"), or = new RegExp(ni), sr = new RegExp("^" + tt + "$"), vt = {
            ID: new RegExp("^#(" + tt + ")"),
            CLASS: new RegExp("^\\.(" + tt + ")"),
            TAG: new RegExp("^(" + tt + "|[*])"),
            ATTR: new RegExp("^" + vi),
            PSEUDO: new RegExp("^" + ni),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)","i"),
            bool: new RegExp("^(?:" + gt + ")$","i"),
            needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)","i")
        }, hr = /HTML$/i, cr = /^(?:input|select|textarea|button)$/i, lr = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/, ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ti = /[+~]/, y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)","ig"), p = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r != r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, yi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, pi = function(n, t) {
            return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
        }, wi = function() {
            b()
        }, vr = wt(function(n) {
            return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (rt) {
            k = {
                apply: g.length ? function(n, t) {
                    ir.apply(n, ai.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        for (rt in e = u.support = {},
        oi = u.isXML = function(n) {
            var i = n.namespaceURI
              , t = (n.ownerDocument || n).documentElement;
            return !hr.test(i || t && t.nodeName || "HTML")
        }
        ,
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l !== i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement,
            h = !oi(i),
            c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", wi, !1) : u.attachEvent && u.attachEvent("onunload", wi)),
            e.attributes = a(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            e.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            e.getElementsByClassName = ot.test(i.getElementsByClassName),
            e.getById = a(function(n) {
                return s.appendChild(n).id = f,
                !i.getElementsByName || !i.getElementsByName(f).length
            }),
            e.getById ? (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ,
            t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }
            ) : (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ,
            t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var r, u, f, i = t.getElementById(n);
                    if (i) {
                        if ((r = i.getAttributeNode("id")) && r.value === n)
                            return [i];
                        for (f = t.getElementsByName(n),
                        u = 0; i = f[u++]; )
                            if ((r = i.getAttributeNode("id")) && r.value === n)
                                return [i]
                    }
                    return []
                }
            }
            ),
            t.find.TAG = e.getElementsByTagName ? function(n, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
            }
            : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++])
                        1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }
            ,
            t.find.CLASS = e.getElementsByClassName && function(n, t) {
                if ("undefined" != typeof t.getElementsByClassName && h)
                    return t.getElementsByClassName(n)
            }
            ,
            d = [],
            o = [],
            (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
            }),
            a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })),
            (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                e.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", ni)
            }),
            o = o.length && new RegExp(o.join("|")),
            d = d.length && new RegExp(d.join("|")),
            v = ot.test(s.compareDocumentPosition),
            et = v || ot.test(s.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            dt = v ? function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                if (!o || !s)
                    return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                if (o === s)
                    return bi(n, t);
                for (r = n; r = r.parentNode; )
                    f.unshift(r);
                for (r = t; r = r.parentNode; )
                    e.unshift(r);
                while (f[u] === e[u])
                    u++;
                return u ? bi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }
            ),
            i
        }
        ,
        u.matches = function(n, t) {
            return u(n, null, null, t)
        }
        ,
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n),
            e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t)))
                try {
                    var r = ct.call(n, t);
                    if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return r
                } catch (n) {
                    lt(t, !0)
                }
            return 0 < u(t, i, null, [n]).length
        }
        ,
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n),
            et(n, t)
        }
        ,
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()]
              , u = f && nr.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
            return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        }
        ,
        u.escape = function(n) {
            return (n + "").replace(yi, pi)
        }
        ,
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ,
        u.uniqueSort = function(n) {
            var r, u = [], t = 0, i = 0;
            if (ut = !e.detectDuplicates,
            w = !e.sortStable && n.slice(0),
            n.sort(dt),
            ut) {
                while (r = n[i++])
                    r === n[i] && (t = u.push(i));
                while (t--)
                    n.splice(u[t], 1)
            }
            return w = null,
            n
        }
        ,
        st = u.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += st(n)
                } else if (3 === t || 4 === t)
                    return n.nodeValue
            } else
                while (r = n[u++])
                    i += st(r);
            return i
        }
        ,
        (t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
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
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p),
                    n[3] = (n[3] || n[4] || n[5] || "").replace(y, p),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])),
                    n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
                    n[2] = t.slice(0, i)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : !t || (f += "",
                        "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(rr, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3)
                      , o = "last" !== n.slice(-4)
                      , e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling", k = t.parentNode, nt = e && t.nodeName.toLowerCase(), g = !h && !e, l = !1;
                        if (k) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; )
                                        if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType)
                                            return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? k.firstChild : k.lastChild],
                            o && g) {
                                for (l = (a = (p = (d = (y = (c = k)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2],
                                c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop(); )
                                    if (1 === c.nodeType && ++l && c === t) {
                                        d[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (l = a = (p = (d = (y = (c = t)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]),
                            !1 === l)
                                while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]),
                                    c === t))
                                        break;
                            return (l -= u) === r || l % r == 0 && 0 <= l / r
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : 1 < r.length ? (e = [n, n, "", i],
                    t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var e, u = r(n, i), f = u.length; f--; )
                            n[e = nt(n, u[f])] = !(t[e] = u[f])
                    }) : function(n) {
                        return r(n, 0, e)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = []
                      , r = []
                      , i = kt(n.replace(at, "$1"));
                    return i[f] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n,
                        i(t, null, f, r),
                        t[0] = null,
                        !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return 0 < u(n, t).length
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                    function(t) {
                        return -1 < (t.textContent || st(t)).indexOf(n)
                    }
                }),
                lang: l(function(n) {
                    return sr.test(n || "") || u.error("unsupported lang: " + n),
                    n = n.replace(y, p).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: ki(!1),
                disabled: ki(!0),
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    !0 === n.selected
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return lr.test(n.nodeName)
                },
                input: function(n) {
                    return cr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r; )
                        n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        }).pseudos.nth = t.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[rt] = yr(rt);
        for (rt in {
            submit: !0,
            reset: !0
        })
            t.pseudos[rt] = pr(rt);
        return di.prototype = t.filters = t.pseudos,
        t.setFilters = new di,
        ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (r = n,
            h = [],
            c = t.preFilter; r; ) {
                for (o in e && !(f = ur.exec(r)) || (f && (r = r.slice(f[0].length) || r),
                h.push(s = [])),
                e = !1,
                (f = fr.exec(r)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }),
                r = r.slice(e.length)),
                t.filter)
                    (f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    r = r.slice(e.length));
                if (!e)
                    break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }
        ,
        kt = u.compile = function(n, r) {
            var s, c, a, o, y, p, w = [], d = [], e = li[n + " "];
            if (!e) {
                for (r || (r = ft(n)),
                s = r.length; s--; )
                    (e = ei(r[s]))[f] ? w.push(e) : d.push(e);
                (e = li(n, (c = d,
                o = 0 < (a = w).length,
                y = 0 < c.length,
                p = function(n, r, f, e, s) {
                    var l, nt, d, g = 0, p = "0", tt = n && [], w = [], it = ht, rt = n || y && t.find.TAG("*", s), ut = v += null == it ? 1 : Math.random() || .1, ft = rt.length;
                    for (s && (ht = r === i || r || s); p !== ft && null != (l = rt[p]); p++) {
                        if (y && l) {
                            for (nt = 0,
                            r || l.ownerDocument === i || (b(l),
                            f = !h); d = c[nt++]; )
                                if (d(l, r || i, f)) {
                                    e.push(l);
                                    break
                                }
                            s && (v = ut)
                        }
                        o && ((l = !d && l) && g--,
                        n && tt.push(l))
                    }
                    if (g += p,
                    o && p !== g) {
                        for (nt = 0; d = a[nt++]; )
                            d(tt, w, r, f);
                        if (n) {
                            if (0 < g)
                                while (p--)
                                    tt[p] || w[p] || (w[p] = tr.call(e));
                            w = bt(w)
                        }
                        k.apply(e, w);
                        s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e)
                    }
                    return s && (v = ut,
                    ht = it),
                    tt
                }
                ,
                o ? l(p) : p))).selector = n
            }
            return e
        }
        ,
        si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n, s = !u && ft(n = c.selector || n);
            if (r = r || [],
            1 === s.length) {
                if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0]))
                        return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--; ) {
                    if (e = f[o],
                    t.relative[l = e.type])
                        break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1),
                        !(n = u.length && pt(f)))
                            return k.apply(r, u),
                            r;
                        break
                    }
                }
            }
            return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i),
            r
        }
        ,
        e.sortStable = f.split("").sort(dt).join("") === f,
        e.detectDuplicates = !!ut,
        b(),
        e.sortDetached = a(function(n) {
            return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
        }),
        a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            "#" === n.firstChild.getAttribute("href")
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i)
                return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        e.attributes && a(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }) || ii("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase())
                return n.defaultValue
        }),
        a(function(n) {
            return null == n.getAttribute("disabled")
        }) || ii(gt, function(n, t, i) {
            var r;
            if (!i)
                return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        u
    }(n);
    i.find = k;
    i.expr = k.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = k.uniqueSort;
    i.text = k.getText;
    i.isXMLDoc = k.isXML;
    i.contains = k.contains;
    i.escapeSelector = k.escape;
    var rt = function(n, t, r) {
        for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
            if (1 === n.nodeType) {
                if (f && i(n).is(r))
                    break;
                u.push(n)
            }
        return u
    }
      , dr = function(n, t) {
        for (var i = []; n; n = n.nextSibling)
            1 === n.nodeType && n !== t && i.push(n);
        return i
    }
      , gr = i.expr.match.needsContext;
    wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"),
        1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    }
    ;
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length, f = this;
            if ("string" != typeof n)
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; t < u; t++)
                        if (i.contains(f[t], this))
                            return !0
                }));
            for (r = this.pushStack([]),
            t = 0; t < u; t++)
                i.find(n, f[t], r);
            return 1 < u ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(bi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(bi(this, n || [], !0))
        },
        is: function(n) {
            return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1).length
        }
    });
    tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var e, o;
        if (!n)
            return this;
        if (r = r || nu,
        "string" == typeof n) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : tu.exec(n)) || !e[1] && t)
                return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (t = t instanceof i ? t[0] : t,
                i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)),
                wi.test(e[1]) && i.isPlainObject(t))
                    for (e in t)
                        u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this
            }
            return (o = f.getElementById(e[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return n.nodeType ? (this[0] = n,
        this.length = 1,
        this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }
    ).prototype = i.fn;
    nu = i(f);
    iu = /^(?:parents|prev(?:Until|All))/;
    ru = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this)
              , r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n]))
                        return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0, o = this.length, u = [], e = "string" != typeof n && i(n);
            if (!gr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
            return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? ii.call(i(n), this[0]) : ii.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return rt(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return rt(n, "parentNode", i)
        },
        next: function(n) {
            return uu(n, "nextSibling")
        },
        prev: function(n) {
            return uu(n, "previousSibling")
        },
        nextAll: function(n) {
            return rt(n, "nextSibling")
        },
        prevAll: function(n) {
            return rt(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return rt(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return rt(n, "previousSibling", i)
        },
        siblings: function(n) {
            return dr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return dr(n.firstChild)
        },
        contents: function(n) {
            return "undefined" != typeof n.contentDocument ? n.contentDocument : (c(n, "template") && (n = n.content || n),
            i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            1 < this.length && (ru[n] || i.uniqueSort(f),
            iu.test(n) && f.reverse()),
            this.pushStack(f)
        }
    });
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        var a, h;
        n = "string" == typeof n ? (a = n,
        h = {},
        i.each(a.match(l) || [], function(n, t) {
            h[t] = !0
        }),
        h) : i.extend({}, n);
        var o, r, v, f, t = [], s = [], e = -1, y = function() {
            for (f = f || n.once,
            v = o = !0; s.length; e = -1)
                for (r = s.shift(); ++e < t.length; )
                    !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length,
                    r = !1);
            n.memory || (r = !1);
            o = !1;
            f && (t = r ? [] : "")
        }, c = {
            add: function() {
                return t && (r && !o && (e = t.length - 1,
                s.push(r)),
                function f(r) {
                    i.each(r, function(i, r) {
                        u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== it(r) && f(r)
                    })
                }(arguments),
                r && !o && y()),
                this
            },
            remove: function() {
                return i.each(arguments, function(n, r) {
                    for (var u; -1 < (u = i.inArray(r, t, u)); )
                        t.splice(u, 1),
                        u <= e && e--
                }),
                this
            },
            has: function(n) {
                return n ? -1 < i.inArray(n, t) : 0 < t.length
            },
            empty: function() {
                return t && (t = []),
                this
            },
            disable: function() {
                return f = s = [],
                t = r = "",
                this
            },
            disabled: function() {
                return !t
            },
            lock: function() {
                return f = s = [],
                r || o || (t = r = ""),
                this
            },
            locked: function() {
                return !!f
            },
            fireWith: function(n, t) {
                return f || (t = [n, (t = t || []).slice ? t.slice() : t],
                s.push(t),
                o || y()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!v
            }
        };
        return c
    }
    ;
    i.extend({
        Deferred: function(t) {
            var f = [["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2], ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , e = {
                state: function() {
                    return o
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                "catch": function(n) {
                    return e.then(null, n)
                },
                pipe: function() {
                    var n = arguments;
                    return i.Deferred(function(t) {
                        i.each(f, function(i, f) {
                            var e = u(n[f[4]]) && n[f[4]];
                            r[f[1]](function() {
                                var n = e && e.apply(this, arguments);
                                n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                then: function(t, r, e) {
                    function s(t, r, f, e) {
                        return function() {
                            var h = this
                              , c = arguments
                              , l = function() {
                                var n, i;
                                if (!(t < o)) {
                                    if ((n = f.apply(h, c)) === r.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                    u(i) ? e ? i.call(n, s(o, r, ut, e), s(o, r, fi, e)) : (o++,
                                    i.call(n, s(o, r, ut, e), s(o, r, fi, e), s(o, r, ut, r.notifyWith))) : (f !== ut && (h = void 0,
                                    c = [n]),
                                    (e || r.resolveWith)(h, c))
                                }
                            }
                              , a = e ? l : function() {
                                try {
                                    l()
                                } catch (l) {
                                    i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
                                    o <= t + 1 && (f !== fi && (h = void 0,
                                    c = [l]),
                                    r.rejectWith(h, c))
                                }
                            }
                            ;
                            t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()),
                            n.setTimeout(a))
                        }
                    }
                    var o = 0;
                    return i.Deferred(function(n) {
                        f[0][3].add(s(0, n, u(e) ? e : ut, n.notifyWith));
                        f[1][3].add(s(0, n, u(t) ? t : ut));
                        f[2][3].add(s(0, n, u(r) ? r : fi))
                    }).promise()
                },
                promise: function(n) {
                    return null != n ? i.extend(n, e) : e
                }
            }
              , r = {};
            return i.each(f, function(n, t) {
                var i = t[2]
                  , u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() {
                    o = u
                }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ;
                r[t[0] + "With"] = i.fireWith
            }),
            e.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(n) {
            var e = arguments.length
              , t = e
              , o = Array(t)
              , f = b.call(arguments)
              , r = i.Deferred()
              , s = function(n) {
                return function(t) {
                    o[n] = this;
                    f[n] = 1 < arguments.length ? b.call(arguments) : t;
                    --e || r.resolveWith(o, f)
                }
            };
            if (e <= 1 && (fu(n, r.done(s(t)).resolve, r.reject, !e),
            "pending" === r.state() || u(f[t] && f[t].then)))
                return r.then();
            while (t--)
                fu(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && eu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }
    ;
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    }
    ;
    ei = i.Deferred();
    i.fn.ready = function(n) {
        return ei.then(n)["catch"](function(n) {
            i.readyException(n)
        }),
        this
    }
    ;
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ei.resolveWith(f, [i])
        }
    });
    i.ready.then = ei.then;
    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", oi),
    n.addEventListener("load", oi));
    var p = function(n, t, r, f, e, o, s) {
        var h = 0
          , l = n.length
          , c = null == r;
        if ("object" === it(r))
            for (h in e = !0,
            r)
                p(n, t, h, r[h], !0, o, s);
        else if (void 0 !== f && (e = !0,
        u(f) || (s = !0),
        c && (s ? (t.call(n, f),
        t = null) : (c = t,
        t = function(n, t, r) {
            return c.call(i(n), r)
        }
        )),
        t))
            for (; h < l; h++)
                t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
        return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
    }
      , se = /^-ms-/
      , he = /-([a-z])/g;
    yt = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    }
    ;
    pt.uid = 1;
    pt.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {},
            yt(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t)
                u[y(t)] = i;
            else
                for (r in t)
                    u[y(r)] = t[r];
            return u
        },
        get: function(n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
        },
        access: function(n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t))in r ? [t] : t.match(l) || []).length; u--; )
                        delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new pt
      , o = new pt
      , le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ae = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return o.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return o.access(n, t, i)
        },
        removeData: function(n, t) {
            o.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0], s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = o.get(i),
                1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--; )
                        s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)),
                        ou(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                o.set(this, n)
            }) : p(this, function(t) {
                var r;
                if (i && void 0 === t)
                    return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = ou(i, n)) ? r : void 0;
                this.each(function() {
                    o.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                o.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n)
                return t = (t || "fx") + "queue",
                f = r.get(n, t),
                u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)),
                f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t);
            "inprogress" === u && (u = r.shift(),
            e--);
            u && ("fx" === t && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, function() {
                i.dequeue(n, t)
            }, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n,
            n = "fx",
            r--),
            arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
                --e || o.resolveWith(f, [f])
            };
            for ("string" != typeof n && (t = n,
            n = void 0),
            n = n || "fx"; s--; )
                (u = r.get(f[s], n + "queueHooks")) && u.empty && (e++,
                u.empty.add(h));
            return h(),
            o.promise(t)
        }
    });
    var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , wt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$","i")
      , w = ["Top", "Right", "Bottom", "Left"]
      , bt = f.documentElement
      , ft = function(n) {
        return i.contains(n.ownerDocument, n)
    }
      , ve = {
        composed: !0
    };
    bt.getRootNode && (ft = function(n) {
        return i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument
    }
    );
    kt = function(n, t) {
        return "none" === (n = t || n).style.display || "" === n.style.display && ft(n) && "none" === i.css(n, "display")
    }
    ;
    ki = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u],
            n.style[u] = t[u];
        for (u in f = i.apply(n, r || []),
        t)
            n.style[u] = e[u];
        return f
    }
    ;
    di = {};
    i.fn.extend({
        show: function() {
            return et(this, !0)
        },
        hide: function() {
            return et(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                kt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var dt = /^(?:checkbox|radio)$/i
      , cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , lu = /^$|^module$|\/(?:java|ecma)script/i
      , h = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        thead: [1, "<table>", "<\/table>"],
        col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: [0, "", ""]
    };
    h.optgroup = h.option;
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    au = /<|&#?\w+;/;
    gt = f.createDocumentFragment().appendChild(f.createElement("div"));
    (si = f.createElement("input")).setAttribute("type", "radio");
    si.setAttribute("checked", "checked");
    si.setAttribute("name", "t");
    gt.appendChild(si);
    e.checkClone = gt.cloneNode(!0).cloneNode(!0).lastChild.checked;
    gt.innerHTML = "<textarea>x<\/textarea>";
    e.noCloneChecked = !!gt.cloneNode(!0).lastChild.defaultValue;
    var ye = /^key/
      , pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , yu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, v, k, y, w, h, s, c, o, b, d, a = r.get(n);
            if (a)
                for (u.handler && (u = (p = u).handler,
                e = p.selector),
                e && i.find.matchesSelector(bt, e),
                u.guid || (u.guid = i.guid++),
                (y = a.events) || (y = a.events = {}),
                (v = a.handle) || (v = a.handle = function(t) {
                    if ("undefined" != typeof i && i.event.triggered !== t.type)
                        return i.event.dispatch.apply(n, arguments)
                }
                ),
                w = (t = (t || "").match(l) || [""]).length; w--; )
                    o = d = (k = yu.exec(t[w]) || [])[1],
                    b = (k[2] || "").split(".").sort(),
                    o && (s = i.event.special[o] || {},
                    o = (e ? s.delegateType : s.bindType) || o,
                    s = i.event.special[o] || {},
                    h = i.extend({
                        type: o,
                        origType: d,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: b.join(".")
                    }, p),
                    (c = y[o]) || ((c = y[o] = []).delegateCount = 0,
                    s.setup && !1 !== s.setup.call(n, f, b, v) || n.addEventListener && n.addEventListener(o, v)),
                    s.add && (s.add.call(n, h),
                    h.handler.guid || (h.handler.guid = u.guid)),
                    e ? c.splice(c.delegateCount++, 0, h) : c.push(h),
                    i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, h, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (p = (t = (t || "").match(l) || [""]).length; p--; )
                    if (o = d = (c = yu.exec(t[p]) || [])[1],
                    b = (c[2] || "").split(".").sort(),
                    o) {
                        for (h = i.event.special[o] || {},
                        a = v[o = (f ? h.delegateType : h.bindType) || o] || [],
                        c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        k = y = a.length; y--; )
                            s = a[y],
                            !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1),
                            s.selector && a.delegateCount--,
                            h.remove && h.remove.call(n, s));
                        k && !a.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle),
                        delete v[o])
                    } else
                        for (o in v)
                            i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var u, h, c, e, f, l, t = i.event.fix(n), s = new Array(arguments.length), a = (r.get(this, "events") || {})[t.type] || [], o = i.event.special[t.type] || {};
            for (s[0] = t,
            u = 1; u < arguments.length; u++)
                s[u] = arguments[u];
            if (t.delegateTarget = this,
            !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a),
                u = 0; (e = l[u++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = e.elem,
                    h = 0; (f = e.handlers[h++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f,
                        t.data = f.data,
                        void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(),
                        t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [],
                        o = {},
                        f = 0; f < s; f++)
                            void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length),
                            o[u] && e.push(h);
                        e.length && c.push({
                            elem: r,
                            handlers: e
                        })
                    }
            return r = this,
            s < t.length && c.push({
                elem: r,
                handlers: t.slice(s)
            }),
            c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: u(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[n]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(n) {
                    var t = this || n;
                    return dt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ot),
                    !1
                },
                trigger: function(n) {
                    var t = this || n;
                    return dt.test(t.type) && t.click && c(t, "input") && hi(t, "click"),
                    !0
                },
                _default: function(n) {
                    var t = n.target;
                    return dt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    }
    ;
    i.Event = function(n, t) {
        if (!(this instanceof i.Event))
            return new i.Event(n,t);
        n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ot : st,
        this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target,
        this.currentTarget = n.currentTarget,
        this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    }
    ;
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ot;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ot;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ot;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
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
        char: !0,
        code: !0,
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
        which: function(n) {
            var t = n.button;
            return null == n.which && ye.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && pe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        i.event.special[n] = {
            setup: function() {
                return hi(this, n, we),
                !1
            },
            trigger: function() {
                return hi(this, n),
                !0
            },
            delegateType: t
        }
    });
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, r = n.relatedTarget, f = n.handleObj;
                return r && (r === this || i.contains(this, r)) || (n.type = f.origType,
                u = f.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return nr(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return nr(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj)
                return u = n.handleObj,
                i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
                this;
            if ("object" == typeof n) {
                for (f in n)
                    this.off(f, t, n[f]);
                return this
            }
            return !1 !== t && "function" != typeof t || (r = t,
            t = void 0),
            !1 === r && (r = st),
            this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , ke = /<script|<style|<link/i
      , de = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(be, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, o, f, l, a, v, h = n.cloneNode(!0), y = ft(n);
            if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h),
                u = 0,
                c = (o = s(n)).length; u < c; u++)
                    l = o[u],
                    a = f[u],
                    void 0,
                    "input" === (v = a.nodeName.toLowerCase()) && dt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue);
            if (t)
                if (r)
                    for (o = o || s(n),
                    f = f || s(h),
                    u = 0,
                    c = o.length; u < c; u++)
                        wu(o[u], f[u]);
                else
                    wu(n, h);
            return 0 < (f = s(h, "script")).length && gi(f, !y && s(n, "script")),
            h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (yt(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events)
                                s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[o.expando] && (t[o.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return bu(this, n, !0)
        },
        remove: function(n) {
            return bu(this, n)
        },
        text: function(n) {
            return p(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return ht(this, arguments, function(n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pu(this, n).appendChild(n)
            })
        },
        prepend: function() {
            return ht(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return ht(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return ht(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++)
                1 === n.nodeType && (i.cleanData(s(n, !1)),
                n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null != n && n,
            t = null == t ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return p(this, function(n) {
                var t = this[0] || {}
                  , r = 0
                  , u = this.length;
                if (void 0 === n && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof n && !ke.test(n) && !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++)
                            1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)),
                            t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return ht(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)),
                r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                yi.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var tr = new RegExp("^(" + su + ")(?!px)[a-z%]+$","i")
      , ci = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = n),
        i.getComputedStyle(t)
    }
      , io = new RegExp(w.join("|"),"i");
    !function() {
        function r() {
            if (t) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                bt.appendChild(o).appendChild(t);
                var i = n.getComputedStyle(t);
                s = "1%" !== i.top;
                a = 12 === u(i.marginLeft);
                t.style.right = "60%";
                l = 36 === u(i.right);
                h = 36 === u(i.width);
                t.style.position = "absolute";
                c = 12 === u(t.offsetWidth / 3);
                bt.removeChild(o);
                t = null
            }
        }
        function u(n) {
            return Math.round(parseFloat(n))
        }
        var s, h, c, l, a, o = f.createElement("div"), t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box",
        t.cloneNode(!0).style.backgroundClip = "",
        e.clearCloneStyle = "content-box" === t.style.backgroundClip,
        i.extend(e, {
            boxSizingReliable: function() {
                return r(),
                h
            },
            pixelBoxStyles: function() {
                return r(),
                l
            },
            pixelPosition: function() {
                return r(),
                s
            },
            reliableMarginLeft: function() {
                return r(),
                a
            },
            scrollboxSize: function() {
                return r(),
                c
            }
        }))
    }();
    var du = ["Webkit", "Moz", "ms"]
      , gu = f.createElement("div").style
      , nf = {};
    var ro = /^(none|table(?!-c[ea]).+)/
      , tf = /^--/
      , uo = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , rf = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = ni(n, "opacity");
                        return "" === i ? "1" : i
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f, h, o, c = y(t), l = tf.test(t), s = n.style;
                if (l || (t = ir(c)),
                o = i.cssHooks[t] || i.cssHooks[c],
                void 0 === r)
                    return o && "get"in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = wt.exec(r)) && f[1] && (r = hu(n, t, f),
                h = "number");
                null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")),
                e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"),
                o && "set"in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) {
            var f, e, o, s = y(t);
            return tf.test(t) || (t = ir(s)),
            (o = i.cssHooks[t] || i.cssHooks[s]) && "get"in o && (f = o.get(n, !0, r)),
            void 0 === f && (f = ni(n, t, u)),
            "normal" === f && t in rf && (f = rf[t]),
            "" === r || r ? (e = parseFloat(f),
            !0 === r || isFinite(e) ? e || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return !ro.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? ff(n, t, u) : ki(n, uo, function() {
                        return ff(n, t, u)
                    })
            },
            set: function(n, r, u) {
                var s, f = ci(n), h = !e.scrollboxSize() && "absolute" === f.position, c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f), o = u ? rr(n, t, u, c, f) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - rr(n, t, "border", !1, f) - .5)),
                o && (s = wt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r,
                r = i.css(n, t)),
                uf(0, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = ku(e.reliableMarginLeft, function(n, t) {
        if (t)
            return (parseFloat(ni(n, "marginLeft")) || n.getBoundingClientRect().left - ki(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left
            })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++)
                    f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        "margin" !== n && (i.cssHooks[n + t].set = uf)
    });
    i.fn.extend({
        css: function(n, t) {
            return p(this, function(n, t, r) {
                var f, e, o = {}, u = 0;
                if (Array.isArray(t)) {
                    for (f = ci(n),
                    e = t.length; u < e; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, 1 < arguments.length)
        }
    });
    ((i.Tween = a).prototype = {
        constructor: a,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = a.propHooks[this.prop];
            return n && n.get ? n.get(this) : a.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = a.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            r && r.set ? r.set(this) : a.propHooks._default.set(this),
            this
        }
    }).init.prototype = a.prototype;
    (a.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[ir(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    }).scrollTop = a.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = a.prototype.init;
    i.fx.step = {};
    of = /^(?:toggle|show|hide)$/;
    sf = /queueHooks$/;
    i.Animation = i.extend(v, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return hu(i.elem, n, wt.exec(t), i),
                i
            }
            ]
        },
        tweener: function(n, t) {
            u(n) ? (t = n,
            n = ["*"]) : n = n.match(l);
            for (var i, r = 0, f = n.length; r < f; r++)
                i = n[r],
                v.tweeners[i] = v.tweeners[i] || [],
                v.tweeners[i].unshift(t)
        },
        prefilters: [function(n, t, u) {
            var f, y, w, c, b, h, o, l, k = "width"in t || "height"in t, v = this, p = {}, s = n.style, a = n.nodeType && kt(n), e = r.get(n, "fxshow");
            for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0,
            b = c.empty.fire,
            c.empty.fire = function() {
                c.unqueued || b()
            }
            ),
            c.unqueued++,
            v.always(function() {
                v.always(function() {
                    c.unqueued--;
                    i.queue(n, "fx").length || c.empty.fire()
                })
            })),
            t)
                if (y = t[f],
                of.test(y)) {
                    if (delete t[f],
                    w = w || "toggle" === y,
                    y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f])
                            continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                }
            if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
                for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY],
                null == (o = e && e.display) && (o = r.get(n, "display")),
                "none" === (l = i.css(n, "display")) && (o ? l = o : (et([n], !0),
                o = n.style.display || o,
                l = i.css(n, "display"),
                et([n]))),
                ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() {
                    s.display = o
                }),
                null == o && (l = s.display,
                o = "none" === l ? "" : l)),
                s.display = "inline-block")),
                u.overflow && (s.overflow = "hidden",
                v.always(function() {
                    s.overflow = u.overflow[0];
                    s.overflowX = u.overflow[1];
                    s.overflowY = u.overflow[2]
                })),
                h = !1,
                p)
                    h || (e ? "hidden"in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                        display: o
                    }),
                    w && (e.hidden = !a),
                    a && et([n], !0),
                    v.done(function() {
                        for (f in a || et([n]),
                        r.remove(n, "fxshow"),
                        p)
                            i.style(n, f, p[f])
                    })),
                    h = cf(a ? e[f] : 0, f, v),
                    f in e || (e[f] = h.start,
                    a && (h.end = h.start,
                    h.start = 0))
        }
        ],
        prefilter: function(n, t) {
            t ? v.prefilters.unshift(n) : v.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || u(n) && n,
            duration: n,
            easing: r && t || t && !u(t) && t
        };
        return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default),
        null != f.queue && !0 !== f.queue || (f.queue = "fx"),
        f.old = f.complete,
        f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }
        ,
        f
    }
    ;
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(kt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n)
              , o = i.speed(t, u, f)
              , e = function() {
                var t = v(this, i.extend({}, n), o);
                (s || r.get(this, "finish")) && t.stop(!0)
            };
            return e.finish = e,
            s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t,
            t = n,
            n = void 0),
            t && !1 !== n && this.queue(n || "fx", []),
            this.each(function() {
                var s = !0
                  , t = null != n && n + "queueHooks"
                  , o = i.timers
                  , e = r.get(this);
                if (t)
                    e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e)
                        e[t] && e[t].stop && sf.test(t) && f(e[t]);
                for (t = o.length; t--; )
                    o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u),
                    s = !1,
                    o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"),
            this.each(function() {
                var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers, s = u ? u.length : 0;
                for (e.finish = !0,
                i.queue(this, n, []),
                o && o.stop && o.stop.call(this, !0),
                t = f.length; t--; )
                    f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0),
                    f.splice(t, 1));
                for (t = 0; t < s; t++)
                    u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ai(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ai("show"),
        slideUp: ai("hide"),
        slideToggle: ai("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0, t = i.timers;
        for (ct = Date.now(); n < t.length; n++)
            (r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        ct = void 0
    }
    ;
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        li || (li = !0,
        ur())
    }
    ;
    i.fx.stop = function() {
        li = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx && i.fx.speeds[t] || t,
        r = r || "fx",
        this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    }
    ;
    lt = f.createElement("input");
    ef = f.createElement("select").appendChild(f.createElement("option"));
    lt.type = "checkbox";
    e.checkOn = "" !== lt.value;
    e.optSelected = ef.selected;
    (lt = f.createElement("input")).value = "t";
    lt.type = "radio";
    e.radioValue = "t" === lt.value;
    at = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return p(this, i.attr, n, t, 1 < arguments.length)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e)
                return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? lf : void 0)),
                void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""),
                r) : u && "get"in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!e.radioValue && "radio" === t && c(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t),
                        i && (n.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0, r = t && t.match(l);
            if (r && 1 === n.nodeType)
                while (i = r[u++])
                    n.removeAttribute(i)
        }
    });
    lf = {
        set: function(n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r),
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = at[t] || i.find.attr;
        at[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = at[u],
            at[u] = f,
            f = null != r(n, t, i) ? u : null,
            at[u] = e),
            f
        }
    });
    af = /^(?:input|select|textarea|button)$/i;
    vf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return p(this, i.prop, n, t, 1 < arguments.length)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e)
                return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t,
                u = i.propHooks[t]),
                void 0 !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get"in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : af.test(n.nodeName) || vf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, f, e, s, h, c = 0;
            if (u(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, nt(this)))
                });
            if ((o = fr(n)).length)
                while (t = this[c++])
                    if (f = nt(t),
                    r = 1 === t.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++]; )
                            r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = g(r)) && t.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, f, e, s, h, c = 0;
            if (u(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, nt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((o = fr(n)).length)
                while (r = this[c++])
                    if (f = nt(r),
                    t = 1 === r.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++]; )
                            while (-1 < t.indexOf(" " + e + " "))
                                t = t.replace(" " + e + " ", " ");
                        f !== (h = g(t)) && r.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var f = typeof n
              , e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, nt(this), t), t)
            }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0,
                    u = i(this),
                    s = fr(n); t = s[o++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    void 0 !== n && "boolean" !== f || ((t = nt(this)) && r.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++]; )
                if (1 === t.nodeType && -1 < (" " + g(nt(t)) + " ").indexOf(i))
                    return !0;
            return !1
        }
    });
    yf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n),
            this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })),
                (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get"in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof (r = f.value) ? r.replace(yf, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : g(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(),
                            f)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--; )
                        ((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
                    return r || (n.selectedIndex = -1),
                    e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t))
                    return n.checked = -1 < i.inArray(i(n).val(), t)
            }
        };
        e.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        }
        )
    });
    e.focusin = "onfocusin"in n;
    er = /^(?:focusinfocus|focusoutblur)$/;
    or = function(n) {
        n.stopPropagation()
    }
    ;
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || f], h = ui.call(t, "type") ? t.type : t, b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || f,
            3 !== o.nodeType && 8 !== o.nodeType && !er.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(),
            b.sort()),
            v = h.indexOf(":") < 0 && "on" + h,
            (t = t[i.expando] ? t : new i.Event(h,"object" == typeof t && t)).isTrigger = s ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = o),
            e = null == e ? [t] : i.makeArray(e, [t]),
            a = i.event.special[h] || {},
            s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
                if (!s && !a.noBubble && !tt(o)) {
                    for (d = a.delegateType || h,
                    er.test(d + h) || (c = c.parentNode); c; c = c.parentNode)
                        w.push(c),
                        l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0; (c = w[k++]) && !t.isPropagationStopped(); )
                    p = c,
                    t.type = 1 < k ? d : a.bindType || h,
                    (y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle")) && y.apply(c, e),
                    (y = v && c[v]) && y.apply && yt(c) && (t.result = y.apply(c, e),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !yt(o) || v && u(o[h]) && !tt(o) && ((l = o[v]) && (o[v] = null),
                i.event.triggered = h,
                t.isPropagationStopped() && p.addEventListener(h, or),
                o[h](),
                t.isPropagationStopped() && p.removeEventListener(h, or),
                i.event.triggered = void 0,
                l && (o[v] = l)),
                t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r)
                return i.event.trigger(n, t, r, !0)
        }
    });
    e.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0),
                r.remove(i, t))
            }
        }
    });
    var ti = n.location
      , pf = Date.now()
      , sr = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || "string" != typeof t)
            return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            r = void 0
        }
        return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t),
        r
    }
    ;
    var fo = /\[\]$/
      , wf = /\r?\n/g
      , eo = /^(?:submit|button|image|reset|file)$/i
      , oo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [], e = function(n, t) {
            var i = u(t) ? t() : t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (null == n)
            return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                e(this.name, this.value)
            });
        else
            for (r in n)
                hr(r, n[r], t, e);
        return f.join("&")
    }
    ;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && oo.test(this.nodeName) && !eo.test(n) && (this.checked || !dt.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(wf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(wf, "\r\n")
                }
            }).get()
        }
    });
    var so = /%20/g
      , ho = /#.*$/
      , co = /([?&])_=[^&]*/
      , lo = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , ao = /^(?:GET|HEAD)$/
      , vo = /^\/\//
      , bf = {}
      , cr = {}
      , kf = "*/".concat("*")
      , lr = f.createElement("a");
    return lr.href = ti.href,
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ti.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ti.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kf,
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
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ar(ar(n, i.ajaxSettings), t) : ar(i.ajaxSettings, n)
        },
        ajaxPrefilter: df(bf),
        ajaxTransport: df(cr),
        ajax: function(t, r) {
            function b(t, r, f, c) {
                var v, rt, b, p, g, l = r;
                s || (s = !0,
                d && n.clearTimeout(d),
                a = void 0,
                k = c || "",
                e.readyState = 0 < t ? 4 : 0,
                v = 200 <= t && t < 300 || 304 === t,
                f && (p = function(n, t, i) {
                    for (var e, u, f, o, s = n.contents, r = n.dataTypes; "*" === r[0]; )
                        r.shift(),
                        void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
                    if (e)
                        for (u in s)
                            if (s[u] && s[u].test(e)) {
                                r.unshift(u);
                                break
                            }
                    if (r[0]in i)
                        f = r[0];
                    else {
                        for (u in i) {
                            if (!r[0] || n.converters[u + " " + r[0]]) {
                                f = u;
                                break
                            }
                            o || (o = u)
                        }
                        f = f || o
                    }
                    if (f)
                        return f !== r[0] && r.unshift(f),
                        i[f]
                }(u, e, f)),
                p = function(n, t, i, r) {
                    var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
                    if (c[1])
                        for (f in n.converters)
                            o[f.toLowerCase()] = n.converters[f];
                    for (u = c.shift(); u; )
                        if (n.responseFields[u] && (i[n.responseFields[u]] = t),
                        !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                        e = u,
                        u = c.shift())
                            if ("*" === u)
                                u = e;
                            else if ("*" !== e && e !== u) {
                                if (!(f = o[e + " " + u] || o["* " + u]))
                                    for (h in o)
                                        if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                            !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== f)
                                    if (f && n.throws)
                                        t = f(t);
                                    else
                                        try {
                                            t = f(t)
                                        } catch (n) {
                                            return {
                                                state: "parsererror",
                                                error: f ? n : "No conversion from " + e + " to " + u
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(u, p, e, v),
                v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g),
                (g = e.getResponseHeader("etag")) && (i.etag[o] = g)),
                204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state,
                rt = p.data,
                v = !(b = p.error))) : (b = l,
                !t && l || (l = "error",
                t < 0 && (t = 0))),
                e.status = t,
                e.statusText = (r || l) + "",
                v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]),
                e.statusCode(w),
                w = void 0,
                y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]),
                it.fireWith(h, [e, l]),
                y && (nt.trigger("ajaxComplete", [e, u]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t,
            t = void 0);
            r = r || {};
            var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r), h = u.context || u, nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event, tt = i.Deferred(), it = i.Callbacks("once memory"), w = u.statusCode || {}, rt = {}, ut = {}, ft = "canceled", e = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (s) {
                        if (!v)
                            for (v = {}; t = lo.exec(k); )
                                v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = v[n.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return s ? k : null
                },
                setRequestHeader: function(n, t) {
                    return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n,
                    rt[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return null == s && (u.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (s)
                            e.always(n[e.status]);
                        else
                            for (t in n)
                                w[t] = [w[t], n[t]];
                    return this
                },
                abort: function(n) {
                    var t = n || ft;
                    return a && a.abort(t),
                    b(0, t),
                    this
                }
            };
            if (tt.promise(e),
            u.url = ((t || u.url || ti.href) + "").replace(vo, ti.protocol + "//"),
            u.type = r.method || r.type || u.method || u.type,
            u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""],
            null == u.crossDomain) {
                c = f.createElement("a");
                try {
                    c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = lr.protocol + "//" + lr.host != c.protocol + "//" + c.host
                } catch (t) {
                    u.crossDomain = !0
                }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)),
            gf(bf, u, r, e),
            s)
                return e;
            for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"),
            u.type = u.type.toUpperCase(),
            u.hasContent = !ao.test(u.type),
            o = u.url.replace(ho, ""),
            u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(so, "+")) : (p = u.url.slice(o.length),
            u.data && (u.processData || "string" == typeof u.data) && (o += (sr.test(o) ? "&" : "?") + u.data,
            delete u.data),
            !1 === u.cache && (o = o.replace(co, "$1"),
            p = (sr.test(o) ? "&" : "?") + "_=" + pf++ + p),
            u.url = o + p),
            u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]),
            i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])),
            (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType),
            e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + kf + "; q=0.01" : "") : u.accepts["*"]),
            u.headers)
                e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s))
                return e.abort();
            if (ft = "abort",
            it.add(u.complete),
            e.done(u.success),
            e.fail(u.error),
            a = gf(cr, u, r, e)) {
                if (e.readyState = 1,
                y && nt.trigger("ajaxSend", [e, u]),
                s)
                    return e;
                u.async && 0 < u.timeout && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, u.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (t) {
                    if (s)
                        throw t;
                    b(-1, t)
                }
            } else
                b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    }),
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, f, e) {
            return u(r) && (e = e || f,
            f = r,
            r = void 0),
            i.ajax(i.extend({
                url: n,
                type: t,
                dataType: e,
                data: r,
                success: f
            }, i.isPlainObject(n) && n))
        }
    }),
    i._evalUrl = function(n, t) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(n) {
                i.globalEval(n, t)
            }
        })
    }
    ,
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (u(n) && (n = n.call(this[0])),
            t = i(n, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                return n
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = u(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }
    ,
    i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }
    ,
    i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    ,
    ne = {
        0: 200,
        1223: 204
    },
    vt = i.ajaxSettings.xhr(),
    e.cors = !!vt && "withCredentials"in vt,
    e.ajax = vt = !!vt,
    i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || vt && !t.crossDomain)
            return {
                send: function(u, f) {
                    var o, e = t.xhr();
                    if (e.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            e[o] = t.xhrFields[o];
                    for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType),
                    t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"),
                    u)
                        e.setRequestHeader(o, u[o]);
                    i = function(n) {
                        return function() {
                            i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null,
                            "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(ne[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                                binary: e.response
                            } : {
                                text: e.responseText
                            }, e.getAllResponseHeaders()))
                        }
                    }
                    ;
                    e.onload = i();
                    r = e.onerror = e.ontimeout = i("error");
                    void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                        4 === e.readyState && n.setTimeout(function() {
                            i && r()
                        })
                    }
                    ;
                    i = i("abort");
                    try {
                        e.send(t.hasContent && t.data || null)
                    } catch (u) {
                        if (i)
                            throw u;
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }),
    i.ajaxTransport("script", function(n) {
        var r, t;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(u, e) {
                    r = i("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type)
                    }
                    );
                    f.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
    }),
    vr = [],
    vi = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = vr.pop() || i.expando + "_" + pf++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = !1 !== t.jsonp && (vi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && vi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0])
            return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            h ? t[h] = t[h].replace(vi, "$1" + e) : !1 !== t.jsonp && (t.url += (sr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
            t.converters["script json"] = function() {
                return s || i.error(e + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = n[e],
            n[e] = function() {
                s = arguments
            }
            ,
            f.always(function() {
                void 0 === o ? i(n).removeProp(e) : n[e] = o;
                t[e] && (t.jsonpCallback = r.jsonpCallback,
                vr.push(e));
                s && u(o) && o(s[0]);
                s = o = void 0
            }),
            "script"
    }),
    e.createHTMLDocument = ((te = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>",
    2 === te.childNodes.length),
    i.parseHTML = function(n, t, r) {
        return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t,
        t = !1),
        t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href,
        t.head.appendChild(s)) : t = f),
        u = !r && [],
        (o = wi.exec(n)) ? [t.createElement(o[1])] : (o = vu([n], t, u),
        u && u.length && i(u).remove(),
        i.merge([], o.childNodes)));
        var s, o, u
    }
    ,
    i.fn.load = function(n, t, r) {
        var f, s, h, e = this, o = n.indexOf(" ");
        return -1 < o && (f = g(n.slice(o)),
        n = n.slice(0, o)),
        u(t) ? (r = t,
        t = void 0) : t && "object" == typeof t && (s = "POST"),
        0 < e.length && i.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) {
            e.each(function() {
                r.apply(this, h || [n.responseText, t, n])
            })
        }
        ),
        this
    }
    ,
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ,
    i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, f, c, l = i.css(n, "position"), a = i(n), e = {};
            "static" === l && (n.style.position = "relative");
            f = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top,
            o = v.left) : (h = parseFloat(s) || 0,
            o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, f)));
            null != t.top && (e.top = t.top - f.top + h);
            null != t.left && (e.left = t.left - f.left + o);
            "using"in t ? t.using.call(n, e) : a.css(e)
        }
    },
    i.fn.extend({
        offset: function(n) {
            if (arguments.length)
                return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
            var r, u, t = this[0];
            if (t)
                return t.getClientRects().length ? (r = t.getBoundingClientRect(),
                u = t.ownerDocument.defaultView,
                {
                    top: r.top + u.pageYOffset,
                    left: r.left + u.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0], f = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === i.css(t, "position"))
                    r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(),
                    u = t.ownerDocument,
                    n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position"); )
                        n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0),
                    f.left += i.css(n, "borderLeftWidth", !0))
                }
                return {
                    top: r.top - f.top - i.css(t, "marginTop", !0),
                    left: r.left - f.left - i.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position"); )
                    n = n.offsetParent;
                return n || bt
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return p(this, function(n, i, u) {
                var f;
                if (tt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView),
                void 0 === u)
                    return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }),
    i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = ku(e.pixelPosition, function(n, r) {
            if (r)
                return r = ni(n, t),
                tr.test(r) ? i(n).position()[t] + "px" : r
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f)
                  , s = r || (!0 === f || !0 === e ? "margin" : "border");
                return p(this, function(t, r, f) {
                    var e;
                    return tt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement,
                    Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    }),
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t)
        }
    }),
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }),
    i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }),
    i.proxy = function(n, t) {
        var r, f, e;
        if ("string" == typeof t && (r = n[t],
        t = n,
        n = r),
        u(n))
            return f = b.call(arguments, 2),
            (e = function() {
                return n.apply(t || this, f.concat(b.call(arguments)))
            }
            ).guid = n.guid = n.guid || i.guid++,
            e
    }
    ,
    i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }
    ,
    i.isArray = Array.isArray,
    i.parseJSON = JSON.parse,
    i.nodeName = c,
    i.isFunction = u,
    i.isWindow = tt,
    i.camelCase = y,
    i.type = it,
    i.now = Date.now,
    i.isNumeric = function(n) {
        var t = i.type(n);
        return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }),
    ie = n.jQuery,
    re = n.$,
    i.noConflict = function(t) {
        return n.$ === i && (n.$ = re),
        t && n.jQuery === i && (n.jQuery = ie),
        i
    }
    ,
    t || (n.jQuery = n.$ = i),
    i
}),
function(n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
}(function(n) {
    "use strict";
    function o(n) {
        return n == null ? n + "" : typeof n == "object" ? v[ct.call(n)] || "object" : typeof n
    }
    function h(n, t, i) {
        var r = k[t.type] || {};
        return n == null ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n),
        isNaN(n)) ? t.def : r.mod ? (n + r.mod) % r.mod : Math.min(r.max, Math.max(0, n))
    }
    function nt(n) {
        var f = t()
          , e = f._rgba = [];
        return (n = n.toLowerCase(),
        r(at, function(t, i) {
            var r, s = i.re.exec(n), h = s && i.parse(s), o = i.space || "rgba";
            if (h)
                return r = f[o](h),
                f[u[o].cache] = r[u[o].cache],
                e = f._rgba = r._rgba,
                !1
        }),
        e.length) ? (e.join() === "0,0,0,0" && i.extend(e, s.transparent),
        f) : s[n]
    }
    function y(n, t, i) {
        return (i = (i + 1) % 1,
        i * 6 < 1) ? n + (t - n) * i * 6 : i * 2 < 1 ? t : i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
    }
    function yt(n) {
        for (var t = n.css("visibility"); t === "inherit"; )
            n = n.parent(),
            t = n.css("visibility");
        return t === "visible"
    }
    function kt(n) {
        for (var t, i; n.length && n[0] !== document; ) {
            if (t = n.css("position"),
            (t === "absolute" || t === "relative" || t === "fixed") && (i = parseInt(n.css("zIndex"), 10),
            !isNaN(i) && i !== 0))
                return i;
            n = n.parent()
        }
        return 0
    }
    function ut() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        this._inDialog = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: "",
            selectMonthLabel: "Select month",
            selectYearLabel: "Select year"
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            onUpdateDatepicker: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        n.extend(this._defaults, this.regional[""]);
        this.regional.en = n.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
        this.dpDiv = ft(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
    }
    function ft(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", i, function() {
            n(this).removeClass("ui-state-hover");
            this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).removeClass("ui-datepicker-prev-hover");
            this.className.indexOf("ui-datepicker-next") !== -1 && n(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", i, et)
    }
    function et() {
        n.datepicker._isDisabledDatepicker(f.inline ? f.dpDiv.parent()[0] : f.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        n(this).addClass("ui-state-hover"),
        this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).addClass("ui-datepicker-prev-hover"),
        this.className.indexOf("ui-datepicker-next") !== -1 && n(this).addClass("ui-datepicker-next-hover"))
    }
    function l(t, i) {
        n.extend(t, i);
        for (var r in i)
            i[r] == null && (t[r] = i[r]);
        return t
    }
    function e(n) {
        return function() {
            var t = this.element.val();
            n.apply(this, arguments);
            this._refresh();
            t !== this.element.val() && this._trigger("change")
        }
    }
    var ht, vt, it, rt, wt, bt, f, dt, gt, ni, ti, ii, ri;
    n.ui = n.ui || {};
    var ui = n.ui.version = "1.13.2"
      , ot = 0
      , st = Array.prototype.hasOwnProperty
      , b = Array.prototype.slice;
    n.cleanData = function(t) {
        return function(i) {
            for (var r, u, f = 0; (u = i[f]) != null; f++)
                r = n._data(u, "events"),
                r && r.remove && n(u).triggerHandler("remove");
            t(i)
        }
    }(n.cleanData);
    n.widget = function(t, i, r) {
        var f, u, o, h = {}, e = t.split(".")[0], s;
        return t = t.split(".")[1],
        s = e + "-" + t,
        r || (r = i,
        i = n.Widget),
        Array.isArray(r) && (r = n.extend.apply(null, [{}].concat(r))),
        n.expr.pseudos[s.toLowerCase()] = function(t) {
            return !!n.data(t, s)
        }
        ,
        n[e] = n[e] || {},
        f = n[e][t],
        u = n[e][t] = function(n, t) {
            if (!this || !this._createWidget)
                return new u(n,t);
            arguments.length && this._createWidget(n, t)
        }
        ,
        n.extend(u, f, {
            version: r.version,
            _proto: n.extend({}, r),
            _childConstructors: []
        }),
        o = new i,
        o.options = n.widget.extend({}, o.options),
        n.each(r, function(n, t) {
            if (typeof t != "function") {
                h[n] = t;
                return
            }
            h[n] = function() {
                function r() {
                    return i.prototype[n].apply(this, arguments)
                }
                function u(t) {
                    return i.prototype[n].apply(this, t)
                }
                return function() {
                    var i = this._super, f = this._superApply, n;
                    return this._super = r,
                    this._superApply = u,
                    n = t.apply(this, arguments),
                    this._super = i,
                    this._superApply = f,
                    n
                }
            }()
        }),
        u.prototype = n.widget.extend(o, {
            widgetEventPrefix: f ? o.widgetEventPrefix || t : t
        }, h, {
            constructor: u,
            namespace: e,
            widgetName: t,
            widgetFullName: s
        }),
        f ? (n.each(f._childConstructors, function(t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto)
        }),
        delete f._childConstructors) : i._childConstructors.push(u),
        n.widget.bridge(t, u),
        u
    }
    ;
    n.widget.extend = function(t) {
        for (var f = b.call(arguments, 1), u = 0, e = f.length, i, r; u < e; u++)
            for (i in f[u])
                r = f[u][i],
                st.call(f[u], i) && r !== undefined && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r);
        return t
    }
    ;
    n.widget.bridge = function(t, i) {
        var r = i.prototype.widgetFullName || t;
        n.fn[t] = function(u) {
            var o = typeof u == "string"
              , e = b.call(arguments, 1)
              , f = this;
            return o ? this.length || u !== "instance" ? this.each(function() {
                var i, o = n.data(this, r);
                return u === "instance" ? (f = o,
                !1) : o ? typeof o[u] != "function" || u.charAt(0) === "_" ? n.error("no such method '" + u + "' for " + t + " widget instance") : (i = o[u].apply(o, e),
                i !== o && i !== undefined ? (f = i && i.jquery ? f.pushStack(i.get()) : i,
                !1) : void 0) : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'")
            }) : f = undefined : (e.length && (u = n.widget.extend.apply(null, [u].concat(e))),
            this.each(function() {
                var t = n.data(this, r);
                t ? (t.option(u || {}),
                t._init && t._init()) : n.data(this, r, new i(u,this))
            })),
            f
        }
    }
    ;
    n.Widget = function() {}
    ;
    n.Widget._childConstructors = [];
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = n(i || this.defaultElement || this)[0];
            this.element = n(i);
            this.uuid = ot++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = n();
            this.hoverable = n();
            this.focusable = n();
            this.classesElementLookup = {};
            i !== this && (n.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(n) {
                    n.target === i && this.destroy()
                }
            }),
            this.document = n(i.style ? i.ownerDocument : i.document || i),
            this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
            this._create();
            this.options.disabled && this._setOptionDisabled(this.options.disabled);
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function() {
            var t = this;
            this._destroy();
            n.each(this.classesElementLookup, function(n, i) {
                t._removeClass(i, n)
            });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace)
        },
        _destroy: n.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var e = t, r, u, f;
            if (arguments.length === 0)
                return n.widget.extend({}, this.options);
            if (typeof t == "string")
                if (e = {},
                r = t.split("."),
                t = r.shift(),
                r.length) {
                    for (u = e[t] = n.widget.extend({}, this.options[t]),
                    f = 0; f < r.length - 1; f++)
                        u[r[f]] = u[r[f]] || {},
                        u = u[r[f]];
                    if (t = r.pop(),
                    arguments.length === 1)
                        return u[t] === undefined ? null : u[t];
                    u[t] = i
                } else {
                    if (arguments.length === 1)
                        return this.options[t] === undefined ? null : this.options[t];
                    e[t] = i
                }
            return this._setOptions(e),
            this
        },
        _setOptions: function(n) {
            for (var t in n)
                this._setOption(t, n[t]);
            return this
        },
        _setOption: function(n, t) {
            return n === "classes" && this._setOptionClasses(t),
            this.options[n] = t,
            n === "disabled" && this._setOptionDisabled(t),
            this
        },
        _setOptionClasses: function(t) {
            var i, u, r;
            for (i in t)
                (r = this.classesElementLookup[i],
                t[i] !== this.options.classes[i] && r && r.length) && (u = n(r.get()),
                this._removeClass(r, i),
                u.addClass(this._classes({
                    element: u,
                    keys: i,
                    classes: t,
                    add: !0
                })))
        },
        _setOptionDisabled: function(n) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!n);
            n && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(t) {
            function f() {
                var r = [];
                t.element.each(function(t, u) {
                    var f = n.map(i.classesElementLookup, function(n) {
                        return n
                    }).some(function(n) {
                        return n.is(u)
                    });
                    f || r.push(u)
                });
                i._on(n(r), {
                    remove: "_untrackClassesElement"
                })
            }
            function u(u, e) {
                for (var s, o = 0; o < u.length; o++)
                    s = i.classesElementLookup[u[o]] || n(),
                    t.add ? (f(),
                    s = n(n.uniqueSort(s.get().concat(t.element.get())))) : s = n(s.not(t.element).get()),
                    i.classesElementLookup[u[o]] = s,
                    r.push(u[o]),
                    e && t.classes[u[o]] && r.push(t.classes[u[o]])
            }
            var r = []
              , i = this;
            return t = n.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, t),
            t.keys && u(t.keys.match(/\S+/g) || [], !0),
            t.extra && u(t.extra.match(/\S+/g) || []),
            r.join(" ")
        },
        _untrackClassesElement: function(t) {
            var i = this;
            n.each(i.classesElementLookup, function(r, u) {
                n.inArray(t.target, u) !== -1 && (i.classesElementLookup[r] = n(u.not(t.target).get()))
            });
            this._off(n(t.target))
        },
        _removeClass: function(n, t, i) {
            return this._toggleClass(n, t, i, !1)
        },
        _addClass: function(n, t, i) {
            return this._toggleClass(n, t, i, !0)
        },
        _toggleClass: function(n, t, i, r) {
            r = typeof r == "boolean" ? r : i;
            var u = typeof n == "string" || n === null
              , f = {
                extra: u ? t : i,
                keys: u ? n : t,
                element: u ? this.element : n,
                add: r
            };
            return f.element.toggleClass(this._classes(f), r),
            this
        },
        _on: function(t, i, r) {
            var f, u = this;
            typeof t != "boolean" && (r = i,
            i = t,
            t = !1);
            r ? (i = f = n(i),
            this.bindings = this.bindings.add(i)) : (r = i,
            i = this.element,
            f = this.widget());
            n.each(r, function(r, e) {
                function o() {
                    if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled"))
                        return (typeof e == "string" ? u[e] : e).apply(u, arguments)
                }
                typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                var s = r.match(/^([\w:-]*)\s*(.*)$/)
                  , h = s[1] + u.eventNamespace
                  , c = s[2];
                if (c)
                    f.on(h, c, o);
                else
                    i.on(h, o)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            t.off(i);
            this.bindings = n(this.bindings.not(t).get());
            this.focusable = n(this.focusable.not(t).get());
            this.hoverable = n(this.hoverable.not(t).get())
        },
        _delay: function(n, t) {
            function r() {
                return (typeof n == "string" ? i[n] : n).apply(i, arguments)
            }
            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t);
            this._on(t, {
                mouseenter: function(t) {
                    this._addClass(n(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(n(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t);
            this._on(t, {
                focusin: function(t) {
                    this._addClass(n(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(n(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {},
            i = n.Event(i),
            i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            i.target = this.element[0],
            f = i.originalEvent,
            f)
                for (u in f)
                    u in i || (i[u] = f[u]);
            return this.element.trigger(i, r),
            !(typeof e == "function" && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    };
    n.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        n.Widget.prototype["_" + t] = function(r, u, f) {
            typeof u == "string" && (u = {
                effect: u
            });
            var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
            u = u || {};
            typeof u == "number" ? u = {
                duration: u
            } : u === !0 && (u = {});
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                n(this)[t]();
                f && f.call(r[0]);
                i()
            })
        }
    });
    ht = n.widget,
    function() {
        function c(n, t, i) {
            return [parseFloat(n[0]) * (h.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (h.test(n[1]) ? i / 100 : 1)]
        }
        function r(t, i) {
            return parseInt(n.css(t, i), 10) || 0
        }
        function l(n) {
            return n != null && n === n.window
        }
        function v(n) {
            var t = n[0];
            return t.nodeType === 9 ? {
                width: n.width(),
                height: n.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : l(t) ? {
                width: n.width(),
                height: n.height(),
                offset: {
                    top: n.scrollTop(),
                    left: n.scrollLeft()
                }
            } : t.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: t.pageY,
                    left: t.pageX
                }
            } : {
                width: n.outerWidth(),
                height: n.outerHeight(),
                offset: n.offset()
            }
        }
        var u, i = Math.max, t = Math.abs, f = /left|center|right/, e = /top|center|bottom/, o = /[\+\-]\d+(\.[\d]+)?%?/, s = /^\w+/, h = /%$/, a = n.fn.position;
        n.position = {
            scrollbarWidth: function() {
                if (u !== undefined)
                    return u;
                var r, i, t = n("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'><\/div><\/div>"), f = t.children()[0];
                return n("body").append(t),
                r = f.offsetWidth,
                t.css("overflow", "scroll"),
                i = f.offsetWidth,
                r === i && (i = t[0].clientWidth),
                t.remove(),
                u = r - i
            },
            getScrollInfo: function(t) {
                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
                  , r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
                  , u = i === "scroll" || i === "auto" && t.width < t.element[0].scrollWidth
                  , f = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
                return {
                    width: f ? n.position.scrollbarWidth() : 0,
                    height: u ? n.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var i = n(t || window)
                  , r = l(i[0])
                  , u = !!i[0] && i[0].nodeType === 9
                  , f = !r && !u;
                return {
                    element: i,
                    isWindow: r,
                    isDocument: u,
                    offset: f ? n(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        };
        n.fn.position = function(u) {
            if (!u || !u.of)
                return a.apply(this, arguments);
            u = n.extend({}, u);
            var w, h, l, p, y, k, d = typeof u.of == "string" ? n(document).find(u.of) : n(u.of), nt = n.position.getWithinInfo(u.within), tt = n.position.getScrollInfo(nt), b = (u.collision || "flip").split(" "), g = {};
            return k = v(d),
            d[0].preventDefault && (u.at = "left top"),
            h = k.width,
            l = k.height,
            p = k.offset,
            y = n.extend({}, p),
            n.each(["my", "at"], function() {
                var n = (u[this] || "").split(" "), t, i;
                n.length === 1 && (n = f.test(n[0]) ? n.concat(["center"]) : e.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                n[0] = f.test(n[0]) ? n[0] : "center";
                n[1] = e.test(n[1]) ? n[1] : "center";
                t = o.exec(n[0]);
                i = o.exec(n[1]);
                g[this] = [t ? t[0] : 0, i ? i[0] : 0];
                u[this] = [s.exec(n[0])[0], s.exec(n[1])[0]]
            }),
            b.length === 1 && (b[1] = b[0]),
            u.at[0] === "right" ? y.left += h : u.at[0] === "center" && (y.left += h / 2),
            u.at[1] === "bottom" ? y.top += l : u.at[1] === "center" && (y.top += l / 2),
            w = c(g.at, h, l),
            y.left += w[0],
            y.top += w[1],
            this.each(function() {
                var v, k, e = n(this), o = e.outerWidth(), s = e.outerHeight(), it = r(this, "marginLeft"), rt = r(this, "marginTop"), ut = o + it + r(this, "marginRight") + tt.width, ft = s + rt + r(this, "marginBottom") + tt.height, f = n.extend({}, y), a = c(g.my, e.outerWidth(), e.outerHeight());
                u.my[0] === "right" ? f.left -= o : u.my[0] === "center" && (f.left -= o / 2);
                u.my[1] === "bottom" ? f.top -= s : u.my[1] === "center" && (f.top -= s / 2);
                f.left += a[0];
                f.top += a[1];
                v = {
                    marginLeft: it,
                    marginTop: rt
                };
                n.each(["left", "top"], function(t, i) {
                    n.ui.position[b[t]] && n.ui.position[b[t]][i](f, {
                        targetWidth: h,
                        targetHeight: l,
                        elemWidth: o,
                        elemHeight: s,
                        collisionPosition: v,
                        collisionWidth: ut,
                        collisionHeight: ft,
                        offset: [w[0] + a[0], w[1] + a[1]],
                        my: u.my,
                        at: u.at,
                        within: nt,
                        elem: e
                    })
                });
                u.using && (k = function(n) {
                    var r = p.left - f.left
                      , v = r + h - o
                      , c = p.top - f.top
                      , y = c + l - s
                      , a = {
                        target: {
                            element: d,
                            left: p.left,
                            top: p.top,
                            width: h,
                            height: l
                        },
                        element: {
                            element: e,
                            left: f.left,
                            top: f.top,
                            width: o,
                            height: s
                        },
                        horizontal: v < 0 ? "left" : r > 0 ? "right" : "center",
                        vertical: y < 0 ? "top" : c > 0 ? "bottom" : "middle"
                    };
                    h < o && t(r + v) < h && (a.horizontal = "center");
                    l < s && t(c + y) < l && (a.vertical = "middle");
                    a.important = i(t(r), t(v)) > i(t(c), t(y)) ? "horizontal" : "vertical";
                    u.using.call(this, n, a)
                }
                );
                e.offset(n.extend(f, {
                    using: k
                }))
            })
        }
        ;
        n.ui.position = {
            fit: {
                left: function(n, t) {
                    var e = t.within, u = e.isWindow ? e.scrollLeft : e.offset.left, o = e.width, s = n.left - t.collisionPosition.marginLeft, r = u - s, f = s + t.collisionWidth - o - u, h;
                    t.collisionWidth > o ? r > 0 && f <= 0 ? (h = n.left + r + t.collisionWidth - o - u,
                    n.left += r - h) : n.left = f > 0 && r <= 0 ? u : r > f ? u + o - t.collisionWidth : u : r > 0 ? n.left += r : f > 0 ? n.left -= f : n.left = i(n.left - s, n.left)
                },
                top: function(n, t) {
                    var o = t.within, u = o.isWindow ? o.scrollTop : o.offset.top, e = t.within.height, s = n.top - t.collisionPosition.marginTop, r = u - s, f = s + t.collisionHeight - e - u, h;
                    t.collisionHeight > e ? r > 0 && f <= 0 ? (h = n.top + r + t.collisionHeight - e - u,
                    n.top += r - h) : n.top = f > 0 && r <= 0 ? u : r > f ? u + e - t.collisionHeight : u : r > 0 ? n.top += r : f > 0 ? n.top -= f : n.top = i(n.top - s, n.top)
                }
            },
            flip: {
                left: function(n, i) {
                    var r = i.within, y = r.offset.left + r.scrollLeft, c = r.width, o = r.isWindow ? r.scrollLeft : r.offset.left, l = n.left - i.collisionPosition.marginLeft, a = l - o, v = l + i.collisionWidth - c - o, u = i.my[0] === "left" ? -i.elemWidth : i.my[0] === "right" ? i.elemWidth : 0, f = i.at[0] === "left" ? i.targetWidth : i.at[0] === "right" ? -i.targetWidth : 0, e = -2 * i.offset[0], s, h;
                    a < 0 ? (s = n.left + u + f + e + i.collisionWidth - c - y,
                    (s < 0 || s < t(a)) && (n.left += u + f + e)) : v > 0 && (h = n.left - i.collisionPosition.marginLeft + u + f + e - o,
                    (h > 0 || t(h) < v) && (n.left += u + f + e))
                },
                top: function(n, i) {
                    var r = i.within, y = r.offset.top + r.scrollTop, c = r.height, o = r.isWindow ? r.scrollTop : r.offset.top, l = n.top - i.collisionPosition.marginTop, a = l - o, v = l + i.collisionHeight - c - o, p = i.my[1] === "top", u = p ? -i.elemHeight : i.my[1] === "bottom" ? i.elemHeight : 0, f = i.at[1] === "top" ? i.targetHeight : i.at[1] === "bottom" ? -i.targetHeight : 0, e = -2 * i.offset[1], s, h;
                    a < 0 ? (h = n.top + u + f + e + i.collisionHeight - c - y,
                    (h < 0 || h < t(a)) && (n.top += u + f + e)) : v > 0 && (s = n.top - i.collisionPosition.marginTop + u + f + e - o,
                    (s > 0 || t(s) < v) && (n.top += u + f + e))
                }
            },
            flipfit: {
                left: function() {
                    n.ui.position.flip.left.apply(this, arguments);
                    n.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    n.ui.position.flip.top.apply(this, arguments);
                    n.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }();
    var fi = n.ui.position, ei = n.extend(n.expr.pseudos, {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !!n.data(i, t)
            }
        }) : function(t, i, r) {
            return !!n.data(t, r[3])
        }
    }), oi = n.fn.extend({
        disableSelection: function() {
            var n = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(n + ".ui-disableSelection", function(n) {
                    n.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    }), i = n, v = {}, ct = v.toString, lt = /^([\-+])=\s*(\d+\.?\d*)/, at = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(n) {
            return [n[1], n[2], n[3], n[4]]
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(n) {
            return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
        parse: function(n) {
            return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16), n[4] ? (parseInt(n[4], 16) / 255).toFixed(2) : 1]
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
        parse: function(n) {
            return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16), n[4] ? (parseInt(n[4] + n[4], 16) / 255).toFixed(2) : 1]
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(n) {
            return [n[1], n[2] / 100, n[3] / 100, n[4]]
        }
    }], t = i.Color = function(n, t, r, u) {
        return new i.Color.fn.parse(n,t,r,u)
    }
    , u = {
        rgba: {
            props: {
                red: {
                    idx: 0,
                    type: "byte"
                },
                green: {
                    idx: 1,
                    type: "byte"
                },
                blue: {
                    idx: 2,
                    type: "byte"
                }
            }
        },
        hsla: {
            props: {
                hue: {
                    idx: 0,
                    type: "degrees"
                },
                saturation: {
                    idx: 1,
                    type: "percent"
                },
                lightness: {
                    idx: 2,
                    type: "percent"
                }
            }
        }
    }, k = {
        byte: {
            floor: !0,
            max: 255
        },
        percent: {
            max: 1
        },
        degrees: {
            mod: 360,
            floor: !0
        }
    }, d = t.support = {}, g = i("<p>")[0], s, r = i.each;
    g.style.cssText = "background-color:rgba(1,1,1,.5)";
    d.rgba = g.style.backgroundColor.indexOf("rgba") > -1;
    r(u, function(n, t) {
        t.cache = "_" + n;
        t.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        v["[object " + t + "]"] = t.toLowerCase()
    });
    t.fn = i.extend(t.prototype, {
        parse: function(n, f, e, c) {
            if (n === undefined)
                return this._rgba = [null, null, null, null],
                this;
            (n.jquery || n.nodeType) && (n = i(n).css(f),
            f = undefined);
            var l = this
              , a = o(n)
              , v = this._rgba = [];
            return (f !== undefined && (n = [n, f, e, c],
            a = "array"),
            a === "string") ? this.parse(nt(n) || s._default) : a === "array" ? (r(u.rgba.props, function(t, i) {
                v[i.idx] = h(n[i.idx], i)
            }),
            this) : a === "object" ? (n instanceof t ? r(u, function(t, i) {
                n[i.cache] && (l[i.cache] = n[i.cache].slice())
            }) : r(u, function(t, u) {
                var f = u.cache;
                r(u.props, function(t, i) {
                    if (!l[f] && u.to) {
                        if (t === "alpha" || n[t] == null)
                            return;
                        l[f] = u.to(l._rgba)
                    }
                    l[f][i.idx] = h(n[t], i, !0)
                });
                l[f] && i.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] == null && (l[f][3] = 1),
                u.from && (l._rgba = u.from(l[f])))
            }),
            this) : void 0
        },
        is: function(n) {
            var e = t(n)
              , i = !0
              , f = this;
            return r(u, function(n, t) {
                var o, u = e[t.cache];
                return u && (o = f[t.cache] || t.to && t.to(f._rgba) || [],
                r(t.props, function(n, t) {
                    if (u[t.idx] != null)
                        return i = u[t.idx] === o[t.idx]
                })),
                i
            }),
            i
        },
        _space: function() {
            var n = []
              , t = this;
            return r(u, function(i, r) {
                t[r.cache] && n.push(i)
            }),
            n.pop()
        },
        transition: function(n, i) {
            var f = t(n)
              , s = f._space()
              , e = u[s]
              , c = this.alpha() === 0 ? t("transparent") : this
              , l = c[e.cache] || e.to(c._rgba)
              , o = l.slice();
            return f = f[e.cache],
            r(e.props, function(n, t) {
                var s = t.idx
                  , r = l[s]
                  , u = f[s]
                  , e = k[t.type] || {};
                u !== null && (r === null ? o[s] = u : (e.mod && (u - r > e.mod / 2 ? r += e.mod : r - u > e.mod / 2 && (r -= e.mod)),
                o[s] = h((u - r) * i + r, t)))
            }),
            this[s](o)
        },
        blend: function(n) {
            if (this._rgba[3] === 1)
                return this;
            var r = this._rgba.slice()
              , u = r.pop()
              , f = t(n)._rgba;
            return t(i.map(r, function(n, t) {
                return (1 - u) * f[t] + u * n
            }))
        },
        toRgbaString: function() {
            var t = "rgba("
              , n = i.map(this._rgba, function(n, t) {
                return n != null ? n : t > 2 ? 1 : 0
            });
            return n[3] === 1 && (n.pop(),
            t = "rgb("),
            t + n.join() + ")"
        },
        toHslaString: function() {
            var t = "hsla("
              , n = i.map(this.hsla(), function(n, t) {
                return n == null && (n = t > 2 ? 1 : 0),
                t && t < 3 && (n = Math.round(n * 100) + "%"),
                n
            });
            return n[3] === 1 && (n.pop(),
            t = "hsl("),
            t + n.join() + ")"
        },
        toHexString: function(n) {
            var t = this._rgba.slice()
              , r = t.pop();
            return n && t.push(~~(r * 255)),
            "#" + i.map(t, function(n) {
                return n = (n || 0).toString(16),
                n.length === 1 ? "0" + n : n
            }).join("")
        },
        toString: function() {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
        }
    });
    t.fn.parse.prototype = t.fn;
    u.hsla.to = function(n) {
        if (n[0] == null || n[1] == null || n[2] == null)
            return [null, null, null, n[3]];
        var i = n[0] / 255, r = n[1] / 255, f = n[2] / 255, s = n[3], u = Math.max(i, r, f), e = Math.min(i, r, f), t = u - e, o = u + e, h = o * .5, c, l;
        return c = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240,
        l = t === 0 ? 0 : h <= .5 ? t / o : t / (2 - o),
        [Math.round(c) % 360, l, h, s == null ? 1 : s]
    }
    ;
    u.hsla.from = function(n) {
        if (n[0] == null || n[1] == null || n[2] == null)
            return [null, null, null, n[3]];
        var r = n[0] / 360
          , u = n[1]
          , t = n[2]
          , e = n[3]
          , i = t <= .5 ? t * (1 + u) : t + u - t * u
          , f = 2 * t - i;
        return [Math.round(y(f, i, r + 1 / 3) * 255), Math.round(y(f, i, r) * 255), Math.round(y(f, i, r - 1 / 3) * 255), e]
    }
    ;
    r(u, function(n, i) {
        var f = i.props
          , u = i.cache
          , e = i.to
          , s = i.from;
        t.fn[n] = function(n) {
            if (e && !this[u] && (this[u] = e(this._rgba)),
            n === undefined)
                return this[u].slice();
            var c, l = o(n), a = l === "array" || l === "object" ? n : arguments, i = this[u].slice();
            return r(f, function(n, t) {
                var r = a[l === "object" ? n : t.idx];
                r == null && (r = i[t.idx]);
                i[t.idx] = h(r, t)
            }),
            s ? (c = t(s(i)),
            c[u] = i,
            c) : t(i)
        }
        ;
        r(f, function(i, r) {
            t.fn[i] || (t.fn[i] = function(t) {
                var u, f, e, h, s = o(t);
                return (h = i === "alpha" ? this._hsla ? "hsla" : "rgba" : n,
                u = this[h](),
                f = u[r.idx],
                s === "undefined") ? f : (s === "function" && (t = t.call(this, f),
                s = o(t)),
                t == null && r.empty) ? this : (s === "string" && (e = lt.exec(t),
                e && (t = f + parseFloat(e[2]) * (e[1] === "+" ? 1 : -1))),
                u[r.idx] = t,
                this[h](u))
            }
            )
        })
    });
    t.hook = function(n) {
        var u = n.split(" ");
        r(u, function(n, r) {
            i.cssHooks[r] = {
                set: function(n, u) {
                    var s, f, e = "";
                    if (u !== "transparent" && (o(u) !== "string" || (s = nt(u)))) {
                        if (u = t(s || u),
                        !d.rgba && u._rgba[3] !== 1) {
                            for (f = r === "backgroundColor" ? n.parentNode : n; (e === "" || e === "transparent") && f && f.style; )
                                try {
                                    e = i.css(f, "backgroundColor");
                                    f = f.parentNode
                                } catch (h) {}
                            u = u.blend(e && e !== "transparent" ? e : "_default")
                        }
                        u = u.toRgbaString()
                    }
                    try {
                        n.style[r] = u
                    } catch (h) {}
                }
            };
            i.fx.step[r] = function(n) {
                n.colorInit || (n.start = t(n.elem, r),
                n.end = t(n.end),
                n.colorInit = !0);
                i.cssHooks[r].set(n.elem, n.start.transition(n.end, n.pos))
            }
        })
    }
    ;
    t.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
    i.cssHooks.borderColor = {
        expand: function(n) {
            var t = {};
            return r(["Top", "Right", "Bottom", "Left"], function(i, r) {
                t["border" + r + "Color"] = n
            }),
            t
        }
    };
    s = i.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    };
    var c = "ui-effects-"
      , p = "ui-effects-style"
      , w = "ui-effects-animated";
    n.effects = {
        effect: {}
    },
    function() {
        function f(n) {
            return n.replace(/-([\da-z])/gi, function(n, t) {
                return t.toUpperCase()
            })
        }
        function t(n) {
            var i, r, t = n.ownerDocument.defaultView ? n.ownerDocument.defaultView.getComputedStyle(n, null) : n.currentStyle, u = {};
            if (t && t.length && t[0] && t[t[0]])
                for (r = t.length; r--; )
                    i = t[r],
                    typeof t[i] == "string" && (u[f(i)] = t[i]);
            else
                for (i in t)
                    typeof t[i] == "string" && (u[i] = t[i]);
            return u
        }
        function e(t, i) {
            var e = {}, r, f;
            for (r in i)
                f = i[r],
                t[r] !== f && (u[r] || (n.fx.step[r] || !isNaN(parseFloat(f))) && (e[r] = f));
            return e
        }
        var r = ["add", "remove", "toggle"]
          , u = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, r) {
            n.fx.step[r] = function(n) {
                (n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (i.style(n.elem, r, n.end),
                n.setAttr = !0)
            }
        });
        n.fn.addBack || (n.fn.addBack = function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
        );
        n.effects.animateClass = function(i, u, f, o) {
            var s = n.speed(u, f, o);
            return this.queue(function() {
                var f = n(this), h = f.attr("class") || "", o, u = s.children ? f.find("*").addBack() : f;
                u = u.map(function() {
                    var i = n(this);
                    return {
                        el: i,
                        start: t(this)
                    }
                });
                o = function() {
                    n.each(r, function(n, t) {
                        i[t] && f[t + "Class"](i[t])
                    })
                }
                ;
                o();
                u = u.map(function() {
                    return this.end = t(this.el[0]),
                    this.diff = e(this.start, this.end),
                    this
                });
                f.attr("class", h);
                u = u.map(function() {
                    var i = this
                      , t = n.Deferred()
                      , r = n.extend({}, s, {
                        queue: !1,
                        complete: function() {
                            t.resolve(i)
                        }
                    });
                    return this.el.animate(this.diff, r),
                    t.promise()
                });
                n.when.apply(n, u.get()).done(function() {
                    o();
                    n.each(arguments, function() {
                        var t = this.el;
                        n.each(this.diff, function(n) {
                            t.css(n, "")
                        })
                    });
                    s.complete.call(f[0])
                })
            })
        }
        ;
        n.fn.extend({
            addClass: function(t) {
                return function(i, r, u, f) {
                    return r ? n.effects.animateClass.call(this, {
                        add: i
                    }, r, u, f) : t.apply(this, arguments)
                }
            }(n.fn.addClass),
            removeClass: function(t) {
                return function(i, r, u, f) {
                    return arguments.length > 1 ? n.effects.animateClass.call(this, {
                        remove: i
                    }, r, u, f) : t.apply(this, arguments)
                }
            }(n.fn.removeClass),
            toggleClass: function(t) {
                return function(i, r, u, f, e) {
                    return typeof r == "boolean" || r === undefined ? u ? n.effects.animateClass.call(this, r ? {
                        add: i
                    } : {
                        remove: i
                    }, u, f, e) : t.apply(this, arguments) : n.effects.animateClass.call(this, {
                        toggle: i
                    }, r, u, f)
                }
            }(n.fn.toggleClass),
            switchClass: function(t, i, r, u, f) {
                return n.effects.animateClass.call(this, {
                    add: i,
                    remove: t
                }, r, u, f)
            }
        })
    }(),
    function() {
        function t(t, i, r, u) {
            return n.isPlainObject(t) && (i = t,
            t = t.effect),
            t = {
                effect: t
            },
            i == null && (i = {}),
            typeof i == "function" && (u = i,
            r = null,
            i = {}),
            (typeof i == "number" || n.fx.speeds[i]) && (u = r,
            r = i,
            i = {}),
            typeof r == "function" && (u = r,
            r = null),
            i && n.extend(t, i),
            r = r || i.duration,
            t.duration = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default,
            t.complete = u || i.complete,
            t
        }
        function i(t) {
            return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t] ? !0 : typeof t == "function" ? !0 : typeof t == "object" && !t.effect ? !0 : !1
        }
        function r(n, t) {
            var r = t.outerWidth()
              , u = t.outerHeight()
              , i = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(n) || ["", 0, r, u, 0];
            return {
                top: parseFloat(i[1]) || 0,
                right: i[2] === "auto" ? r : parseFloat(i[2]),
                bottom: i[3] === "auto" ? u : parseFloat(i[3]),
                left: parseFloat(i[4]) || 0
            }
        }
        n.expr && n.expr.pseudos && n.expr.pseudos.animated && (n.expr.pseudos.animated = function(t) {
            return function(i) {
                return !!n(i).data(w) || t(i)
            }
        }(n.expr.pseudos.animated));
        n.uiBackCompat !== !1 && n.extend(n.effects, {
            save: function(n, t) {
                for (var i = 0, r = t.length; i < r; i++)
                    t[i] !== null && n.data(c + t[i], n[0].style[t[i]])
            },
            restore: function(n, t) {
                for (var r, i = 0, u = t.length; i < u; i++)
                    t[i] !== null && (r = n.data(c + t[i]),
                    n.css(t[i], r))
            },
            setMode: function(n, t) {
                return t === "toggle" && (t = n.is(":hidden") ? "show" : "hide"),
                t
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var i = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    float: t.css("float")
                }
                  , u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , f = {
                    width: t.width(),
                    height: t.height()
                }
                  , r = document.activeElement;
                try {
                    r.id
                } catch (e) {
                    r = document.body
                }
                return t.wrap(u),
                (t[0] === r || n.contains(t[0], r)) && n(r).trigger("focus"),
                u = t.parent(),
                t.css("position") === "static" ? (u.css({
                    position: "relative"
                }),
                t.css({
                    position: "relative"
                })) : (n.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }),
                n.each(["top", "left", "bottom", "right"], function(n, r) {
                    i[r] = t.css(r);
                    isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                }),
                t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(f),
                u.css(i).show()
            },
            removeWrapper: function(t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                (t[0] === i || n.contains(t[0], i)) && n(i).trigger("focus")),
                t
            }
        });
        n.extend(n.effects, {
            version: "1.13.2",
            define: function(t, i, r) {
                return r || (r = i,
                i = "effect"),
                n.effects.effect[t] = r,
                n.effects.effect[t].mode = i,
                r
            },
            scaledDimensions: function(n, t, i) {
                if (t === 0)
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                var r = i !== "horizontal" ? (t || 100) / 100 : 1
                  , u = i !== "vertical" ? (t || 100) / 100 : 1;
                return {
                    height: n.height() * u,
                    width: n.width() * r,
                    outerHeight: n.outerHeight() * u,
                    outerWidth: n.outerWidth() * r
                }
            },
            clipToBox: function(n) {
                return {
                    width: n.clip.right - n.clip.left,
                    height: n.clip.bottom - n.clip.top,
                    left: n.clip.left,
                    top: n.clip.top
                }
            },
            unshift: function(n, t, i) {
                var r = n.queue();
                t > 1 && r.splice.apply(r, [1, 0].concat(r.splice(t, i)));
                n.dequeue()
            },
            saveStyle: function(n) {
                n.data(p, n[0].style.cssText)
            },
            restoreStyle: function(n) {
                n[0].style.cssText = n.data(p) || "";
                n.removeData(p)
            },
            mode: function(n, t) {
                var i = n.is(":hidden");
                return t === "toggle" && (t = i ? "show" : "hide"),
                (i ? t === "hide" : t === "show") && (t = "none"),
                t
            },
            getBaseline: function(n, t) {
                var i, r;
                switch (n[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = n[0] / t.height
                }
                switch (n[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = n[1] / t.width
                }
                return {
                    x: r,
                    y: i
                }
            },
            createPlaceholder: function(t) {
                var i, r = t.css("position"), u = t.position();
                return t.css({
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),
                /^(static|relative)/.test(r) && (r = "absolute",
                i = n("<" + t[0].nodeName + ">").insertAfter(t).css({
                    display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight"),
                    float: t.css("float")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),
                t.data(c + "placeholder", i)),
                t.css({
                    position: r,
                    left: u.left,
                    top: u.top
                }),
                i
            },
            removePlaceholder: function(n) {
                var t = c + "placeholder"
                  , i = n.data(t);
                i && (i.remove(),
                n.removeData(t))
            },
            cleanUp: function(t) {
                n.effects.restoreStyle(t);
                n.effects.removePlaceholder(t)
            },
            setTransition: function(t, i, r, u) {
                return u = u || {},
                n.each(i, function(n, i) {
                    var f = t.cssUnit(i);
                    f[0] > 0 && (u[i] = f[0] * r + f[1])
                }),
                u
            }
        });
        n.fn.extend({
            effect: function() {
                function l(t) {
                    function c() {
                        o.removeData(w);
                        n.effects.cleanUp(o);
                        i.mode === "hide" && o.hide();
                        s()
                    }
                    function s() {
                        typeof f == "function" && f.call(o[0]);
                        typeof t == "function" && t()
                    }
                    var o = n(this);
                    i.mode = h.shift();
                    n.uiBackCompat === !1 || u ? i.mode === "none" ? (o[r](),
                    s()) : e.call(o[0], i, c) : (o.is(":hidden") ? r === "hide" : r === "show") ? (o[r](),
                    s()) : e.call(o[0], i, s)
                }
                var i = t.apply(this, arguments)
                  , e = n.effects.effect[i.effect]
                  , u = e.mode
                  , o = i.queue
                  , s = o || "fx"
                  , f = i.complete
                  , r = i.mode
                  , h = []
                  , c = function(t) {
                    var f = n(this)
                      , i = n.effects.mode(f, r) || u;
                    f.data(w, !0);
                    h.push(i);
                    u && (i === "show" || i === u && i === "hide") && f.show();
                    u && i === "none" || n.effects.saveStyle(f);
                    typeof t == "function" && t()
                };
                return n.fx.off || !e ? r ? this[r](i.duration, f) : this.each(function() {
                    f && f.call(this)
                }) : o === !1 ? this.each(c).each(l) : this.queue(s, c).queue(s, l)
            },
            show: function(n) {
                return function(r) {
                    if (i(r))
                        return n.apply(this, arguments);
                    var u = t.apply(this, arguments);
                    return u.mode = "show",
                    this.effect.call(this, u)
                }
            }(n.fn.show),
            hide: function(n) {
                return function(r) {
                    if (i(r))
                        return n.apply(this, arguments);
                    var u = t.apply(this, arguments);
                    return u.mode = "hide",
                    this.effect.call(this, u)
                }
            }(n.fn.hide),
            toggle: function(n) {
                return function(r) {
                    if (i(r) || typeof r == "boolean")
                        return n.apply(this, arguments);
                    var u = t.apply(this, arguments);
                    return u.mode = "toggle",
                    this.effect.call(this, u)
                }
            }(n.fn.toggle),
            cssUnit: function(t) {
                var i = this.css(t)
                  , r = [];
                return n.each(["em", "px", "%", "pt"], function(n, t) {
                    i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                }),
                r
            },
            cssClip: function(n) {
                return n ? this.css("clip", "rect(" + n.top + "px " + n.right + "px " + n.bottom + "px " + n.left + "px)") : r(this.css("clip"), this)
            },
            transfer: function(t, i) {
                var u = n(this)
                  , r = n(t.to)
                  , f = r.css("position") === "fixed"
                  , e = n("body")
                  , o = f ? e.scrollTop() : 0
                  , s = f ? e.scrollLeft() : 0
                  , h = r.offset()
                  , a = {
                    top: h.top - o,
                    left: h.left - s,
                    height: r.innerHeight(),
                    width: r.innerWidth()
                }
                  , c = u.offset()
                  , l = n("<div class='ui-effects-transfer'><\/div>");
                l.appendTo("body").addClass(t.className).css({
                    top: c.top - o,
                    left: c.left - s,
                    height: u.innerHeight(),
                    width: u.innerWidth(),
                    position: f ? "fixed" : "absolute"
                }).animate(a, t.duration, t.easing, function() {
                    l.remove();
                    typeof i == "function" && i()
                })
            }
        });
        n.fx.step.clip = function(t) {
            t.clipInit || (t.start = n(t.elem).cssClip(),
            typeof t.end == "string" && (t.end = r(t.end, t.elem)),
            t.clipInit = !0);
            n(t.elem).cssClip({
                top: t.pos * (t.end.top - t.start.top) + t.start.top,
                right: t.pos * (t.end.right - t.start.right) + t.start.right,
                bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                left: t.pos * (t.end.left - t.start.left) + t.start.left
            })
        }
    }(),
    function() {
        var t = {};
        n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) {
            t[i] = function(t) {
                return Math.pow(t, n + 2)
            }
        });
        n.extend(t, {
            Sine: function(n) {
                return 1 - Math.cos(n * Math.PI / 2)
            },
            Circ: function(n) {
                return 1 - Math.sqrt(1 - n * n)
            },
            Elastic: function(n) {
                return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(n) {
                return n * n * (3 * n - 2)
            },
            Bounce: function(n) {
                for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11; )
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
            }
        });
        n.each(t, function(t, i) {
            n.easing["easeIn" + t] = i;
            n.easing["easeOut" + t] = function(n) {
                return 1 - i(1 - n)
            }
            ;
            n.easing["easeInOut" + t] = function(n) {
                return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
            }
        })
    }();
    var tt = n.effects
      , si = n.effects.define("blind", "hide", function(t, i) {
        var e = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , u = n(this)
          , o = t.direction || "up"
          , s = u.cssClip()
          , r = {
            clip: n.extend({}, s)
        }
          , f = n.effects.createPlaceholder(u);
        r.clip[e[o][0]] = r.clip[e[o][1]];
        t.mode === "show" && (u.cssClip(r.clip),
        f && f.css(n.effects.clipToBox(r)),
        r.clip = s);
        f && f.animate(n.effects.clipToBox(r), t.duration, t.easing);
        u.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    })
      , hi = n.effects.define("bounce", function(t, i) {
        var e, o, a, u = n(this), p = t.mode, s = p === "hide", w = p === "show", h = t.direction || "up", r = t.distance, v = t.times || 5, b = v * 2 + (w || s ? 1 : 0), c = t.duration / b, l = t.easing, f = h === "up" || h === "down" ? "top" : "left", y = h === "up" || h === "left", k = 0, d = u.queue().length;
        for (n.effects.createPlaceholder(u),
        a = u.css(f),
        r || (r = u[f === "top" ? "outerHeight" : "outerWidth"]() / 3),
        w && (o = {
            opacity: 1
        },
        o[f] = a,
        u.css("opacity", 0).css(f, y ? -r * 2 : r * 2).animate(o, c, l)),
        s && (r = r / Math.pow(2, v - 1)),
        o = {},
        o[f] = a; k < v; k++)
            e = {},
            e[f] = (y ? "-=" : "+=") + r,
            u.animate(e, c, l).animate(o, c, l),
            r = s ? r * 2 : r / 2;
        s && (e = {
            opacity: 0
        },
        e[f] = (y ? "-=" : "+=") + r,
        u.animate(e, c, l));
        u.queue(i);
        n.effects.unshift(u, d, b + 1)
    })
      , ci = n.effects.define("clip", "hide", function(t, i) {
        var r, u = {}, f = n(this), e = t.direction || "vertical", o = e === "both", s = o || e === "horizontal", h = o || e === "vertical";
        r = f.cssClip();
        u.clip = {
            top: h ? (r.bottom - r.top) / 2 : r.top,
            right: s ? (r.right - r.left) / 2 : r.right,
            bottom: h ? (r.bottom - r.top) / 2 : r.bottom,
            left: s ? (r.right - r.left) / 2 : r.left
        };
        n.effects.createPlaceholder(f);
        t.mode === "show" && (f.cssClip(u.clip),
        u.clip = r);
        f.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    })
      , li = n.effects.define("drop", "hide", function(t, i) {
        var e, u = n(this), h = t.mode, c = h === "show", f = t.direction || "left", o = f === "up" || f === "down" ? "top" : "left", s = f === "up" || f === "left" ? "-=" : "+=", l = s === "+=" ? "-=" : "+=", r = {
            opacity: 0
        };
        n.effects.createPlaceholder(u);
        e = t.distance || u[o === "top" ? "outerHeight" : "outerWidth"](!0) / 2;
        r[o] = s + e;
        c && (u.css(r),
        r[o] = l + e,
        r.opacity = 1);
        u.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    })
      , ai = n.effects.define("explode", "hide", function(t, i) {
        function k() {
            p.push(this);
            p.length === e * c && d()
        }
        function d() {
            o.css({
                visibility: "visible"
            });
            n(p).remove();
            i()
        }
        for (var u, l, a, v, y, e = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = e, o = n(this), b = t.mode, f = b === "show", w = o.show().css("visibility", "hidden").offset(), s = Math.ceil(o.outerWidth() / c), h = Math.ceil(o.outerHeight() / e), p = [], r = 0; r < e; r++)
            for (a = w.top + r * h,
            y = r - (e - 1) / 2,
            u = 0; u < c; u++)
                l = w.left + u * s,
                v = u - (c - 1) / 2,
                o.clone().appendTo("body").wrap("<div><\/div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -u * s,
                    top: -r * h
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: s,
                    height: h,
                    left: l + (f ? v * s : 0),
                    top: a + (f ? y * h : 0),
                    opacity: f ? 0 : 1
                }).animate({
                    left: l + (f ? 0 : v * s),
                    top: a + (f ? 0 : y * h),
                    opacity: f ? 1 : 0
                }, t.duration || 500, t.easing, k)
    })
      , vi = n.effects.define("fade", "toggle", function(t, i) {
        var r = t.mode === "show";
        n(this).css("opacity", r ? 0 : 1).animate({
            opacity: r ? 1 : 0
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    })
      , yi = n.effects.define("fold", "hide", function(t, i) {
        var u = n(this)
          , l = t.mode
          , v = l === "show"
          , y = l === "hide"
          , o = t.size || 15
          , a = /([0-9]+)%/.exec(o)
          , p = !!t.horizFirst
          , f = p ? ["right", "bottom"] : ["bottom", "right"]
          , s = t.duration / 2
          , h = n.effects.createPlaceholder(u)
          , e = u.cssClip()
          , c = {
            clip: n.extend({}, e)
        }
          , r = {
            clip: n.extend({}, e)
        }
          , w = [e[f[0]], e[f[1]]]
          , b = u.queue().length;
        a && (o = parseInt(a[1], 10) / 100 * w[y ? 0 : 1]);
        c.clip[f[0]] = o;
        r.clip[f[0]] = o;
        r.clip[f[1]] = 0;
        v && (u.cssClip(r.clip),
        h && h.css(n.effects.clipToBox(r)),
        r.clip = e);
        u.queue(function(i) {
            h && h.animate(n.effects.clipToBox(c), s, t.easing).animate(n.effects.clipToBox(r), s, t.easing);
            i()
        }).animate(c, s, t.easing).animate(r, s, t.easing).queue(i);
        n.effects.unshift(u, b, 4)
    })
      , pi = n.effects.define("highlight", "show", function(t, i) {
        var r = n(this)
          , u = {
            backgroundColor: r.css("backgroundColor")
        };
        t.mode === "hide" && (u.opacity = 0);
        n.effects.saveStyle(r);
        r.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    })
      , wi = n.effects.define("size", function(t, i) {
        var l, r, p, u = n(this), v = ["fontSize"], s = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], w = t.mode, y = w !== "effect", c = t.scale || "both", b = t.origin || ["middle", "center"], k = u.css("position"), a = u.position(), o = n.effects.scaledDimensions(u), f = t.from || o, e = t.to || n.effects.scaledDimensions(u, 0);
        n.effects.createPlaceholder(u);
        w === "show" && (p = f,
        f = e,
        e = p);
        r = {
            from: {
                y: f.height / o.height,
                x: f.width / o.width
            },
            to: {
                y: e.height / o.height,
                x: e.width / o.width
            }
        };
        (c === "box" || c === "both") && (r.from.y !== r.to.y && (f = n.effects.setTransition(u, s, r.from.y, f),
        e = n.effects.setTransition(u, s, r.to.y, e)),
        r.from.x !== r.to.x && (f = n.effects.setTransition(u, h, r.from.x, f),
        e = n.effects.setTransition(u, h, r.to.x, e)));
        (c === "content" || c === "both") && r.from.y !== r.to.y && (f = n.effects.setTransition(u, v, r.from.y, f),
        e = n.effects.setTransition(u, v, r.to.y, e));
        b && (l = n.effects.getBaseline(b, o),
        f.top = (o.outerHeight - f.outerHeight) * l.y + a.top,
        f.left = (o.outerWidth - f.outerWidth) * l.x + a.left,
        e.top = (o.outerHeight - e.outerHeight) * l.y + a.top,
        e.left = (o.outerWidth - e.outerWidth) * l.x + a.left);
        delete f.outerHeight;
        delete f.outerWidth;
        u.css(f);
        (c === "content" || c === "both") && (s = s.concat(["marginTop", "marginBottom"]).concat(v),
        h = h.concat(["marginLeft", "marginRight"]),
        u.find("*[width]").each(function() {
            var i = n(this)
              , u = n.effects.scaledDimensions(i)
              , f = {
                height: u.height * r.from.y,
                width: u.width * r.from.x,
                outerHeight: u.outerHeight * r.from.y,
                outerWidth: u.outerWidth * r.from.x
            }
              , e = {
                height: u.height * r.to.y,
                width: u.width * r.to.x,
                outerHeight: u.height * r.to.y,
                outerWidth: u.width * r.to.x
            };
            r.from.y !== r.to.y && (f = n.effects.setTransition(i, s, r.from.y, f),
            e = n.effects.setTransition(i, s, r.to.y, e));
            r.from.x !== r.to.x && (f = n.effects.setTransition(i, h, r.from.x, f),
            e = n.effects.setTransition(i, h, r.to.x, e));
            y && n.effects.saveStyle(i);
            i.css(f);
            i.animate(e, t.duration, t.easing, function() {
                y && n.effects.restoreStyle(i)
            })
        }));
        u.animate(e, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                var t = u.offset();
                e.opacity === 0 && u.css("opacity", f.opacity);
                y || (u.css("position", k === "static" ? "relative" : k).offset(t),
                n.effects.saveStyle(u));
                i()
            }
        })
    })
      , bi = n.effects.define("scale", function(t, i) {
        var u = n(this)
          , f = t.mode
          , e = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : f !== "effect" ? 0 : 100)
          , r = n.extend(!0, {
            from: n.effects.scaledDimensions(u),
            to: n.effects.scaledDimensions(u, e, t.direction || "both"),
            origin: t.origin || ["middle", "center"]
        }, t);
        t.fade && (r.from.opacity = 1,
        r.to.opacity = 0);
        n.effects.effect.size.call(this, r, i)
    })
      , ki = n.effects.define("puff", "hide", function(t, i) {
        var r = n.extend(!0, {}, t, {
            fade: !0,
            percent: parseInt(t.percent, 10) || 150
        });
        n.effects.effect.scale.call(this, r, i)
    })
      , di = n.effects.define("pulsate", "show", function(t, i) {
        var r = n(this)
          , e = t.mode
          , o = e === "show"
          , c = e === "hide"
          , l = o || c
          , f = (t.times || 5) * 2 + (l ? 1 : 0)
          , s = t.duration / f
          , u = 0
          , h = 1
          , a = r.queue().length;
        for ((o || !r.is(":visible")) && (r.css("opacity", 0).show(),
        u = 1); h < f; h++)
            r.animate({
                opacity: u
            }, s, t.easing),
            u = 1 - u;
        r.animate({
            opacity: u
        }, s, t.easing);
        r.queue(i);
        n.effects.unshift(r, a, f + 1)
    })
      , gi = n.effects.define("shake", function(t, i) {
        var l = 1
          , r = n(this)
          , f = t.direction || "left"
          , e = t.distance || 20
          , a = t.times || 3
          , v = a * 2 + 1
          , u = Math.round(t.duration / v)
          , o = f === "up" || f === "down" ? "top" : "left"
          , s = f === "up" || f === "left"
          , h = {}
          , c = {}
          , y = {}
          , p = r.queue().length;
        for (n.effects.createPlaceholder(r),
        h[o] = (s ? "-=" : "+=") + e,
        c[o] = (s ? "+=" : "-=") + e * 2,
        y[o] = (s ? "-=" : "+=") + e * 2,
        r.animate(h, u, t.easing); l < a; l++)
            r.animate(c, u, t.easing).animate(y, u, t.easing);
        r.animate(c, u, t.easing).animate(h, u / 2, t.easing).queue(i);
        n.effects.unshift(r, p, v + 1)
    })
      , nr = n.effects.define("slide", "show", function(t, i) {
        var s, o, u = n(this), h = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
        }, c = t.mode, f = t.direction || "left", e = f === "up" || f === "down" ? "top" : "left", l = f === "up" || f === "left", a = t.distance || u[e === "top" ? "outerHeight" : "outerWidth"](!0), r = {};
        n.effects.createPlaceholder(u);
        s = u.cssClip();
        o = u.position()[e];
        r[e] = (l ? -1 : 1) * a + o;
        r.clip = u.cssClip();
        r.clip[h[f][1]] = r.clip[h[f][0]];
        c === "show" && (u.cssClip(r.clip),
        u.css(e, r[e]),
        r.clip = s,
        r[e] = o);
        u.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    n.uiBackCompat !== !1 && (tt = n.effects.define("transfer", function(t, i) {
        n(this).transfer(t, i)
    }));
    vt = tt;
    n.ui.focusable = function(t, i) {
        var u, f, e, r, o, s = t.nodeName.toLowerCase();
        return "area" === s ? (u = t.parentNode,
        f = u.name,
        !t.href || !f || u.nodeName.toLowerCase() !== "map") ? !1 : (e = n("img[usemap='#" + f + "']"),
        e.length > 0 && e.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(s) ? (r = !t.disabled,
        r && (o = n(t).closest("fieldset")[0],
        o && (r = !o.disabled))) : r = "a" === s ? t.href || i : i,
        r && n(t).is(":visible") && yt(n(t)))
    }
    ;
    n.extend(n.expr.pseudos, {
        focusable: function(t) {
            return n.ui.focusable(t, n.attr(t, "tabindex") != null)
        }
    });
    var tr = n.ui.focusable
      , ir = n.fn._form = function() {
        return typeof this[0].form == "string" ? this.closest("form") : n(this[0].form)
    }
      , rr = n.ui.formResetMixin = {
        _formResetHandler: function() {
            var t = n(this);
            setTimeout(function() {
                var i = t.data("ui-form-reset-instances");
                n.each(i, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element._form(),
            this.form.length) {
                var n = this.form.data("ui-form-reset-instances") || [];
                if (!n.length)
                    this.form.on("reset.ui-form-reset", this._formResetHandler);
                n.push(this);
                this.form.data("ui-form-reset-instances", n)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var t = this.form.data("ui-form-reset-instances");
                t.splice(n.inArray(this, t), 1);
                t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    };
    n.expr.pseudos || (n.expr.pseudos = n.expr[":"]);
    n.uniqueSort || (n.uniqueSort = n.unique);
    n.escapeSelector || (it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
    rt = function(n, t) {
        return t ? n === "\0" ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
    }
    ,
    n.escapeSelector = function(n) {
        return (n + "").replace(it, rt)
    }
    );
    n.fn.even && n.fn.odd || n.fn.extend({
        even: function() {
            return this.filter(function(n) {
                return n % 2 == 0
            })
        },
        odd: function() {
            return this.filter(function(n) {
                return n % 2 == 1
            })
        }
    });
    var ur = n.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }
      , fr = n.fn.labels = function() {
        var t, r, u, i, f;
        return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (i = this.eq(0).parents("label"),
        u = this.attr("id"),
        u && (t = this.eq(0).parents().last(),
        f = t.add(t.length ? t.siblings() : this.siblings()),
        r = "label[for='" + n.escapeSelector(u) + "']",
        i = i.add(f.find(r).addBack(r))),
        this.pushStack(i)) : this.pushStack([])
    }
      , er = n.fn.scrollParent = function(t) {
        var i = this.css("position")
          , u = i === "absolute"
          , f = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , r = this.parents().filter(function() {
            var t = n(this);
            return u && t.css("position") === "static" ? !1 : f.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
        return i === "fixed" || !r.length ? n(this[0].ownerDocument || document) : r
    }
      , or = n.extend(n.expr.pseudos, {
        tabbable: function(t) {
            var i = n.attr(t, "tabindex")
              , r = i != null;
            return (!r || i >= 0) && n.ui.focusable(t, r)
        }
    })
      , sr = n.fn.extend({
        uniqueId: function() {
            var n = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++n)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id")
            })
        }
    })
      , hr = n.widget("ui.accordion", {
        version: "1.13.2",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: function(n) {
                return n.find("> li > :first-child").add(n.find("> :not(li)").even())
            },
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = n();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist");
            t.collapsible || t.active !== !1 && t.active != null || (t.active = 0);
            this._processPanels();
            t.active < 0 && (t.active += this.headers.length);
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : n()
            }
        },
        _createIcons: function() {
            var i, r, t = this.options.icons;
            t && (i = n("<span>"),
            this._addClass(i, "ui-accordion-header-icon", "ui-icon " + t.header),
            i.prependTo(this.headers),
            r = this.active.children(".ui-accordion-header-icon"),
            this._removeClass(r, t.header)._addClass(r, null, t.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var n;
            this.element.removeAttr("role");
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
            this._destroyIcons();
            n = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();
            this.options.heightStyle !== "content" && n.css("height", "")
        },
        _setOption: function(n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            n === "event" && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(t));
            this._super(n, t);
            n !== "collapsible" || t || this.options.active !== !1 || this._activate(0);
            n === "icons" && (this._destroyIcons(),
            t && this._createIcons())
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this.element.attr("aria-disabled", n);
            this._toggleClass(null, "ui-state-disabled", !!n);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!n)
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = n.ui.keyCode
                  , u = this.headers.length
                  , f = this.headers.index(t.target)
                  , r = !1;
                switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    r = this.headers[(f + 1) % u];
                    break;
                case i.LEFT:
                case i.UP:
                    r = this.headers[(f - 1 + u) % u];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(t);
                    break;
                case i.HOME:
                    r = this.headers[0];
                    break;
                case i.END:
                    r = this.headers[u - 1]
                }
                r && (n(t.target).attr("tabIndex", -1),
                n(r).attr("tabIndex", 0),
                n(r).trigger("focus"),
                t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var t = this.options;
            this._processPanels();
            (t.active !== !1 || t.collapsible !== !0) && this.headers.length ? t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1,
            this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active) : (t.active = !1,
            this.active = n());
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            var t = this.headers
              , n = this.panels;
            this.headers = typeof this.options.header == "function" ? this.options.header(this.element) : this.element.find(this.options.header);
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");
            n && (this._off(t.not(this.headers)),
            this._off(n.not(this.panels)))
        },
        _refresh: function() {
            var t, i = this.options, r = i.heightStyle, u = this.element.parent();
            this.active = this._findActive(i.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();
            this.headers.attr("role", "tab").each(function() {
                var t = n(this)
                  , r = t.uniqueId().attr("id")
                  , i = t.next()
                  , u = i.uniqueId().attr("id");
                t.attr("aria-controls", u);
                i.attr("aria-labelledby", r)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(i.event);
            r === "fill" ? (t = u.height(),
            this.element.siblings(":visible").each(function() {
                var i = n(this)
                  , r = i.css("position");
                r !== "absolute" && r !== "fixed" && (t -= i.outerHeight(!0))
            }),
            this.headers.each(function() {
                t -= n(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : r === "auto" && (t = 0,
            this.headers.next().each(function() {
                var i = n(this).is(":visible");
                i || n(this).show();
                t = Math.max(t, n(this).css("height", "").height());
                i || n(this).hide()
            }).height(t))
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return typeof t == "number" ? this.headers.eq(t) : n()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && n.each(t.split(" "), function(n, t) {
                i[t] = "_eventHandler"
            });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, i);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var e, o, i = this.options, u = this.active, r = n(t.currentTarget), f = r[0] === u[0], s = f && i.collapsible, c = s ? n() : r.next(), l = u.next(), h = {
                oldHeader: u,
                oldPanel: l,
                newHeader: s ? n() : r,
                newPanel: c
            };
            (t.preventDefault(),
            (!f || i.collapsible) && this._trigger("beforeActivate", t, h) !== !1) && (i.active = s ? !1 : this.headers.index(r),
            this.active = f ? n() : r,
            this._toggle(h),
            this._removeClass(u, "ui-accordion-header-active", "ui-state-active"),
            i.icons && (e = u.children(".ui-accordion-header-icon"),
            this._removeClass(e, null, i.icons.activeHeader)._addClass(e, null, i.icons.header)),
            f || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"),
            i.icons && (o = r.children(".ui-accordion-header-icon"),
            this._removeClass(o, null, i.icons.header)._addClass(o, null, i.icons.activeHeader)),
            this._addClass(r.next(), "ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var r = t.newPanel
              , i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = r;
            this.prevHide = i;
            this.options.animate ? this._animate(r, i, t) : (i.hide(),
            r.show(),
            this._toggleComplete(t));
            i.attr({
                "aria-hidden": "true"
            });
            i.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            r.length && i.length ? i.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : r.length && this.headers.filter(function() {
                return parseInt(n(this).attr("tabIndex"), 10) === 0
            }).attr("tabIndex", -1);
            r.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(n, t, i) {
            var h, r, u, c = this, o = 0, l = n.css("box-sizing"), a = n.length && (!t.length || n.index() < t.index()), e = this.options.animate || {}, f = a && e.down || e, s = function() {
                c._toggleComplete(i)
            };
            if (typeof f == "number" && (u = f),
            typeof f == "string" && (r = f),
            r = r || f.easing || e.easing,
            u = u || f.duration || e.duration,
            !t.length)
                return n.animate(this.showProps, u, r, s);
            if (!n.length)
                return t.animate(this.hideProps, u, r, s);
            h = n.show().outerHeight();
            t.animate(this.hideProps, {
                duration: u,
                easing: r,
                step: function(n, t) {
                    t.now = Math.round(n)
                }
            });
            n.hide().animate(this.showProps, {
                duration: u,
                easing: r,
                complete: s,
                step: function(n, i) {
                    i.now = Math.round(n);
                    i.prop !== "height" ? l === "content-box" && (o += i.now) : c.options.heightStyle !== "content" && (i.now = Math.round(h - t.outerHeight() - o),
                    o = 0)
                }
            })
        },
        _toggleComplete: function(n) {
            var t = n.oldPanel
              , i = t.prev();
            this._removeClass(t, "ui-accordion-content-active");
            this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed");
            t.length && (t.parent()[0].className = t.parent()[0].className);
            this._trigger("activate", null, n)
        }
    })
      , cr = n.ui.safeActiveElement = function(n) {
        var t;
        try {
            t = n.activeElement
        } catch (i) {
            t = n.body
        }
        return t || (t = n.body),
        t.nodeName || (t = n.body),
        t
    }
      , lr = n.widget("ui.menu", {
        version: "1.13.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.lastMousePosition = {
                x: null,
                y: null
            };
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            });
            this._addClass("ui-menu", "ui-widget ui-widget-content");
            this._on({
                "mousedown .ui-menu-item": function(n) {
                    n.preventDefault();
                    this._activateItem(n)
                },
                "click .ui-menu-item": function(t) {
                    var i = n(t.target)
                      , r = n(n.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t),
                    t.isPropagationStopped() || (this.mouseHandled = !0),
                    i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && r.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": "_activateItem",
                "mousemove .ui-menu-item": "_activateItem",
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(n, t) {
                    var i = this.active || this._menuItems().first();
                    t || this.focus(n, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        var i = !n.contains(this.element[0], n.ui.safeActiveElement(this.document[0]));
                        i && this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(n) {
                    this._closeOnDocumentClick(n) && this.collapseAll(n, !0);
                    this.mouseHandled = !1
                }
            })
        },
        _activateItem: function(t) {
            if (!this.previousFilter && (t.clientX !== this.lastMousePosition.x || t.clientY !== this.lastMousePosition.y)) {
                this.lastMousePosition = {
                    x: t.clientX,
                    y: t.clientY
                };
                var r = n(t.target).closest(".ui-menu-item")
                  , i = n(t.currentTarget);
                r[0] === i[0] && (i.is(".ui-state-active") || (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"),
                this.focus(t, i)))
            }
        },
        _destroy: function() {
            var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled")
              , i = t.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
            i.children().each(function() {
                var t = n(this);
                t.data("ui-menu-submenu-caret") && t.remove()
            })
        },
        _keydown: function(t) {
            var i, u, r, f, e = !0;
            switch (t.keyCode) {
            case n.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case n.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case n.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case n.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case n.ui.keyCode.UP:
                this.previous(t);
                break;
            case n.ui.keyCode.DOWN:
                this.next(t);
                break;
            case n.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case n.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case n.ui.keyCode.ENTER:
            case n.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case n.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                e = !1;
                u = this.previousFilter || "";
                f = !1;
                r = t.keyCode >= 96 && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode);
                clearTimeout(this.filterTimer);
                r === u ? f = !0 : r = u + r;
                i = this._filterMenuItems(r);
                i = f && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i;
                i.length || (r = String.fromCharCode(t.keyCode),
                i = this._filterMenuItems(r));
                i.length ? (this.focus(t, i),
                this.previousFilter = r,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter
            }
            e && t.preventDefault()
        },
        _activate: function(n) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(n) : this.select(n))
        },
        refresh: function() {
            var u, t, f, i, e, r = this, s = this.options.icons.submenu, o = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
            f = o.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = n(this)
                  , i = t.prev()
                  , u = n("<span>").data("ui-menu-submenu-caret", !0);
                r._addClass(u, "ui-menu-icon", "ui-icon " + s);
                i.attr("aria-haspopup", "true").prepend(u);
                t.attr("aria-labelledby", i.attr("id"))
            });
            this._addClass(f, "ui-menu", "ui-widget ui-widget-content ui-front");
            u = o.add(this.element);
            t = u.find(this.options.items);
            t.not(".ui-menu-item").each(function() {
                var t = n(this);
                r._isDivider(t) && r._addClass(t, "ui-menu-divider", "ui-widget-content")
            });
            i = t.not(".ui-menu-item, .ui-menu-divider");
            e = i.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            this._addClass(i, "ui-menu-item")._addClass(e, "ui-menu-item-wrapper");
            t.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(n, t) {
            if (n === "icons") {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)
            }
            this._super(n, t)
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this.element.attr("aria-disabled", String(n));
            this._toggleClass(null, "ui-state-disabled", !!n)
        },
        focus: function(n, t) {
            var i, r, u;
            this.blur(n, n && n.type === "focus");
            this._scrollIntoView(t);
            this.active = t.first();
            r = this.active.children(".ui-menu-item-wrapper");
            this._addClass(r, null, "ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
            u = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
            this._addClass(u, null, "ui-state-active");
            n && n.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay);
            i = t.children(".ui-menu");
            i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
            this.activeMenu = t.parent();
            this._trigger("focus", n, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var e, o, i, r, u, f;
            this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0,
            o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0,
            i = t.offset().top - this.activeMenu.offset().top - e - o,
            r = this.activeMenu.scrollTop(),
            u = this.activeMenu.height(),
            f = t.outerHeight(),
            i < 0 ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
        },
        blur: function(n, t) {
            (t || clearTimeout(this.timer),
            this.active) && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", n, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(n) {
            (clearTimeout(this.timer),
            n.attr("aria-hidden") === "true") && (this.timer = this._delay(function() {
                this._close();
                this._open(n)
            }, this.delay))
        },
        _open: function(t) {
            var i = n.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element);
                this._close(r);
                this.blur(t);
                this._removeClass(r.find(".ui-state-active"), null, "ui-state-active");
                this.activeMenu = r
            }, i ? 0 : this.delay)
        },
        _close: function(n) {
            n || (n = this.active ? this.active.parent() : this.element);
            n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(t) {
            return !n(t.target).closest(".ui-menu").length
        },
        _isDivider: function(n) {
            return !/[^\-\u2014\u2013\s]/.test(n.text())
        },
        collapse: function(n) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(),
            this.focus(n, t))
        },
        expand: function(n) {
            var t = this.active && this._menuItems(this.active.children(".ui-menu")).first();
            t && t.length && (this._open(t.parent()),
            this._delay(function() {
                this.focus(n, t)
            }))
        },
        next: function(n) {
            this._move("next", "first", n)
        },
        previous: function(n) {
            this._move("prev", "last", n)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _menuItems: function(n) {
            return (n || this.element).find(this.options.items).filter(".ui-menu-item")
        },
        _move: function(n, t, i) {
            var r;
            this.active && (r = n === "first" || n === "last" ? this.active[n === "first" ? "prevAll" : "nextAll"](".ui-menu-item").last() : this.active[n + "All"](".ui-menu-item").first());
            r && r.length && this.active || (r = this._menuItems(this.activeMenu)[t]());
            this.focus(i, r)
        },
        nextPage: function(t) {
            var i, u, r;
            if (!this.active) {
                this.next(t);
                return
            }
            this.isLastItem() || (this._hasScroll() ? (u = this.active.offset().top,
            r = this.element.innerHeight(),
            n.fn.jquery.indexOf("3.2.") === 0 && (r += this.element[0].offsetHeight - this.element.outerHeight()),
            this.active.nextAll(".ui-menu-item").each(function() {
                return i = n(this),
                i.offset().top - u - r < 0
            }),
            this.focus(t, i)) : this.focus(t, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]()))
        },
        previousPage: function(t) {
            var i, u, r;
            if (!this.active) {
                this.next(t);
                return
            }
            this.isFirstItem() || (this._hasScroll() ? (u = this.active.offset().top,
            r = this.element.innerHeight(),
            n.fn.jquery.indexOf("3.2.") === 0 && (r += this.element[0].offsetHeight - this.element.outerHeight()),
            this.active.prevAll(".ui-menu-item").each(function() {
                return i = n(this),
                i.offset().top - u + r > 0
            }),
            this.focus(t, i)) : this.focus(t, this._menuItems(this.activeMenu).first()))
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || n(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0);
            this._trigger("select", t, i)
        },
        _filterMenuItems: function(t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , r = new RegExp("^" + i,"i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return r.test(String.prototype.trim.call(n(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    });
    n.widget("ui.autocomplete", {
        version: "1.13.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        liveRegionTimer: null,
        _create: function() {
            var t, i, r, u = this.element[0].nodeName.toLowerCase(), f = u === "textarea", e = u === "input";
            this.isMultiLine = f || !e && this._isContentEditable(this.element);
            this.valueMethod = this.element[f || e ? "val" : "text"];
            this.isNewMenu = !0;
            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(u) {
                    if (this.element.prop("readOnly")) {
                        t = !0;
                        r = !0;
                        i = !0;
                        return
                    }
                    t = !1;
                    r = !1;
                    i = !1;
                    var f = n.ui.keyCode;
                    switch (u.keyCode) {
                    case f.PAGE_UP:
                        t = !0;
                        this._move("previousPage", u);
                        break;
                    case f.PAGE_DOWN:
                        t = !0;
                        this._move("nextPage", u);
                        break;
                    case f.UP:
                        t = !0;
                        this._keyEvent("previous", u);
                        break;
                    case f.DOWN:
                        t = !0;
                        this._keyEvent("next", u);
                        break;
                    case f.ENTER:
                        this.menu.active && (t = !0,
                        u.preventDefault(),
                        this.menu.select(u));
                        break;
                    case f.TAB:
                        this.menu.active && this.menu.select(u);
                        break;
                    case f.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                        this.close(u),
                        u.preventDefault());
                        break;
                    default:
                        i = !0;
                        this._searchTimeout(u)
                    }
                },
                keypress: function(r) {
                    if (t) {
                        t = !1;
                        (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault();
                        return
                    }
                    if (!i) {
                        var u = n.ui.keyCode;
                        switch (r.keyCode) {
                        case u.PAGE_UP:
                            this._move("previousPage", r);
                            break;
                        case u.PAGE_DOWN:
                            this._move("nextPage", r);
                            break;
                        case u.UP:
                            this._keyEvent("previous", r);
                            break;
                        case u.DOWN:
                            this._keyEvent("next", r)
                        }
                    }
                },
                input: function(n) {
                    if (r) {
                        r = !1;
                        n.preventDefault();
                        return
                    }
                    this._searchTimeout(n)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(n) {
                    clearTimeout(this.searching);
                    this.close(n);
                    this._change(n)
                }
            });
            this._initSource();
            this.menu = n("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().attr({
                unselectable: "on"
            }).menu("instance");
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
            this._on(this.menu.element, {
                mousedown: function(n) {
                    n.preventDefault()
                },
                menufocus: function(t, i) {
                    var r, u;
                    if (this.isNewMenu && (this.isNewMenu = !1,
                    t.originalEvent && /^mouse/.test(t.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function() {
                            n(t.target).trigger(t.originalEvent)
                        });
                        return
                    }
                    u = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: u
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value);
                    r = i.item.attr("aria-label") || u.value;
                    r && String.prototype.trim.call(r).length && (clearTimeout(this.liveRegionTimer),
                    this.liveRegionTimer = this._delay(function() {
                        this.liveRegion.html(n("<div>").text(r))
                    }, 100))
                },
                menuselect: function(t, i) {
                    var r = i.item.data("ui-autocomplete-item")
                      , u = this.previous;
                    this.element[0] !== n.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = u,
                    this._delay(function() {
                        this.previous = u;
                        this.selectedItem = r
                    }));
                    !1 !== this._trigger("select", t, {
                        item: r
                    }) && this._value(r.value);
                    this.term = this._value();
                    this.close(t);
                    this.selectedItem = r
                }
            });
            this.liveRegion = n("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(n, t) {
            this._super(n, t);
            n === "source" && this._initSource();
            n === "appendTo" && this.menu.element.appendTo(this._appendTo());
            n === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(t) {
            var i = this.menu.element[0];
            return t.target === this.element[0] || t.target === i || n.contains(i, t.target)
        },
        _closeOnClickOutside: function(n) {
            this._isEventTargetInWidget(n) || this.close()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)),
            t && t[0] || (t = this.element.closest(".ui-front, dialog")),
            t.length || (t = this.document[0].body),
            t
        },
        _initSource: function() {
            var i, r, t = this;
            Array.isArray(this.options.source) ? (i = this.options.source,
            this.source = function(t, r) {
                r(n.ui.autocomplete.filter(i, t.term))
            }
            ) : typeof this.options.source == "string" ? (r = this.options.source,
            this.source = function(i, u) {
                t.xhr && t.xhr.abort();
                t.xhr = n.ajax({
                    url: r,
                    data: i,
                    dataType: "json",
                    success: function(n) {
                        u(n)
                    },
                    error: function() {
                        u([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(n) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var t = this.term === this._value()
                  , i = this.menu.element.is(":visible")
                  , r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                t && (!t || i || r) || (this.selectedItem = null,
                this.search(null, n))
            }, this.options.delay)
        },
        search: function(n, t) {
            return (n = n != null ? n : this._value(),
            this.term = this._value(),
            n.length < this.options.minLength) ? this.close(t) : this._trigger("search", t) === !1 ? void 0 : this._search(n)
        },
        _search: function(n) {
            this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: n
            }, this._response())
        },
        _response: function() {
            var n = ++this.requestIndex;
            return function(t) {
                n === this.requestIndex && this.__response(t);
                this.pending--;
                this.pending || this._removeClass("ui-autocomplete-loading")
            }
            .bind(this)
        },
        __response: function(n) {
            n && (n = this._normalize(n));
            this._trigger("response", null, {
                content: n
            });
            !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n),
            this._trigger("open")) : this._close()
        },
        close: function(n) {
            this.cancelSearch = !0;
            this._close(n)
        },
        _close: function(n) {
            this._off(this.document, "mousedown");
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", n))
        },
        _change: function(n) {
            this.previous !== this._value() && this._trigger("change", n, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : n.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t);
            this.isNewMenu = !0;
            this.menu.refresh();
            i.show();
            this._resizeMenu();
            i.position(n.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next();
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var r = this;
            n.each(i, function(n, i) {
                r._renderItemData(t, i)
            })
        },
        _renderItemData: function(n, t) {
            return this._renderItem(n, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return n("<li>").append(n("<div>").text(i.label)).appendTo(t)
        },
        _move: function(n, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n)) {
                this.isMultiLine || this._value(this.term);
                this.menu.blur();
                return
            }
            this.menu[n](t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(n, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t),
            t.preventDefault())
        },
        _isContentEditable: function(n) {
            if (!n.length)
                return !1;
            var t = n.prop("contentEditable");
            return t === "inherit" ? this._isContentEditable(n.parent()) : t === "true"
        }
    });
    n.extend(n.ui.autocomplete, {
        escapeRegex: function(n) {
            return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var r = new RegExp(n.ui.autocomplete.escapeRegex(i),"i");
            return n.grep(t, function(n) {
                return r.test(n.label || n.value || n)
            })
        }
    });
    n.widget("ui.autocomplete", n.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(n) {
                    return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var i;
            (this._superApply(arguments),
            this.options.disabled || this.cancelSearch) || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults,
            clearTimeout(this.liveRegionTimer),
            this.liveRegionTimer = this._delay(function() {
                this.liveRegion.html(n("<div>").text(i))
            }, 100))
        }
    });
    var ar = n.ui.autocomplete
      , pt = /ui-corner-([a-z]){2,6}/g
      , vr = n.widget("ui.controlgroup", {
        version: "1.13.2",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar");
            this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy");
            this.childWidgets.removeData("ui-controlgroup-data");
            this.element.removeAttr("role");
            this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var t = this
              , i = [];
            n.each(this.options.items, function(r, u) {
                var f, e = {};
                if (u) {
                    if (r === "controlgroupLabel") {
                        f = t.element.find(u);
                        f.each(function() {
                            var t = n(this);
                            t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'><\/span>")
                        });
                        t._addClass(f, null, "ui-widget ui-widget-content ui-state-default");
                        i = i.concat(f.get());
                        return
                    }
                    n.fn[r] && (e = t["_" + r + "Options"] ? t["_" + r + "Options"]("middle") : {
                        classes: {}
                    },
                    t.element.find(u).each(function() {
                        var u = n(this), f = u[r]("instance"), o = n.widget.extend({}, e), s;
                        r === "button" && u.parent(".ui-spinner").length || (f || (f = u[r]()[r]("instance")),
                        f && (o.classes = t._resolveClassesValues(o.classes, f)),
                        u[r](o),
                        s = u[r]("widget"),
                        n.data(s[0], "ui-controlgroup-data", f ? f : u[r]("instance")),
                        i.push(s[0]))
                    }))
                }
            });
            this.childWidgets = n(n.uniqueSort(i));
            this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(t) {
            this.childWidgets.each(function() {
                var r = n(this)
                  , i = r.data("ui-controlgroup-data");
                i && i[t] && i[t]()
            })
        },
        _updateCornerClass: function(n, t) {
            var i = this._buildSimpleOptions(t, "label").classes.label;
            this._removeClass(n, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all");
            this._addClass(n, null, i)
        },
        _buildSimpleOptions: function(n, t) {
            var i = this.options.direction === "vertical"
              , r = {
                classes: {}
            };
            return r.classes[t] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[n],
            r
        },
        _spinnerOptions: function(n) {
            var t = this._buildSimpleOptions(n, "ui-spinner");
            return t.classes["ui-spinner-up"] = "",
            t.classes["ui-spinner-down"] = "",
            t
        },
        _buttonOptions: function(n) {
            return this._buildSimpleOptions(n, "ui-button")
        },
        _checkboxradioOptions: function(n) {
            return this._buildSimpleOptions(n, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(n) {
            var t = this.options.direction === "vertical";
            return {
                width: t ? "auto" : !1,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (t ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": t ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[n]
            }
        },
        _resolveClassesValues: function(t, i) {
            var r = {};
            return n.each(t, function(n) {
                var u = i.options.classes[n] || "";
                u = String.prototype.trim.call(u.replace(pt, ""));
                r[n] = (u + " " + t[n]).replace(/\s+/g, " ")
            }),
            r
        },
        _setOption: function(n, t) {
            if (n === "direction" && this._removeClass("ui-controlgroup-" + this.options.direction),
            this._super(n, t),
            n === "disabled") {
                this._callChildMethod(t ? "disable" : "enable");
                return
            }
            this.refresh()
        },
        refresh: function() {
            var t, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);
            this.options.direction === "horizontal" && this._addClass(null, "ui-helper-clearfix");
            this._initWidgets();
            t = this.childWidgets;
            this.options.onlyVisible && (t = t.filter(":visible"));
            t.length && (n.each(["first", "last"], function(n, r) {
                var u = t[r]().data("ui-controlgroup-data"), f;
                u && i["_" + u.widgetName + "Options"] ? (f = i["_" + u.widgetName + "Options"](t.length === 1 ? "only" : r),
                f.classes = i._resolveClassesValues(f.classes, u),
                u.element[u.widgetName](f)) : i._updateCornerClass(t[r](), r)
            }),
            this._callChildMethod("refresh"))
        }
    });
    n.widget("ui.checkboxradio", [n.ui.formResetMixin, {
        version: "1.13.2",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var t, i, r, u = this._super() || {};
            return this._readType(),
            i = this.element.labels(),
            this.label = n(i[i.length - 1]),
            this.label.length || n.error("No label found for checkboxradio widget"),
            this.originalLabel = "",
            r = this.label.contents().not(this.element[0]),
            r.length && (this.originalLabel += r.clone().wrapAll("<div><\/div>").parent().html()),
            this.originalLabel && (u.label = this.originalLabel),
            t = this.element[0].disabled,
            t != null && (u.disabled = t),
            u
        },
        _create: function() {
            var n = this.element[0].checked;
            this._bindFormResetHandler();
            this.options.disabled == null && (this.options.disabled = this.element[0].disabled);
            this._setOption("disabled", this.options.disabled);
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");
            this.type === "radio" && this._addClass(this.label, "ui-checkboxradio-radio-label");
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel);
            this._enhance();
            n && this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active");
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type;
            t === "input" && /radio|checkbox/.test(this.type) || n.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var t, i = this.element[0].name, r = "input[name='" + n.escapeSelector(i) + "']";
            return i ? (t = this.form.length ? n(this.form[0].elements).filter(r) : n(r).filter(function() {
                return n(this)._form().length === 0
            }),
            t.not(this.element)) : n([])
        },
        _toggleClasses: function() {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t);
            this.options.icon && this.type === "checkbox" && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t);
            this.type === "radio" && this._getRadioGroup().each(function() {
                var t = n(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.icon && (this.icon.remove(),
            this.iconSpace.remove())
        },
        _setOption: function(n, t) {
            if (n !== "label" || t) {
                if (this._super(n, t),
                n === "disabled") {
                    this._toggleClass(this.label, null, "ui-state-disabled", t);
                    this.element[0].disabled = t;
                    return
                }
                this.refresh()
            }
        },
        _updateIcon: function(t) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = n("<span>"),
            this.iconSpace = n("<span> <\/span>"),
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            this.type === "checkbox" ? (i += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank",
            this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank",
            this._addClass(this.icon, "ui-checkboxradio-icon", i),
            t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
            this.icon.prependTo(this.label).after(this.iconSpace)) : this.icon !== undefined && (this.icon.remove(),
            this.iconSpace.remove(),
            delete this.icon)
        },
        _updateLabel: function() {
            var n = this.label.contents().not(this.element[0]);
            this.icon && (n = n.not(this.icon[0]));
            this.iconSpace && (n = n.not(this.iconSpace[0]));
            n.remove();
            this.label.append(this.options.label)
        },
        refresh: function() {
            var n = this.element[0].checked
              , t = this.element[0].disabled;
            this._updateIcon(n);
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", n);
            this.options.label !== null && this._updateLabel();
            t !== this.options.disabled && this._setOptions({
                disabled: t
            })
        }
    }]);
    wt = n.ui.checkboxradio;
    n.widget("ui.button", {
        version: "1.13.2",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var n, t = this._super() || {};
            return this.isInput = this.element.is("input"),
            n = this.element[0].disabled,
            n != null && (t.disabled = n),
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(),
            this.originalLabel && (t.label = this.originalLabel),
            t
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0);
            this.options.disabled == null && (this.options.disabled = this.element[0].disabled || !1);
            this.hasTitle = !!this.element.attr("title");
            this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label));
            this._addClass("ui-button", "ui-widget");
            this._setOption("disabled", this.options.disabled);
            this._enhance();
            this.element.is("a") && this._on({
                keyup: function(t) {
                    t.keyCode === n.ui.keyCode.SPACE && (t.preventDefault(),
                    this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button");
            this.options.icon && (this._updateIcon("icon", this.options.icon),
            this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title");
            this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(t, i) {
            var u = t !== "iconPosition"
              , r = u ? this.options.iconPosition : i
              , f = r === "top" || r === "bottom";
            this.icon ? u && this._removeClass(this.icon, null, this.options.icon) : (this.icon = n("<span>"),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only"));
            u && this._addClass(this.icon, null, i);
            this._attachIcon(r);
            f ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = n("<span> <\/span>"),
            this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(r))
        },
        _destroy: function() {
            this.element.removeAttr("role");
            this.icon && this.icon.remove();
            this.iconSpace && this.iconSpace.remove();
            this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(n) {
            this.icon[/^(?:end|bottom)/.test(n) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(n) {
            this.element[/^(?:end|bottom)/.test(n) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(n) {
            var t = n.showLabel === undefined ? this.options.showLabel : n.showLabel
              , i = n.icon === undefined ? this.options.icon : n.icon;
            t || i || (n.showLabel = !0);
            this._super(n)
        },
        _setOption: function(n, t) {
            n === "icon" && (t ? this._updateIcon(n, t) : this.icon && (this.icon.remove(),
            this.iconSpace && this.iconSpace.remove()));
            n === "iconPosition" && this._updateIcon(n, t);
            n === "showLabel" && (this._toggleClass("ui-button-icon-only", null, !t),
            this._updateTooltip());
            n === "label" && (this.isInput ? this.element.val(t) : (this.element.html(t),
            this.icon && (this._attachIcon(this.options.iconPosition),
            this._attachIconSpace(this.options.iconPosition))));
            this._super(n, t);
            n === "disabled" && (this._toggleClass(null, "ui-state-disabled", t),
            this.element[0].disabled = t,
            t && this.element.trigger("blur"))
        },
        refresh: function() {
            var n = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            n !== this.options.disabled && this._setOptions({
                disabled: n
            });
            this._updateTooltip()
        }
    });
    n.uiBackCompat !== !1 && (n.widget("ui.button", n.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text);
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel);
            !this.options.icon && (this.options.icons.primary || this.options.icons.secondary) ? this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary,
            this.options.iconPosition = "end") : this.options.icon && (this.options.icons.primary = this.options.icon);
            this._super()
        },
        _setOption: function(n, t) {
            if (n === "text") {
                this._super("showLabel", t);
                return
            }
            n === "showLabel" && (this.options.text = t);
            n === "icon" && (this.options.icons.primary = t);
            n === "icons" && (t.primary ? (this._super("icon", t.primary),
            this._super("iconPosition", "beginning")) : t.secondary && (this._super("icon", t.secondary),
            this._super("iconPosition", "end")));
            this._superApply(arguments)
        }
    }),
    n.fn.button = function(t) {
        return function(i) {
            var f = typeof i == "string"
              , u = Array.prototype.slice.call(arguments, 1)
              , r = this;
            return f ? this.length || i !== "instance" ? this.each(function() {
                var t, e = n(this).attr("type"), o = e !== "checkbox" && e !== "radio" ? "button" : "checkboxradio", f = n.data(this, "ui-" + o);
                return i === "instance" ? (r = f,
                !1) : f ? typeof f[i] != "function" || i.charAt(0) === "_" ? n.error("no such method '" + i + "' for button widget instance") : (t = f[i].apply(f, u),
                t !== f && t !== undefined ? (r = t && t.jquery ? r.pushStack(t.get()) : t,
                !1) : void 0) : n.error("cannot call methods on button prior to initialization; attempted to call method '" + i + "'")
            }) : r = undefined : (u.length && (i = n.widget.extend.apply(null, [i].concat(u))),
            this.each(function() {
                var u = n(this).attr("type")
                  , f = u !== "checkbox" && u !== "radio" ? "button" : "checkboxradio"
                  , r = n.data(this, "ui-" + f);
                if (r)
                    r.option(i || {}),
                    r._init && r._init();
                else {
                    if (f === "button") {
                        t.call(n(this), i);
                        return
                    }
                    n(this).checkboxradio(n.extend({
                        icon: !1
                    }, i))
                }
            })),
            r
        }
    }(n.fn.button),
    n.fn.buttonset = function() {
        return (n.ui.controlgroup || n.error("Controlgroup widget missing"),
        arguments[0] === "option" && arguments[1] === "items" && arguments[2]) ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : arguments[0] === "option" && arguments[1] === "items" ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : (typeof arguments[0] == "object" && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }),
        this.controlgroup.apply(this, arguments))
    }
    );
    bt = n.ui.button;
    n.extend(n.ui, {
        datepicker: {
            version: "1.13.2"
        }
    });
    n.extend(ut.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(n) {
            return l(this._defaults, n || {}),
            this
        },
        _attachDatepicker: function(t, i) {
            var r, f, u;
            r = t.nodeName.toLowerCase();
            f = r === "div" || r === "span";
            t.id || (this.uuid += 1,
            t.id = "dp" + this.uuid);
            u = this._newInst(n(t), f);
            u.settings = n.extend({}, i || {});
            r === "input" ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
        },
        _newInst: function(t, i) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? ft(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var r = n(t);
            if (i.append = n([]),
            i.trigger = n([]),
            !r.hasClass(this.markerClassName)) {
                this._attachments(r, i);
                r.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
                this._autoSize(i);
                n.data(t, "datepicker", i);
                i.settings.disabled && this._disableDatepicker(t)
            }
        },
        _attachments: function(t, i) {
            var u, r, f, e = this._get(i, "appendText"), o = this._get(i, "isRTL");
            if (i.append && i.append.remove(),
            e && (i.append = n("<span>").addClass(this._appendClass).text(e),
            t[o ? "before" : "after"](i.append)),
            t.off("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            u = this._get(i, "showOn"),
            u === "focus" || u === "both")
                t.on("focus", this._showDatepicker);
            if (u === "button" || u === "both") {
                r = this._get(i, "buttonText");
                f = this._get(i, "buttonImage");
                this._get(i, "buttonImageOnly") ? i.trigger = n("<img>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: r,
                    title: r
                }) : (i.trigger = n("<button type='button'>").addClass(this._triggerClass),
                f ? i.trigger.html(n("<img>").attr({
                    src: f,
                    alt: r,
                    title: r
                })) : i.trigger.text(r));
                t[o ? "before" : "after"](i.trigger);
                i.trigger.on("click", function() {
                    return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(),
                    n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]),
                    !1
                })
            }
        },
        _autoSize: function(n) {
            if (this._get(n, "autoSize") && !n.inline) {
                var r, u, f, t, i = new Date(2009,11,20), e = this._get(n, "dateFormat");
                e.match(/[DM]/) && (r = function(n) {
                    for (u = 0,
                    f = 0,
                    t = 0; t < n.length; t++)
                        n[t].length > u && (u = n[t].length,
                        f = t);
                    return f
                }
                ,
                i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
                n.input.attr("size", this._formatDate(n, i).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var r = n(t);
            r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(i.dpDiv),
            n.data(t, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(t),
            i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, r, u, f) {
            var o, s, h, c, a, e = this._dialogInst;
            if (!e) {
                this.uuid += 1;
                o = "dp" + this.uuid;
                this._dialogInput = n("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.on("keydown", this._doKeyDown);
                n("body").append(this._dialogInput);
                e = this._dialogInst = this._newInst(this._dialogInput, !1);
                e.settings = {};
                n.data(this._dialogInput[0], "datepicker", e)
            }
            return l(e.settings, u || {}),
            i = i && i.constructor === Date ? this._formatDate(e, i) : i,
            this._dialogInput.val(i),
            this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null,
            this._pos || (s = document.documentElement.clientWidth,
            h = document.documentElement.clientHeight,
            c = document.documentElement.scrollLeft || document.body.scrollLeft,
            a = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [s / 2 - 100 + c, h / 2 - 150 + a]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            e.settings.onSelect = r,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            n.blockUI && n.blockUI(this.dpDiv),
            n.data(this._dialogInput[0], "datepicker", e),
            this
        },
        _destroyDatepicker: function(t) {
            var i, r = n(t), u = n.data(t, "datepicker");
            r.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
            n.removeData(t, "datepicker"),
            i === "input" ? (u.append.remove(),
            u.trigger.remove(),
            r.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : (i === "div" || i === "span") && r.removeClass(this.markerClassName).empty(),
            f === u && (f = null,
            this._curInst = null))
        },
        _enableDatepicker: function(t) {
            var i, r, u = n(t), f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
            i === "input" ? (t.disabled = !1,
            f.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : (i === "div" || i === "span") && (r = u.children("." + this._inlineClass),
            r.children().removeClass("ui-state-disabled"),
            r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n === t ? null : n
            }))
        },
        _disableDatepicker: function(t) {
            var i, r, u = n(t), f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
            i === "input" ? (t.disabled = !0,
            f.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : (i === "div" || i === "span") && (r = u.children("." + this._inlineClass),
            r.children().addClass("ui-state-disabled"),
            r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n === t ? null : n
            }),
            this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(n) {
            if (!n)
                return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === n)
                    return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return n.data(t, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(t, i, r) {
            var f, s, e, o, u = this._getInst(t);
            if (arguments.length === 2 && typeof i == "string")
                return i === "defaults" ? n.extend({}, n.datepicker._defaults) : u ? i === "all" ? n.extend({}, u.settings) : this._get(u, i) : null;
            f = i || {};
            typeof i == "string" && (f = {},
            f[i] = r);
            u && (this._curInst === u && this._hideDatepicker(),
            s = this._getDateDatepicker(t, !0),
            e = this._getMinMaxDate(u, "min"),
            o = this._getMinMaxDate(u, "max"),
            l(u.settings, f),
            e !== null && f.dateFormat !== undefined && f.minDate === undefined && (u.settings.minDate = this._formatDate(u, e)),
            o !== null && f.dateFormat !== undefined && f.maxDate === undefined && (u.settings.maxDate = this._formatDate(u, o)),
            "disabled"in f && (f.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
            this._attachments(n(t), u),
            this._autoSize(u),
            this._setDate(u, s),
            this._updateAlternate(u),
            this._updateDatepicker(u))
        },
        _changeDatepicker: function(n, t, i) {
            this._optionDatepicker(n, t, i)
        },
        _refreshDatepicker: function(n) {
            var t = this._getInst(n);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            i && (this._setDate(i, t),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            return i && !i.inline && this._setDateFromField(i, t),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var u, e, f, i = n.datepicker._getInst(t.target), r = !0, o = i.dpDiv.is(".ui-datepicker-rtl");
            if (i._keyEvent = !0,
            n.datepicker._datepickerShowing)
                switch (t.keyCode) {
                case 9:
                    n.datepicker._hideDatepicker();
                    r = !1;
                    break;
                case 13:
                    return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv),
                    f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]),
                    u = n.datepicker._get(i, "onSelect"),
                    u ? (e = n.datepicker._formatDate(i),
                    u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    n.datepicker._hideDatepicker();
                    break;
                case 33:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 34:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
                }
            else
                t.keyCode === 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(),
            t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, r, u = n.datepicker._getInst(t.target);
            if (n.datepicker._get(u, "constrainInput"))
                return i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")),
                r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode),
                t.ctrlKey || t.metaKey || r < " " || !i || i.indexOf(r) > -1
        },
        _doKeyUp: function(t) {
            var r, i = n.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal)
                try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                    r && (n.datepicker._setDateFromField(i),
                    n.datepicker._updateAlternate(i),
                    n.datepicker._updateDatepicker(i))
                } catch (u) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t,
            t.nodeName.toLowerCase() !== "input" && (t = n("input", t.parentNode)[0]),
            !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
                var i, e, o, r, u, f, s;
                (i = n.datepicker._getInst(t),
                n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0),
                i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])),
                e = n.datepicker._get(i, "beforeShow"),
                o = e ? e.apply(t, [t, i]) : {},
                o !== !1) && (l(i.settings, o),
                i.lastVal = null,
                n.datepicker._lastInput = t,
                n.datepicker._setDateFromField(i),
                n.datepicker._inDialog && (t.value = ""),
                n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t),
                n.datepicker._pos[1] += t.offsetHeight),
                r = !1,
                n(t).parents().each(function() {
                    return r |= n(this).css("position") === "fixed",
                    !r
                }),
                u = {
                    left: n.datepicker._pos[0],
                    top: n.datepicker._pos[1]
                },
                n.datepicker._pos = null,
                i.dpDiv.empty(),
                i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }),
                n.datepicker._updateDatepicker(i),
                u = n.datepicker._checkOffset(i, u, r),
                i.dpDiv.css({
                    position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: u.left + "px",
                    top: u.top + "px"
                }),
                i.inline || (f = n.datepicker._get(i, "showAnim"),
                s = n.datepicker._get(i, "duration"),
                i.dpDiv.css("z-index", kt(n(t)) + 1),
                n.datepicker._datepickerShowing = !0,
                n.effects && n.effects.effect[f] ? i.dpDiv.show(f, n.datepicker._get(i, "showOptions"), s) : i.dpDiv[f || "show"](f ? s : null),
                n.datepicker._shouldFocusInput(i) && i.input.trigger("focus"),
                n.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4;
            f = t;
            t.dpDiv.empty().append(this._generateHTML(t));
            this._attachHandlers(t);
            var i, r = this._getNumberOfMonths(t), u = r[1], e = t.dpDiv.find("." + this._dayOverClass + " a"), o = n.datepicker._get(t, "onUpdateDatepicker");
            e.length > 0 && et.apply(e.get(0));
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            u > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + u).css("width", 17 * u + "em");
            t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.trigger("focus");
            t.yearshtml && (i = t.yearshtml,
            setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year").first().replaceWith(t.yearshtml);
                i = t.yearshtml = null
            }, 0));
            o && o.apply(t.input ? t.input[0] : null, [t])
        },
        _shouldFocusInput: function(n) {
            return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
        },
        _checkOffset: function(t, i, r) {
            var u = t.dpDiv.outerWidth()
              , f = t.dpDiv.outerHeight()
              , h = t.input ? t.input.outerWidth() : 0
              , o = t.input ? t.input.outerHeight() : 0
              , e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft())
              , s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? u - h : 0,
            i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0,
            i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0),
            i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0),
            i
        },
        _findPos: function(t) {
            for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && (t.type === "hidden" || t.nodeType !== 1 || n.expr.pseudos.hidden(t)); )
                t = t[u ? "previousSibling" : "nextSibling"];
            return i = n(t).offset(),
            [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var r, f, u, e, i = this._curInst;
            i && (!t || i === n.data(t, "datepicker")) && this._datepickerShowing && (r = this._get(i, "showAnim"),
            f = this._get(i, "duration"),
            u = function() {
                n.datepicker._tidyDialog(i)
            }
            ,
            n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.hide(r, n.datepicker._get(i, "showOptions"), f, u) : i.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? f : null, u),
            r || u(),
            this._datepickerShowing = !1,
            e = this._get(i, "onClose"),
            e && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            n.blockUI && (n.unblockUI(),
            n("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(n) {
            n.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (n.datepicker._curInst) {
                var i = n(t.target)
                  , r = n.datepicker._getInst(i[0]);
                (i[0].id === n.datepicker._mainDivId || i.parents("#" + n.datepicker._mainDivId).length !== 0 || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, r) {
            var u = n(t)
              , f = this._getInst(u[0]);
            this._isDisabledDatepicker(u[0]) || (this._adjustInstDate(f, i, r),
            this._updateDatepicker(f))
        },
        _gotoToday: function(t) {
            var r, u = n(t), i = this._getInst(u[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay,
            i.drawMonth = i.selectedMonth = i.currentMonth,
            i.drawYear = i.selectedYear = i.currentYear) : (r = new Date,
            i.selectedDay = r.getDate(),
            i.drawMonth = i.selectedMonth = r.getMonth(),
            i.drawYear = i.selectedYear = r.getFullYear());
            this._notifyChange(i);
            this._adjustDate(u)
        },
        _selectMonthYear: function(t, i, r) {
            var f = n(t)
              , u = this._getInst(f[0]);
            u["selected" + (r === "M" ? "Month" : "Year")] = u["draw" + (r === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(u);
            this._adjustDate(f)
        },
        _selectDay: function(t, i, r, u) {
            var f, e = n(t);
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]),
            f.selectedDay = f.currentDay = parseInt(n("a", u).attr("data-date")),
            f.selectedMonth = f.currentMonth = i,
            f.selectedYear = f.currentYear = r,
            this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(t) {
            var i = n(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var u, f = n(t), r = this._getInst(f[0]);
            i = i != null ? i : this._formatDate(r);
            r.input && r.input.val(i);
            this._updateAlternate(r);
            u = this._get(r, "onSelect");
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(),
            this._lastInput = r.input[0],
            typeof r.input[0] != "object" && r.input.trigger("focus"),
            this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, r, u, f = this._get(t, "altField");
            f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
            r = this._getDate(t),
            u = this.formatDate(i, r, this._getFormatConfig(t)),
            n(document).find(f).val(u))
        },
        noWeekends: function(n) {
            var t = n.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function(n) {
            var i, t = new Date(n.getTime());
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)),
            i = t.getTime(),
            t.setMonth(0),
            t.setDate(1),
            Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, r) {
            if (t == null || i == null)
                throw "Invalid arguments";
            if (i = typeof i == "object" ? i.toString() : i + "",
            i === "")
                return null;
            for (var a, v, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = typeof y != "string" ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1, w = !1, u, l = function(n) {
                var i = o + 1 < t.length && t.charAt(o + 1) === n;
                return i && o++,
                i
            }, c = function(n) {
                var u = l(n)
                  , r = n === "@" ? 14 : n === "!" ? 20 : n === "y" && u ? 4 : n === "o" ? 3 : 2
                  , e = n === "y" ? r : 1
                  , o = new RegExp("^\\d{" + e + "," + r + "}")
                  , t = i.substring(f).match(o);
                if (!t)
                    throw "Missing number at position " + f;
                return f += t[0].length,
                parseInt(t[0], 10)
            }, k = function(t, r, u) {
                var e = -1
                  , o = n.map(l(t) ? u : r, function(n, t) {
                    return [[t, n]]
                }).sort(function(n, t) {
                    return -(n[1].length - t[1].length)
                });
                if (n.each(o, function(n, t) {
                    var r = t[1];
                    if (i.substr(f, r.length).toLowerCase() === r.toLowerCase())
                        return e = t[0],
                        f += r.length,
                        !1
                }),
                e !== -1)
                    return e + 1;
                throw "Unknown name at position " + f;
            }, b = function() {
                if (i.charAt(f) !== t.charAt(o))
                    throw "Unexpected literal at position " + f;
                f++
            }, o = 0; o < t.length; o++)
                if (w)
                    t.charAt(o) !== "'" || l("'") ? b() : w = !1;
                else
                    switch (t.charAt(o)) {
                    case "d":
                        h = c("d");
                        break;
                    case "D":
                        k("D", g, nt);
                        break;
                    case "o":
                        p = c("o");
                        break;
                    case "m":
                        s = c("m");
                        break;
                    case "M":
                        s = k("M", tt, it);
                        break;
                    case "y":
                        e = c("y");
                        break;
                    case "@":
                        u = new Date(c("@"));
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "!":
                        u = new Date((c("!") - this._ticksTo1970) / 1e4);
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "'":
                        l("'") ? b() : w = !0;
                        break;
                    default:
                        b()
                    }
            if (f < i.length && (v = i.substr(f),
            !/^\s+/.test(v)))
                throw "Extra/unparsed characters found in date: " + v;
            if (e === -1 ? e = (new Date).getFullYear() : e < 100 && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= d ? 0 : -100)),
            p > -1) {
                s = 1;
                h = p;
                do {
                    if (a = this._getDaysInMonth(e, s - 1),
                    h <= a)
                        break;
                    s++;
                    h -= a
                } while (1)
            }
            if (u = this._daylightSavingAdjust(new Date(e,s - 1,h)),
            u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h)
                throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 864e9,
        formatDate: function(n, t, i) {
            if (!t)
                return "";
            var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, c = (i ? i.dayNames : null) || this._defaults.dayNames, l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, f = function(t) {
                var i = u + 1 < n.length && n.charAt(u + 1) === t;
                return i && u++,
                i
            }, e = function(n, t, i) {
                var r = "" + t;
                if (f(n))
                    while (r.length < i)
                        r = "0" + r;
                return r
            }, s = function(n, t, i, r) {
                return f(n) ? r[t] : i[t]
            }, r = "", o = !1;
            if (t)
                for (u = 0; u < n.length; u++)
                    if (o)
                        n.charAt(u) !== "'" || f("'") ? r += n.charAt(u) : o = !1;
                    else
                        switch (n.charAt(u)) {
                        case "d":
                            r += e("d", t.getDate(), 2);
                            break;
                        case "D":
                            r += s("D", t.getDay(), h, c);
                            break;
                        case "o":
                            r += e("o", Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime() - new Date(t.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            r += e("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            r += s("M", t.getMonth(), l, a);
                            break;
                        case "y":
                            r += f("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                            break;
                        case "@":
                            r += t.getTime();
                            break;
                        case "!":
                            r += t.getTime() * 1e4 + this._ticksTo1970;
                            break;
                        case "'":
                            f("'") ? r += "'" : o = !0;
                            break;
                        default:
                            r += n.charAt(u)
                        }
            return r
        },
        _possibleChars: function(n) {
            for (var i = "", r = !1, u = function(i) {
                var r = t + 1 < n.length && n.charAt(t + 1) === i;
                return r && t++,
                r
            }, t = 0; t < n.length; t++)
                if (r)
                    n.charAt(t) !== "'" || u("'") ? i += n.charAt(t) : r = !1;
                else
                    switch (n.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        u("'") ? i += "'" : r = !0;
                        break;
                    default:
                        i += n.charAt(t)
                    }
            return i
        },
        _get: function(n, t) {
            return n.settings[t] !== undefined ? n.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(n, t) {
            if (n.input.val() !== n.lastVal) {
                var f = this._get(n, "dateFormat")
                  , r = n.lastVal = n.input ? n.input.val() : null
                  , u = this._getDefaultDate(n)
                  , i = u
                  , e = this._getFormatConfig(n);
                try {
                    i = this.parseDate(f, r, e) || u
                } catch (o) {
                    r = t ? "" : r
                }
                n.selectedDay = i.getDate();
                n.drawMonth = n.selectedMonth = i.getMonth();
                n.drawYear = n.selectedYear = i.getFullYear();
                n.currentDay = r ? i.getDate() : 0;
                n.currentMonth = r ? i.getMonth() : 0;
                n.currentYear = r ? i.getFullYear() : 0;
                this._adjustInstDate(n)
            }
        },
        _getDefaultDate: function(n) {
            return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, r) {
            var f = function(n) {
                var t = new Date;
                return t.setDate(t.getDate() + n),
                t
            }
              , e = function(i) {
                try {
                    return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                } catch (h) {}
                for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u; ) {
                    switch (u[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(u[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += parseInt(u[1], 10) * 7;
                        break;
                    case "m":
                    case "M":
                        e += parseInt(u[1], 10);
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                        break;
                    case "y":
                    case "Y":
                        f += parseInt(u[1], 10);
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                    }
                    u = s.exec(i)
                }
                return new Date(f,e,r)
            }
              , u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
            return u = u && u.toString() === "Invalid Date" ? r : u,
            u && (u.setHours(0),
            u.setMinutes(0),
            u.setSeconds(0),
            u.setMilliseconds(0)),
            this._daylightSavingAdjust(u)
        },
        _daylightSavingAdjust: function(n) {
            return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0),
            n) : null
        },
        _setDate: function(n, t, i) {
            var u = !t
              , f = n.selectedMonth
              , e = n.selectedYear
              , r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate();
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
            f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
            this._adjustInstDate(n);
            n.input && n.input.val(u ? "" : this._formatDate(n))
        },
        _getDate: function(n) {
            return !n.currentYear || n.input && n.input.val() === "" ? null : this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay))
        },
        _attachHandlers: function(t) {
            var r = this._get(t, "stepMonths")
              , i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        n.datepicker._adjustDate(i, -r, "M")
                    },
                    next: function() {
                        n.datepicker._adjustDate(i, +r, "M")
                    },
                    hide: function() {
                        n.datepicker._hideDatepicker()
                    },
                    today: function() {
                        n.datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return n.datepicker._selectMonthYear(i, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return n.datepicker._selectMonthYear(i, this, "Y"),
                        !1
                    }
                };
                n(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var k, h, et, c, ot, d, st, nt, ht, l, ct, fi, ei, oi, si, lt, tt, hi, at, it, s, p, vt, w, yt, a, f, pt, wt, bt, kt, rt, dt, i, gt, ni, g, v, ut, ti = new Date, ii = this._daylightSavingAdjust(new Date(ti.getFullYear(),ti.getMonth(),ti.getDate())), e = this._get(t, "isRTL"), ai = this._get(t, "showButtonPanel"), ci = this._get(t, "hideIfNoPrevNext"), ri = this._get(t, "navigationAsDateFormat"), o = this._getNumberOfMonths(t), vi = this._get(t, "showCurrentAtPos"), li = this._get(t, "stepMonths"), ui = o[0] !== 1 || o[1] !== 1, ft = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), b = this._getMinMaxDate(t, "min"), y = this._getMinMaxDate(t, "max"), r = t.drawMonth - vi, u = t.drawYear;
            if (r < 0 && (r += 12,
            u--),
            y)
                for (k = this._daylightSavingAdjust(new Date(y.getFullYear(),y.getMonth() - o[0] * o[1] + 1,y.getDate())),
                k = b && k < b ? b : k; this._daylightSavingAdjust(new Date(u,r,1)) > k; )
                    r--,
                    r < 0 && (r = 11,
                    u--);
            for (t.drawMonth = r,
            t.drawYear = u,
            h = this._get(t, "prevText"),
            h = ri ? this.formatDate(h, this._daylightSavingAdjust(new Date(u,r - li,1)), this._getFormatConfig(t)) : h,
            et = this._canAdjustMonth(t, -1, u, r) ? n("<a>").attr({
                "class": "ui-datepicker-prev ui-corner-all",
                "data-handler": "prev",
                "data-event": "click",
                title: h
            }).append(n("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w")).text(h))[0].outerHTML : ci ? "" : n("<a>").attr({
                "class": "ui-datepicker-prev ui-corner-all ui-state-disabled",
                title: h
            }).append(n("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w")).text(h))[0].outerHTML,
            c = this._get(t, "nextText"),
            c = ri ? this.formatDate(c, this._daylightSavingAdjust(new Date(u,r + li,1)), this._getFormatConfig(t)) : c,
            ot = this._canAdjustMonth(t, 1, u, r) ? n("<a>").attr({
                "class": "ui-datepicker-next ui-corner-all",
                "data-handler": "next",
                "data-event": "click",
                title: c
            }).append(n("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e")).text(c))[0].outerHTML : ci ? "" : n("<a>").attr({
                "class": "ui-datepicker-next ui-corner-all ui-state-disabled",
                title: c
            }).append(n("<span>").attr("class", "ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e")).text(c))[0].outerHTML,
            d = this._get(t, "currentText"),
            st = this._get(t, "gotoCurrent") && t.currentDay ? ft : ii,
            d = ri ? this.formatDate(d, st, this._getFormatConfig(t)) : d,
            nt = "",
            t.inline || (nt = n("<button>").attr({
                type: "button",
                "class": "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
                "data-handler": "hide",
                "data-event": "click"
            }).text(this._get(t, "closeText"))[0].outerHTML),
            ht = "",
            ai && (ht = n("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(e ? nt : "").append(this._isInRange(t, st) ? n("<button>").attr({
                type: "button",
                "class": "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
                "data-handler": "today",
                "data-event": "click"
            }).text(d) : "").append(e ? "" : nt)[0].outerHTML),
            l = parseInt(this._get(t, "firstDay"), 10),
            l = isNaN(l) ? 0 : l,
            ct = this._get(t, "showWeek"),
            fi = this._get(t, "dayNames"),
            ei = this._get(t, "dayNamesMin"),
            oi = this._get(t, "monthNames"),
            si = this._get(t, "monthNamesShort"),
            lt = this._get(t, "beforeShowDay"),
            tt = this._get(t, "showOtherMonths"),
            hi = this._get(t, "selectOtherMonths"),
            at = this._getDefaultDate(t),
            it = "",
            p = 0; p < o[0]; p++) {
                for (vt = "",
                this.maxRows = 4,
                w = 0; w < o[1]; w++) {
                    if (yt = this._daylightSavingAdjust(new Date(u,r,t.selectedDay)),
                    a = " ui-corner-all",
                    f = "",
                    ui) {
                        if (f += "<div class='ui-datepicker-group",
                        o[1] > 1)
                            switch (w) {
                            case 0:
                                f += " ui-datepicker-group-first";
                                a = " ui-corner-" + (e ? "right" : "left");
                                break;
                            case o[1] - 1:
                                f += " ui-datepicker-group-last";
                                a = " ui-corner-" + (e ? "left" : "right");
                                break;
                            default:
                                f += " ui-datepicker-group-middle";
                                a = ""
                            }
                        f += "'>"
                    }
                    for (f += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + a + "'>" + (/all|left/.test(a) && p === 0 ? e ? ot : et : "") + (/all|right/.test(a) && p === 0 ? e ? et : ot : "") + this._generateMonthYearHeader(t, r, u, b, y, p > 0 || w > 0, oi, si) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>",
                    pt = ct ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "<\/th>" : "",
                    s = 0; s < 7; s++)
                        wt = (s + l) % 7,
                        pt += "<th scope='col'" + ((s + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + fi[wt] + "'>" + ei[wt] + "<\/span><\/th>";
                    for (f += pt + "<\/tr><\/thead><tbody>",
                    bt = this._getDaysInMonth(u, r),
                    u === t.selectedYear && r === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, bt)),
                    kt = (this._getFirstDayOfMonth(u, r) - l + 7) % 7,
                    rt = Math.ceil((kt + bt) / 7),
                    dt = ui ? this.maxRows > rt ? this.maxRows : rt : rt,
                    this.maxRows = dt,
                    i = this._daylightSavingAdjust(new Date(u,r,1 - kt)),
                    gt = 0; gt < dt; gt++) {
                        for (f += "<tr>",
                        ni = ct ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(i) + "<\/td>" : "",
                        s = 0; s < 7; s++)
                            g = lt ? lt.apply(t.input ? t.input[0] : null, [i]) : [!0, ""],
                            v = i.getMonth() !== r,
                            ut = v && !hi || !g[0] || b && i < b || y && i > y,
                            ni += "<td class='" + ((s + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (v ? " ui-datepicker-other-month" : "") + (i.getTime() === yt.getTime() && r === t.selectedMonth && t._keyEvent || at.getTime() === i.getTime() && at.getTime() === yt.getTime() ? " " + this._dayOverClass : "") + (ut ? " " + this._unselectableClass + " ui-state-disabled" : "") + (v && !tt ? "" : " " + g[1] + (i.getTime() === ft.getTime() ? " " + this._currentClass : "") + (i.getTime() === ii.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!v || tt) && g[2] ? " title='" + g[2].replace(/'/g, "&#39;") + "'" : "") + (ut ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (v && !tt ? "&#xa0;" : ut ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === ii.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ft.getTime() ? " ui-state-active" : "") + (v ? " ui-priority-secondary" : "") + "' href='#' aria-current='" + (i.getTime() === ft.getTime() ? "true" : "false") + "' data-date='" + i.getDate() + "'>" + i.getDate() + "<\/a>") + "<\/td>",
                            i.setDate(i.getDate() + 1),
                            i = this._daylightSavingAdjust(i);
                        f += ni + "<\/tr>"
                    }
                    r++;
                    r > 11 && (r = 0,
                    u++);
                    f += "<\/tbody><\/table>" + (ui ? "<\/div>" + (o[0] > 0 && w === o[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
                    vt += f
                }
                it += vt
            }
            return it += ht,
            t._keyEvent = !1,
            it
        },
        _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
            var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"), b = this._get(n, "changeYear"), g = this._get(n, "showMonthAfterYear"), nt = this._get(n, "selectMonthLabel"), tt = this._get(n, "selectYearLabel"), c = "<div class='ui-datepicker-title'>", l = "";
            if (f || !w)
                l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
            else {
                for (k = r && r.getFullYear() === i,
                d = u && u.getFullYear() === i,
                l += "<select class='ui-datepicker-month' aria-label='" + nt + "' data-handler='selectMonth' data-event='change'>",
                h = 0; h < 12; h++)
                    (!k || h >= r.getMonth()) && (!d || h <= u.getMonth()) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                l += "<\/select>"
            }
            if (g || (c += l + (f || !(w && b) ? "&#xa0;" : "")),
            !n.yearshtml)
                if (n.yearshtml = "",
                f || !b)
                    c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
                else {
                    for (v = this._get(n, "yearRange").split(":"),
                    y = (new Date).getFullYear(),
                    p = function(n) {
                        var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                        return isNaN(t) ? y : t
                    }
                    ,
                    s = p(v[0]),
                    a = Math.max(s, p(v[1] || "")),
                    s = r ? Math.max(s, r.getFullYear()) : s,
                    a = u ? Math.min(a, u.getFullYear()) : a,
                    n.yearshtml += "<select class='ui-datepicker-year' aria-label='" + tt + "' data-handler='selectYear' data-event='change'>"; s <= a; s++)
                        n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                    n.yearshtml += "<\/select>";
                    c += n.yearshtml;
                    n.yearshtml = null
                }
            return c += this._get(n, "yearSuffix"),
            g && (c += (f || !(w && b) ? "&#xa0;" : "") + l),
            c + "<\/div>"
        },
        _adjustInstDate: function(n, t, i) {
            var u = n.selectedYear + (i === "Y" ? t : 0)
              , f = n.selectedMonth + (i === "M" ? t : 0)
              , e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i === "D" ? t : 0)
              , r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u,f,e)));
            n.selectedDay = r.getDate();
            n.drawMonth = n.selectedMonth = r.getMonth();
            n.drawYear = n.selectedYear = r.getFullYear();
            (i === "M" || i === "Y") && this._notifyChange(n)
        },
        _restrictMinMax: function(n, t) {
            var i = this._getMinMaxDate(n, "min")
              , r = this._getMinMaxDate(n, "max")
              , u = i && t < i ? i : t;
            return r && u > r ? r : u
        },
        _notifyChange: function(n) {
            var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
        },
        _getNumberOfMonths: function(n) {
            var t = this._get(n, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function(n, t) {
            return this._determineDate(n, this._get(n, t + "Date"), null)
        },
        _getDaysInMonth: function(n, t) {
            return 32 - this._daylightSavingAdjust(new Date(n,t,32)).getDate()
        },
        _getFirstDayOfMonth: function(n, t) {
            return new Date(n,t,1).getDay()
        },
        _canAdjustMonth: function(n, t, i, r) {
            var f = this._getNumberOfMonths(n)
              , u = this._daylightSavingAdjust(new Date(i,r + (t < 0 ? t : f[0] * f[1]),1));
            return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())),
            this._isInRange(n, u)
        },
        _isInRange: function(n, t) {
            var i, f, e = this._getMinMaxDate(n, "min"), o = this._getMinMaxDate(n, "max"), r = null, u = null, s = this._get(n, "yearRange");
            return s && (i = s.split(":"),
            f = (new Date).getFullYear(),
            r = parseInt(i[0], 10),
            u = parseInt(i[1], 10),
            i[0].match(/[+\-].*/) && (r += f),
            i[1].match(/[+\-].*/) && (u += f)),
            (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || t.getFullYear() <= u)
        },
        _getFormatConfig: function(n) {
            var t = this._get(n, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
            {
                shortYearCutoff: t,
                dayNamesShort: this._get(n, "dayNamesShort"),
                dayNames: this._get(n, "dayNames"),
                monthNamesShort: this._get(n, "monthNamesShort"),
                monthNames: this._get(n, "monthNames")
            }
        },
        _formatDate: function(n, t, i, r) {
            t || (n.currentDay = n.selectedDay,
            n.currentMonth = n.selectedMonth,
            n.currentYear = n.selectedYear);
            var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r,i,t)) : this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay));
            return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
        }
    });
    n.fn.datepicker = function(t) {
        if (!this.length)
            return this;
        if (!n.datepicker.initialized) {
            n(document).on("mousedown", n.datepicker._checkExternalClick);
            n.datepicker.initialized = !0
        }
        n("#" + n.datepicker._mainDivId).length === 0 && n("body").append(n.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return typeof t == "string" && (t === "isDisabled" || t === "getDate" || t === "widget") ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
            typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
        })
    }
    ;
    n.datepicker = new ut;
    n.datepicker.initialized = !1;
    n.datepicker.uuid = (new Date).getTime();
    n.datepicker.version = "1.13.2";
    var yr = n.datepicker
      , pr = n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
      , a = !1;
    n(document).on("mouseup", function() {
        a = !1
    });
    var wr = n.widget("ui.mouse", {
        version: "1.13.2",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, function(n) {
                return t._mouseDown(n)
            }).on("click." + this.widgetName, function(i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent"))
                    return n.removeData(i.target, t.widgetName + ".preventClickEvent"),
                    i.stopImmediatePropagation(),
                    !1
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName);
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!a) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(t);
                this._mouseDownEvent = t;
                var i = this
                  , r = t.which === 1
                  , u = typeof this.options.cancel == "string" && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                if (!r || u || !this._mouseCapture(t))
                    return !0;
                if (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1,
                !this._mouseStarted))
                    return t.preventDefault(),
                    !0;
                !0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(n) {
                    return i._mouseMove(n)
                }
                ;
                this._mouseUpDelegate = function(n) {
                    return i._mouseUp(n)
                }
                ;
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
                return t.preventDefault(),
                a = !0,
                !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (n.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button)
                    return this._mouseUp(t);
                if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(t)
            }
            return ((t.which || t.button) && (this._mouseMoved = !0),
            this._mouseStarted) ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t));
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer);
            this.ignoreMissingWhich = !1;
            a = !1;
            t.preventDefault()
        },
        _mouseDistanceMet: function(n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
      , br = n.ui.plugin = {
        add: function(t, i, r) {
            var u, f = n.ui[t].prototype;
            for (u in r)
                f.plugins[u] = f.plugins[u] || [],
                f.plugins[u].push([i, r[u]])
        },
        call: function(n, t, i, r) {
            var u, f = n.plugins[t];
            if (f && (r || n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11))
                for (u = 0; u < f.length; u++)
                    n.options[f[u][0]] && f[u][1].apply(n.element, i)
        }
    }
      , kr = n.ui.safeBlur = function(t) {
        t && t.nodeName.toLowerCase() !== "body" && n(t).trigger("blur")
    }
    ;
    n.widget("ui.draggable", n.ui.mouse, {
        version: "1.13.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            this.options.helper === "original" && this._setPositionRelative();
            this.options.addClasses && this._addClass("ui-draggable");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(n, t) {
            this._super(n, t);
            n === "handle" && (this._removeHandleClassName(),
            this._setHandleClassName())
        },
        _destroy: function() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = !0;
                return
            }
            this._removeHandleClassName();
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t),
            !this.handle) ? !1 : (this._blurActiveElement(t),
            this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix),
            !0)
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = n(this);
                return n("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var i = n.ui.safeActiveElement(this.document[0])
              , r = n(t.target);
            r.closest(i).length || n.ui.safeBlur(i)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return (this.helper = this._createHelper(t),
            this._addClass(this.helper, "ui-draggable-dragging"),
            this._cacheHelperProportions(),
            n.ui.ddmanager && (n.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return n(this).css("position") === "fixed"
            }).length > 0,
            this.positionAbs = this.element.offset(),
            this._refreshOffsets(t),
            this.originalPosition = this.position = this._generatePosition(t, !1),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            this._trigger("start", t) === !1) ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _refreshOffsets: function(n) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: n.pageX - this.offset.left,
                top: n.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(t, !0),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1)
                    return this._mouseUp(new n.Event("mouseup",t)),
                    !1;
                this.position = r.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var r = this
              , i = !1;
            return n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)),
            this.dropped && (i = this.dropped,
            this.dropped = !1),
            this.options.revert === "invalid" && !i || this.options.revert === "valid" && i || this.options.revert === !0 || typeof this.options.revert == "function" && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                r._trigger("stop", t) !== !1 && r._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(),
            !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(),
            n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t),
            this.handleElement.is(t.target) && this.element.trigger("focus"),
            n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new n.Event("mouseup",{
                target: this.element[0]
            })) : this._clear(),
            this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(t) {
            var r = this.options
              , u = typeof r.helper == "function"
              , i = u ? n(r.helper.apply(this.element[0], [t])) : r.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo === "parent" ? this.element[0].parentNode : r.appendTo),
            u && i[0] === this.element[0] && this._setPositionRelative(),
            i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"),
            i
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(n) {
            typeof n == "string" && (n = n.split(" "));
            Array.isArray(n) && (n = {
                left: +n[0],
                top: +n[1] || 0
            });
            "left"in n && (this.offset.click.left = n.left + this.margins.left);
            "right"in n && (this.offset.click.left = this.helperProportions.width - n.right + this.margins.left);
            "top"in n && (this.offset.click.top = n.top + this.margins.top);
            "bottom"in n && (this.offset.click.top = this.helperProportions.height - n.bottom + this.margins.top)
        },
        _isRootNode: function(n) {
            return /(html|body)/i.test(n.tagName) || n === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset()
              , i = this.document[0];
            return this.cssPosition === "absolute" && this.scrollParent[0] !== i && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition !== "relative")
                return {
                    top: 0,
                    left: 0
                };
            var n = this.element.position()
              , t = this._isRootNode(this.scrollParent[0]);
            return {
                top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var f, t, i, r = this.options, u = this.document[0];
            if (this.relativeContainer = null,
            !r.containment) {
                this.containment = null;
                return
            }
            if (r.containment === "window") {
                this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment === "document") {
                this.containment = [0, 0, n(u).width() - this.helperProportions.width - this.margins.left, (n(u).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment.constructor === Array) {
                this.containment = r.containment;
                return
            }
            (r.containment === "parent" && (r.containment = this.helper[0].parentNode),
            t = n(r.containment),
            i = t[0],
            i) && (f = /(scroll|auto)/.test(t.css("overflow")),
            this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (f ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relativeContainer = t)
        },
        _convertPositionTo: function(n, t) {
            t || (t = this.position);
            var i = n === "absolute" ? 1 : -1
              , r = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - (this.cssPosition === "fixed" ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - (this.cssPosition === "fixed" ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(n, t) {
            var i, s, u, f, r = this.options, h = this._isRootNode(this.scrollParent[0]), e = n.pageX, o = n.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(),
            i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
            n.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left),
            n.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top),
            n.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left),
            n.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)),
            r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY,
            o = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u,
            f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX,
            e = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f),
            r.axis === "y" && (e = this.originalPageX),
            r.axis === "x" && (o = this.originalPageY)),
            {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(t, i, r) {
            return r = r || this._uiHash(),
            n.ui.plugin.call(this, t, [i, r, this], !0),
            /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"),
            r.offset = this.positionAbs),
            n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i, r) {
            var u = n.extend({}, i, {
                item: r.element
            });
            r.sortables = [];
            n(r.options.connectToSortable).each(function() {
                var i = n(this).sortable("instance");
                i && !i.options.disabled && (r.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", t, u))
            })
        },
        stop: function(t, i, r) {
            var u = n.extend({}, i, {
                item: r.element
            });
            r.cancelHelperRemoval = !1;
            n.each(r.sortables, function() {
                var n = this;
                n.isOver ? (n.isOver = 0,
                r.cancelHelperRemoval = !0,
                n.cancelHelperRemoval = !1,
                n._storedCSS = {
                    position: n.placeholder.css("position"),
                    top: n.placeholder.css("top"),
                    left: n.placeholder.css("left")
                },
                n._mouseStop(t),
                n.options.helper = n.options._helper) : (n.cancelHelperRemoval = !0,
                n._trigger("deactivate", t, u))
            })
        },
        drag: function(t, i, r) {
            n.each(r.sortables, function() {
                var f = !1
                  , u = this;
                u.positionAbs = r.positionAbs;
                u.helperProportions = r.helperProportions;
                u.offset.click = r.offset.click;
                u._intersectsWith(u.containerCache) && (f = !0,
                n.each(r.sortables, function() {
                    return this.positionAbs = r.positionAbs,
                    this.helperProportions = r.helperProportions,
                    this.offset.click = r.offset.click,
                    this !== u && this._intersectsWith(this.containerCache) && n.contains(u.element[0], this.element[0]) && (f = !1),
                    f
                }));
                f ? (u.isOver || (u.isOver = 1,
                r._parent = i.helper.parent(),
                u.currentItem = i.helper.appendTo(u.element).data("ui-sortable-item", !0),
                u.options._helper = u.options.helper,
                u.options.helper = function() {
                    return i.helper[0]
                }
                ,
                t.target = u.currentItem[0],
                u._mouseCapture(t, !0),
                u._mouseStart(t, !0, !0),
                u.offset.click.top = r.offset.click.top,
                u.offset.click.left = r.offset.click.left,
                u.offset.parent.left -= r.offset.parent.left - u.offset.parent.left,
                u.offset.parent.top -= r.offset.parent.top - u.offset.parent.top,
                r._trigger("toSortable", t),
                r.dropped = u.element,
                n.each(r.sortables, function() {
                    this.refreshPositions()
                }),
                r.currentItem = r.element,
                u.fromOutside = r),
                u.currentItem && (u._mouseDrag(t),
                i.position = u.position)) : u.isOver && (u.isOver = 0,
                u.cancelHelperRemoval = !0,
                u.options._revert = u.options.revert,
                u.options.revert = !1,
                u._trigger("out", t, u._uiHash(u)),
                u._mouseStop(t, !0),
                u.options.revert = u.options._revert,
                u.options.helper = u.options._helper,
                u.placeholder && u.placeholder.remove(),
                i.helper.appendTo(r._parent),
                r._refreshOffsets(t),
                i.position = r._generatePosition(t, !0),
                r._trigger("fromSortable", t),
                r.dropped = !1,
                n.each(r.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    });
    n.ui.plugin.add("draggable", "cursor", {
        start: function(t, i, r) {
            var u = n("body")
              , f = r.options;
            u.css("cursor") && (f._cursor = u.css("cursor"));
            u.css("cursor", f.cursor)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._cursor && n("body").css("cursor", u._cursor)
        }
    });
    n.ui.plugin.add("draggable", "opacity", {
        start: function(t, i, r) {
            var u = n(i.helper)
              , f = r.options;
            u.css("opacity") && (f._opacity = u.css("opacity"));
            u.css("opacity", f.opacity)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._opacity && n(i.helper).css("opacity", u._opacity)
        }
    });
    n.ui.plugin.add("draggable", "scroll", {
        start: function(n, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1));
            i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML" && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, i, r) {
            var u = r.options
              , o = !1
              , e = r.scrollParentNotHidden[0]
              , f = r.document[0];
            e !== f && e.tagName !== "HTML" ? (u.axis && u.axis === "x" || (r.overflowOffset.top + e.offsetHeight - t.pageY < u.scrollSensitivity ? e.scrollTop = o = e.scrollTop + u.scrollSpeed : t.pageY - r.overflowOffset.top < u.scrollSensitivity && (e.scrollTop = o = e.scrollTop - u.scrollSpeed)),
            u.axis && u.axis === "y" || (r.overflowOffset.left + e.offsetWidth - t.pageX < u.scrollSensitivity ? e.scrollLeft = o = e.scrollLeft + u.scrollSpeed : t.pageX - r.overflowOffset.left < u.scrollSensitivity && (e.scrollLeft = o = e.scrollLeft - u.scrollSpeed))) : (u.axis && u.axis === "x" || (t.pageY - n(f).scrollTop() < u.scrollSensitivity ? o = n(f).scrollTop(n(f).scrollTop() - u.scrollSpeed) : n(window).height() - (t.pageY - n(f).scrollTop()) < u.scrollSensitivity && (o = n(f).scrollTop(n(f).scrollTop() + u.scrollSpeed))),
            u.axis && u.axis === "y" || (t.pageX - n(f).scrollLeft() < u.scrollSensitivity ? o = n(f).scrollLeft(n(f).scrollLeft() - u.scrollSpeed) : n(window).width() - (t.pageX - n(f).scrollLeft()) < u.scrollSensitivity && (o = n(f).scrollLeft(n(f).scrollLeft() + u.scrollSpeed))));
            o !== !1 && n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
        }
    });
    n.ui.plugin.add("draggable", "snap", {
        start: function(t, i, r) {
            var u = r.options;
            r.snapElements = [];
            n(u.snap.constructor !== String ? u.snap.items || ":data(ui-draggable)" : u.snap).each(function() {
                var t = n(this)
                  , i = t.offset();
                this !== r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, i, r) {
            for (var e, o, s, h, c, a, l, v, w, b = r.options, f = b.snapTolerance, y = i.offset.left, k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height, u = r.snapElements.length - 1; u >= 0; u--) {
                if (c = r.snapElements[u].left - r.margins.left,
                a = c + r.snapElements[u].width,
                l = r.snapElements[u].top - r.margins.top,
                v = l + r.snapElements[u].height,
                k < c - f || y > a + f || d < l - f || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item)) {
                    r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                        snapItem: r.snapElements[u].item
                    }));
                    r.snapElements[u].snapping = !1;
                    continue
                }
                b.snapMode !== "inner" && (e = Math.abs(l - d) <= f,
                o = Math.abs(v - p) <= f,
                s = Math.abs(c - k) <= f,
                h = Math.abs(a - y) <= f,
                e && (i.position.top = r._convertPositionTo("relative", {
                    top: l - r.helperProportions.height,
                    left: 0
                }).top),
                o && (i.position.top = r._convertPositionTo("relative", {
                    top: v,
                    left: 0
                }).top),
                s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c - r.helperProportions.width
                }).left),
                h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left));
                w = e || o || s || h;
                b.snapMode !== "outer" && (e = Math.abs(l - p) <= f,
                o = Math.abs(v - d) <= f,
                s = Math.abs(c - y) <= f,
                h = Math.abs(a - k) <= f,
                e && (i.position.top = r._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top),
                o && (i.position.top = r._convertPositionTo("relative", {
                    top: v - r.helperProportions.height,
                    left: 0
                }).top),
                s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c
                }).left),
                h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a - r.helperProportions.width
                }).left));
                !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[u].item
                }));
                r.snapElements[u].snapping = e || o || s || h || w
            }
        }
    });
    n.ui.plugin.add("draggable", "stack", {
        start: function(t, i, r) {
            var f, e = r.options, u = n.makeArray(n(e.stack)).sort(function(t, i) {
                return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
            });
            u.length && (f = parseInt(n(u[0]).css("zIndex"), 10) || 0,
            n(u).each(function(t) {
                n(this).css("zIndex", f + t)
            }),
            this.css("zIndex", f + u.length))
        }
    });
    n.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i, r) {
            var u = n(i.helper)
              , f = r.options;
            u.css("zIndex") && (f._zIndex = u.css("zIndex"));
            u.css("zIndex", f.zIndex)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._zIndex && n(i.helper).css("zIndex", u._zIndex)
        }
    });
    dt = n.ui.draggable;
    n.widget("ui.resizable", n.ui.mouse, {
        version: "1.13.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(n) {
            return parseFloat(n) || 0
        },
        _isNumber: function(n) {
            return !isNaN(parseFloat(n))
        },
        _hasScroll: function(t, i) {
            if (n(t).css("overflow") === "hidden")
                return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop"
              , u = !1;
            if (t[r] > 0)
                return !0;
            try {
                t[r] = 1;
                u = t[r] > 0;
                t[r] = 0
            } catch (f) {}
            return u
        },
        _create: function() {
            var r, t = this.options, i = this;
            if (this._addClass("ui-resizable"),
            n.extend(this, {
                _aspectRatio: !!t.aspectRatio,
                aspectRatio: t.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(n("<div class='ui-wrapper'><\/div>").css({
                overflow: "hidden",
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
            this.elementIsWrapper = !0,
            r = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            },
            this.element.css(r),
            this.originalElement.css("margin", 0),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css(r),
            this._proportionallyResize()),
            this._setupHandles(),
            t.autoHide)
                n(this.element).on("mouseenter", function() {
                    t.disabled || (i._removeClass("ui-resizable-autohide"),
                    i._handles.show())
                }).on("mouseleave", function() {
                    t.disabled || i.resizing || (i._addClass("ui-resizable-autohide"),
                    i._handles.hide())
                });
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            this._addedHandles.remove();
            var t, i = function(t) {
                n(t).removeData("resizable").removeData("ui-resizable").off(".resizable")
            };
            return this.elementIsWrapper && (i(this.element),
            t = this.element,
            this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t),
            t.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _setOption: function(n, t) {
            this._super(n, t);
            switch (n) {
            case "handles":
                this._removeHandles();
                this._setupHandles();
                break;
            case "aspectRatio":
                this._aspectRatio = !!t
            }
        },
        _setupHandles: function() {
            var u = this.options, i, r, f, o, t, e = this;
            if (this.handles = u.handles || (n(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this._handles = n(),
            this._addedHandles = n(),
            this.handles.constructor === String)
                for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                f = this.handles.split(","),
                this.handles = {},
                r = 0; r < f.length; r++)
                    i = String.prototype.trim.call(f[r]),
                    o = "ui-resizable-" + i,
                    t = n("<div>"),
                    this._addClass(t, "ui-resizable-handle " + o),
                    t.css({
                        zIndex: u.zIndex
                    }),
                    this.handles[i] = ".ui-resizable-" + i,
                    this.element.children(this.handles[i]).length || (this.element.append(t),
                    this._addedHandles = this._addedHandles.add(t));
            this._renderAxis = function(t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = n(this.handles[i]),
                    this._on(this.handles[i], {
                        mousedown: e._mouseDown
                    })),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (r = n(this.handles[i], this.element),
                    f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(),
                    u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    t.css(u, f),
                    this._proportionallyResize()),
                    this._handles = this._handles.add(this.handles[i])
            }
            ;
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.on("mouseover", function() {
                e.resizing || (this.className && (t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                e.axis = t && t[1] ? t[1] : "se")
            });
            u.autoHide && (this._handles.hide(),
            this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._addedHandles.remove()
        },
        _mouseCapture: function(t) {
            var r, i, u = !1;
            for (r in this.handles)
                i = n(this.handles[r])[0],
                (i === t.target || n.contains(i, t.target)) && (u = !0);
            return !this.options.disabled && u
        },
        _mouseStart: function(t) {
            var u, f, e, r = this.options, i = this.element;
            return this.resizing = !0,
            this._renderProxy(),
            u = this._num(this.helper.css("left")),
            f = this._num(this.helper.css("top")),
            r.containment && (u += n(r.containment).scrollLeft() || 0,
            f += n(r.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: u,
                top: f
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: i.width(),
                height: i.height()
            },
            this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            },
            this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            },
            this.originalPosition = {
                left: u,
                top: f
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            e = n(".ui-resizable-" + this.axis).css("cursor"),
            n("body").css("cursor", e === "auto" ? this.axis + "-resize" : e),
            this._addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var i, r, u = this.originalMousePosition, e = this.axis, o = t.pageX - u.left || 0, s = t.pageY - u.top || 0, f = this._change[e];
            return (this._updatePrevProperties(),
            !f) ? !1 : (i = f.apply(this, [t, o, s]),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)),
            i = this._respectSize(i, t),
            this._updateCache(i),
            this._propagate("resize", t),
            r = this._applyChanges(),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            n.isEmptyObject(r) || (this._updatePrevProperties(),
            this._trigger("resize", t, this.ui()),
            this._applyChanges()),
            !1)
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var r, u, f, e, o, s, h, c = this.options, i = this;
            return this._helper && (r = this._proportionallyResizeElements,
            u = r.length && /textarea/i.test(r[0].nodeName),
            f = u && this._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
            e = u ? 0 : i.sizeDiff.width,
            o = {
                width: i.helper.width() - e,
                height: i.helper.height() - f
            },
            s = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
            h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null,
            c.animate || this.element.css(n.extend(o, {
                top: h,
                left: s
            })),
            i.helper.height(i.size.height),
            i.helper.width(i.size.width),
            this._helper && !c.animate && this._proportionallyResize()),
            n("body").css("cursor", "auto"),
            this._removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var n = {};
            return this.position.top !== this.prevPosition.top && (n.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left && (n.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width && (n.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height && (n.height = this.size.height + "px"),
            this.helper.css(n),
            n
        },
        _updateVirtualBoundaries: function(n) {
            var r, u, f, e, t, i = this.options;
            t = {
                minWidth: this._isNumber(i.minWidth) ? i.minWidth : 0,
                maxWidth: this._isNumber(i.maxWidth) ? i.maxWidth : Infinity,
                minHeight: this._isNumber(i.minHeight) ? i.minHeight : 0,
                maxHeight: this._isNumber(i.maxHeight) ? i.maxHeight : Infinity
            };
            (this._aspectRatio || n) && (r = t.minHeight * this.aspectRatio,
            f = t.minWidth / this.aspectRatio,
            u = t.maxHeight * this.aspectRatio,
            e = t.maxWidth / this.aspectRatio,
            r > t.minWidth && (t.minWidth = r),
            f > t.minHeight && (t.minHeight = f),
            u < t.maxWidth && (t.maxWidth = u),
            e < t.maxHeight && (t.maxHeight = e));
            this._vBoundaries = t
        },
        _updateCache: function(n) {
            this.offset = this.helper.offset();
            this._isNumber(n.left) && (this.position.left = n.left);
            this._isNumber(n.top) && (this.position.top = n.top);
            this._isNumber(n.height) && (this.size.height = n.height);
            this._isNumber(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var t = this.position
              , i = this.size
              , r = this.axis;
            return this._isNumber(n.height) ? n.width = n.height * this.aspectRatio : this._isNumber(n.width) && (n.height = n.width / this.aspectRatio),
            r === "sw" && (n.left = t.left + (i.width - n.width),
            n.top = null),
            r === "nw" && (n.top = t.top + (i.height - n.height),
            n.left = t.left + (i.width - n.width)),
            n
        },
        _respectSize: function(n) {
            var t = this._vBoundaries
              , i = this.axis
              , r = this._isNumber(n.width) && t.maxWidth && t.maxWidth < n.width
              , u = this._isNumber(n.height) && t.maxHeight && t.maxHeight < n.height
              , f = this._isNumber(n.width) && t.minWidth && t.minWidth > n.width
              , e = this._isNumber(n.height) && t.minHeight && t.minHeight > n.height
              , o = this.originalPosition.left + this.originalSize.width
              , s = this.originalPosition.top + this.originalSize.height
              , h = /sw|nw|w/.test(i)
              , c = /nw|ne|n/.test(i);
            return f && (n.width = t.minWidth),
            e && (n.height = t.minHeight),
            r && (n.width = t.maxWidth),
            u && (n.height = t.maxHeight),
            f && h && (n.left = o - t.minWidth),
            r && h && (n.left = o - t.maxWidth),
            e && c && (n.top = s - t.minHeight),
            u && c && (n.top = s - t.maxHeight),
            n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null,
            n
        },
        _getPaddingPlusBorderDimensions: function(n) {
            for (var t = 0, i = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")]; t < 4; t++)
                i[t] = parseFloat(r[t]) || 0,
                i[t] += parseFloat(u[t]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var n, t = 0, i = this.helper || this.element; t < this._proportionallyResizeElements.length; t++)
                    n = this._proportionallyResizeElements[t],
                    this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(n)),
                    n.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
        },
        _renderProxy: function() {
            var t = this.element
              , i = this.options;
            this.elementOffset = t.offset();
            this._helper ? (this.helper = this.helper || n("<div><\/div>").css({
                overflow: "hidden"
            }),
            this._addClass(this.helper, this._helper),
            this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var i = this.originalSize
                  , r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: i.width - t
                }
            },
            n: function(n, t, i) {
                var r = this.originalSize
                  , u = this.originalPosition;
                return {
                    top: u.top + i,
                    height: r.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]);
            t !== "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = n(this).resizable("instance")
              , u = i.options
              , r = i._proportionallyResizeElements
              , f = r.length && /textarea/i.test(r[0].nodeName)
              , s = f && i._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height
              , h = f ? 0 : i.sizeDiff.width
              , c = {
                width: i.size.width - h,
                height: i.size.height - s
            }
              , e = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null
              , o = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, o && e ? {
                top: o,
                left: e
            } : {}), {
                duration: u.animateDuration,
                easing: u.animateEasing,
                step: function() {
                    var u = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    r && r.length && n(r[0]).css({
                        width: u.width,
                        height: u.height
                    });
                    i._updateCache(u);
                    i._propagate("resize", t)
                }
            })
        }
    });
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var r, f, e, o, s, h, c, t = n(this).resizable("instance"), l = t.options, a = t.element, u = l.containment, i = u instanceof n ? u.get(0) : /parent/.test(u) ? a.parent().get(0) : u;
            i && (t.containerElement = n(i),
            /document/.test(u) || u === document ? (t.containerOffset = {
                left: 0,
                top: 0
            },
            t.containerPosition = {
                left: 0,
                top: 0
            },
            t.parentData = {
                element: n(document),
                left: 0,
                top: 0,
                width: n(document).width(),
                height: n(document).height() || document.body.parentNode.scrollHeight
            }) : (r = n(i),
            f = [],
            n(["Top", "Right", "Left", "Bottom"]).each(function(n, i) {
                f[n] = t._num(r.css("padding" + i))
            }),
            t.containerOffset = r.offset(),
            t.containerPosition = r.position(),
            t.containerSize = {
                height: r.innerHeight() - f[3],
                width: r.innerWidth() - f[1]
            },
            e = t.containerOffset,
            o = t.containerSize.height,
            s = t.containerSize.width,
            h = t._hasScroll(i, "left") ? i.scrollWidth : s,
            c = t._hasScroll(i) ? i.scrollHeight : o,
            t.parentData = {
                element: i,
                left: e.left,
                top: e.top,
                width: h,
                height: c
            }))
        },
        resize: function(t) {
            var o, s, h, c, i = n(this).resizable("instance"), v = i.options, r = i.containerOffset, l = i.position, f = i._aspectRatio || t.shiftKey, e = {
                top: 0,
                left: 0
            }, a = i.containerElement, u = !0;
            a[0] !== document && /static/.test(a.css("position")) && (e = r);
            l.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - e.left),
            f && (i.size.height = i.size.width / i.aspectRatio,
            u = !1),
            i.position.left = v.helper ? r.left : 0);
            l.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top),
            f && (i.size.width = i.size.height * i.aspectRatio,
            u = !1),
            i.position.top = i._helper ? r.top : 0);
            h = i.containerElement.get(0) === i.element.parent().get(0);
            c = /relative|absolute/.test(i.containerElement.css("position"));
            h && c ? (i.offset.left = i.parentData.left + i.position.left,
            i.offset.top = i.parentData.top + i.position.top) : (i.offset.left = i.element.offset().left,
            i.offset.top = i.element.offset().top);
            o = Math.abs(i.sizeDiff.width + (i._helper ? i.offset.left - e.left : i.offset.left - r.left));
            s = Math.abs(i.sizeDiff.height + (i._helper ? i.offset.top - e.top : i.offset.top - r.top));
            o + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - o,
            f && (i.size.height = i.size.width / i.aspectRatio,
            u = !1));
            s + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - s,
            f && (i.size.width = i.size.height * i.aspectRatio,
            u = !1));
            u || (i.position.left = i.prevPosition.left,
            i.position.top = i.prevPosition.top,
            i.size.width = i.prevSize.width,
            i.size.height = i.prevSize.height)
        },
        stop: function() {
            var t = n(this).resizable("instance")
              , r = t.options
              , u = t.containerOffset
              , f = t.containerPosition
              , e = t.containerElement
              , i = n(t.helper)
              , o = i.offset()
              , s = i.outerWidth() - t.sizeDiff.width
              , h = i.outerHeight() - t.sizeDiff.height;
            t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            });
            t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            })
        }
    });
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = n(this).resizable("instance")
              , i = t.options;
            n(i.alsoResize).each(function() {
                var t = n(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseFloat(t.width()),
                    height: parseFloat(t.height()),
                    left: parseFloat(t.css("left")),
                    top: parseFloat(t.css("top"))
                })
            })
        },
        resize: function(t, i) {
            var r = n(this).resizable("instance")
              , e = r.options
              , u = r.originalSize
              , f = r.originalPosition
              , o = {
                height: r.size.height - u.height || 0,
                width: r.size.width - u.width || 0,
                top: r.position.top - f.top || 0,
                left: r.position.left - f.left || 0
            };
            n(e.alsoResize).each(function() {
                var t = n(this)
                  , u = n(this).data("ui-resizable-alsoresize")
                  , r = {}
                  , f = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                n.each(f, function(n, t) {
                    var i = (u[t] || 0) + (o[t] || 0);
                    i && i >= 0 && (r[t] = i || null)
                });
                t.css(r)
            })
        },
        stop: function() {
            n(this).removeData("ui-resizable-alsoresize")
        }
    });
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = n(this).resizable("instance")
              , i = t.size;
            t.ghost = t.originalElement.clone();
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            });
            t._addClass(t.ghost, "ui-resizable-ghost");
            n.uiBackCompat !== !1 && typeof t.options.ghost == "string" && t.ghost.addClass(this.options.ghost);
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = n(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = n(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    });
    n.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var h, t = n(this).resizable("instance"), i = t.options, y = t.size, o = t.originalSize, s = t.originalPosition, c = t.axis, l = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid, f = l[0] || 1, e = l[1] || 1, a = Math.round((y.width - o.width) / f) * f, v = Math.round((y.height - o.height) / e) * e, r = o.width + a, u = o.height + v, p = i.maxWidth && i.maxWidth < r, w = i.maxHeight && i.maxHeight < u, b = i.minWidth && i.minWidth > r, k = i.minHeight && i.minHeight > u;
            i.grid = l;
            b && (r += f);
            k && (u += e);
            p && (r -= f);
            w && (u -= e);
            /^(se|s|e)$/.test(c) ? (t.size.width = r,
            t.size.height = u) : /^(ne)$/.test(c) ? (t.size.width = r,
            t.size.height = u,
            t.position.top = s.top - v) : /^(sw)$/.test(c) ? (t.size.width = r,
            t.size.height = u,
            t.position.left = s.left - a) : ((u - e <= 0 || r - f <= 0) && (h = t._getPaddingPlusBorderDimensions(this)),
            u - e > 0 ? (t.size.height = u,
            t.position.top = s.top - v) : (u = e - h.height,
            t.size.height = u,
            t.position.top = s.top + o.height - u),
            r - f > 0 ? (t.size.width = r,
            t.position.left = s.left - a) : (r = f - h.width,
            t.size.width = r,
            t.position.left = s.left + o.width - r))
        }
    });
    gt = n.ui.resizable;
    n.widget("ui.dialog", {
        version: "1.13.2",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = n(this).css(t).offset().top;
                    i < 0 && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title == null && this.originalTitle != null && (this.options.title = this.originalTitle);
            this.options.disabled && (this.options.disabled = !1);
            this._createWrapper();
            this.element.show().removeAttr("title").appendTo(this.uiDialog);
            this._addClass("ui-dialog-content", "ui-widget-content");
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && n.fn.draggable && this._makeDraggable();
            this.options.resizable && n.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var n, t = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().css(this.originalCss).detach();
            this.uiDialog.remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            n = t.parent.children().eq(t.index);
            n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: n.noop,
        enable: n.noop,
        close: function(t) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1,
            this._focusedElement = null,
            this._destroyOverlay(),
            this._untrackInstance(),
            this.opener.filter(":focusable").trigger("focus").length || n.ui.safeBlur(n.ui.safeActiveElement(this.document[0])),
            this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", t)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, i) {
            var r = !1
              , f = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +n(this).css("z-index")
            }).get()
              , u = Math.max.apply(null, f);
            return u >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", u + 1),
            r = !0),
            r && !i && this._trigger("focus", t),
            r
        },
        open: function() {
            var t = this;
            if (this._isOpen) {
                this._moveToTop() && this._focusTabbable();
                return
            }
            this._isOpen = !0;
            this.opener = n(n.ui.safeActiveElement(this.document[0]));
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, !0);
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
            this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable();
                t._trigger("focus")
            });
            this._makeFocusTarget();
            this._trigger("open")
        },
        _focusTabbable: function() {
            var n = this._focusedElement;
            n || (n = this.element.find("[autofocus]"));
            n.length || (n = this.element.find(":tabbable"));
            n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
            n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
            n.length || (n = this.uiDialog);
            n.eq(0).trigger("focus")
        },
        _restoreTabbableFocus: function() {
            var t = n.ui.safeActiveElement(this.document[0])
              , i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
            i || this._focusTabbable()
        },
        _keepFocus: function(n) {
            n.preventDefault();
            this._restoreTabbableFocus();
            this._delay(this._restoreTabbableFocus)
        },
        _createWrapper: function() {
            this.uiDialog = n("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
            this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) {
                        t.preventDefault();
                        this.close(t);
                        return
                    }
                    if (t.keyCode === n.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable")
                          , r = i.first()
                          , u = i.last();
                        t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (this._delay(function() {
                            u.trigger("focus")
                        }),
                        t.preventDefault()) : (this._delay(function() {
                            r.trigger("focus")
                        }),
                        t.preventDefault())
                    }
                },
                mousedown: function(n) {
                    this._moveToTop(n) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = n("<div>");
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
            this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            });
            this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({
                label: n("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar);
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
            this._on(this.uiDialogTitlebarClose, {
                click: function(n) {
                    n.preventDefault();
                    this.close(n)
                }
            });
            t = n("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(t, "ui-dialog-title");
            this._title(t);
            this.uiDialogTitlebar.prependTo(this.uiDialog);
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(n) {
            this.options.title ? n.text(this.options.title) : n.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = n("<div>");
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = n("<div>").appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
            this._createButtons()
        },
        _createButtons: function() {
            var i = this
              , t = this.options.buttons;
            if (this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            n.isEmptyObject(t) || Array.isArray(t) && !t.length) {
                this._removeClass(this.uiDialog, "ui-dialog-buttons");
                return
            }
            n.each(t, function(t, r) {
                var u, f;
                r = typeof r == "function" ? {
                    click: r,
                    text: t
                } : r;
                r = n.extend({
                    type: "button"
                }, r);
                u = r.click;
                f = {
                    icon: r.icon,
                    iconPosition: r.iconPosition,
                    showLabel: r.showLabel,
                    icons: r.icons,
                    text: r.text
                };
                delete r.click;
                delete r.icon;
                delete r.iconPosition;
                delete r.showLabel;
                delete r.icons;
                typeof r.text == "boolean" && delete r.text;
                n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet).on("click", function() {
                    u.apply(i.element[0], arguments)
                })
            });
            this._addClass(this.uiDialog, "ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            function i(n) {
                return {
                    position: n.position,
                    offset: n.offset
                }
            }
            var t = this
              , r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(r, u) {
                    t._addClass(n(this), "ui-dialog-dragging");
                    t._blockFrames();
                    t._trigger("dragStart", r, i(u))
                },
                drag: function(n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function(u, f) {
                    var e = f.offset.left - t.document.scrollLeft()
                      , o = f.offset.top - t.document.scrollTop();
                    r.position = {
                        my: "left top",
                        at: "left" + (e >= 0 ? "+" : "") + e + " top" + (o >= 0 ? "+" : "") + o,
                        of: t.window
                    };
                    t._removeClass(n(this), "ui-dialog-dragging");
                    t._unblockFrames();
                    t._trigger("dragStop", u, i(f))
                }
            })
        },
        _makeResizable: function() {
            function r(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            var t = this
              , i = this.options
              , u = i.resizable
              , f = this.uiDialog.css("position")
              , e = typeof u == "string" ? u : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function(i, u) {
                    t._addClass(n(this), "ui-dialog-resizing");
                    t._blockFrames();
                    t._trigger("resizeStart", i, r(u))
                },
                resize: function(n, i) {
                    t._trigger("resize", n, r(i))
                },
                stop: function(u, f) {
                    var e = t.uiDialog.offset()
                      , o = e.left - t.document.scrollLeft()
                      , s = e.top - t.document.scrollTop();
                    i.height = t.uiDialog.height();
                    i.width = t.uiDialog.width();
                    i.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " top" + (s >= 0 ? "+" : "") + s,
                        of: t.window
                    };
                    t._removeClass(n(this), "ui-dialog-resizing");
                    t._unblockFrames();
                    t._trigger("resizeStop", u, r(f))
                }
            }).css("position", f)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget();
                    this._focusedElement = n(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances()
              , i = n.inArray(this, t);
            i !== -1 && t.splice(i, 1)
        },
        _trackingInstances: function() {
            var n = this.document.data("ui-dialog-instances");
            return n || (n = [],
            this.document.data("ui-dialog-instances", n)),
            n
        },
        _minHeight: function() {
            var n = this.options;
            return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
        },
        _position: function() {
            var n = this.uiDialog.is(":visible");
            n || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            n || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this
              , r = !1
              , u = {};
            n.each(t, function(n, t) {
                i._setOption(n, t);
                n in i.sizeRelatedOptions && (r = !0);
                n in i.resizableRelatedOptions && (u[n] = t)
            });
            r && (this._size(),
            this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", u)
        },
        _setOption: function(t, i) {
            var f, u, r = this.uiDialog;
            t !== "disabled" && (this._super(t, i),
            t === "appendTo" && this.uiDialog.appendTo(this._appendTo()),
            t === "buttons" && this._createButtons(),
            t === "closeText" && this.uiDialogTitlebarClose.button({
                label: n("<a>").text("" + this.options.closeText).html()
            }),
            t === "draggable" && (f = r.is(":data(ui-draggable)"),
            f && !i && r.draggable("destroy"),
            !f && i && this._makeDraggable()),
            t === "position" && this._position(),
            t === "resizable" && (u = r.is(":data(ui-resizable)"),
            u && !i && r.resizable("destroy"),
            u && typeof i == "string" && r.resizable("option", "handles", i),
            u || i === !1 || this._makeResizable()),
            t === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, i, r, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            n.minWidth > n.width && (n.width = n.minWidth);
            t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight();
            i = Math.max(0, n.minHeight - t);
            r = typeof n.maxHeight == "number" ? Math.max(0, n.maxHeight - t) : "none";
            n.height === "auto" ? this.element.css({
                minHeight: i,
                maxHeight: r,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = n(this);
                return n("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = n.fn.jquery.substring(0, 4)
                  , i = !0;
                if (this._delay(function() {
                    i = !1
                }),
                !this.document.data("ui-dialog-overlays"))
                    this.document.on("focusin.ui-dialog", function(n) {
                        if (!i) {
                            var r = this._trackingInstances()[0];
                            r._allowInteraction(n) || (n.preventDefault(),
                            r._focusTabbable(),
                            (t === "3.4." || t === "3.5.") && r._delay(r._restoreTabbableFocus))
                        }
                    }
                    .bind(this));
                this.overlay = n("<div>").appendTo(this._appendTo());
                this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var n = this.document.data("ui-dialog-overlays") - 1;
                n ? this.document.data("ui-dialog-overlays", n) : (this.document.off("focusin.ui-dialog"),
                this.document.removeData("ui-dialog-overlays"));
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.dialog", n.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super();
            this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(n, t) {
            n === "dialogClass" && this.uiDialog.removeClass(this.options.dialogClass).addClass(t);
            this._superApply(arguments)
        }
    });
    ni = n.ui.dialog;
    n.widget("ui.droppable", {
        version: "1.13.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var n, t = this.options, i = t.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = typeof i == "function" ? i : function(n) {
                return n.is(i)
            }
            ;
            this.proportions = function() {
                if (arguments.length)
                    n = arguments[0];
                else
                    return n ? n : n = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
            }
            ;
            this._addToManager(t.scope);
            t.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(t) {
            n.ui.ddmanager.droppables[t] = n.ui.ddmanager.droppables[t] || [];
            n.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function(n) {
            for (var t = 0; t < n.length; t++)
                n[t] === this && n.splice(t, 1)
        },
        _destroy: function() {
            var t = n.ui.ddmanager.droppables[this.options.scope];
            this._splice(t)
        },
        _setOption: function(t, i) {
            if (t === "accept")
                this.accept = typeof i == "function" ? i : function(n) {
                    return n.is(i)
                }
                ;
            else if (t === "scope") {
                var r = n.ui.ddmanager.droppables[this.options.scope];
                this._splice(r);
                this._addToManager(i)
            }
            this._super(t, i)
        },
        _activate: function(t) {
            var i = n.ui.ddmanager.current;
            this._addActiveClass();
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = n.ui.ddmanager.current;
            this._removeActiveClass();
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(),
            this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(),
            this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var r = i || n.ui.ddmanager.current
              , u = !1;
            return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = n(this).droppable("instance");
                if (i.options.greedy && !i.options.disabled && i.options.scope === r.options.scope && i.accept.call(i.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, t))
                    return u = !0,
                    !1
            }),
            u) ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this._removeActiveClass(),
            this._removeHoverClass(),
            this._trigger("drop", t, this.ui(r)),
            this.element) : !1
        },
        ui: function(n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    n.ui.intersect = function() {
        function n(n, t, i) {
            return n >= t && n < t + i
        }
        return function(t, i, r, u) {
            if (!i.offset)
                return !1;
            var o = (t.positionAbs || t.position.absolute).left + t.margins.left
              , s = (t.positionAbs || t.position.absolute).top + t.margins.top
              , h = o + t.helperProportions.width
              , c = s + t.helperProportions.height
              , f = i.offset.left
              , e = i.offset.top
              , l = f + i.proportions().width
              , a = e + i.proportions().height;
            switch (r) {
            case "fit":
                return f <= o && h <= l && e <= s && c <= a;
            case "intersect":
                return f < o + t.helperProportions.width / 2 && h - t.helperProportions.width / 2 < l && e < s + t.helperProportions.height / 2 && c - t.helperProportions.height / 2 < a;
            case "pointer":
                return n(u.pageY, e, i.proportions().height) && n(u.pageX, f, i.proportions().width);
            case "touch":
                return (s >= e && s <= a || c >= e && c <= a || s < e && c > a) && (o >= f && o <= l || h >= f && h <= l || o < f && h > l);
            default:
                return !1
            }
        }
    }();
    n.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null, e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            n: for (r = 0; r < u.length; r++)
                if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                    for (f = 0; f < e.length; f++)
                        if (e[f] === u[r].element[0]) {
                            u[r].proportions().height = 0;
                            continue n
                        }
                    (u[r].visible = u[r].element.css("display") !== "none",
                    u[r].visible) && (o === "mousedown" && u[r]._activate.call(u[r], i),
                    u[r].offset = u[r].element.offset(),
                    u[r].proportions({
                        width: u[r].element[0].offsetWidth,
                        height: u[r].element[0].offsetHeight
                    }))
                }
        },
        drop: function(t, i) {
            var r = !1;
            return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance, i) && (r = this._drop.call(this, i) || r),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, i)))
            }),
            r
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").on("scroll.droppable", function() {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance, i), u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    u && (this.options.greedy && (e = this.options.scope,
                    f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return n(this).droppable("instance").options.scope === e
                    }),
                    f.length && (r = n(f[0]).droppable("instance"),
                    r.greedyChild = u === "isover")),
                    r && u === "isover" && (r.isover = !1,
                    r.isout = !0,
                    r._out.call(r, i)),
                    this[u] = !0,
                    this[u === "isout" ? "isover" : "isout"] = !1,
                    this[u === "isover" ? "_over" : "_out"].call(this, i),
                    r && u === "isout" && (r.isout = !1,
                    r.isover = !0,
                    r._over.call(r, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").off("scroll.droppable");
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    };
    n.uiBackCompat !== !1 && n.widget("ui.droppable", n.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super();
            this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super();
            this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super();
            this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super();
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    });
    var dr = n.ui.droppable
      , gr = n.widget("ui.progressbar", {
        version: "1.13.2",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this._addClass("ui-progressbar", "ui-widget ui-widget-content");
            this.valueDiv = n("<div>").appendTo(this.element);
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(n) {
            if (n === undefined)
                return this.options.value;
            this.options.value = this._constrainedValue(n);
            this._refreshValue()
        },
        _constrainedValue: function(n) {
            return n === undefined && (n = this.options.value),
            this.indeterminate = n === !1,
            typeof n != "number" && (n = 0),
            this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
        },
        _setOptions: function(n) {
            var t = n.value;
            delete n.value;
            this._super(n);
            this.options.value = this._constrainedValue(t);
            this._refreshValue()
        },
        _setOption: function(n, t) {
            n === "max" && (t = Math.max(this.min, t));
            this._super(n, t)
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this.element.attr("aria-disabled", n);
            this._toggleClass(null, "ui-state-disabled", !!n)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value
              , i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(i.toFixed(0) + "%");
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = n("<div>").appendTo(this.valueDiv),
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null));
            this.oldValue !== t && (this.oldValue = t,
            this._trigger("change"));
            t === this.options.max && this._trigger("complete")
        }
    })
      , nu = n.widget("ui.selectable", n.ui.mouse, {
        version: "1.13.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t = this;
            this._addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() {
                t.elementPos = n(t.element[0]).offset();
                t.selectees = n(t.options.filter, t.element[0]);
                t._addClass(t.selectees, "ui-selectee");
                t.selectees.each(function() {
                    var i = n(this)
                      , u = i.offset()
                      , r = {
                        left: u.left - t.elementPos.left,
                        top: u.top - t.elementPos.top
                    };
                    n.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: r.left,
                        top: r.top,
                        right: r.left + i.outerWidth(),
                        bottom: r.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                })
            }
            ;
            this.refresh();
            this._mouseInit();
            this.helper = n("<div>");
            this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item");
            this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var i = this
              , r = this.options;
            (this.opos = [t.pageX, t.pageY],
            this.elementPos = n(this.element[0]).offset(),
            this.options.disabled) || (this.selectees = n(r.filter, this.element[0]),
            this._trigger("start", t),
            n(r.appendTo).append(this.helper),
            this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }),
            r.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var r = n.data(this, "selectable-item");
                r.startselected = !0;
                t.metaKey || t.ctrlKey || (i._removeClass(r.$element, "ui-selected"),
                r.selected = !1,
                i._addClass(r.$element, "ui-unselecting"),
                r.unselecting = !0,
                i._trigger("unselecting", t, {
                    unselecting: r.element
                }))
            }),
            n(t.target).parents().addBack().each(function() {
                var u, r = n.data(this, "selectable-item");
                if (r)
                    return u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"),
                    i._removeClass(r.$element, u ? "ui-unselecting" : "ui-selected")._addClass(r.$element, u ? "ui-selecting" : "ui-unselecting"),
                    r.unselecting = !u,
                    r.selecting = u,
                    r.selected = u,
                    u ? i._trigger("selecting", t, {
                        selecting: r.element
                    }) : i._trigger("unselecting", t, {
                        unselecting: r.element
                    }),
                    !1
            }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0,
            !this.options.disabled) {
                var o, i = this, s = this.options, r = this.opos[0], u = this.opos[1], f = t.pageX, e = t.pageY;
                return r > f && (o = f,
                f = r,
                r = o),
                u > e && (o = e,
                e = u,
                u = o),
                this.helper.css({
                    left: r,
                    top: u,
                    width: f - r,
                    height: e - u
                }),
                this.selectees.each(function() {
                    var o = n.data(this, "selectable-item")
                      , c = !1
                      , h = {};
                    o && o.element !== i.element[0] && (h.left = o.left + i.elementPos.left,
                    h.right = o.right + i.elementPos.left,
                    h.top = o.top + i.elementPos.top,
                    h.bottom = o.bottom + i.elementPos.top,
                    s.tolerance === "touch" ? c = !(h.left > f || h.right < r || h.top > e || h.bottom < u) : s.tolerance === "fit" && (c = h.left > r && h.right < f && h.top > u && h.bottom < e),
                    c ? (o.selected && (i._removeClass(o.$element, "ui-selected"),
                    o.selected = !1),
                    o.unselecting && (i._removeClass(o.$element, "ui-unselecting"),
                    o.unselecting = !1),
                    o.selecting || (i._addClass(o.$element, "ui-selecting"),
                    o.selecting = !0,
                    i._trigger("selecting", t, {
                        selecting: o.element
                    }))) : (o.selecting && ((t.metaKey || t.ctrlKey) && o.startselected ? (i._removeClass(o.$element, "ui-selecting"),
                    o.selecting = !1,
                    i._addClass(o.$element, "ui-selected"),
                    o.selected = !0) : (i._removeClass(o.$element, "ui-selecting"),
                    o.selecting = !1,
                    o.startselected && (i._addClass(o.$element, "ui-unselecting"),
                    o.unselecting = !0),
                    i._trigger("unselecting", t, {
                        unselecting: o.element
                    }))),
                    o.selected && (t.metaKey || t.ctrlKey || o.startselected || (i._removeClass(o.$element, "ui-selected"),
                    o.selected = !1,
                    i._addClass(o.$element, "ui-unselecting"),
                    o.unselecting = !0,
                    i._trigger("unselecting", t, {
                        unselecting: o.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1,
            n(".ui-unselecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                i._removeClass(r.$element, "ui-unselecting");
                r.unselecting = !1;
                r.startselected = !1;
                i._trigger("unselected", t, {
                    unselected: r.element
                })
            }),
            n(".ui-selecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                i._removeClass(r.$element, "ui-selecting")._addClass(r.$element, "ui-selected");
                r.selecting = !1;
                r.selected = !0;
                r.startselected = !0;
                i._trigger("selected", t, {
                    selected: r.element
                })
            }),
            this._trigger("stop", t),
            this.helper.remove(),
            !1
        }
    })
      , tu = n.widget("ui.selectmenu", [n.ui.formResetMixin, {
        version: "1.13.2",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var t = this.element.uniqueId().attr("id");
            this.ids = {
                element: t,
                button: t + "-button",
                menu: t + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();
            this._rendered = !1;
            this.menuItems = n()
        },
        _drawButton: function() {
            var t, i = this, r = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button);
            this._on(this.labels, {
                click: function(n) {
                    this.button.trigger("focus");
                    n.preventDefault()
                }
            });
            this.element.hide();
            this.button = n("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element);
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
            t = n("<span>").appendTo(this.button);
            this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(r).appendTo(this.button);
            this.options.width !== !1 && this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() {
                i._rendered || i._refreshMenu()
            })
        },
        _drawMenu: function() {
            var t = this;
            this.menu = n("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = n("<div>").append(this.menu);
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
            this.menuWrap.appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(n, i) {
                    n.preventDefault();
                    t._setSelection();
                    t._select(i.item.data("ui-selectmenu-item"), n)
                },
                focus: function(n, i) {
                    var r = i.item.data("ui-selectmenu-item");
                    t.focusIndex != null && r.index !== t.focusIndex && (t._trigger("focus", n, {
                        item: r
                    }),
                    t.isOpen || t._select(r, n));
                    t.focusIndex = r.index;
                    t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id"))
                }
            }).menu("instance");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }
            ;
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu();
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}));
            this.options.width === null && this._resizeButton()
        },
        _refreshMenu: function() {
            var n, t = this.element.find("option");
            (this.menu.empty(),
            this._parseOptions(t),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),
            this._rendered = !0,
            t.length) && (n = this._getSelectedItem(),
            this.menuInstance.focus(null, n),
            this._setAria(n.data("ui-selectmenu-item")),
            this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(n) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
            this.menuItems.length) && (this.isOpen = !0,
            this._toggleAttr(),
            this._resizeMenu(),
            this._position(),
            this._on(this.document, this._documentClick),
            this._trigger("open", n))
        },
        _position: function() {
            this.menuWrap.position(n.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(n) {
            this.isOpen && (this.isOpen = !1,
            this._toggleAttr(),
            this.range = null,
            this._off(this.document),
            this._trigger("close", n))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(t) {
            var i = n("<span>");
            return this._setText(i, t.label),
            this._addClass(i, "ui-selectmenu-text"),
            i
        },
        _renderMenu: function(t, i) {
            var r = this
              , u = "";
            n.each(i, function(i, f) {
                var e;
                f.optgroup !== u && (e = n("<li>", {
                    text: f.optgroup
                }),
                r._addClass(e, "ui-selectmenu-optgroup", "ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                e.appendTo(t),
                u = f.optgroup);
                r._renderItemData(t, f)
            })
        },
        _renderItemData: function(n, t) {
            return this._renderItem(n, t).data("ui-selectmenu-item", t)
        },
        _renderItem: function(t, i) {
            var r = n("<li>")
              , u = n("<div>", {
                title: i.element.attr("title")
            });
            return i.disabled && this._addClass(r, null, "ui-state-disabled"),
            this._setText(u, i.label),
            r.append(u).appendTo(t)
        },
        _setText: function(n, t) {
            t ? n.text(t) : n.html("&#160;")
        },
        _move: function(n, t) {
            var i, r, u = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"),
            u += ":not(.ui-state-disabled)");
            r = n === "first" || n === "last" ? i[n === "first" ? "prevAll" : "nextAll"](u).eq(-1) : i[n + "All"](u).eq(0);
            r.length && this.menuInstance.focus(t, r)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(n) {
            this[this.isOpen ? "close" : "open"](n)
        },
        _setSelection: function() {
            var n;
            this.range && (window.getSelection ? (n = window.getSelection(),
            n.removeAllRanges(),
            n.addRange(this.range)) : this.range.select(),
            this.button.trigger("focus"))
        },
        _documentClick: {
            mousedown: function(t) {
                this.isOpen && (n(t.target).closest(".ui-selectmenu-menu, #" + n.escapeSelector(this.ids.button)).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var n;
                window.getSelection ? (n = window.getSelection(),
                n.rangeCount && (this.range = n.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(n) {
                this._setSelection();
                this._toggle(n)
            },
            keydown: function(t) {
                var i = !0;
                switch (t.keyCode) {
                case n.ui.keyCode.TAB:
                case n.ui.keyCode.ESCAPE:
                    this.close(t);
                    i = !1;
                    break;
                case n.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(t);
                    break;
                case n.ui.keyCode.UP:
                    t.altKey ? this._toggle(t) : this._move("prev", t);
                    break;
                case n.ui.keyCode.DOWN:
                    t.altKey ? this._toggle(t) : this._move("next", t);
                    break;
                case n.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                    break;
                case n.ui.keyCode.LEFT:
                    this._move("prev", t);
                    break;
                case n.ui.keyCode.RIGHT:
                    this._move("next", t);
                    break;
                case n.ui.keyCode.HOME:
                case n.ui.keyCode.PAGE_UP:
                    this._move("first", t);
                    break;
                case n.ui.keyCode.END:
                case n.ui.keyCode.PAGE_DOWN:
                    this._move("last", t);
                    break;
                default:
                    this.menu.trigger(t);
                    i = !1
                }
                i && t.preventDefault()
            }
        },
        _selectFocusedItem: function(n) {
            var t = this.menuItems.eq(this.focusIndex).parent("li");
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), n)
        },
        _select: function(n, t) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = n.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(n));
            this._setAria(n);
            this._trigger("select", t, {
                item: n
            });
            n.index !== i && this._trigger("change", t, {
                item: n
            });
            this.close(t)
        },
        _setAria: function(n) {
            var t = this.menuItems.eq(n.index).attr("id");
            this.button.attr({
                "aria-labelledby": t,
                "aria-activedescendant": t
            });
            this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function(n, t) {
            if (n === "icons") {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, t.button)
            }
            this._super(n, t);
            n === "appendTo" && this.menuWrap.appendTo(this._appendTo());
            n === "width" && this._resizeButton()
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this.menuInstance.option("disabled", n);
            this.button.attr("aria-disabled", n);
            this._toggleClass(this.button, null, "ui-state-disabled", n);
            this.element.prop("disabled", n);
            n ? (this.button.attr("tabindex", -1),
            this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)),
            t && t[0] || (t = this.element.closest(".ui-front, dialog")),
            t.length || (t = this.document[0].body),
            t
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen);
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var n = this.options.width;
            if (n === !1) {
                this.button.css("width", "");
                return
            }
            n === null && (n = this.element.show().outerWidth(),
            this.element.hide());
            this.button.outerWidth(n)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var n = this._super();
            return n.disabled = this.element.prop("disabled"),
            n
        },
        _parseOptions: function(t) {
            var r = this
              , i = [];
            t.each(function(t, u) {
                u.hidden || i.push(r._parseOption(n(u), t))
            });
            this.items = i
        },
        _parseOption: function(n, t) {
            var i = n.parent("optgroup");
            return {
                element: n,
                index: t,
                value: n.val(),
                label: n.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || n.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr("for", this.ids.element)
        }
    }])
      , iu = n.widget("ui.slider", n.ui.mouse, {
        version: "1.13.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1;
            this._mouseSliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
            this._refresh();
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var r, i, u = this.options, t = this.element.find(".ui-slider-handle"), f = [];
            for (i = u.values && u.values.length || 1,
            t.length > i && (t.slice(i).remove(),
            t = t.slice(0, i)),
            r = t.length; r < i; r++)
                f.push("<span tabindex='0'><\/span>");
            this.handles = t.add(n(f.join("")).appendTo(this.element));
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
            this.handle = this.handles.eq(0);
            this.handles.each(function(t) {
                n(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var t = this.options;
            t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : Array.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = n("<div>").appendTo(this.element),
            this._addClass(this.range, "ui-slider-range")),
            (t.range === "min" || t.range === "max") && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var s, f, r, i, u, h, e, c, o = this, l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            s = {
                x: t.pageX,
                y: t.pageY
            },
            f = this._normValueFromMouse(s),
            r = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(t) {
                var e = Math.abs(f - o.values(t));
                (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e,
                i = n(this),
                u = t)
            }),
            h = this._start(t, u),
            h === !1) ? !1 : (this._mouseSliding = !0,
            this._handleIndex = u,
            this._addClass(i, null, "ui-state-active"),
            i.trigger("focus"),
            e = i.offset(),
            c = !n(t.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = c ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - e.left - i.width() / 2,
                top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(t, u, f),
            this._animateOff = !0,
            !0)
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(n) {
            var t = {
                x: n.pageX,
                y: n.pageY
            }
              , i = this._normValueFromMouse(t);
            return this._slide(n, this._handleIndex, i),
            !1
        },
        _mouseStop: function(n) {
            return this._removeClass(this.handles, null, "ui-state-active"),
            this._mouseSliding = !1,
            this._stop(n, this._handleIndex),
            this._change(n, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(n) {
            var i, r, t, u, f;
            return this.orientation === "horizontal" ? (i = this.elementSize.width,
            r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height,
            r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            t = r / i,
            t > 1 && (t = 1),
            t < 0 && (t = 0),
            this.orientation === "vertical" && (t = 1 - t),
            u = this._valueMax() - this._valueMin(),
            f = this._valueMin() + t * u,
            this._trimAlignValue(f)
        },
        _uiHash: function(n, t, i) {
            var r = {
                handle: this.handles[n],
                handleIndex: n,
                value: t !== undefined ? t : this.value()
            };
            return this._hasMultipleValues() && (r.value = t !== undefined ? t : this.values(n),
            r.values = i || this.values()),
            r
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(n, t) {
            return this._trigger("start", n, this._uiHash(t))
        },
        _slide: function(n, t, i) {
            var u, r, f = this.value(), e = this.values();
            (this._hasMultipleValues() && (r = this.values(t ? 0 : 1),
            f = this.values(t),
            this.options.values.length === 2 && this.options.range === !0 && (i = t === 0 ? Math.min(r, i) : Math.max(r, i)),
            e[t] = i),
            i !== f) && (u = this._trigger("slide", n, this._uiHash(t, i, e)),
            u !== !1) && (this._hasMultipleValues() ? this.values(t, i) : this.value(i))
        },
        _stop: function(n, t) {
            this._trigger("stop", n, this._uiHash(t))
        },
        _change: function(n, t) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = t,
            this._trigger("change", n, this._uiHash(t)))
        },
        value: function(n) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(n);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(n, t) {
            var r, u, i;
            if (arguments.length > 1) {
                this.options.values[n] = this._trimAlignValue(t);
                this._refreshValue();
                this._change(null, n);
                return
            }
            if (arguments.length)
                if (Array.isArray(arguments[0])) {
                    for (r = this.options.values,
                    u = arguments[0],
                    i = 0; i < r.length; i += 1)
                        r[i] = this._trimAlignValue(u[i]),
                        this._change(null, i);
                    this._refreshValue()
                } else
                    return this._hasMultipleValues() ? this._values(n) : this.value();
            else
                return this._values()
        },
        _setOption: function(n, t) {
            var i, r = 0;
            n === "range" && this.options.range === !0 && (t === "min" ? (this.options.value = this._values(0),
            this.options.values = null) : t === "max" && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null));
            Array.isArray(this.options.values) && (r = this.options.values.length);
            this._super(n, t);
            switch (n) {
            case "orientation":
                this._detectOrientation();
                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                this.options.range && this._refreshRange(t);
                this.handles.css(t === "horizontal" ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                i = r - 1; i >= 0; i--)
                    this._change(null, i);
                this._animateOff = !1;
                break;
            case "step":
            case "min":
            case "max":
                this._animateOff = !0;
                this._calculateNewMax();
                this._refreshValue();
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0;
                this._refresh();
                this._animateOff = !1
            }
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this._toggleClass(null, "ui-state-disabled", !!n)
        },
        _value: function() {
            var n = this.options.value;
            return this._trimAlignValue(n)
        },
        _values: function(n) {
            var r, t, i;
            if (arguments.length)
                return r = this.options.values[n],
                this._trimAlignValue(r);
            if (this._hasMultipleValues()) {
                for (t = this.options.values.slice(),
                i = 0; i < t.length; i += 1)
                    t[i] = this._trimAlignValue(t[i]);
                return t
            }
            return []
        },
        _trimAlignValue: function(n) {
            if (n <= this._valueMin())
                return this._valueMin();
            if (n >= this._valueMax())
                return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1
              , i = (n - this._valueMin()) % t
              , r = n - i;
            return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t),
            parseFloat(r.toFixed(5))
        },
        _calculateNewMax: function() {
            var n = this.options.max
              , i = this._valueMin()
              , t = this.options.step
              , r = Math.round((n - i) / t) * t;
            n = r + i;
            n > this.options.max && (n -= t);
            this.max = parseFloat(n.toFixed(this._precision()))
        },
        _precision: function() {
            var n = this._precisionOf(this.options.step);
            return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))),
            n
        },
        _precisionOf: function(n) {
            var t = n.toString()
              , i = t.indexOf(".");
            return i === -1 ? 0 : t.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(n) {
            n === "vertical" && this.range.css({
                width: "",
                left: ""
            });
            n === "horizontal" && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var s, t, c, f, h, e = this.options.range, i = this.options, r = this, u = this._animateOff ? !1 : i.animate, o = {};
            this._hasMultipleValues() ? this.handles.each(function(f) {
                t = (r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100;
                o[r.orientation === "horizontal" ? "left" : "bottom"] = t + "%";
                n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                r.options.range === !0 && (r.orientation === "horizontal" ? (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: t + "%"
                }, i.animate),
                f === 1 && r.range[u ? "animate" : "css"]({
                    width: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })) : (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: t + "%"
                }, i.animate),
                f === 1 && r.range[u ? "animate" : "css"]({
                    height: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })));
                s = t
            }) : (c = this.value(),
            f = this._valueMin(),
            h = this._valueMax(),
            t = h !== f ? (c - f) / (h - f) * 100 : 0,
            o[this.orientation === "horizontal" ? "left" : "bottom"] = t + "%",
            this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate),
            e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: t + "%"
            }, i.animate),
            e === "max" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: 100 - t + "%"
            }, i.animate),
            e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: t + "%"
            }, i.animate),
            e === "max" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: 100 - t + "%"
            }, i.animate))
        },
        _handleEvents: {
            keydown: function(t) {
                var e, r, i, u, f = n(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                case n.ui.keyCode.HOME:
                case n.ui.keyCode.END:
                case n.ui.keyCode.PAGE_UP:
                case n.ui.keyCode.PAGE_DOWN:
                case n.ui.keyCode.UP:
                case n.ui.keyCode.RIGHT:
                case n.ui.keyCode.DOWN:
                case n.ui.keyCode.LEFT:
                    if (t.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    this._addClass(n(t.target), null, "ui-state-active"),
                    e = this._start(t, f),
                    e === !1))
                        return
                }
                u = this.options.step;
                r = this._hasMultipleValues() ? i = this.values(f) : i = this.value();
                switch (t.keyCode) {
                case n.ui.keyCode.HOME:
                    i = this._valueMin();
                    break;
                case n.ui.keyCode.END:
                    i = this._valueMax();
                    break;
                case n.ui.keyCode.PAGE_UP:
                    i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case n.ui.keyCode.PAGE_DOWN:
                    i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case n.ui.keyCode.UP:
                case n.ui.keyCode.RIGHT:
                    if (r === this._valueMax())
                        return;
                    i = this._trimAlignValue(r + u);
                    break;
                case n.ui.keyCode.DOWN:
                case n.ui.keyCode.LEFT:
                    if (r === this._valueMin())
                        return;
                    i = this._trimAlignValue(r - u)
                }
                this._slide(t, f, i)
            },
            keyup: function(t) {
                var i = n(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(t, i),
                this._change(t, i),
                this._removeClass(n(t.target), null, "ui-state-active"))
            }
        }
    })
      , ru = n.widget("ui.sortable", n.ui.mouse, {
        version: "1.13.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(n, t, i) {
            return n >= t && n < t + i
        },
        _isFloating: function(n) {
            return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
        },
        _create: function() {
            this.containerCache = {};
            this._addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0
        },
        _setOption: function(n, t) {
            this._super(n, t);
            n === "handle" && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
            n.each(this.items, function() {
                t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var n = this.items.length - 1; n >= 0; n--)
                this.items[n].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(t, i) {
            var r = null
              , f = !1
              , u = this;
            return this.reverting ? !1 : this.options.disabled || this.options.type === "static" ? !1 : (this._refreshItems(t),
            n(t.target).parents().each(function() {
                if (n.data(this, u.widgetName + "-item") === u)
                    return r = n(this),
                    !1
            }),
            n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)),
            !r) ? !1 : this.options.handle && !i && (n(this.options.handle, r).find("*").addBack().each(function() {
                this === t.target && (f = !0)
            }),
            !f) ? !1 : (this.currentItem = r,
            this._removeCurrentsFromItems(),
            !0)
        },
        _mouseStart: function(t, i, r) {
            var f, e, u = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.appendTo = n(u.appendTo !== "parent" ? u.appendTo : this.currentItem.parent()),
            this.helper = this._createHelper(t),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            this.scrollParent = this.placeholder.scrollParent(),
            n.extend(this.offset, {
                parent: this._getParentOffset()
            }),
            u.containment && this._setContainment(),
            u.cursor && u.cursor !== "auto" && (e = this.document.find("body"),
            this.storedCursor = e.css("cursor"),
            e.css("cursor", u.cursor),
            this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)),
            u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", u.zIndex)),
            u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", u.opacity)),
            this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", t, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !r)
                for (f = this.containers.length - 1; f >= 0; f--)
                    this.containers[f]._trigger("activate", t, this._uiHash(this));
            return n.ui.ddmanager && (n.ui.ddmanager.current = this),
            n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this._addClass(this.helper, "ui-sortable-helper"),
            this.helper.parent().is(this.appendTo) || (this.helper.detach().appendTo(this.appendTo),
            this.offset.parent = this._getParentOffset()),
            this.position = this.originalPosition = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            this.lastPositionAbs = this.positionAbs = this._convertPositionTo("absolute"),
            this._mouseDrag(t),
            !0
        },
        _scroll: function(n) {
            var t = this.options
              , i = !1;
            return this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - n.pageY < t.scrollSensitivity ? this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop + t.scrollSpeed : n.pageY - this.overflowOffset.top < t.scrollSensitivity && (this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop - t.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - n.pageX < t.scrollSensitivity ? this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft + t.scrollSpeed : n.pageX - this.overflowOffset.left < t.scrollSensitivity && (this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft - t.scrollSpeed)) : (n.pageY - this.document.scrollTop() < t.scrollSensitivity ? i = this.document.scrollTop(this.document.scrollTop() - t.scrollSpeed) : this.window.height() - (n.pageY - this.document.scrollTop()) < t.scrollSensitivity && (i = this.document.scrollTop(this.document.scrollTop() + t.scrollSpeed)),
            n.pageX - this.document.scrollLeft() < t.scrollSensitivity ? i = this.document.scrollLeft(this.document.scrollLeft() - t.scrollSpeed) : this.window.width() - (n.pageX - this.document.scrollLeft()) < t.scrollSensitivity && (i = this.document.scrollLeft(this.document.scrollLeft() + t.scrollSpeed))),
            i
        },
        _mouseDrag: function(t) {
            var u, i, r, f, e = this.options;
            for (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"),
            e.scroll && this._scroll(t) !== !1 && (this._refreshItemPositions(!0),
            n.ui.ddmanager && !e.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)),
            this.dragDirection = {
                vertical: this._getDragVerticalDirection(),
                horizontal: this._getDragHorizontalDirection()
            },
            u = this.items.length - 1; u >= 0; u--)
                if ((i = this.items[u],
                r = i.item[0],
                f = this._intersectsWithPointer(i),
                f) && i.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[f === 1 ? "next" : "prev"]()[0] !== r && !n.contains(this.placeholder[0], r) && (this.options.type === "semi-dynamic" ? !n.contains(this.element[0], r) : !0)) {
                    if (this.direction = f === 1 ? "down" : "up",
                    this.options.tolerance === "pointer" || this._intersectsWithSides(i))
                        this._rearrange(t, i);
                    else
                        break;
                    this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t),
                this.options.revert) {
                    var e = this
                      , f = this.placeholder.offset()
                      , r = this.options.axis
                      , u = {};
                    r && r !== "x" || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
                    r && r !== "y" || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() {
                        e._clear(t)
                    })
                } else
                    this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new n.Event("mouseup",{
                    target: null
                }));
                this.options.helper === "original" ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--)
                    this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)),
                    this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(),
            n.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            n(r).each(function() {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
            }),
            !i.length && t.key && i.push(t.key + "="),
            i.join("&")
        },
        toArray: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            r.each(function() {
                i.push(n(t.item || this).attr(t.attribute || "id") || "")
            }),
            i
        },
        _intersectsWith: function(n) {
            var t = this.positionAbs.left
              , h = t + this.helperProportions.width
              , i = this.positionAbs.top
              , c = i + this.helperProportions.height
              , r = n.left
              , f = r + n.width
              , u = n.top
              , e = u + n.height
              , o = this.offset.click.top
              , s = this.offset.click.left
              , l = this.options.axis === "x" || i + o > u && i + o < e
              , a = this.options.axis === "y" || t + s > r && t + s < f
              , v = l && a;
            return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
        },
        _intersectsWithPointer: function(n) {
            var t, i, r = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top, n.height), u = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left, n.width), f = r && u;
            return f ? (t = this.dragDirection.vertical,
            i = this.dragDirection.horizontal,
            this.floating ? i === "right" || t === "down" ? 2 : 1 : t && (t === "down" ? 2 : 1)) : !1
        },
        _intersectsWithSides: function(n) {
            var r = this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height)
              , u = this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width)
              , t = this.dragDirection.vertical
              , i = this.dragDirection.horizontal;
            return this.floating && i ? i === "right" && u || i === "left" && !u : t && (t === "down" && r || t === "up" && !r)
        },
        _getDragVerticalDirection: function() {
            var n = this.positionAbs.top - this.lastPositionAbs.top;
            return n !== 0 && (n > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var n = this.positionAbs.left - this.lastPositionAbs.left;
            return n !== 0 && (n > 0 ? "right" : "left")
        },
        refresh: function(n) {
            return this._refreshItems(n),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var n = this.options;
            return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function h() {
                s.push(this)
            }
            var r, u, e, i, s = [], f = [], o = this._connectWith();
            if (o && t)
                for (r = o.length - 1; r >= 0; r--)
                    for (e = n(o[r], this.document[0]),
                    u = e.length - 1; u >= 0; u--)
                        i = n.data(e[u], this.widgetFullName),
                        i && i !== this && !i.options.disabled && f.push([typeof i.options.items == "function" ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
            for (f.push([typeof this.options.items == "function" ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            r = f.length - 1; r >= 0; r--)
                f[r][0].each(h);
            return n(s)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = n.grep(this.items, function(n) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] === n.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [];
            this.containers = [this];
            var r, u, e, i, o, s, h, l, a = this.items, f = [[typeof this.options.items == "function" ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : n(this.options.items, this.element), this]], c = this._connectWith();
            if (c && this.ready)
                for (r = c.length - 1; r >= 0; r--)
                    for (e = n(c[r], this.document[0]),
                    u = e.length - 1; u >= 0; u--)
                        i = n.data(e[u], this.widgetFullName),
                        i && i !== this && !i.options.disabled && (f.push([typeof i.options.items == "function" ? i.options.items.call(i.element[0], t, {
                            item: this.currentItem
                        }) : n(i.options.items, i.element), i]),
                        this.containers.push(i));
            for (r = f.length - 1; r >= 0; r--)
                for (o = f[r][1],
                s = f[r][0],
                u = 0,
                l = s.length; u < l; u++)
                    h = n(s[u]),
                    h.data(this.widgetName + "-item", o),
                    a.push({
                        item: h,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        _refreshItemPositions: function(t) {
            for (var i, u, f, r = this.items.length - 1; r >= 0; r--)
                (i = this.items[r],
                this.currentContainer && i.instance !== this.currentContainer && i.item[0] !== this.currentItem[0]) || (u = this.options.toleranceElement ? n(this.options.toleranceElement, i.item) : i.item,
                t || (i.width = u.outerWidth(),
                i.height = u.outerHeight()),
                f = u.offset(),
                i.left = f.left,
                i.top = f.top)
        },
        refreshPositions: function(n) {
            this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : !1;
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            this._refreshItemPositions(n);
            var t, i;
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (t = this.containers.length - 1; t >= 0; t--)
                    i = this.containers[t].element.offset(),
                    this.containers[t].containerCache.left = i.left,
                    this.containers[t].containerCache.top = i.top,
                    this.containers[t].containerCache.width = this.containers[t].element.outerWidth(),
                    this.containers[t].containerCache.height = this.containers[t].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var u, r, i = t.options;
            i.placeholder && i.placeholder.constructor !== String || (u = i.placeholder,
            r = t.currentItem[0].nodeName.toLowerCase(),
            i.placeholder = {
                element: function() {
                    var i = n("<" + r + ">", t.document[0]);
                    return t._addClass(i, "ui-sortable-placeholder", u || t.currentItem[0].className)._removeClass(i, "ui-sortable-helper"),
                    r === "tbody" ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), n("<tr>", t.document[0]).appendTo(i)) : r === "tr" ? t._createTrPlaceholder(t.currentItem, i) : r === "img" && i.attr("src", t.currentItem.attr("src")),
                    u || i.css("visibility", "hidden"),
                    i
                },
                update: function(n, f) {
                    (!u || i.forcePlaceholderSize) && ((!f.height() || i.forcePlaceholderSize && (r === "tbody" || r === "tr")) && f.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)),
                    f.width() || f.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            });
            t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
            t.currentItem.after(t.placeholder);
            i.placeholder.update(t, t.placeholder)
        },
        _createTrPlaceholder: function(t, i) {
            var r = this;
            t.children().each(function() {
                n("<td>&#160;<\/td>", r.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function(t) {
            for (var u, c, f, a, v, o, l, s, h, e = null, i = null, r = this.containers.length - 1; r >= 0; r--)
                if (!n.contains(this.currentItem[0], this.containers[r].element[0]))
                    if (this._intersectsWith(this.containers[r].containerCache)) {
                        if (e && n.contains(this.containers[r].element[0], e.element[0]))
                            continue;
                        e = this.containers[r];
                        i = r
                    } else
                        this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)),
                        this.containers[r].containerCache.over = 0);
            if (e)
                if (this.containers.length === 1)
                    this.containers[i].containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash(this)),
                    this.containers[i].containerCache.over = 1);
                else {
                    for (c = 1e4,
                    f = null,
                    s = e.floating || this._isFloating(this.currentItem),
                    a = s ? "left" : "top",
                    v = s ? "width" : "height",
                    h = s ? "pageX" : "pageY",
                    u = this.items.length - 1; u >= 0; u--)
                        n.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (o = this.items[u].item.offset()[a],
                        l = !1,
                        t[h] - o > this.items[u][v] / 2 && (l = !0),
                        Math.abs(t[h] - o) < c && (c = Math.abs(t[h] - o),
                        f = this.items[u],
                        this.direction = l ? "up" : "down"));
                    if (!f && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[i]) {
                        this.currentContainer.containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash()),
                        this.currentContainer.containerCache.over = 1);
                        return
                    }
                    f ? this._rearrange(t, f, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
                    this._trigger("change", t, this._uiHash());
                    this.containers[i]._trigger("change", t, this._uiHash(this));
                    this.currentContainer = this.containers[i];
                    this.options.placeholder.update(this.currentContainer, this.placeholder);
                    this.scrollParent = this.placeholder.scrollParent();
                    this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset());
                    this.containers[i]._trigger("over", t, this._uiHash(this));
                    this.containers[i].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var r = this.options
              , i = typeof r.helper == "function" ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper === "clone" ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || this.appendTo[0].appendChild(i[0]),
            i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()),
            (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()),
            i
        },
        _adjustOffsetFromHelper: function(n) {
            typeof n == "string" && (n = n.split(" "));
            Array.isArray(n) && (n = {
                left: +n[0],
                top: +n[1] || 0
            });
            "left"in n && (this.offset.click.left = n.left + this.margins.left);
            "right"in n && (this.offset.click.left = this.helperProportions.width - n.right + this.margins.left);
            "top"in n && (this.offset.click.top = n.top + this.margins.top);
            "bottom"in n && (this.offset.click.top = this.helperProportions.height - n.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var n = this.currentItem.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, r, u, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode);
            (i.containment === "document" || i.containment === "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, i.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (i.containment === "document" ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
            /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0],
            r = n(i.containment).offset(),
            u = n(t).css("overflow") !== "hidden",
            this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t === "absolute" ? 1 : -1
              , u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var r, u, i = this.options, f = t.pageX, e = t.pageY, o = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, s = /(html|body)/i.test(o[0].tagName);
            return this.cssPosition !== "relative" || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)),
            i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1],
            e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r,
            u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0],
            f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)),
            {
                top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(n, t, i, r) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var u = this.counter;
            this._delay(function() {
                u === this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function(n, t) {
            function u(n, t, i) {
                return function(r) {
                    i._trigger(n, r, t._uiHash(t))
                }
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)
                    (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !t && r.push(function(n) {
                this._trigger("receive", n, this._uiHash(this.fromOutside))
            }),
            (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t && r.push(function(n) {
                this._trigger("update", n, this._uiHash())
            }),
            this !== this.currentContainer && (t || (r.push(function(n) {
                this._trigger("remove", n, this._uiHash())
            }),
            r.push(function(n) {
                return function(t) {
                    n._trigger("receive", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            r.push(function(n) {
                return function(t) {
                    n._trigger("update", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            i = this.containers.length - 1; i >= 0; i--)
                t || r.push(u("deactivate", this, this.containers[i])),
                this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])),
                this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex),
            this.dragging = !1,
            t || this._trigger("beforeStop", n, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null),
            !t) {
                for (i = 0; i < r.length; i++)
                    r[i].call(this, n);
                this._trigger("stop", n, this._uiHash())
            }
            return this.fromOutside = !1,
            !this.cancelHelperRemoval
        },
        _trigger: function() {
            n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || n([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    });
    n.widget("ui.spinner", {
        version: "1.13.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            this.value() !== "" && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = this._super()
              , i = this.element;
            return n.each(["min", "max", "step"], function(n, r) {
                var u = i.attr(r);
                u != null && u.length && (t[r] = u)
            }),
            t
        },
        _events: {
            keydown: function(n) {
                this._start(n) && this._keydown(n) && n.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(n) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._stop();
                this._refresh();
                this.previous !== this.element.val() && this._trigger("change", n)
            },
            mousewheel: function(t, i) {
                var r = n.ui.safeActiveElement(this.document[0])
                  , u = this.element[0] === r;
                if (u && i) {
                    if (!this.spinning && !this._start(t))
                        return !1;
                    this._spin((i > 0 ? 1 : -1) * this.options.step, t);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100);
                    t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function r() {
                    var t = this.element[0] === n.ui.safeActiveElement(this.document[0]);
                    t || (this.element.trigger("focus"),
                    this.previous = i,
                    this._delay(function() {
                        this.previous = i
                    }))
                }
                var i;
                (i = this.element[0] === n.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(),
                t.preventDefault(),
                r.call(this),
                this.cancelBlur = !0,
                this._delay(function() {
                    delete this.cancelBlur;
                    r.call(this)
                }),
                this._start(t) !== !1) && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                if (n(t.currentTarget).hasClass("ui-state-active")) {
                    if (this._start(t) === !1)
                        return !1;
                    this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                }
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a><\/a><a><\/a>")
        },
        _draw: function() {
            this._enhance();
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
            this._addClass("ui-spinner-input");
            this.element.attr("role", "spinbutton");
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            });
            this._removeClass(this.buttons, "ui-corner-all");
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            });
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            });
            this.buttons.height() > Math.ceil(this.uiSpinner.height() * .5) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(t) {
            var r = this.options
              , i = n.ui.keyCode;
            switch (t.keyCode) {
            case i.UP:
                return this._repeat(null, 1, t),
                !0;
            case i.DOWN:
                return this._repeat(null, -1, t),
                !0;
            case i.PAGE_UP:
                return this._repeat(null, r.page, t),
                !0;
            case i.PAGE_DOWN:
                return this._repeat(null, -r.page, t),
                !0
            }
            return !1
        },
        _start: function(n) {
            return !this.spinning && this._trigger("start", n) === !1 ? !1 : (this.counter || (this.counter = 1),
            this.spinning = !0,
            !0)
        },
        _repeat: function(n, t, i) {
            n = n || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, t, i)
            }, n);
            this._spin(t * this.options.step, i)
        },
        _spin: function(n, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1);
            i = this._adjustValue(i + n * this._increment(this.counter));
            this.spinning && this._trigger("spin", t, {
                value: i
            }) === !1 || (this._value(i),
            this.counter++)
        },
        _increment: function(n) {
            var t = this.options.incremental;
            return t ? typeof t == "function" ? t(n) : Math.floor(n * n * n / 5e4 - n * n / 500 + 17 * n / 200 + 1) : 1
        },
        _precision: function() {
            var n = this._precisionOf(this.options.step);
            return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))),
            n
        },
        _precisionOf: function(n) {
            var t = n.toString()
              , i = t.indexOf(".");
            return i === -1 ? 0 : t.length - i - 1
        },
        _adjustValue: function(n) {
            var r, i, t = this.options;
            return (r = t.min !== null ? t.min : 0,
            i = n - r,
            i = Math.round(i / t.step) * t.step,
            n = r + i,
            n = parseFloat(n.toFixed(this._precision())),
            t.max !== null && n > t.max) ? t.max : t.min !== null && n < t.min ? t.min : n
        },
        _stop: function(n) {
            this.spinning && (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", n))
        },
        _setOption: function(n, t) {
            var u, i, r;
            if (n === "culture" || n === "numberFormat") {
                u = this._parse(this.element.val());
                this.options[n] = t;
                this.element.val(this._format(u));
                return
            }
            (n === "max" || n === "min" || n === "step") && typeof t == "string" && (t = this._parse(t));
            n === "icons" && (i = this.buttons.first().find(".ui-icon"),
            this._removeClass(i, null, this.options.icons.up),
            this._addClass(i, null, t.up),
            r = this.buttons.last().find(".ui-icon"),
            this._removeClass(r, null, this.options.icons.down),
            this._addClass(r, null, t.down));
            this._super(n, t)
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!n);
            this.element.prop("disabled", !!n);
            this.buttons.button(n ? "disable" : "enable")
        },
        _setOptions: e(function(n) {
            this._super(n)
        }),
        _parse: function(n) {
            return typeof n == "string" && n !== "" && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n),
            n === "" || isNaN(n) ? null : n
        },
        _format: function(n) {
            return n === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var n = this.value();
            return n === null ? !1 : n === this._adjustValue(n)
        },
        _value: function(n, t) {
            var i;
            n !== "" && (i = this._parse(n),
            i !== null && (t || (i = this._adjustValue(i)),
            n = this._format(i)));
            this.element.val(n);
            this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function(n) {
            this._stepUp(n)
        }),
        _stepUp: function(n) {
            this._start() && (this._spin((n || 1) * this.options.step),
            this._stop())
        },
        stepDown: e(function(n) {
            this._stepDown(n)
        }),
        _stepDown: function(n) {
            this._start() && (this._spin((n || 1) * -this.options.step),
            this._stop())
        },
        pageUp: e(function(n) {
            this._stepUp((n || 1) * this.options.page)
        }),
        pageDown: e(function(n) {
            this._stepDown((n || 1) * this.options.page)
        }),
        value: function(n) {
            if (!arguments.length)
                return this._parse(this.element.val());
            e(this._value).call(this, n)
        },
        widget: function() {
            return this.uiSpinner
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.spinner", n.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a><\/a><a><\/a>"
        }
    });
    ti = n.ui.spinner;
    n.widget("ui.tabs", {
        version: "1.13.2",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var n = /#.*$/;
            return function(t) {
                var i, r;
                i = t.href.replace(n, "");
                r = location.href.replace(n, "");
                try {
                    i = decodeURIComponent(i)
                } catch (u) {}
                try {
                    r = decodeURIComponent(r)
                } catch (u) {}
                return t.hash.length > 1 && i === r
            }
        }(),
        _create: function() {
            var i = this
              , t = this.options;
            this.running = !1;
            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, t.collapsible);
            this._processTabs();
            t.active = this._initialActive();
            Array.isArray(t.disabled) && (t.disabled = n.uniqueSort(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) {
                return i.tabs.index(n)
            }))).sort());
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
            this._refresh();
            this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var t = this.options.active
              , i = this.options.collapsible
              , r = location.hash.substring(1);
            return t === null && (r && this.tabs.each(function(i, u) {
                if (n(u).attr("aria-controls") === r)
                    return t = i,
                    !1
            }),
            t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (t === null || t === -1) && (t = this.tabs.length ? 0 : !1)),
            t !== !1 && (t = this.tabs.index(this.tabs.eq(t)),
            t === -1 && (t = i ? !1 : 0)),
            !i && t === !1 && this.anchors.length && (t = 0),
            t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : n()
            }
        },
        _tabKeydown: function(t) {
            var r = n(n.ui.safeActiveElement(this.document[0])).closest("li")
              , i = this.tabs.index(r)
              , u = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                case n.ui.keyCode.RIGHT:
                case n.ui.keyCode.DOWN:
                    i++;
                    break;
                case n.ui.keyCode.UP:
                case n.ui.keyCode.LEFT:
                    u = !1;
                    i--;
                    break;
                case n.ui.keyCode.END:
                    i = this.anchors.length - 1;
                    break;
                case n.ui.keyCode.HOME:
                    i = 0;
                    break;
                case n.ui.keyCode.SPACE:
                    t.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(i);
                    return;
                case n.ui.keyCode.ENTER:
                    t.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(i === this.options.active ? !1 : i);
                    return;
                default:
                    return
                }
                t.preventDefault();
                clearTimeout(this.activating);
                i = this._focusNextTab(i, u);
                t.ctrlKey || t.metaKey || (r.attr("aria-selected", "false"),
                this.tabs.eq(i).attr("aria-selected", "true"),
                this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(),
            this.active.trigger("focus"))
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : void 0
        },
        _findNextTab: function(t, i) {
            function u() {
                return t > r && (t = 0),
                t < 0 && (t = r),
                t
            }
            for (var r = this.tabs.length - 1; n.inArray(u(), this.options.disabled) !== -1; )
                t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(n, t) {
            return n = this._findNextTab(n, t),
            this.tabs.eq(n).trigger("focus"),
            n
        },
        _setOption: function(n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            this._super(n, t);
            n === "collapsible" && (this._toggleClass("ui-tabs-collapsible", null, t),
            t || this.options.active !== !1 || this._activate(0));
            n === "event" && this._setupEvents(t);
            n === "heightStyle" && this._setupHeightStyle(t)
        },
        _sanitizeSelector: function(n) {
            return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options
              , i = this.tablist.children(":has(a[href])");
            t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) {
                return i.index(n)
            });
            this._processTabs();
            t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1,
            this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1,
            this.active = n());
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this
              , i = this.tabs
              , r = this.anchors
              , u = this.panels;
            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) {
                n(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                n(this).closest("li").is(".ui-state-disabled") && this.blur()
            });
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
            this.anchors = this.tabs.map(function() {
                return n("a", this)[0]
            }).attr({
                tabIndex: -1
            });
            this._addClass(this.anchors, "ui-tabs-anchor");
            this.panels = n();
            this.anchors.each(function(i, r) {
                var f, u, e, s = n(r).uniqueId().attr("id"), o = n(r).closest("li"), h = o.attr("aria-controls");
                t._isLocal(r) ? (f = r.hash,
                e = f.substring(1),
                u = t.element.find(t._sanitizeSelector(f))) : (e = o.attr("aria-controls") || n({}).uniqueId()[0].id,
                f = "#" + e,
                u = t.element.find(f),
                u.length || (u = t._createPanel(e),
                u.insertAfter(t.panels[i - 1] || t.tablist)),
                u.attr("aria-live", "polite"));
                u.length && (t.panels = t.panels.add(u));
                h && o.data("ui-tabs-aria-controls", h);
                o.attr({
                    "aria-controls": e,
                    "aria-labelledby": s
                });
                u.attr("aria-labelledby", s)
            });
            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");
            i && (this._off(i.not(this.tabs)),
            this._off(r.not(this.anchors)),
            this._off(u.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(t) {
            return n("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(t) {
            var i, u, r;
            for (Array.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1),
            r = 0; u = this.tabs[r]; r++)
                i = n(u),
                t === !0 || n.inArray(r, t) !== -1 ? (i.attr("aria-disabled", "true"),
                this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"),
                this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = t;
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, t === !0)
        },
        _setupEvents: function(t) {
            var i = {};
            t && n.each(t.split(" "), function(n, t) {
                i[t] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, {
                click: function(n) {
                    n.preventDefault()
                }
            });
            this._on(this.anchors, i);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, r = this.element.parent();
            t === "fill" ? (i = r.height(),
            i -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each(function() {
                var t = n(this)
                  , r = t.css("position");
                r !== "absolute" && r !== "fixed" && (i -= t.outerHeight(!0))
            }),
            this.element.children().not(this.panels).each(function() {
                i -= n(this).outerHeight(!0)
            }),
            this.panels.each(function() {
                n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (i = 0,
            this.panels.each(function() {
                i = Math.max(i, n(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var u = this.options
              , r = this.active
              , c = n(t.currentTarget)
              , i = c.closest("li")
              , f = i[0] === r[0]
              , e = f && u.collapsible
              , o = e ? n() : this._getPanelForTab(i)
              , s = r.length ? this._getPanelForTab(r) : n()
              , h = {
                oldTab: r,
                oldPanel: s,
                newTab: e ? n() : i,
                newPanel: o
            };
            (t.preventDefault(),
            i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1) || (u.active = e ? !1 : this.tabs.index(i),
            this.active = f ? n() : i,
            this.xhr && this.xhr.abort(),
            s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."),
            o.length && this.load(this.tabs.index(i), t),
            this._toggle(t, h))
        },
        _toggle: function(t, i) {
            function e() {
                r.running = !1;
                r._trigger("activate", t, i)
            }
            function o() {
                r._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
                u.length && r.options.show ? r._show(u, r.options.show, e) : (u.show(),
                e())
            }
            var r = this
              , u = i.newPanel
              , f = i.oldPanel;
            this.running = !0;
            f.length && this.options.hide ? this._hide(f, this.options.hide, function() {
                r._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                o()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
            f.hide(),
            o());
            f.attr("aria-hidden", "true");
            i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            u.length && f.length ? i.oldTab.attr("tabIndex", -1) : u.length && this.tabs.filter(function() {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1);
            u.attr("aria-hidden", "false");
            i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var r, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active),
            r = i.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: r,
                currentTarget: r,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? n() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return typeof t == "string" && (t = this.anchors.index(this.anchors.filter("[href$='" + n.escapeSelector(t) + "']"))),
            t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort();
            this.tablist.removeAttr("role").off(this.eventNamespace);
            this.anchors.removeAttr("role tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            });
            this.tabs.each(function() {
                var t = n(this)
                  , i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            });
            this.panels.show();
            this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function(t) {
            var i = this.options.disabled;
            i !== !1 && (t === undefined ? i = !1 : (t = this._getIndex(t),
            i = Array.isArray(i) ? n.map(i, function(n) {
                return n !== t ? n : null
            }) : n.map(this.tabs, function(n, i) {
                return i !== t ? i : null
            })),
            this._setOptionDisabled(i))
        },
        disable: function(t) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (t === undefined)
                    i = !0;
                else {
                    if (t = this._getIndex(t),
                    n.inArray(t, i) !== -1)
                        return;
                    i = Array.isArray(i) ? n.merge([t], i).sort() : [t]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var r = this
              , u = this.tabs.eq(t)
              , e = u.find(".ui-tabs-anchor")
              , f = this._getPanelForTab(u)
              , o = {
                tab: u,
                panel: f
            }
              , s = function(n, t) {
                t === "abort" && r.panels.stop(!1, !0);
                r._removeClass(u, "ui-tabs-loading");
                f.removeAttr("aria-busy");
                n === r.xhr && delete r.xhr
            };
            this._isLocal(e[0]) || (this.xhr = n.ajax(this._ajaxSettings(e, i, o)),
            this.xhr && this.xhr.statusText !== "canceled" && (this._addClass(u, "ui-tabs-loading"),
            f.attr("aria-busy", "true"),
            this.xhr.done(function(n, t, u) {
                setTimeout(function() {
                    f.html(n);
                    r._trigger("load", i, o);
                    s(u, t)
                }, 1)
            }).fail(function(n, t) {
                setTimeout(function() {
                    s(n, t)
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, r) {
            var u = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""),
                beforeSend: function(t, f) {
                    return u._trigger("beforeLoad", i, n.extend({
                        jqXHR: t,
                        ajaxSettings: f
                    }, r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var i = n(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.tabs", n.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments);
            this._addClass(this.tabs, "ui-tab")
        }
    });
    ii = n.ui.tabs;
    n.widget("ui.tooltip", {
        version: "1.13.2",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var t = n(this).attr("title");
                return n("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(n, t) {
            var i = (n.attr("aria-describedby") || "").split(/\s+/);
            i.push(t);
            n.data("ui-tooltip-id", t).attr("aria-describedby", String.prototype.trim.call(i.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var u = t.data("ui-tooltip-id")
              , i = (t.attr("aria-describedby") || "").split(/\s+/)
              , r = n.inArray(u, i);
            r !== -1 && i.splice(r, 1);
            t.removeData("ui-tooltip-id");
            i = String.prototype.trim.call(i.join(" "));
            i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = n("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this.disabledTitles = n([])
        },
        _setOption: function(t, i) {
            var r = this;
            this._super(t, i);
            t === "content" && n.each(this.tooltips, function(n, t) {
                r._updateContent(t.element)
            })
        },
        _setOptionDisabled: function(n) {
            this[n ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var t = this;
            n.each(this.tooltips, function(i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r.element[0];
                t.close(u, !0)
            });
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var t = n(this);
                if (t.is("[title]"))
                    return t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var t = n(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            });
            this.disabledTitles = n([])
        },
        open: function(t) {
            var r = this
              , i = n(t ? t.target : this.element).closest(this.options.items);
            i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")),
            i.data("ui-tooltip-open", !0),
            t && t.type === "mouseover" && i.parents().each(function() {
                var t = n(this), i;
                t.data("ui-tooltip-open") && (i = n.Event("blur"),
                i.target = i.currentTarget = this,
                r.close(i, !0));
                t.attr("title") && (t.uniqueId(),
                r.parents[this.id] = {
                    element: this,
                    title: t.attr("title")
                },
                t.attr("title", ""))
            }),
            this._registerCloseHandlers(t, i),
            this._updateContent(i, t))
        },
        _updateContent: function(n, t) {
            var r, i = this.options.content, u = this, f = t ? t.type : null;
            if (typeof i == "string" || i.nodeType || i.jquery)
                return this._open(t, n, i);
            r = i.call(n[0], function(i) {
                u._delay(function() {
                    n.data("ui-tooltip-open") && (t && (t.type = f),
                    this._open(t, n, i))
                })
            });
            r && this._open(t, n, r)
        },
        _open: function(t, i, r) {
            function s(n) {
                (o.of = n,
                u.is(":hidden")) || u.position(o)
            }
            var f, u, h, e, o = n.extend({}, this.options.position);
            if (r) {
                if (f = this._find(i),
                f) {
                    f.tooltip.find(".ui-tooltip-content").html(r);
                    return
                }
                i.is("[title]") && (t && t.type === "mouseover" ? i.attr("title", "") : i.removeAttr("title"));
                f = this._tooltip(i);
                u = f.tooltip;
                this._addDescribedBy(i, u.attr("id"));
                u.find(".ui-tooltip-content").html(r);
                this.liveRegion.children().hide();
                e = n("<div>").html(u.find(".ui-tooltip-content").html());
                e.removeAttr("name").find("[name]").removeAttr("name");
                e.removeAttr("id").find("[id]").removeAttr("id");
                e.appendTo(this.liveRegion);
                this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: s
                }),
                s(t)) : u.position(n.extend({
                    of: i
                }, this.options.position));
                u.hide();
                this._show(u, this.options.show);
                this.options.track && this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    u.is(":visible") && (s(o.of),
                    clearInterval(h))
                }, 13));
                this._trigger("open", t, {
                    tooltip: u
                })
            }
        },
        _registerCloseHandlers: function(t, i) {
            var r = {
                keyup: function(t) {
                    if (t.keyCode === n.ui.keyCode.ESCAPE) {
                        var r = n.Event(t);
                        r.currentTarget = i[0];
                        this.close(r, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (r.remove = function() {
                var n = this._find(i);
                n && this._removeTooltip(n.tooltip)
            }
            );
            t && t.type !== "mouseover" || (r.mouseleave = "close");
            t && t.type !== "focusin" || (r.focusout = "close");
            this._on(!0, i, r)
        },
        close: function(t) {
            var u, f = this, i = n(t ? t.currentTarget : this.element), r = this._find(i);
            if (!r) {
                i.removeData("ui-tooltip-open");
                return
            }
            (u = r.tooltip,
            r.closing) || (clearInterval(this.delayedShow),
            i.data("ui-tooltip-title") && !i.attr("title") && i.attr("title", i.data("ui-tooltip-title")),
            this._removeDescribedBy(i),
            r.hiding = !0,
            u.stop(!0),
            this._hide(u, this.options.hide, function() {
                f._removeTooltip(n(this))
            }),
            i.removeData("ui-tooltip-open"),
            this._off(i, "mouseleave focusout keyup"),
            i[0] !== this.element[0] && this._off(i, "remove"),
            this._off(this.document, "mousemove"),
            t && t.type === "mouseleave" && n.each(this.parents, function(t, i) {
                n(i.element).attr("title", i.title);
                delete f.parents[t]
            }),
            r.closing = !0,
            this._trigger("close", t, {
                tooltip: u
            }),
            r.hiding || (r.closing = !1))
        },
        _tooltip: function(t) {
            var i = n("<div>").attr("role", "tooltip")
              , r = n("<div>").appendTo(i)
              , u = i.uniqueId().attr("id");
            return this._addClass(r, "ui-tooltip-content"),
            this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
            i.appendTo(this._appendTo(t)),
            this.tooltips[u] = {
                element: t,
                tooltip: i
            }
        },
        _find: function(n) {
            var t = n.data("ui-tooltip-id");
            return t ? this.tooltips[t] : null
        },
        _removeTooltip: function(n) {
            clearInterval(this.delayedShow);
            n.remove();
            delete this.tooltips[n.attr("id")]
        },
        _appendTo: function(n) {
            var t = n.closest(".ui-front, dialog");
            return t.length || (t = this.document[0].body),
            t
        },
        _destroy: function() {
            var t = this;
            n.each(this.tooltips, function(i, r) {
                var f = n.Event("blur")
                  , u = r.element;
                f.target = f.currentTarget = u[0];
                t.close(f, !0);
                n("#" + i).remove();
                u.data("ui-tooltip-title") && (u.attr("title") || u.attr("title", u.data("ui-tooltip-title")),
                u.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.tooltip", n.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var n = this._superApply(arguments);
            return this.options.tooltipClass && n.tooltip.addClass(this.options.tooltipClass),
            n
        }
    });
    ri = n.ui.tooltip
});
$(document).ready(function() {
    $(".company-link, .bread-home, .link-rate, .rv-count, .all-rv, .btn-create-review, .paging-link, .home-logo").on("click", function() {
        // checkAffClick()
    })
})
