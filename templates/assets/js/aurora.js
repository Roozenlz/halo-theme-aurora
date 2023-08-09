var n0 = Object.defineProperty;
var s0 = (e, t, n) => t in e ? n0(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
var E = (e, t, n) => (s0(e, typeof t != "symbol" ? t + "" : t, n), n);
import {init as o0, RecentComments as r0} from "https://unpkg.com/@waline/client@v2/dist/waline.mjs";

(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
    new MutationObserver(o => {
        for (const r of o) if (r.type === "childList") for (const i of r.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }).observe(document, {childList: !0, subtree: !0});

    function n(o) {
        const r = {};
        return o.integrity && (r.integrity = o.integrity), o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? r.credentials = "include" : o.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function s(o) {
        if (o.ep) return;
        o.ep = !0;
        const r = n(o);
        fetch(o.href, r)
    }
})();

function qr(e, t) {
    const n = Object.create(null), s = e.split(",");
    for (let o = 0; o < s.length; o++) n[s[o]] = !0;
    return t ? o => !!n[o.toLowerCase()] : o => !!n[o]
}

const je = {}, Zn = [], Ot = () => {
    }, i0 = () => !1, a0 = /^on[^a-z]/, mo = e => a0.test(e), Kr = e => e.startsWith("onUpdate:"), Ge = Object.assign,
    Gr = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }, l0 = Object.prototype.hasOwnProperty, Me = (e, t) => l0.call(e, t), fe = Array.isArray,
    Bn = e => go(e) === "[object Map]", fc = e => go(e) === "[object Set]", ge = e => typeof e == "function",
    Ue = e => typeof e == "string", Yr = e => typeof e == "symbol", Ze = e => e !== null && typeof e == "object",
    dc = e => Ze(e) && ge(e.then) && ge(e.catch), hc = Object.prototype.toString, go = e => hc.call(e),
    c0 = e => go(e).slice(8, -1), pc = e => go(e) === "[object Object]",
    Xr = e => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Ks = qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    _o = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    }, u0 = /-(\w)/g, jt = _o(e => e.replace(u0, (t, n) => n ? n.toUpperCase() : "")), f0 = /\B([A-Z])/g,
    In = _o(e => e.replace(f0, "-$1").toLowerCase()), vo = _o(e => e.charAt(0).toUpperCase() + e.slice(1)),
    zo = _o(e => e ? `on${vo(e)}` : ""), ws = (e, t) => !Object.is(e, t), Gs = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t)
    }, so = (e, t, n) => {
        Object.defineProperty(e, t, {configurable: !0, enumerable: !1, value: n})
    }, ur = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    }, d0 = e => {
        const t = Ue(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let qi;
const fr = () => qi || (qi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ie(e) {
    if (fe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n], o = Ue(s) ? g0(s) : Ie(s);
            if (o) for (const r in o) t[r] = o[r]
        }
        return t
    } else {
        if (Ue(e)) return e;
        if (Ze(e)) return e
    }
}

const h0 = /;(?![^(]*\))/g, p0 = /:([^]+)/, m0 = /\/\*[^]*?\*\//g;

function g0(e) {
    const t = {};
    return e.replace(m0, "").split(h0).forEach(n => {
        if (n) {
            const s = n.split(p0);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }), t
}

function qe(e) {
    let t = "";
    if (Ue(e)) t = e; else if (fe(e)) for (let n = 0; n < e.length; n++) {
        const s = qe(e[n]);
        s && (t += s + " ")
    } else if (Ze(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

const _0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", v0 = qr(_0);

function mc(e) {
    return !!e || e === ""
}

const q = e => Ue(e) ? e : e == null ? "" : fe(e) || Ze(e) && (e.toString === hc || !ge(e.toString)) ? JSON.stringify(e, gc, 2) : String(e),
    gc = (e, t) => t && t.__v_isRef ? gc(e, t.value) : Bn(t) ? {[`Map(${t.size})`]: [...t.entries()].reduce((n, [s, o]) => (n[`${s} =>`] = o, n), {})} : fc(t) ? {[`Set(${t.size})`]: [...t.values()]} : Ze(t) && !fe(t) && !pc(t) ? String(t) : t;
let gt;

class _c {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = gt, !t && gt && (this.index = (gt.scopes || (gt.scopes = [])).push(this) - 1)
    }

    get active() {
        return this._active
    }

    run(t) {
        if (this._active) {
            const n = gt;
            try {
                return gt = this, t()
            } finally {
                gt = n
            }
        }
    }

    on() {
        gt = this
    }

    off() {
        gt = this.parent
    }

    stop(t) {
        if (this._active) {
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function Jr(e) {
    return new _c(e)
}

function b0(e, t = gt) {
    t && t.active && t.effects.push(e)
}

function vc() {
    return gt
}

function y0(e) {
    gt && gt.cleanups.push(e)
}

const Qr = e => {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t
}, bc = e => (e.w & un) > 0, yc = e => (e.n & un) > 0, k0 = ({deps: e}) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= un
}, w0 = e => {
    const {deps: t} = e;
    if (t.length) {
        let n = 0;
        for (let s = 0; s < t.length; s++) {
            const o = t[s];
            bc(o) && !yc(o) ? o.delete(e) : t[n++] = o, o.w &= ~un, o.n &= ~un
        }
        t.length = n
    }
}, oo = new WeakMap;
let as = 0, un = 1;
const dr = 30;
let St;
const Tn = Symbol(""), hr = Symbol("");

class ei {
    constructor(t, n = null, s) {
        this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, b0(this, s)
    }

    run() {
        if (!this.active) return this.fn();
        let t = St, n = an;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try {
            return this.parent = St, St = this, an = !0, un = 1 << ++as, as <= dr ? k0(this) : Ki(this), this.fn()
        } finally {
            as <= dr && w0(this), un = 1 << --as, St = this.parent, an = n, this.parent = void 0, this.deferStop && this.stop()
        }
    }

    stop() {
        St === this ? this.deferStop = !0 : this.active && (Ki(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function Ki(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}

let an = !0;
const kc = [];

function Xn() {
    kc.push(an), an = !1
}

function Jn() {
    const e = kc.pop();
    an = e === void 0 ? !0 : e
}

function dt(e, t, n) {
    if (an && St) {
        let s = oo.get(e);
        s || oo.set(e, s = new Map);
        let o = s.get(n);
        o || s.set(n, o = Qr()), wc(o)
    }
}

function wc(e, t) {
    let n = !1;
    as <= dr ? yc(e) || (e.n |= un, n = !bc(e)) : n = !e.has(St), n && (e.add(St), St.deps.push(e))
}

function Kt(e, t, n, s, o, r) {
    const i = oo.get(e);
    if (!i) return;
    let a = [];
    if (t === "clear") a = [...i.values()]; else if (n === "length" && fe(e)) {
        const l = Number(s);
        i.forEach((c, u) => {
            (u === "length" || u >= l) && a.push(c)
        })
    } else switch (n !== void 0 && a.push(i.get(n)), t) {
        case"add":
            fe(e) ? Xr(n) && a.push(i.get("length")) : (a.push(i.get(Tn)), Bn(e) && a.push(i.get(hr)));
            break;
        case"delete":
            fe(e) || (a.push(i.get(Tn)), Bn(e) && a.push(i.get(hr)));
            break;
        case"set":
            Bn(e) && a.push(i.get(Tn));
            break
    }
    if (a.length === 1) a[0] && pr(a[0]); else {
        const l = [];
        for (const c of a) c && l.push(...c);
        pr(Qr(l))
    }
}

function pr(e, t) {
    const n = fe(e) ? e : [...e];
    for (const s of n) s.computed && Gi(s);
    for (const s of n) s.computed || Gi(s)
}

function Gi(e, t) {
    (e !== St || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}

function C0(e, t) {
    var n;
    return (n = oo.get(e)) == null ? void 0 : n.get(t)
}

const E0 = qr("__proto__,__v_isRef,__isVue"),
    Cc = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Yr)),
    M0 = ti(), S0 = ti(!1, !0), T0 = ti(!0), Yi = O0();

function O0() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function (...n) {
            const s = Ee(this);
            for (let r = 0, i = this.length; r < i; r++) dt(s, "get", r + "");
            const o = s[t](...n);
            return o === -1 || o === !1 ? s[t](...n.map(Ee)) : o
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function (...n) {
            Xn();
            const s = Ee(this)[t].apply(this, n);
            return Jn(), s
        }
    }), e
}

function A0(e) {
    const t = Ee(this);
    return dt(t, "has", e), t.hasOwnProperty(e)
}

function ti(e = !1, t = !1) {
    return function (s, o, r) {
        if (o === "__v_isReactive") return !e;
        if (o === "__v_isReadonly") return e;
        if (o === "__v_isShallow") return t;
        if (o === "__v_raw" && r === (e ? t ? W0 : Oc : t ? Tc : Sc).get(s)) return s;
        const i = fe(s);
        if (!e) {
            if (i && Me(Yi, o)) return Reflect.get(Yi, o, r);
            if (o === "hasOwnProperty") return A0
        }
        const a = Reflect.get(s, o, r);
        return (Yr(o) ? Cc.has(o) : E0(o)) || (e || dt(s, "get", o), t) ? a : He(a) ? i && Xr(o) ? a : a.value : Ze(a) ? e ? Ac(a) : Gt(a) : a
    }
}

const L0 = Ec(), I0 = Ec(!0);

function Ec(e = !1) {
    return function (n, s, o, r) {
        let i = n[s];
        if (Vn(i) && He(i) && !He(o)) return !1;
        if (!e && (!ro(o) && !Vn(o) && (i = Ee(i), o = Ee(o)), !fe(n) && He(i) && !He(o))) return i.value = o, !0;
        const a = fe(n) && Xr(s) ? Number(s) < n.length : Me(n, s), l = Reflect.set(n, s, o, r);
        return n === Ee(r) && (a ? ws(o, i) && Kt(n, "set", s, o) : Kt(n, "add", s, o)), l
    }
}

function P0(e, t) {
    const n = Me(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && n && Kt(e, "delete", t, void 0), s
}

function $0(e, t) {
    const n = Reflect.has(e, t);
    return (!Yr(t) || !Cc.has(t)) && dt(e, "has", t), n
}

function R0(e) {
    return dt(e, "iterate", fe(e) ? "length" : Tn), Reflect.ownKeys(e)
}

const Mc = {get: M0, set: L0, deleteProperty: P0, has: $0, ownKeys: R0}, N0 = {
    get: T0, set(e, t) {
        return !0
    }, deleteProperty(e, t) {
        return !0
    }
}, F0 = Ge({}, Mc, {get: S0, set: I0}), ni = e => e, bo = e => Reflect.getPrototypeOf(e);

function Ds(e, t, n = !1, s = !1) {
    e = e.__v_raw;
    const o = Ee(e), r = Ee(t);
    n || (t !== r && dt(o, "get", t), dt(o, "get", r));
    const {has: i} = bo(o), a = s ? ni : n ? ri : Cs;
    if (i.call(o, t)) return a(e.get(t));
    if (i.call(o, r)) return a(e.get(r));
    e !== o && e.get(t)
}

function js(e, t = !1) {
    const n = this.__v_raw, s = Ee(n), o = Ee(e);
    return t || (e !== o && dt(s, "has", e), dt(s, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o)
}

function Zs(e, t = !1) {
    return e = e.__v_raw, !t && dt(Ee(e), "iterate", Tn), Reflect.get(e, "size", e)
}

function Xi(e) {
    e = Ee(e);
    const t = Ee(this);
    return bo(t).has.call(t, e) || (t.add(e), Kt(t, "add", e, e)), this
}

function Ji(e, t) {
    t = Ee(t);
    const n = Ee(this), {has: s, get: o} = bo(n);
    let r = s.call(n, e);
    r || (e = Ee(e), r = s.call(n, e));
    const i = o.call(n, e);
    return n.set(e, t), r ? ws(t, i) && Kt(n, "set", e, t) : Kt(n, "add", e, t), this
}

function Qi(e) {
    const t = Ee(this), {has: n, get: s} = bo(t);
    let o = n.call(t, e);
    o || (e = Ee(e), o = n.call(t, e)), s && s.call(t, e);
    const r = t.delete(e);
    return o && Kt(t, "delete", e, void 0), r
}

function ea() {
    const e = Ee(this), t = e.size !== 0, n = e.clear();
    return t && Kt(e, "clear", void 0, void 0), n
}

function Bs(e, t) {
    return function (s, o) {
        const r = this, i = r.__v_raw, a = Ee(i), l = t ? ni : e ? ri : Cs;
        return !e && dt(a, "iterate", Tn), i.forEach((c, u) => s.call(o, l(c), l(u), r))
    }
}

function Hs(e, t, n) {
    return function (...s) {
        const o = this.__v_raw, r = Ee(o), i = Bn(r), a = e === "entries" || e === Symbol.iterator && i,
            l = e === "keys" && i, c = o[e](...s), u = n ? ni : t ? ri : Cs;
        return !t && dt(r, "iterate", l ? hr : Tn), {
            next() {
                const {value: h, done: p} = c.next();
                return p ? {value: h, done: p} : {value: a ? [u(h[0]), u(h[1])] : u(h), done: p}
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Xt(e) {
    return function (...t) {
        return e === "delete" ? !1 : this
    }
}

function x0() {
    const e = {
        get(r) {
            return Ds(this, r)
        }, get size() {
            return Zs(this)
        }, has: js, add: Xi, set: Ji, delete: Qi, clear: ea, forEach: Bs(!1, !1)
    }, t = {
        get(r) {
            return Ds(this, r, !1, !0)
        }, get size() {
            return Zs(this)
        }, has: js, add: Xi, set: Ji, delete: Qi, clear: ea, forEach: Bs(!1, !0)
    }, n = {
        get(r) {
            return Ds(this, r, !0)
        }, get size() {
            return Zs(this, !0)
        }, has(r) {
            return js.call(this, r, !0)
        }, add: Xt("add"), set: Xt("set"), delete: Xt("delete"), clear: Xt("clear"), forEach: Bs(!0, !1)
    }, s = {
        get(r) {
            return Ds(this, r, !0, !0)
        }, get size() {
            return Zs(this, !0)
        }, has(r) {
            return js.call(this, r, !0)
        }, add: Xt("add"), set: Xt("set"), delete: Xt("delete"), clear: Xt("clear"), forEach: Bs(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        e[r] = Hs(r, !1, !1), n[r] = Hs(r, !0, !1), t[r] = Hs(r, !1, !0), s[r] = Hs(r, !0, !0)
    }), [e, n, t, s]
}

const [D0, j0, Z0, B0] = x0();

function si(e, t) {
    const n = t ? e ? B0 : Z0 : e ? j0 : D0;
    return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(Me(n, o) && o in s ? n : s, o, r)
}

const H0 = {get: si(!1, !1)}, U0 = {get: si(!1, !0)}, V0 = {get: si(!0, !1)}, Sc = new WeakMap, Tc = new WeakMap,
    Oc = new WeakMap, W0 = new WeakMap;

function z0(e) {
    switch (e) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function q0(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : z0(c0(e))
}

function Gt(e) {
    return Vn(e) ? e : oi(e, !1, Mc, H0, Sc)
}

function K0(e) {
    return oi(e, !1, F0, U0, Tc)
}

function Ac(e) {
    return oi(e, !0, N0, V0, Oc)
}

function oi(e, t, n, s, o) {
    if (!Ze(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const r = o.get(e);
    if (r) return r;
    const i = q0(e);
    if (i === 0) return e;
    const a = new Proxy(e, i === 2 ? s : n);
    return o.set(e, a), a
}

function ln(e) {
    return Vn(e) ? ln(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Vn(e) {
    return !!(e && e.__v_isReadonly)
}

function ro(e) {
    return !!(e && e.__v_isShallow)
}

function Lc(e) {
    return ln(e) || Vn(e)
}

function Ee(e) {
    const t = e && e.__v_raw;
    return t ? Ee(t) : e
}

function yo(e) {
    return so(e, "__v_skip", !0), e
}

const Cs = e => Ze(e) ? Gt(e) : e, ri = e => Ze(e) ? Ac(e) : e;

function Ic(e) {
    an && St && (e = Ee(e), wc(e.dep || (e.dep = Qr())))
}

function Pc(e, t) {
    e = Ee(e);
    const n = e.dep;
    n && pr(n)
}

function He(e) {
    return !!(e && e.__v_isRef === !0)
}

function pe(e) {
    return Rc(e, !1)
}

function $c(e) {
    return Rc(e, !0)
}

function Rc(e, t) {
    return He(e) ? e : new G0(e, t)
}

class G0 {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Ee(t), this._value = n ? t : Cs(t)
    }

    get value() {
        return Ic(this), this._value
    }

    set value(t) {
        const n = this.__v_isShallow || ro(t) || Vn(t);
        t = n ? t : Ee(t), ws(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Cs(t), Pc(this))
    }
}

function Hn(e) {
    return He(e) ? e.value : e
}

const Y0 = {
    get: (e, t, n) => Hn(Reflect.get(e, t, n)), set: (e, t, n, s) => {
        const o = e[t];
        return He(o) && !He(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s)
    }
};

function Nc(e) {
    return ln(e) ? e : new Proxy(e, Y0)
}

function ht(e) {
    const t = fe(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = J0(e, n);
    return t
}

class X0 {
    constructor(t, n, s) {
        this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0
    }

    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }

    set value(t) {
        this._object[this._key] = t
    }

    get dep() {
        return C0(Ee(this._object), this._key)
    }
}

function J0(e, t, n) {
    const s = e[t];
    return He(s) ? s : new X0(e, t, n)
}

class Q0 {
    constructor(t, n, s, o) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new ei(t, () => {
            this._dirty || (this._dirty = !0, Pc(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = s
    }

    get value() {
        const t = Ee(this);
        return Ic(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
    }

    set value(t) {
        this._setter(t)
    }
}

function ef(e, t, n = !1) {
    let s, o;
    const r = ge(e);
    return r ? (s = e, o = Ot) : (s = e.get, o = e.set), new Q0(s, o, r || !o, n)
}

function cn(e, t, n, s) {
    let o;
    try {
        o = s ? e(...s) : e()
    } catch (r) {
        ko(r, t, n)
    }
    return o
}

function wt(e, t, n, s) {
    if (ge(e)) {
        const r = cn(e, t, n, s);
        return r && dc(r) && r.catch(i => {
            ko(i, t, n)
        }), r
    }
    const o = [];
    for (let r = 0; r < e.length; r++) o.push(wt(e[r], t, n, s));
    return o
}

function ko(e, t, n, s = !0) {
    const o = t ? t.vnode : null;
    if (t) {
        let r = t.parent;
        const i = t.proxy, a = n;
        for (; r;) {
            const c = r.ec;
            if (c) {
                for (let u = 0; u < c.length; u++) if (c[u](e, i, a) === !1) return
            }
            r = r.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            cn(l, null, 10, [e, i, a]);
            return
        }
    }
    tf(e, n, o, s)
}

function tf(e, t, n, s = !0) {
    console.error(e)
}

let Es = !1, mr = !1;
const rt = [];
let xt = 0;
const Un = [];
let Wt = null, wn = 0;
const Fc = Promise.resolve();
let ii = null;

function ai(e) {
    const t = ii || Fc;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function nf(e) {
    let t = xt + 1, n = rt.length;
    for (; t < n;) {
        const s = t + n >>> 1;
        Ms(rt[s]) < e ? t = s + 1 : n = s
    }
    return t
}

function li(e) {
    (!rt.length || !rt.includes(e, Es && e.allowRecurse ? xt + 1 : xt)) && (e.id == null ? rt.push(e) : rt.splice(nf(e.id), 0, e), xc())
}

function xc() {
    !Es && !mr && (mr = !0, ii = Fc.then(jc))
}

function sf(e) {
    const t = rt.indexOf(e);
    t > xt && rt.splice(t, 1)
}

function of(e) {
    fe(e) ? Un.push(...e) : (!Wt || !Wt.includes(e, e.allowRecurse ? wn + 1 : wn)) && Un.push(e), xc()
}

function ta(e, t = Es ? xt + 1 : 0) {
    for (; t < rt.length; t++) {
        const n = rt[t];
        n && n.pre && (rt.splice(t, 1), t--, n())
    }
}

function Dc(e) {
    if (Un.length) {
        const t = [...new Set(Un)];
        if (Un.length = 0, Wt) {
            Wt.push(...t);
            return
        }
        for (Wt = t, Wt.sort((n, s) => Ms(n) - Ms(s)), wn = 0; wn < Wt.length; wn++) Wt[wn]();
        Wt = null, wn = 0
    }
}

const Ms = e => e.id == null ? 1 / 0 : e.id, rf = (e, t) => {
    const n = Ms(e) - Ms(t);
    if (n === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1
    }
    return n
};

function jc(e) {
    mr = !1, Es = !0, rt.sort(rf);
    const t = Ot;
    try {
        for (xt = 0; xt < rt.length; xt++) {
            const n = rt[xt];
            n && n.active !== !1 && cn(n, null, 14)
        }
    } finally {
        xt = 0, rt.length = 0, Dc(), Es = !1, ii = null, (rt.length || Un.length) && jc()
    }
}

function af(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || je;
    let o = n;
    const r = t.startsWith("update:"), i = r && t.slice(7);
    if (i && i in s) {
        const u = `${i === "modelValue" ? "model" : i}Modifiers`, {number: h, trim: p} = s[u] || je;
        p && (o = n.map(w => Ue(w) ? w.trim() : w)), h && (o = n.map(ur))
    }
    let a, l = s[a = zo(t)] || s[a = zo(jt(t))];
    !l && r && (l = s[a = zo(In(t))]), l && wt(l, e, 6, o);
    const c = s[a + "Once"];
    if (c) {
        if (!e.emitted) e.emitted = {}; else if (e.emitted[a]) return;
        e.emitted[a] = !0, wt(c, e, 6, o)
    }
}

function Zc(e, t, n = !1) {
    const s = t.emitsCache, o = s.get(e);
    if (o !== void 0) return o;
    const r = e.emits;
    let i = {}, a = !1;
    if (!ge(e)) {
        const l = c => {
            const u = Zc(c, t, !0);
            u && (a = !0, Ge(i, u))
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !r && !a ? (Ze(e) && s.set(e, null), null) : (fe(r) ? r.forEach(l => i[l] = null) : Ge(i, r), Ze(e) && s.set(e, i), i)
}

function wo(e, t) {
    return !e || !mo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Me(e, t[0].toLowerCase() + t.slice(1)) || Me(e, In(t)) || Me(e, t))
}

let st = null, Co = null;

function io(e) {
    const t = st;
    return st = e, Co = e && e.type.__scopeId || null, t
}

function ci(e) {
    Co = e
}

function ui() {
    Co = null
}

function Ne(e, t = st, n) {
    if (!t || e._n) return e;
    const s = (...o) => {
        s._d && pa(-1);
        const r = io(t);
        let i;
        try {
            i = e(...o)
        } finally {
            io(r), s._d && pa(1)
        }
        return i
    };
    return s._n = !0, s._c = !0, s._d = !0, s
}

function qo(e) {
    const {
        type: t,
        vnode: n,
        proxy: s,
        withProxy: o,
        props: r,
        propsOptions: [i],
        slots: a,
        attrs: l,
        emit: c,
        render: u,
        renderCache: h,
        data: p,
        setupState: w,
        ctx: g,
        inheritAttrs: C
    } = e;
    let A, v;
    const M = io(e);
    try {
        if (n.shapeFlag & 4) {
            const S = o || s;
            A = Nt(u.call(S, S, h, r, w, p, g)), v = l
        } else {
            const S = t;
            A = Nt(S.length > 1 ? S(r, {attrs: l, slots: a, emit: c}) : S(r, null)), v = t.props ? l : lf(l)
        }
    } catch (S) {
        hs.length = 0, ko(S, e, 1), A = Y(Ct)
    }
    let R = A;
    if (v && C !== !1) {
        const S = Object.keys(v), {shapeFlag: I} = R;
        S.length && I & 7 && (i && S.some(Kr) && (v = cf(v, i)), R = hn(R, v))
    }
    return n.dirs && (R = hn(R), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (R.transition = n.transition), A = R, io(M), A
}

const lf = e => {
    let t;
    for (const n in e) (n === "class" || n === "style" || mo(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}, cf = (e, t) => {
    const n = {};
    for (const s in e) (!Kr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n
};

function uf(e, t, n) {
    const {props: s, children: o, component: r} = e, {props: i, children: a, patchFlag: l} = t, c = r.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return s ? na(s, i, c) : !!i;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                const p = u[h];
                if (i[p] !== s[p] && !wo(c, p)) return !0
            }
        }
    } else return (o || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? na(s, i, c) : !0 : !!i;
    return !1
}

function na(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return !0;
    for (let o = 0; o < s.length; o++) {
        const r = s[o];
        if (t[r] !== e[r] && !wo(n, r)) return !0
    }
    return !1
}

function ff({vnode: e, parent: t}, n) {
    for (; t && t.subTree === e;) (e = t.vnode).el = n, t = t.parent
}

const df = e => e.__isSuspense;

function hf(e, t) {
    t && t.pendingBranch ? fe(e) ? t.effects.push(...e) : t.effects.push(e) : of(e)
}

const Us = {};

function ft(e, t, n) {
    return Bc(e, t, n)
}

function Bc(e, t, {immediate: n, deep: s, flush: o, onTrack: r, onTrigger: i} = je) {
    var a;
    const l = vc() === ((a = Je) == null ? void 0 : a.scope) ? Je : null;
    let c, u = !1, h = !1;
    if (He(e) ? (c = () => e.value, u = ro(e)) : ln(e) ? (c = () => e, s = !0) : fe(e) ? (h = !0, u = e.some(S => ln(S) || ro(S)), c = () => e.map(S => {
        if (He(S)) return S.value;
        if (ln(S)) return Sn(S);
        if (ge(S)) return cn(S, l, 2)
    })) : ge(e) ? t ? c = () => cn(e, l, 2) : c = () => {
        if (!(l && l.isUnmounted)) return p && p(), wt(e, l, 3, [w])
    } : c = Ot, t && s) {
        const S = c;
        c = () => Sn(S())
    }
    let p, w = S => {
        p = M.onStop = () => {
            cn(S, l, 4)
        }
    }, g;
    if (Os) if (w = Ot, t ? n && wt(t, l, 3, [c(), h ? [] : void 0, w]) : c(), o === "sync") {
        const S = ad();
        g = S.__watcherHandles || (S.__watcherHandles = [])
    } else return Ot;
    let C = h ? new Array(e.length).fill(Us) : Us;
    const A = () => {
        if (M.active) if (t) {
            const S = M.run();
            (s || u || (h ? S.some((I, V) => ws(I, C[V])) : ws(S, C))) && (p && p(), wt(t, l, 3, [S, C === Us ? void 0 : h && C[0] === Us ? [] : C, w]), C = S)
        } else M.run()
    };
    A.allowRecurse = !!t;
    let v;
    o === "sync" ? v = A : o === "post" ? v = () => ut(A, l && l.suspense) : (A.pre = !0, l && (A.id = l.uid), v = () => li(A));
    const M = new ei(c, v);
    t ? n ? A() : C = M.run() : o === "post" ? ut(M.run.bind(M), l && l.suspense) : M.run();
    const R = () => {
        M.stop(), l && l.scope && Gr(l.scope.effects, M)
    };
    return g && g.push(R), R
}

function pf(e, t, n) {
    const s = this.proxy, o = Ue(e) ? e.includes(".") ? Hc(s, e) : () => s[e] : e.bind(s, s);
    let r;
    ge(t) ? r = t : (r = t.handler, n = t);
    const i = Je;
    zn(this);
    const a = Bc(o, r.bind(s), n);
    return i ? zn(i) : On(), a
}

function Hc(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let o = 0; o < n.length && s; o++) s = s[n[o]];
        return s
    }
}

function Sn(e, t) {
    if (!Ze(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), He(e)) Sn(e.value, t); else if (fe(e)) for (let n = 0; n < e.length; n++) Sn(e[n], t); else if (fc(e) || Bn(e)) e.forEach(n => {
        Sn(n, t)
    }); else if (pc(e)) for (const n in e) Sn(e[n], t);
    return e
}

function fn(e, t) {
    const n = st;
    if (n === null) return e;
    const s = Oo(n) || n.proxy, o = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [i, a, l, c = je] = t[r];
        i && (ge(i) && (i = {mounted: i, updated: i}), i.deep && Sn(a), o.push({
            dir: i,
            instance: s,
            value: a,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return e
}

function vn(e, t, n, s) {
    const o = e.dirs, r = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
        const a = o[i];
        r && (a.oldValue = r[i].value);
        let l = a.dir[s];
        l && (Xn(), wt(l, n, 8, [e.el, a, e, t]), Jn())
    }
}

function mf() {
    const e = {isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map};
    return Mt(() => {
        e.isMounted = !0
    }), Kc(() => {
        e.isUnmounting = !0
    }), e
}

const kt = [Function, Array], Uc = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: kt,
    onEnter: kt,
    onAfterEnter: kt,
    onEnterCancelled: kt,
    onBeforeLeave: kt,
    onLeave: kt,
    onAfterLeave: kt,
    onLeaveCancelled: kt,
    onBeforeAppear: kt,
    onAppear: kt,
    onAfterAppear: kt,
    onAppearCancelled: kt
}, gf = {
    name: "BaseTransition", props: Uc, setup(e, {slots: t}) {
        const n = Wn(), s = mf();
        let o;
        return () => {
            const r = t.default && Wc(t.default(), !0);
            if (!r || !r.length) return;
            let i = r[0];
            if (r.length > 1) {
                for (const C of r) if (C.type !== Ct) {
                    i = C;
                    break
                }
            }
            const a = Ee(e), {mode: l} = a;
            if (s.isLeaving) return Ko(i);
            const c = sa(i);
            if (!c) return Ko(i);
            const u = gr(c, a, s, n);
            _r(c, u);
            const h = n.subTree, p = h && sa(h);
            let w = !1;
            const {getTransitionKey: g} = c.type;
            if (g) {
                const C = g();
                o === void 0 ? o = C : C !== o && (o = C, w = !0)
            }
            if (p && p.type !== Ct && (!Cn(c, p) || w)) {
                const C = gr(p, a, s, n);
                if (_r(p, C), l === "out-in") return s.isLeaving = !0, C.afterLeave = () => {
                    s.isLeaving = !1, n.update.active !== !1 && n.update()
                }, Ko(i);
                l === "in-out" && c.type !== Ct && (C.delayLeave = (A, v, M) => {
                    const R = Vc(s, p);
                    R[String(p.key)] = p, A._leaveCb = () => {
                        v(), A._leaveCb = void 0, delete u.delayedLeave
                    }, u.delayedLeave = M
                })
            }
            return i
        }
    }
}, _f = gf;

function Vc(e, t) {
    const {leavingVNodes: n} = e;
    let s = n.get(t.type);
    return s || (s = Object.create(null), n.set(t.type, s)), s
}

function gr(e, t, n, s) {
    const {
        appear: o,
        mode: r,
        persisted: i = !1,
        onBeforeEnter: a,
        onEnter: l,
        onAfterEnter: c,
        onEnterCancelled: u,
        onBeforeLeave: h,
        onLeave: p,
        onAfterLeave: w,
        onLeaveCancelled: g,
        onBeforeAppear: C,
        onAppear: A,
        onAfterAppear: v,
        onAppearCancelled: M
    } = t, R = String(e.key), S = Vc(n, e), I = (D, X) => {
        D && wt(D, s, 9, X)
    }, V = (D, X) => {
        const ie = X[1];
        I(D, X), fe(D) ? D.every(ue => ue.length <= 1) && ie() : D.length <= 1 && ie()
    }, K = {
        mode: r, persisted: i, beforeEnter(D) {
            let X = a;
            if (!n.isMounted) if (o) X = C || a; else return;
            D._leaveCb && D._leaveCb(!0);
            const ie = S[R];
            ie && Cn(e, ie) && ie.el._leaveCb && ie.el._leaveCb(), I(X, [D])
        }, enter(D) {
            let X = l, ie = c, ue = u;
            if (!n.isMounted) if (o) X = A || l, ie = v || c, ue = M || u; else return;
            let se = !1;
            const m = D._enterCb = P => {
                se || (se = !0, P ? I(ue, [D]) : I(ie, [D]), K.delayedLeave && K.delayedLeave(), D._enterCb = void 0)
            };
            X ? V(X, [D, m]) : m()
        }, leave(D, X) {
            const ie = String(e.key);
            if (D._enterCb && D._enterCb(!0), n.isUnmounting) return X();
            I(h, [D]);
            let ue = !1;
            const se = D._leaveCb = m => {
                ue || (ue = !0, X(), m ? I(g, [D]) : I(w, [D]), D._leaveCb = void 0, S[ie] === e && delete S[ie])
            };
            S[ie] = e, p ? V(p, [D, se]) : se()
        }, clone(D) {
            return gr(D, t, n, s)
        }
    };
    return K
}

function Ko(e) {
    if (Eo(e)) return e = hn(e), e.children = null, e
}

function sa(e) {
    return Eo(e) ? e.children ? e.children[0] : void 0 : e
}

function _r(e, t) {
    e.shapeFlag & 6 && e.component ? _r(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Wc(e, t = !1, n) {
    let s = [], o = 0;
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
        i.type === _e ? (i.patchFlag & 128 && o++, s = s.concat(Wc(i.children, t, a))) : (t || i.type !== Ct) && s.push(a != null ? hn(i, {key: a}) : i)
    }
    if (o > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
    return s
}

function Ce(e, t) {
    return ge(e) ? (() => Ge({name: e.name}, t, {setup: e}))() : e
}

const cs = e => !!e.type.__asyncLoader, Eo = e => e.type.__isKeepAlive;

function vf(e, t) {
    zc(e, "a", t)
}

function bf(e, t) {
    zc(e, "da", t)
}

function zc(e, t, n = Je) {
    const s = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o;) {
            if (o.isDeactivated) return;
            o = o.parent
        }
        return e()
    });
    if (Mo(t, s, n), n) {
        let o = n.parent;
        for (; o && o.parent;) Eo(o.parent.vnode) && yf(s, t, n, o), o = o.parent
    }
}

function yf(e, t, n, s) {
    const o = Mo(t, e, s, !0);
    Qn(() => {
        Gr(s[t], o)
    }, n)
}

function Mo(e, t, n = Je, s = !1) {
    if (n) {
        const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
            if (n.isUnmounted) return;
            Xn(), zn(n);
            const a = wt(t, n, e, i);
            return On(), Jn(), a
        });
        return s ? o.unshift(r) : o.push(r), r
    }
}

const Yt = e => (t, n = Je) => (!Os || e === "sp") && Mo(e, (...s) => t(...s), n), So = Yt("bm"), Mt = Yt("m"),
    kf = Yt("bu"), qc = Yt("u"), Kc = Yt("bum"), Qn = Yt("um"), wf = Yt("sp"), Cf = Yt("rtg"), Ef = Yt("rtc");

function Mf(e, t = Je) {
    Mo("ec", e, t)
}

const fi = "components", Sf = "directives";

function le(e, t) {
    return hi(fi, e, !0, t) || e
}

const Gc = Symbol.for("v-ndc");

function Tf(e) {
    return Ue(e) ? hi(fi, e, !1) || e : e || Gc
}

function di(e) {
    return hi(Sf, e)
}

function hi(e, t, n = !0, s = !1) {
    const o = st || Je;
    if (o) {
        const r = o.type;
        if (e === fi) {
            const a = od(r, !1);
            if (a && (a === t || a === jt(t) || a === vo(jt(t)))) return r
        }
        const i = oa(o[e] || r[e], t) || oa(o.appContext[e], t);
        return !i && s ? r : i
    }
}

function oa(e, t) {
    return e && (e[t] || e[jt(t)] || e[vo(jt(t))])
}

function ze(e, t, n, s) {
    let o;
    const r = n && n[s];
    if (fe(e) || Ue(e)) {
        o = new Array(e.length);
        for (let i = 0, a = e.length; i < a; i++) o[i] = t(e[i], i, void 0, r && r[i])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, r && r[i])
    } else if (Ze(e)) if (e[Symbol.iterator]) o = Array.from(e, (i, a) => t(i, a, void 0, r && r[a])); else {
        const i = Object.keys(e);
        o = new Array(i.length);
        for (let a = 0, l = i.length; a < l; a++) {
            const c = i[a];
            o[a] = t(e[c], c, a, r && r[a])
        }
    } else o = [];
    return n && (n[s] = o), o
}

function dn(e, t, n = {}, s, o) {
    if (st.isCE || st.parent && cs(st.parent) && st.parent.isCE) return t !== "default" && (n.name = t), Y("slot", n, s && s());
    let r = e[t];
    r && r._c && (r._d = !1), T();
    const i = r && Yc(r(n)),
        a = ye(_e, {key: n.key || i && i.key || `_${t}`}, i || (s ? s() : []), i && e._ === 1 ? 64 : -2);
    return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), r && r._c && (r._d = !0), a
}

function Yc(e) {
    return e.some(t => lo(t) ? !(t.type === Ct || t.type === _e && !Yc(t.children)) : !0) ? e : null
}

const vr = e => e ? lu(e) ? Oo(e) || e.proxy : vr(e.parent) : null, us = Ge(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => vr(e.parent),
    $root: e => vr(e.root),
    $emit: e => e.emit,
    $options: e => pi(e),
    $forceUpdate: e => e.f || (e.f = () => li(e.update)),
    $nextTick: e => e.n || (e.n = ai.bind(e.proxy)),
    $watch: e => pf.bind(e)
}), Go = (e, t) => e !== je && !e.__isScriptSetup && Me(e, t), Of = {
    get({_: e}, t) {
        const {ctx: n, setupState: s, data: o, props: r, accessCache: i, type: a, appContext: l} = e;
        let c;
        if (t[0] !== "$") {
            const w = i[t];
            if (w !== void 0) switch (w) {
                case 1:
                    return s[t];
                case 2:
                    return o[t];
                case 4:
                    return n[t];
                case 3:
                    return r[t]
            } else {
                if (Go(s, t)) return i[t] = 1, s[t];
                if (o !== je && Me(o, t)) return i[t] = 2, o[t];
                if ((c = e.propsOptions[0]) && Me(c, t)) return i[t] = 3, r[t];
                if (n !== je && Me(n, t)) return i[t] = 4, n[t];
                br && (i[t] = 0)
            }
        }
        const u = us[t];
        let h, p;
        if (u) return t === "$attrs" && dt(e, "get", t), u(e);
        if ((h = a.__cssModules) && (h = h[t])) return h;
        if (n !== je && Me(n, t)) return i[t] = 4, n[t];
        if (p = l.config.globalProperties, Me(p, t)) return p[t]
    }, set({_: e}, t, n) {
        const {data: s, setupState: o, ctx: r} = e;
        return Go(o, t) ? (o[t] = n, !0) : s !== je && Me(s, t) ? (s[t] = n, !0) : Me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0)
    }, has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r}}, i) {
        let a;
        return !!n[i] || e !== je && Me(e, i) || Go(t, i) || (a = r[0]) && Me(a, i) || Me(s, i) || Me(us, i) || Me(o.config.globalProperties, i)
    }, defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
};

function ra(e) {
    return fe(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

let br = !0;

function Af(e) {
    const t = pi(e), n = e.proxy, s = e.ctx;
    br = !1, t.beforeCreate && ia(t.beforeCreate, e, "bc");
    const {
        data: o,
        computed: r,
        methods: i,
        watch: a,
        provide: l,
        inject: c,
        created: u,
        beforeMount: h,
        mounted: p,
        beforeUpdate: w,
        updated: g,
        activated: C,
        deactivated: A,
        beforeDestroy: v,
        beforeUnmount: M,
        destroyed: R,
        unmounted: S,
        render: I,
        renderTracked: V,
        renderTriggered: K,
        errorCaptured: D,
        serverPrefetch: X,
        expose: ie,
        inheritAttrs: ue,
        components: se,
        directives: m,
        filters: P
    } = t;
    if (c && Lf(c, s, null), i) for (const W in i) {
        const te = i[W];
        ge(te) && (s[W] = te.bind(n))
    }
    if (o) {
        const W = o.call(n, n);
        Ze(W) && (e.data = Gt(W))
    }
    if (br = !0, r) for (const W in r) {
        const te = r[W], de = ge(te) ? te.bind(n, n) : ge(te.get) ? te.get.bind(n, n) : Ot,
            me = !ge(te) && ge(te.set) ? te.set.bind(n) : Ot, $e = Q({get: de, set: me});
        Object.defineProperty(s, W, {enumerable: !0, configurable: !0, get: () => $e.value, set: Oe => $e.value = Oe})
    }
    if (a) for (const W in a) Xc(a[W], s, n, W);
    if (l) {
        const W = ge(l) ? l.call(n) : l;
        Reflect.ownKeys(W).forEach(te => {
            fs(te, W[te])
        })
    }
    u && ia(u, e, "c");

    function G(W, te) {
        fe(te) ? te.forEach(de => W(de.bind(n))) : te && W(te.bind(n))
    }

    if (G(So, h), G(Mt, p), G(kf, w), G(qc, g), G(vf, C), G(bf, A), G(Mf, D), G(Ef, V), G(Cf, K), G(Kc, M), G(Qn, S), G(wf, X), fe(ie)) if (ie.length) {
        const W = e.exposed || (e.exposed = {});
        ie.forEach(te => {
            Object.defineProperty(W, te, {get: () => n[te], set: de => n[te] = de})
        })
    } else e.exposed || (e.exposed = {});
    I && e.render === Ot && (e.render = I), ue != null && (e.inheritAttrs = ue), se && (e.components = se), m && (e.directives = m)
}

function Lf(e, t, n = Ot) {
    fe(e) && (e = yr(e));
    for (const s in e) {
        const o = e[s];
        let r;
        Ze(o) ? "default" in o ? r = it(o.from || s, o.default, !0) : r = it(o.from || s) : r = it(o), He(r) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: i => r.value = i
        }) : t[s] = r
    }
}

function ia(e, t, n) {
    wt(fe(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Xc(e, t, n, s) {
    const o = s.includes(".") ? Hc(n, s) : () => n[s];
    if (Ue(e)) {
        const r = t[e];
        ge(r) && ft(o, r)
    } else if (ge(e)) ft(o, e.bind(n)); else if (Ze(e)) if (fe(e)) e.forEach(r => Xc(r, t, n, s)); else {
        const r = ge(e.handler) ? e.handler.bind(n) : t[e.handler];
        ge(r) && ft(o, r, e)
    }
}

function pi(e) {
    const t = e.type, {mixins: n, extends: s} = t, {
        mixins: o,
        optionsCache: r,
        config: {optionMergeStrategies: i}
    } = e.appContext, a = r.get(t);
    let l;
    return a ? l = a : !o.length && !n && !s ? l = t : (l = {}, o.length && o.forEach(c => ao(l, c, i, !0)), ao(l, t, i)), Ze(t) && r.set(t, l), l
}

function ao(e, t, n, s = !1) {
    const {mixins: o, extends: r} = t;
    r && ao(e, r, n, !0), o && o.forEach(i => ao(e, i, n, !0));
    for (const i in t) if (!(s && i === "expose")) {
        const a = If[i] || n && n[i];
        e[i] = a ? a(e[i], t[i]) : t[i]
    }
    return e
}

const If = {
    data: aa,
    props: la,
    emits: la,
    methods: ls,
    computed: ls,
    beforeCreate: at,
    created: at,
    beforeMount: at,
    mounted: at,
    beforeUpdate: at,
    updated: at,
    beforeDestroy: at,
    beforeUnmount: at,
    destroyed: at,
    unmounted: at,
    activated: at,
    deactivated: at,
    errorCaptured: at,
    serverPrefetch: at,
    components: ls,
    directives: ls,
    watch: $f,
    provide: aa,
    inject: Pf
};

function aa(e, t) {
    return t ? e ? function () {
        return Ge(ge(e) ? e.call(this, this) : e, ge(t) ? t.call(this, this) : t)
    } : t : e
}

function Pf(e, t) {
    return ls(yr(e), yr(t))
}

function yr(e) {
    if (fe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function at(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function ls(e, t) {
    return e ? Ge(Object.create(null), e, t) : t
}

function la(e, t) {
    return e ? fe(e) && fe(t) ? [...new Set([...e, ...t])] : Ge(Object.create(null), ra(e), ra(t ?? {})) : t
}

function $f(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Ge(Object.create(null), e);
    for (const s in t) n[s] = at(e[s], t[s]);
    return n
}

function Jc() {
    return {
        app: null,
        config: {
            isNativeTag: i0,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

let Rf = 0;

function Nf(e, t) {
    return function (s, o = null) {
        ge(s) || (s = Ge({}, s)), o != null && !Ze(o) && (o = null);
        const r = Jc(), i = new Set;
        let a = !1;
        const l = r.app = {
            _uid: Rf++,
            _component: s,
            _props: o,
            _container: null,
            _context: r,
            _instance: null,
            version: ld,
            get config() {
                return r.config
            },
            set config(c) {
            },
            use(c, ...u) {
                return i.has(c) || (c && ge(c.install) ? (i.add(c), c.install(l, ...u)) : ge(c) && (i.add(c), c(l, ...u))), l
            },
            mixin(c) {
                return r.mixins.includes(c) || r.mixins.push(c), l
            },
            component(c, u) {
                return u ? (r.components[c] = u, l) : r.components[c]
            },
            directive(c, u) {
                return u ? (r.directives[c] = u, l) : r.directives[c]
            },
            mount(c, u, h) {
                if (!a) {
                    const p = Y(s, o);
                    return p.appContext = r, u && t ? t(p, c) : e(p, c, h), a = !0, l._container = c, c.__vue_app__ = l, Oo(p.component) || p.component.proxy
                }
            },
            unmount() {
                a && (e(null, l._container), delete l._container.__vue_app__)
            },
            provide(c, u) {
                return r.provides[c] = u, l
            },
            runWithContext(c) {
                Ss = l;
                try {
                    return c()
                } finally {
                    Ss = null
                }
            }
        };
        return l
    }
}

let Ss = null;

function fs(e, t) {
    if (Je) {
        let n = Je.provides;
        const s = Je.parent && Je.parent.provides;
        s === n && (n = Je.provides = Object.create(s)), n[e] = t
    }
}

function it(e, t, n = !1) {
    const s = Je || st;
    if (s || Ss) {
        const o = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Ss._context.provides;
        if (o && e in o) return o[e];
        if (arguments.length > 1) return n && ge(t) ? t.call(s && s.proxy) : t
    }
}

function Ff() {
    return !!(Je || st || Ss)
}

function xf(e, t, n, s = !1) {
    const o = {}, r = {};
    so(r, To, 1), e.propsDefaults = Object.create(null), Qc(e, t, o, r);
    for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
    n ? e.props = s ? o : K0(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r
}

function Df(e, t, n, s) {
    const {props: o, attrs: r, vnode: {patchFlag: i}} = e, a = Ee(o), [l] = e.propsOptions;
    let c = !1;
    if ((s || i > 0) && !(i & 16)) {
        if (i & 8) {
            const u = e.vnode.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                let p = u[h];
                if (wo(e.emitsOptions, p)) continue;
                const w = t[p];
                if (l) if (Me(r, p)) w !== r[p] && (r[p] = w, c = !0); else {
                    const g = jt(p);
                    o[g] = kr(l, a, g, w, e, !1)
                } else w !== r[p] && (r[p] = w, c = !0)
            }
        }
    } else {
        Qc(e, t, o, r) && (c = !0);
        let u;
        for (const h in a) (!t || !Me(t, h) && ((u = In(h)) === h || !Me(t, u))) && (l ? n && (n[h] !== void 0 || n[u] !== void 0) && (o[h] = kr(l, a, h, void 0, e, !0)) : delete o[h]);
        if (r !== a) for (const h in r) (!t || !Me(t, h)) && (delete r[h], c = !0)
    }
    c && Kt(e, "set", "$attrs")
}

function Qc(e, t, n, s) {
    const [o, r] = e.propsOptions;
    let i = !1, a;
    if (t) for (let l in t) {
        if (Ks(l)) continue;
        const c = t[l];
        let u;
        o && Me(o, u = jt(l)) ? !r || !r.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : wo(e.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, i = !0)
    }
    if (r) {
        const l = Ee(n), c = a || je;
        for (let u = 0; u < r.length; u++) {
            const h = r[u];
            n[h] = kr(o, l, h, c[h], e, !Me(c, h))
        }
    }
    return i
}

function kr(e, t, n, s, o, r) {
    const i = e[n];
    if (i != null) {
        const a = Me(i, "default");
        if (a && s === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && ge(l)) {
                const {propsDefaults: c} = o;
                n in c ? s = c[n] : (zn(o), s = c[n] = l.call(null, t), On())
            } else s = l
        }
        i[0] && (r && !a ? s = !1 : i[1] && (s === "" || s === In(n)) && (s = !0))
    }
    return s
}

function eu(e, t, n = !1) {
    const s = t.propsCache, o = s.get(e);
    if (o) return o;
    const r = e.props, i = {}, a = [];
    let l = !1;
    if (!ge(e)) {
        const u = h => {
            l = !0;
            const [p, w] = eu(h, t, !0);
            Ge(i, p), w && a.push(...w)
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    if (!r && !l) return Ze(e) && s.set(e, Zn), Zn;
    if (fe(r)) for (let u = 0; u < r.length; u++) {
        const h = jt(r[u]);
        ca(h) && (i[h] = je)
    } else if (r) for (const u in r) {
        const h = jt(u);
        if (ca(h)) {
            const p = r[u], w = i[h] = fe(p) || ge(p) ? {type: p} : Ge({}, p);
            if (w) {
                const g = da(Boolean, w.type), C = da(String, w.type);
                w[0] = g > -1, w[1] = C < 0 || g < C, (g > -1 || Me(w, "default")) && a.push(h)
            }
        }
    }
    const c = [i, a];
    return Ze(e) && s.set(e, c), c
}

function ca(e) {
    return e[0] !== "$"
}

function ua(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}

function fa(e, t) {
    return ua(e) === ua(t)
}

function da(e, t) {
    return fe(t) ? t.findIndex(n => fa(n, e)) : ge(t) && fa(t, e) ? 0 : -1
}

const tu = e => e[0] === "_" || e === "$stable", mi = e => fe(e) ? e.map(Nt) : [Nt(e)], jf = (e, t, n) => {
    if (t._n) return t;
    const s = Ne((...o) => mi(t(...o)), n);
    return s._c = !1, s
}, nu = (e, t, n) => {
    const s = e._ctx;
    for (const o in e) {
        if (tu(o)) continue;
        const r = e[o];
        if (ge(r)) t[o] = jf(o, r, s); else if (r != null) {
            const i = mi(r);
            t[o] = () => i
        }
    }
}, su = (e, t) => {
    const n = mi(t);
    e.slots.default = () => n
}, Zf = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = Ee(t), so(t, "_", n)) : nu(t, e.slots = {})
    } else e.slots = {}, t && su(e, t);
    so(e.slots, To, 1)
}, Bf = (e, t, n) => {
    const {vnode: s, slots: o} = e;
    let r = !0, i = je;
    if (s.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? r = !1 : (Ge(o, t), !n && a === 1 && delete o._) : (r = !t.$stable, nu(t, o)), i = t
    } else t && (su(e, t), i = {default: 1});
    if (r) for (const a in o) !tu(a) && !(a in i) && delete o[a]
};

function wr(e, t, n, s, o = !1) {
    if (fe(e)) {
        e.forEach((p, w) => wr(p, t && (fe(t) ? t[w] : t), n, s, o));
        return
    }
    if (cs(s) && !o) return;
    const r = s.shapeFlag & 4 ? Oo(s.component) || s.component.proxy : s.el, i = o ? null : r, {i: a, r: l} = e,
        c = t && t.r, u = a.refs === je ? a.refs = {} : a.refs, h = a.setupState;
    if (c != null && c !== l && (Ue(c) ? (u[c] = null, Me(h, c) && (h[c] = null)) : He(c) && (c.value = null)), ge(l)) cn(l, a, 12, [i, u]); else {
        const p = Ue(l), w = He(l);
        if (p || w) {
            const g = () => {
                if (e.f) {
                    const C = p ? Me(h, l) ? h[l] : u[l] : l.value;
                    o ? fe(C) && Gr(C, r) : fe(C) ? C.includes(r) || C.push(r) : p ? (u[l] = [r], Me(h, l) && (h[l] = u[l])) : (l.value = [r], e.k && (u[e.k] = l.value))
                } else p ? (u[l] = i, Me(h, l) && (h[l] = i)) : w && (l.value = i, e.k && (u[e.k] = i))
            };
            i ? (g.id = -1, ut(g, n)) : g()
        }
    }
}

const ut = hf;

function Hf(e) {
    return Uf(e)
}

function Uf(e, t) {
    const n = fr();
    n.__VUE__ = !0;
    const {
            insert: s,
            remove: o,
            patchProp: r,
            createElement: i,
            createText: a,
            createComment: l,
            setText: c,
            setElementText: u,
            parentNode: h,
            nextSibling: p,
            setScopeId: w = Ot,
            insertStaticContent: g
        } = e, C = (y, f, d, b = null, O = null, $ = null, B = !1, z = null, J = !!f.dynamicChildren) => {
            if (y === f) return;
            y && !Cn(y, f) && (b = j(y), Oe(y, O, $, !0), y = null), f.patchFlag === -2 && (J = !1, f.dynamicChildren = null);
            const {type: H, ref: L, shapeFlag: F} = f;
            switch (H) {
                case $s:
                    A(y, f, d, b);
                    break;
                case Ct:
                    v(y, f, d, b);
                    break;
                case Ys:
                    y == null && M(f, d, b, B);
                    break;
                case _e:
                    se(y, f, d, b, O, $, B, z, J);
                    break;
                default:
                    F & 1 ? I(y, f, d, b, O, $, B, z, J) : F & 6 ? m(y, f, d, b, O, $, B, z, J) : (F & 64 || F & 128) && H.process(y, f, d, b, O, $, B, z, J, ee)
            }
            L != null && O && wr(L, y && y.ref, $, f || y, !f)
        }, A = (y, f, d, b) => {
            if (y == null) s(f.el = a(f.children), d, b); else {
                const O = f.el = y.el;
                f.children !== y.children && c(O, f.children)
            }
        }, v = (y, f, d, b) => {
            y == null ? s(f.el = l(f.children || ""), d, b) : f.el = y.el
        }, M = (y, f, d, b) => {
            [y.el, y.anchor] = g(y.children, f, d, b, y.el, y.anchor)
        }, R = ({el: y, anchor: f}, d, b) => {
            let O;
            for (; y && y !== f;) O = p(y), s(y, d, b), y = O;
            s(f, d, b)
        }, S = ({el: y, anchor: f}) => {
            let d;
            for (; y && y !== f;) d = p(y), o(y), y = d;
            o(f)
        }, I = (y, f, d, b, O, $, B, z, J) => {
            B = B || f.type === "svg", y == null ? V(f, d, b, O, $, B, z, J) : X(y, f, O, $, B, z, J)
        }, V = (y, f, d, b, O, $, B, z) => {
            let J, H;
            const {type: L, props: F, shapeFlag: ae, transition: ce, dirs: ve} = y;
            if (J = y.el = i(y.type, $, F && F.is, F), ae & 8 ? u(J, y.children) : ae & 16 && D(y.children, J, null, b, O, $ && L !== "foreignObject", B, z), ve && vn(y, null, b, "created"), K(J, y, y.scopeId, B, b), F) {
                for (const ke in F) ke !== "value" && !Ks(ke) && r(J, ke, null, F[ke], $, y.children, b, O, De);
                "value" in F && r(J, "value", null, F.value), (H = F.onVnodeBeforeMount) && Pt(H, b, y)
            }
            ve && vn(y, null, b, "beforeMount");
            const Ae = (!O || O && !O.pendingBranch) && ce && !ce.persisted;
            Ae && ce.beforeEnter(J), s(J, f, d), ((H = F && F.onVnodeMounted) || Ae || ve) && ut(() => {
                H && Pt(H, b, y), Ae && ce.enter(J), ve && vn(y, null, b, "mounted")
            }, O)
        }, K = (y, f, d, b, O) => {
            if (d && w(y, d), b) for (let $ = 0; $ < b.length; $++) w(y, b[$]);
            if (O) {
                let $ = O.subTree;
                if (f === $) {
                    const B = O.vnode;
                    K(y, B, B.scopeId, B.slotScopeIds, O.parent)
                }
            }
        }, D = (y, f, d, b, O, $, B, z, J = 0) => {
            for (let H = J; H < y.length; H++) {
                const L = y[H] = z ? on(y[H]) : Nt(y[H]);
                C(null, L, f, d, b, O, $, B, z)
            }
        }, X = (y, f, d, b, O, $, B) => {
            const z = f.el = y.el;
            let {patchFlag: J, dynamicChildren: H, dirs: L} = f;
            J |= y.patchFlag & 16;
            const F = y.props || je, ae = f.props || je;
            let ce;
            d && bn(d, !1), (ce = ae.onVnodeBeforeUpdate) && Pt(ce, d, f, y), L && vn(f, y, d, "beforeUpdate"), d && bn(d, !0);
            const ve = O && f.type !== "foreignObject";
            if (H ? ie(y.dynamicChildren, H, z, d, b, ve, $) : B || te(y, f, z, null, d, b, ve, $, !1), J > 0) {
                if (J & 16) ue(z, f, F, ae, d, b, O); else if (J & 2 && F.class !== ae.class && r(z, "class", null, ae.class, O), J & 4 && r(z, "style", F.style, ae.style, O), J & 8) {
                    const Ae = f.dynamicProps;
                    for (let ke = 0; ke < Ae.length; ke++) {
                        const Be = Ae[ke], yt = F[Be], Pn = ae[Be];
                        (Pn !== yt || Be === "value") && r(z, Be, yt, Pn, O, y.children, d, b, De)
                    }
                }
                J & 1 && y.children !== f.children && u(z, f.children)
            } else !B && H == null && ue(z, f, F, ae, d, b, O);
            ((ce = ae.onVnodeUpdated) || L) && ut(() => {
                ce && Pt(ce, d, f, y), L && vn(f, y, d, "updated")
            }, b)
        }, ie = (y, f, d, b, O, $, B) => {
            for (let z = 0; z < f.length; z++) {
                const J = y[z], H = f[z], L = J.el && (J.type === _e || !Cn(J, H) || J.shapeFlag & 70) ? h(J.el) : d;
                C(J, H, L, null, b, O, $, B, !0)
            }
        }, ue = (y, f, d, b, O, $, B) => {
            if (d !== b) {
                if (d !== je) for (const z in d) !Ks(z) && !(z in b) && r(y, z, d[z], null, B, f.children, O, $, De);
                for (const z in b) {
                    if (Ks(z)) continue;
                    const J = b[z], H = d[z];
                    J !== H && z !== "value" && r(y, z, H, J, B, f.children, O, $, De)
                }
                "value" in b && r(y, "value", d.value, b.value)
            }
        }, se = (y, f, d, b, O, $, B, z, J) => {
            const H = f.el = y ? y.el : a(""), L = f.anchor = y ? y.anchor : a("");
            let {patchFlag: F, dynamicChildren: ae, slotScopeIds: ce} = f;
            ce && (z = z ? z.concat(ce) : ce), y == null ? (s(H, d, b), s(L, d, b), D(f.children, d, L, O, $, B, z, J)) : F > 0 && F & 64 && ae && y.dynamicChildren ? (ie(y.dynamicChildren, ae, d, O, $, B, z), (f.key != null || O && f === O.subTree) && gi(y, f, !0)) : te(y, f, d, L, O, $, B, z, J)
        }, m = (y, f, d, b, O, $, B, z, J) => {
            f.slotScopeIds = z, y == null ? f.shapeFlag & 512 ? O.ctx.activate(f, d, b, B, J) : P(f, d, b, O, $, B, J) : x(y, f, J)
        }, P = (y, f, d, b, O, $, B) => {
            const z = y.component = Qf(y, b, O);
            if (Eo(y) && (z.ctx.renderer = ee), ed(z), z.asyncDep) {
                if (O && O.registerDep(z, G), !y.el) {
                    const J = z.subTree = Y(Ct);
                    v(null, J, f, d)
                }
                return
            }
            G(z, y, f, d, O, $, B)
        }, x = (y, f, d) => {
            const b = f.component = y.component;
            if (uf(y, f, d)) if (b.asyncDep && !b.asyncResolved) {
                W(b, f, d);
                return
            } else b.next = f, sf(b.update), b.update(); else f.el = y.el, b.vnode = f
        }, G = (y, f, d, b, O, $, B) => {
            const z = () => {
                if (y.isMounted) {
                    let {next: L, bu: F, u: ae, parent: ce, vnode: ve} = y, Ae = L, ke;
                    bn(y, !1), L ? (L.el = ve.el, W(y, L, B)) : L = ve, F && Gs(F), (ke = L.props && L.props.onVnodeBeforeUpdate) && Pt(ke, ce, L, ve), bn(y, !0);
                    const Be = qo(y), yt = y.subTree;
                    y.subTree = Be, C(yt, Be, h(yt.el), j(yt), y, O, $), L.el = Be.el, Ae === null && ff(y, Be.el), ae && ut(ae, O), (ke = L.props && L.props.onVnodeUpdated) && ut(() => Pt(ke, ce, L, ve), O)
                } else {
                    let L;
                    const {el: F, props: ae} = f, {bm: ce, m: ve, parent: Ae} = y, ke = cs(f);
                    if (bn(y, !1), ce && Gs(ce), !ke && (L = ae && ae.onVnodeBeforeMount) && Pt(L, Ae, f), bn(y, !0), F && re) {
                        const Be = () => {
                            y.subTree = qo(y), re(F, y.subTree, y, O, null)
                        };
                        ke ? f.type.__asyncLoader().then(() => !y.isUnmounted && Be()) : Be()
                    } else {
                        const Be = y.subTree = qo(y);
                        C(null, Be, d, b, y, O, $), f.el = Be.el
                    }
                    if (ve && ut(ve, O), !ke && (L = ae && ae.onVnodeMounted)) {
                        const Be = f;
                        ut(() => Pt(L, Ae, Be), O)
                    }
                    (f.shapeFlag & 256 || Ae && cs(Ae.vnode) && Ae.vnode.shapeFlag & 256) && y.a && ut(y.a, O), y.isMounted = !0, f = d = b = null
                }
            }, J = y.effect = new ei(z, () => li(H), y.scope), H = y.update = () => J.run();
            H.id = y.uid, bn(y, !0), H()
        }, W = (y, f, d) => {
            f.component = y;
            const b = y.vnode.props;
            y.vnode = f, y.next = null, Df(y, f.props, b, d), Bf(y, f.children, d), Xn(), ta(), Jn()
        }, te = (y, f, d, b, O, $, B, z, J = !1) => {
            const H = y && y.children, L = y ? y.shapeFlag : 0, F = f.children, {patchFlag: ae, shapeFlag: ce} = f;
            if (ae > 0) {
                if (ae & 128) {
                    me(H, F, d, b, O, $, B, z, J);
                    return
                } else if (ae & 256) {
                    de(H, F, d, b, O, $, B, z, J);
                    return
                }
            }
            ce & 8 ? (L & 16 && De(H, O, $), F !== H && u(d, F)) : L & 16 ? ce & 16 ? me(H, F, d, b, O, $, B, z, J) : De(H, O, $, !0) : (L & 8 && u(d, ""), ce & 16 && D(F, d, b, O, $, B, z, J))
        }, de = (y, f, d, b, O, $, B, z, J) => {
            y = y || Zn, f = f || Zn;
            const H = y.length, L = f.length, F = Math.min(H, L);
            let ae;
            for (ae = 0; ae < F; ae++) {
                const ce = f[ae] = J ? on(f[ae]) : Nt(f[ae]);
                C(y[ae], ce, d, null, O, $, B, z, J)
            }
            H > L ? De(y, O, $, !0, !1, F) : D(f, d, b, O, $, B, z, J, F)
        }, me = (y, f, d, b, O, $, B, z, J) => {
            let H = 0;
            const L = f.length;
            let F = y.length - 1, ae = L - 1;
            for (; H <= F && H <= ae;) {
                const ce = y[H], ve = f[H] = J ? on(f[H]) : Nt(f[H]);
                if (Cn(ce, ve)) C(ce, ve, d, null, O, $, B, z, J); else break;
                H++
            }
            for (; H <= F && H <= ae;) {
                const ce = y[F], ve = f[ae] = J ? on(f[ae]) : Nt(f[ae]);
                if (Cn(ce, ve)) C(ce, ve, d, null, O, $, B, z, J); else break;
                F--, ae--
            }
            if (H > F) {
                if (H <= ae) {
                    const ce = ae + 1, ve = ce < L ? f[ce].el : b;
                    for (; H <= ae;) C(null, f[H] = J ? on(f[H]) : Nt(f[H]), d, ve, O, $, B, z, J), H++
                }
            } else if (H > ae) for (; H <= F;) Oe(y[H], O, $, !0), H++; else {
                const ce = H, ve = H, Ae = new Map;
                for (H = ve; H <= ae; H++) {
                    const mt = f[H] = J ? on(f[H]) : Nt(f[H]);
                    mt.key != null && Ae.set(mt.key, H)
                }
                let ke, Be = 0;
                const yt = ae - ve + 1;
                let Pn = !1, Vi = 0;
                const ts = new Array(yt);
                for (H = 0; H < yt; H++) ts[H] = 0;
                for (H = ce; H <= F; H++) {
                    const mt = y[H];
                    if (Be >= yt) {
                        Oe(mt, O, $, !0);
                        continue
                    }
                    let It;
                    if (mt.key != null) It = Ae.get(mt.key); else for (ke = ve; ke <= ae; ke++) if (ts[ke - ve] === 0 && Cn(mt, f[ke])) {
                        It = ke;
                        break
                    }
                    It === void 0 ? Oe(mt, O, $, !0) : (ts[It - ve] = H + 1, It >= Vi ? Vi = It : Pn = !0, C(mt, f[It], d, null, O, $, B, z, J), Be++)
                }
                const Wi = Pn ? Vf(ts) : Zn;
                for (ke = Wi.length - 1, H = yt - 1; H >= 0; H--) {
                    const mt = ve + H, It = f[mt], zi = mt + 1 < L ? f[mt + 1].el : b;
                    ts[H] === 0 ? C(null, It, d, zi, O, $, B, z, J) : Pn && (ke < 0 || H !== Wi[ke] ? $e(It, d, zi, 2) : ke--)
                }
            }
        }, $e = (y, f, d, b, O = null) => {
            const {el: $, type: B, transition: z, children: J, shapeFlag: H} = y;
            if (H & 6) {
                $e(y.component.subTree, f, d, b);
                return
            }
            if (H & 128) {
                y.suspense.move(f, d, b);
                return
            }
            if (H & 64) {
                B.move(y, f, d, ee);
                return
            }
            if (B === _e) {
                s($, f, d);
                for (let F = 0; F < J.length; F++) $e(J[F], f, d, b);
                s(y.anchor, f, d);
                return
            }
            if (B === Ys) {
                R(y, f, d);
                return
            }
            if (b !== 2 && H & 1 && z) if (b === 0) z.beforeEnter($), s($, f, d), ut(() => z.enter($), O); else {
                const {leave: F, delayLeave: ae, afterLeave: ce} = z, ve = () => s($, f, d), Ae = () => {
                    F($, () => {
                        ve(), ce && ce()
                    })
                };
                ae ? ae($, ve, Ae) : Ae()
            } else s($, f, d)
        }, Oe = (y, f, d, b = !1, O = !1) => {
            const {type: $, props: B, ref: z, children: J, dynamicChildren: H, shapeFlag: L, patchFlag: F, dirs: ae} = y;
            if (z != null && wr(z, null, d, y, !0), L & 256) {
                f.ctx.deactivate(y);
                return
            }
            const ce = L & 1 && ae, ve = !cs(y);
            let Ae;
            if (ve && (Ae = B && B.onVnodeBeforeUnmount) && Pt(Ae, f, y), L & 6) bt(y.component, d, b); else {
                if (L & 128) {
                    y.suspense.unmount(d, b);
                    return
                }
                ce && vn(y, null, f, "beforeUnmount"), L & 64 ? y.type.remove(y, f, d, O, ee, b) : H && ($ !== _e || F > 0 && F & 64) ? De(H, f, d, !1, !0) : ($ === _e && F & 384 || !O && L & 16) && De(J, f, d), b && Ye(y)
            }
            (ve && (Ae = B && B.onVnodeUnmounted) || ce) && ut(() => {
                Ae && Pt(Ae, f, y), ce && vn(y, null, f, "unmounted")
            }, d)
        }, Ye = y => {
            const {type: f, el: d, anchor: b, transition: O} = y;
            if (f === _e) {
                Xe(d, b);
                return
            }
            if (f === Ys) {
                S(y);
                return
            }
            const $ = () => {
                o(d), O && !O.persisted && O.afterLeave && O.afterLeave()
            };
            if (y.shapeFlag & 1 && O && !O.persisted) {
                const {leave: B, delayLeave: z} = O, J = () => B(d, $);
                z ? z(y.el, $, J) : J()
            } else $()
        }, Xe = (y, f) => {
            let d;
            for (; y !== f;) d = p(y), o(y), y = d;
            o(f)
        }, bt = (y, f, d) => {
            const {bum: b, scope: O, update: $, subTree: B, um: z} = y;
            b && Gs(b), O.stop(), $ && ($.active = !1, Oe(B, y, f, d)), z && ut(z, f), ut(() => {
                y.isUnmounted = !0
            }, f), f && f.pendingBranch && !f.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve())
        }, De = (y, f, d, b = !1, O = !1, $ = 0) => {
            for (let B = $; B < y.length; B++) Oe(y[B], f, d, b, O)
        }, j = y => y.shapeFlag & 6 ? j(y.component.subTree) : y.shapeFlag & 128 ? y.suspense.next() : p(y.anchor || y.el),
        ne = (y, f, d) => {
            y == null ? f._vnode && Oe(f._vnode, null, null, !0) : C(f._vnode || null, y, f, null, null, null, d), ta(), Dc(), f._vnode = y
        }, ee = {p: C, um: Oe, m: $e, r: Ye, mt: P, mc: D, pc: te, pbc: ie, n: j, o: e};
    let Z, re;
    return t && ([Z, re] = t(ee)), {render: ne, hydrate: Z, createApp: Nf(ne, Z)}
}

function bn({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function gi(e, t, n = !1) {
    const s = e.children, o = t.children;
    if (fe(s) && fe(o)) for (let r = 0; r < s.length; r++) {
        const i = s[r];
        let a = o[r];
        a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = on(o[r]), a.el = i.el), n || gi(i, a)), a.type === $s && (a.el = i.el)
    }
}

function Vf(e) {
    const t = e.slice(), n = [0];
    let s, o, r, i, a;
    const l = e.length;
    for (s = 0; s < l; s++) {
        const c = e[s];
        if (c !== 0) {
            if (o = n[n.length - 1], e[o] < c) {
                t[s] = o, n.push(s);
                continue
            }
            for (r = 0, i = n.length - 1; r < i;) a = r + i >> 1, e[n[a]] < c ? r = a + 1 : i = a;
            c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s)
        }
    }
    for (r = n.length, i = n[r - 1]; r-- > 0;) n[r] = i, i = t[i];
    return n
}

const Wf = e => e.__isTeleport, ds = e => e && (e.disabled || e.disabled === ""),
    ha = e => typeof SVGElement < "u" && e instanceof SVGElement, Cr = (e, t) => {
        const n = e && e.to;
        return Ue(n) ? t ? t(n) : null : n
    }, zf = {
        __isTeleport: !0, process(e, t, n, s, o, r, i, a, l, c) {
            const {mc: u, pc: h, pbc: p, o: {insert: w, querySelector: g, createText: C, createComment: A}} = c,
                v = ds(t.props);
            let {shapeFlag: M, children: R, dynamicChildren: S} = t;
            if (e == null) {
                const I = t.el = C(""), V = t.anchor = C("");
                w(I, n, s), w(V, n, s);
                const K = t.target = Cr(t.props, g), D = t.targetAnchor = C("");
                K && (w(D, K), i = i || ha(K));
                const X = (ie, ue) => {
                    M & 16 && u(R, ie, ue, o, r, i, a, l)
                };
                v ? X(n, V) : K && X(K, D)
            } else {
                t.el = e.el;
                const I = t.anchor = e.anchor, V = t.target = e.target, K = t.targetAnchor = e.targetAnchor,
                    D = ds(e.props), X = D ? n : V, ie = D ? I : K;
                if (i = i || ha(V), S ? (p(e.dynamicChildren, S, X, o, r, i, a), gi(e, t, !0)) : l || h(e, t, X, ie, o, r, i, a, !1), v) D || Vs(t, n, I, c, 1); else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const ue = t.target = Cr(t.props, g);
                    ue && Vs(t, ue, null, c, 0)
                } else D && Vs(t, V, K, c, 1)
            }
            ru(t)
        }, remove(e, t, n, s, {um: o, o: {remove: r}}, i) {
            const {shapeFlag: a, children: l, anchor: c, targetAnchor: u, target: h, props: p} = e;
            if (h && r(u), (i || !ds(p)) && (r(c), a & 16)) for (let w = 0; w < l.length; w++) {
                const g = l[w];
                o(g, t, n, !0, !!g.dynamicChildren)
            }
        }, move: Vs, hydrate: qf
    };

function Vs(e, t, n, {o: {insert: s}, m: o}, r = 2) {
    r === 0 && s(e.targetAnchor, t, n);
    const {el: i, anchor: a, shapeFlag: l, children: c, props: u} = e, h = r === 2;
    if (h && s(i, t, n), (!h || ds(u)) && l & 16) for (let p = 0; p < c.length; p++) o(c[p], t, n, 2);
    h && s(a, t, n)
}

function qf(e, t, n, s, o, r, {o: {nextSibling: i, parentNode: a, querySelector: l}}, c) {
    const u = t.target = Cr(t.props, l);
    if (u) {
        const h = u._lpa || u.firstChild;
        if (t.shapeFlag & 16) if (ds(t.props)) t.anchor = c(i(e), t, a(e), n, s, o, r), t.targetAnchor = h; else {
            t.anchor = i(e);
            let p = h;
            for (; p;) if (p = i(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
                t.targetAnchor = p, u._lpa = t.targetAnchor && i(t.targetAnchor);
                break
            }
            c(h, t, u, n, s, o, r)
        }
        ru(t)
    }
    return t.anchor && i(t.anchor)
}

const ou = zf;

function ru(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
        t.ut()
    }
}

const _e = Symbol.for("v-fgt"), $s = Symbol.for("v-txt"), Ct = Symbol.for("v-cmt"), Ys = Symbol.for("v-stc"), hs = [];
let Tt = null;

function T(e = !1) {
    hs.push(Tt = e ? null : [])
}

function Kf() {
    hs.pop(), Tt = hs[hs.length - 1] || null
}

let Ts = 1;

function pa(e) {
    Ts += e
}

function iu(e) {
    return e.dynamicChildren = Ts > 0 ? Tt || Zn : null, Kf(), Ts > 0 && Tt && Tt.push(e), e
}

function N(e, t, n, s, o, r) {
    return iu(k(e, t, n, s, o, r, !0))
}

function ye(e, t, n, s, o) {
    return iu(Y(e, t, n, s, o, !0))
}

function lo(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function Cn(e, t) {
    return e.type === t.type && e.key === t.key
}

const To = "__vInternal", au = ({key: e}) => e ?? null, Xs = ({
                                                                  ref: e,
                                                                  ref_key: t,
                                                                  ref_for: n
                                                              }) => (typeof e == "number" && (e = "" + e), e != null ? Ue(e) || He(e) || ge(e) ? {
    i: st,
    r: e,
    k: t,
    f: !!n
} : e : null);

function k(e, t = null, n = null, s = 0, o = null, r = e === _e ? 0 : 1, i = !1, a = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && au(t),
        ref: t && Xs(t),
        scopeId: Co,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: s,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: st
    };
    return a ? (_i(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ue(n) ? 8 : 16), Ts > 0 && !i && Tt && (l.patchFlag > 0 || r & 6) && l.patchFlag !== 32 && Tt.push(l), l
}

const Y = Gf;

function Gf(e, t = null, n = null, s = 0, o = null, r = !1) {
    if ((!e || e === Gc) && (e = Ct), lo(e)) {
        const a = hn(e, t, !0);
        return n && _i(a, n), Ts > 0 && !r && Tt && (a.shapeFlag & 6 ? Tt[Tt.indexOf(e)] = a : Tt.push(a)), a.patchFlag |= -2, a
    }
    if (rd(e) && (e = e.__vccOpts), t) {
        t = Yf(t);
        let {class: a, style: l} = t;
        a && !Ue(a) && (t.class = qe(a)), Ze(l) && (Lc(l) && !fe(l) && (l = Ge({}, l)), t.style = Ie(l))
    }
    const i = Ue(e) ? 1 : df(e) ? 128 : Wf(e) ? 64 : Ze(e) ? 4 : ge(e) ? 2 : 0;
    return k(e, t, n, s, o, i, r, !0)
}

function Yf(e) {
    return e ? Lc(e) || To in e ? Ge({}, e) : e : null
}

function hn(e, t, n = !1) {
    const {props: s, ref: o, patchFlag: r, children: i} = e, a = t ? Er(s || {}, t) : s;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && au(a),
        ref: t && t.ref ? n && o ? fe(o) ? o.concat(Xs(t)) : [o, Xs(t)] : Xs(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== _e ? r === -1 ? 16 : r | 16 : r,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && hn(e.ssContent),
        ssFallback: e.ssFallback && hn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function Re(e = " ", t = 0) {
    return Y($s, null, e, t)
}

function B9(e, t) {
    const n = Y(Ys, null, e);
    return n.staticCount = t, n
}

function be(e = "", t = !1) {
    return t ? (T(), ye(Ct, null, e)) : Y(Ct, null, e)
}

function Nt(e) {
    return e == null || typeof e == "boolean" ? Y(Ct) : fe(e) ? Y(_e, null, e.slice()) : typeof e == "object" ? on(e) : Y($s, null, String(e))
}

function on(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : hn(e)
}

function _i(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null) t = null; else if (fe(t)) n = 16; else if (typeof t == "object") if (s & 65) {
        const o = t.default;
        o && (o._c && (o._d = !1), _i(e, o()), o._c && (o._d = !0));
        return
    } else {
        n = 32;
        const o = t._;
        !o && !(To in t) ? t._ctx = st : o === 3 && st && (st.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else ge(t) ? (t = {default: t, _ctx: st}, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Re(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function Er(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const o in s) if (o === "class") t.class !== s.class && (t.class = qe([t.class, s.class])); else if (o === "style") t.style = Ie([t.style, s.style]); else if (mo(o)) {
            const r = t[o], i = s[o];
            i && r !== i && !(fe(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i)
        } else o !== "" && (t[o] = s[o])
    }
    return t
}

function Pt(e, t, n, s = null) {
    wt(e, t, 7, [n, s])
}

const Xf = Jc();
let Jf = 0;

function Qf(e, t, n) {
    const s = e.type, o = (t ? t.appContext : e.appContext) || Xf, r = {
        uid: Jf++,
        vnode: e,
        type: s,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new _c(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: eu(s, o),
        emitsOptions: Zc(s, o),
        emit: null,
        emitted: null,
        propsDefaults: je,
        inheritAttrs: s.inheritAttrs,
        ctx: je,
        data: je,
        props: je,
        attrs: je,
        slots: je,
        refs: je,
        setupState: je,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return r.ctx = {_: r}, r.root = t ? t.root : r, r.emit = af.bind(null, r), e.ce && e.ce(r), r
}

let Je = null;
const Wn = () => Je || st;
let vi, $n, ma = "__VUE_INSTANCE_SETTERS__";
($n = fr()[ma]) || ($n = fr()[ma] = []), $n.push(e => Je = e), vi = e => {
    $n.length > 1 ? $n.forEach(t => t(e)) : $n[0](e)
};
const zn = e => {
    vi(e), e.scope.on()
}, On = () => {
    Je && Je.scope.off(), vi(null)
};

function lu(e) {
    return e.vnode.shapeFlag & 4
}

let Os = !1;

function ed(e, t = !1) {
    Os = t;
    const {props: n, children: s} = e.vnode, o = lu(e);
    xf(e, n, o, t), Zf(e, s);
    const r = o ? td(e, t) : void 0;
    return Os = !1, r
}

function td(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = yo(new Proxy(e.ctx, Of));
    const {setup: s} = n;
    if (s) {
        const o = e.setupContext = s.length > 1 ? sd(e) : null;
        zn(e), Xn();
        const r = cn(s, e, 0, [e.props, o]);
        if (Jn(), On(), dc(r)) {
            if (r.then(On, On), t) return r.then(i => {
                ga(e, i, t)
            }).catch(i => {
                ko(i, e, 0)
            });
            e.asyncDep = r
        } else ga(e, r, t)
    } else cu(e, t)
}

function ga(e, t, n) {
    ge(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ze(t) && (e.setupState = Nc(t)), cu(e, n)
}

let _a;

function cu(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && _a && !s.render) {
            const o = s.template || pi(e).template;
            if (o) {
                const {isCustomElement: r, compilerOptions: i} = e.appContext.config, {
                    delimiters: a,
                    compilerOptions: l
                } = s, c = Ge(Ge({isCustomElement: r, delimiters: a}, i), l);
                s.render = _a(o, c)
            }
        }
        e.render = s.render || Ot
    }
    zn(e), Xn(), Af(e), Jn(), On()
}

function nd(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, n) {
            return dt(e, "get", "$attrs"), t[n]
        }
    }))
}

function sd(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        get attrs() {
            return nd(e)
        }, slots: e.slots, emit: e.emit, expose: t
    }
}

function Oo(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Nc(yo(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in us) return us[n](e)
        }, has(t, n) {
            return n in t || n in us
        }
    }))
}

function od(e, t = !0) {
    return ge(e) ? e.displayName || e.name : e.name || t && e.__name
}

function rd(e) {
    return ge(e) && "__vccOpts" in e
}

const Q = (e, t) => ef(e, t, Os);

function zt(e, t, n) {
    const s = arguments.length;
    return s === 2 ? Ze(t) && !fe(t) ? lo(t) ? Y(e, null, [t]) : Y(e, t) : Y(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && lo(n) && (n = [n]), Y(e, t, n))
}

const id = Symbol.for("v-scx"), ad = () => it(id), ld = "3.3.4", cd = "http://www.w3.org/2000/svg",
    En = typeof document < "u" ? document : null, va = En && En.createElement("template"), ud = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, s) => {
            const o = t ? En.createElementNS(cd, e) : En.createElement(e, n ? {is: n} : void 0);
            return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o
        },
        createText: e => En.createTextNode(e),
        createComment: e => En.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => En.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, s, o, r) {
            const i = n ? n.previousSibling : t.lastChild;
            if (o && (o === r || o.nextSibling)) for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling));) ; else {
                va.innerHTML = s ? `<svg>${e}</svg>` : e;
                const a = va.content;
                if (s) {
                    const l = a.firstChild;
                    for (; l.firstChild;) a.appendChild(l.firstChild);
                    a.removeChild(l)
                }
                t.insertBefore(a, n)
            }
            return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    };

function fd(e, t, n) {
    const s = e._vtc;
    s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

function dd(e, t, n) {
    const s = e.style, o = Ue(n);
    if (n && !o) {
        if (t && !Ue(t)) for (const r in t) n[r] == null && Mr(s, r, "");
        for (const r in n) Mr(s, r, n[r])
    } else {
        const r = s.display;
        o ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = r)
    }
}

const ba = /\s*!important$/;

function Mr(e, t, n) {
    if (fe(n)) n.forEach(s => Mr(e, t, s)); else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n); else {
        const s = hd(e, t);
        ba.test(n) ? e.setProperty(In(s), n.replace(ba, ""), "important") : e[s] = n
    }
}

const ya = ["Webkit", "Moz", "ms"], Yo = {};

function hd(e, t) {
    const n = Yo[t];
    if (n) return n;
    let s = jt(t);
    if (s !== "filter" && s in e) return Yo[t] = s;
    s = vo(s);
    for (let o = 0; o < ya.length; o++) {
        const r = ya[o] + s;
        if (r in e) return Yo[t] = r
    }
    return t
}

const ka = "http://www.w3.org/1999/xlink";

function pd(e, t, n, s, o) {
    if (s && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(ka, t.slice(6, t.length)) : e.setAttributeNS(ka, t, n); else {
        const r = v0(t);
        n == null || r && !mc(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n)
    }
}

function md(e, t, n, s, o, r, i) {
    if (t === "innerHTML" || t === "textContent") {
        s && i(s, o, r), e[t] = n ?? "";
        return
    }
    const a = e.tagName;
    if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
        e._value = n;
        const c = a === "OPTION" ? e.getAttribute("value") : e.value, u = n ?? "";
        c !== u && (e.value = u), n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = mc(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0)
    }
    try {
        e[t] = n
    } catch {
    }
    l && e.removeAttribute(t)
}

function Fn(e, t, n, s) {
    e.addEventListener(t, n, s)
}

function gd(e, t, n, s) {
    e.removeEventListener(t, n, s)
}

function _d(e, t, n, s, o = null) {
    const r = e._vei || (e._vei = {}), i = r[t];
    if (s && i) i.value = s; else {
        const [a, l] = vd(t);
        if (s) {
            const c = r[t] = kd(s, o);
            Fn(e, a, c, l)
        } else i && (gd(e, a, i, l), r[t] = void 0)
    }
}

const wa = /(?:Once|Passive|Capture)$/;

function vd(e) {
    let t;
    if (wa.test(e)) {
        t = {};
        let s;
        for (; s = e.match(wa);) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : In(e.slice(2)), t]
}

let Xo = 0;
const bd = Promise.resolve(), yd = () => Xo || (bd.then(() => Xo = 0), Xo = Date.now());

function kd(e, t) {
    const n = s => {
        if (!s._vts) s._vts = Date.now(); else if (s._vts <= n.attached) return;
        wt(wd(s, n.value), t, 5, [s])
    };
    return n.value = e, n.attached = yd(), n
}

function wd(e, t) {
    if (fe(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(s => o => !o._stopped && s && s(o))
    } else return t
}

const Ca = /^on[a-z]/, Cd = (e, t, n, s, o = !1, r, i, a, l) => {
    t === "class" ? fd(e, s, o) : t === "style" ? dd(e, n, s) : mo(t) ? Kr(t) || _d(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ed(e, t, s, o)) ? md(e, t, s, r, i, a, l) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), pd(e, t, s, o))
};

function Ed(e, t, n, s) {
    return s ? !!(t === "innerHTML" || t === "textContent" || t in e && Ca.test(t) && ge(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Ca.test(t) && Ue(n) ? !1 : t in e
}

const Jt = "transition", ns = "animation", pn = (e, {slots: t}) => zt(_f, Md(e), t);
pn.displayName = "Transition";
const uu = {
    name: String,
    type: String,
    css: {type: Boolean, default: !0},
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
pn.props = Ge({}, Uc, uu);
const yn = (e, t = []) => {
    fe(e) ? e.forEach(n => n(...t)) : e && e(...t)
}, Ea = e => e ? fe(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Md(e) {
    const t = {};
    for (const se in e) se in uu || (t[se] = e[se]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: s,
        duration: o,
        enterFromClass: r = `${n}-enter-from`,
        enterActiveClass: i = `${n}-enter-active`,
        enterToClass: a = `${n}-enter-to`,
        appearFromClass: l = r,
        appearActiveClass: c = i,
        appearToClass: u = a,
        leaveFromClass: h = `${n}-leave-from`,
        leaveActiveClass: p = `${n}-leave-active`,
        leaveToClass: w = `${n}-leave-to`
    } = e, g = Sd(o), C = g && g[0], A = g && g[1], {
        onBeforeEnter: v,
        onEnter: M,
        onEnterCancelled: R,
        onLeave: S,
        onLeaveCancelled: I,
        onBeforeAppear: V = v,
        onAppear: K = M,
        onAppearCancelled: D = R
    } = t, X = (se, m, P) => {
        kn(se, m ? u : a), kn(se, m ? c : i), P && P()
    }, ie = (se, m) => {
        se._isLeaving = !1, kn(se, h), kn(se, w), kn(se, p), m && m()
    }, ue = se => (m, P) => {
        const x = se ? K : M, G = () => X(m, se, P);
        yn(x, [m, G]), Ma(() => {
            kn(m, se ? l : r), Qt(m, se ? u : a), Ea(x) || Sa(m, s, C, G)
        })
    };
    return Ge(t, {
        onBeforeEnter(se) {
            yn(v, [se]), Qt(se, r), Qt(se, i)
        }, onBeforeAppear(se) {
            yn(V, [se]), Qt(se, l), Qt(se, c)
        }, onEnter: ue(!1), onAppear: ue(!0), onLeave(se, m) {
            se._isLeaving = !0;
            const P = () => ie(se, m);
            Qt(se, h), Ad(), Qt(se, p), Ma(() => {
                se._isLeaving && (kn(se, h), Qt(se, w), Ea(S) || Sa(se, s, A, P))
            }), yn(S, [se, P])
        }, onEnterCancelled(se) {
            X(se, !1), yn(R, [se])
        }, onAppearCancelled(se) {
            X(se, !0), yn(D, [se])
        }, onLeaveCancelled(se) {
            ie(se), yn(I, [se])
        }
    })
}

function Sd(e) {
    if (e == null) return null;
    if (Ze(e)) return [Jo(e.enter), Jo(e.leave)];
    {
        const t = Jo(e);
        return [t, t]
    }
}

function Jo(e) {
    return d0(e)
}

function Qt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
}

function kn(e, t) {
    t.split(/\s+/).forEach(s => s && e.classList.remove(s));
    const {_vtc: n} = e;
    n && (n.delete(t), n.size || (e._vtc = void 0))
}

function Ma(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}

let Td = 0;

function Sa(e, t, n, s) {
    const o = e._endId = ++Td, r = () => {
        o === e._endId && s()
    };
    if (n) return setTimeout(r, n);
    const {type: i, timeout: a, propCount: l} = Od(e, t);
    if (!i) return s();
    const c = i + "end";
    let u = 0;
    const h = () => {
        e.removeEventListener(c, p), r()
    }, p = w => {
        w.target === e && ++u >= l && h()
    };
    setTimeout(() => {
        u < l && h()
    }, a + 1), e.addEventListener(c, p)
}

function Od(e, t) {
    const n = window.getComputedStyle(e), s = g => (n[g] || "").split(", "), o = s(`${Jt}Delay`),
        r = s(`${Jt}Duration`), i = Ta(o, r), a = s(`${ns}Delay`), l = s(`${ns}Duration`), c = Ta(a, l);
    let u = null, h = 0, p = 0;
    t === Jt ? i > 0 && (u = Jt, h = i, p = r.length) : t === ns ? c > 0 && (u = ns, h = c, p = l.length) : (h = Math.max(i, c), u = h > 0 ? i > c ? Jt : ns : null, p = u ? u === Jt ? r.length : l.length : 0);
    const w = u === Jt && /\b(transform|all)(,|$)/.test(s(`${Jt}Property`).toString());
    return {type: u, timeout: h, propCount: p, hasTransform: w}
}

function Ta(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, s) => Oa(n) + Oa(e[s])))
}

function Oa(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function Ad() {
    return document.body.offsetHeight
}

const Aa = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return fe(t) ? n => Gs(t, n) : t
};

function Ld(e) {
    e.target.composing = !0
}

function La(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}

const Id = {
    created(e, {modifiers: {lazy: t, trim: n, number: s}}, o) {
        e._assign = Aa(o);
        const r = s || o.props && o.props.type === "number";
        Fn(e, t ? "change" : "input", i => {
            if (i.target.composing) return;
            let a = e.value;
            n && (a = a.trim()), r && (a = ur(a)), e._assign(a)
        }), n && Fn(e, "change", () => {
            e.value = e.value.trim()
        }), t || (Fn(e, "compositionstart", Ld), Fn(e, "compositionend", La), Fn(e, "change", La))
    }, mounted(e, {value: t}) {
        e.value = t ?? ""
    }, beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: s, number: o}}, r) {
        if (e._assign = Aa(r), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (o || e.type === "number") && ur(e.value) === t)) return;
        const i = t ?? "";
        e.value !== i && (e.value = i)
    }
}, Pd = ["ctrl", "shift", "alt", "meta"], $d = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => Pd.some(n => e[`${n}Key`] && !t.includes(n))
}, _t = (e, t) => (n, ...s) => {
    for (let o = 0; o < t.length; o++) {
        const r = $d[t[o]];
        if (r && r(n, t)) return
    }
    return e(n, ...s)
}, Rd = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}, Mn = (e, t) => n => {
    if (!("key" in n)) return;
    const s = In(n.key);
    if (t.some(o => o === s || Rd[o] === s)) return e(n)
}, bi = {
    beforeMount(e, {value: t}, {transition: n}) {
        e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ss(e, t)
    }, mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    }, updated(e, {value: t, oldValue: n}, {transition: s}) {
        !t != !n && (s ? t ? (s.beforeEnter(e), ss(e, !0), s.enter(e)) : s.leave(e, () => {
            ss(e, !1)
        }) : ss(e, t))
    }, beforeUnmount(e, {value: t}) {
        ss(e, t)
    }
};

function ss(e, t) {
    e.style.display = t ? e._vod : "none"
}

const Nd = Ge({patchProp: Cd}, ud);
let Ia;

function Fd() {
    return Ia || (Ia = Hf(Nd))
}

const xd = (...e) => {
    const t = Fd().createApp(...e), {mount: n} = t;
    return t.mount = s => {
        const o = Dd(s);
        if (!o) return;
        const r = t._component;
        !ge(r) && !r.render && !r.template && (r.template = o.innerHTML), o.innerHTML = "";
        const i = n(o, !1, o instanceof SVGElement);
        return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i
    }, t
};

function Dd(e) {
    return Ue(e) ? document.querySelector(e) : e
}

var jd = !1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let fu;
const Ao = e => fu = e, du = Symbol();

function Sr(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}

var ps;
(function (e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(ps || (ps = {}));

function Zd() {
    const e = Jr(!0), t = e.run(() => pe({}));
    let n = [], s = [];
    const o = yo({
        install(r) {
            Ao(o), o._a = r, r.provide(du, o), r.config.globalProperties.$pinia = o, s.forEach(i => n.push(i)), s = []
        }, use(r) {
            return !this._a && !jd ? s.push(r) : n.push(r), this
        }, _p: n, _a: null, _e: e, _s: new Map, state: t
    });
    return o
}

const hu = () => {
};

function Pa(e, t, n, s = hu) {
    e.push(t);
    const o = () => {
        const r = e.indexOf(t);
        r > -1 && (e.splice(r, 1), s())
    };
    return !n && vc() && y0(o), o
}

function Rn(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    })
}

const Bd = e => e();

function Tr(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const s = t[n], o = e[n];
        Sr(o) && Sr(s) && e.hasOwnProperty(n) && !He(s) && !ln(s) ? e[n] = Tr(o, s) : e[n] = s
    }
    return e
}

const Hd = Symbol();

function Ud(e) {
    return !Sr(e) || !e.hasOwnProperty(Hd)
}

const {assign: sn} = Object;

function Vd(e) {
    return !!(He(e) && e.effect)
}

function Wd(e, t, n, s) {
    const {state: o, actions: r, getters: i} = t, a = n.state.value[e];
    let l;

    function c() {
        a || (n.state.value[e] = o ? o() : {});
        const u = ht(n.state.value[e]);
        return sn(u, r, Object.keys(i || {}).reduce((h, p) => (h[p] = yo(Q(() => {
            Ao(n);
            const w = n._s.get(e);
            return i[p].call(w, w)
        })), h), {}))
    }

    return l = pu(e, c, t, n, s, !0), l
}

function pu(e, t, n = {}, s, o, r) {
    let i;
    const a = sn({actions: {}}, n), l = {deep: !0};
    let c, u, h = [], p = [], w;
    const g = s.state.value[e];
    !r && !g && (s.state.value[e] = {}), pe({});
    let C;

    function A(D) {
        let X;
        c = u = !1, typeof D == "function" ? (D(s.state.value[e]), X = {
            type: ps.patchFunction,
            storeId: e,
            events: w
        }) : (Tr(s.state.value[e], D), X = {type: ps.patchObject, payload: D, storeId: e, events: w});
        const ie = C = Symbol();
        ai().then(() => {
            C === ie && (c = !0)
        }), u = !0, Rn(h, X, s.state.value[e])
    }

    const v = r ? function () {
        const {state: X} = n, ie = X ? X() : {};
        this.$patch(ue => {
            sn(ue, ie)
        })
    } : hu;

    function M() {
        i.stop(), h = [], p = [], s._s.delete(e)
    }

    function R(D, X) {
        return function () {
            Ao(s);
            const ie = Array.from(arguments), ue = [], se = [];

            function m(G) {
                ue.push(G)
            }

            function P(G) {
                se.push(G)
            }

            Rn(p, {args: ie, name: D, store: I, after: m, onError: P});
            let x;
            try {
                x = X.apply(this && this.$id === e ? this : I, ie)
            } catch (G) {
                throw Rn(se, G), G
            }
            return x instanceof Promise ? x.then(G => (Rn(ue, G), G)).catch(G => (Rn(se, G), Promise.reject(G))) : (Rn(ue, x), x)
        }
    }

    const S = {
        _p: s, $id: e, $onAction: Pa.bind(null, p), $patch: A, $reset: v, $subscribe(D, X = {}) {
            const ie = Pa(h, D, X.detached, () => ue()), ue = i.run(() => ft(() => s.state.value[e], se => {
                (X.flush === "sync" ? u : c) && D({storeId: e, type: ps.direct, events: w}, se)
            }, sn({}, l, X)));
            return ie
        }, $dispose: M
    }, I = Gt(S);
    s._s.set(e, I);
    const V = s._a && s._a.runWithContext || Bd, K = s._e.run(() => (i = Jr(), V(() => i.run(t))));
    for (const D in K) {
        const X = K[D];
        if (He(X) && !Vd(X) || ln(X)) r || (g && Ud(X) && (He(X) ? X.value = g[D] : Tr(X, g[D])), s.state.value[e][D] = X); else if (typeof X == "function") {
            const ie = R(D, X);
            K[D] = ie, a.actions[D] = X
        }
    }
    return sn(I, K), sn(Ee(I), K), Object.defineProperty(I, "$state", {
        get: () => s.state.value[e], set: D => {
            A(X => {
                sn(X, D)
            })
        }
    }), s._p.forEach(D => {
        sn(I, i.run(() => D({store: I, app: s._a, pinia: s, options: a})))
    }), g && r && n.hydrate && n.hydrate(I.$state, g), c = !0, u = !0, I
}

function Lt(e, t, n) {
    let s, o;
    const r = typeof t == "function";
    typeof e == "string" ? (s = e, o = r ? n : t) : (o = e, s = e.id);

    function i(a, l) {
        const c = Ff();
        return a = a || (c ? it(du, null) : null), a && Ao(a), a = fu, a._s.has(s) || (r ? pu(s, t, o, a) : Wd(s, o, a)), a._s.get(s)
    }

    return i.$id = s, i
}/*! js-cookie v3.0.5 | MIT */
function Ws(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var s in n) e[s] = n[s]
    }
    return e
}

var zd = {
    read: function (e) {
        return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    }, write: function (e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function Or(e, t) {
    function n(o, r, i) {
        if (!(typeof document > "u")) {
            i = Ws({}, t, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), o = encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var l in i) i[l] && (a += "; " + l, i[l] !== !0 && (a += "=" + i[l].split(";")[0]));
            return document.cookie = o + "=" + e.write(r, o) + a
        }
    }

    function s(o) {
        if (!(typeof document > "u" || arguments.length && !o)) {
            for (var r = document.cookie ? document.cookie.split("; ") : [], i = {}, a = 0; a < r.length; a++) {
                var l = r[a].split("="), c = l.slice(1).join("=");
                try {
                    var u = decodeURIComponent(l[0]);
                    if (i[u] = e.read(c, u), o === u) break
                } catch {
                }
            }
            return o ? i[o] : i
        }
    }

    return Object.create({
        set: n, get: s, remove: function (o, r) {
            n(o, "", Ws({}, r, {expires: -1}))
        }, withAttributes: function (o) {
            return Or(this.converter, Ws({}, this.attributes, o))
        }, withConverter: function (o) {
            return Or(Ws({}, this.converter, o), this.attributes)
        }
    }, {attributes: {value: Object.freeze(t)}, converter: {value: Object.freeze(e)}})
}

var Bt = Or(zd, {path: "/"});
const mu = {
    home: "首页",
    about: "关于",
    archives: "归档",
    categories: "分类",
    tags: "标签",
    post: "文章",
    "message-board": "留言板",
    search: "搜索结果",
    "not-found": "无法找到页面"
}, gu = {recommended: "推荐文章"}, _u = {
    articles: "文章列表",
    about: "关于我",
    category_list: "分类目录",
    tag_list: "标签目录",
    toc: "文章目录",
    comment: "评论区",
    recent_comment: "最近评论"
}, vu = {
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    articles: "文章",
    categories: "分类",
    tags: "标签",
    words: "文字",
    visitor_count: "总共访客数",
    visit_count: "总共访问数",
    "button-all": "全部",
    paginator: {newer: "新的", older: "以往", prev: "上一篇更回味", next: "下一篇更精彩"},
    "more-tags": "查看更多",
    "admin-user": "博主",
    "shared-on": "发布于",
    "recently-search": "最近搜索",
    "search-result": "一共找到 [total] 个结果",
    "no-recent-search": "没有最近搜索记录。",
    "no-search-result": "没有找到任何记录。",
    "cmd-to-select": "查看",
    "cmd-to-navigate": "选择",
    "cmd-to-close": "关闭",
    "searched-by": "搜索引擎",
    "tips-back-to-top": "返回顶部",
    "tips-open-menu": "打开菜单",
    "tips-back-to-home": "返回首页",
    "tips-open-search": "打开搜索",
    "default-category": "文章",
    "default-tag": "未分类",
    "empty-tag": "目前没有标签",
    "empty-recent-comments": "目前没有最新评论",
    pinned: "置顶",
    featured: "推荐"
}, qd = {menu: mu, home: gu, titles: _u, settings: vu}, Kd = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: qd,
    home: gu,
    menu: mu,
    settings: vu,
    titles: _u
}, Symbol.toStringTag, {value: "Module"})), bu = {
    home: "Home",
    about: "About",
    archives: "Archives",
    categories: "Categories",
    tags: "Tags",
    post: "Article",
    search: "Search results",
    "message-board": "Message Board",
    "not-found": "Page not found"
}, yu = {recommended: "Feature Articles"}, ku = {
    articles: "Articles",
    about: "About Me",
    category_list: "Categories",
    tag_list: "Tags",
    toc: "Table of Content",
    comment: "Comments",
    recent_comment: "Recent Comments"
}, wu = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    articles: "Articles",
    categories: "Categories",
    tags: "Tags",
    words: "Words",
    visitor_count: "Total visitor count",
    visit_count: "Total visit count",
    "button-all": "All",
    paginator: {newer: "Newer", older: "Older", prev: "Previous", next: "Next"},
    "more-tags": "View more",
    "admin-user": "Owner",
    "shared-on": "shared on",
    "recently-search": "Recently searched",
    "search-result": "Found [total] records",
    "no-recent-search": "No recent searches.",
    "no-search-result": "No records found.",
    "cmd-to-select": "to select",
    "cmd-to-navigate": "to navigate",
    "cmd-to-close": "to close",
    "searched-by": "Search by",
    "tips-back-to-top": "Back to top",
    "tips-open-menu": "Open menu",
    "tips-back-to-home": "Back to home",
    "tips-open-search": "Open search",
    "default-category": "Article",
    "default-tag": "unsorted",
    "empty-tag": "No tags right now.",
    "empty-recent-comments": "No recent comments right now.",
    pinned: "Pinned",
    featured: "Featured"
}, Gd = {menu: bu, home: yu, titles: ku, settings: wu}, Yd = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Gd,
    home: yu,
    menu: bu,
    settings: wu,
    titles: ku
}, Symbol.toStringTag, {value: "Module"}));/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ar = typeof window < "u", Xd = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    gn = e => Xd ? Symbol(e) : e, Jd = (e, t, n) => Qd({l: e, k: t, s: n}),
    Qd = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    Qe = e => typeof e == "number" && isFinite(e), eh = e => ki(e) === "[object Date]",
    mn = e => ki(e) === "[object RegExp]", Lo = e => he(e) && Object.keys(e).length === 0;

function th(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}

const ot = Object.assign;
let $a;
const ms = () => $a || ($a = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ra(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}

const nh = Object.prototype.hasOwnProperty;

function yi(e, t) {
    return nh.call(e, t)
}

const Fe = Array.isArray, Ve = e => typeof e == "function", oe = e => typeof e == "string",
    we = e => typeof e == "boolean", xe = e => e !== null && typeof e == "object", Cu = Object.prototype.toString,
    ki = e => Cu.call(e), he = e => ki(e) === "[object Object]",
    sh = e => e == null ? "" : Fe(e) || he(e) && e.toString === Cu ? JSON.stringify(e, null, 2) : String(e);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Te = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15
};

function Io(e, t, n = {}) {
    const {domain: s, messages: o, args: r} = n, i = e, a = new SyntaxError(String(i));
    return a.code = e, t && (a.location = t), a.domain = s, a
}

function oh(e) {
    throw e
}

function rh(e, t, n) {
    return {line: e, column: t, offset: n}
}

function Lr(e, t, n) {
    const s = {start: e, end: t};
    return n != null && (s.source = n), s
}

const Ht = " ", ih = "\r", lt = `
`, ah = String.fromCharCode(8232), lh = String.fromCharCode(8233);

function ch(e) {
    const t = e;
    let n = 0, s = 1, o = 1, r = 0;
    const i = K => t[K] === ih && t[K + 1] === lt, a = K => t[K] === lt, l = K => t[K] === lh, c = K => t[K] === ah,
        u = K => i(K) || a(K) || l(K) || c(K), h = () => n, p = () => s, w = () => o, g = () => r,
        C = K => i(K) || l(K) || c(K) ? lt : t[K], A = () => C(n), v = () => C(n + r);

    function M() {
        return r = 0, u(n) && (s++, o = 0), i(n) && n++, n++, o++, t[n]
    }

    function R() {
        return i(n + r) && r++, r++, t[n + r]
    }

    function S() {
        n = 0, s = 1, o = 1, r = 0
    }

    function I(K = 0) {
        r = K
    }

    function V() {
        const K = n + r;
        for (; K !== n;) M();
        r = 0
    }

    return {
        index: h,
        line: p,
        column: w,
        peekOffset: g,
        charAt: C,
        currentChar: A,
        currentPeek: v,
        next: M,
        peek: R,
        reset: S,
        resetPeek: I,
        skipToPeek: V
    }
}

const en = void 0, Na = "'", uh = "tokenizer";

function fh(e, t = {}) {
    const n = t.location !== !1, s = ch(e), o = () => s.index(), r = () => rh(s.line(), s.column(), s.index()), i = r(),
        a = o(), l = {
            currentType: 14,
            offset: a,
            startLoc: i,
            endLoc: i,
            lastType: 14,
            lastOffset: a,
            lastStartLoc: i,
            lastEndLoc: i,
            braceNest: 0,
            inLinked: !1,
            text: ""
        }, c = () => l, {onError: u} = t;

    function h(f, d, b, ...O) {
        const $ = c();
        if (d.column += b, d.offset += b, u) {
            const B = Lr($.startLoc, d), z = Io(f, B, {domain: uh, args: O});
            u(z)
        }
    }

    function p(f, d, b) {
        f.endLoc = r(), f.currentType = d;
        const O = {type: d};
        return n && (O.loc = Lr(f.startLoc, f.endLoc)), b != null && (O.value = b), O
    }

    const w = f => p(f, 14);

    function g(f, d) {
        return f.currentChar() === d ? (f.next(), d) : (h(Te.EXPECTED_TOKEN, r(), 0, d), "")
    }

    function C(f) {
        let d = "";
        for (; f.currentPeek() === Ht || f.currentPeek() === lt;) d += f.currentPeek(), f.peek();
        return d
    }

    function A(f) {
        const d = C(f);
        return f.skipToPeek(), d
    }

    function v(f) {
        if (f === en) return !1;
        const d = f.charCodeAt(0);
        return d >= 97 && d <= 122 || d >= 65 && d <= 90 || d === 95
    }

    function M(f) {
        if (f === en) return !1;
        const d = f.charCodeAt(0);
        return d >= 48 && d <= 57
    }

    function R(f, d) {
        const {currentType: b} = d;
        if (b !== 2) return !1;
        C(f);
        const O = v(f.currentPeek());
        return f.resetPeek(), O
    }

    function S(f, d) {
        const {currentType: b} = d;
        if (b !== 2) return !1;
        C(f);
        const O = f.currentPeek() === "-" ? f.peek() : f.currentPeek(), $ = M(O);
        return f.resetPeek(), $
    }

    function I(f, d) {
        const {currentType: b} = d;
        if (b !== 2) return !1;
        C(f);
        const O = f.currentPeek() === Na;
        return f.resetPeek(), O
    }

    function V(f, d) {
        const {currentType: b} = d;
        if (b !== 8) return !1;
        C(f);
        const O = f.currentPeek() === ".";
        return f.resetPeek(), O
    }

    function K(f, d) {
        const {currentType: b} = d;
        if (b !== 9) return !1;
        C(f);
        const O = v(f.currentPeek());
        return f.resetPeek(), O
    }

    function D(f, d) {
        const {currentType: b} = d;
        if (!(b === 8 || b === 12)) return !1;
        C(f);
        const O = f.currentPeek() === ":";
        return f.resetPeek(), O
    }

    function X(f, d) {
        const {currentType: b} = d;
        if (b !== 10) return !1;
        const O = () => {
            const B = f.currentPeek();
            return B === "{" ? v(f.peek()) : B === "@" || B === "%" || B === "|" || B === ":" || B === "." || B === Ht || !B ? !1 : B === lt ? (f.peek(), O()) : v(B)
        }, $ = O();
        return f.resetPeek(), $
    }

    function ie(f) {
        C(f);
        const d = f.currentPeek() === "|";
        return f.resetPeek(), d
    }

    function ue(f) {
        const d = C(f), b = f.currentPeek() === "%" && f.peek() === "{";
        return f.resetPeek(), {isModulo: b, hasSpace: d.length > 0}
    }

    function se(f, d = !0) {
        const b = ($ = !1, B = "", z = !1) => {
            const J = f.currentPeek();
            return J === "{" ? B === "%" ? !1 : $ : J === "@" || !J ? B === "%" ? !0 : $ : J === "%" ? (f.peek(), b($, "%", !0)) : J === "|" ? B === "%" || z ? !0 : !(B === Ht || B === lt) : J === Ht ? (f.peek(), b(!0, Ht, z)) : J === lt ? (f.peek(), b(!0, lt, z)) : !0
        }, O = b();
        return d && f.resetPeek(), O
    }

    function m(f, d) {
        const b = f.currentChar();
        return b === en ? en : d(b) ? (f.next(), b) : null
    }

    function P(f) {
        return m(f, b => {
            const O = b.charCodeAt(0);
            return O >= 97 && O <= 122 || O >= 65 && O <= 90 || O >= 48 && O <= 57 || O === 95 || O === 36
        })
    }

    function x(f) {
        return m(f, b => {
            const O = b.charCodeAt(0);
            return O >= 48 && O <= 57
        })
    }

    function G(f) {
        return m(f, b => {
            const O = b.charCodeAt(0);
            return O >= 48 && O <= 57 || O >= 65 && O <= 70 || O >= 97 && O <= 102
        })
    }

    function W(f) {
        let d = "", b = "";
        for (; d = x(f);) b += d;
        return b
    }

    function te(f) {
        A(f);
        const d = f.currentChar();
        return d !== "%" && h(Te.EXPECTED_TOKEN, r(), 0, d), f.next(), "%"
    }

    function de(f) {
        let d = "";
        for (; ;) {
            const b = f.currentChar();
            if (b === "{" || b === "}" || b === "@" || b === "|" || !b) break;
            if (b === "%") if (se(f)) d += b, f.next(); else break; else if (b === Ht || b === lt) if (se(f)) d += b, f.next(); else {
                if (ie(f)) break;
                d += b, f.next()
            } else d += b, f.next()
        }
        return d
    }

    function me(f) {
        A(f);
        let d = "", b = "";
        for (; d = P(f);) b += d;
        return f.currentChar() === en && h(Te.UNTERMINATED_CLOSING_BRACE, r(), 0), b
    }

    function $e(f) {
        A(f);
        let d = "";
        return f.currentChar() === "-" ? (f.next(), d += `-${W(f)}`) : d += W(f), f.currentChar() === en && h(Te.UNTERMINATED_CLOSING_BRACE, r(), 0), d
    }

    function Oe(f) {
        A(f), g(f, "'");
        let d = "", b = "";
        const O = B => B !== Na && B !== lt;
        for (; d = m(f, O);) d === "\\" ? b += Ye(f) : b += d;
        const $ = f.currentChar();
        return $ === lt || $ === en ? (h(Te.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), $ === lt && (f.next(), g(f, "'")), b) : (g(f, "'"), b)
    }

    function Ye(f) {
        const d = f.currentChar();
        switch (d) {
            case"\\":
            case"'":
                return f.next(), `\\${d}`;
            case"u":
                return Xe(f, d, 4);
            case"U":
                return Xe(f, d, 6);
            default:
                return h(Te.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, d), ""
        }
    }

    function Xe(f, d, b) {
        g(f, d);
        let O = "";
        for (let $ = 0; $ < b; $++) {
            const B = G(f);
            if (!B) {
                h(Te.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${d}${O}${f.currentChar()}`);
                break
            }
            O += B
        }
        return `\\${d}${O}`
    }

    function bt(f) {
        A(f);
        let d = "", b = "";
        const O = $ => $ !== "{" && $ !== "}" && $ !== Ht && $ !== lt;
        for (; d = m(f, O);) b += d;
        return b
    }

    function De(f) {
        let d = "", b = "";
        for (; d = P(f);) b += d;
        return b
    }

    function j(f) {
        const d = (b = !1, O) => {
            const $ = f.currentChar();
            return $ === "{" || $ === "%" || $ === "@" || $ === "|" || !$ || $ === Ht ? O : $ === lt ? (O += $, f.next(), d(b, O)) : (O += $, f.next(), d(!0, O))
        };
        return d(!1, "")
    }

    function ne(f) {
        A(f);
        const d = g(f, "|");
        return A(f), d
    }

    function ee(f, d) {
        let b = null;
        switch (f.currentChar()) {
            case"{":
                return d.braceNest >= 1 && h(Te.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), f.next(), b = p(d, 2, "{"), A(f), d.braceNest++, b;
            case"}":
                return d.braceNest > 0 && d.currentType === 2 && h(Te.EMPTY_PLACEHOLDER, r(), 0), f.next(), b = p(d, 3, "}"), d.braceNest--, d.braceNest > 0 && A(f), d.inLinked && d.braceNest === 0 && (d.inLinked = !1), b;
            case"@":
                return d.braceNest > 0 && h(Te.UNTERMINATED_CLOSING_BRACE, r(), 0), b = Z(f, d) || w(d), d.braceNest = 0, b;
            default:
                let $ = !0, B = !0, z = !0;
                if (ie(f)) return d.braceNest > 0 && h(Te.UNTERMINATED_CLOSING_BRACE, r(), 0), b = p(d, 1, ne(f)), d.braceNest = 0, d.inLinked = !1, b;
                if (d.braceNest > 0 && (d.currentType === 5 || d.currentType === 6 || d.currentType === 7)) return h(Te.UNTERMINATED_CLOSING_BRACE, r(), 0), d.braceNest = 0, re(f, d);
                if ($ = R(f, d)) return b = p(d, 5, me(f)), A(f), b;
                if (B = S(f, d)) return b = p(d, 6, $e(f)), A(f), b;
                if (z = I(f, d)) return b = p(d, 7, Oe(f)), A(f), b;
                if (!$ && !B && !z) return b = p(d, 13, bt(f)), h(Te.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, b.value), A(f), b;
                break
        }
        return b
    }

    function Z(f, d) {
        const {currentType: b} = d;
        let O = null;
        const $ = f.currentChar();
        switch ((b === 8 || b === 9 || b === 12 || b === 10) && ($ === lt || $ === Ht) && h(Te.INVALID_LINKED_FORMAT, r(), 0), $) {
            case"@":
                return f.next(), O = p(d, 8, "@"), d.inLinked = !0, O;
            case".":
                return A(f), f.next(), p(d, 9, ".");
            case":":
                return A(f), f.next(), p(d, 10, ":");
            default:
                return ie(f) ? (O = p(d, 1, ne(f)), d.braceNest = 0, d.inLinked = !1, O) : V(f, d) || D(f, d) ? (A(f), Z(f, d)) : K(f, d) ? (A(f), p(d, 12, De(f))) : X(f, d) ? (A(f), $ === "{" ? ee(f, d) || O : p(d, 11, j(f))) : (b === 8 && h(Te.INVALID_LINKED_FORMAT, r(), 0), d.braceNest = 0, d.inLinked = !1, re(f, d))
        }
    }

    function re(f, d) {
        let b = {type: 14};
        if (d.braceNest > 0) return ee(f, d) || w(d);
        if (d.inLinked) return Z(f, d) || w(d);
        switch (f.currentChar()) {
            case"{":
                return ee(f, d) || w(d);
            case"}":
                return h(Te.UNBALANCED_CLOSING_BRACE, r(), 0), f.next(), p(d, 3, "}");
            case"@":
                return Z(f, d) || w(d);
            default:
                if (ie(f)) return b = p(d, 1, ne(f)), d.braceNest = 0, d.inLinked = !1, b;
                const {isModulo: $, hasSpace: B} = ue(f);
                if ($) return B ? p(d, 0, de(f)) : p(d, 4, te(f));
                if (se(f)) return p(d, 0, de(f));
                break
        }
        return b
    }

    function y() {
        const {currentType: f, offset: d, startLoc: b, endLoc: O} = l;
        return l.lastType = f, l.lastOffset = d, l.lastStartLoc = b, l.lastEndLoc = O, l.offset = o(), l.startLoc = r(), s.currentChar() === en ? p(l, 14) : re(s, l)
    }

    return {nextToken: y, currentOffset: o, currentPosition: r, context: c}
}

const dh = "parser", hh = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function ph(e, t, n) {
    switch (e) {
        case"\\\\":
            return "\\";
        case"\\'":
            return "'";
        default: {
            const s = parseInt(t || n, 16);
            return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�"
        }
    }
}

function mh(e = {}) {
    const t = e.location !== !1, {onError: n} = e;

    function s(v, M, R, S, ...I) {
        const V = v.currentPosition();
        if (V.offset += S, V.column += S, n) {
            const K = Lr(R, V), D = Io(M, K, {domain: dh, args: I});
            n(D)
        }
    }

    function o(v, M, R) {
        const S = {type: v, start: M, end: M};
        return t && (S.loc = {start: R, end: R}), S
    }

    function r(v, M, R, S) {
        v.end = M, S && (v.type = S), t && v.loc && (v.loc.end = R)
    }

    function i(v, M) {
        const R = v.context(), S = o(3, R.offset, R.startLoc);
        return S.value = M, r(S, v.currentOffset(), v.currentPosition()), S
    }

    function a(v, M) {
        const R = v.context(), {lastOffset: S, lastStartLoc: I} = R, V = o(5, S, I);
        return V.index = parseInt(M, 10), v.nextToken(), r(V, v.currentOffset(), v.currentPosition()), V
    }

    function l(v, M) {
        const R = v.context(), {lastOffset: S, lastStartLoc: I} = R, V = o(4, S, I);
        return V.key = M, v.nextToken(), r(V, v.currentOffset(), v.currentPosition()), V
    }

    function c(v, M) {
        const R = v.context(), {lastOffset: S, lastStartLoc: I} = R, V = o(9, S, I);
        return V.value = M.replace(hh, ph), v.nextToken(), r(V, v.currentOffset(), v.currentPosition()), V
    }

    function u(v) {
        const M = v.nextToken(), R = v.context(), {lastOffset: S, lastStartLoc: I} = R, V = o(8, S, I);
        return M.type !== 12 ? (s(v, Te.UNEXPECTED_EMPTY_LINKED_MODIFIER, R.lastStartLoc, 0), V.value = "", r(V, S, I), {
            nextConsumeToken: M,
            node: V
        }) : (M.value == null && s(v, Te.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, $t(M)), V.value = M.value || "", r(V, v.currentOffset(), v.currentPosition()), {node: V})
    }

    function h(v, M) {
        const R = v.context(), S = o(7, R.offset, R.startLoc);
        return S.value = M, r(S, v.currentOffset(), v.currentPosition()), S
    }

    function p(v) {
        const M = v.context(), R = o(6, M.offset, M.startLoc);
        let S = v.nextToken();
        if (S.type === 9) {
            const I = u(v);
            R.modifier = I.node, S = I.nextConsumeToken || v.nextToken()
        }
        switch (S.type !== 10 && s(v, Te.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, $t(S)), S = v.nextToken(), S.type === 2 && (S = v.nextToken()), S.type) {
            case 11:
                S.value == null && s(v, Te.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, $t(S)), R.key = h(v, S.value || "");
                break;
            case 5:
                S.value == null && s(v, Te.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, $t(S)), R.key = l(v, S.value || "");
                break;
            case 6:
                S.value == null && s(v, Te.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, $t(S)), R.key = a(v, S.value || "");
                break;
            case 7:
                S.value == null && s(v, Te.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, $t(S)), R.key = c(v, S.value || "");
                break;
            default:
                s(v, Te.UNEXPECTED_EMPTY_LINKED_KEY, M.lastStartLoc, 0);
                const I = v.context(), V = o(7, I.offset, I.startLoc);
                return V.value = "", r(V, I.offset, I.startLoc), R.key = V, r(R, I.offset, I.startLoc), {
                    nextConsumeToken: S,
                    node: R
                }
        }
        return r(R, v.currentOffset(), v.currentPosition()), {node: R}
    }

    function w(v) {
        const M = v.context(), R = M.currentType === 1 ? v.currentOffset() : M.offset,
            S = M.currentType === 1 ? M.endLoc : M.startLoc, I = o(2, R, S);
        I.items = [];
        let V = null;
        do {
            const X = V || v.nextToken();
            switch (V = null, X.type) {
                case 0:
                    X.value == null && s(v, Te.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, $t(X)), I.items.push(i(v, X.value || ""));
                    break;
                case 6:
                    X.value == null && s(v, Te.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, $t(X)), I.items.push(a(v, X.value || ""));
                    break;
                case 5:
                    X.value == null && s(v, Te.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, $t(X)), I.items.push(l(v, X.value || ""));
                    break;
                case 7:
                    X.value == null && s(v, Te.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, $t(X)), I.items.push(c(v, X.value || ""));
                    break;
                case 8:
                    const ie = p(v);
                    I.items.push(ie.node), V = ie.nextConsumeToken || null;
                    break
            }
        } while (M.currentType !== 14 && M.currentType !== 1);
        const K = M.currentType === 1 ? M.lastOffset : v.currentOffset(),
            D = M.currentType === 1 ? M.lastEndLoc : v.currentPosition();
        return r(I, K, D), I
    }

    function g(v, M, R, S) {
        const I = v.context();
        let V = S.items.length === 0;
        const K = o(1, M, R);
        K.cases = [], K.cases.push(S);
        do {
            const D = w(v);
            V || (V = D.items.length === 0), K.cases.push(D)
        } while (I.currentType !== 14);
        return V && s(v, Te.MUST_HAVE_MESSAGES_IN_PLURAL, R, 0), r(K, v.currentOffset(), v.currentPosition()), K
    }

    function C(v) {
        const M = v.context(), {offset: R, startLoc: S} = M, I = w(v);
        return M.currentType === 14 ? I : g(v, R, S, I)
    }

    function A(v) {
        const M = fh(v, ot({}, e)), R = M.context(), S = o(0, R.offset, R.startLoc);
        return t && S.loc && (S.loc.source = v), S.body = C(M), R.currentType !== 14 && s(M, Te.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, v[R.offset] || ""), r(S, M.currentOffset(), M.currentPosition()), S
    }

    return {parse: A}
}

function $t(e) {
    if (e.type === 14) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function gh(e, t = {}) {
    const n = {ast: e, helpers: new Set};
    return {context: () => n, helper: r => (n.helpers.add(r), r)}
}

function Fa(e, t) {
    for (let n = 0; n < e.length; n++) wi(e[n], t)
}

function wi(e, t) {
    switch (e.type) {
        case 1:
            Fa(e.cases, t), t.helper("plural");
            break;
        case 2:
            Fa(e.items, t);
            break;
        case 6:
            wi(e.key, t), t.helper("linked"), t.helper("type");
            break;
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named");
            break
    }
}

function _h(e, t = {}) {
    const n = gh(e);
    n.helper("normalize"), e.body && wi(e.body, n);
    const s = n.context();
    e.helpers = Array.from(s.helpers)
}

function vh(e, t) {
    const {sourceMap: n, filename: s, breakLineCode: o, needIndent: r} = t, i = {
        source: e.loc.source,
        filename: s,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: o,
        needIndent: r,
        indentLevel: 0
    }, a = () => i;

    function l(C, A) {
        i.code += C
    }

    function c(C, A = !0) {
        const v = A ? o : "";
        l(r ? v + "  ".repeat(C) : v)
    }

    function u(C = !0) {
        const A = ++i.indentLevel;
        C && c(A)
    }

    function h(C = !0) {
        const A = --i.indentLevel;
        C && c(A)
    }

    function p() {
        c(i.indentLevel)
    }

    return {
        context: a,
        push: l,
        indent: u,
        deindent: h,
        newline: p,
        helper: C => `_${C}`,
        needIndent: () => i.needIndent
    }
}

function bh(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`), qn(e, t.key), t.modifier ? (e.push(", "), qn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function yh(e, t) {
    const {helper: n, needIndent: s} = e;
    e.push(`${n("normalize")}([`), e.indent(s());
    const o = t.items.length;
    for (let r = 0; r < o && (qn(e, t.items[r]), r !== o - 1); r++) e.push(", ");
    e.deindent(s()), e.push("])")
}

function kh(e, t) {
    const {helper: n, needIndent: s} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`), e.indent(s());
        const o = t.cases.length;
        for (let r = 0; r < o && (qn(e, t.cases[r]), r !== o - 1); r++) e.push(", ");
        e.deindent(s()), e.push("])")
    }
}

function wh(e, t) {
    t.body ? qn(e, t.body) : e.push("null")
}

function qn(e, t) {
    const {helper: n} = e;
    switch (t.type) {
        case 0:
            wh(e, t);
            break;
        case 1:
            kh(e, t);
            break;
        case 2:
            yh(e, t);
            break;
        case 6:
            bh(e, t);
            break;
        case 8:
            e.push(JSON.stringify(t.value), t);
            break;
        case 7:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
            break;
        case 4:
            e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
            break;
        case 9:
            e.push(JSON.stringify(t.value), t);
            break;
        case 3:
            e.push(JSON.stringify(t.value), t);
            break
    }
}

const Ch = (e, t = {}) => {
    const n = oe(t.mode) ? t.mode : "normal", s = oe(t.filename) ? t.filename : "message.intl", o = !!t.sourceMap,
        r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [],
        l = vh(e, {mode: n, filename: s, sourceMap: o, breakLineCode: r, needIndent: i});
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(i), a.length > 0 && (l.push(`const { ${a.map(h => `${h}: _${h}`).join(", ")} } = ctx`), l.newline()), l.push("return "), qn(l, e), l.deindent(i), l.push("}");
    const {code: c, map: u} = l.context();
    return {ast: e, code: c, map: u ? u.toJSON() : void 0}
};

function Eh(e, t = {}) {
    const n = ot({}, t), o = mh(n).parse(e);
    return _h(o, n), Ch(o, n)
}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Eu = {I18nInit: "i18n:init", FunctionTranslate: "function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const _n = [];
_n[0] = {w: [0], i: [3, 0], ["["]: [4], o: [7]};
_n[1] = {w: [1], ["."]: [2], ["["]: [4], o: [7]};
_n[2] = {w: [2], i: [3, 0], [0]: [3, 0]};
_n[3] = {i: [3, 0], [0]: [3, 0], w: [1, 1], ["."]: [2, 1], ["["]: [4, 1], o: [7, 1]};
_n[4] = {["'"]: [5, 0], ['"']: [6, 0], ["["]: [4, 2], ["]"]: [1, 3], o: 8, l: [4, 0]};
_n[5] = {["'"]: [4, 0], o: 8, l: [5, 0]};
_n[6] = {['"']: [4, 0], o: 8, l: [6, 0]};
const Mh = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function Sh(e) {
    return Mh.test(e)
}

function Th(e) {
    const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function Oh(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function Ah(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Sh(t) ? Th(t) : "*" + t
}

function Lh(e) {
    const t = [];
    let n = -1, s = 0, o = 0, r, i, a, l, c, u, h;
    const p = [];
    p[0] = () => {
        i === void 0 ? i = a : i += a
    }, p[1] = () => {
        i !== void 0 && (t.push(i), i = void 0)
    }, p[2] = () => {
        p[0](), o++
    }, p[3] = () => {
        if (o > 0) o--, s = 4, p[0](); else {
            if (o = 0, i === void 0 || (i = Ah(i), i === !1)) return !1;
            p[1]()
        }
    };

    function w() {
        const g = e[n + 1];
        if (s === 5 && g === "'" || s === 6 && g === '"') return n++, a = "\\" + g, p[0](), !0
    }

    for (; s !== null;) if (n++, r = e[n], !(r === "\\" && w())) {
        if (l = Oh(r), h = _n[s], c = h[l] || h.l || 8, c === 8 || (s = c[0], c[1] !== void 0 && (u = p[c[1]], u && (a = r, u() === !1)))) return;
        if (s === 7) return t
    }
}

const xa = new Map;

function Ih(e, t) {
    return xe(e) ? e[t] : null
}

function Ph(e, t) {
    if (!xe(e)) return null;
    let n = xa.get(t);
    if (n || (n = Lh(t), n && xa.set(t, n)), !n) return null;
    const s = n.length;
    let o = e, r = 0;
    for (; r < s;) {
        const i = o[n[r]];
        if (i === void 0) return null;
        o = i, r++
    }
    return o
}

const $h = e => e, Rh = e => "", Nh = "text", Fh = e => e.length === 0 ? "" : e.join(""), xh = sh;

function Da(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function Dh(e) {
    const t = Qe(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (Qe(e.named.count) || Qe(e.named.n)) ? Qe(e.named.count) ? e.named.count : Qe(e.named.n) ? e.named.n : t : t
}

function jh(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
}

function Zh(e = {}) {
    const t = e.locale, n = Dh(e), s = xe(e.pluralRules) && oe(t) && Ve(e.pluralRules[t]) ? e.pluralRules[t] : Da,
        o = xe(e.pluralRules) && oe(t) && Ve(e.pluralRules[t]) ? Da : void 0, r = v => v[s(n, v.length, o)],
        i = e.list || [], a = v => i[v], l = e.named || {};
    Qe(e.pluralIndex) && jh(n, l);
    const c = v => l[v];

    function u(v) {
        const M = Ve(e.messages) ? e.messages(v) : xe(e.messages) ? e.messages[v] : !1;
        return M || (e.parent ? e.parent.message(v) : Rh)
    }

    const h = v => e.modifiers ? e.modifiers[v] : $h,
        p = he(e.processor) && Ve(e.processor.normalize) ? e.processor.normalize : Fh,
        w = he(e.processor) && Ve(e.processor.interpolate) ? e.processor.interpolate : xh,
        g = he(e.processor) && oe(e.processor.type) ? e.processor.type : Nh, A = {
            list: a, named: c, plural: r, linked: (v, ...M) => {
                const [R, S] = M;
                let I = "text", V = "";
                M.length === 1 ? xe(R) ? (V = R.modifier || V, I = R.type || I) : oe(R) && (V = R || V) : M.length === 2 && (oe(R) && (V = R || V), oe(S) && (I = S || I));
                let K = u(v)(A);
                return I === "vnode" && Fe(K) && V && (K = K[0]), V ? h(V)(K, I) : K
            }, message: u, type: g, interpolate: w, normalize: p
        };
    return A
}

let As = null;

function Bh(e) {
    As = e
}

function Hh(e, t, n) {
    As && As.emit(Eu.I18nInit, {timestamp: Date.now(), i18n: e, version: t, meta: n})
}

const Uh = Vh(Eu.FunctionTranslate);

function Vh(e) {
    return t => As && As.emit(e, t)
}

function Wh(e, t, n) {
    return [...new Set([n, ...Fe(t) ? t : xe(t) ? Object.keys(t) : oe(t) ? [t] : [n]])]
}

function Mu(e, t, n) {
    const s = oe(n) ? n : Rs, o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map);
    let r = o.__localeChainCache.get(s);
    if (!r) {
        r = [];
        let i = [n];
        for (; Fe(i);) i = ja(r, i, t);
        const a = Fe(t) || !he(t) ? t : t.default ? t.default : null;
        i = oe(a) ? [a] : a, Fe(i) && ja(r, i, !1), o.__localeChainCache.set(s, r)
    }
    return r
}

function ja(e, t, n) {
    let s = !0;
    for (let o = 0; o < t.length && we(s); o++) {
        const r = t[o];
        oe(r) && (s = zh(e, t[o], n))
    }
    return s
}

function zh(e, t, n) {
    let s;
    const o = t.split("-");
    do {
        const r = o.join("-");
        s = qh(e, r, n), o.splice(-1, 1)
    } while (o.length && s === !0);
    return s
}

function qh(e, t, n) {
    let s = !1;
    if (!e.includes(t) && (s = !0, t)) {
        s = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o), (Fe(n) || he(n)) && n[o] && (s = n[o])
    }
    return s
}

const Kh = "9.2.2", Po = -1, Rs = "en-US", Za = "", Ba = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function Gh() {
    return {
        upper: (e, t) => t === "text" && oe(e) ? e.toUpperCase() : t === "vnode" && xe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && oe(e) ? e.toLowerCase() : t === "vnode" && xe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && oe(e) ? Ba(e) : t === "vnode" && xe(e) && "__v_isVNode" in e ? Ba(e.children) : e
    }
}

let Su;

function Yh(e) {
    Su = e
}

let Tu;

function Xh(e) {
    Tu = e
}

let Ou;

function Jh(e) {
    Ou = e
}

let Au = null;
const Ha = e => {
    Au = e
}, Qh = () => Au;
let Lu = null;
const Ua = e => {
    Lu = e
}, e2 = () => Lu;
let Va = 0;

function t2(e = {}) {
    const t = oe(e.version) ? e.version : Kh, n = oe(e.locale) ? e.locale : Rs,
        s = Fe(e.fallbackLocale) || he(e.fallbackLocale) || oe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n,
        o = he(e.messages) ? e.messages : {[n]: {}}, r = he(e.datetimeFormats) ? e.datetimeFormats : {[n]: {}},
        i = he(e.numberFormats) ? e.numberFormats : {[n]: {}}, a = ot({}, e.modifiers || {}, Gh()),
        l = e.pluralRules || {}, c = Ve(e.missing) ? e.missing : null,
        u = we(e.missingWarn) || mn(e.missingWarn) ? e.missingWarn : !0,
        h = we(e.fallbackWarn) || mn(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat, w = !!e.unresolving,
        g = Ve(e.postTranslation) ? e.postTranslation : null, C = he(e.processor) ? e.processor : null,
        A = we(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter,
        M = Ve(e.messageCompiler) ? e.messageCompiler : Su, R = Ve(e.messageResolver) ? e.messageResolver : Tu || Ih,
        S = Ve(e.localeFallbacker) ? e.localeFallbacker : Ou || Wh,
        I = xe(e.fallbackContext) ? e.fallbackContext : void 0, V = Ve(e.onWarn) ? e.onWarn : th, K = e,
        D = xe(K.__datetimeFormatters) ? K.__datetimeFormatters : new Map,
        X = xe(K.__numberFormatters) ? K.__numberFormatters : new Map, ie = xe(K.__meta) ? K.__meta : {};
    Va++;
    const ue = {
        version: t,
        cid: Va,
        locale: n,
        fallbackLocale: s,
        messages: o,
        modifiers: a,
        pluralRules: l,
        missing: c,
        missingWarn: u,
        fallbackWarn: h,
        fallbackFormat: p,
        unresolving: w,
        postTranslation: g,
        processor: C,
        warnHtmlMessage: A,
        escapeParameter: v,
        messageCompiler: M,
        messageResolver: R,
        localeFallbacker: S,
        fallbackContext: I,
        onWarn: V,
        __meta: ie
    };
    return ue.datetimeFormats = r, ue.numberFormats = i, ue.__datetimeFormatters = D, ue.__numberFormatters = X, __INTLIFY_PROD_DEVTOOLS__ && Hh(ue, t, ie), ue
}

function Ci(e, t, n, s, o) {
    const {missing: r, onWarn: i} = e;
    if (r !== null) {
        const a = r(e, n, t, o);
        return oe(a) ? a : t
    } else return t
}

function os(e, t, n) {
    const s = e;
    s.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

const n2 = e => e;
let Wa = Object.create(null);

function s2(e, t = {}) {
    {
        const s = (t.onCacheKey || n2)(e), o = Wa[s];
        if (o) return o;
        let r = !1;
        const i = t.onError || oh;
        t.onError = c => {
            r = !0, i(c)
        };
        const {code: a} = Eh(e, t), l = new Function(`return ${a}`)();
        return r ? l : Wa[s] = l
    }
}

let Iu = Te.__EXTEND_POINT__;
const Qo = () => ++Iu,
    Dn = {INVALID_ARGUMENT: Iu, INVALID_DATE_ARGUMENT: Qo(), INVALID_ISO_DATE_ARGUMENT: Qo(), __EXTEND_POINT__: Qo()};

function jn(e) {
    return Io(e, null, void 0)
}

const za = () => "", Ft = e => Ve(e);

function qa(e, ...t) {
    const {
            fallbackFormat: n,
            postTranslation: s,
            unresolving: o,
            messageCompiler: r,
            fallbackLocale: i,
            messages: a
        } = e, [l, c] = Ir(...t), u = we(c.missingWarn) ? c.missingWarn : e.missingWarn,
        h = we(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
        p = we(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, w = !!c.resolvedMessage,
        g = oe(c.default) || we(c.default) ? we(c.default) ? r ? l : () => l : c.default : n ? r ? l : () => l : "",
        C = n || g !== "", A = oe(c.locale) ? c.locale : e.locale;
    p && o2(c);
    let [v, M, R] = w ? [l, A, a[A] || {}] : Pu(e, l, A, i, h, u), S = v, I = l;
    if (!w && !(oe(S) || Ft(S)) && C && (S = g, I = S), !w && (!(oe(S) || Ft(S)) || !oe(M))) return o ? Po : l;
    let V = !1;
    const K = () => {
        V = !0
    }, D = Ft(S) ? S : $u(e, l, M, S, I, K);
    if (V) return S;
    const X = a2(e, M, R, c), ie = Zh(X), ue = r2(e, D, ie), se = s ? s(ue, l) : ue;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const m = {
            timestamp: Date.now(),
            key: oe(l) ? l : Ft(S) ? S.key : "",
            locale: M || (Ft(S) ? S.locale : ""),
            format: oe(S) ? S : Ft(S) ? S.source : "",
            message: se
        };
        m.meta = ot({}, e.__meta, Qh() || {}), Uh(m)
    }
    return se
}

function o2(e) {
    Fe(e.list) ? e.list = e.list.map(t => oe(t) ? Ra(t) : t) : xe(e.named) && Object.keys(e.named).forEach(t => {
        oe(e.named[t]) && (e.named[t] = Ra(e.named[t]))
    })
}

function Pu(e, t, n, s, o, r) {
    const {messages: i, onWarn: a, messageResolver: l, localeFallbacker: c} = e, u = c(e, s, n);
    let h = {}, p, w = null;
    const g = "translate";
    for (let C = 0; C < u.length && (p = u[C], h = i[p] || {}, (w = l(h, t)) === null && (w = h[t]), !(oe(w) || Ve(w))); C++) {
        const A = Ci(e, t, p, r, g);
        A !== t && (w = A)
    }
    return [w, p, h]
}

function $u(e, t, n, s, o, r) {
    const {messageCompiler: i, warnHtmlMessage: a} = e;
    if (Ft(s)) {
        const c = s;
        return c.locale = c.locale || n, c.key = c.key || t, c
    }
    if (i == null) {
        const c = () => s;
        return c.locale = n, c.key = t, c
    }
    const l = i(s, i2(e, n, o, s, a, r));
    return l.locale = n, l.key = t, l.source = s, l
}

function r2(e, t, n) {
    return t(n)
}

function Ir(...e) {
    const [t, n, s] = e, o = {};
    if (!oe(t) && !Qe(t) && !Ft(t)) throw jn(Dn.INVALID_ARGUMENT);
    const r = Qe(t) ? String(t) : (Ft(t), t);
    return Qe(n) ? o.plural = n : oe(n) ? o.default = n : he(n) && !Lo(n) ? o.named = n : Fe(n) && (o.list = n), Qe(s) ? o.plural = s : oe(s) ? o.default = s : he(s) && ot(o, s), [r, o]
}

function i2(e, t, n, s, o, r) {
    return {
        warnHtmlMessage: o, onError: i => {
            throw r && r(i), i
        }, onCacheKey: i => Jd(t, n, i)
    }
}

function a2(e, t, n, s) {
    const {
        modifiers: o,
        pluralRules: r,
        messageResolver: i,
        fallbackLocale: a,
        fallbackWarn: l,
        missingWarn: c,
        fallbackContext: u
    } = e, p = {
        locale: t, modifiers: o, pluralRules: r, messages: w => {
            let g = i(n, w);
            if (g == null && u) {
                const [, , C] = Pu(u, w, t, a, l, c);
                g = i(C, w)
            }
            if (oe(g)) {
                let C = !1;
                const v = $u(e, w, t, g, w, () => {
                    C = !0
                });
                return C ? za : v
            } else return Ft(g) ? g : za
        }
    };
    return e.processor && (p.processor = e.processor), s.list && (p.list = s.list), s.named && (p.named = s.named), Qe(s.plural) && (p.pluralIndex = s.plural), p
}

function Ka(e, ...t) {
    const {
            datetimeFormats: n,
            unresolving: s,
            fallbackLocale: o,
            onWarn: r,
            localeFallbacker: i
        } = e, {__datetimeFormatters: a} = e, [l, c, u, h] = Pr(...t),
        p = we(u.missingWarn) ? u.missingWarn : e.missingWarn;
    we(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const w = !!u.part, g = oe(u.locale) ? u.locale : e.locale, C = i(e, o, g);
    if (!oe(l) || l === "") return new Intl.DateTimeFormat(g, h).format(c);
    let A = {}, v, M = null;
    const R = "datetime format";
    for (let V = 0; V < C.length && (v = C[V], A = n[v] || {}, M = A[l], !he(M)); V++) Ci(e, l, v, p, R);
    if (!he(M) || !oe(v)) return s ? Po : l;
    let S = `${v}__${l}`;
    Lo(h) || (S = `${S}__${JSON.stringify(h)}`);
    let I = a.get(S);
    return I || (I = new Intl.DateTimeFormat(v, ot({}, M, h)), a.set(S, I)), w ? I.formatToParts(c) : I.format(c)
}

const Ru = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function Pr(...e) {
    const [t, n, s, o] = e, r = {};
    let i = {}, a;
    if (oe(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l) throw jn(Dn.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(c);
        try {
            a.toISOString()
        } catch {
            throw jn(Dn.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (eh(t)) {
        if (isNaN(t.getTime())) throw jn(Dn.INVALID_DATE_ARGUMENT);
        a = t
    } else if (Qe(t)) a = t; else throw jn(Dn.INVALID_ARGUMENT);
    return oe(n) ? r.key = n : he(n) && Object.keys(n).forEach(l => {
        Ru.includes(l) ? i[l] = n[l] : r[l] = n[l]
    }), oe(s) ? r.locale = s : he(s) && (i = s), he(o) && (i = o), [r.key || "", a, r, i]
}

function Ga(e, t, n) {
    const s = e;
    for (const o in n) {
        const r = `${t}__${o}`;
        s.__datetimeFormatters.has(r) && s.__datetimeFormatters.delete(r)
    }
}

function Ya(e, ...t) {
    const {
        numberFormats: n,
        unresolving: s,
        fallbackLocale: o,
        onWarn: r,
        localeFallbacker: i
    } = e, {__numberFormatters: a} = e, [l, c, u, h] = $r(...t), p = we(u.missingWarn) ? u.missingWarn : e.missingWarn;
    we(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const w = !!u.part, g = oe(u.locale) ? u.locale : e.locale, C = i(e, o, g);
    if (!oe(l) || l === "") return new Intl.NumberFormat(g, h).format(c);
    let A = {}, v, M = null;
    const R = "number format";
    for (let V = 0; V < C.length && (v = C[V], A = n[v] || {}, M = A[l], !he(M)); V++) Ci(e, l, v, p, R);
    if (!he(M) || !oe(v)) return s ? Po : l;
    let S = `${v}__${l}`;
    Lo(h) || (S = `${S}__${JSON.stringify(h)}`);
    let I = a.get(S);
    return I || (I = new Intl.NumberFormat(v, ot({}, M, h)), a.set(S, I)), w ? I.formatToParts(c) : I.format(c)
}

const Nu = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function $r(...e) {
    const [t, n, s, o] = e, r = {};
    let i = {};
    if (!Qe(t)) throw jn(Dn.INVALID_ARGUMENT);
    const a = t;
    return oe(n) ? r.key = n : he(n) && Object.keys(n).forEach(l => {
        Nu.includes(l) ? i[l] = n[l] : r[l] = n[l]
    }), oe(s) ? r.locale = s : he(s) && (i = s), he(o) && (i = o), [r.key || "", a, r, i]
}

function Xa(e, t, n) {
    const s = e;
    for (const o in n) {
        const r = `${t}__${o}`;
        s.__numberFormatters.has(r) && s.__numberFormatters.delete(r)
    }
}

typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ms().__INTLIFY_PROD_DEVTOOLS__ = !1);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const l2 = "9.2.2";

function c2() {
    typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ms().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ms().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ms().__INTLIFY_PROD_DEVTOOLS__ = !1)
}

let Fu = Te.__EXTEND_POINT__;
const ct = () => ++Fu, Ke = {
    UNEXPECTED_RETURN_TYPE: Fu,
    INVALID_ARGUMENT: ct(),
    MUST_BE_CALL_SETUP_TOP: ct(),
    NOT_INSLALLED: ct(),
    NOT_AVAILABLE_IN_LEGACY_MODE: ct(),
    REQUIRED_VALUE: ct(),
    INVALID_VALUE: ct(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ct(),
    NOT_INSLALLED_WITH_PROVIDE: ct(),
    UNEXPECTED_ERROR: ct(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: ct(),
    BRIDGE_SUPPORT_VUE_2_ONLY: ct(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ct(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ct(),
    __EXTEND_POINT__: ct()
};

function et(e, ...t) {
    return Io(e, null, void 0)
}

const Rr = gn("__transrateVNode"), Nr = gn("__datetimeParts"), Fr = gn("__numberParts"), xu = gn("__setPluralRules");
gn("__intlifyMeta");
const Du = gn("__injectWithOption");

function xr(e) {
    if (!xe(e)) return e;
    for (const t in e) if (yi(e, t)) if (!t.includes(".")) xe(e[t]) && xr(e[t]); else {
        const n = t.split("."), s = n.length - 1;
        let o = e;
        for (let r = 0; r < s; r++) n[r] in o || (o[n[r]] = {}), o = o[n[r]];
        o[n[s]] = e[t], delete e[t], xe(o[n[s]]) && xr(o[n[s]])
    }
    return e
}

function $o(e, t) {
    const {messages: n, __i18n: s, messageResolver: o, flatJson: r} = t, i = he(n) ? n : Fe(s) ? {} : {[e]: {}};
    if (Fe(s) && s.forEach(a => {
        if ("locale" in a && "resource" in a) {
            const {locale: l, resource: c} = a;
            l ? (i[l] = i[l] || {}, gs(c, i[l])) : gs(c, i)
        } else oe(a) && gs(JSON.parse(a), i)
    }), o == null && r) for (const a in i) yi(i, a) && xr(i[a]);
    return i
}

const zs = e => !xe(e) || Fe(e);

function gs(e, t) {
    if (zs(e) || zs(t)) throw et(Ke.INVALID_VALUE);
    for (const n in e) yi(e, n) && (zs(e[n]) || zs(t[n]) ? t[n] = e[n] : gs(e[n], t[n]))
}

function ju(e) {
    return e.type
}

function Zu(e, t, n) {
    let s = xe(t.messages) ? t.messages : {};
    "__i18nGlobal" in n && (s = $o(e.locale.value, {messages: s, __i18n: n.__i18nGlobal}));
    const o = Object.keys(s);
    o.length && o.forEach(r => {
        e.mergeLocaleMessage(r, s[r])
    });
    {
        if (xe(t.datetimeFormats)) {
            const r = Object.keys(t.datetimeFormats);
            r.length && r.forEach(i => {
                e.mergeDateTimeFormat(i, t.datetimeFormats[i])
            })
        }
        if (xe(t.numberFormats)) {
            const r = Object.keys(t.numberFormats);
            r.length && r.forEach(i => {
                e.mergeNumberFormat(i, t.numberFormats[i])
            })
        }
    }
}

function Ja(e) {
    return Y($s, null, e, 0)
}

const Qa = "__INTLIFY_META__";
let el = 0;

function tl(e) {
    return (t, n, s, o) => e(n, s, Wn() || void 0, o)
}

const u2 = () => {
    const e = Wn();
    let t = null;
    return e && (t = ju(e)[Qa]) ? {[Qa]: t} : null
};

function Ei(e = {}, t) {
    const {__root: n} = e, s = n === void 0;
    let o = we(e.inheritLocale) ? e.inheritLocale : !0;
    const r = pe(n && o ? n.locale.value : oe(e.locale) ? e.locale : Rs),
        i = pe(n && o ? n.fallbackLocale.value : oe(e.fallbackLocale) || Fe(e.fallbackLocale) || he(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value),
        a = pe($o(r.value, e)), l = pe(he(e.datetimeFormats) ? e.datetimeFormats : {[r.value]: {}}),
        c = pe(he(e.numberFormats) ? e.numberFormats : {[r.value]: {}});
    let u = n ? n.missingWarn : we(e.missingWarn) || mn(e.missingWarn) ? e.missingWarn : !0,
        h = n ? n.fallbackWarn : we(e.fallbackWarn) || mn(e.fallbackWarn) ? e.fallbackWarn : !0,
        p = n ? n.fallbackRoot : we(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat,
        g = Ve(e.missing) ? e.missing : null, C = Ve(e.missing) ? tl(e.missing) : null,
        A = Ve(e.postTranslation) ? e.postTranslation : null,
        v = n ? n.warnHtmlMessage : we(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, M = !!e.escapeParameter;
    const R = n ? n.modifiers : he(e.modifiers) ? e.modifiers : {};
    let S = e.pluralRules || n && n.pluralRules, I;
    I = (() => {
        s && Ua(null);
        const L = {
            version: l2,
            locale: r.value,
            fallbackLocale: i.value,
            messages: a.value,
            modifiers: R,
            pluralRules: S,
            missing: C === null ? void 0 : C,
            missingWarn: u,
            fallbackWarn: h,
            fallbackFormat: w,
            unresolving: !0,
            postTranslation: A === null ? void 0 : A,
            warnHtmlMessage: v,
            escapeParameter: M,
            messageResolver: e.messageResolver,
            __meta: {framework: "vue"}
        };
        L.datetimeFormats = l.value, L.numberFormats = c.value, L.__datetimeFormatters = he(I) ? I.__datetimeFormatters : void 0, L.__numberFormatters = he(I) ? I.__numberFormatters : void 0;
        const F = t2(L);
        return s && Ua(F), F
    })(), os(I, r.value, i.value);

    function K() {
        return [r.value, i.value, a.value, l.value, c.value]
    }

    const D = Q({
        get: () => r.value, set: L => {
            r.value = L, I.locale = r.value
        }
    }), X = Q({
        get: () => i.value, set: L => {
            i.value = L, I.fallbackLocale = i.value, os(I, r.value, L)
        }
    }), ie = Q(() => a.value), ue = Q(() => l.value), se = Q(() => c.value);

    function m() {
        return Ve(A) ? A : null
    }

    function P(L) {
        A = L, I.postTranslation = L
    }

    function x() {
        return g
    }

    function G(L) {
        L !== null && (C = tl(L)), g = L, I.missing = C
    }

    const W = (L, F, ae, ce, ve, Ae) => {
        K();
        let ke;
        if (__INTLIFY_PROD_DEVTOOLS__) try {
            Ha(u2()), s || (I.fallbackContext = n ? e2() : void 0), ke = L(I)
        } finally {
            Ha(null), s || (I.fallbackContext = void 0)
        } else ke = L(I);
        if (Qe(ke) && ke === Po) {
            const [Be, yt] = F();
            return n && p ? ce(n) : ve(Be)
        } else {
            if (Ae(ke)) return ke;
            throw et(Ke.UNEXPECTED_RETURN_TYPE)
        }
    };

    function te(...L) {
        return W(F => Reflect.apply(qa, null, [F, ...L]), () => Ir(...L), "translate", F => Reflect.apply(F.t, F, [...L]), F => F, F => oe(F))
    }

    function de(...L) {
        const [F, ae, ce] = L;
        if (ce && !xe(ce)) throw et(Ke.INVALID_ARGUMENT);
        return te(F, ae, ot({resolvedMessage: !0}, ce || {}))
    }

    function me(...L) {
        return W(F => Reflect.apply(Ka, null, [F, ...L]), () => Pr(...L), "datetime format", F => Reflect.apply(F.d, F, [...L]), () => Za, F => oe(F))
    }

    function $e(...L) {
        return W(F => Reflect.apply(Ya, null, [F, ...L]), () => $r(...L), "number format", F => Reflect.apply(F.n, F, [...L]), () => Za, F => oe(F))
    }

    function Oe(L) {
        return L.map(F => oe(F) || Qe(F) || we(F) ? Ja(String(F)) : F)
    }

    const Xe = {normalize: Oe, interpolate: L => L, type: "vnode"};

    function bt(...L) {
        return W(F => {
            let ae;
            const ce = F;
            try {
                ce.processor = Xe, ae = Reflect.apply(qa, null, [ce, ...L])
            } finally {
                ce.processor = null
            }
            return ae
        }, () => Ir(...L), "translate", F => F[Rr](...L), F => [Ja(F)], F => Fe(F))
    }

    function De(...L) {
        return W(F => Reflect.apply(Ya, null, [F, ...L]), () => $r(...L), "number format", F => F[Fr](...L), () => [], F => oe(F) || Fe(F))
    }

    function j(...L) {
        return W(F => Reflect.apply(Ka, null, [F, ...L]), () => Pr(...L), "datetime format", F => F[Nr](...L), () => [], F => oe(F) || Fe(F))
    }

    function ne(L) {
        S = L, I.pluralRules = S
    }

    function ee(L, F) {
        const ae = oe(F) ? F : r.value, ce = y(ae);
        return I.messageResolver(ce, L) !== null
    }

    function Z(L) {
        let F = null;
        const ae = Mu(I, i.value, r.value);
        for (let ce = 0; ce < ae.length; ce++) {
            const ve = a.value[ae[ce]] || {}, Ae = I.messageResolver(ve, L);
            if (Ae != null) {
                F = Ae;
                break
            }
        }
        return F
    }

    function re(L) {
        const F = Z(L);
        return F ?? (n ? n.tm(L) || {} : {})
    }

    function y(L) {
        return a.value[L] || {}
    }

    function f(L, F) {
        a.value[L] = F, I.messages = a.value
    }

    function d(L, F) {
        a.value[L] = a.value[L] || {}, gs(F, a.value[L]), I.messages = a.value
    }

    function b(L) {
        return l.value[L] || {}
    }

    function O(L, F) {
        l.value[L] = F, I.datetimeFormats = l.value, Ga(I, L, F)
    }

    function $(L, F) {
        l.value[L] = ot(l.value[L] || {}, F), I.datetimeFormats = l.value, Ga(I, L, F)
    }

    function B(L) {
        return c.value[L] || {}
    }

    function z(L, F) {
        c.value[L] = F, I.numberFormats = c.value, Xa(I, L, F)
    }

    function J(L, F) {
        c.value[L] = ot(c.value[L] || {}, F), I.numberFormats = c.value, Xa(I, L, F)
    }

    el++, n && Ar && (ft(n.locale, L => {
        o && (r.value = L, I.locale = L, os(I, r.value, i.value))
    }), ft(n.fallbackLocale, L => {
        o && (i.value = L, I.fallbackLocale = L, os(I, r.value, i.value))
    }));
    const H = {
        id: el,
        locale: D,
        fallbackLocale: X,
        get inheritLocale() {
            return o
        },
        set inheritLocale(L) {
            o = L, L && n && (r.value = n.locale.value, i.value = n.fallbackLocale.value, os(I, r.value, i.value))
        },
        get availableLocales() {
            return Object.keys(a.value).sort()
        },
        messages: ie,
        get modifiers() {
            return R
        },
        get pluralRules() {
            return S || {}
        },
        get isGlobal() {
            return s
        },
        get missingWarn() {
            return u
        },
        set missingWarn(L) {
            u = L, I.missingWarn = u
        },
        get fallbackWarn() {
            return h
        },
        set fallbackWarn(L) {
            h = L, I.fallbackWarn = h
        },
        get fallbackRoot() {
            return p
        },
        set fallbackRoot(L) {
            p = L
        },
        get fallbackFormat() {
            return w
        },
        set fallbackFormat(L) {
            w = L, I.fallbackFormat = w
        },
        get warnHtmlMessage() {
            return v
        },
        set warnHtmlMessage(L) {
            v = L, I.warnHtmlMessage = L
        },
        get escapeParameter() {
            return M
        },
        set escapeParameter(L) {
            M = L, I.escapeParameter = L
        },
        t: te,
        getLocaleMessage: y,
        setLocaleMessage: f,
        mergeLocaleMessage: d,
        getPostTranslationHandler: m,
        setPostTranslationHandler: P,
        getMissingHandler: x,
        setMissingHandler: G,
        [xu]: ne
    };
    return H.datetimeFormats = ue, H.numberFormats = se, H.rt = de, H.te = ee, H.tm = re, H.d = me, H.n = $e, H.getDateTimeFormat = b, H.setDateTimeFormat = O, H.mergeDateTimeFormat = $, H.getNumberFormat = B, H.setNumberFormat = z, H.mergeNumberFormat = J, H[Du] = e.__injectWithOption, H[Rr] = bt, H[Nr] = j, H[Fr] = De, H
}

function f2(e) {
    const t = oe(e.locale) ? e.locale : Rs,
        n = oe(e.fallbackLocale) || Fe(e.fallbackLocale) || he(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
        s = Ve(e.missing) ? e.missing : void 0,
        o = we(e.silentTranslationWarn) || mn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
        r = we(e.silentFallbackWarn) || mn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
        i = we(e.fallbackRoot) ? e.fallbackRoot : !0, a = !!e.formatFallbackMessages,
        l = he(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules,
        u = Ve(e.postTranslation) ? e.postTranslation : void 0,
        h = oe(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, p = !!e.escapeParameterHtml,
        w = we(e.sync) ? e.sync : !0;
    let g = e.messages;
    if (he(e.sharedMessages)) {
        const I = e.sharedMessages;
        g = Object.keys(I).reduce((K, D) => {
            const X = K[D] || (K[D] = {});
            return ot(X, I[D]), K
        }, g || {})
    }
    const {__i18n: C, __root: A, __injectWithOption: v} = e, M = e.datetimeFormats, R = e.numberFormats, S = e.flatJson;
    return {
        locale: t,
        fallbackLocale: n,
        messages: g,
        flatJson: S,
        datetimeFormats: M,
        numberFormats: R,
        missing: s,
        missingWarn: o,
        fallbackWarn: r,
        fallbackRoot: i,
        fallbackFormat: a,
        modifiers: l,
        pluralRules: c,
        postTranslation: u,
        warnHtmlMessage: h,
        escapeParameter: p,
        messageResolver: e.messageResolver,
        inheritLocale: w,
        __i18n: C,
        __root: A,
        __injectWithOption: v
    }
}

function Dr(e = {}, t) {
    {
        const n = Ei(f2(e)), s = {
            id: n.id, get locale() {
                return n.locale.value
            }, set locale(o) {
                n.locale.value = o
            }, get fallbackLocale() {
                return n.fallbackLocale.value
            }, set fallbackLocale(o) {
                n.fallbackLocale.value = o
            }, get messages() {
                return n.messages.value
            }, get datetimeFormats() {
                return n.datetimeFormats.value
            }, get numberFormats() {
                return n.numberFormats.value
            }, get availableLocales() {
                return n.availableLocales
            }, get formatter() {
                return {
                    interpolate() {
                        return []
                    }
                }
            }, set formatter(o) {
            }, get missing() {
                return n.getMissingHandler()
            }, set missing(o) {
                n.setMissingHandler(o)
            }, get silentTranslationWarn() {
                return we(n.missingWarn) ? !n.missingWarn : n.missingWarn
            }, set silentTranslationWarn(o) {
                n.missingWarn = we(o) ? !o : o
            }, get silentFallbackWarn() {
                return we(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
            }, set silentFallbackWarn(o) {
                n.fallbackWarn = we(o) ? !o : o
            }, get modifiers() {
                return n.modifiers
            }, get formatFallbackMessages() {
                return n.fallbackFormat
            }, set formatFallbackMessages(o) {
                n.fallbackFormat = o
            }, get postTranslation() {
                return n.getPostTranslationHandler()
            }, set postTranslation(o) {
                n.setPostTranslationHandler(o)
            }, get sync() {
                return n.inheritLocale
            }, set sync(o) {
                n.inheritLocale = o
            }, get warnHtmlInMessage() {
                return n.warnHtmlMessage ? "warn" : "off"
            }, set warnHtmlInMessage(o) {
                n.warnHtmlMessage = o !== "off"
            }, get escapeParameterHtml() {
                return n.escapeParameter
            }, set escapeParameterHtml(o) {
                n.escapeParameter = o
            }, get preserveDirectiveContent() {
                return !0
            }, set preserveDirectiveContent(o) {
            }, get pluralizationRules() {
                return n.pluralRules || {}
            }, __composer: n, t(...o) {
                const [r, i, a] = o, l = {};
                let c = null, u = null;
                if (!oe(r)) throw et(Ke.INVALID_ARGUMENT);
                const h = r;
                return oe(i) ? l.locale = i : Fe(i) ? c = i : he(i) && (u = i), Fe(a) ? c = a : he(a) && (u = a), Reflect.apply(n.t, n, [h, c || u || {}, l])
            }, rt(...o) {
                return Reflect.apply(n.rt, n, [...o])
            }, tc(...o) {
                const [r, i, a] = o, l = {plural: 1};
                let c = null, u = null;
                if (!oe(r)) throw et(Ke.INVALID_ARGUMENT);
                const h = r;
                return oe(i) ? l.locale = i : Qe(i) ? l.plural = i : Fe(i) ? c = i : he(i) && (u = i), oe(a) ? l.locale = a : Fe(a) ? c = a : he(a) && (u = a), Reflect.apply(n.t, n, [h, c || u || {}, l])
            }, te(o, r) {
                return n.te(o, r)
            }, tm(o) {
                return n.tm(o)
            }, getLocaleMessage(o) {
                return n.getLocaleMessage(o)
            }, setLocaleMessage(o, r) {
                n.setLocaleMessage(o, r)
            }, mergeLocaleMessage(o, r) {
                n.mergeLocaleMessage(o, r)
            }, d(...o) {
                return Reflect.apply(n.d, n, [...o])
            }, getDateTimeFormat(o) {
                return n.getDateTimeFormat(o)
            }, setDateTimeFormat(o, r) {
                n.setDateTimeFormat(o, r)
            }, mergeDateTimeFormat(o, r) {
                n.mergeDateTimeFormat(o, r)
            }, n(...o) {
                return Reflect.apply(n.n, n, [...o])
            }, getNumberFormat(o) {
                return n.getNumberFormat(o)
            }, setNumberFormat(o, r) {
                n.setNumberFormat(o, r)
            }, mergeNumberFormat(o, r) {
                n.mergeNumberFormat(o, r)
            }, getChoiceIndex(o, r) {
                return -1
            }, __onComponentInstanceCreated(o) {
                const {componentInstanceCreatedListener: r} = e;
                r && r(o, s)
            }
        };
        return s
    }
}

const Mi = {
    tag: {type: [String, Object]},
    locale: {type: String},
    scope: {type: String, validator: e => e === "parent" || e === "global", default: "parent"},
    i18n: {type: Object}
};

function d2({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, o) => s = [...s, ...Fe(o.children) ? o.children : [o]], []) : t.reduce((n, s) => {
        const o = e[s];
        return o && (n[s] = o()), n
    }, {})
}

function Bu(e) {
    return _e
}

const nl = {
    name: "i18n-t",
    props: ot({
        keypath: {type: String, required: !0},
        plural: {type: [Number, String], validator: e => Qe(e) || !isNaN(e)}
    }, Mi),
    setup(e, t) {
        const {slots: n, attrs: s} = t, o = e.i18n || nt({useScope: e.scope, __useComponent: !0});
        return () => {
            const r = Object.keys(n).filter(h => h !== "_"), i = {};
            e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = oe(e.plural) ? +e.plural : e.plural);
            const a = d2(t, r), l = o[Rr](e.keypath, a, i), c = ot({}, s), u = oe(e.tag) || xe(e.tag) ? e.tag : Bu();
            return zt(u, c, l)
        }
    }
};

function h2(e) {
    return Fe(e) && !oe(e[0])
}

function Hu(e, t, n, s) {
    const {slots: o, attrs: r} = t;
    return () => {
        const i = {part: !0};
        let a = {};
        e.locale && (i.locale = e.locale), oe(e.format) ? i.key = e.format : xe(e.format) && (oe(e.format.key) && (i.key = e.format.key), a = Object.keys(e.format).reduce((p, w) => n.includes(w) ? ot({}, p, {[w]: e.format[w]}) : p, {}));
        const l = s(e.value, i, a);
        let c = [i.key];
        Fe(l) ? c = l.map((p, w) => {
            const g = o[p.type], C = g ? g({[p.type]: p.value, index: w, parts: l}) : [p.value];
            return h2(C) && (C[0].key = `${p.type}-${w}`), C
        }) : oe(l) && (c = [l]);
        const u = ot({}, r), h = oe(e.tag) || xe(e.tag) ? e.tag : Bu();
        return zt(h, u, c)
    }
}

const sl = {
    name: "i18n-n",
    props: ot({value: {type: Number, required: !0}, format: {type: [String, Object]}}, Mi),
    setup(e, t) {
        const n = e.i18n || nt({useScope: "parent", __useComponent: !0});
        return Hu(e, t, Nu, (...s) => n[Fr](...s))
    }
}, ol = {
    name: "i18n-d",
    props: ot({value: {type: [Number, Date], required: !0}, format: {type: [String, Object]}}, Mi),
    setup(e, t) {
        const n = e.i18n || nt({useScope: "parent", __useComponent: !0});
        return Hu(e, t, Ru, (...s) => n[Nr](...s))
    }
};

function p2(e, t) {
    const n = e;
    if (e.mode === "composition") return n.__getInstance(t) || e.global;
    {
        const s = n.__getInstance(t);
        return s != null ? s.__composer : e.global.__composer
    }
}

function m2(e) {
    const t = i => {
        const {instance: a, modifiers: l, value: c} = i;
        if (!a || !a.$) throw et(Ke.UNEXPECTED_ERROR);
        const u = p2(e, a.$), h = rl(c);
        return [Reflect.apply(u.t, u, [...il(h)]), u]
    };
    return {
        created: (i, a) => {
            const [l, c] = t(a);
            Ar && e.global === c && (i.__i18nWatcher = ft(c.locale, () => {
                a.instance && a.instance.$forceUpdate()
            })), i.__composer = c, i.textContent = l
        }, unmounted: i => {
            Ar && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer)
        }, beforeUpdate: (i, {value: a}) => {
            if (i.__composer) {
                const l = i.__composer, c = rl(a);
                i.textContent = Reflect.apply(l.t, l, [...il(c)])
            }
        }, getSSRProps: i => {
            const [a] = t(i);
            return {textContent: a}
        }
    }
}

function rl(e) {
    if (oe(e)) return {path: e};
    if (he(e)) {
        if (!("path" in e)) throw et(Ke.REQUIRED_VALUE, "path");
        return e
    } else throw et(Ke.INVALID_VALUE)
}

function il(e) {
    const {path: t, locale: n, args: s, choice: o, plural: r} = e, i = {}, a = s || {};
    return oe(n) && (i.locale = n), Qe(o) && (i.plural = o), Qe(r) && (i.plural = r), [t, a, i]
}

function g2(e, t, ...n) {
    const s = he(n[0]) ? n[0] : {}, o = !!s.useI18nComponentName;
    (we(s.globalInstall) ? s.globalInstall : !0) && (e.component(o ? "i18n" : nl.name, nl), e.component(sl.name, sl), e.component(ol.name, ol)), e.directive("t", m2(t))
}

function _2(e, t, n) {
    return {
        beforeCreate() {
            const s = Wn();
            if (!s) throw et(Ke.UNEXPECTED_ERROR);
            const o = this.$options;
            if (o.i18n) {
                const r = o.i18n;
                o.__i18n && (r.__i18n = o.__i18n), r.__root = t, this === this.$root ? this.$i18n = al(e, r) : (r.__injectWithOption = !0, this.$i18n = Dr(r))
            } else o.__i18n ? this === this.$root ? this.$i18n = al(e, o) : this.$i18n = Dr({
                __i18n: o.__i18n,
                __injectWithOption: !0,
                __root: t
            }) : this.$i18n = e;
            o.__i18nGlobal && Zu(t, o, o), e.__onComponentInstanceCreated(this.$i18n), n.__setInstance(s, this.$i18n), this.$t = (...r) => this.$i18n.t(...r), this.$rt = (...r) => this.$i18n.rt(...r), this.$tc = (...r) => this.$i18n.tc(...r), this.$te = (r, i) => this.$i18n.te(r, i), this.$d = (...r) => this.$i18n.d(...r), this.$n = (...r) => this.$i18n.n(...r), this.$tm = r => this.$i18n.tm(r)
        }, mounted() {
        }, unmounted() {
            const s = Wn();
            if (!s) throw et(Ke.UNEXPECTED_ERROR);
            delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, n.__deleteInstance(s), delete this.$i18n
        }
    }
}

function al(e, t) {
    e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[xu](t.pluralizationRules || e.pluralizationRules);
    const n = $o(e.locale, {messages: t.messages, __i18n: t.__i18n});
    return Object.keys(n).forEach(s => e.mergeLocaleMessage(s, n[s])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(s => e.mergeDateTimeFormat(s, t.datetimeFormats[s])), t.numberFormats && Object.keys(t.numberFormats).forEach(s => e.mergeNumberFormat(s, t.numberFormats[s])), e
}

const v2 = gn("global-vue-i18n");

function b2(e = {}, t) {
    const n = __VUE_I18N_LEGACY_API__ && we(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
        s = we(e.globalInjection) ? e.globalInjection : !0,
        o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, r = new Map, [i, a] = y2(e, n), l = gn("");

    function c(p) {
        return r.get(p) || null
    }

    function u(p, w) {
        r.set(p, w)
    }

    function h(p) {
        r.delete(p)
    }

    {
        const p = {
            get mode() {
                return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition"
            }, get allowComposition() {
                return o
            }, async install(w, ...g) {
                w.__VUE_I18N_SYMBOL__ = l, w.provide(w.__VUE_I18N_SYMBOL__, p), !n && s && A2(w, p.global), __VUE_I18N_FULL_INSTALL__ && g2(w, p, ...g), __VUE_I18N_LEGACY_API__ && n && w.mixin(_2(a, a.__composer, p));
                const C = w.unmount;
                w.unmount = () => {
                    p.dispose(), C()
                }
            }, get global() {
                return a
            }, dispose() {
                i.stop()
            }, __instances: r, __getInstance: c, __setInstance: u, __deleteInstance: h
        };
        return p
    }
}

function nt(e = {}) {
    const t = Wn();
    if (t == null) throw et(Ke.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw et(Ke.NOT_INSLALLED);
    const n = k2(t), s = C2(n), o = ju(t), r = w2(e, o);
    if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
        if (!n.allowComposition) throw et(Ke.NOT_AVAILABLE_IN_LEGACY_MODE);
        return S2(t, r, s, e)
    }
    if (r === "global") return Zu(s, e, o), s;
    if (r === "parent") {
        let l = E2(n, t, e.__useComponent);
        return l == null && (l = s), l
    }
    const i = n;
    let a = i.__getInstance(t);
    if (a == null) {
        const l = ot({}, e);
        "__i18n" in o && (l.__i18n = o.__i18n), s && (l.__root = s), a = Ei(l), M2(i, t), i.__setInstance(t, a)
    }
    return a
}

function y2(e, t, n) {
    const s = Jr();
    {
        const o = __VUE_I18N_LEGACY_API__ && t ? s.run(() => Dr(e)) : s.run(() => Ei(e));
        if (o == null) throw et(Ke.UNEXPECTED_ERROR);
        return [s, o]
    }
}

function k2(e) {
    {
        const t = it(e.isCE ? v2 : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t) throw et(e.isCE ? Ke.NOT_INSLALLED_WITH_PROVIDE : Ke.UNEXPECTED_ERROR);
        return t
    }
}

function w2(e, t) {
    return Lo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function C2(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}

function E2(e, t, n = !1) {
    let s = null;
    const o = t.root;
    let r = t.parent;
    for (; r != null;) {
        const i = e;
        if (e.mode === "composition") s = i.__getInstance(r); else if (__VUE_I18N_LEGACY_API__) {
            const a = i.__getInstance(r);
            a != null && (s = a.__composer, n && s && !s[Du] && (s = null))
        }
        if (s != null || o === r) break;
        r = r.parent
    }
    return s
}

function M2(e, t, n) {
    Mt(() => {
    }, t), Qn(() => {
        e.__deleteInstance(t)
    }, t)
}

function S2(e, t, n, s = {}) {
    const o = t === "local", r = $c(null);
    if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw et(Ke.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const i = we(s.inheritLocale) ? s.inheritLocale : !0,
        a = pe(o && i ? n.locale.value : oe(s.locale) ? s.locale : Rs),
        l = pe(o && i ? n.fallbackLocale.value : oe(s.fallbackLocale) || Fe(s.fallbackLocale) || he(s.fallbackLocale) || s.fallbackLocale === !1 ? s.fallbackLocale : a.value),
        c = pe($o(a.value, s)), u = pe(he(s.datetimeFormats) ? s.datetimeFormats : {[a.value]: {}}),
        h = pe(he(s.numberFormats) ? s.numberFormats : {[a.value]: {}}),
        p = o ? n.missingWarn : we(s.missingWarn) || mn(s.missingWarn) ? s.missingWarn : !0,
        w = o ? n.fallbackWarn : we(s.fallbackWarn) || mn(s.fallbackWarn) ? s.fallbackWarn : !0,
        g = o ? n.fallbackRoot : we(s.fallbackRoot) ? s.fallbackRoot : !0, C = !!s.fallbackFormat,
        A = Ve(s.missing) ? s.missing : null, v = Ve(s.postTranslation) ? s.postTranslation : null,
        M = o ? n.warnHtmlMessage : we(s.warnHtmlMessage) ? s.warnHtmlMessage : !0, R = !!s.escapeParameter,
        S = o ? n.modifiers : he(s.modifiers) ? s.modifiers : {}, I = s.pluralRules || o && n.pluralRules;

    function V() {
        return [a.value, l.value, c.value, u.value, h.value]
    }

    const K = Q({
        get: () => r.value ? r.value.locale.value : a.value, set: d => {
            r.value && (r.value.locale.value = d), a.value = d
        }
    }), D = Q({
        get: () => r.value ? r.value.fallbackLocale.value : l.value, set: d => {
            r.value && (r.value.fallbackLocale.value = d), l.value = d
        }
    }), X = Q(() => r.value ? r.value.messages.value : c.value), ie = Q(() => u.value), ue = Q(() => h.value);

    function se() {
        return r.value ? r.value.getPostTranslationHandler() : v
    }

    function m(d) {
        r.value && r.value.setPostTranslationHandler(d)
    }

    function P() {
        return r.value ? r.value.getMissingHandler() : A
    }

    function x(d) {
        r.value && r.value.setMissingHandler(d)
    }

    function G(d) {
        return V(), d()
    }

    function W(...d) {
        return r.value ? G(() => Reflect.apply(r.value.t, null, [...d])) : G(() => "")
    }

    function te(...d) {
        return r.value ? Reflect.apply(r.value.rt, null, [...d]) : ""
    }

    function de(...d) {
        return r.value ? G(() => Reflect.apply(r.value.d, null, [...d])) : G(() => "")
    }

    function me(...d) {
        return r.value ? G(() => Reflect.apply(r.value.n, null, [...d])) : G(() => "")
    }

    function $e(d) {
        return r.value ? r.value.tm(d) : {}
    }

    function Oe(d, b) {
        return r.value ? r.value.te(d, b) : !1
    }

    function Ye(d) {
        return r.value ? r.value.getLocaleMessage(d) : {}
    }

    function Xe(d, b) {
        r.value && (r.value.setLocaleMessage(d, b), c.value[d] = b)
    }

    function bt(d, b) {
        r.value && r.value.mergeLocaleMessage(d, b)
    }

    function De(d) {
        return r.value ? r.value.getDateTimeFormat(d) : {}
    }

    function j(d, b) {
        r.value && (r.value.setDateTimeFormat(d, b), u.value[d] = b)
    }

    function ne(d, b) {
        r.value && r.value.mergeDateTimeFormat(d, b)
    }

    function ee(d) {
        return r.value ? r.value.getNumberFormat(d) : {}
    }

    function Z(d, b) {
        r.value && (r.value.setNumberFormat(d, b), h.value[d] = b)
    }

    function re(d, b) {
        r.value && r.value.mergeNumberFormat(d, b)
    }

    const y = {
        get id() {
            return r.value ? r.value.id : -1
        },
        locale: K,
        fallbackLocale: D,
        messages: X,
        datetimeFormats: ie,
        numberFormats: ue,
        get inheritLocale() {
            return r.value ? r.value.inheritLocale : i
        },
        set inheritLocale(d) {
            r.value && (r.value.inheritLocale = d)
        },
        get availableLocales() {
            return r.value ? r.value.availableLocales : Object.keys(c.value)
        },
        get modifiers() {
            return r.value ? r.value.modifiers : S
        },
        get pluralRules() {
            return r.value ? r.value.pluralRules : I
        },
        get isGlobal() {
            return r.value ? r.value.isGlobal : !1
        },
        get missingWarn() {
            return r.value ? r.value.missingWarn : p
        },
        set missingWarn(d) {
            r.value && (r.value.missingWarn = d)
        },
        get fallbackWarn() {
            return r.value ? r.value.fallbackWarn : w
        },
        set fallbackWarn(d) {
            r.value && (r.value.missingWarn = d)
        },
        get fallbackRoot() {
            return r.value ? r.value.fallbackRoot : g
        },
        set fallbackRoot(d) {
            r.value && (r.value.fallbackRoot = d)
        },
        get fallbackFormat() {
            return r.value ? r.value.fallbackFormat : C
        },
        set fallbackFormat(d) {
            r.value && (r.value.fallbackFormat = d)
        },
        get warnHtmlMessage() {
            return r.value ? r.value.warnHtmlMessage : M
        },
        set warnHtmlMessage(d) {
            r.value && (r.value.warnHtmlMessage = d)
        },
        get escapeParameter() {
            return r.value ? r.value.escapeParameter : R
        },
        set escapeParameter(d) {
            r.value && (r.value.escapeParameter = d)
        },
        t: W,
        getPostTranslationHandler: se,
        setPostTranslationHandler: m,
        getMissingHandler: P,
        setMissingHandler: x,
        rt: te,
        d: de,
        n: me,
        tm: $e,
        te: Oe,
        getLocaleMessage: Ye,
        setLocaleMessage: Xe,
        mergeLocaleMessage: bt,
        getDateTimeFormat: De,
        setDateTimeFormat: j,
        mergeDateTimeFormat: ne,
        getNumberFormat: ee,
        setNumberFormat: Z,
        mergeNumberFormat: re
    };

    function f(d) {
        d.locale.value = a.value, d.fallbackLocale.value = l.value, Object.keys(c.value).forEach(b => {
            d.mergeLocaleMessage(b, c.value[b])
        }), Object.keys(u.value).forEach(b => {
            d.mergeDateTimeFormat(b, u.value[b])
        }), Object.keys(h.value).forEach(b => {
            d.mergeNumberFormat(b, h.value[b])
        }), d.escapeParameter = R, d.fallbackFormat = C, d.fallbackRoot = g, d.fallbackWarn = w, d.missingWarn = p, d.warnHtmlMessage = M
    }

    return So(() => {
        if (e.proxy == null || e.proxy.$i18n == null) throw et(Ke.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const d = r.value = e.proxy.$i18n.__composer;
        t === "global" ? (a.value = d.locale.value, l.value = d.fallbackLocale.value, c.value = d.messages.value, u.value = d.datetimeFormats.value, h.value = d.numberFormats.value) : o && f(d)
    }), y
}

const T2 = ["locale", "fallbackLocale", "availableLocales"], O2 = ["t", "rt", "d", "n", "tm"];

function A2(e, t) {
    const n = Object.create(null);
    T2.forEach(s => {
        const o = Object.getOwnPropertyDescriptor(t, s);
        if (!o) throw et(Ke.UNEXPECTED_ERROR);
        const r = He(o.value) ? {
            get() {
                return o.value.value
            }, set(i) {
                o.value.value = i
            }
        } : {
            get() {
                return o.get && o.get()
            }
        };
        Object.defineProperty(n, s, r)
    }), e.config.globalProperties.$i18n = n, O2.forEach(s => {
        const o = Object.getOwnPropertyDescriptor(t, s);
        if (!o || !o.value) throw et(Ke.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${s}`, o)
    })
}

Yh(s2);
Xh(Ph);
Jh(Mu);
c2();
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = ms();
    e.__INTLIFY__ = !0, Bh(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}

function L2() {
    const e = Object.assign({"./languages/cn.json": Kd, "./languages/en.json": Yd}), t = {};
    return Object.keys(e).forEach(n => {
        const s = n.match(/([A-Za-z0-9-_]+)\./i);
        if (s && s.length > 1) {
            const o = s[1];
            t[o] = e[n]
        }
    }), t
}

const An = b2({
    legacy: !1,
    locale: {}.VITE_APP_I18N_LOCALE || "en",
    fallbackLocale: {}.VITE_APP_I18N_FALLBACK_LOCALE || "en",
    messages: L2(),
    globalInjection: !0
});

class ll {
    constructor(t) {
        E(this, "menu", new cl);
        E(this, "avatar", new ul);
        E(this, "theme", new fl);
        E(this, "site", new hl);
        E(this, "socials", new co);
        E(this, "site_meta", new pl);
        E(this, "plugins", new ml);
        E(this, "version", "");
        const n = t && t.theme_config;
        n && (this.menu = new cl(n.menu), this.avatar = new ul(n.avatar), this.theme = new fl(n.theme), this.site = new hl(n.site), this.socials = new co(n.socials), this.plugins = new ml(n), this.site_meta = new pl(n.site_meta), this.version = n.version)
    }
}

class cl {
    constructor(t) {
        E(this, "menus", {Home: new _s({name: "Home", path: "/", i18n: {cn: "首页", en: "Home"}})});
        const n = {
            About: {name: "About", path: "/about", i18n: {cn: "关于", en: "About"}},
            Archives: {name: "Archives", path: "/archives", i18n: {cn: "归档", en: "Archives"}},
            Tags: {name: "Tags", path: "/tags", i18n: {cn: "标签", en: "Tags"}}
        }, s = Object.keys(n);
        if (t) {
            for (const o of s) typeof t[o] == "boolean" && t[o] && Object.assign(this.menus, {[o]: new _s(n[o])});
            for (const o of Object.keys(t)) s.indexOf(o) < 0 && t[o].name && Object.assign(this.menus, {[o]: new _s(t[o])})
        }
    }
}

class _s {
    constructor(t) {
        E(this, "name", "");
        E(this, "path", "");
        E(this, "i18n", {});
        E(this, "children", []);
        this.name = t.name, this.path = t.path ? t.path : null, this.i18n = t.i18n ? t.i18n : {}, this.children = t.children ? Object.keys(t.children).map(n => new _s(t.children[n])) : []
    }
}

class ul {
    constructor(t) {
        E(this, "source_path", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class fl {
    constructor(t) {
        E(this, "dark_mode", "auto");
        E(this, "profile_shape", "diamond");
        E(this, "feature", !0);
        E(this, "gradient", {color_1: "#24c6dc", color_2: "#5433ff", color_3: "#ff0099"});
        E(this, "header_gradient_css", "linear-gradient(130deg, #24c6dc, #5433ff 41.07%, #ff0099 76.05%)");
        E(this, "background_gradient_style", {
            background: "linear-gradient(130deg, #24c6dc, #5433ff 41.07%, #ff0099 76.05%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "-webkit-box-decoration-break": "clone",
            "box-decoration-break": "clone"
        });
        if (t) {
            for (const n of Object.keys(this)) if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (n === "profile_shape") {
                    const s = ["circle", "diamond", "rounded"],
                        o = ["circle-avatar", "diamond-avatar", "rounded-avatar"], r = s.indexOf(t[n]);
                    r < 0 ? t[n] = o[1] : t[n] = o[r]
                }
                if (Object.assign(this, {[n]: t[n]}), n === "gradient") {
                    const s = `linear-gradient(130deg, ${this.gradient.color_1}, ${this.gradient.color_2} 41.07%, ${this.gradient.color_3} 76.05%)`;
                    Object.assign(this, {header_gradient_css: s}), Object.assign(this, {
                        background_gradient_style: {
                            background: s,
                            "-webkit-background-clip": "text",
                            "-webkit-text-fill-color": "transparent",
                            "-webkit-box-decoration-break": "clone",
                            "box-decoration-break": "clone"
                        }
                    })
                }
            }
        }
    }
}

let co = class {
    constructor(t) {
        E(this, "github", "");
        E(this, "twitter", "");
        E(this, "stackoverflow", "");
        E(this, "wechat", "");
        E(this, "qq", "");
        E(this, "weibo", "");
        E(this, "csdn", "");
        E(this, "juejin", "");
        E(this, "zhihu", "");
        E(this, "customs", new dl);
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && (n === "customs" ? Object.assign(this.customs, new dl(t[n])) : Object.assign(this, {[n]: t[n]}))
    }
};

class I2 {
    constructor(t) {
        E(this, "icon", {iconfont: "", img_link: ""});
        E(this, "link", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && (n === "icon" ? String(t[n]).match(/([a-zA-Z0-9\s_\\.\-():])+(.svg|.png|.jpg)$/g) ? Object.assign(this.icon, {img_link: t[n]}) : Object.assign(this.icon, {iconfont: t[n]}) : Object.assign(this, {[n]: t[n]}))
    }
}

class dl {
    constructor(t) {
        E(this, "socials", []);
        t && Object.assign(this.socials, Object.keys(t).map(n => new I2(t[n])))
    }
}

let hl = class {
    constructor(t) {
        E(this, "subtitle", "");
        E(this, "author", "");
        E(this, "nick", "");
        E(this, "description", "");
        E(this, "language", "en");
        E(this, "multi_language", !0);
        E(this, "logo", "");
        E(this, "avatar", "");
        E(this, "beian", {number: "", link: ""});
        E(this, "police_beian", {number: "", link: ""});
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
};

class pl {
    constructor(t) {
        E(this, "cdn", {locale: "en", prismjs: []});
        E(this, "favicon", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class ml {
    constructor(t) {
        E(this, "gitalk", {
            enable: !1,
            autoExpand: !0,
            clientID: "",
            clientSecret: "",
            repo: "blog-comments",
            owner: "TriDiamond",
            admin: ["TriDiamond"],
            id: "location.pathname",
            language: "en",
            distractionFreeMode: !1,
            recentComment: !1,
            proxy: ""
        });
        E(this, "valine", {
            enable: !1,
            app_id: "",
            app_key: "",
            avatar: "mp",
            placeholder: "Leave your thoughts behind~",
            visitor: !0,
            lang: "",
            meta: [],
            requiredFields: [],
            avatarForce: !1,
            admin: "",
            recentComment: !1
        });
        E(this, "twikoo", {enable: !1, envId: "", region: void 0, recentComment: !1, lang: ""});
        E(this, "waline", {
            enable: !1,
            recentComment: !1,
            serverURL: "",
            reaction: !1,
            login: "disable",
            meta: [],
            requiredMeta: [],
            imageUploader: !1,
            wordLimit: 0,
            pageSize: 10,
            commentSorting: "latest"
        });
        E(this, "recent_comments", !1);
        E(this, "busuanzi", {enable: !0});
        E(this, "copy_protection", {
            enable: !0,
            author: {cn: "", en: ""},
            link: {cn: "", en: ""},
            license: {cn: "", en: ""}
        });
        E(this, "aurora_bot", {enable: !1, locale: "en", bot_type: "dia", tips: {}});
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class gl {
    constructor(t) {
        E(this, "site", new _l);
        E(this, "url", new vl);
        E(this, "directory", new bl);
        E(this, "writing", new yl);
        E(this, "categoriesAndTags", new kl);
        E(this, "dateTimeFormat", new wl);
        E(this, "page", new Cl);
        E(this, "extensions", new El);
        t && (this.site = new _l(t), this.url = new vl(t), this.directory = new bl(t), this.writing = new yl(t), this.categoriesAndTags = new kl(t), this.dateTimeFormat = new wl(t), this.page = new Cl(t), this.extensions = new El(t))
    }
}

class _l {
    constructor(t) {
        E(this, "title", "");
        E(this, "subtitle", "");
        E(this, "description", "");
        E(this, "author", "");
        E(this, "language", "");
        E(this, "timezone", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

let vl = class {
    constructor(t) {
        E(this, "url", "");
        E(this, "root", "");
        E(this, "permalink", "");
        E(this, "permalink_defaults", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
};

class bl {
    constructor(t) {
        E(this, "source_dir", "");
        E(this, "public_dir", "");
        E(this, "tag_dir", "");
        E(this, "archive_dir", "");
        E(this, "category_dir", "");
        E(this, "code_dir", "");
        E(this, "i18n_dir", "");
        E(this, "skip_render", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class yl {
    constructor(t) {
        E(this, "new_post_name", "");
        E(this, "default_layout", "");
        E(this, "titlecase", !1);
        E(this, "filename_case", 0);
        E(this, "external_link", "");
        E(this, "render_drafts", !1);
        E(this, "post_asset_folder", !1);
        E(this, "relative_link", !1);
        E(this, "future", !0);
        E(this, "highlight", {enable: !1, line_number: !0, auto_detect: !1, tab_replace: ""});
        E(this, "prismjs", {enable: !0, preprocess: !1, line_number: !0, tab_replace: ""});
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class kl {
    constructor(t) {
        E(this, "default_category", "");
        E(this, "category_map", "");
        E(this, "tag_map", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class wl {
    constructor(t) {
        E(this, "date_format", "");
        E(this, "time_format", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class Cl {
    constructor(t) {
        E(this, "per_page", 0);
        E(this, "pagination_dir", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class El {
    constructor(t) {
        E(this, "theme", !1);
        E(this, "deploy", {});
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

function Uu(e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}

const {toString: P2} = Object.prototype, {getPrototypeOf: Si} = Object, Ro = (e => t => {
        const n = P2.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)), Zt = e => (e = e.toLowerCase(), t => Ro(t) === e),
    No = e => t => typeof t === e, {isArray: es} = Array, Ls = No("undefined");

function $2(e) {
    return e !== null && !Ls(e) && e.constructor !== null && !Ls(e.constructor) && Et(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}

const Vu = Zt("ArrayBuffer");

function R2(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Vu(e.buffer), t
}

const N2 = No("string"), Et = No("function"), Wu = No("number"), Fo = e => e !== null && typeof e == "object",
    F2 = e => e === !0 || e === !1, Js = e => {
        if (Ro(e) !== "object") return !1;
        const t = Si(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    }, x2 = Zt("Date"), D2 = Zt("File"), j2 = Zt("Blob"), Z2 = Zt("FileList"), B2 = e => Fo(e) && Et(e.pipe), H2 = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || Et(e.append) && ((t = Ro(e)) === "formdata" || t === "object" && Et(e.toString) && e.toString() === "[object FormData]"))
    }, U2 = Zt("URLSearchParams"), V2 = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Ns(e, t, {allOwnKeys: n = !1} = {}) {
    if (e === null || typeof e > "u") return;
    let s, o;
    if (typeof e != "object" && (e = [e]), es(e)) for (s = 0, o = e.length; s < o; s++) t.call(null, e[s], s, e); else {
        const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = r.length;
        let a;
        for (s = 0; s < i; s++) a = r[s], t.call(null, e[a], a, e)
    }
}

function zu(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let s = n.length, o;
    for (; s-- > 0;) if (o = n[s], t === o.toLowerCase()) return o;
    return null
}

const qu = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    Ku = e => !Ls(e) && e !== qu;

function jr() {
    const {caseless: e} = Ku(this) && this || {}, t = {}, n = (s, o) => {
        const r = e && zu(t, o) || o;
        Js(t[r]) && Js(s) ? t[r] = jr(t[r], s) : Js(s) ? t[r] = jr({}, s) : es(s) ? t[r] = s.slice() : t[r] = s
    };
    for (let s = 0, o = arguments.length; s < o; s++) arguments[s] && Ns(arguments[s], n);
    return t
}

const W2 = (e, t, n, {allOwnKeys: s} = {}) => (Ns(t, (o, r) => {
        n && Et(o) ? e[r] = Uu(o, n) : e[r] = o
    }, {allOwnKeys: s}), e), z2 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), q2 = (e, t, n, s) => {
        e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {value: t.prototype}), n && Object.assign(e.prototype, n)
    }, K2 = (e, t, n, s) => {
        let o, r, i;
        const a = {};
        if (t = t || {}, e == null) return t;
        do {
            for (o = Object.getOwnPropertyNames(e), r = o.length; r-- > 0;) i = o[r], (!s || s(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
            e = n !== !1 && Si(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    }, G2 = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const s = e.indexOf(t, n);
        return s !== -1 && s === n
    }, Y2 = e => {
        if (!e) return null;
        if (es(e)) return e;
        let t = e.length;
        if (!Wu(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    }, X2 = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Si(Uint8Array)), J2 = (e, t) => {
        const s = (e && e[Symbol.iterator]).call(e);
        let o;
        for (; (o = s.next()) && !o.done;) {
            const r = o.value;
            t.call(e, r[0], r[1])
        }
    }, Q2 = (e, t) => {
        let n;
        const s = [];
        for (; (n = e.exec(t)) !== null;) s.push(n);
        return s
    }, ep = Zt("HTMLFormElement"), tp = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, o) {
        return s.toUpperCase() + o
    }), Ml = (({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype), np = Zt("RegExp"), Gu = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e), s = {};
        Ns(n, (o, r) => {
            t(o, r, e) !== !1 && (s[r] = o)
        }), Object.defineProperties(e, s)
    }, sp = e => {
        Gu(e, (t, n) => {
            if (Et(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const s = e[n];
            if (Et(s)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    }, op = (e, t) => {
        const n = {}, s = o => {
            o.forEach(r => {
                n[r] = !0
            })
        };
        return es(e) ? s(e) : s(String(e).split(t)), n
    }, rp = () => {
    }, ip = (e, t) => (e = +e, Number.isFinite(e) ? e : t), er = "abcdefghijklmnopqrstuvwxyz", Sl = "0123456789",
    Yu = {DIGIT: Sl, ALPHA: er, ALPHA_DIGIT: er + er.toUpperCase() + Sl}, ap = (e = 16, t = Yu.ALPHA_DIGIT) => {
        let n = "";
        const {length: s} = t;
        for (; e--;) n += t[Math.random() * s | 0];
        return n
    };

function lp(e) {
    return !!(e && Et(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}

const cp = e => {
    const t = new Array(10), n = (s, o) => {
        if (Fo(s)) {
            if (t.indexOf(s) >= 0) return;
            if (!("toJSON" in s)) {
                t[o] = s;
                const r = es(s) ? [] : {};
                return Ns(s, (i, a) => {
                    const l = n(i, o + 1);
                    !Ls(l) && (r[a] = l)
                }), t[o] = void 0, r
            }
        }
        return s
    };
    return n(e, 0)
}, up = Zt("AsyncFunction"), fp = e => e && (Fo(e) || Et(e)) && Et(e.then) && Et(e.catch), U = {
    isArray: es,
    isArrayBuffer: Vu,
    isBuffer: $2,
    isFormData: H2,
    isArrayBufferView: R2,
    isString: N2,
    isNumber: Wu,
    isBoolean: F2,
    isObject: Fo,
    isPlainObject: Js,
    isUndefined: Ls,
    isDate: x2,
    isFile: D2,
    isBlob: j2,
    isRegExp: np,
    isFunction: Et,
    isStream: B2,
    isURLSearchParams: U2,
    isTypedArray: X2,
    isFileList: Z2,
    forEach: Ns,
    merge: jr,
    extend: W2,
    trim: V2,
    stripBOM: z2,
    inherits: q2,
    toFlatObject: K2,
    kindOf: Ro,
    kindOfTest: Zt,
    endsWith: G2,
    toArray: Y2,
    forEachEntry: J2,
    matchAll: Q2,
    isHTMLForm: ep,
    hasOwnProperty: Ml,
    hasOwnProp: Ml,
    reduceDescriptors: Gu,
    freezeMethods: sp,
    toObjectSet: op,
    toCamelCase: tp,
    noop: rp,
    toFiniteNumber: ip,
    findKey: zu,
    global: qu,
    isContextDefined: Ku,
    ALPHABET: Yu,
    generateString: ap,
    isSpecCompliantForm: lp,
    toJSONObject: cp,
    isAsyncFn: up,
    isThenable: fp
};

function Se(e, t, n, s, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), o && (this.response = o)
}

U.inherits(Se, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: U.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Xu = Se.prototype, Ju = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Ju[e] = {value: e}
});
Object.defineProperties(Se, Ju);
Object.defineProperty(Xu, "isAxiosError", {value: !0});
Se.from = (e, t, n, s, o, r) => {
    const i = Object.create(Xu);
    return U.toFlatObject(e, i, function (l) {
        return l !== Error.prototype
    }, a => a !== "isAxiosError"), Se.call(i, e.message, t, n, s, o), i.cause = e, i.name = e.name, r && Object.assign(i, r), i
};
const dp = null;

function Zr(e) {
    return U.isPlainObject(e) || U.isArray(e)
}

function Qu(e) {
    return U.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Tl(e, t, n) {
    return e ? e.concat(t).map(function (o, r) {
        return o = Qu(o), !n && r ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}

function hp(e) {
    return U.isArray(e) && !e.some(Zr)
}

const pp = U.toFlatObject(U, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
});

function xo(e, t, n) {
    if (!U.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = U.toFlatObject(n, {metaTokens: !0, dots: !1, indexes: !1}, !1, function (C, A) {
        return !U.isUndefined(A[C])
    });
    const s = n.metaTokens, o = n.visitor || u, r = n.dots, i = n.indexes,
        l = (n.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(t);
    if (!U.isFunction(o)) throw new TypeError("visitor must be a function");

    function c(g) {
        if (g === null) return "";
        if (U.isDate(g)) return g.toISOString();
        if (!l && U.isBlob(g)) throw new Se("Blob is not supported. Use a Buffer instead.");
        return U.isArrayBuffer(g) || U.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g
    }

    function u(g, C, A) {
        let v = g;
        if (g && !A && typeof g == "object") {
            if (U.endsWith(C, "{}")) C = s ? C : C.slice(0, -2), g = JSON.stringify(g); else if (U.isArray(g) && hp(g) || (U.isFileList(g) || U.endsWith(C, "[]")) && (v = U.toArray(g))) return C = Qu(C), v.forEach(function (R, S) {
                !(U.isUndefined(R) || R === null) && t.append(i === !0 ? Tl([C], S, r) : i === null ? C : C + "[]", c(R))
            }), !1
        }
        return Zr(g) ? !0 : (t.append(Tl(A, C, r), c(g)), !1)
    }

    const h = [], p = Object.assign(pp, {defaultVisitor: u, convertValue: c, isVisitable: Zr});

    function w(g, C) {
        if (!U.isUndefined(g)) {
            if (h.indexOf(g) !== -1) throw Error("Circular reference detected in " + C.join("."));
            h.push(g), U.forEach(g, function (v, M) {
                (!(U.isUndefined(v) || v === null) && o.call(t, v, U.isString(M) ? M.trim() : M, C, p)) === !0 && w(v, C ? C.concat(M) : [M])
            }), h.pop()
        }
    }

    if (!U.isObject(e)) throw new TypeError("data must be an object");
    return w(e), t
}

function Ol(e) {
    const t = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"};
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
        return t[s]
    })
}

function Ti(e, t) {
    this._pairs = [], e && xo(e, this, t)
}

const e1 = Ti.prototype;
e1.append = function (t, n) {
    this._pairs.push([t, n])
};
e1.toString = function (t) {
    const n = t ? function (s) {
        return t.call(this, s, Ol)
    } : Ol;
    return this._pairs.map(function (o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
};

function mp(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function t1(e, t, n) {
    if (!t) return e;
    const s = n && n.encode || mp, o = n && n.serialize;
    let r;
    if (o ? r = o(t, n) : r = U.isURLSearchParams(t) ? t.toString() : new Ti(t, n).toString(s), r) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + r
    }
    return e
}

class gp {
    constructor() {
        this.handlers = []
    }

    use(t, n, s) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: s ? s.synchronous : !1,
            runWhen: s ? s.runWhen : null
        }), this.handlers.length - 1
    }

    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }

    clear() {
        this.handlers && (this.handlers = [])
    }

    forEach(t) {
        U.forEach(this.handlers, function (s) {
            s !== null && t(s)
        })
    }
}

const Al = gp, n1 = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
    _p = typeof URLSearchParams < "u" ? URLSearchParams : Ti, vp = typeof FormData < "u" ? FormData : null,
    bp = typeof Blob < "u" ? Blob : null, yp = (() => {
        let e;
        return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    kp = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    Dt = {
        isBrowser: !0,
        classes: {URLSearchParams: _p, FormData: vp, Blob: bp},
        isStandardBrowserEnv: yp,
        isStandardBrowserWebWorkerEnv: kp,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function wp(e, t) {
    return xo(e, new Dt.classes.URLSearchParams, Object.assign({
        visitor: function (n, s, o, r) {
            return Dt.isNode && U.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function Cp(e) {
    return U.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function Ep(e) {
    const t = {}, n = Object.keys(e);
    let s;
    const o = n.length;
    let r;
    for (s = 0; s < o; s++) r = n[s], t[r] = e[r];
    return t
}

function s1(e) {
    function t(n, s, o, r) {
        let i = n[r++];
        const a = Number.isFinite(+i), l = r >= n.length;
        return i = !i && U.isArray(o) ? o.length : i, l ? (U.hasOwnProp(o, i) ? o[i] = [o[i], s] : o[i] = s, !a) : ((!o[i] || !U.isObject(o[i])) && (o[i] = []), t(n, s, o[i], r) && U.isArray(o[i]) && (o[i] = Ep(o[i])), !a)
    }

    if (U.isFormData(e) && U.isFunction(e.entries)) {
        const n = {};
        return U.forEachEntry(e, (s, o) => {
            t(Cp(s), o, n, 0)
        }), n
    }
    return null
}

const Mp = {"Content-Type": void 0};

function Sp(e, t, n) {
    if (U.isString(e)) try {
        return (t || JSON.parse)(e), U.trim(e)
    } catch (s) {
        if (s.name !== "SyntaxError") throw s
    }
    return (n || JSON.stringify)(e)
}

const Do = {
    transitional: n1,
    adapter: ["xhr", "http"],
    transformRequest: [function (t, n) {
        const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, r = U.isObject(t);
        if (r && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t)) return o && o ? JSON.stringify(s1(t)) : t;
        if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t)) return t;
        if (U.isArrayBufferView(t)) return t.buffer;
        if (U.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let a;
        if (r) {
            if (s.indexOf("application/x-www-form-urlencoded") > -1) return wp(t, this.formSerializer).toString();
            if ((a = U.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return xo(a ? {"files[]": t} : t, l && new l, this.formSerializer)
            }
        }
        return r || o ? (n.setContentType("application/json", !1), Sp(t)) : t
    }],
    transformResponse: [function (t) {
        const n = this.transitional || Do.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
        if (t && U.isString(t) && (s && !this.responseType || o)) {
            const i = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (i) throw a.name === "SyntaxError" ? Se.from(a, Se.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {FormData: Dt.classes.FormData, Blob: Dt.classes.Blob},
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: {common: {Accept: "application/json, text/plain, */*"}}
};
U.forEach(["delete", "get", "head"], function (t) {
    Do.headers[t] = {}
});
U.forEach(["post", "put", "patch"], function (t) {
    Do.headers[t] = U.merge(Mp)
});
const Oi = Do,
    Tp = U.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    Op = e => {
        const t = {};
        let n, s, o;
        return e && e.split(`
`).forEach(function (i) {
            o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), s = i.substring(o + 1).trim(), !(!n || t[n] && Tp[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s)
        }), t
    }, Ll = Symbol("internals");

function rs(e) {
    return e && String(e).trim().toLowerCase()
}

function Qs(e) {
    return e === !1 || e == null ? e : U.isArray(e) ? e.map(Qs) : String(e)
}

function Ap(e) {
    const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = n.exec(e);) t[s[1]] = s[2];
    return t
}

const Lp = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function tr(e, t, n, s, o) {
    if (U.isFunction(s)) return s.call(this, t, n);
    if (o && (t = n), !!U.isString(t)) {
        if (U.isString(s)) return t.indexOf(s) !== -1;
        if (U.isRegExp(s)) return s.test(t)
    }
}

function Ip(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s)
}

function Pp(e, t) {
    const n = U.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(s => {
        Object.defineProperty(e, s + n, {
            value: function (o, r, i) {
                return this[s].call(this, t, o, r, i)
            }, configurable: !0
        })
    })
}

class jo {
    constructor(t) {
        t && this.set(t)
    }

    set(t, n, s) {
        const o = this;

        function r(a, l, c) {
            const u = rs(l);
            if (!u) throw new Error("header name must be a non-empty string");
            const h = U.findKey(o, u);
            (!h || o[h] === void 0 || c === !0 || c === void 0 && o[h] !== !1) && (o[h || l] = Qs(a))
        }

        const i = (a, l) => U.forEach(a, (c, u) => r(c, u, l));
        return U.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : U.isString(t) && (t = t.trim()) && !Lp(t) ? i(Op(t), n) : t != null && r(n, t, s), this
    }

    get(t, n) {
        if (t = rs(t), t) {
            const s = U.findKey(this, t);
            if (s) {
                const o = this[s];
                if (!n) return o;
                if (n === !0) return Ap(o);
                if (U.isFunction(n)) return n.call(this, o, s);
                if (U.isRegExp(n)) return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }

    has(t, n) {
        if (t = rs(t), t) {
            const s = U.findKey(this, t);
            return !!(s && this[s] !== void 0 && (!n || tr(this, this[s], s, n)))
        }
        return !1
    }

    delete(t, n) {
        const s = this;
        let o = !1;

        function r(i) {
            if (i = rs(i), i) {
                const a = U.findKey(s, i);
                a && (!n || tr(s, s[a], a, n)) && (delete s[a], o = !0)
            }
        }

        return U.isArray(t) ? t.forEach(r) : r(t), o
    }

    clear(t) {
        const n = Object.keys(this);
        let s = n.length, o = !1;
        for (; s--;) {
            const r = n[s];
            (!t || tr(this, this[r], r, t, !0)) && (delete this[r], o = !0)
        }
        return o
    }

    normalize(t) {
        const n = this, s = {};
        return U.forEach(this, (o, r) => {
            const i = U.findKey(s, r);
            if (i) {
                n[i] = Qs(o), delete n[r];
                return
            }
            const a = t ? Ip(r) : String(r).trim();
            a !== r && delete n[r], n[a] = Qs(o), s[a] = !0
        }), this
    }

    concat(...t) {
        return this.constructor.concat(this, ...t)
    }

    toJSON(t) {
        const n = Object.create(null);
        return U.forEach(this, (s, o) => {
            s != null && s !== !1 && (n[o] = t && U.isArray(s) ? s.join(", ") : s)
        }), n
    }

    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }

    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }

    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }

    static from(t) {
        return t instanceof this ? t : new this(t)
    }

    static concat(t, ...n) {
        const s = new this(t);
        return n.forEach(o => s.set(o)), s
    }

    static accessor(t) {
        const s = (this[Ll] = this[Ll] = {accessors: {}}).accessors, o = this.prototype;

        function r(i) {
            const a = rs(i);
            s[a] || (Pp(o, i), s[a] = !0)
        }

        return U.isArray(t) ? t.forEach(r) : r(t), this
    }
}

jo.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.freezeMethods(jo.prototype);
U.freezeMethods(jo);
const qt = jo;

function nr(e, t) {
    const n = this || Oi, s = t || n, o = qt.from(s.headers);
    let r = s.data;
    return U.forEach(e, function (a) {
        r = a.call(n, r, o.normalize(), t ? t.status : void 0)
    }), o.normalize(), r
}

function o1(e) {
    return !!(e && e.__CANCEL__)
}

function Fs(e, t, n) {
    Se.call(this, e ?? "canceled", Se.ERR_CANCELED, t, n), this.name = "CanceledError"
}

U.inherits(Fs, Se, {__CANCEL__: !0});

function $p(e, t, n) {
    const s = n.config.validateStatus;
    !n.status || !s || s(n.status) ? e(n) : t(new Se("Request failed with status code " + n.status, [Se.ERR_BAD_REQUEST, Se.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

const Rp = Dt.isStandardBrowserEnv ? function () {
    return {
        write: function (n, s, o, r, i, a) {
            const l = [];
            l.push(n + "=" + encodeURIComponent(s)), U.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()), U.isString(r) && l.push("path=" + r), U.isString(i) && l.push("domain=" + i), a === !0 && l.push("secure"), document.cookie = l.join("; ")
        }, read: function (n) {
            const s = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return s ? decodeURIComponent(s[3]) : null
        }, remove: function (n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function () {
    return {
        write: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }
}();

function Np(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function Fp(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function r1(e, t) {
    return e && !Np(t) ? Fp(e, t) : t
}

const xp = Dt.isStandardBrowserEnv ? function () {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let s;

    function o(r) {
        let i = r;
        return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }

    return s = o(window.location.href), function (i) {
        const a = U.isString(i) ? o(i) : i;
        return a.protocol === s.protocol && a.host === s.host
    }
}() : function () {
    return function () {
        return !0
    }
}();

function Dp(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function jp(e, t) {
    e = e || 10;
    const n = new Array(e), s = new Array(e);
    let o = 0, r = 0, i;
    return t = t !== void 0 ? t : 1e3, function (l) {
        const c = Date.now(), u = s[r];
        i || (i = c), n[o] = l, s[o] = c;
        let h = r, p = 0;
        for (; h !== o;) p += n[h++], h = h % e;
        if (o = (o + 1) % e, o === r && (r = (r + 1) % e), c - i < t) return;
        const w = u && c - u;
        return w ? Math.round(p * 1e3 / w) : void 0
    }
}

function Il(e, t) {
    let n = 0;
    const s = jp(50, 250);
    return o => {
        const r = o.loaded, i = o.lengthComputable ? o.total : void 0, a = r - n, l = s(a), c = r <= i;
        n = r;
        const u = {
            loaded: r,
            total: i,
            progress: i ? r / i : void 0,
            bytes: a,
            rate: l || void 0,
            estimated: l && i && c ? (i - r) / l : void 0,
            event: o
        };
        u[t ? "download" : "upload"] = !0, e(u)
    }
}

const Zp = typeof XMLHttpRequest < "u", Bp = Zp && function (e) {
    return new Promise(function (n, s) {
        let o = e.data;
        const r = qt.from(e.headers).normalize(), i = e.responseType;
        let a;

        function l() {
            e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a)
        }

        U.isFormData(o) && (Dt.isStandardBrowserEnv || Dt.isStandardBrowserWebWorkerEnv ? r.setContentType(!1) : r.setContentType("multipart/form-data;", !1));
        let c = new XMLHttpRequest;
        if (e.auth) {
            const w = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            r.set("Authorization", "Basic " + btoa(w + ":" + g))
        }
        const u = r1(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), t1(u, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;

        function h() {
            if (!c) return;
            const w = qt.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()), C = {
                data: !i || i === "text" || i === "json" ? c.responseText : c.response,
                status: c.status,
                statusText: c.statusText,
                headers: w,
                config: e,
                request: c
            };
            $p(function (v) {
                n(v), l()
            }, function (v) {
                s(v), l()
            }, C), c = null
        }

        if ("onloadend" in c ? c.onloadend = h : c.onreadystatechange = function () {
            !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(h)
        }, c.onabort = function () {
            c && (s(new Se("Request aborted", Se.ECONNABORTED, e, c)), c = null)
        }, c.onerror = function () {
            s(new Se("Network Error", Se.ERR_NETWORK, e, c)), c = null
        }, c.ontimeout = function () {
            let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const C = e.transitional || n1;
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage), s(new Se(g, C.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED, e, c)), c = null
        }, Dt.isStandardBrowserEnv) {
            const w = (e.withCredentials || xp(u)) && e.xsrfCookieName && Rp.read(e.xsrfCookieName);
            w && r.set(e.xsrfHeaderName, w)
        }
        o === void 0 && r.setContentType(null), "setRequestHeader" in c && U.forEach(r.toJSON(), function (g, C) {
            c.setRequestHeader(C, g)
        }), U.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Il(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Il(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = w => {
            c && (s(!w || w.type ? new Fs(null, e, c) : w), c.abort(), c = null)
        }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const p = Dp(u);
        if (p && Dt.protocols.indexOf(p) === -1) {
            s(new Se("Unsupported protocol " + p + ":", Se.ERR_BAD_REQUEST, e));
            return
        }
        c.send(o || null)
    })
}, eo = {http: dp, xhr: Bp};
U.forEach(eo, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {value: t})
        } catch {
        }
        Object.defineProperty(e, "adapterName", {value: t})
    }
});
const Hp = {
    getAdapter: e => {
        e = U.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, s;
        for (let o = 0; o < t && (n = e[o], !(s = U.isString(n) ? eo[n.toLowerCase()] : n)); o++) ;
        if (!s) throw s === !1 ? new Se(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(U.hasOwnProp(eo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!U.isFunction(s)) throw new TypeError("adapter is not a function");
        return s
    }, adapters: eo
};

function sr(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Fs(null, e)
}

function Pl(e) {
    return sr(e), e.headers = qt.from(e.headers), e.data = nr.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Hp.getAdapter(e.adapter || Oi.adapter)(e).then(function (s) {
        return sr(e), s.data = nr.call(e, e.transformResponse, s), s.headers = qt.from(s.headers), s
    }, function (s) {
        return o1(s) || (sr(e), s && s.response && (s.response.data = nr.call(e, e.transformResponse, s.response), s.response.headers = qt.from(s.response.headers))), Promise.reject(s)
    })
}

const $l = e => e instanceof qt ? e.toJSON() : e;

function Kn(e, t) {
    t = t || {};
    const n = {};

    function s(c, u, h) {
        return U.isPlainObject(c) && U.isPlainObject(u) ? U.merge.call({caseless: h}, c, u) : U.isPlainObject(u) ? U.merge({}, u) : U.isArray(u) ? u.slice() : u
    }

    function o(c, u, h) {
        if (U.isUndefined(u)) {
            if (!U.isUndefined(c)) return s(void 0, c, h)
        } else return s(c, u, h)
    }

    function r(c, u) {
        if (!U.isUndefined(u)) return s(void 0, u)
    }

    function i(c, u) {
        if (U.isUndefined(u)) {
            if (!U.isUndefined(c)) return s(void 0, c)
        } else return s(void 0, u)
    }

    function a(c, u, h) {
        if (h in t) return s(c, u);
        if (h in e) return s(void 0, c)
    }

    const l = {
        url: r,
        method: r,
        data: r,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: a,
        headers: (c, u) => o($l(c), $l(u), !0)
    };
    return U.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
        const h = l[u] || o, p = h(e[u], t[u], u);
        U.isUndefined(p) && h !== a || (n[u] = p)
    }), n
}

const i1 = "1.4.0", Ai = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    Ai[e] = function (s) {
        return typeof s === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Rl = {};
Ai.transitional = function (t, n, s) {
    function o(r, i) {
        return "[Axios v" + i1 + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "")
    }

    return (r, i, a) => {
        if (t === !1) throw new Se(o(i, " has been removed" + (n ? " in " + n : "")), Se.ERR_DEPRECATED);
        return n && !Rl[i] && (Rl[i] = !0, console.warn(o(i, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(r, i, a) : !0
    }
};

function Up(e, t, n) {
    if (typeof e != "object") throw new Se("options must be an object", Se.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(e);
    let o = s.length;
    for (; o-- > 0;) {
        const r = s[o], i = t[r];
        if (i) {
            const a = e[r], l = a === void 0 || i(a, r, e);
            if (l !== !0) throw new Se("option " + r + " must be " + l, Se.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new Se("Unknown option " + r, Se.ERR_BAD_OPTION)
    }
}

const Br = {assertOptions: Up, validators: Ai}, tn = Br.validators;

class uo {
    constructor(t) {
        this.defaults = t, this.interceptors = {request: new Al, response: new Al}
    }

    request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Kn(this.defaults, n);
        const {transitional: s, paramsSerializer: o, headers: r} = n;
        s !== void 0 && Br.assertOptions(s, {
            silentJSONParsing: tn.transitional(tn.boolean),
            forcedJSONParsing: tn.transitional(tn.boolean),
            clarifyTimeoutError: tn.transitional(tn.boolean)
        }, !1), o != null && (U.isFunction(o) ? n.paramsSerializer = {serialize: o} : Br.assertOptions(o, {
            encode: tn.function,
            serialize: tn.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i;
        i = r && U.merge(r.common, r[n.method]), i && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], g => {
            delete r[g]
        }), n.headers = qt.concat(i, r);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function (C) {
            typeof C.runWhen == "function" && C.runWhen(n) === !1 || (l = l && C.synchronous, a.unshift(C.fulfilled, C.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function (C) {
            c.push(C.fulfilled, C.rejected)
        });
        let u, h = 0, p;
        if (!l) {
            const g = [Pl.bind(this), void 0];
            for (g.unshift.apply(g, a), g.push.apply(g, c), p = g.length, u = Promise.resolve(n); h < p;) u = u.then(g[h++], g[h++]);
            return u
        }
        p = a.length;
        let w = n;
        for (h = 0; h < p;) {
            const g = a[h++], C = a[h++];
            try {
                w = g(w)
            } catch (A) {
                C.call(this, A);
                break
            }
        }
        try {
            u = Pl.call(this, w)
        } catch (g) {
            return Promise.reject(g)
        }
        for (h = 0, p = c.length; h < p;) u = u.then(c[h++], c[h++]);
        return u
    }

    getUri(t) {
        t = Kn(this.defaults, t);
        const n = r1(t.baseURL, t.url);
        return t1(n, t.params, t.paramsSerializer)
    }
}

U.forEach(["delete", "get", "head", "options"], function (t) {
    uo.prototype[t] = function (n, s) {
        return this.request(Kn(s || {}, {method: t, url: n, data: (s || {}).data}))
    }
});
U.forEach(["post", "put", "patch"], function (t) {
    function n(s) {
        return function (r, i, a) {
            return this.request(Kn(a || {}, {
                method: t,
                headers: s ? {"Content-Type": "multipart/form-data"} : {},
                url: r,
                data: i
            }))
        }
    }

    uo.prototype[t] = n(), uo.prototype[t + "Form"] = n(!0)
});
const to = uo;

class Li {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (r) {
            n = r
        });
        const s = this;
        this.promise.then(o => {
            if (!s._listeners) return;
            let r = s._listeners.length;
            for (; r-- > 0;) s._listeners[r](o);
            s._listeners = null
        }), this.promise.then = o => {
            let r;
            const i = new Promise(a => {
                s.subscribe(a), r = a
            }).then(o);
            return i.cancel = function () {
                s.unsubscribe(r)
            }, i
        }, t(function (r, i, a) {
            s.reason || (s.reason = new Fs(r, i, a), n(s.reason))
        })
    }

    throwIfRequested() {
        if (this.reason) throw this.reason
    }

    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }

    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }

    static source() {
        let t;
        return {
            token: new Li(function (o) {
                t = o
            }), cancel: t
        }
    }
}

const Vp = Li;

function Wp(e) {
    return function (n) {
        return e.apply(null, n)
    }
}

function zp(e) {
    return U.isObject(e) && e.isAxiosError === !0
}

const Hr = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Hr).forEach(([e, t]) => {
    Hr[t] = e
});
const qp = Hr;

function a1(e) {
    const t = new to(e), n = Uu(to.prototype.request, t);
    return U.extend(n, to.prototype, t, {allOwnKeys: !0}), U.extend(n, t, null, {allOwnKeys: !0}), n.create = function (o) {
        return a1(Kn(e, o))
    }, n
}

const tt = a1(Oi);
tt.Axios = to;
tt.CanceledError = Fs;
tt.CancelToken = Vp;
tt.isCancel = o1;
tt.VERSION = i1;
tt.toFormData = xo;
tt.AxiosError = Se;
tt.Cancel = tt.CanceledError;
tt.all = function (t) {
    return Promise.all(t)
};
tt.spread = Wp;
tt.isAxiosError = zp;
tt.mergeConfig = Kn;
tt.AxiosHeaders = qt;
tt.formToJSON = e => s1(U.isHTMLForm(e) ? new FormData(e) : e);
tt.HttpStatusCode = qp;
tt.default = tt;
const l1 = tt, pt = l1.create({baseURL: "/api", timeout: 5e3});
pt.interceptors.request.use(e => e, e => (console.log(e), Promise.reject(e)));
pt.interceptors.response.use(e => e, e => (console.log("err" + e), console.error(e.message), Promise.reject(e)));

async function Kp() {
    return pt.get("/site.json")
}

async function Nl(e) {
    return pt.get(`/posts/${e}.json`)
}

async function Gp(e) {
    return pt.get(`/tags/${e}.json`)
}

async function Yp(e) {
    return pt.get(`/categories/${e}.json`)
}

async function Xp(e) {
    return pt.get(`/articles/${e}.json`)
}

async function Fl() {
    return pt.get("/tags.json")
}

async function Jp() {
    return pt.get("/categories.json")
}

async function W9(e) {
    return pt.get(`/pages/${e}/index.json`)
}

async function Qp() {
    return pt.get("/features.json")
}

async function e3() {
    return pt.get("/statistic.json")
}

async function t3() {
    return pt.get("/search.json")
}

async function n3(e) {
    return pt.get(`/authors/${e}.json`)
}

class xl {
    constructor(t) {
        E(this, "categories", 0);
        E(this, "posts", 0);
        E(this, "tags", 0);
        E(this, "wordCount", 0);
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

var s3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function o3(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

var c1 = {exports: {}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function (e, t) {
    (function (n, s) {
        e.exports = s()
    })(s3, function () {
        var n = {};
        n.version = "0.2.0";
        var s = n.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        n.configure = function (g) {
            var C, A;
            for (C in g) A = g[C], A !== void 0 && g.hasOwnProperty(C) && (s[C] = A);
            return this
        }, n.status = null, n.set = function (g) {
            var C = n.isStarted();
            g = o(g, s.minimum, 1), n.status = g === 1 ? null : g;
            var A = n.render(!C), v = A.querySelector(s.barSelector), M = s.speed, R = s.easing;
            return A.offsetWidth, a(function (S) {
                s.positionUsing === "" && (s.positionUsing = n.getPositioningCSS()), l(v, i(g, M, R)), g === 1 ? (l(A, {
                    transition: "none",
                    opacity: 1
                }), A.offsetWidth, setTimeout(function () {
                    l(A, {transition: "all " + M + "ms linear", opacity: 0}), setTimeout(function () {
                        n.remove(), S()
                    }, M)
                }, M)) : setTimeout(S, M)
            }), this
        }, n.isStarted = function () {
            return typeof n.status == "number"
        }, n.start = function () {
            n.status || n.set(0);
            var g = function () {
                setTimeout(function () {
                    n.status && (n.trickle(), g())
                }, s.trickleSpeed)
            };
            return s.trickle && g(), this
        }, n.done = function (g) {
            return !g && !n.status ? this : n.inc(.3 + .5 * Math.random()).set(1)
        }, n.inc = function (g) {
            var C = n.status;
            return C ? (typeof g != "number" && (g = (1 - C) * o(Math.random() * C, .1, .95)), C = o(C + g, 0, .994), n.set(C)) : n.start()
        }, n.trickle = function () {
            return n.inc(Math.random() * s.trickleRate)
        }, function () {
            var g = 0, C = 0;
            n.promise = function (A) {
                return !A || A.state() === "resolved" ? this : (C === 0 && n.start(), g++, C++, A.always(function () {
                    C--, C === 0 ? (g = 0, n.done()) : n.set((g - C) / g)
                }), this)
            }
        }(), n.render = function (g) {
            if (n.isRendered()) return document.getElementById("nprogress");
            u(document.documentElement, "nprogress-busy");
            var C = document.createElement("div");
            C.id = "nprogress", C.innerHTML = s.template;
            var A = C.querySelector(s.barSelector), v = g ? "-100" : r(n.status || 0),
                M = document.querySelector(s.parent), R;
            return l(A, {
                transition: "all 0 linear",
                transform: "translate3d(" + v + "%,0,0)"
            }), s.showSpinner || (R = C.querySelector(s.spinnerSelector), R && w(R)), M != document.body && u(M, "nprogress-custom-parent"), M.appendChild(C), C
        }, n.remove = function () {
            h(document.documentElement, "nprogress-busy"), h(document.querySelector(s.parent), "nprogress-custom-parent");
            var g = document.getElementById("nprogress");
            g && w(g)
        }, n.isRendered = function () {
            return !!document.getElementById("nprogress")
        }, n.getPositioningCSS = function () {
            var g = document.body.style,
                C = "WebkitTransform" in g ? "Webkit" : "MozTransform" in g ? "Moz" : "msTransform" in g ? "ms" : "OTransform" in g ? "O" : "";
            return C + "Perspective" in g ? "translate3d" : C + "Transform" in g ? "translate" : "margin"
        };

        function o(g, C, A) {
            return g < C ? C : g > A ? A : g
        }

        function r(g) {
            return (-1 + g) * 100
        }

        function i(g, C, A) {
            var v;
            return s.positionUsing === "translate3d" ? v = {transform: "translate3d(" + r(g) + "%,0,0)"} : s.positionUsing === "translate" ? v = {transform: "translate(" + r(g) + "%,0)"} : v = {"margin-left": r(g) + "%"}, v.transition = "all " + C + "ms " + A, v
        }

        var a = function () {
            var g = [];

            function C() {
                var A = g.shift();
                A && A(C)
            }

            return function (A) {
                g.push(A), g.length == 1 && C()
            }
        }(), l = function () {
            var g = ["Webkit", "O", "Moz", "ms"], C = {};

            function A(S) {
                return S.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (I, V) {
                    return V.toUpperCase()
                })
            }

            function v(S) {
                var I = document.body.style;
                if (S in I) return S;
                for (var V = g.length, K = S.charAt(0).toUpperCase() + S.slice(1), D; V--;) if (D = g[V] + K, D in I) return D;
                return S
            }

            function M(S) {
                return S = A(S), C[S] || (C[S] = v(S))
            }

            function R(S, I, V) {
                I = M(I), S.style[I] = V
            }

            return function (S, I) {
                var V = arguments, K, D;
                if (V.length == 2) for (K in I) D = I[K], D !== void 0 && I.hasOwnProperty(K) && R(S, K, D); else R(S, V[1], V[2])
            }
        }();

        function c(g, C) {
            var A = typeof g == "string" ? g : p(g);
            return A.indexOf(" " + C + " ") >= 0
        }

        function u(g, C) {
            var A = p(g), v = A + C;
            c(A, C) || (g.className = v.substring(1))
        }

        function h(g, C) {
            var A = p(g), v;
            c(g, C) && (v = A.replace(" " + C + " ", " "), g.className = v.substring(1, v.length - 1))
        }

        function p(g) {
            return (" " + (g.className || "") + " ").replace(/\s+/gi, " ")
        }

        function w(g) {
            g && g.parentNode && g.parentNode.removeChild(g)
        }

        return n
    })
})(c1);
var r3 = c1.exports;
const Ur = o3(r3);
Ur.configure({showSpinner: !1, trickleSpeed: 100, parent: "#loading-bar-wrapper"});
const i3 = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "theme-dark" : "theme-light", or = e => {
    e === "theme-dark" ? (document.body.classList.remove("theme-light"), document.body.classList.add("theme-dark")) : (document.body.classList.remove("theme-dark"), document.body.classList.add("theme-light"))
}, We = Lt("app", {
    state: () => ({
        theme: Bt.get("theme") ? String(Bt.get("theme")) : i3(),
        locale: Bt.get("locale") ? Bt.get("locale") : "en",
        themeConfig: new ll,
        hexoConfig: new gl,
        headerGradient: "",
        statistic: new xl,
        appLoading: !1,
        NPTimeout: -1,
        loadingTimeout: -1,
        configReady: !1,
        openSearchModal: !1
    }), getters: {getTheme: e => e.theme, getAppLoading: e => e.appLoading}, actions: {
        async fetchConfig() {
            this.configReady = !1;
            const {data: e} = await Kp();
            this.themeConfig = new ll(e), this.hexoConfig = new gl(e), this.setDefaultLocale(this.themeConfig.site.language), this.initializeTheme(this.themeConfig.theme.dark_mode), this.configReady = !0
        }, async fetchStat() {
            const {data: e} = await e3();
            return new Promise(t => {
                this.statistic = new xl(e), t(this.statistic)
            })
        }, initializeTheme(e) {
            !Bt.get("theme") && e !== "auto" && (this.theme = e ? "theme-dark" : "theme-light", Bt.set("theme", this.theme), or(this.theme)), or(this.theme)
        }, toggleTheme(e) {
            this.theme = e === !0 || this.theme === "theme-light" ? "theme-dark" : "theme-light", Bt.set("theme", this.theme), or(this.theme)
        }, changeLocale(e) {
            Bt.set("locale", e), this.locale = e, An.global.locale.value = e
        }, setDefaultLocale(e) {
            Bt.get("locale") || this.changeLocale(e)
        }, startLoading() {
            this.appLoading !== !0 && (this.NPTimeout !== -1 && clearTimeout(this.NPTimeout), this.loadingTimeout !== -1 && clearTimeout(this.loadingTimeout), Ur.start(), this.appLoading = !0)
        }, endLoading() {
            this.NPTimeout = window.setTimeout(() => {
                Ur.done()
            }, 100), this.loadingTimeout = window.setTimeout(() => {
                this.appLoading = !1
            }, 300)
        }, changeOpenModal(e) {
            this.openSearchModal = e
        }, handleEscKey() {
            this.openSearchModal && (this.openSearchModal = !1)
        }, handleSearchOpen() {
            this.openSearchModal || (this.openSearchModal = !0)
        }
    }
}), Zo = Lt({
    id: "commonStore",
    state: () => ({isMobile: !1, headerImage: ""}),
    getters: {},
    actions: {
        setHeaderImage(e) {
            this.headerImage = e
        }, resetHeaderImage() {
            this.headerImage = ""
        }, changeMobileState(e) {
            this.isMobile = e
        }
    }
}), Ii = Lt({
    id: "metaStore",
    state: () => ({title: "", description: "", links: [], scripts: [], meta: []}),
    getters: {
        getTitle() {
            const t = We().themeConfig.site.subtitle || "Blog";
            return this.title === "" ? t : `${this.title} | ${t}`
        }
    },
    actions: {
        setTitle(e) {
            this.title = An.global.te(`menu.${e}`) ? An.global.t(`menu.${e}`) : e
        }, addScripts(...e) {
            e = e.flat(1);
            for (const t of e) this.scripts.push(t)
        }
    }
});

class a3 {
    constructor(t) {
        E(this, "id", "");
        E(this, "title", "");
        E(this, "content", "");
        E(this, "slug", "");
        E(this, "date", "");
        E(this, "categories_index", "");
        E(this, "tags_index", "");
        E(this, "author_index", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class l3 {
    constructor(t) {
        E(this, "title", "");
        E(this, "content", "");
        E(this, "slug", "");
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class c3 {
    constructor(t) {
        E(this, "data", new Map);
        E(this, "capacity", 5);
        E(this, "cacheKey", "ob-recent-search-results-key");
        t && this.initData(t)
    }

    initData(t) {
        t.forEach(n => {
            this.add(n)
        })
    }

    getData() {
        const t = localStorage.getItem(this.cacheKey);
        if (t === null) return [];
        let n = JSON.parse(t);
        return n = n.map(s => ({
            title: s.value.title,
            content: s.value.content,
            slug: s.value.slug
        })), n.length > this.data.size && this.initData(n.reverse()), n
    }

    cache() {
        localStorage.setItem(this.cacheKey, JSON.stringify(this.toArray()))
    }

    toArray() {
        return Array.from(this.data, ([t, n]) => ({name: t, value: n})).reverse()
    }

    add(t) {
        const n = new l3(t);
        this.data.has(n.slug) || (this.data.size === this.capacity && this.data.delete(this.data.keys().next().value), this.data.set(n.slug, n), this.cache())
    }

    remove(t) {
        this.data.has(t) && (this.data.delete(t), this.cache())
    }
}

class Dl {
    constructor(t) {
        E(this, "indexes", []);
        E(this, "contentLimit", 100);
        t && (this.indexes = t.map(n => new a3(n)))
    }

    searchByPage(t, n, s) {
        n = n || 1, s = s || 12;
        const o = this.search(t), r = o.length;
        if (r <= s) return o;
        const i = n * s, a = i + s > r ? r : i + s;
        return o.slice(i, a)
    }

    search(t) {
        const n = t.trim().toLocaleLowerCase().split(/[\s-]+/), s = [];
        return this.indexes.forEach(o => {
            (!o.title || o.title.trim() === "") && (o.title = "Untitled");
            const r = o.title.trim(), i = r.toLocaleLowerCase(), a = o.content.trim(), l = a.toLocaleLowerCase(),
                c = o.slug;
            let u = -1, h = -1, p = -1, w = !0;
            if (l !== "" ? n.forEach((g, C) => {
                u = i.indexOf(g), h = l.indexOf(g), u < 0 && h < 0 ? w = !1 : (h < 0 && (h = 0), C === 0 && (p = h))
            }) : w = !1, w) {
                const g = a;
                if (p >= 0) {
                    let C = p - 20, A = p + this.contentLimit - 20;
                    C < 0 && (C = 0), C === 0 && (A = 100), A > g.length && (A = g.length);
                    let v = g.slice(C, A);
                    n.forEach(function (M) {
                        const R = new RegExp(M, "gi");
                        v = v.replace(R, "<mark>" + M + "</mark>")
                    }), s.push({title: r, content: v, slug: c})
                }
            }
        }), s
    }
}

const Bo = Lt({
    id: "searchStore",
    state: () => ({searchIndexes: new Dl, recentResults: new c3, openModal: !1}),
    getters: {
        results() {
            return this.recentResults.getData()
        }
    },
    actions: {
        async fetchSearchIndex() {
            const {data: e} = await t3();
            return this.searchIndexes = new Dl(e), new Promise(t => {
                t(this.searchIndexes)
            })
        }, setOpenModal(e) {
            var t;
            this.openModal = e, e === !0 ? document.body.classList.add("modal--active") : document.body.classList.remove("modal--active"), (t = document.getElementById("App-Container")) == null || t.focus()
        }, addRecentSearch(e) {
            this.recentResults.add(e)
        }
    }
});/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const xn = typeof window < "u";

function u3(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}

const Pe = Object.assign;

function rr(e, t) {
    const n = {};
    for (const s in t) {
        const o = t[s];
        n[s] = At(o) ? o.map(e) : e(o)
    }
    return n
}

const vs = () => {
}, At = Array.isArray, f3 = /\/$/, d3 = e => e.replace(f3, "");

function ir(e, t, n = "/") {
    let s, o = {}, r = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (s = t.slice(0, l), r = t.slice(l + 1, a > -1 ? a : t.length), o = e(r)), a > -1 && (s = s || t.slice(0, a), i = t.slice(a, t.length)), s = g3(s ?? t, n), {
        fullPath: s + (r && "?") + r + i,
        path: s,
        query: o,
        hash: i
    }
}

function h3(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function jl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function p3(e, t, n) {
    const s = t.matched.length - 1, o = n.matched.length - 1;
    return s > -1 && s === o && Gn(t.matched[s], n.matched[o]) && u1(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function Gn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function u1(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!m3(e[n], t[n])) return !1;
    return !0
}

function m3(e, t) {
    return At(e) ? Zl(e, t) : At(t) ? Zl(t, e) : e === t
}

function Zl(e, t) {
    return At(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t
}

function g3(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), s = e.split("/"), o = s[s.length - 1];
    (o === ".." || o === ".") && s.push("");
    let r = n.length - 1, i, a;
    for (i = 0; i < s.length; i++) if (a = s[i], a !== ".") if (a === "..") r > 1 && r--; else break;
    return n.slice(0, r).join("/") + "/" + s.slice(i - (i === s.length ? 1 : 0)).join("/")
}

var Is;
(function (e) {
    e.pop = "pop", e.push = "push"
})(Is || (Is = {}));
var bs;
(function (e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(bs || (bs = {}));

function _3(e) {
    if (!e) if (xn) {
        const t = document.querySelector("base");
        e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), d3(e)
}

const v3 = /^[^#]+#/;

function b3(e, t) {
    return e.replace(v3, "#") + t
}

function y3(e, t) {
    const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
    return {behavior: t.behavior, left: s.left - n.left - (t.left || 0), top: s.top - n.top - (t.top || 0)}
}

const Ho = () => ({left: window.pageXOffset, top: window.pageYOffset});

function k3(e) {
    let t;
    if ("el" in e) {
        const n = e.el, s = typeof n == "string" && n.startsWith("#"),
            o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o) return;
        t = y3(o, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function Bl(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}

const Vr = new Map;

function w3(e, t) {
    Vr.set(e, t)
}

function C3(e) {
    const t = Vr.get(e);
    return Vr.delete(e), t
}

let E3 = () => location.protocol + "//" + location.host;

function f1(e, t) {
    const {pathname: n, search: s, hash: o} = t, r = e.indexOf("#");
    if (r > -1) {
        let a = o.includes(e.slice(r)) ? e.slice(r).length : 1, l = o.slice(a);
        return l[0] !== "/" && (l = "/" + l), jl(l, "")
    }
    return jl(n, e) + s + o
}

function M3(e, t, n, s) {
    let o = [], r = [], i = null;
    const a = ({state: p}) => {
        const w = f1(e, location), g = n.value, C = t.value;
        let A = 0;
        if (p) {
            if (n.value = w, t.value = p, i && i === g) {
                i = null;
                return
            }
            A = C ? p.position - C.position : 0
        } else s(w);
        o.forEach(v => {
            v(n.value, g, {delta: A, type: Is.pop, direction: A ? A > 0 ? bs.forward : bs.back : bs.unknown})
        })
    };

    function l() {
        i = n.value
    }

    function c(p) {
        o.push(p);
        const w = () => {
            const g = o.indexOf(p);
            g > -1 && o.splice(g, 1)
        };
        return r.push(w), w
    }

    function u() {
        const {history: p} = window;
        p.state && p.replaceState(Pe({}, p.state, {scroll: Ho()}), "")
    }

    function h() {
        for (const p of r) p();
        r = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u)
    }

    return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, {passive: !0}), {
        pauseListeners: l,
        listen: c,
        destroy: h
    }
}

function Hl(e, t, n, s = !1, o = !1) {
    return {back: e, current: t, forward: n, replaced: s, position: window.history.length, scroll: o ? Ho() : null}
}

function S3(e) {
    const {history: t, location: n} = window, s = {value: f1(e, n)}, o = {value: t.state};
    o.value || r(s.value, {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function r(l, c, u) {
        const h = e.indexOf("#"),
            p = h > -1 ? (n.host && document.querySelector("base") ? e : e.slice(h)) + l : E3() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", p), o.value = c
        } catch (w) {
            console.error(w), n[u ? "replace" : "assign"](p)
        }
    }

    function i(l, c) {
        const u = Pe({}, t.state, Hl(o.value.back, l, o.value.forward, !0), c, {position: o.value.position});
        r(l, u, !0), s.value = l
    }

    function a(l, c) {
        const u = Pe({}, o.value, t.state, {forward: l, scroll: Ho()});
        r(u.current, u, !0);
        const h = Pe({}, Hl(s.value, l, null), {position: u.position + 1}, c);
        r(l, h, !1), s.value = l
    }

    return {location: s, state: o, push: a, replace: i}
}

function T3(e) {
    e = _3(e);
    const t = S3(e), n = M3(e, t.state, t.location, t.replace);

    function s(r, i = !0) {
        i || n.pauseListeners(), history.go(r)
    }

    const o = Pe({location: "", base: e, go: s, createHref: b3.bind(null, e)}, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(o, "state", {enumerable: !0, get: () => t.state.value}), o
}

function O3(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function d1(e) {
    return typeof e == "string" || typeof e == "symbol"
}

const nn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}, h1 = Symbol("");
var Ul;
(function (e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Ul || (Ul = {}));

function Yn(e, t) {
    return Pe(new Error, {type: e, [h1]: !0}, t)
}

function Ut(e, t) {
    return e instanceof Error && h1 in e && (t == null || !!(e.type & t))
}

const Vl = "[^/]+?", A3 = {sensitive: !1, strict: !1, start: !0, end: !0}, L3 = /[.+*?^${}()[\]/\\]/g;

function I3(e, t) {
    const n = Pe({}, A3, t), s = [];
    let o = n.start ? "^" : "";
    const r = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (o += "/");
        for (let h = 0; h < c.length; h++) {
            const p = c[h];
            let w = 40 + (n.sensitive ? .25 : 0);
            if (p.type === 0) h || (o += "/"), o += p.value.replace(L3, "\\$&"), w += 40; else if (p.type === 1) {
                const {value: g, repeatable: C, optional: A, regexp: v} = p;
                r.push({name: g, repeatable: C, optional: A});
                const M = v || Vl;
                if (M !== Vl) {
                    w += 10;
                    try {
                        new RegExp(`(${M})`)
                    } catch (S) {
                        throw new Error(`Invalid custom RegExp for param "${g}" (${M}): ` + S.message)
                    }
                }
                let R = C ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`;
                h || (R = A && c.length < 2 ? `(?:/${R})` : "/" + R), A && (R += "?"), o += R, w += 20, A && (w += -8), C && (w += -20), M === ".*" && (w += -50)
            }
            u.push(w)
        }
        s.push(u)
    }
    if (n.strict && n.end) {
        const c = s.length - 1;
        s[c][s[c].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const i = new RegExp(o, n.sensitive ? "" : "i");

    function a(c) {
        const u = c.match(i), h = {};
        if (!u) return null;
        for (let p = 1; p < u.length; p++) {
            const w = u[p] || "", g = r[p - 1];
            h[g.name] = w && g.repeatable ? w.split("/") : w
        }
        return h
    }

    function l(c) {
        let u = "", h = !1;
        for (const p of e) {
            (!h || !u.endsWith("/")) && (u += "/"), h = !1;
            for (const w of p) if (w.type === 0) u += w.value; else if (w.type === 1) {
                const {value: g, repeatable: C, optional: A} = w, v = g in c ? c[g] : "";
                if (At(v) && !C) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
                const M = At(v) ? v.join("/") : v;
                if (!M) if (A) p.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : h = !0); else throw new Error(`Missing required param "${g}"`);
                u += M
            }
        }
        return u || "/"
    }

    return {re: i, score: s, keys: r, parse: a, stringify: l}
}

function P3(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const s = t[n] - e[n];
        if (s) return s;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}

function $3(e, t) {
    let n = 0;
    const s = e.score, o = t.score;
    for (; n < s.length && n < o.length;) {
        const r = P3(s[n], o[n]);
        if (r) return r;
        n++
    }
    if (Math.abs(o.length - s.length) === 1) {
        if (Wl(s)) return 1;
        if (Wl(o)) return -1
    }
    return o.length - s.length
}

function Wl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}

const R3 = {type: 0, value: ""}, N3 = /[a-zA-Z0-9_]/;

function F3(e) {
    if (!e) return [[]];
    if (e === "/") return [[R3]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(w) {
        throw new Error(`ERR (${n})/"${c}": ${w}`)
    }

    let n = 0, s = n;
    const o = [];
    let r;

    function i() {
        r && o.push(r), r = []
    }

    let a = 0, l, c = "", u = "";

    function h() {
        c && (n === 0 ? r.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), r.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"), c = "")
    }

    function p() {
        c += l
    }

    for (; a < e.length;) {
        if (l = e[a++], l === "\\" && n !== 2) {
            s = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                l === "/" ? (c && h(), i()) : l === ":" ? (h(), n = 1) : p();
                break;
            case 4:
                p(), n = s;
                break;
            case 1:
                l === "(" ? n = 2 : N3.test(l) ? p() : (h(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
                break;
            case 2:
                l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
                break;
            case 3:
                h(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, u = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), h(), i(), o
}

function x3(e, t, n) {
    const s = I3(F3(e.path), n), o = Pe(s, {record: e, parent: t, children: [], alias: []});
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}

function D3(e, t) {
    const n = [], s = new Map;
    t = Kl({strict: !1, end: !0, sensitive: !1}, t);

    function o(u) {
        return s.get(u)
    }

    function r(u, h, p) {
        const w = !p, g = j3(u);
        g.aliasOf = p && p.record;
        const C = Kl(t, u), A = [g];
        if ("alias" in u) {
            const R = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const S of R) A.push(Pe({}, g, {
                components: p ? p.record.components : g.components,
                path: S,
                aliasOf: p ? p.record : g
            }))
        }
        let v, M;
        for (const R of A) {
            const {path: S} = R;
            if (h && S[0] !== "/") {
                const I = h.record.path, V = I[I.length - 1] === "/" ? "" : "/";
                R.path = h.record.path + (S && V + S)
            }
            if (v = x3(R, h, C), p ? p.alias.push(v) : (M = M || v, M !== v && M.alias.push(v), w && u.name && !ql(v) && i(u.name)), g.children) {
                const I = g.children;
                for (let V = 0; V < I.length; V++) r(I[V], v, p && p.children[V])
            }
            p = p || v, (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && l(v)
        }
        return M ? () => {
            i(M)
        } : vs
    }

    function i(u) {
        if (d1(u)) {
            const h = s.get(u);
            h && (s.delete(u), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i))
        } else {
            const h = n.indexOf(u);
            h > -1 && (n.splice(h, 1), u.record.name && s.delete(u.record.name), u.children.forEach(i), u.alias.forEach(i))
        }
    }

    function a() {
        return n
    }

    function l(u) {
        let h = 0;
        for (; h < n.length && $3(u, n[h]) >= 0 && (u.record.path !== n[h].record.path || !p1(u, n[h]));) h++;
        n.splice(h, 0, u), u.record.name && !ql(u) && s.set(u.record.name, u)
    }

    function c(u, h) {
        let p, w = {}, g, C;
        if ("name" in u && u.name) {
            if (p = s.get(u.name), !p) throw Yn(1, {location: u});
            C = p.record.name, w = Pe(zl(h.params, p.keys.filter(M => !M.optional).map(M => M.name)), u.params && zl(u.params, p.keys.map(M => M.name))), g = p.stringify(w)
        } else if ("path" in u) g = u.path, p = n.find(M => M.re.test(g)), p && (w = p.parse(g), C = p.record.name); else {
            if (p = h.name ? s.get(h.name) : n.find(M => M.re.test(h.path)), !p) throw Yn(1, {
                location: u,
                currentLocation: h
            });
            C = p.record.name, w = Pe({}, h.params, u.params), g = p.stringify(w)
        }
        const A = [];
        let v = p;
        for (; v;) A.unshift(v.record), v = v.parent;
        return {name: C, path: g, params: w, matched: A, meta: B3(A)}
    }

    return e.forEach(u => r(u)), {addRoute: r, resolve: c, removeRoute: i, getRoutes: a, getRecordMatcher: o}
}

function zl(e, t) {
    const n = {};
    for (const s of t) s in e && (n[s] = e[s]);
    return n
}

function j3(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Z3(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {default: e.component}
    }
}

function Z3(e) {
    const t = {}, n = e.props || !1;
    if ("component" in e) t.default = n; else for (const s in e.components) t[s] = typeof n == "boolean" ? n : n[s];
    return t
}

function ql(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function B3(e) {
    return e.reduce((t, n) => Pe(t, n.meta), {})
}

function Kl(e, t) {
    const n = {};
    for (const s in e) n[s] = s in t ? t[s] : e[s];
    return n
}

function p1(e, t) {
    return t.children.some(n => n === e || p1(e, n))
}

const m1 = /#/g, H3 = /&/g, U3 = /\//g, V3 = /=/g, W3 = /\?/g, g1 = /\+/g, z3 = /%5B/g, q3 = /%5D/g, _1 = /%5E/g,
    K3 = /%60/g, v1 = /%7B/g, G3 = /%7C/g, b1 = /%7D/g, Y3 = /%20/g;

function Pi(e) {
    return encodeURI("" + e).replace(G3, "|").replace(z3, "[").replace(q3, "]")
}

function X3(e) {
    return Pi(e).replace(v1, "{").replace(b1, "}").replace(_1, "^")
}

function Wr(e) {
    return Pi(e).replace(g1, "%2B").replace(Y3, "+").replace(m1, "%23").replace(H3, "%26").replace(K3, "`").replace(v1, "{").replace(b1, "}").replace(_1, "^")
}

function J3(e) {
    return Wr(e).replace(V3, "%3D")
}

function Q3(e) {
    return Pi(e).replace(m1, "%23").replace(W3, "%3F")
}

function e4(e) {
    return e == null ? "" : Q3(e).replace(U3, "%2F")
}

function fo(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {
    }
    return "" + e
}

function t4(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const s = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < s.length; ++o) {
        const r = s[o].replace(g1, " "), i = r.indexOf("="), a = fo(i < 0 ? r : r.slice(0, i)),
            l = i < 0 ? null : fo(r.slice(i + 1));
        if (a in t) {
            let c = t[a];
            At(c) || (c = t[a] = [c]), c.push(l)
        } else t[a] = l
    }
    return t
}

function Gl(e) {
    let t = "";
    for (let n in e) {
        const s = e[n];
        if (n = J3(n), s == null) {
            s !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (At(s) ? s.map(r => r && Wr(r)) : [s && Wr(s)]).forEach(r => {
            r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r))
        })
    }
    return t
}

function n4(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 && (t[n] = At(s) ? s.map(o => o == null ? null : "" + o) : s == null ? s : "" + s)
    }
    return t
}

const s4 = Symbol(""), Yl = Symbol(""), Uo = Symbol(""), $i = Symbol(""), zr = Symbol("");

function is() {
    let e = [];

    function t(s) {
        return e.push(s), () => {
            const o = e.indexOf(s);
            o > -1 && e.splice(o, 1)
        }
    }

    function n() {
        e = []
    }

    return {add: t, list: () => e, reset: n}
}

function rn(e, t, n, s, o) {
    const r = s && (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
    return () => new Promise((i, a) => {
        const l = h => {
            h === !1 ? a(Yn(4, {from: n, to: t})) : h instanceof Error ? a(h) : O3(h) ? a(Yn(2, {
                from: t,
                to: h
            })) : (r && s.enterCallbacks[o] === r && typeof h == "function" && r.push(h), i())
        }, c = e.call(s && s.instances[o], t, n, l);
        let u = Promise.resolve(c);
        e.length < 3 && (u = u.then(l)), u.catch(h => a(h))
    })
}

function ar(e, t, n, s) {
    const o = [];
    for (const r of e) for (const i in r.components) {
        let a = r.components[i];
        if (!(t !== "beforeRouteEnter" && !r.instances[i])) if (o4(a)) {
            const c = (a.__vccOpts || a)[t];
            c && o.push(rn(c, n, s, r, i))
        } else {
            let l = a();
            o.push(() => l.then(c => {
                if (!c) return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));
                const u = u3(c) ? c.default : c;
                r.components[i] = u;
                const p = (u.__vccOpts || u)[t];
                return p && rn(p, n, s, r, i)()
            }))
        }
    }
    return o
}

function o4(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Xl(e) {
    const t = it(Uo), n = it($i), s = Q(() => t.resolve(Hn(e.to))), o = Q(() => {
            const {matched: l} = s.value, {length: c} = l, u = l[c - 1], h = n.matched;
            if (!u || !h.length) return -1;
            const p = h.findIndex(Gn.bind(null, u));
            if (p > -1) return p;
            const w = Jl(l[c - 2]);
            return c > 1 && Jl(u) === w && h[h.length - 1].path !== w ? h.findIndex(Gn.bind(null, l[c - 2])) : p
        }), r = Q(() => o.value > -1 && l4(n.params, s.value.params)),
        i = Q(() => o.value > -1 && o.value === n.matched.length - 1 && u1(n.params, s.value.params));

    function a(l = {}) {
        return a4(l) ? t[Hn(e.replace) ? "replace" : "push"](Hn(e.to)).catch(vs) : Promise.resolve()
    }

    return {route: s, href: Q(() => s.value.href), isActive: r, isExactActive: i, navigate: a}
}

const r4 = Ce({
    name: "RouterLink",
    compatConfig: {MODE: 3},
    props: {
        to: {type: [String, Object], required: !0},
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {type: String, default: "page"}
    },
    useLink: Xl,
    setup(e, {slots: t}) {
        const n = Gt(Xl(e)), {options: s} = it(Uo), o = Q(() => ({
            [Ql(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
            [Ql(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const r = t.default && t.default(n);
            return e.custom ? r : zt("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
            }, r)
        }
    }
}), i4 = r4;

function a4(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function l4(e, t) {
    for (const n in t) {
        const s = t[n], o = e[n];
        if (typeof s == "string") {
            if (s !== o) return !1
        } else if (!At(o) || o.length !== s.length || s.some((r, i) => r !== o[i])) return !1
    }
    return !0
}

function Jl(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}

const Ql = (e, t, n) => e ?? t ?? n, c4 = Ce({
    name: "RouterView",
    inheritAttrs: !1,
    props: {name: {type: String, default: "default"}, route: Object},
    compatConfig: {MODE: 3},
    setup(e, {attrs: t, slots: n}) {
        const s = it(zr), o = Q(() => e.route || s.value), r = it(Yl, 0), i = Q(() => {
            let c = Hn(r);
            const {matched: u} = o.value;
            let h;
            for (; (h = u[c]) && !h.components;) c++;
            return c
        }), a = Q(() => o.value.matched[i.value]);
        fs(Yl, Q(() => i.value + 1)), fs(s4, a), fs(zr, o);
        const l = pe();
        return ft(() => [l.value, a.value, e.name], ([c, u, h], [p, w, g]) => {
            u && (u.instances[h] = c, w && w !== u && c && c === p && (u.leaveGuards.size || (u.leaveGuards = w.leaveGuards), u.updateGuards.size || (u.updateGuards = w.updateGuards))), c && u && (!w || !Gn(u, w) || !p) && (u.enterCallbacks[h] || []).forEach(C => C(c))
        }, {flush: "post"}), () => {
            const c = o.value, u = e.name, h = a.value, p = h && h.components[u];
            if (!p) return ec(n.default, {Component: p, route: c});
            const w = h.props[u], g = w ? w === !0 ? c.params : typeof w == "function" ? w(c) : w : null,
                A = zt(p, Pe({}, g, t, {
                    onVnodeUnmounted: v => {
                        v.component.isUnmounted && (h.instances[u] = null)
                    }, ref: l
                }));
            return ec(n.default, {Component: A, route: c}) || A
        }
    }
});

function ec(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}

const u4 = c4;

function f4(e) {
    const t = D3(e.routes, e), n = e.parseQuery || t4, s = e.stringifyQuery || Gl, o = e.history, r = is(), i = is(),
        a = is(), l = $c(nn);
    let c = nn;
    xn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = rr.bind(null, j => "" + j), h = rr.bind(null, e4), p = rr.bind(null, fo);

    function w(j, ne) {
        let ee, Z;
        return d1(j) ? (ee = t.getRecordMatcher(j), Z = ne) : Z = j, t.addRoute(Z, ee)
    }

    function g(j) {
        const ne = t.getRecordMatcher(j);
        ne && t.removeRoute(ne)
    }

    function C() {
        return t.getRoutes().map(j => j.record)
    }

    function A(j) {
        return !!t.getRecordMatcher(j)
    }

    function v(j, ne) {
        if (ne = Pe({}, ne || l.value), typeof j == "string") {
            const d = ir(n, j, ne.path), b = t.resolve({path: d.path}, ne), O = o.createHref(d.fullPath);
            return Pe(d, b, {params: p(b.params), hash: fo(d.hash), redirectedFrom: void 0, href: O})
        }
        let ee;
        if ("path" in j) ee = Pe({}, j, {path: ir(n, j.path, ne.path).path}); else {
            const d = Pe({}, j.params);
            for (const b in d) d[b] == null && delete d[b];
            ee = Pe({}, j, {params: h(d)}), ne.params = h(ne.params)
        }
        const Z = t.resolve(ee, ne), re = j.hash || "";
        Z.params = u(p(Z.params));
        const y = h3(s, Pe({}, j, {hash: X3(re), path: Z.path})), f = o.createHref(y);
        return Pe({fullPath: y, hash: re, query: s === Gl ? n4(j.query) : j.query || {}}, Z, {
            redirectedFrom: void 0,
            href: f
        })
    }

    function M(j) {
        return typeof j == "string" ? ir(n, j, l.value.path) : Pe({}, j)
    }

    function R(j, ne) {
        if (c !== j) return Yn(8, {from: ne, to: j})
    }

    function S(j) {
        return K(j)
    }

    function I(j) {
        return S(Pe(M(j), {replace: !0}))
    }

    function V(j) {
        const ne = j.matched[j.matched.length - 1];
        if (ne && ne.redirect) {
            const {redirect: ee} = ne;
            let Z = typeof ee == "function" ? ee(j) : ee;
            return typeof Z == "string" && (Z = Z.includes("?") || Z.includes("#") ? Z = M(Z) : {path: Z}, Z.params = {}), Pe({
                query: j.query,
                hash: j.hash,
                params: "path" in Z ? {} : j.params
            }, Z)
        }
    }

    function K(j, ne) {
        const ee = c = v(j), Z = l.value, re = j.state, y = j.force, f = j.replace === !0, d = V(ee);
        if (d) return K(Pe(M(d), {
            state: typeof d == "object" ? Pe({}, re, d.state) : re,
            force: y,
            replace: f
        }), ne || ee);
        const b = ee;
        b.redirectedFrom = ne;
        let O;
        return !y && p3(s, Z, ee) && (O = Yn(16, {
            to: b,
            from: Z
        }), $e(Z, Z, !0, !1)), (O ? Promise.resolve(O) : ie(b, Z)).catch($ => Ut($) ? Ut($, 2) ? $ : me($) : te($, b, Z)).then($ => {
            if ($) {
                if (Ut($, 2)) return K(Pe({replace: f}, M($.to), {
                    state: typeof $.to == "object" ? Pe({}, re, $.to.state) : re,
                    force: y
                }), ne || b)
            } else $ = se(b, Z, !0, f, re);
            return ue(b, Z, $), $
        })
    }

    function D(j, ne) {
        const ee = R(j, ne);
        return ee ? Promise.reject(ee) : Promise.resolve()
    }

    function X(j) {
        const ne = Xe.values().next().value;
        return ne && typeof ne.runWithContext == "function" ? ne.runWithContext(j) : j()
    }

    function ie(j, ne) {
        let ee;
        const [Z, re, y] = d4(j, ne);
        ee = ar(Z.reverse(), "beforeRouteLeave", j, ne);
        for (const d of Z) d.leaveGuards.forEach(b => {
            ee.push(rn(b, j, ne))
        });
        const f = D.bind(null, j, ne);
        return ee.push(f), De(ee).then(() => {
            ee = [];
            for (const d of r.list()) ee.push(rn(d, j, ne));
            return ee.push(f), De(ee)
        }).then(() => {
            ee = ar(re, "beforeRouteUpdate", j, ne);
            for (const d of re) d.updateGuards.forEach(b => {
                ee.push(rn(b, j, ne))
            });
            return ee.push(f), De(ee)
        }).then(() => {
            ee = [];
            for (const d of j.matched) if (d.beforeEnter && !ne.matched.includes(d)) if (At(d.beforeEnter)) for (const b of d.beforeEnter) ee.push(rn(b, j, ne)); else ee.push(rn(d.beforeEnter, j, ne));
            return ee.push(f), De(ee)
        }).then(() => (j.matched.forEach(d => d.enterCallbacks = {}), ee = ar(y, "beforeRouteEnter", j, ne), ee.push(f), De(ee))).then(() => {
            ee = [];
            for (const d of i.list()) ee.push(rn(d, j, ne));
            return ee.push(f), De(ee)
        }).catch(d => Ut(d, 8) ? d : Promise.reject(d))
    }

    function ue(j, ne, ee) {
        for (const Z of a.list()) X(() => Z(j, ne, ee))
    }

    function se(j, ne, ee, Z, re) {
        const y = R(j, ne);
        if (y) return y;
        const f = ne === nn, d = xn ? history.state : {};
        ee && (Z || f ? o.replace(j.fullPath, Pe({scroll: f && d && d.scroll}, re)) : o.push(j.fullPath, re)), l.value = j, $e(j, ne, ee, f), me()
    }

    let m;

    function P() {
        m || (m = o.listen((j, ne, ee) => {
            if (!bt.listening) return;
            const Z = v(j), re = V(Z);
            if (re) {
                K(Pe(re, {replace: !0}), Z).catch(vs);
                return
            }
            c = Z;
            const y = l.value;
            xn && w3(Bl(y.fullPath, ee.delta), Ho()), ie(Z, y).catch(f => Ut(f, 12) ? f : Ut(f, 2) ? (K(f.to, Z).then(d => {
                Ut(d, 20) && !ee.delta && ee.type === Is.pop && o.go(-1, !1)
            }).catch(vs), Promise.reject()) : (ee.delta && o.go(-ee.delta, !1), te(f, Z, y))).then(f => {
                f = f || se(Z, y, !1), f && (ee.delta && !Ut(f, 8) ? o.go(-ee.delta, !1) : ee.type === Is.pop && Ut(f, 20) && o.go(-1, !1)), ue(Z, y, f)
            }).catch(vs)
        }))
    }

    let x = is(), G = is(), W;

    function te(j, ne, ee) {
        me(j);
        const Z = G.list();
        return Z.length ? Z.forEach(re => re(j, ne, ee)) : console.error(j), Promise.reject(j)
    }

    function de() {
        return W && l.value !== nn ? Promise.resolve() : new Promise((j, ne) => {
            x.add([j, ne])
        })
    }

    function me(j) {
        return W || (W = !j, P(), x.list().forEach(([ne, ee]) => j ? ee(j) : ne()), x.reset()), j
    }

    function $e(j, ne, ee, Z) {
        const {scrollBehavior: re} = e;
        if (!xn || !re) return Promise.resolve();
        const y = !ee && C3(Bl(j.fullPath, 0)) || (Z || !ee) && history.state && history.state.scroll || null;
        return ai().then(() => re(j, ne, y)).then(f => f && k3(f)).catch(f => te(f, j, ne))
    }

    const Oe = j => o.go(j);
    let Ye;
    const Xe = new Set, bt = {
        currentRoute: l,
        listening: !0,
        addRoute: w,
        removeRoute: g,
        hasRoute: A,
        getRoutes: C,
        resolve: v,
        options: e,
        push: S,
        replace: I,
        go: Oe,
        back: () => Oe(-1),
        forward: () => Oe(1),
        beforeEach: r.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: G.add,
        isReady: de,
        install(j) {
            const ne = this;
            j.component("RouterLink", i4), j.component("RouterView", u4), j.config.globalProperties.$router = ne, Object.defineProperty(j.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Hn(l)
            }), xn && !Ye && l.value === nn && (Ye = !0, S(o.location).catch(re => {
            }));
            const ee = {};
            for (const re in nn) ee[re] = Q(() => l.value[re]);
            j.provide(Uo, ne), j.provide($i, Gt(ee)), j.provide(zr, l);
            const Z = j.unmount;
            Xe.add(j), j.unmount = function () {
                Xe.delete(j), Xe.size < 1 && (c = nn, m && m(), m = null, l.value = nn, Ye = !1, W = !1), Z()
            }
        }
    };

    function De(j) {
        return j.reduce((ne, ee) => ne.then(() => X(ee)), Promise.resolve())
    }

    return bt
}

function d4(e, t) {
    const n = [], s = [], o = [], r = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < r; i++) {
        const a = t.matched[i];
        a && (e.matched.find(c => Gn(c, a)) ? s.push(a) : n.push(a));
        const l = e.matched[i];
        l && (t.matched.find(c => Gn(c, l)) || o.push(l))
    }
    return [n, s, o]
}

function xs() {
    return it(Uo)
}

function z9() {
    return it($i)
}

const h4 = Ce({
    name: "Logo", setup() {
        const e = We(), t = xs();
        return {
            handleLogoClick: () => {
                t.push("/")
            }, themeConfig: Q(() => e.themeConfig)
        }
    }
});
const Le = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [s, o] of t) n[s] = o;
        return n
    }, p4 = {class: "flex items-start self-stretch relative"}, m4 = {key: 0, class: "flex text-4xl"},
    g4 = {key: 1, class: "flex text-4xl animation-text"}, _4 = {class: "font-extrabold text-xs uppercase"},
    v4 = ["src"];

function b4(e, t, n, s, o, r) {
    return T(), N("div", p4, [k("div", {
        class: "flex flex-col relative py-4 z-10 text-white font-medium ob-drop-shadow cursor-pointer",
        onClick: t[0] || (t[0] = (...i) => e.handleLogoClick && e.handleLogoClick(...i))
    }, [e.themeConfig.site.author ? (T(), N("span", m4, q(e.themeConfig.site.author), 1)) : (T(), N("span", g4, "LOADING")), k("span", _4, q(e.themeConfig.site.nick || "BLOG"), 1)]), k("img", {
        class: "logo-image",
        src: e.themeConfig.site.logo || e.themeConfig.site.avatar,
        alt: "site-logo"
    }, null, 8, v4)])
}

const y4 = Le(h4, [["render", b4], ["__scopeId", "data-v-2633daec"]]), y1 = Lt({
    id: "dropdown", state: () => ({commandName: "", uid: 0}), getters: {}, actions: {
        setCommand(e) {
            this.commandName = e
        }, setUid() {
            return this.uid = Date.now(), this.uid
        }
    }
}), k4 = Ce({
    emits: ["command"], name: "ObDropdown", props: {hover: {type: Boolean, default: !1}}, setup(e, {emit: t}) {
        const n = Zo(), s = ht(e).hover, o = y1(), r = pe(0);
        ft(() => o.commandName, (h, p) => {
            const w = h || p;
            r.value === o.uid && t("command", w)
        });
        let i = Gt({active: !1});
        const a = () => {
            i.active || (r.value = o.setUid()), s.value || (i.active = !i.active)
        }, l = () => {
            !s.value && !n.isMobile && (i.active = !1, r.value = 0)
        }, c = () => {
            i.active || (r.value = o.setUid()), s.value && (i.active = !0)
        }, u = () => {
            s.value && (i.active = !1, r.value = 0)
        };
        return fs("sharedState", i), {toggle: a, onClickAway: l, hoverHandler: c, leaveHandler: u}
    }
});

function w4(e, t, n, s, o, r) {
    const i = di("click-away");
    return fn((T(), N("div", {
        class: "ob-dropdown relative z-50",
        onClick: t[0] || (t[0] = (...a) => e.toggle && e.toggle(...a)),
        onMouseover: t[1] || (t[1] = (...a) => e.hoverHandler && e.hoverHandler(...a)),
        onMouseleave: t[2] || (t[2] = (...a) => e.leaveHandler && e.leaveHandler(...a))
    }, [dn(e.$slots, "default")], 32)), [[i, e.onClickAway]])
}

const Ri = Le(k4, [["render", w4]]), C4 = Ce({
    name: "ObDropdownMenu", props: {expand: {type: Boolean, default: !1}}, setup() {
        const e = it("sharedState", {active: !1});
        return {active: Q(() => e.active)}
    }
});
const E4 = {key: 0, class: "origin-top-right absolute right-0 mt-2 w-48 bg-ob-deep-900 rounded-lg py-2 shadow-md"},
    M4 = {key: 1, class: "flex flex-col justify-center items-center mt-2 w-48 bg-ob-deep-900 rounded-lg py-2"};

function S4(e, t, n, s, o, r) {
    return T(), ye(pn, {name: "dropdown-content"}, {
        default: Ne(() => [!e.expand && e.active ? (T(), N("div", E4, [dn(e.$slots, "default", {}, void 0, !0)])) : e.expand && e.active ? (T(), N("div", M4, [dn(e.$slots, "default", {}, void 0, !0)])) : be("", !0)]),
        _: 3
    })
}

const Ni = Le(C4, [["render", S4], ["__scopeId", "data-v-6001da18"]]), T4 = Ce({
    name: "ObDropdownItem", props: {name: String}, setup(e) {
        const t = y1();
        return {
            handleClick: () => {
                t.setCommand(String(e.name))
            }
        }
    }
});

function O4(e, t, n, s, o, r) {
    return T(), N("div", {
        onClick: t[0] || (t[0] = _t((...i) => e.handleClick && e.handleClick(...i), ["stop", "prevent"])),
        class: "block cursor-pointer hover:bg-ob-trans my-1 px-4 py-1 font-medium hover:text-ob-bright"
    }, [dn(e.$slots, "default")])
}

const Fi = Le(T4, [["render", O4]]), A4 = Ce({
    name: "ObToggle", props: {status: Boolean}, emits: ["changeStatus"], setup(e, {emit: t}) {
        let {status: n} = ht(e);
        Mt(() => {
            i()
        });
        let s = Gt({transform: "", background: "#6e40c9"}), o = n.value;
        const r = () => {
            o = !o, i(), t("changeStatus", o)
        }, i = () => {
            const a = o ? "18px" : "0";
            s.transform = `translateX(${a})`;
            const l = o ? "#6e40c9" : "#100E16";
            s.background = l
        };
        return {toggleStyle: s, changeStatus: r}
    }
});
const L4 = e => (ci("data-v-ec7f8f5f"), e = e(), ui(), e), I4 = L4(() => k("div", {class: "toggle-track"}, null, -1));

function P4(e, t, n, s, o, r) {
    return T(), N("div", {
        class: "toggler",
        onClick: t[0] || (t[0] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [I4, k("div", {
        class: "slider",
        style: Ie({transform: e.toggleStyle.transform, backgroundColor: e.toggleStyle.background})
    }, [dn(e.$slots, "default", {}, void 0, !0)], 4)])
}

const $4 = Le(A4, [["render", P4], ["__scopeId", "data-v-ec7f8f5f"]]), R4 = Ce({
    name: "ObThemeToggle", components: {Toggle: $4}, setup() {
        const e = We();
        let t = e.theme === "theme-dark";
        const n = Gt({fill: "yellow", margin: "7px 0 0 7px"}), s = o => {
            e.toggleTheme(o)
        };
        return {svg: Q(() => n), handleChange: s, defaultStatus: t}
    }
}), N4 = k("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"
}, null, -1), F4 = [N4];

function x4(e, t, n, s, o, r) {
    const i = le("Toggle");
    return T(), ye(i, {
        status: e.defaultStatus,
        onChangeStatus: e.handleChange
    }, {
        default: Ne(() => [(T(), N("svg", {
            style: Ie({fill: e.svg.fill, margin: e.svg.margin}),
            "aria-hidden": "true",
            width: "14",
            height: "13",
            viewBox: "0 0 14 13",
            xmlns: "http://www.w3.org/2000/svg"
        }, F4, 4))]), _: 1
    }, 8, ["status", "onChangeStatus"])
}

const D4 = Le(R4, [["render", x4]]), j4 = Ce({
        name: "ObSearchModal", setup() {
            const e = Bo(), t = pe(), n = pe(!1), s = pe([]), o = xs(), r = pe(!1), i = pe(!1), a = pe(""), l = pe(),
                c = pe(0), u = pe(0), h = pe(!1), {t: p} = nt(), w = D => {
                    e.setOpenModal(D)
                }, g = D => {
                    e.addRecentSearch(D), I(), w(!1), D.slug !== "" && o.push({name: "post", params: {slug: D.slug}})
                }, C = () => {
                    a.value = "", s.value = [], h.value = !1, V(l.value.length)
                }, A = () => {
                    h.value !== !0 && (c.value === 0 ? c.value = u.value : c.value = c.value - 1, M())
                }, v = () => {
                    h.value !== !0 && (c.value === u.value ? c.value = 0 : c.value = c.value + 1, M())
                }, M = () => {
                    const D = document.getElementById("Search-Dropdown"),
                        X = document.getElementById(`search-hit-item-${c.value}`),
                        ie = D == null ? void 0 : D.getBoundingClientRect().height,
                        ue = X == null ? void 0 : X.getBoundingClientRect().height;
                    if (ue && ie && D) {
                        const m = 36 + ue * (c.value + 1) - ie;
                        m > 0 && D.scrollTo({top: m})
                    }
                    D && c.value === 0 && D.scrollTo({top: 0})
                }, R = () => {
                    s.value.length === 0 && l.value.length > 0 && g(l.value[c.value]), s.value.length > 0 && g(s.value[c.value])
                }, S = _.debounce(D => {
                    D.target.value !== "" ? (s.value = e.searchIndexes.search(D.target.value), s.value.length > 0 ? (V(s.value.length), h.value = !1) : h.value = !0) : (h.value = !1, s.value = [], V(l.value.length))
                }, 500), I = () => {
                    l.value = e.recentResults.getData(), V(l.value.length)
                }, V = D => {
                    c.value = 0, u.value = D - 1
                };
            return So(async () => {
                n.value = !1, h.value = !1, await e.fetchSearchIndex().then(() => {
                    n.value = !0
                })
            }), Mt(() => setTimeout(() => {
                t.value && t.value.focus()
            }, 200)), qc(() => {
                a.value = "", s.value = [], setTimeout(() => {
                    t.value && t.value.focus()
                }, 200)
            }), Qn(() => {
                document.body.classList.remove("modal--active")
            }), ft(() => e.openModal, D => {
                D === !0 && I(), r.value = D, setTimeout(() => {
                    i.value = D
                }, 200)
            }), {
                openModal: Q(() => r.value),
                openSearchContainer: Q(() => i.value),
                searchResultsCount: Q(() => p("settings.search-result").replace("[total]", String(s.value.length))),
                handleStatusChange: w,
                handleLinkClick: g,
                searchInput: t,
                searchResults: s,
                keyword: a,
                isEmpty: h,
                searchKeyword: S,
                recentResults: l,
                handleResetInput: C,
                handleArrowUp: A,
                handleArrowDown: v,
                handleEnterDown: R,
                menuActiveIndex: c,
                t: p
            }
        }
    }), Z4 = {key: 0, class: "search-container"}, B4 = {class: "flex pt-4 pr-4 pl-4"},
    H4 = {class: "search-form", action: ""}, U4 = k("label", {
        id: "search-label",
        class: "items-center flex justify-center",
        for: "search-input"
    }, [k("svg", {
        class: "text-ob fill-current stroke-current",
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "data-reactroot": ""
    }, [k("path", {
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "stroke-width": "1",
        stroke: "",
        d: "M15.9996 15.2877L15.2925 15.9948L21.2958 21.9981L22.0029 21.291L15.9996 15.2877Z"
    }), k("path", {
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "stroke-width": "1",
        stroke: "",
        fill: "rgba(0,0,0,0)",
        d: "M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
    })])], -1), V4 = k("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, [k("path", {
        d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
        stroke: "currentColor",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1), W4 = [V4], z4 = {key: 0, id: "Search-Dropdown", class: "search-dropdown"}, q4 = {key: 0},
    K4 = {class: "search-hit-label"}, G4 = {id: "search-menu"}, Y4 = ["id"], X4 = ["onClick"],
    J4 = {class: "search-hit-container"}, Q4 = k("div", {class: "search-hit-icon"}, [k("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, [k("path", {
        d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
        stroke: "currentColor",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linejoin": "round"
    })])], -1), e8 = {class: "search-hit-content-wrapper"}, t8 = ["innerHTML"], n8 = {class: "search-hit-path"},
    s8 = k("div", {class: "search-hit-action"}, [k("svg", {
        class: "DocSearch-Hit-Select-Icon",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, [k("g", {
        stroke: "currentColor",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, [k("path", {d: "M18 3v4c0 2-2 4-4 4H2"}), k("path", {d: "M8 17l-6-6 6-6"})])])], -1), o8 = {key: 1},
    r8 = {class: "search-hit-label"}, i8 = {id: "search-menu"}, a8 = ["id"], l8 = ["onClick"],
    c8 = {class: "search-hit-container"}, u8 = k("div", {class: "search-hit-icon"}, [k("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, [k("path", {
        d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
        stroke: "currentColor",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linejoin": "round"
    })])], -1), f8 = {class: "search-hit-content-wrapper"}, d8 = ["innerHTML"], h8 = {class: "search-hit-path"},
    p8 = k("div", {class: "search-hit-action"}, [k("svg", {
        class: "DocSearch-Hit-Select-Icon",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, [k("g", {
        stroke: "currentColor",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, [k("path", {d: "M18 3v4c0 2-2 4-4 4H2"}), k("path", {d: "M8 17l-6-6 6-6"})])])], -1),
    m8 = {key: 1, class: "search-startscreen"}, g8 = {key: 2, class: "search-startscreen"},
    _8 = {class: "search-footer"}, v8 = {class: "search-logo"},
    b8 = {href: "https://www.algolia.com/docsearch", target: "_blank", rel: "noopener noreferrer"},
    y8 = {class: "search-label"}, k8 = k("img", {
        class: "mr-1.5",
        src: "https://res.cloudinary.com/tridiamond/image/upload/v1625037705/ObsidianestLogo-hex_hecqbw.png",
        alt: "ObsidianNext Logo",
        height: "20",
        width: "20"
    }, null, -1), w8 = k("span", {class: "text-ob"}, "Aurora", -1), C8 = {class: "search-commands"},
    E8 = k("span", {class: "search-commands-key"}, [k("svg", {width: "15", height: "15"}, [k("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.2"
    }, [k("path", {d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"})])])], -1),
    M8 = {class: "search-commands-label"},
    S8 = k("span", {class: "search-commands-key"}, [k("svg", {width: "15", height: "15"}, [k("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.2"
    }, [k("path", {d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3"})])])], -1),
    T8 = k("span", {class: "search-commands-key"}, [k("svg", {width: "15", height: "15"}, [k("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.2"
    }, [k("path", {d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"})])])], -1), O8 = {class: "search-commands-label"},
    A8 = k("span", {class: "search-commands-key"}, [k("svg", {width: "15", height: "15"}, [k("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.2"
    }, [k("path", {d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])])], -1),
    L8 = {class: "search-commands-label"};

function I8(e, t, n, s, o, r) {
    return e.openModal ? (T(), N("div", {
        key: 0,
        id: "search-modal",
        onKeydown: [t[3] || (t[3] = Mn(i => e.handleStatusChange(!1), ["esc"])), t[4] || (t[4] = Mn(_t(i => e.handleStatusChange(!1), ["meta", "stop", "prevent"]), ["k"])), t[5] || (t[5] = Mn(_t((...i) => e.handleArrowUp && e.handleArrowUp(...i), ["stop", "prevent"]), ["arrow-up"])), t[6] || (t[6] = Mn(_t((...i) => e.handleArrowDown && e.handleArrowDown(...i), ["stop", "prevent"]), ["arrow-down"])), t[7] || (t[7] = Mn(_t((...i) => e.handleEnterDown && e.handleEnterDown(...i), ["stop", "prevent"]), ["enter"]))],
        onClick: t[8] || (t[8] = _t(i => e.handleStatusChange(!1), ["self"])),
        tabindex: "-1"
    }, [Y(pn, {name: "fade-bounce-pure-y", mode: "out-in"}, {
        default: Ne(() => [e.openSearchContainer ? (T(), N("div", Z4, [k("header", B4, [k("form", H4, [U4, fn(k("input", {
            type: "search",
            id: "search-input",
            ref: "searchInput",
            class: "search-input",
            autocomplete: "off",
            "onUpdate:modelValue": t[0] || (t[0] = i => e.keyword = i),
            onInput: t[1] || (t[1] = (...i) => e.searchKeyword && e.searchKeyword(...i))
        }, null, 544), [[Id, e.keyword]]), fn(k("button", {
            class: "search-btn",
            type: "reset",
            title: "Clear the query",
            onClick: t[2] || (t[2] = (...i) => e.handleResetInput && e.handleResetInput(...i))
        }, W4, 512), [[bi, e.keyword.length > 0]])])]), (e.searchResults.length > 0 || e.recentResults.length > 0) && !e.isEmpty ? (T(), N("div", z4, [k("div", null, [e.searchResults.length > 0 ? (T(), N("section", q4, [k("div", K4, q(e.searchResultsCount), 1), k("ul", G4, [(T(!0), N(_e, null, ze(e.searchResults, (i, a) => (T(), N("li", {
            key: i.slug,
            class: qe({"search-hit": !0, active: a == e.menuActiveIndex}),
            id: "search-hit-item-" + a
        }, [k("a", {
            href: "javascript:void(0)",
            onClick: l => e.handleLinkClick(i)
        }, [k("div", J4, [Q4, k("div", e8, [k("span", {
            class: "search-hit-title",
            innerHTML: i.content
        }, null, 8, t8), k("span", n8, q(i.title), 1)]), s8])], 8, X4)], 10, Y4))), 128))])])) : (T(), N("section", o8, [k("div", r8, q(e.t("settings.recently-search")), 1), k("ul", i8, [(T(!0), N(_e, null, ze(e.recentResults, (i, a) => (T(), N("li", {
            key: i.slug,
            class: qe({"search-hit": !0, active: a == e.menuActiveIndex}),
            id: "search-hit-item-" + a
        }, [k("a", {
            href: "javascript:void(0)",
            onClick: l => e.handleLinkClick(i)
        }, [k("div", c8, [u8, k("div", f8, [k("span", {
            class: "search-hit-title",
            innerHTML: i.content
        }, null, 8, d8), k("span", h8, q(i.title), 1)]), p8])], 8, l8)], 10, a8))), 128))])]))])])) : e.isEmpty ? (T(), N("div", g8, [k("p", null, q(e.t("settings.no-search-result")), 1)])) : (T(), N("div", m8, [k("p", null, q(e.t("settings.no-recent-search")), 1)])), k("div", _8, [k("div", v8, [k("a", b8, [k("span", y8, q(e.t("settings.searched-by")), 1), k8, w8])]), k("ul", C8, [k("li", null, [E8, k("span", M8, q(e.t("settings.cmd-to-select")), 1)]), k("li", null, [S8, T8, k("span", O8, q(e.t("settings.cmd-to-navigate")), 1)]), k("li", null, [A8, k("span", L8, q(e.t("settings.cmd-to-close")), 1)])])])])) : be("", !0)]),
        _: 1
    })], 32)) : be("", !0)
}

const P8 = Le(j4, [["render", I8]]);

function $8(e) {
    return /^(https?:|mailto:|tel:)/.test(e)
}

function R8(e) {
    return /^(\/)+([a-zA-Z0-9\s_\\.\-():/])+(.svg|.png|.jpg)$/g.test(e) || /^(https?:|mailto:|tel:)/.test(e)
}

var xi = (e => (e.fill = "fill", e.stroke = "stroke", e))(xi || {});
const N8 = Ce({
    name: "SvgIcon",
    props: {
        iconClass: {type: String, required: !0},
        className: {type: String, default: ""},
        fill: {type: String, default: ""},
        stroke: {type: String, default: ""},
        svgType: {type: String, default: "fill"}
    },
    setup(e) {
        const t = We(), n = Q(() => R8(e.iconClass)), s = Q(() => `#icon-${e.iconClass}`),
            o = Q(() => e.className ? "svg-icon " + e.className : "svg-icon"), r = Q(() => ({
                mask: `url(${e.iconClass}) no-repeat 50% 50%`,
                "-webkit-mask": `url(${e.iconClass}) no-repeat 50% 50%`
            }));
        return {
            svgStyle: Q(() => e.svgType === "fill" ? {
                fill: "currentColor",
                stroke: t.theme === "theme-dark" ? "var(--background-primary)" : "white"
            } : {fill: "none", stroke: t.theme === "theme-dark" ? "white" : "currentColor"}),
            isExternalClass: n,
            iconName: s,
            svgClass: o,
            styleExternalIcon: r
        }
    }
});
const F8 = ["href", "fill", "stroke"];

function x8(e, t, n, s, o, r) {
    return e.isExternalClass ? (T(), N("div", Er({
        key: 0,
        style: e.styleExternalIcon,
        class: "svg-external-icon svg-icon"
    }, e.$attrs), null, 16)) : (T(), N("svg", Er({
        key: 1,
        class: e.svgClass,
        "aria-hidden": "true"
    }, e.$attrs), [k("use", {
        href: e.iconName,
        fill: e.fill !== "" ? e.fill : e.svgStyle.fill,
        stroke: e.stroke !== "" ? e.stroke : e.svgStyle.stroke
    }, null, 8, F8)], 16))
}

const vt = Le(N8, [["render", x8], ["__scopeId", "data-v-729e93ea"]]), D8 = Ce({
    name: "Controls",
    components: {Dropdown: Ri, DropdownMenu: Ni, DropdownItem: Fi, ThemeToggle: D4, SearchModal: P8, SvgIcon: vt},
    setup() {
        const e = We(), t = Bo();
        return {
            handleOpenModal: o => {
                t.setOpenModal(o)
            }, handleClick: o => {
                e.changeLocale(o)
            }, enableMultiLanguage: Q(() => e.themeConfig.site.multi_language)
        }
    }
});
const j8 = {class: "ob-drop-shadow", "data-dia": "language"}, Z8 = {key: 0}, B8 = {key: 1},
    H8 = {"no-hover-effect": "", class: "ob-drop-shadow", "data-dia": "light-switch"};

function U8(e, t, n, s, o, r) {
    const i = le("SvgIcon"), a = le("DropdownItem"), l = le("DropdownMenu"), c = le("Dropdown"), u = le("ThemeToggle"),
        h = le("SearchModal");
    return T(), N(_e, null, [k("div", {
        class: "header-controls absolute top-10 right-0 flex flex-row",
        onKeydown: t[1] || (t[1] = Mn(p => e.handleOpenModal(!0), ["k"])),
        tabindex: "0"
    }, [k("span", {
        class: "ob-drop-shadow",
        "data-dia": "search",
        onClick: t[0] || (t[0] = p => e.handleOpenModal(!0))
    }, [Y(i, {"icon-class": "search", stroke: "var(--text-white)"})]), e.enableMultiLanguage ? (T(), ye(c, {
        key: 0,
        onCommand: e.handleClick
    }, {
        default: Ne(() => [k("span", j8, [Y(i, {
            "icon-class": "globe",
            stroke: "var(--text-white)"
        }), e.$i18n.locale == "cn" ? (T(), N("span", Z8, "中文")) : be("", !0), e.$i18n.locale == "en" ? (T(), N("span", B8, "EN")) : be("", !0)]), Y(l, null, {
            default: Ne(() => [Y(a, {name: "en"}, {
                default: Ne(() => [Re("English")]),
                _: 1
            }), Y(a, {name: "cn"}, {default: Ne(() => [Re("中文")]), _: 1})]), _: 1
        })]), _: 1
    }, 8, ["onCommand"])) : be("", !0), k("span", H8, [Y(u)])], 32), (T(), ye(ou, {to: "body"}, [Y(h)]))], 64)
}

const V8 = Le(D8, [["render", U8], ["__scopeId", "data-v-56016d5c"]]), W8 = Ce({
    name: "Navigation", components: {Dropdown: Ri, DropdownMenu: Ni, DropdownItem: Fi}, setup() {
        const {t: e, te: t} = nt(), n = xs(), s = We(), o = r => {
            r && ($8(r) ? window.location.href = r : n.push({path: r}))
        };
        return {routes: Q(() => s.themeConfig.menu.menus), pushPage: o, te: t, t: e}
    }
});
const z8 = {class: "items-center flex-1 hidden lg:flex"}, q8 = {class: "flex flex-row list-none px-6 text-white"},
    K8 = ["onClick", "data-menu"], G8 = {key: 0, class: "relative z-50"}, Y8 = {key: 1, class: "relative z-50"},
    X8 = {key: 2, class: "relative z-50"}, J8 = {key: 0, class: "relative z-50"}, Q8 = {key: 1, class: "relative z-50"},
    em = {key: 2, class: "relative z-50"}, tm = {key: 0, class: "relative z-50"}, nm = {key: 1, class: "relative z-50"},
    sm = {key: 2, class: "relative z-50"};

function om(e, t, n, s, o, r) {
    const i = le("DropdownItem"), a = le("DropdownMenu"), l = le("Dropdown");
    return T(), N("nav", z8, [k("ul", q8, [(T(!0), N(_e, null, ze(e.routes, c => (T(), N("li", {
        class: "not-italic font-medium text-xs h-full relative flex flex-col items-center justify-center cursor-pointer text-center py-4 px-2",
        key: c.path
    }, [c.children && c.children.length === 0 ? (T(), N("div", {
        key: 0,
        class: "nav-link text-sm block px-1.5 py-0.5 rounded-md relative uppercase cursor-pointer",
        onClick: u => e.pushPage(c.path),
        "data-menu": c.name
    }, [e.$i18n.locale === "cn" && c.i18n.cn ? (T(), N("span", G8, q(c.i18n.cn), 1)) : e.$i18n.locale === "en" && c.i18n.en ? (T(), N("span", Y8, q(c.i18n.en), 1)) : (T(), N("span", X8, q(c.name), 1))], 8, K8)) : (T(), ye(l, {
        key: 1,
        onCommand: e.pushPage,
        hover: "",
        class: "nav-link text-sm block px-1.5 py-0.5 rounded-md relative uppercase"
    }, {
        default: Ne(() => [e.$i18n.locale === "cn" && c.i18n.cn ? (T(), N("span", J8, q(c.i18n.cn), 1)) : e.$i18n.locale === "en" && c.i18n.en ? (T(), N("span", Q8, q(c.i18n.en), 1)) : (T(), N("span", em, q(c.name), 1)), Y(a, null, {
            default: Ne(() => [(T(!0), N(_e, null, ze(c.children, u => (T(), ye(i, {
                key: u.path,
                name: u.path
            }, {
                default: Ne(() => [e.$i18n.locale === "cn" && u.i18n.cn ? (T(), N("span", tm, q(u.i18n.cn), 1)) : e.$i18n.locale === "en" && u.i18n.en ? (T(), N("span", nm, q(u.i18n.en), 1)) : (T(), N("span", sm, q(u.name), 1))]),
                _: 2
            }, 1032, ["name"]))), 128))]), _: 2
        }, 1024)]), _: 2
    }, 1032, ["onCommand"]))]))), 128))])])
}

const rm = Le(W8, [["render", om], ["__scopeId", "data-v-faffdebb"]]),
    im = Ce({name: "Header", components: {Logo: y4, Navigation: rm, Controls: V8}, props: {msg: String}});
const am = {class: "header-container"}, lm = {class: "site-header"};

function cm(e, t, n, s, o, r) {
    const i = le("Logo"), a = le("Navigation"), l = le("Controls");
    return T(), N("div", am, [k("header", lm, [Y(i), Y(a), Y(l)])])
}

const um = Le(im, [["render", cm], ["__scopeId", "data-v-7c4ba836"]]),
    fm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpcfjxsuzNbOC3gOCzcezbl/PWkvnpveKrTPXMmtmTRu/ljumwSdq1geSbP+a8ae+zSurBV/LjrO7Yb+bNlfrrrtmNP/PgdenEWurKhenFdt2rYt/EjPXnu+e9faFjNbWReNq8fdi1hZ1xTuOtVVxBUlIxSGFPX+jGXvHgmu/hn/Hfj96tYe7Yqea7XfXimPLghP334+Cwbvr32N3CiN/Bd+K5fui0Wt2fUeS2U+zOeuO1Y/bmiuPEiuG0bqyKduG5hfvOWaBuWk8sPa6DW++jROfFZfLkl86JV/nuyOzZfvjVY9qkYd20dJ9yXL+YWWxSWcmjbpyQdoyHee7ZfOGsVuTBau3WeOW7V92nUdCSRee3UcaEQuOwVufJk4deQfPOgIpsTt2fR6R/Vtyzd86keNqsab6SX8GYdPWlPPy/VZySeevMYufDeenMZtqkT9KRU/LNYP3aj8imfLCMbdQsG+m+Xem4UurDXtYgF+e2Weq+VRgWb+/KXui7WOWzUxESfO3BWQ8JatIWEduVQdcKCw8PcttQJ+GjSenIZNZfLhcHX9dKKNqXUOnBaN+fR8pEIuO4YdOEPOm0T+/GXNdBJNS6c96jUNIeEsZRJOhyNPbKaedoLeR2OelcJG9wehkaeIN9etQ1HvDOYqqkhdhzNNg6H/jCUv3VWNEIBRUeidl+OPG+UtmjW+GQP9x0OsdeLMsLCPfFXSMOXfAsEcEOEaqBUaWOZU0GRM+wax81jbOgboeFf8izeu6uWaSbfb2ve+OtV9RqMt1rNN2DQt6IN49aOOaiQ7slGmlgblBMb8ovF91YKMcfEF9ujex/M2FkfYeMjJKNfnl3d5wGHpJ7Xu2NQuKxTNBZLseoWb9oOfY7GcE7LWUZSGYEOPevRp+AXDVGinSAi4ZvW60TFUcmU7Cbe7ipdNBGJv7oapJsSV8nUa81NL9GI/R6LbORVbJQOCgueogKJ3ZjXuNCHK4HGn1oYDMfXLp7Pi8LVmsuUKM7LkFXknNiZHtdUdwjFSsuVN8AAAB1dFJOUwAE/hMaDRsI/gH+FPw6/L/+9GT+cS/+7vyP0M0kQbD5w1uI/uf5+v7sTHyU3FvVPLgXvyRJ/aPk1fyq66Vn2NEt/Nv85/7eh2FLzPfvsvX9+N7m8trP7+ntyafrm/OH+Jz59+3Pn3/Mq+qq+NHq5MF4+InD117Lt0kAAAU3SURBVDjLbdV3VJNnFAdgE8gkCQkJS9nInspQRGSIu+496qhard3tySAkIYuEbCBkAAFCwpCN7CkgKGUvBffee1S7z+kXUiL2cP9+zu97733Pe79582YXaFFIAMHFJdqFEBCyCDRv7kLAYGbmMegoN5fo6Gg3AjrG3AwGQ8wBYdaObsfj4pydDx06cuTo0bi4427rHGFzBEJ8ok66bHJ3dr5w4enThoZNm1xOEgIgcwQ6nIj3XHnB+epVobC7qqK5tdHTM/6Ew/8jQTAoOv72SgBWVw/marIkFQboHo+GghCfdmt9eOMWj3tPCzVqjk7B56uJk6qOca8t4T9BZ2eCINahG7d6eLg3ZOVyknU6saKEMzLZWeDl9XM4GgozzQkUEmS51cPTa8v5kSJiQgJRp1CoOUMDZ9MmRj08jjkBnzdBxxWbH/zm9W7kJVENQKKiSM2pH1p1ti3vgefWY6EOINMEQ7fla7WXGjS5yclEIJPDIRLPnMnNedRBo+VvC40BzZwwyHVbPpN5qSHXBHUA5GvaC2i8ie2uQZBpiVgUc8ry63wmzf13/q/JyQkJuqIiXUJCSUkRX9lJ4+VtD15uPX3vIAf0qUAjHDRAokLMF+uIABw0wvXBjiEGCHH98qtVD9uYzNubRzTJJamX023g8J4qtTo3p/kRjZff8eOGNVYQExwHzvhq8iXnTGZ1OndqqrKHSMyabG6l8do6MmL9fA3QzC0cg2nvKC3tu4e6lfkiNfVcYVlZVVVZTyz90j88bUE7Fut00GwabsRgmh+Wlva/g6+qzkxNFQoLC7u7e5A1lA9eTG2BEotysjdA88X+NpVS5Z0WWu3r6pwc8ePUx0KhWNydU3X1N1rpHSW4F+O/2NwAF3xmYyNV/t3CE/31IiuLLzZkisUazeXXteyWO2FgDNcE09Nvnb07zGRfrK+7NijMzDxXmJN1ra7+vYg9fJdUzLWJtJwFx+4C8H1dHf8yAM9Nw4si3vAYq5iLDDTC8MVfyGqy2wtamE0379cPDQ0MDOj4fMX1tzd52o727Oykz43NmAEwpSY7rLOltKnp7cX7938B6vr1589vNtHePFIa4DJj107HkNwuajZ4bJjGFolEtU03btz4o1YkYvNGJwQbSFQ4fP4ycyOUIFVdNdKCsTdaNpstevDsz2e1Ijabp80bp8dSu2YgdH5YhUQiwfRKwzpb730YzWts3Pyqr7+/fzSvOQ3VK5PBk3avh07DbysAWYkhScOUjbfb2lqvXLkykdfXlz+eRu3FyGRTETuCDRBi5bsnQqVC2pSdL6/R6+n08nIslkTB4+msyvNIJHzKzpvgY3iKsHVWgXvgKiSysAxbfBqo4mIsNvb0kyexxQCUdEV4f+NjDZteTlAr39W4iKn0dK6Mrmex5HIGQ6/foE+RISVp0l2rCT4W/71tIHO1t10E0obLpdBJjKQkBomu1wtSZCqVFLxrfkDQzA6AOQasiLSzM5BEFoVComRksBhweBJVABZIF/q7zoJWKyIFAgqFSjVACoWewSCnpFAZYABG+kf5zEALv2BbPB6flkalMoBUEolBlslS4FQqiSQA422Xr7EwweW2tnjwR0iWA2OGUxkkEhhsOwuCoNZ+y7xxZDIro7xcLieTUSgyg8VKTKQIdu/w83WwQJi2N5RgHxi4fz8OlwgguRyFYuDs7HA47+/WB/taQT5uSAQIYhGDXvvDvn17dy5dunDhkiU7F1haHraPcnWAWkA+XfgIM/O1aw8c+H6vES4AoP3BUPTH38K/OmNBlhC2jIMAAAAASUVORK5CYII=",
    dm = Ce({
        name: "ObFooter", components: {SvgIcon: vt}, setup() {
            const e = We(), {t} = nt();
            return {
                beianImg: fm,
                avatarClass: Q(() => ({"footer-avatar": !0, [e.themeConfig.theme.profile_shape]: !0})),
                gradientText: Q(() => e.themeConfig.theme.background_gradient_style),
                gradientBackground: Q(() => ({background: e.themeConfig.theme.header_gradient_css})),
                currentYear: Q(() => new Date().getUTCFullYear()),
                themeConfig: Q(() => e.themeConfig),
                t
            }
        }
    }), hm = {class: "bg-ob-deep-900 flex justify-center"},
    pm = {class: "bg-ob-deep-900 rounded-lg max-w-10/12 lg:max-w-screen-2xl text-sm text-ob-normal w-full py-6 px-6 grid grid-rows-1 lg:grid-rows-none lg:grid-cols-4 justify-center items-center gap-8"},
    mm = {class: "flex flex-col lg:flex-row gap-6 lg:gap-12 row-span-1 lg:col-span-3 text-center lg:text-left"},
    gm = {class: "flex flex-col gap-1.5"}, _m = {class: "font-extrabold"},
    vm = k("a", {href: "https://hexo.io/"}, [k("b", {class: "font-extrabold border-b-2 border-ob hover:text-ob"}, " Hexo ")], -1),
    bm = {href: "https://github.com/obsidianext/hexo-theme-obsidianext"},
    ym = {class: "font-extrabold border-b-2 border-ob hover:text-ob"}, km = {key: 0, class: "flex flex-row gap-3"},
    wm = {key: 0}, Cm = ["src"], Em = ["href"], Mm = {class: "font-extrabold border-b-2 border-ob hover:text-ob"},
    Sm = {key: 1}, Tm = ["href"], Om = {class: "font-extrabold border-b-2 border-ob hover:text-ob"}, Am = {key: 0},
    Lm = {id: "busuanzi_container_site_pv"}, Im = k("span", {id: "busuanzi_value_site_pv"}, null, -1),
    Pm = {id: "busuanzi_container_site_uv"}, $m = k("span", {id: "busuanzi_value_site_uv"}, null, -1),
    Rm = {class: "hidden lg:flex lg:col-span-1 justify-center lg:justify-end row-span-1 relative"}, Nm = ["src"];

function Fm(e, t, n, s, o, r) {
    const i = le("SvgIcon");
    return T(), N("div", {
        id: "footer",
        class: "relative w-full pt-1",
        style: Ie(e.gradientBackground)
    }, [k("span", hm, [k("div", pm, [k("div", mm, [k("ul", gm, [k("li", null, [Re(" Copyright © 2019 - " + q(e.currentYear) + " ", 1), k("b", _m, q(e.themeConfig.site.author), 1), Re(" . All Rights Reserved. ")]), k("li", null, [Re(" Powered by "), vm, Re(" & Themed by "), k("a", bm, [k("b", ym, " Aurora v" + q(e.themeConfig.version), 1)]), Re(" . ")]), e.themeConfig.site.beian.number !== "" || e.themeConfig.site.police_beian.number !== "" ? (T(), N("li", km, [e.themeConfig.site.police_beian.number !== "" ? (T(), N("span", wm, [k("img", {
        class: "inline-block",
        src: e.beianImg,
        alt: "",
        width: "15"
    }, null, 8, Cm), k("b", null, [Re(" 公安备案信息： "), k("a", {href: e.themeConfig.site.police_beian.link}, [k("b", Mm, q(e.themeConfig.site.police_beian.number), 1)], 8, Em)])])) : be("", !0), e.themeConfig.site.beian.number !== "" ? (T(), N("span", Sm, [Re(" 备案信息： "), k("a", {href: e.themeConfig.site.beian.link}, [k("b", Om, q(e.themeConfig.site.beian.number), 1)], 8, Tm)])) : be("", !0)])) : be("", !0)]), e.themeConfig.plugins.busuanzi.enable ? (T(), N("ul", Am, [k("li", null, [k("span", Lm, [Y(i, {
        "icon-class": "eye",
        class: "mr-1 text-lg inline-block"
    }), Im])]), k("li", null, [k("span", Pm, [Y(i, {
        "icon-class": "people",
        class: "mr-1 text-lg inline-block"
    }), $m])])])) : be("", !0)]), k("div", Rm, [fn(k("img", {
        class: qe(e.avatarClass),
        src: e.themeConfig.site.avatar,
        alt: "avatar"
    }, null, 10, Nm), [[bi, e.themeConfig.site.avatar]])])])])], 4)
}

const xm = Le(dm, [["render", Fm]]), k1 = Lt({
    id: "navigatorStore", state: () => ({openMenu: !1, openNavigator: !1}), getters: {}, actions: {
        toggleMobileMenu() {
            const e = document.querySelector("body");
            let t = 0;
            const n = document.getElementById("app"), s = document.getElementById("App-Wrapper"),
                o = document.getElementById("App-Mobile-Profile");
            n && s && o && e && (this.openMenu === !1 ? (t = window.pageYOffset, e.style.overflow = "hidden", e.style.position = "fixed", e.style.top = `-${t}px`, e.style.width = "100%", n.style.overflow = "hidden", n.style.maxHeight = "100vh", s.style.borderRadius = "16px", s.style.overflow = "hidden", s.style.maxHeight = "100vh", s.style.minHeight = "100vh", s.style.transform = "translate3d(302px, 0px, 0px) scale3d(0.86, 0.86, 1)", setTimeout(() => {
                o.style.opacity = "1", o.style.transform = "translateY(0)"
            }, 200), this.openMenu = !0) : (e.style.removeProperty("overflow"), e.style.removeProperty("position"), e.style.removeProperty("top"), e.style.removeProperty("width"), window.scrollTo(0, t), o.style.opacity = "0", o.style.transform = "translateY(-20%)", s.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)", s.style.borderRadius = "0", setTimeout(() => {
                n.style.overflow = "auto", n.style.maxHeight = "initial", s.style.overflow = "auto", s.style.maxHeight = "initial", s.style.minHeight = "initial", s.style.transform = "none", this.openMenu = !1
            }, 376)))
        }, toggleOpenNavigator() {
            this.openNavigator = !this.openNavigator
        }, setOpenNavigator(e) {
            this.openNavigator = e
        }
    }
}), Dm = Ce({
    name: "ObNavigator", components: {SvgIcon: vt}, setup() {
        const e = We(), t = Zo(), {t: n} = nt(), s = k1(), o = Bo(), r = xs(), i = pe(0), a = pe(!1);
        let l = pe(0), c = 0, u = 0, h = pe(!1);
        const p = () => {
            clearTimeout(c), clearTimeout(u), a.value = !0, c = window.setTimeout(() => {
                a.value = !1
            }, 700), (h.value || s.openNavigator === !0) && (s.openNavigator === !0 && s.setOpenNavigator(!1), h.value = !0, u = window.setTimeout(() => {
                s.openNavigator = !0, h.value = !1
            }, 700)), setTimeout(() => {
                i.value = Number((window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100).toFixed(0))
            }, 0)
        }, w = () => {
            const M = new Date().getTime();
            M - l.value < 10 || (l.value = M, s.openNavigator === !0 && h.value === !0 && (h.value = !1), setTimeout(() => {
                s.toggleOpenNavigator()
            }, 10))
        }, g = () => {
            s.setOpenNavigator(!1), window.scrollTo({top: 0, behavior: "smooth"})
        }, C = () => {
            s.toggleMobileMenu()
        }, A = () => {
            s.setOpenNavigator(!1), r.push("/")
        }, v = () => {
            s.setOpenNavigator(!1), o.setOpenModal(!0)
        };
        return Mt(() => {
            document.addEventListener("scroll", p)
        }), Qn(() => {
            document.removeEventListener("scroll", p)
        }), {
            svgStyle: Q(() => ({
                fill: e.theme === "theme-dark" ? "white" : "black",
                stroke: e.theme === "theme-dark" ? "black" : "white"
            })),
            gradient: Q(() => ({background: e.themeConfig.theme.header_gradient_css})),
            showProgress: Q(() => i.value > 5),
            isMobile: Q(() => t.isMobile),
            openNavigator: Q(() => s.openNavigator),
            progress: i,
            handleNavigatorToggle: w,
            handleBackToTop: g,
            handleOpenMenu: C,
            handleGoHome: A,
            handleSearch: v,
            scrolling: a,
            SvgTypes: xi,
            t: n
        }
    }
});
const jm = {class: "Ob-Navigator-tips"}, Zm = {key: 2, class: "text-sm"}, Bm = {class: "Ob-Navigator-submenu"},
    Hm = {class: "Ob-Navigator-tips"}, Um = {class: "Ob-Navigator-tips"}, Vm = {class: "Ob-Navigator-tips"},
    Wm = {class: "Ob-Navigator-tips"};

function zm(e, t, n, s, o, r) {
    const i = le("SvgIcon");
    return T(), N("div", {
        id: "Ob-Navigator",
        class: qe({"Ob-Navigator--open": e.openNavigator, "Ob-Navigator--scrolling": e.scrolling})
    }, [Y(pn, {
        name: "fade-bounce-y",
        mode: "out-in"
    }, {
        default: Ne(() => [!e.openNavigator && e.showProgress ? (T(), N("div", {
            key: 0,
            onClick: t[0] || (t[0] = _t((...a) => e.handleBackToTop && e.handleBackToTop(...a), ["stop", "prevent"])),
            class: "Ob-Navigator-btt"
        }, [k("div", null, [Y(i, {
            "icon-class": "back-to-top",
            "class-name": "text-ob-bright"
        })]), k("span", jm, q(e.t("settings.tips-back-to-top")), 1)])) : be("", !0)]), _: 1
    }), k("div", {
        class: "Ob-Navigator-ball",
        onClick: t[1] || (t[1] = _t((...a) => e.handleNavigatorToggle && e.handleNavigatorToggle(...a), ["stop", "prevent"]))
    }, [k("div", {style: Ie(e.gradient)}, [Y(pn, {
        name: "fade-bounce-y",
        mode: "out-in"
    }, {
        default: Ne(() => [e.openNavigator ? (T(), ye(i, {
            key: 0,
            class: "text-base stroke-2",
            "icon-class": "close"
        })) : e.showProgress ? (T(), N("span", Zm, q(e.progress) + "%", 1)) : (T(), ye(i, {
            key: 1,
            "icon-class": "dots"
        }))]), _: 1
    })], 4)]), k("ul", Bm, [k("li", {
        id: "Ob-Navigator-top",
        style: Ie(e.gradient),
        onClick: t[2] || (t[2] = _t((...a) => e.handleBackToTop && e.handleBackToTop(...a), ["stop", "prevent"]))
    }, [k("div", null, [Y(i, {
        "icon-class": "back-to-top",
        "class-name": "text-ob-bright"
    })]), k("span", Hm, q(e.t("settings.tips-back-to-top")), 1)], 4), e.isMobile ? (T(), N("li", {
        key: 0,
        id: "Ob-Navigator-menu",
        style: Ie(e.gradient),
        onClick: t[3] || (t[3] = _t((...a) => e.handleOpenMenu && e.handleOpenMenu(...a), ["stop", "prevent"]))
    }, [k("div", null, [Y(i, {
        "icon-class": "nav-menu",
        "class-name": "text-ob-bright"
    })]), k("span", Um, q(e.t("settings.tips-open-menu")), 1)], 4)) : be("", !0), k("li", {
        id: "Ob-Navigator-home",
        style: Ie(e.gradient),
        onClick: t[4] || (t[4] = _t((...a) => e.handleGoHome && e.handleGoHome(...a), ["stop", "prevent"]))
    }, [k("div", null, [Y(i, {
        "icon-class": "nav-home",
        "class-name": "text-ob-bright"
    })]), k("span", Vm, q(e.t("settings.tips-back-to-home")), 1)], 4), k("li", {
        id: "Ob-Navigator-search",
        style: Ie(e.gradient),
        onClick: t[5] || (t[5] = _t((...a) => e.handleSearch && e.handleSearch(...a), ["stop", "prevent"]))
    }, [k("div", null, [Y(i, {
        "icon-class": "nav-search",
        "class-name": "text-ob-bright",
        "svg-type": e.SvgTypes.stroke
    }, null, 8, ["svg-type"])]), k("span", Wm, q(e.t("settings.tips-open-search")), 1)], 4)])], 2)
}

const qm = Le(Dm, [["render", zm], ["__scopeId", "data-v-49ffe232"]]);

class Km {
    constructor(t) {
        E(this, "title", "");
        E(this, "uid", "");
        E(this, "slug", "");
        E(this, "date", "");
        E(this, "updated", "");
        E(this, "comments", "");
        E(this, "path", "");
        E(this, "keywords", "");
        E(this, "cover", "");
        E(this, "text", "");
        E(this, "link", "");
        E(this, "photos", "");
        E(this, "count_time", {});
        E(this, "categories", {});
        E(this, "tags", {});
        E(this, "author", {});
        if (t) {
            for (const n of Object.keys(this)) if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (n === "date") {
                    const s = new Date(t[n]), o = `settings.months[${s.getMonth()}]`;
                    t[n] = Object.create({month: o, day: s.getUTCDate(), year: s.getUTCFullYear()})
                }
                Object.assign(this, {[n]: t[n]})
            }
        }
    }
}

class Ln {
    constructor(t) {
        E(this, "title", "");
        E(this, "uid", "");
        E(this, "slug", "");
        E(this, "date", {month: "", day: 0, year: 0});
        E(this, "updated", "");
        E(this, "comments", !1);
        E(this, "path", "");
        E(this, "excerpt", null);
        E(this, "keywords", null);
        E(this, "cover", "");
        E(this, "content", null);
        E(this, "text", "");
        E(this, "link", "");
        E(this, "raw", null);
        E(this, "photos", []);
        E(this, "categories", []);
        E(this, "tags", []);
        E(this, "min_tags", []);
        E(this, "count_time", {});
        E(this, "toc", "");
        E(this, "next_post", {});
        E(this, "prev_post", {});
        E(this, "author", {name: "", avatar: "", link: "", slug: ""});
        E(this, "feature", !1);
        E(this, "pinned", !1);
        if (t) {
            for (const n of Object.keys(this)) if (Object.prototype.hasOwnProperty.call(t, n)) if (n === "categories") Object.assign(this, {[n]: t[n].map(s => new Vo(s))}); else if (n === "tags") Object.assign(this, {[n]: t[n].map(s => new w1(s))}), this.min_tags = this.tags.filter((s, o) => {
                if (o < 2) return !0
            }); else if (n === "prev_post" || n === "next_post") Object.assign(this, {[n]: new Km(t[n])}); else {
                if (n === "date") {
                    const s = new Date(t[n]), o = `settings.months[${s.getMonth()}]`;
                    t[n] = Object.create({month: o, day: s.getUTCDate(), year: s.getUTCFullYear()})
                }
                Object.assign(this, {[n]: t[n]})
            }
        }
    }
}

class ys {
    constructor(t) {
        E(this, "data", []);
        E(this, "pageCount", 0);
        E(this, "pageSize", 0);
        E(this, "total", 0);
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && (n === "data" ? Object.assign(this, {[n]: t[n].map(s => new Ln(s))}) : Object.assign(this, {[n]: t[n]}))
    }
}

class tc {
    constructor(t) {
        E(this, "data", []);
        E(this, "pageCount", 0);
        E(this, "pageSize", 0);
        E(this, "total", 0);
        t && t.postlist && Object.assign(this, {
            data: t.postlist.map(n => new Ln(n)),
            pageCount: t.postlist.length,
            pageSize: t.postlist.length,
            total: t.postlist.length
        })
    }
}

class ho {
    constructor(t) {
        E(this, "top_feature", {});
        E(this, "features", []);
        t && (Object.assign(this, {top_feature: new Ln(t.shift())}), Object.assign(this, {features: t.map(n => new Ln(n))}))
    }
}

class Di {
    constructor(t) {
        E(this, "name", "");
        E(this, "slug", "");
        E(this, "avatar", "");
        E(this, "link", "");
        E(this, "description", "");
        E(this, "socials", new co);
        E(this, "categories", 0);
        E(this, "tags", 0);
        E(this, "word_count", "0");
        E(this, "post_list", []);
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && (n === "socials" ? Object.assign(this, {[n]: new co(t[n])}) : n === "post_list" ? Object.assign(this, {post_list: t[n].map(s => new Ln(s))}) : Object.assign(this, {[n]: t[n]}))
    }
}

class nc {
    constructor(t) {
        E(this, "data", []);
        t && Object.assign(this, {data: t.map(n => new Vo(n))})
    }
}

class Vo {
    constructor(t) {
        E(this, "name", "");
        E(this, "slug", "");
        E(this, "path", "");
        E(this, "count", 0);
        E(this, "parent", "");
        if (t) {
            for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]});
            t instanceof Vo || (this.parent = this.slug.split("/").filter((n, s, o) => s !== o.length - 1).join("/"))
        }
    }
}

class lr {
    constructor(t) {
        E(this, "data", []);
        t && Object.assign(this, {data: t.map(n => new w1(n))})
    }
}

class w1 {
    constructor(t) {
        E(this, "name", "");
        E(this, "slug", "");
        E(this, "path", "");
        E(this, "count", 0);
        if (t) for (const n of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, n) && Object.assign(this, {[n]: t[n]})
    }
}

class Gm {
    constructor(t) {
        E(this, "data", []);
        E(this, "pageCount", 0);
        E(this, "pageSize", 0);
        E(this, "total", 0);
        const n = new Map;
        if (t) {
            for (const s of Object.keys(this)) if (Object.prototype.hasOwnProperty.call(t, s)) if (s === "data") {
                t[s].forEach(r => {
                    const i = new Ln(r), a = `${i.date.month}-${i.date.year}`;
                    n.has(a) ? n.get(a).posts.push(i) : n.set(a, {month: i.date.month, year: i.date.year, posts: [i]})
                });
                const o = [];
                for (const r of n.values()) o.push(r);
                Object.assign(this, {data: o})
            } else Object.assign(this, {[s]: t[s]})
        }
    }
}

const C1 = Lt({
    id: "authorStore", state: () => ({}), getters: {}, actions: {
        async fetchAuthorData(e) {
            const {data: t} = await n3(e);
            return new Promise(n => {
                n(new Di(t))
            })
        }
    }
}), Ym = Ce({
    name: "AuSocial",
    components: {SvgIcon: vt},
    props: {socials: {type: Object, default: () => ({})}},
    setup(e) {
        const t = ht(e).socials;
        return {customSocials: Q(() => t.value.customs.socials)}
    }
});
const Xm = e => (ci("data-v-6aef6eb0"), e = e(), ui(), e),
    Jm = {class: "flex flex-row justify-evenly flex-wrap w-full py-4 px-2 text-center items-center"}, Qm = ["href"],
    e5 = {class: "diamond-clip-path diamond-icon"}, t5 = ["href"], n5 = {class: "diamond-clip-path diamond-icon"},
    s5 = ["href"], o5 = {class: "diamond-clip-path diamond-icon"}, r5 = ["href"],
    i5 = {class: "diamond-clip-path diamond-icon"}, a5 = ["href"], l5 = {class: "diamond-clip-path diamond-icon"},
    c5 = ["href"], u5 = {class: "diamond-clip-path diamond-icon"}, f5 = ["href"],
    d5 = {class: "diamond-clip-path diamond-icon"}, h5 = ["href"], p5 = {class: "diamond-clip-path diamond-icon"},
    m5 = ["href"], g5 = Xm(() => k("li", {class: "diamond-clip-path diamond-icon"}, "掘", -1)), _5 = [g5],
    v5 = ["href"], b5 = {class: "diamond-clip-path diamond-icon"};

function y5(e, t, n, s, o, r) {
    const i = le("SvgIcon");
    return T(), N("ul", Jm, [e.socials.github ? (T(), N("a", {
        key: 0,
        href: e.socials.github,
        target: "_blank",
        ref: "github"
    }, [k("li", e5, [Y(i, {
        "icon-class": "github",
        class: "fill-current"
    })])], 8, Qm)) : be("", !0), e.socials.twitter ? (T(), N("a", {
        key: 1,
        href: e.socials.twitter,
        target: "_blank",
        ref: "twitter"
    }, [k("li", n5, [Y(i, {
        "icon-class": "twitter",
        class: "fill-current"
    })])], 8, t5)) : be("", !0), e.socials.stackoverflow ? (T(), N("a", {
        key: 2,
        href: e.socials.stackoverflow,
        target: "_blank",
        ref: "stackoverflow"
    }, [k("li", o5, [Y(i, {
        "icon-class": "stackoverflow",
        class: "fill-current"
    })])], 8, s5)) : be("", !0), e.socials.wechat ? (T(), N("a", {
        key: 3,
        href: e.socials.wechat,
        target: "_blank",
        ref: "wechat"
    }, [k("li", i5, [Y(i, {
        "icon-class": "wechat",
        class: "fill-current"
    })])], 8, r5)) : be("", !0), e.socials.qq ? (T(), N("a", {
        key: 4,
        href: e.socials.qq,
        target: "_blank",
        ref: "qq"
    }, [k("li", l5, [Y(i, {
        "icon-class": "qq",
        class: "fill-current"
    })])], 8, a5)) : be("", !0), e.socials.weibo ? (T(), N("a", {
        key: 5,
        href: e.socials.weibo,
        target: "_blank",
        ref: "weibo"
    }, [k("li", u5, [Y(i, {
        "icon-class": "weibo",
        class: "fill-current"
    })])], 8, c5)) : be("", !0), e.socials.csdn ? (T(), N("a", {
        key: 6,
        href: e.socials.csdn,
        target: "_blank",
        ref: "csdn"
    }, [k("li", d5, [Y(i, {
        "icon-class": "csdn",
        class: "fill-current"
    })])], 8, f5)) : be("", !0), e.socials.zhihu ? (T(), N("a", {
        key: 7,
        href: e.socials.zhihu,
        target: "_blank",
        ref: "zhifu"
    }, [k("li", p5, [Y(i, {
        "icon-class": "zhifu",
        class: "fill-current"
    })])], 8, h5)) : be("", !0), e.socials.juejin ? (T(), N("a", {
        key: 8,
        href: e.socials.juejin,
        target: "_blank",
        ref: "juejin"
    }, _5, 8, m5)) : be("", !0), e.customSocials.length > 0 ? (T(!0), N(_e, {key: 9}, ze(e.customSocials, a => (T(), N("a", {
        key: a.name,
        href: a.link,
        target: "_blank",
        ref_for: !0,
        ref: a.name
    }, [k("li", b5, [a.icon.img_link ? (T(), ye(i, {
        key: 0,
        "icon-class": a.icon.img_link,
        class: "fill-current"
    }, null, 8, ["icon-class"])) : (T(), N("i", {
        key: 1,
        class: qe(["custom-social-svg-icon", a.icon.iconfont])
    }, null, 2))])], 8, v5))), 128)) : be("", !0)])
}

const E1 = Le(Ym, [["render", y5], ["__scopeId", "data-v-6aef6eb0"]]), k5 = Ce({
        name: "ObMobileMenu", components: {Dropdown: Ri, DropdownMenu: Ni, DropdownItem: Fi, Social: E1}, setup() {
            const e = We(), t = C1(), n = xs(), s = k1(), {t: o} = nt(), r = pe(new Di), i = async () => {
                r.value = await t.fetchAuthorData("blog-author")
            }, a = l => {
                l && (s.toggleMobileMenu(), s.setOpenNavigator(!1), l.match(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g) ? window.location.href = l : n.push({path: l}))
            };
            return Mt(i), {
                themeConfig: Q(() => e.themeConfig),
                gradientBackground: Q(() => ({background: e.themeConfig.theme.header_gradient_css})),
                statistic: Q(() => e.statistic),
                routes: Q(() => e.themeConfig.menu.menus),
                authorData: r,
                pushPage: a,
                t: o
            }
        }
    }), w5 = {class: "flex flex-col justify-center items-center"}, C5 = ["src"],
    E5 = {class: "text-center pt-4 text-4xl font-semibold text-ob-bright"}, M5 = ["innerHTML"],
    S5 = {key: 3, class: "pt-6 px-10 w-full text-sm text-center flex flex-col gap-2"},
    T5 = {class: "grid grid-cols-3 pt-4 w-full px-2 text-lg"}, O5 = {class: "col-span-1 text-center"},
    A5 = {class: "text-ob-bright"}, L5 = {class: "text-base text-ob-dim"}, I5 = {class: "col-span-1 text-center"},
    P5 = {class: "text-ob-bright"}, $5 = {class: "text-base text-ob-dim"}, R5 = {class: "col-span-1 text-center"},
    N5 = {class: "text-ob-bright"}, F5 = {class: "text-base text-ob-dim"},
    x5 = {class: "flex flex-col justify-center items-center mt-8 w-full list-none text-ob-bright"}, D5 = ["onClick"],
    j5 = {key: 0, class: "relative z-50"}, Z5 = {key: 1, class: "relative z-50"}, B5 = {key: 2, class: "relative z-50"},
    H5 = {key: 0, class: "relative z-50"}, U5 = {key: 1, class: "relative z-50"}, V5 = {key: 2, class: "relative z-50"},
    W5 = {key: 0, class: "relative z-50"}, z5 = {key: 1, class: "relative z-50"}, q5 = {key: 2, class: "relative z-50"};

function K5(e, t, n, s, o, r) {
    const i = le("ob-skeleton"), a = le("Social"), l = le("DropdownItem"), c = le("DropdownMenu"), u = le("Dropdown");
    return T(), N(_e, null, [k("div", w5, [e.authorData.avatar !== "" ? (T(), N("img", {
        key: 0,
        class: "diamond-avatar h-28 w-28 shadow-xl m-0",
        src: e.authorData.avatar,
        alt: "avatar"
    }, null, 8, C5)) : (T(), ye(i, {
        key: 1,
        width: "7rem",
        height: "7rem",
        circle: ""
    })), k("h2", E5, [e.authorData.name ? (T(), N(_e, {key: 0}, [Re(q(e.authorData.name), 1)], 64)) : (T(), ye(i, {
        key: 1,
        height: "2.25rem",
        width: "7rem"
    }))]), k("span", {
        class: "h-1 w-14 rounded-full mt-2",
        style: Ie(e.gradientBackground)
    }, null, 4), e.authorData.description ? (T(), N("p", {
        key: 2,
        class: "pt-6 px-2 w-full text-sm text-center text-ob-dim",
        innerHTML: e.authorData.description
    }, null, 8, M5)) : (T(), N("p", S5, [Y(i, {
        count: 2,
        height: "20px",
        width: "10rem"
    })])), Y(a, {socials: e.authorData.socials}, null, 8, ["socials"]), k("ul", T5, [k("li", O5, [k("span", A5, q(e.authorData.post_list.length), 1), k("p", L5, q(e.t("settings.articles")), 1)]), k("li", I5, [k("span", P5, q(e.authorData.categories), 1), k("p", $5, q(e.t("settings.categories")), 1)]), k("li", R5, [k("span", N5, q(e.authorData.tags), 1), k("p", F5, q(e.t("settings.tags")), 1)])])]), k("ul", x5, [(T(!0), N(_e, null, ze(e.routes, h => (T(), N("li", {
        class: "pb-2 cursor-pointer",
        key: h.path
    }, [h.children && h.children.length === 0 ? (T(), N("div", {
        key: 0,
        class: "text-sm block px-1.5 py-0.5 rounded-md relative uppercase",
        onClick: p => e.pushPage(h.path)
    }, [e.$i18n.locale === "cn" && h.i18n.cn ? (T(), N("span", j5, q(h.i18n.cn), 1)) : e.$i18n.locale === "en" && h.i18n.en ? (T(), N("span", Z5, q(h.i18n.en), 1)) : (T(), N("span", B5, q(h.name), 1))], 8, D5)) : (T(), ye(u, {
        key: 1,
        onCommand: e.pushPage,
        class: "flex flex-col justify-center items-center nav-link text-sm px-1.5 py-0.5 rounded-md relative uppercase"
    }, {
        default: Ne(() => [e.$i18n.locale === "cn" && h.i18n.cn ? (T(), N("span", H5, q(h.i18n.cn), 1)) : e.$i18n.locale === "en" && h.i18n.en ? (T(), N("span", U5, q(h.i18n.en), 1)) : (T(), N("span", V5, q(h.name), 1)), Y(c, {expand: ""}, {
            default: Ne(() => [(T(!0), N(_e, null, ze(h.children, p => (T(), ye(l, {
                key: p.path,
                name: p.path
            }, {
                default: Ne(() => [e.$i18n.locale === "cn" && p.i18n.cn ? (T(), N("span", W5, q(p.i18n.cn), 1)) : e.$i18n.locale === "en" && p.i18n.en ? (T(), N("span", z5, q(p.i18n.en), 1)) : (T(), N("span", q5, q(p.name), 1))]),
                _: 2
            }, 1032, ["name"]))), 128))]), _: 2
        }, 1024)]), _: 2
    }, 1032, ["onCommand"]))]))), 128))])], 64)
}

const G5 = Le(k5, [["render", K5]]),
    M1 = ["你好，我是 <span>Dia</span>，好高兴遇见你～", "好久不见，日子过得好快呢……", "<span>大坏蛋！</span>你都多久没理人家了呀，嘤嘤嘤～", "嗨～快来逗我玩吧！", "拿小拳拳锤你胸口！", "学习使我们快乐，快乐使我们更想学习～", "showQuote"],
    S1 = "哈哈，你打开了控制台，是想要看看我的小秘密吗？", T1 = "你都复制了些什么呀，转载要记得加上出处哦！",
    O1 = "老朋友，你怎么才回来呀～", A1 = {
        24: "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？",
        "5_7": "早上好！一日之计在于晨，美好的一天就要开始了。",
        "7_11": "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！",
        "11_13": "中午了，工作了一个上午，现在是午餐时间！",
        "13_17": "午后很容易犯困呢，今天的运动目标完成了吗？",
        "17_19": "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～",
        "19_21": "晚上好，今天过得怎么样？",
        "21_23": ["已经这么晚了呀，早点休息吧，晚安～", "深夜时要爱护眼睛呀！"]
    }, L1 = {
        self: "欢迎来到<span>「[PLACEHOLDER]」</span>",
        baidu: "Hello！来自 百度搜索 的朋友<br>你是搜索 <span>「[PLACEHOLDER]」</span> 找到的我吗？",
        so: "Hello！来自 360搜索 的朋友<br>你是搜索 <span>「[PLACEHOLDER]」</span> 找到的我吗？",
        google: "Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「[PLACEHOLDER]」</span>",
        site: "Hello！来自 <span>[PLACEHOLDER]</span> 的朋友",
        other: "欢迎阅读 <span>[PLACEHOLDER]</span>"
    }, I1 = [{
        selector: "#Aurora-Dia",
        text: ["哇啊啊啊啊啊啊... <span>你想干嘛</span>? O.O", "请您轻一点，我是<span>很昂贵</span>的机器人哦! O.O", "<span>领导，我在呢!</span> 我有什么可以帮到你呢? O.O"]
    }, {
        selector: "[data-menu='Home']",
        text: ["点击前往首页，想回到上一页可以使用浏览器的后退功能哦。", "点它就可以回到首页啦！", "回首页看看吧。"]
    }, {
        selector: "[data-menu='About']",
        text: ["你想知道我家主人是谁吗？", "这里有一些关于我家主人的秘密哦，要不要看看呢？", "发现主人出没地点！"]
    }, {
        selector: "[data-menu='Archives']",
        text: ["这里存储了主人的所有作品哦！", "想看看主人的图书馆吗？"]
    }, {
        selector: "[data-menu='Tags']",
        text: ["点击就可以看文章的标签啦！", "使用标签可以更好的分类你的文章哦～"]
    }, {selector: "[data-dia='language']", text: "主人的博客支持多种语言。"}, {
        selector: "[data-dia='light-switch']",
        text: "您可以点击这里切换黑白模式哦！"
    }, {
        selector: "[data-dia='author']",
        text: ["这是我主人的简介。", "点击其中任何一个链接都可以传送到我主人的其他世界。"]
    }, {selector: "[data-dia='jump-to-comment']", text: ["你想看看评论吗?", "点击这里可以帮助你直接跳转到评论部分。"]}],
    P1 = [{
        selector: "[data-dia='search']",
        text: ["没有看到你想要的文章，那么就输入你想搜索的关键词吧～", "可以使用 ctrl/cmd + k 快捷键打开搜索哦～"]
    }, {
        selector: "[data-dia='article-link']",
        text: ["希望你会喜欢这篇文章：<span>「{text}」</span>.", "您的选择真的不错哦！好好享受这篇文章吧～", "希望您能从 <span>「{text}」</span>这篇文章中学到点东西。"]
    }, {
        selector: ".gt-header-textarea",
        text: ["要吐槽些什么呢？", "一定要认真填写喵～", "有什么想说的吗？", "如果觉得文章不错的话，就给博主留个言吧～"]
    }, {
        selector: ".veditor",
        text: ["要吐槽些什么呢？", "一定要认真填写喵～", "有什么想说的吗？", "如果觉得文章不错的话，就给博主留个言吧～"]
    }], $1 = [{date: "01/01", text: "<span>元旦</span>了呢，新的一年又开始了，今年是{year}年～"}, {
        date: "02/14",
        text: "又是一年<span>情人节</span>，{year}年找到对象了嘛～"
    }, {date: "03/08", text: "今天是<span>国际妇女节</span>！"}, {
        date: "03/12",
        text: "今天是<span>植树节</span>，要保护环境呀！"
    }, {date: "04/01", text: "悄悄告诉你一个秘密～<span>今天是愚人节，不要被骗了哦～</span>"}, {
        date: "05/01",
        text: "今天是<span>五一劳动节</span>，计划好假期去哪里了吗～"
    }, {date: "06/01", text: "<span>儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…"}, {
        date: "09/03",
        text: "<span>中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。"
    }, {date: "09/10", text: "<span>教师节</span>，在学校要给老师问声好呀～"}, {
        date: "10/01",
        text: "<span>国庆节</span>到了，为祖国母亲庆生！"
    }, {date: "11/05-11/12", text: "今年的<span>双十一</span>是和谁一起过的呢～"}, {
        date: "12/20-12/31",
        text: "这几天是<span>圣诞节</span>，主人肯定又去剁手买买买了～"
    }], Y5 = {
        messages: M1,
        console: S1,
        copy: T1,
        visibility_change: O1,
        welcome: A1,
        referrer: L1,
        mouseover: I1,
        click: P1,
        events: $1
    }, X5 = Object.freeze(Object.defineProperty({
        __proto__: null,
        click: P1,
        console: S1,
        copy: T1,
        default: Y5,
        events: $1,
        messages: M1,
        mouseover: I1,
        referrer: L1,
        visibility_change: O1,
        welcome: A1
    }, Symbol.toStringTag, {value: "Module"})),
    R1 = ["Hi, I am <span>Dia</span>, I am here to help you~", "Long time no see, time passes with the blink of the eyes...", "Hi～ Come play with me！", "*Hammer your chest with my kitty fist*", "showQuote"],
    N1 = "LOL, you opened the console, want to find out my little secrets?",
    F1 = "What have you copied? Remember to add the source when using it!", x1 = "Welcome back my friend!~", D1 = {
        24: "Are you a night owl? Will you able get up tomorrow?",
        "5_7": "Good morning! The plan for a day lies in the morning, and a beautiful day is about to begin.",
        "7_11": "Good morning! How is your day doing? don't sit for too long!",
        "11_13": "It's noon, Must have being working all morning, and it's lunch time!",
        "13_17": "It's easy to get sleepy in the afternoon. Have a cup of coffee maybe?",
        "17_19": "It's evening! The sunset outside the window is beautiful.",
        "19_21": "Good evening, how are you doing today?",
        "21_23": ["It's getting late, rest early, good night~", "Take good care of your eyes!"]
    }, j1 = {
        self: "Welcome to <span>「[PLACEHOLDER]」</span>",
        baidu: "Hello！Friend from Baidu search engine,<br>did you search <span>「[PLACEHOLDER]」</span> to find me？",
        so: "Hello！Friend from 360 search engine,<br>did you search <span>「[PLACEHOLDER]」</span> to find me？",
        google: "Hello！Friend from Google search engine,<br>enjoy your time reading <span>「[PLACEHOLDER]」</span>",
        site: "Hello there, friend from <span>[PLACEHOLDER]</span>",
        other: "Thanks for reading <span>「[PLACEHOLDER]」</span>"
    }, Z1 = [{
        selector: "#Aurora-Dia",
        text: ["Waaaaaaaa...What are you <span>doing</span>? O.O", "Please be gentle, I am very delicate! O.O", "<span>Sir yes sir!</span> What can I help you with? O.O"]
    }, {
        selector: "[data-menu='Home']",
        text: ["Click to go to the <span>home page</span>. ", "Yes, click here to go <span>back home</span>.", "Go take a look at the <span>home page</span>."]
    }, {
        selector: "[data-menu='About']",
        text: ["You want to know more about my <span>master</span>?", "Here hides all the <span>secrets of my master</span>, want to take a look?", "Found my master's <span>secret hideout</span>!"]
    }, {
        selector: "[data-menu='Archives']",
        text: ["Here stores all the <span>works</span> my master had done！", "Wanna see my master's <span>library?</span>", "Yes, my masters' <span>ancient histories</span> are all here!"]
    }, {
        selector: "[data-menu='Tags']",
        text: ["Click here to look at <span>article tags</span>.", "Tags are used to better <span>categorize</span> your articles."]
    }, {
        selector: "[data-dia='language']",
        text: "Master's blog supports multiple <span>languages.</span>"
    }, {
        selector: "[data-dia='light-switch']",
        text: "You can switch between <span>light</span> and <span>dark</span> mode, click the switch to see the magic!"
    }, {
        selector: "[data-dia='author']",
        text: ["Here is a short profile of my master.", "Click any of these links can teleport to my master's other worlds."]
    }, {
        selector: "[data-dia='jump-to-comment']",
        text: ["Do you want to check out the comments?", "Click here will help you jump right into the comments section."]
    }], B1 = [{
        selector: "[data-dia='search']",
        text: ["Didn't find what you are looking for? Try search it here!", "You can also use <span>ctrl/cmd + k</span> keyboard shortcut to open the search menu."]
    }, {
        selector: "[data-dia='article-link']",
        text: ["Enjoy reading:<span>「{text}」</span>.", "That's a good pick, enjoy time reading this article.", "Hope you can learn something from:<span>「{text}」</span>."]
    }, {
        selector: ".gt-header-textarea",
        text: ["Wanna write something?", "Be sure write your comment carefully meow~", "Anything you want to say to the author?", "If you think the article is good, leave a message for the author."]
    }, {
        selector: ".veditor",
        text: ["Wanna write something?", "Be sure write your comment carefully meow~", "Anything you want to say to the author?", "If you think the article is good, leave a message for the author."]
    }], H1 = [{date: "01/01", text: "<span>Happy new year</span>，{year}～"}, {
        date: "02/14",
        text: "It's <span>Valentine's Day</span>，have you found your loved one in {year}?"
    }, {date: "03/08", text: "Today is <span>International Women's Day</span>！"}, {
        date: "04/01",
        text: "Tell you a secret, don't trust anyone today, because today is <span>April Fool</span>"
    }, {
        date: "05/01",
        text: "Today is <span>International Labour Day</span>，have you planned to go travel?"
    }, {
        date: "12/20-12/30",
        text: "These few days is <span>Christmas</span>，my master must being shopping like crazy!"
    }, {
        date: "12/31",
        text: "Today is <span>New Year's Eve</span>, this year is going away, but next year is going to be better!"
    }], J5 = {
        messages: R1,
        console: N1,
        copy: F1,
        visibility_change: x1,
        welcome: D1,
        referrer: j1,
        mouseover: Z1,
        click: B1,
        events: H1
    }, Q5 = Object.freeze(Object.defineProperty({
        __proto__: null,
        click: B1,
        console: N1,
        copy: F1,
        default: J5,
        events: H1,
        messages: R1,
        mouseover: Z1,
        referrer: j1,
        visibility_change: x1,
        welcome: D1
    }, Symbol.toStringTag, {value: "Module"}));

class e6 {
    constructor() {
        E(this, "configs", {locale: "en", tips: {}});
        E(this, "software", new sc);
        E(this, "eyesAnimationTimer")
    }

    installSoftware(t) {
        t && (this.configs.locale = t.locale, this.configs.tips = t.tips), this.software = new sc({
            locale: this.configs.locale,
            botScript: this.configs.tips,
            containerId: "Aurora-Dia--tips-wrapper",
            messageId: "Aurora-Dia--tips"
        })
    }

    on() {
        this.software.load(), this.activateMotion()
    }

    activateMotion() {
        const t = document.getElementById("Aurora-Dia--left-eye"), n = document.getElementById("Aurora-Dia--right-eye"),
            s = document.getElementById("Aurora-Dia--eyes");
        t instanceof HTMLElement && n instanceof HTMLElement && s instanceof HTMLElement && document.addEventListener("mousemove", o => {
            clearTimeout(this.eyesAnimationTimer), s.classList.add("moving");
            const r = -(s.getBoundingClientRect().left - o.clientX) / 100,
                i = -(s.getBoundingClientRect().top - o.clientY) / 120;
            t.style.transform = `translateY(${i}px) translateX(${r}px)`, n.style.transform = `translateY(${i}px) translateX(${r}px)`, this.eyesAnimationTimer = setTimeout(() => {
                t.style.transform = "translateY(0) translateX(0)", n.style.transform = "translateY(0) translateX(0)", s.classList.remove("moving")
            }, 2e3)
        })
    }
}

class sc {
    constructor(t) {
        E(this, "config", {botScript: {}, containerId: "", messageId: "", botId: "Aurora-Did", locale: "en"});
        E(this, "messageCacheKey", "__AURORA_BOT_MESSAGE__");
        E(this, "mouseoverEventCacheKey", "__AURORA_BOT_MOUSE_OVER__");
        E(this, "userAction", !1);
        E(this, "userActionTimer");
        E(this, "messageTimer");
        E(this, "messages", []);
        E(this, "locales", {});
        E(this, "botTips", {});
        t && (this.config = {
            botScript: t.botScript ? t.botScript : this.config.botScript,
            containerId: t.containerId ? t.containerId : "",
            messageId: t.messageId ? t.messageId : "",
            botId: "Aurora-Dia",
            locale: t.locale ? t.locale : "en"
        })
    }

    load() {
        this.loadLocaleMessages(), this.injectBotScripts(), this.messages = this.botTips.messages, window.addEventListener("mousemove", () => this.userAction = !0), window.addEventListener("keydown", () => this.userAction = !0), sessionStorage.removeItem(this.messageCacheKey), setInterval(() => {
            this.userAction ? (this.userAction = !1, clearInterval(this.userActionTimer), this.userActionTimer = void 0) : this.userActionTimer || (this.userActionTimer = setInterval(() => {
                this.showMessage(this.randomSelection(this.messages), 6e3, 9)
            }, 2e4))
        }, 1e3), this.registerEventListener(), setTimeout(() => {
            this.showWelcomeMessage()
        }, 3e3)
    }

    injectBotScripts() {
        let t = [];
        const n = this.config.botScript;
        this.botTips = this.locales[this.config.locale], n !== void 0 && (t = Object.keys(n), t.length > 0 && t.forEach(s => {
            this.botTips[s] = n[s]
        }))
    }

    registerEventListener() {
        const t = () => {
            console.log("opened devtools")
        };
        console.log("%c", t), t.toString = () => {
            this.showMessage(this.botTips.console, 6e3, 9)
        }, document.addEventListener("copy", () => {
            this.showMessage(this.botTips.copy, 6e3, 9)
        }), document.addEventListener("visibilitychange", () => {
            document.hidden || this.showMessage(this.botTips.visibility_change, 6e3, 9)
        }), this.botTips.mouseover && this.botTips.mouseover.length > 0 && document.addEventListener("mouseover", n => {
            for (const s of this.botTips.mouseover) {
                const o = s.selector;
                let r = s.text;
                if (n.preventDefault(), n.target && n.target instanceof HTMLElement) {
                    if (!n.target.matches(o)) continue;
                    if (sessionStorage.getItem(this.mouseoverEventCacheKey) && sessionStorage.getItem(this.mouseoverEventCacheKey) === o) return;
                    r = this.randomSelection(r), r = r.replace("{text}", n.target.innerText), this.showMessage(r, 4e3, 8), sessionStorage.setItem(this.mouseoverEventCacheKey, o), setTimeout(() => {
                        sessionStorage.removeItem(this.mouseoverEventCacheKey)
                    }, 4e3);
                    return
                }
            }
        }), this.botTips.click && this.botTips.click.length > 0 && document.addEventListener("click", n => {
            if (n.target && n.target instanceof HTMLElement) for (const s of this.botTips.click) {
                const o = s.selector;
                let r = s.text;
                if (n.target && n.target instanceof HTMLElement) {
                    if (!n.target.matches(o)) continue;
                    r = this.randomSelection(r), r = r.replace("{text}", n.target.innerText), this.showMessage(r, 4e3, 8);
                    return
                }
            }
        }), this.botTips.events && this.botTips.events.length > 0 && this.botTips.events.forEach(n => {
            const s = new Date, o = n.date.split("-")[0], r = n.date.split("-")[1] || o;
            o.split("/")[0] <= s.getMonth() + 1 && s.getMonth() + 1 <= r.split("/")[0] && o.split("/")[1] <= s.getDate() && s.getDate() <= r.split("/")[1] && (n.text = this.randomSelection(n.text), n.text = n.text.replace("{year}", s.getFullYear()), this.messages.push(n.text))
        })
    }

    showWelcomeMessage() {
        let t;
        if (location.pathname === "/") {
            const n = new Date().getHours();
            n > 5 && n <= 7 ? t = this.botTips["5_7"] : n > 7 && n <= 11 ? t = this.botTips.welcome["7_11"] : n > 11 && n <= 13 ? t = this.botTips.welcome["11_13"] : n > 13 && n <= 17 ? t = this.botTips.welcome["13_17"] : n > 17 && n <= 19 ? t = this.botTips.welcome["17_19"] : n > 19 && n <= 21 ? t = this.botTips.welcome["19_21"] : n > 21 && n <= 23 ? t = this.botTips.welcome["21_23"] : t = this.botTips.welcome[24]
        } else if (document.referrer !== "") {
            const n = new URL(document.referrer), s = n.hostname.split(".")[1];
            location.hostname === n.hostname ? t = this.botTips.referrer.self.replace("[PLACEHOLDER]", document.title.split(" - ")[0]) : s === "baidu" ? t = this.botTips.referrer.baidu.replace("[PLACEHOLDER]", n.search.split("&wd=")[1].split("&")[0]) : s === "so" ? t = this.botTips.referrer.so.replace("[PLACEHOLDER]", n.search.split("&q=")[1].split("&")[0]) : s === "google" ? t = this.botTips.referrer.google.replace("[PLACEHOLDER]", document.title.split(" - ")[0]) : t = this.botTips.referrer.site.replace("[PLACEHOLDER]", n.hostname)
        } else t = this.botTips.referrer.other.replace("[PLACEHOLDER]", document.title.split(" - ")[0]);
        this.showMessage(t, 7e3, 8)
    }

    loadLocaleMessages() {
        const t = Object.assign({"./messages/cn.json": X5, "./messages/en.json": Q5}), n = {};
        Object.keys(t).forEach(s => {
            const o = s.match(/([A-Za-z0-9-_]+)\./i);
            if (o && o.length > 1) {
                const r = o[1];
                n[r] = t[s]
            }
        }), this.locales = n
    }

    showMessage(t, n, s) {
        const o = sessionStorage.getItem(this.messageCacheKey) ?? "";
        if (!t || o !== "" && parseInt(o) > s) return;
        if (this.messageTimer && (clearTimeout(this.messageTimer), this.messageTimer = void 0), sessionStorage.setItem(this.messageCacheKey, String(s)), t = this.randomSelection(t), t === "showQuote") {
            this.showQuote();
            return
        }
        const r = document.getElementById(this.config.containerId), i = document.getElementById(this.config.messageId);
        let a = document.createElement("null");
        this.config.botId && (a = document.getElementById(this.config.botId) ?? document.createElement("null")), i instanceof Element && r instanceof Element && (i.innerHTML = t, r.classList.add("active"), a instanceof Element && a.classList.add("active"), this.messageTimer = setTimeout(() => {
            sessionStorage.removeItem(this.messageCacheKey), r.classList.remove("active"), a instanceof Element && a.classList.remove("active")
        }, n))
    }

    randomSelection(t) {
        return Array.isArray(t) ? t[Math.floor(Math.random() * t.length)] : t
    }

    showQuote() {
        this.config.locale === "cn" && this.getHitokoto()
    }

    getHitokoto() {
        fetch("https://v1.hitokoto.cn").then(t => t.json()).then(t => {
            this.showMessage(t.hitokoto, 6e3, 9)
        })
    }

    getTheySaidSo() {
        fetch("https://quotes.rest/qod?language=en").then(t => t.json()).then(t => {
            this.showMessage(t.contents.quotes[0].quote, 6e3, 9)
        })
    }
}

const t6 = Lt({
    id: "diaStore", state: () => ({dia: new e6}), getters: {}, actions: {
        initializeBot(e) {
            this.dia.installSoftware(e), this.dia.on()
        }
    }
}), n6 = Ce({
    name: "AUDia", setup() {
        const e = t6(), t = We(), n = pe(!1), s = () => {
            t.themeConfig.plugins.aurora_bot.enable && (e.initializeBot({
                locale: t.themeConfig.plugins.aurora_bot.locale,
                tips: t.themeConfig.plugins.aurora_bot.tips
            }), setTimeout(() => {
                n.value = !0
            }, 1e3))
        };
        return ft(() => t.configReady, o => {
            o && s()
        }), Mt(() => {
            t.configReady && s()
        }), {
            cssVariables: Q(() => `
          --aurora-dia--linear-gradient: ${t.themeConfig.theme.header_gradient_css};
          --aurora-dia--linear-gradient-hover: linear-gradient(
            to bottom,
            ${t.themeConfig.theme.gradient.color_2},
            ${t.themeConfig.theme.gradient.color_3}
          );
          --aurora-dia--platform-light: ${t.themeConfig.theme.gradient.color_3};
        `), showDia: n
        }
    }
});
const ji = e => (ci("data-v-e40c54b4"), e = e(), ui(), e), s6 = {id: "bot-container"},
    o6 = ji(() => k("div", {id: "Aurora-Dia--tips-wrapper"}, [k("div", {
        id: "Aurora-Dia--tips",
        class: "Aurora-Dia--tips"
    }, "早上好呀～")], -1)), r6 = ji(() => k("div", {id: "Aurora-Dia", class: "Aurora-Dia"}, [k("div", {
        id: "Aurora-Dia--eyes",
        class: "Aurora-Dia--eyes"
    }, [k("div", {id: "Aurora-Dia--left-eye", class: "Aurora-Dia--eye left"}), k("div", {
        id: "Aurora-Dia--right-eye",
        class: "Aurora-Dia--eye right"
    })])], -1)), i6 = ji(() => k("div", {class: "Aurora-Dia--platform"}, null, -1)), a6 = [o6, r6, i6];

function l6(e, t, n, s, o, r) {
    return T(), ye(pn, {
        name: "fade-bounce-y",
        mode: "out-in"
    }, {
        default: Ne(() => [fn(k("div", s6, [k("div", {
            id: "Aurora-Dia--body",
            style: Ie(e.cssVariables)
        }, a6, 4)], 512), [[bi, e.showDia]])]), _: 1
    })
}

const c6 = Le(n6, [["render", l6], ["__scopeId", "data-v-e40c54b4"]]), Ps = "/static/img/default-cover-dccf965f.jpg",
    u6 = Ce({
        name: "App", components: {HeaderMain: um, Footer: xm, Navigator: qm, MobileMenu: G5, Dia: c6}, setup() {
            const e = We(), t = Zo(), n = Ii(), s = Bo(), o = 996, {t: r} = nt(), i = "app-wrapper",
                a = pe({"nprogress-custom-parent": !1});
            let l = `

Read more at: ${document.location.href}`;
            const c = async () => {
                g(), await e.fetchConfig().then(() => {
                    if (n.addScripts(e.themeConfig.site_meta.cdn.prismjs), e.themeConfig.site_meta.favicon && e.themeConfig.site_meta.favicon !== "") {
                        const v = document.querySelector("link[rel~='icon']");
                        v && v.setAttribute("href", e.themeConfig.site_meta.favicon)
                    }
                    if (e.themeConfig.plugins.copy_protection.enable) {
                        const v = e.locale,
                            M = v === "cn" ? e.themeConfig.plugins.copy_protection.link.cn : e.themeConfig.plugins.copy_protection.link.en,
                            R = v === "cn" ? e.themeConfig.plugins.copy_protection.author.cn : e.themeConfig.plugins.copy_protection.author.en,
                            S = v === "cn" ? e.themeConfig.plugins.copy_protection.license.cn : e.themeConfig.plugins.copy_protection.license.en;
                        l = `

---------------------------------
${R}: ${e.themeConfig.site.author}
${M}: ${document.location.href}
${S}`, h()
                    }
                })
            }, u = v => {
                var M;
                document.getSelection() instanceof Selection && ((M = document.getSelection()) == null ? void 0 : M.toString()) !== "" && v.clipboardData && (v.clipboardData.setData("text", document.getSelection() + l), v.preventDefault())
            }, h = () => {
                document.addEventListener("copy", u)
            }, p = Q(() => t.isMobile), w = () => {
                const M = document.body.getBoundingClientRect().width - 1 < o;
                p.value !== M && t.changeMobileState(M)
            }, g = () => {
                w(), window.addEventListener("resize", w)
            }, C = () => {
                s.setOpenModal(!0)
            };
            So(c), Qn(() => {
                document.removeEventListener("copy", u), window.removeEventListener("resize", w)
            });
            const A = pe({"min-height": "100vh"});
            return Mt(() => {
                let v = screen.height;
                const M = document.getElementById("footer"), R = M == null ? void 0 : M.getBoundingClientRect().height;
                typeof R == "number" && (v = v - R * 2), A.value = {"min-height": v + "px"}
            }), ft(() => e.appLoading, v => {
                a.value["nprogress-custom-parent"] = v
            }), {
                title: Q(() => n.getTitle),
                theme: Q(() => e.theme),
                scripts: Q(() => n.scripts),
                themeConfig: Q(() => e.themeConfig),
                headerImage: Q(() => ({
                    backgroundImage: `url(${t.headerImage}), url(${Ps})`,
                    opacity: t.headerImage !== "" ? 1 : 0
                })),
                headerBaseBackground: Q(() => ({
                    background: e.themeConfig.theme.header_gradient_css,
                    opacity: t.headerImage !== "" ? .91 : .99
                })),
                wrapperStyle: Q(() => A.value),
                handleEscKey: e.handleEscKey,
                isMobile: Q(() => t.isMobile),
                configReady: Q(() => e.configReady),
                cssVariables: Q(() => e.theme === "theme-dark" ? `
            --text-accent: ${e.themeConfig.theme.gradient.color_1};
            --text-sub-accent: ${e.themeConfig.theme.gradient.color_3};
            --main-gradient: ${e.themeConfig.theme.header_gradient_css};
          ` : `
          --text-accent: ${e.themeConfig.theme.gradient.color_3};
          --text-sub-accent: ${e.themeConfig.theme.gradient.color_2};
          --main-gradient: ${e.themeConfig.theme.header_gradient_css};
        `),
                appWrapperClass: i,
                loadingBarClass: a,
                handleOpenModal: C,
                t: r
            }
        }
    });
const f6 = {class: "relative z-10"}, d6 = {key: 0, class: "App-Mobile-sidebar"},
    h6 = {id: "App-Mobile-Profile", class: "App-Mobile-wrapper"};

function p6(e, t, n, s, o, r) {
    const i = le("HeaderMain"), a = le("router-view"), l = le("Footer"), c = le("MobileMenu"), u = le("Navigator"),
        h = le("Dia");
    return T(), N(_e, null, [k("div", {
        id: "App-Wrapper",
        class: qe([e.appWrapperClass, e.theme]),
        style: Ie(e.wrapperStyle)
    }, [k("div", {
        id: "App-Container",
        class: "app-container max-w-10/12 lg:max-w-screen-2xl px-3 lg:px-8",
        onKeydown: t[0] || (t[0] = Mn(_t((...p) => e.handleOpenModal && e.handleOpenModal(...p), ["meta", "stop", "prevent"]), ["k"])),
        tabindex: "-1",
        style: Ie(e.cssVariables)
    }, [Y(i), k("div", {
        class: "app-banner app-banner-image",
        style: Ie(e.headerImage)
    }, null, 4), k("div", {
        class: "app-banner app-banner-screen",
        style: Ie(e.headerBaseBackground)
    }, null, 4), k("div", f6, [Y(a, null, {
        default: Ne(({Component: p}) => [Y(pn, {
            name: "fade-slide-y",
            mode: "out-in"
        }, {default: Ne(() => [(T(), ye(Tf(p)))]), _: 2}, 1024)]), _: 1
    })])], 36), k("div", {
        id: "loading-bar-wrapper",
        class: qe(e.loadingBarClass)
    }, null, 2)], 6), Y(l, {style: Ie(e.cssVariables)}, null, 8, ["style"]), e.isMobile ? (T(), N("div", d6, [k("div", h6, [Y(c)])])) : be("", !0), Y(u), !e.isMobile && e.configReady ? (T(), ye(h, {key: 1})) : be("", !0), (T(), ye(ou, {to: "head"}, [k("title", null, q(e.title), 1)]))], 64)
}

const m6 = Le(u6, [["render", p6]]), g6 = "modulepreload", _6 = function (e) {
        return "/" + e
    }, oc = {}, Vt = function (t, n, s) {
        if (!n || n.length === 0) return t();
        const o = document.getElementsByTagName("link");
        return Promise.all(n.map(r => {
            if (r = _6(r), r in oc) return;
            oc[r] = !0;
            const i = r.endsWith(".css"), a = i ? '[rel="stylesheet"]' : "";
            if (!!s) for (let u = o.length - 1; u >= 0; u--) {
                const h = o[u];
                if (h.href === r && (!i || h.rel === "stylesheet")) return
            } else if (document.querySelector(`link[href="${r}"]${a}`)) return;
            const c = document.createElement("link");
            if (c.rel = i ? "stylesheet" : g6, i || (c.as = "script", c.crossOrigin = ""), c.href = r, document.head.appendChild(c), i) return new Promise((u, h) => {
                c.addEventListener("load", u), c.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${r}`)))
            })
        })).then(() => t())
    }, v6 = Ce({
        name: "ObHorizontalArticle", components: {SvgIcon: vt}, props: {data: {type: Object}}, setup(e) {
            const t = We(), {t: n} = nt(), s = ht(e).data, o = r => {
                r === "" && (r = window.location.href), window.location.href = r
            };
            return {
                bannerHoverGradient: Q(() => ({background: t.themeConfig.theme.header_gradient_css})),
                post: s,
                handleAuthorClick: o,
                t: n
            }
        }
    }), b6 = {class: "article-container"}, y6 = {key: 0, class: "article-tag"}, k6 = {key: 1, class: "article-tag"},
    w6 = {class: "feature-article"}, C6 = {class: "feature-thumbnail"}, E6 = {key: 0, class: "ob-hz-thumbnail"},
    M6 = {key: 1, class: "ob-hz-thumbnail", src: Ps}, S6 = {class: "feature-content"}, T6 = {key: 0}, O6 = {key: 1},
    A6 = {key: 1}, L6 = {"data-dia": "article-link"}, I6 = {key: 2}, P6 = {key: 4, class: "article-footer"},
    $6 = {class: "flex flex-row items-center"}, R6 = {class: "text-ob-dim"}, N6 = {key: 5, class: "article-footer"},
    F6 = {class: "flex flex-row items-center mt-6"}, x6 = {class: "text-ob-dim mt-1"};

function D6(e, t, n, s, o, r) {
    const i = le("SvgIcon"), a = le("ob-skeleton"), l = le("router-link"), c = di("lazy");
    return T(), N("div", b6, [e.post.pinned ? (T(), N("span", y6, [k("b", null, [Y(i, {"icon-class": "pin"}), Re(" " + q(e.t("settings.pinned")), 1)])])) : e.post.feature ? (T(), N("span", k6, [k("b", null, [Y(i, {"icon-class": "hot"}), Re(" " + q(e.t("settings.featured")), 1)])])) : be("", !0), k("div", w6, [k("div", C6, [e.post.cover ? fn((T(), N("img", E6, null, 512)), [[c, e.post.cover]]) : (T(), N("img", M6)), k("span", {
        class: "thumbnail-screen",
        style: Ie(e.bannerHoverGradient)
    }, null, 4)]), k("div", S6, [k("span", null, [e.post.categories && e.post.categories.length > 0 ? (T(), N("b", T6, q(e.post.categories[0].name), 1)) : e.post.categories && e.post.categories.length <= 0 ? (T(), N("b", O6, q(e.t("settings.default-category")), 1)) : (T(), ye(a, {
        key: 2,
        tag: "b",
        height: "20px",
        width: "35px"
    })), k("ul", null, [e.post.tags && e.post.tags.length > 0 ? (T(!0), N(_e, {key: 0}, ze(e.post.tags, u => (T(), N("li", {key: u.slug}, [k("em", null, "# " + q(u.name), 1)]))), 128)) : e.post.tags && e.post.tags.length <= 0 ? (T(), N("li", A6, [k("em", null, "# " + q(e.t("settings.default-tag")), 1)])) : (T(), ye(a, {
        key: 2,
        count: 2,
        tag: "li",
        height: "16px",
        width: "35px"
    }))])]), e.post.title ? (T(), ye(l, {
        key: 0,
        to: {name: "post", params: {slug: e.post.slug}}
    }, {default: Ne(() => [k("h1", L6, q(e.post.title), 1)]), _: 1}, 8, ["to"])) : (T(), ye(a, {
        key: 1,
        tag: "h1",
        height: "3rem"
    })), e.post.text ? (T(), N("p", I6, q(e.post.text), 1)) : (T(), ye(a, {
        key: 3,
        tag: "p",
        count: 3,
        height: "20px"
    })), e.post.count_time ? (T(), N("div", P6, [k("div", $6, [fn(k("img", {
        class: "hover:opacity-50 cursor-pointer",
        alt: "",
        onClick: t[0] || (t[0] = u => e.handleAuthorClick(e.post.author.link))
    }, null, 512), [[c, e.post.author.avatar]]), k("span", R6, [k("strong", {
        class: "text-ob-normal pr-1.5 hover:text-ob hover:opacity-50 cursor-pointer",
        onClick: t[1] || (t[1] = u => e.handleAuthorClick(e.post.author.link))
    }, q(e.post.author.name), 1), Re(" " + q(e.t("settings.shared-on")) + " " + q(e.t(e.post.date.month)) + " " + q(e.post.date.day) + ", " + q(e.post.date.year), 1)])])])) : (T(), N("div", N6, [k("div", F6, [Y(a, {
        class: "mr-2",
        height: "28px",
        width: "28px",
        circle: !0
    }), k("span", x6, [Y(a, {height: "20px", width: "150px"})])])]))])])])
}

const U1 = Le(v6, [["render", D6]]), j6 = Ce({
    name: "Feature", props: {data: Object}, components: {HorizontalArticle: U1}, setup(e) {
        return {featurePost: ht(e).data}
    }
}), Z6 = {id: "feature"};

function B6(e, t, n, s, o, r) {
    const i = le("horizontal-article");
    return T(), N("div", Z6, [Y(i, {data: e.featurePost}, null, 8, ["data"]), dn(e.$slots, "default")])
}

const H6 = Le(j6, [["render", B6]]), U6 = Ce({
    name: "ObFeatureList", components: {SvgIcon: vt}, props: {data: {type: Object, required: !0}}, setup(e) {
        const t = We(), {t: n} = nt(), s = o => {
            o === "" && (o = window.location.href), window.location.href = o
        };
        return {
            gradientBackground: Q(() => ({background: t.themeConfig.theme.header_gradient_css})),
            post: Q(() => e.data),
            handleAuthorClick: s,
            t: n
        }
    }
});
const V6 = {class: "article-container"}, W6 = {key: 0, class: "article-tag"}, z6 = {key: 1, class: "article-tag"},
    q6 = {class: "article"}, K6 = {class: "article-thumbnail"}, G6 = {key: 0, alt: ""}, Y6 = {key: 1, src: Ps},
    X6 = {class: "article-content"}, J6 = {key: 0}, Q6 = {key: 1}, eg = {key: 3}, tg = {key: 4}, ng = {key: 5},
    sg = {"data-dia": "article-link"}, og = {key: 2}, rg = {key: 4, class: "article-footer"},
    ig = {class: "flex flex-row items-center"}, ag = ["src"], lg = {class: "text-ob-dim"},
    cg = {key: 5, class: "article-footer"}, ug = {class: "flex flex-row items-center mt-6"},
    fg = {class: "text-ob-dim mt-1"};

function dg(e, t, n, s, o, r) {
    const i = le("SvgIcon"), a = le("ob-skeleton"), l = le("router-link"), c = di("lazy");
    return T(), N("li", V6, [e.post.pinned ? (T(), N("span", W6, [k("b", null, [Y(i, {"icon-class": "pin"}), Re(" " + q(e.t("settings.pinned")), 1)])])) : e.post.feature ? (T(), N("span", z6, [k("b", null, [Y(i, {"icon-class": "hot"}), Re(" " + q(e.t("settings.featured")), 1)])])) : be("", !0), k("div", q6, [k("div", K6, [e.post.cover ? fn((T(), N("img", G6, null, 512)), [[c, e.post.cover]]) : (T(), N("img", Y6)), k("span", {
        class: "thumbnail-screen",
        style: Ie(e.gradientBackground)
    }, null, 4)]), k("div", X6, [k("span", null, [e.post.categories && e.post.categories.length > 0 ? (T(), N("b", J6, q(e.post.categories[0].name), 1)) : e.post.categories && e.post.categories.length <= 0 ? (T(), N("b", Q6, q(e.t("settings.default-category")), 1)) : (T(), ye(a, {
        key: 2,
        tag: "b",
        height: "20px",
        width: "35px"
    })), e.post.tags && e.post.tags.length > 0 ? (T(), N("ul", eg, [(T(!0), N(_e, null, ze(e.post.min_tags, u => (T(), N("li", {key: u.slug}, [k("em", null, "# " + q(u.name), 1)]))), 128))])) : e.post.tags && e.post.tags.length <= 0 ? (T(), N("ul", tg, [k("li", null, [k("em", null, "# " + q(e.t("settings.default-tag")), 1)])])) : (T(), N("ul", ng, [e.post.tags ? be("", !0) : (T(), ye(a, {
        key: 0,
        count: 2,
        tag: "li",
        height: "16px",
        width: "35px"
    }))]))]), e.post.title ? (T(), ye(l, {
        key: 0,
        to: {name: "post", params: {slug: e.post.slug}}
    }, {default: Ne(() => [k("h1", sg, q(e.post.title), 1)]), _: 1}, 8, ["to"])) : (T(), ye(a, {
        key: 1,
        tag: "h1",
        height: "3rem"
    })), e.post.text ? (T(), N("p", og, q(e.post.text), 1)) : (T(), ye(a, {
        key: 3,
        tag: "p",
        count: 4,
        height: "16px"
    })), e.post.author && e.post.date ? (T(), N("div", rg, [k("div", ig, [k("img", {
        class: "hover:opacity-50 cursor-pointer",
        src: e.post.author.avatar,
        alt: "author avatar",
        onClick: t[0] || (t[0] = u => e.handleAuthorClick(e.post.author.link))
    }, null, 8, ag), k("span", lg, [k("strong", {
        class: "text-ob-normal pr-1.5 hover:text-ob hover:opacity-50 cursor-pointer",
        onClick: t[1] || (t[1] = u => e.handleAuthorClick(e.post.author.link))
    }, q(e.post.author.name), 1), Re(" " + q(e.t("settings.shared-on")) + " " + q(e.t(e.post.date.month)) + " " + q(e.post.date.day) + ", " + q(e.post.date.year), 1)])])])) : (T(), N("div", cg, [k("div", ug, [Y(a, {
        class: "mr-2",
        height: "28px",
        width: "28px",
        circle: !0
    }), k("span", fg, [Y(a, {height: "20px", width: "150px"})])])]))])])])
}

const V1 = Le(U6, [["render", dg], ["__scopeId", "data-v-42e513fd"]]), hg = Ce({
        name: "ObFeatureList",
        components: {Article: V1, SvgIcon: vt},
        props: {data: {type: Array, required: !0}},
        setup(e) {
            const t = We(), n = ht(e).data, {t: s} = nt();
            return {
                gradientBackground: Q(() => ({background: t.themeConfig.theme.header_gradient_css})),
                gradientText: Q(() => t.themeConfig.theme.background_gradient_style),
                featurePosts: n,
                t: s
            }
        }
    }), pg = {class: "inverted-main-grid py-8 gap-8 box-border"},
    mg = {class: "relative overflow-hidden h-56 lg:h-auto rounded-2xl bg-ob-deep-800 shadow-lg"},
    gg = {class: "ob-gradient-plate opacity-90 relative z-10 bg-ob-deep-900 rounded-2xl flex justify-start items-end px-8 pb-10 shadow-md"},
    _g = {class: "text-3xl pb-8 lg:pb-16"}, vg = {class: "relative text-2xl text-ob-bright font-semibold"},
    bg = {class: "grid lg:grid-cols-2 gap-8"};

function yg(e, t, n, s, o, r) {
    const i = le("SvgIcon"), a = le("Article");
    return T(), N("div", pg, [k("div", mg, [k("div", gg, [k("h2", _g, [k("p", {style: Ie(e.gradientText)}, "EDITOR'S SELECTION", 4), k("span", vg, [Y(i, {
        class: "inline-block",
        "icon-class": "hot"
    }), Re(" " + q(e.t("home.recommended")), 1)])])]), k("span", {
        class: "absolute top-0 w-full h-full z-0",
        style: Ie(e.gradientBackground)
    }, null, 4)]), k("ul", bg, [e.featurePosts.length > 0 ? (T(!0), N(_e, {key: 0}, ze(e.featurePosts, l => (T(), N("li", {key: l.slug}, [Y(a, {data: l}, null, 8, ["data"])]))), 128)) : (T(), N(_e, {key: 1}, ze(2, l => k("li", {key: l}, [Y(a, {data: {}})])), 64))])])
}

const kg = Le(hg, [["render", yg]]), wg = Ce({
    name: "ObTitle",
    components: {SvgIcon: vt},
    props: {title: {type: String, required: !0}, id: String, icon: String},
    setup(e) {
        const {t} = nt(), n = We(), s = ht(e).title;
        return {gradientBackground: Q(() => ({background: n.themeConfig.theme.header_gradient_css})), titleStr: s, t}
    }
}), Cg = ["id"];

function Eg(e, t, n, s, o, r) {
    const i = le("SvgIcon");
    return T(), N("p", {
        id: e.id,
        class: "relative opacity-90 flex items-center pt-12 pb-2 mb-8 text-3xl text-ob-bright uppercase"
    }, [e.icon ? (T(), ye(i, {
        key: 0,
        "icon-class": e.icon,
        class: "inline-block mr-2"
    }, null, 8, ["icon-class"])) : be("", !0), Re(" " + q(e.t(e.titleStr)) + " ", 1), k("span", {
        class: "absolute bottom-0 h-1 w-24 rounded-full",
        style: Ie(e.gradientBackground)
    }, null, 4)], 8, Cg)
}

const Mg = Le(wg, [["render", Eg]]), Sg = Ce({
    name: "ObSubTitle",
    components: {SvgIcon: vt},
    props: {title: {type: String, default: "", requried: !0}, side: {type: String, default: "left"}, icon: String},
    setup(e) {
        const t = We(), {t: n} = nt(), s = ht(e).title, o = ht(e).side;
        return {
            gradientBackground: Q(() => ({background: t.themeConfig.theme.header_gradient_css})),
            titleClass: Q(() => ({"w-full": !0, block: !0, "text-right": o.value === "right"})),
            lineClass: Q(() => ({
                absolute: !0,
                "bottom-0": !0,
                "h-1": !0,
                "w-14": !0,
                "rounded-full": !0,
                "right-0": o.value === "right"
            })),
            titleStr: s,
            t: n
        }
    }
}), Tg = {class: "relative flex items-center pb-2 mb-4 text-xl text-ob-bright uppercase"};

function Og(e, t, n, s, o, r) {
    const i = le("SvgIcon");
    return T(), N("p", Tg, [e.icon && e.side === "left" ? (T(), ye(i, {
        key: 0,
        "icon-class": e.icon,
        class: "inline-block mr-2"
    }, null, 8, ["icon-class"])) : be("", !0), k("span", {class: qe(e.titleClass)}, q(e.t(e.titleStr)), 3), e.icon && e.side === "right" ? (T(), ye(i, {
        key: 1,
        "icon-class": e.icon,
        class: "inline-block ml-2"
    }, null, 8, ["icon-class"])) : be("", !0), k("span", {
        class: qe(e.lineClass),
        style: Ie(e.gradientBackground)
    }, null, 6)])
}

const W1 = Le(Sg, [["render", Og]]), Ag = Ce({
    name: "ObSidebar", setup() {
        const e = Zo();
        return {isMobile: Q(() => e.isMobile)}
    }
}), Lg = {key: 0};

function Ig(e, t, n, s, o, r) {
    return e.isMobile ? be("", !0) : (T(), N("div", Lg, [dn(e.$slots, "default")]))
}

const Pg = Le(Ag, [["render", Ig]]), $g = Lt({
    id: "categoryStore",
    state: () => ({isLoaded: !1, categories: new nc().data}),
    getters: {},
    actions: {
        async fetchCategories() {
            this.isLoaded = !1;
            const {data: e} = await Jp();
            return new Promise(t => {
                this.isLoaded = !0, this.categories = new nc(e).data, t(this.categories)
            })
        }
    }
}), Rg = Lt({
    id: "tagStore",
    state: () => ({isLoaded: !1, tags: new lr().data}),
    getters: {},
    actions: {
        async fetchAllTags() {
            const {data: e} = await Fl();
            return new Promise(t => {
                this.tags = new lr(e).data, t(this.tags)
            })
        }, async fetchTagsByCount(e) {
            this.isLoaded = !1;
            const {data: t} = await Fl();
            return new Promise(n => {
                this.isLoaded = !0;
                const s = t.length > e ? e : t.length;
                this.tags = new lr(t.splice(0, s)).data, n(this.tags)
            })
        }
    }
}), Ng = Ce({name: "ObTagList"}), Fg = {class: "flex justify-event flex-wrap pt-2"};

function xg(e, t, n, s, o, r) {
    return T(), N("div", Fg, [dn(e.$slots, "default")])
}

const Dg = Le(Ng, [["render", xg]]), jg = Ce({
        name: "ObTagItem",
        props: {name: String, slug: String, count: {type: Number, default: 0}, size: {type: String, default: "base"}},
        setup(e) {
            const t = ht(e).size;
            return {
                stylingTag: () => t.value === "xs" ? {
                    fontSize: "0.75rem",
                    lineHeight: "1rem"
                } : t.value === "sm" ? {
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem"
                } : t.value === "lg" ? {
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem"
                } : t.value === "xl" ? {
                    fontSize: "1.25rem",
                    lineHeight: "1.75rem"
                } : t.value === "2xl" ? {fontSize: "1.5rem", lineHeight: "2rem"} : {fontSize: "1rem", lineHeight: "1.5rem"}
            }
        }
    }), Zg = {class: "flex flex-row items-center hover:opacity-50 mr-2 mb-2 cursor-pointer transition-all"},
    Bg = k("em", {class: "opacity-50"}, "#", -1);

function Hg(e, t, n, s, o, r) {
    const i = le("router-link");
    return T(), N("div", Zg, [Y(i, {
        class: "bg-ob-deep-900 text-center px-3 py-1 rounded-tl-md rounded-bl-md text-sm",
        to: {name: "tags-search", query: {slug: e.slug}},
        style: Ie(e.stylingTag())
    }, {
        default: Ne(() => [Bg, Re(" " + q(e.name), 1)]),
        _: 1
    }, 8, ["to", "style"]), k("span", {
        class: "bg-ob-deep-900 text-ob-secondary text-center px-2 py-1 rounded-tr-md rounded-br-md text-sm opacity-70",
        style: Ie(e.stylingTag())
    }, q(e.count), 5)])
}

const Ug = Le(jg, [["render", Hg]]), Vg = Ce({
    name: "ObTag", components: {SubTitle: W1, TagList: Dg, TagItem: Ug, SvgIcon: vt}, setup() {
        const e = Rg(), {t} = nt();
        return Mt(async () => {
            e.fetchTagsByCount(10)
        }), {tags: Q(() => e.isLoaded && e.tags.length === 0 ? null : e.tags), t}
    }
});
const Wg = {class: "sidebar-box"},
    zg = {class: "flex flex-row items-center hover:opacity-50 mr-2 mb-2 cursor-pointer transition-all"},
    qg = {class: "text-center px-3 py-1 rounded-md text-sm"}, Kg = {class: "border-b-2 border-ob hover:text-ob"},
    Gg = {key: 2, class: "flex flex-row justify-center items-center"};

function Yg(e, t, n, s, o, r) {
    const i = le("SubTitle"), a = le("TagItem"), l = le("router-link"), c = le("ob-skeleton"), u = le("SvgIcon"),
        h = le("TagList");
    return T(), N("div", Wg, [Y(i, {
        title: "titles.tag_list",
        icon: "tag"
    }, null, 8, ["title"]), Y(h, null, {
        default: Ne(() => [e.tags && e.tags.length > 0 ? (T(), N(_e, {key: 0}, [(T(!0), N(_e, null, ze(e.tags, p => (T(), ye(a, {
            key: p.slug,
            name: p.name,
            slug: p.slug,
            count: p.count,
            size: "xs"
        }, null, 8, ["name", "slug", "count"]))), 128)), k("div", zg, [k("span", qg, [k("b", Kg, [Y(l, {to: "/tags"}, {
            default: Ne(() => [Re(q(e.t("settings.more-tags")) + " ... ", 1)]),
            _: 1
        })])])])], 64)) : e.tags ? (T(), ye(c, {
            key: 1,
            tag: "li",
            count: 10,
            height: "20px",
            width: "3rem"
        })) : (T(), N("div", Gg, [Y(u, {
            class: "stroke-ob-bright mr-2",
            "icon-class": "warning"
        }), Re(" " + q(e.t("settings.empty-tag")), 1)]))]), _: 1
    })])
}

const Xg = Le(Vg, [["render", Yg]]);
const Zi = l1.create({timeout: 5e3});
Zi.interceptors.request.use(e => e, e => (console.log(e), Promise.reject(e)));
Zi.interceptors.response.use(e => e, e => (console.log("err" + e), console.error(e.message), Promise.reject(e)));

function Wo(e, t) {
    const n = {template: "[TIME]", lang: "en"}, s = {
        en: {
            seconds: "just seconds ago",
            minutes: " minutes ago",
            hours: " hours ago",
            days: " days ago",
            months: " months ago",
            years: " years ago"
        }, cn: {seconds: "刚刚", minutes: "分钟前", hours: "小时前", days: "天前", months: "个月前", years: "年前"}
    };
    t !== void 0 && (t.template && (n.template = t.template), t.lang && (n.lang = t.lang)), typeof e == "string" && (/[a-zA-Z]+/g.test(e) ? e = new Date(e).getTime() : e = parseInt(e)), ("" + e).length === 10 ? e = parseInt(String(e)) * 1e3 : e = +e;
    const o = new Date(e).getTime(), r = Date.now(), i = Math.floor((r - o) / 1e3);
    let a = "";
    return i < 60 ? a = s[n.lang].seconds : i < 3600 ? a = String(Math.floor(i / 60)) + s[n.lang].minutes : i < 3600 * 24 ? a = String(Math.floor(i / 3600)) + s[n.lang].hours : i < 3600 * 24 * 30 ? a = String(Math.floor(i / 3600 / 24)) + s[n.lang].days : i < 3600 * 24 * 365 ? a = String(Math.floor(i / 3600 / 24 / 30)) + s[n.lang].months : a = String(Math.floor(i / 3600 / 24 / 365)) + s[n.lang].years, n.template.replace("[TIME]", a)
}

function Bi(e, t) {
    return t || (t = 28), e = e.replace(/![\s\w\](?:http(s)?://)+[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'*+,;=.]+\)/g, "[img]").replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)+/g, "[link]").replace(/(&nbsp;|<([^>]+)>)/gi, ""), e.length > t && (e = e.substr(0, t), e += "..."), e
}

const rc = "github-comment-cache-key", Jg = "https://api.github.com/repos", q9 = ({
                                                                                      clientID: e,
                                                                                      clientSecret: t,
                                                                                      repo: n,
                                                                                      owner: s,
                                                                                      admin: o,
                                                                                      language: r,
                                                                                      uid: i,
                                                                                      title: a,
                                                                                      body: l,
                                                                                      proxy: c
                                                                                  }) => {
    new Gitalk({
        clientID: e,
        clientSecret: t,
        repo: n,
        owner: s,
        admin: o,
        language: r,
        id: i,
        distractionFreeMode: !0,
        title: a,
        body: l,
        proxy: c
    }).render("gitalk-container")
};

class Qg {
    constructor(t) {
        E(this, "commentUrlCount", 0);
        E(this, "configs", {
            repo: "",
            owner: "",
            clientId: "",
            clientSecret: "",
            admin: "",
            authorizationToken: "",
            lang: "en"
        });
        E(this, "comments", []);
        this.configs.repo = `${Jg}/${t.owner}/${t.repo}/issues`, this.configs.clientId = t.clientId, this.configs.clientSecret = t.clientSecret, this.configs.admin = t.admin, this.configs.authorizationToken = "Basic " + window.btoa(t.clientId + ":" + t.clientSecret), t.lang && (this.configs.lang = t.lang)
    }

    async getComments() {
        return new Promise(t => {
            const n = this.getCache();
            n.isValid() ? (this.comments = n.data, t(this.comments)) : this.fetchCommentData().then(s => {
                t(s)
            })
        })
    }

    setCache(t) {
        const n = new cr(t);
        localStorage.setItem(rc, JSON.stringify(n))
    }

    getCache() {
        const t = localStorage.getItem(rc);
        if (t) {
            const n = JSON.parse(t);
            return new cr(n.data, n.time)
        }
        return new cr
    }

    async fetchCommentData() {
        const t = this.configs.repo + "/comments?sort=created&direction=desc&per_page=7&page=1";
        return new Promise(n => {
            this.fetchGithub(t, this.configs.authorizationToken).then(s => {
                const {data: o} = s;
                this.comments = o.map(r => new z1(r, this.configs)), this.setCache(this.comments), n(this.comments)
            })
        })
    }

    async fetchGithub(t, n) {
        return await Zi.get(t, {headers: {Accept: "application/json; charset=utf-8", Authorization: n}})
    }
}

class cr {
    constructor(t, n) {
        E(this, "data", []);
        E(this, "time", 0);
        this.data = t ? t.map(s => new z1(s)) : [], this.time = n || new Date().getTime()
    }

    isValid() {
        return this.data.length !== 0 && new Date().getTime() - this.time < 60 * 1e3
    }
}

class z1 {
    constructor(t, n) {
        E(this, "id", 0);
        E(this, "body", "");
        E(this, "node_id", 0);
        E(this, "html_url", "");
        E(this, "issue_url", "");
        E(this, "created_at", "");
        E(this, "updated_at", "");
        E(this, "author_association", "");
        E(this, "filtered", !1);
        E(this, "user", {id: 0, login: "", avatar_url: "", html_url: ""});
        E(this, "is_admin", !1);
        E(this, "cache_flag", !0);
        if (t) {
            let s = !1;
            for (const o of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, o) && (o === "user" ? (this.user.id = t[o].id, this.user.avatar_url = t[o].avatar_url, this.user.html_url = t[o].html_url, this.user.login = t[o].login, n && n.admin && n.admin !== "" && (this.is_admin = n.admin === t[o].login)) : Object.assign(this, {[o]: t[o]}), !s && o === "cache_flag" && (s = !0));
            if (!s) {
                const o = n && n.lang ? "en" : "cn";
                this.filterBody(), this.transformTime(o)
            }
        }
    }

    filterBody() {
        if (this.body.length === 0) return;
        let t = this.body.trim().replace("&nbsp;", "");
        const n = t.indexOf(">") > -1;
        let s = [];
        const o = `

`;
        if (s = t.split(o), s.length !== 2) {
            const r = `\r
\r
`;
            s = t.split(r)
        }
        s.length === 2 && n ? t = s[1] : s.length > 2 && n ? t = t.substr(t.indexOf(o) + 4) : t = t.replace(/(-)+>/g, " to ").replaceAll(">", " ").replaceAll(/```([^`]*)```/g, "").replaceAll(`\r
\r
`, `
`).replaceAll(`

`, `
`), t = Bi(t, 28), this.body = t
    }

    transformTime(t) {
        const n = {en: "commented [TIME]", cn: "[TIME]评论了"};
        this.created_at = Wo(this.created_at, {template: n[t], lang: t})
    }
}

const e7 = "hexo-theme-aurora", t7 = "0.0.0-semantic-release", n7 = "Futuristic auroral theme for Hexo.",
    s7 = "Benny Guo <bennyxguo6@gmail.com>", o7 = "MIT", r7 = "https://github.com/auroral-ui/hexo-theme-aurora",
    i7 = ["hexo", "hexo-theme", "aurora", "auroral-ui", "blog"],
    a7 = ["data/**", "layout/**", "public/**", "source/**"], l7 = {
        serve: "vite",
        build: "vite build --mode production",
        postbuild: "cat source/",
        lint: "eslint --ext .js,.vue .",
        preview: "vite preview",
        "env:local": "node ./build/scripts/config-script.js local",
        "env:prod": "node ./build/scripts/config-script.js prod",
        "env:pub": "node ./build/scripts/config-script.js publish",
        prepare: "husky install"
    }, c7 = {
        axios: "^1.4.0",
        "js-cookie": "^3.0.5",
        "normalize.css": "^8.0.1",
        nprogress: "^0.2.0",
        pinia: "2.1.4",
        vue: "^3.3.4",
        "vue-class-component": "^8.0.0-rc.1",
        "vue-i18n": "^9.2.2",
        "vue-router": "^4.2.2",
        "vue3-click-away": "^1.2.4",
        "vue3-lazyload": "^0.3.6",
        "vue3-scroll-spy": "^1.0.8"
    }, u7 = {
        "@commitlint/cli": "^17.6.6",
        "@commitlint/config-conventional": "^17.6.6",
        "@semantic-release/changelog": "^6.0.3",
        "@semantic-release/git": "^10.0.1",
        "@types/jest": "^29.5.2",
        "@types/js-cookie": "^3.0.3",
        "@types/node": "^20.3.2",
        "@types/nprogress": "^0.2.0",
        "@typescript-eslint/eslint-plugin": "^5.60.1",
        "@typescript-eslint/parser": "^5.60.1",
        "@vitejs/plugin-vue": "^4.2.3",
        "@vue/eslint-config-prettier": "^7.1.0",
        "@vue/eslint-config-typescript": "^11.0.3",
        "@vue/test-utils": "^2.4.0",
        autoprefixer: "^10.4.14",
        eslint: "8",
        "eslint-plugin-prettier": "^4.2.1",
        "eslint-plugin-vue": "9",
        husky: "^8.0.3",
        postcss: "^8.4.24",
        prettier: "^2.8.8",
        runjs: "^4.4.2",
        sass: "^1.63.6",
        "script-ext-html-webpack-plugin": "^2.1.5",
        "semantic-release": "^21.0.6",
        tailwindcss: "3.3.2",
        typescript: "~5.1.5",
        vite: "^4.3.9",
        "vite-plugin-html-transformer": "^4.0.0",
        "vite-plugin-svg-icons": "^2.0.1",
        "vue-jest": "^3.0.7"
    }, f7 = {
        name: e7,
        version: t7,
        description: n7,
        author: s7,
        license: o7,
        repository: r7,
        keywords: i7,
        files: a7,
        scripts: l7,
        dependencies: c7,
        devDependencies: u7
    }, d7 = f7.version, q1 = e => {
        const {avatarCDN: t = "", lang: n = "en"} = e, s = {
            en: "https://www.gravatar.com/avatar/",
            ja: "https://www.gravatar.com/avatar/",
            "zh-CN": "https://gravatar.loli.net/avatar/",
            "zh-TW": "https://www.gravatar.com/avatar/"
        };
        return /^https?:\/\//.test(t) ? t : s[String(n)] ? s[String(n)] : s.en
    }, K1 = (e, t, n = !1) => {
        const s = n ? t : md5(t);
        return console.log(t), String(t).endsWith("@qq.com") ? "https://q4.qlogo.cn/g?b=qq&nk=" + t.replace("@qq.com", "") + "&s=100" : e + s + `?&v=${d7}`
    };
let ic = !1;

class h7 {
    constructor(t) {
        E(this, "configs", {
            leanCloudConfig: {
                appId: "",
                appKey: "",
                className: "Comment",
                pageSize: 7,
                prefix: "https://",
                admin: "",
                lang: ""
            },
            gravatarConfig: {
                cdn: "https://www.gravatar.com/avatar/",
                ds: ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""],
                params: "",
                url: ""
            }
        });
        this.initLeancloud(t), this.initGravatar(t)
    }

    initLeancloud(t) {
        const {appId: n, appKey: s, pageSize: o = 7, serverURLs: r} = t;
        this.configs.leanCloudConfig.appId = n, this.configs.leanCloudConfig.appKey = s, this.configs.leanCloudConfig.pageSize = Number(o);
        let i = "", a = this.configs.leanCloudConfig.prefix;
        if (!r) switch (n.slice(-9)) {
            case"-9Nh9j0Va":
                a += "tab.";
                break;
            case"-MdYXbMMI":
                a += "us.";
                break
        }
        if (i = r || a + "avoscloud.com", !ic) try {
            AV.init({appId: n, appKey: s, serverURLs: i})
        } catch (l) {
            console.warn(l)
        }
        ic = !0
    }

    initGravatar(t) {
        const {avatarCDN: n = "", admin: s = "", lang: o = "en"} = t;
        this.configs.leanCloudConfig.admin = s, this.configs.leanCloudConfig.lang = o, this.configs.gravatarConfig.url = q1({
            avatarCDN: n,
            lang: o
        })
    }

    queryAll() {
        const t = new AV.Query(this.configs.leanCloudConfig.className);
        t.doesNotExist("rid");
        const n = new AV.Query(this.configs.leanCloudConfig.className);
        n.equalTo("rid", "");
        const s = AV.Query.or(t, n);
        return s.exists("url"), s.addDescending("createdAt"), s.addDescending("insertedAt"), s
    }

    queryRid(t) {
        const n = JSON.stringify(t.replace(/(\[|\])/g, "")),
            s = `select * from ${this.configs.leanCloudConfig.className} where rid in (${n}) order by -createdAt,-createdAt`;
        return AV.Query.doCloudQuery(s)
    }

    async getRecentComments(t) {
        return await new Promise(n => {
            this.queryAll().limit(t).find().then(s => {
                const o = s.map(r => new p7(this.mapComments(r)));
                n(o)
            })
        })
    }

    mapComments(t) {
        const n = t._serverData.mail, s = this.configs.leanCloudConfig.admin;
        return {
            id: t.id,
            body: t._serverData.comment,
            html_url: t._serverData.url,
            issue_url: "",
            created_at: new Date(t._serverData.insertedAt.getTime() - 8 * 1e3 * 60 * 60).toISOString(),
            updated_at: "",
            author_association: "",
            user: {
                id: 0,
                login: t._serverData.nick,
                avatar_url: K1(this.configs.gravatarConfig.url, n),
                html_url: t._serverData.link
            },
            is_admin: !(s === "" || s !== t._serverData.nick)
        }
    }
}

class p7 {
    constructor(t, n) {
        E(this, "id", 0);
        E(this, "body", "");
        E(this, "node_id", 0);
        E(this, "html_url", "");
        E(this, "issue_url", "");
        E(this, "created_at", "");
        E(this, "updated_at", "");
        E(this, "author_association", "");
        E(this, "filtered", !1);
        E(this, "user", {id: 0, login: "", avatar_url: "", html_url: ""});
        E(this, "is_admin", !1);
        E(this, "cache_flag", !0);
        if (t) {
            let s = !1;
            for (const o of Object.keys(this)) Object.prototype.hasOwnProperty.call(t, o) && (Object.assign(this, {[o]: t[o]}), !s && o === "cache_flag" && (s = !0));
            if (!s) {
                const o = n === "en" || n === "cn" ? n : "en";
                this.filterBody(), this.transformTime(o)
            }
        }
    }

    filterBody() {
        this.body = Bi(this.body, 28)
    }

    transformTime(t) {
        const n = {en: "commented [TIME]", cn: "[TIME]评论了"};
        this.created_at = Wo(this.created_at, {template: n[t], lang: t})
    }
}

const qs = {envId: "", pageSize: 7, includeReply: !1, lang: "en"}, K9 = e => {
    twikoo.init({envId: e.envId, el: "#tcomment", region: e.region, path: e.path, lang: e.lang})
};

class m7 {
    constructor(t) {
        E(this, "configs", qs);
        this.configs.envId = t.envId, this.configs.includeReply = t.includeReply ?? qs.includeReply
    }

    async getRecentComments(t) {
        const n = q1({avatarCDN: void 0, lang: this.configs.lang ?? qs.lang});
        return (await twikoo.getRecentComments({
            envId: this.configs.envId,
            pageSize: t ?? qs.pageSize,
            includeReply: !0
        })).map(o => this.mapComment(o, n))
    }

    mapComment(t, n) {
        const s = this.configs.lang === "cn" ? 288e5 : 0, o = Wo(new Date(Number(t.created) - s).toISOString());
        return {
            id: Number(t.id),
            body: t.commentText,
            html_url: t.url,
            issue_url: "",
            created_at: o,
            updated_at: "",
            author_association: "",
            user: {id: 0, login: t.nick, avatar_url: K1(n, t.mailMd5, !0), html_url: t.link},
            is_admin: !1
        }
    }
}

const G9 = ({
                serverURL: e,
                lang: t = "en",
                reaction: n = !1,
                login: s = "disable",
                meta: o,
                requiredMeta: r,
                commentSorting: i,
                wordLimit: a,
                imageUploader: l,
                pageSize: c
            }) => {
    let u = {
        el: "#waline",
        dark: 'body[class="theme-dark"]',
        reaction: n,
        serverURL: e,
        lang: t,
        login: s,
        locale: "zh-CN",
        meta: o,
        requiredMeta: r,
        commentSorting: i,
        wordLimit: a,
        pageSize: c
    };
    return l === !1 && (u = {imageUploader: l, ...u}), o0(u)
};

class g7 {
    constructor({serverURL: t, lang: n}) {
        E(this, "configs", {serverURL: "", lang: ""});
        this.configs.serverURL = t, this.configs.lang = n
    }

    async getRecentComments(t) {
        const {serverURL: n} = this.configs, {comments: s} = await r0({serverURL: n, count: t});
        return s.map(o => this.mapComment(o))
    }

    mapComment(t) {
        const n = Wo(this.convertDateFormat(t.insertedAt));
        return {
            id: t.objectId,
            body: Bi(t.comment),
            html_url: t.url,
            issue_url: "",
            created_at: n,
            updated_at: "",
            author_association: "",
            user: {id: t.user_id, login: t.nick, avatar_url: t.avatar, html_url: t.link},
            is_admin: t.user_id === 1
        }
    }

    convertDateFormat(t) {
        const n = t.split(" ");
        return `${n[0]}T${n[1]}`
    }
}

const _7 = Ce({
        name: "ObRecentComment", components: {SubTitle: W1, SvgIcon: vt}, setup() {
            const e = We(), {t} = nt();
            let n = pe([]), s = pe(!0);
            const o = Q(() => {
                if (e.themeConfig.plugins.gitalk.enable && e.themeConfig.plugins.gitalk.recentComment) return "gitalk";
                if (e.themeConfig.plugins.valine.enable && e.themeConfig.plugins.valine.recentComment) return "valine";
                if (e.themeConfig.plugins.twikoo.enable && e.themeConfig.plugins.twikoo.recentComment) return "twikoo";
                if (e.themeConfig.plugins.waline.enable && e.themeConfig.plugins.waline.recentComment) return "waline"
            }), r = () => {
                if (!e.configReady || o.value === void 0) {
                    s.value = !1;
                    return
                }
                switch (o.value) {
                    case"gitalk":
                        new Qg({
                            repo: e.themeConfig.plugins.gitalk.repo,
                            clientId: e.themeConfig.plugins.gitalk.clientID,
                            clientSecret: e.themeConfig.plugins.gitalk.clientSecret,
                            owner: e.themeConfig.plugins.gitalk.owner,
                            admin: e.themeConfig.plugins.gitalk.admin[0]
                        }).getComments().then(u => {
                            n.value = u
                        });
                        break;
                    case"valine":
                        new h7({
                            appId: e.themeConfig.plugins.valine.app_id,
                            appKey: e.themeConfig.plugins.valine.app_key,
                            avatar: e.themeConfig.plugins.valine.avatar,
                            admin: e.themeConfig.plugins.valine.admin,
                            lang: e.themeConfig.plugins.valine.lang
                        }).getRecentComments(7).then(u => {
                            n.value = u, s.value = !1
                        });
                        break;
                    case"twikoo":
                        new m7({
                            envId: e.themeConfig.plugins.twikoo.envId,
                            lang: e.themeConfig.plugins.twikoo.lang
                        }).getRecentComments(7).then(u => {
                            n.value = u, s.value = !1
                        });
                        break;
                    case"waline":
                        new g7({
                            serverURL: "https://" + e.themeConfig.plugins.waline.serverURL,
                            lang: e.locale ?? "en"
                        }).getRecentComments(7).then(u => {
                            n.value = u, s.value = !1
                        });
                        break;
                    default:
                        s.value = !1
                }
            };
            return ft(() => e.configReady, (i, a) => {
                !a && i && r()
            }), {
                SvgTypes: xi,
                isLoading: Q(() => s.value),
                comments: Q(() => n.value),
                isConfigReady: Q(() => e.configReady),
                initRecentComment: r,
                enabledCommentPlugin: o,
                t
            }
        }, mounted() {
            this.isConfigReady && this.initRecentComment()
        }
    }), v7 = {key: 0, class: "sidebar-box"}, b7 = {class: "flex justify-start items-start"}, y7 = ["src"],
    k7 = {class: "flex-1 text-xs"}, w7 = {class: "text-xs mb-2 pt-1"}, C7 = {class: "text-ob pr-2"},
    E7 = {key: 0, class: "text-ob-secondary bg-ob-deep-800 py-0.5 px-1.5 rounded-md opacity-75"},
    M7 = {class: "text-gray-500"}, S7 = {class: "text-xs text-ob-bright pb-1"},
    T7 = {key: 1, class: "flex flex-row justify-center items-center text-ob-dim"}, O7 = {class: "flex-1 text-xs"},
    A7 = {class: "text-xs"}, L7 = {class: "text-ob pr-2"}, I7 = k("br", null, null, -1),
    P7 = {class: "text-xs text-ob-bright"};

function $7(e, t, n, s, o, r) {
    const i = le("SubTitle"), a = le("SvgIcon"), l = le("ob-skeleton");
    return e.enabledCommentPlugin ? (T(), N("div", v7, [Y(i, {
        title: "titles.recent_comment",
        icon: "quote"
    }, null, 8, ["title"]), k("ul", null, [e.isLoading === !1 ? (T(), N(_e, {key: 0}, [e.comments.length > 0 ? (T(!0), N(_e, {key: 0}, ze(e.comments, c => (T(), N("li", {
        class: "bg-ob-deep-900 px-2 py-2 mb-1.5 rounded-lg flex flex-row justify-items-center items-stretch shadow-sm hover:shadow-ob transition-shadow",
        key: c.id
    }, [k("div", b7, [k("img", {
        class: "col-span-1 mr-2 rounded-full p-1",
        src: c.user.avatar_url,
        alt: "comment-avatar",
        height: "40",
        width: "40"
    }, null, 8, y7)]), k("div", k7, [k("div", w7, [k("span", C7, [Re(q(c.user.login) + " ", 1), c.is_admin ? (T(), N("b", E7, q(e.t("settings.admin-user")), 1)) : be("", !0)]), k("p", M7, q(c.created_at), 1)]), k("div", S7, q(c.body), 1)])]))), 128)) : (T(), N("div", T7, [Y(a, {
        class: "mr-2",
        "icon-class": "warning",
        svgType: e.SvgTypes.stroke,
        stroke: "var(--text-dim)"
    }, null, 8, ["svgType"]), Re(" " + q(e.t("settings.empty-recent-comments")), 1)]))], 64)) : (T(), N(_e, {key: 1}, ze(7, c => k("li", {
        class: "bg-ob-deep-900 px-2 py-3 mb-1.5 rounded-lg flex flex-row justify-items-center items-center shadow-sm hover:shadow-ob transition-shadow",
        key: c
    }, [Y(l, {
        class: "col-span-1 mr-2 rounded-full p-1",
        height: "40px",
        width: "40px",
        circle: !0
    }), k("div", O7, [k("div", A7, [k("span", L7, [Y(l, {
        tag: "b",
        class: "text-ob-secondary bg-ob-deep-800 py-0.5 px-1.5 rounded-md",
        height: "10px",
        width: "66px"
    })]), I7, Y(l, {
        tag: "p",
        class: "text-ob-secondary bg-ob-deep-800 py-0.5 px-1.5 rounded-md",
        height: "10px",
        width: "96px"
    })]), k("div", P7, [Y(l, {
        class: "text-ob-secondary bg-ob-deep-800 py-0.5 px-1.5 rounded-md",
        height: "10px",
        width: "126px"
    })])])])), 64))])])) : be("", !0)
}

const R7 = Le(_7, [["render", $7]]), N7 = Ce({
    name: "ObProfile", components: {Social: E1}, props: {author: {type: String, default: () => ""}}, setup(e) {
        const t = We(), n = C1(), {t: s} = nt(), o = ht(e).author, r = pe(new Di), i = async () => {
            await t.fetchStat(), await a()
        }, a = async () => {
            o.value !== "" && await n.fetchAuthorData(o.value).then(l => {
                r.value = l
            })
        };
        return ft(() => e.author, (l, c) => {
            l && l !== c && a()
        }), Mt(i), {
            avatarClass: Q(() => ({"ob-avatar": !0, [t.themeConfig.theme.profile_shape]: !0})),
            themeConfig: Q(() => t.themeConfig),
            gradientBackground: Q(() => ({background: t.themeConfig.theme.header_gradient_css})),
            socials: Q(() => t.themeConfig.socials),
            statistic: Q(() => t.statistic),
            authorData: r,
            t: s
        }
    }
});
const F7 = {
        class: "ob-gradient-cut-plate absolute bg-ob-deep-900 rounded-xl opacity-90 flex justify-center items-center pt-4 px-6 shadow-lg hover:shadow-2xl duration-300",
        "data-dia": "author"
    }, x7 = {class: "profile absolute w-full flex flex-col justify-center items-center"},
    D7 = {class: "flex flex-col justify-center items-center"}, j7 = ["src"],
    Z7 = {class: "text-center pt-4 text-4xl font-semibold text-ob-bright"}, B7 = ["innerHTML"],
    H7 = {key: 3, class: "pt-6 px-10 w-full text-sm text-center flex flex-col gap-2"},
    U7 = {class: "h-full w-full flex flex-col flex-1 justify-end items-end"},
    V7 = {class: "grid grid-cols-4 pt-4 w-full px-2 text-lg"}, W7 = {class: "col-span-1 text-center"},
    z7 = {class: "text-ob-bright"}, q7 = {class: "text-base"}, K7 = {class: "col-span-1 text-center"},
    G7 = {class: "text-ob-bright"}, Y7 = {class: "text-base"}, X7 = {class: "col-span-1 text-center"},
    J7 = {class: "text-ob-bright"}, Q7 = {class: "text-base"}, e9 = {class: "col-span-1 text-center"},
    t9 = {class: "text-ob-bright"}, n9 = {class: "text-base"};

function s9(e, t, n, s, o, r) {
    const i = le("ob-skeleton"), a = le("Social");
    return T(), N("div", {
        class: "h-98 w-full rounded-2xl relative shadow-xl mb-8",
        style: Ie(e.gradientBackground)
    }, [k("div", F7, [k("div", x7, [k("div", D7, [e.authorData.avatar !== "" ? (T(), N("img", {
        key: 0,
        class: qe(e.avatarClass),
        src: e.authorData.avatar,
        alt: "avatar"
    }, null, 10, j7)) : (T(), ye(i, {
        key: 1,
        width: "7rem",
        height: "7rem",
        circle: ""
    })), k("h2", Z7, [e.authorData.name ? (T(), N(_e, {key: 0}, [Re(q(e.authorData.name), 1)], 64)) : (T(), ye(i, {
        key: 1,
        height: "2.25rem",
        width: "7rem"
    }))]), k("span", {
        class: "h-1 w-14 rounded-full mt-2",
        style: Ie(e.gradientBackground)
    }, null, 4), e.authorData.description ? (T(), N("p", {
        key: 2,
        class: "pt-6 px-10 w-full text-sm text-center",
        innerHTML: e.authorData.description
    }, null, 8, B7)) : (T(), N("p", H7, [Y(i, {
        count: 2,
        height: "20px",
        width: "10rem"
    })]))]), k("div", U7, [Y(a, {socials: e.authorData.socials}, null, 8, ["socials"]), k("ul", V7, [k("li", W7, [k("span", z7, q(e.authorData.word_count), 1), k("p", q7, q(e.t("settings.words")), 1)]), k("li", K7, [k("span", G7, q(e.authorData.post_list.length), 1), k("p", Y7, q(e.t("settings.articles")), 1)]), k("li", X7, [k("span", J7, q(e.authorData.categories), 1), k("p", Q7, q(e.t("settings.categories")), 1)]), k("li", e9, [k("span", t9, q(e.authorData.tags), 1), k("p", n9, q(e.t("settings.tags")), 1)])])])])])], 4)
}

const o9 = Le(N7, [["render", s9], ["__scopeId", "data-v-9da60dd3"]]), r9 = Lt({
    id: "postStore",
    state: () => ({featurePosts: new ho, posts: new ys, postTotal: 0, cachePost: {title: "", body: "", uid: ""}}),
    getters: {},
    actions: {
        async fetchFeaturePosts() {
            const {data: e} = await Qp();
            return new Promise(t => setTimeout(() => {
                this.featurePosts = new ho(e), t(this.featurePosts)
            }, 200))
        }, async fetchPostsList(e) {
            e || (e = 1);
            const {data: t} = await Nl(e);
            return new Promise(n => setTimeout(() => {
                this.posts = new ys(t), this.postTotal = this.posts.total, n(this.posts)
            }, 200))
        }, async fetchArchives(e) {
            e || (e = 1);
            const {data: t} = await Nl(e);
            return new Promise(n => setTimeout(() => {
                n(new Gm(t))
            }, 200))
        }, async fetchPost(e) {
            const {data: t} = await Xp(e);
            return new Promise(n => setTimeout(() => {
                n(new Ln(t))
            }, 200))
        }, async fetchPostsByCategory(e) {
            const {data: t} = await Yp(e);
            return new Promise(n => setTimeout(() => {
                n(new tc(t))
            }, 200))
        }, async fetchPostsByTag(e) {
            const {data: t} = await Gp(e);
            return new Promise(n => {
                setTimeout(() => {
                    n(new tc(t))
                }, 200)
            })
        }, setCache(e) {
            this.cachePost = e
        }
    }
}), i9 = Ce({
    name: "ObPaginator",
    components: {SvgIcon: vt},
    emits: ["pageChange"],
    props: {
        pageTotal: {type: Number, required: !0},
        pageSize: {type: Number, required: !0},
        page: {type: Number, required: !0}
    },
    setup(e, {emit: t}) {
        const {t: n} = nt(), s = ht(e), o = Q(() => Math.ceil(s.pageTotal.value / s.pageSize.value)), r = Q(() => {
            if (o.value <= 3) {
                const a = [];
                for (let l = 0; l < o.value; l++) a.push(l + 1);
                return {head: 0, pages: a, end: 0}
            } else return s.page.value >= 1 && s.page.value < 3 ? {
                head: 1,
                pages: [2, 3, "..."],
                end: o.value
            } : s.page.value >= 3 && s.page.value <= o.value - 2 ? {
                head: 1,
                pages: ["...", s.page.value - 1, s.page.value, s.page.value + 1, "..."],
                end: o.value
            } : {head: 1, pages: ["...", o.value - 2, o.value - 1], end: o.value}
        }), i = a => {
            a !== "..." && t("pageChange", a)
        };
        return {currentPage: Q(() => s.page.value), pageChangeEmitter: i, paginator: r, pages: o, t: n}
    }
});
const a9 = {class: "paginator"}, l9 = ["onClick"];

function c9(e, t, n, s, o, r) {
    const i = le("SvgIcon");
    return T(), N("div", a9, [k("ul", null, [e.currentPage > 1 ? (T(), N("li", {
        key: 0,
        class: "text-ob-bright",
        onClick: t[0] || (t[0] = a => e.pageChangeEmitter(e.currentPage - 1))
    }, [Y(i, {"icon-class": "arrow-left"}), Re(" " + q(e.t("settings.paginator.newer")), 1)])) : be("", !0), e.paginator.head !== 0 ? (T(), N("li", {
        key: 1,
        class: qe({active: e.currentPage === e.paginator.head}),
        onClick: t[1] || (t[1] = a => e.pageChangeEmitter(e.paginator.head))
    }, q(e.paginator.head), 3)) : be("", !0), (T(!0), N(_e, null, ze(e.paginator.pages, (a, l) => (T(), N("li", {
        key: l,
        class: qe({active: e.currentPage === a}),
        onClick: c => e.pageChangeEmitter(a)
    }, q(a), 11, l9))), 128)), e.paginator.end !== 0 ? (T(), N("li", {
        key: 2,
        class: qe({active: e.currentPage === e.paginator.end}),
        onClick: t[2] || (t[2] = a => e.pageChangeEmitter(e.paginator.end))
    }, q(e.paginator.end), 3)) : be("", !0), e.currentPage < e.pages ? (T(), N("li", {
        key: 3,
        class: "text-ob-bright",
        onClick: t[3] || (t[3] = a => e.pageChangeEmitter(e.currentPage + 1))
    }, [Re(q(e.t("settings.paginator.older")) + " ", 1), Y(i, {"icon-class": "arrow-right"})])) : be("", !0)])])
}

const u9 = Le(i9, [["render", c9], ["__scopeId", "data-v-a3fd6a03"]]), f9 = Ce({
        name: "Home",
        components: {
            Feature: H6,
            FeatureList: kg,
            Article: V1,
            HorizontalArticle: U1,
            Title: Mg,
            Sidebar: Pg,
            TagBox: Xg,
            Paginator: u9,
            RecentComment: R7,
            Profile: o9,
            SvgIcon: vt
        },
        setup() {
            Ii().setTitle("home");
            const e = r9(), t = We(), n = $g(), {t: s} = nt(), o = pe(new ho().top_feature), r = pe(new ho().features),
                i = pe(new ys), a = pe({"tab-expander": !0, expanded: !1}), l = pe({tab: !0, "expanded-tab": !1}),
                c = pe(""), u = pe(0), h = pe({pageSize: 12, pageTotal: 0, page: 1});
            Mt(async () => {
                await e.fetchFeaturePosts().then(() => {
                    o.value = e.featurePosts.top_feature, r.value = e.featurePosts.features
                }), await v(), await n.fetchCategories();
                const R = document.getElementById("article-list");
                u.value = R && R instanceof HTMLElement ? R.offsetTop + 120 : 0
            });
            const w = () => {
                a.value.expanded = !a.value.expanded, l.value["expanded-tab"] = !l.value["expanded-tab"]
            }, g = R => {
                c.value = R, C(), R !== "" ? (i.value = new ys, e.fetchPostsByCategory(R).then(S => {
                    i.value = S, h.value.pageTotal = S.total
                })) : v()
            }, C = () => {
                window.scrollTo({top: u.value})
            }, A = R => R === c.value ? {background: t.themeConfig.theme.header_gradient_css} : {}, v = async () => {
                i.value = new ys, await e.fetchPostsList(h.value.page).then(() => {
                    i.value = e.posts, h.value.pageTotal = e.posts.total, h.value.pageSize = e.posts.pageSize
                })
            }, M = async R => {
                h.value.page = R, C(), await v()
            };
            return {
                gradientText: Q(() => t.themeConfig.theme.background_gradient_style),
                gradientBackground: Q(() => ({background: t.themeConfig.theme.header_gradient_css})),
                themeConfig: Q(() => t.themeConfig),
                categories: Q(() => n.isLoaded && n.categories.length === 0 ? null : n.categories),
                expanderClass: a,
                tabClass: l,
                expandHandler: w,
                handleTabChange: g,
                topFeature: o,
                featurePosts: r,
                posts: i,
                activeTabStyle: A,
                activeTab: c,
                pagination: h,
                pageChangeHanlder: M,
                t: s
            }
        }
    }), d9 = {class: "block"}, h9 = {key: 2}, p9 = {class: "main-grid"}, m9 = {class: "flex flex-col relative"},
    g9 = ["onClick"], _9 = {class: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"}, v9 = {key: 0};

function b9(e, t, n, s, o, r) {
    const i = le("FeatureList"), a = le("Feature"), l = le("horizontal-article"), c = le("Title"),
        u = le("ob-skeleton"), h = le("SvgIcon"), p = le("Article"), w = le("Paginator"), g = le("Profile"),
        C = le("RecentComment"), A = le("TagBox"), v = le("Sidebar");
    return T(), N("div", d9, [e.themeConfig.theme.feature ? (T(), ye(a, {
        key: 0,
        data: e.topFeature
    }, {
        default: Ne(() => [Y(i, {data: e.featurePosts}, null, 8, ["data"])]),
        _: 1
    }, 8, ["data"])) : (T(), ye(l, {
        key: 1,
        class: "mb-8",
        data: e.posts.data[0] || {}
    }, null, 8, ["data"])), e.themeConfig.theme.feature ? (T(), N("span", h9, [Y(c, {
        id: "article-list",
        title: "titles.articles",
        icon: "article"
    }, null, 8, ["title"])])) : be("", !0), k("div", p9, [k("div", m9, [k("ul", {class: qe(e.tabClass)}, [k("li", {
        class: qe({active: e.activeTab === ""}),
        onClick: t[0] || (t[0] = M => e.handleTabChange(""))
    }, [k("span", {
        class: "first-tab",
        style: Ie(e.activeTabStyle(""))
    }, q(e.t("settings.button-all")), 5)], 2), e.categories && e.categories.length > 0 ? (T(!0), N(_e, {key: 0}, ze(e.categories, M => (T(), N("li", {
        key: M.slug,
        class: qe({active: e.activeTab === M.slug}),
        onClick: R => e.handleTabChange(M.slug)
    }, [k("span", {style: Ie(e.activeTabStyle(M.slug))}, q(M.name), 5), k("b", null, q(M.count), 1)], 10, g9))), 128)) : e.categories !== null ? (T(), N(_e, {key: 1}, ze(6, M => k("li", {
        key: M,
        style: {position: "relative", top: "-4px"}
    }, [Y(u, {
        tag: "span",
        width: "60px",
        height: "33px"
    })])), 64)) : be("", !0)], 2), k("span", {
        class: qe(e.expanderClass),
        onClick: t[1] || (t[1] = (...M) => e.expandHandler && e.expandHandler(...M))
    }, [Y(h, {"icon-class": "chevron"})], 2), k("ul", _9, [e.posts.data.length === 0 ? (T(), N(_e, {key: 0}, ze(6, M => k("li", {key: M}, [Y(p, {data: {}})])), 64)) : e.themeConfig.theme.feature ? (T(!0), N(_e, {key: 2}, ze(e.posts.data, M => (T(), N("li", {key: M.slug}, [Y(p, {data: M}, null, 8, ["data"])]))), 128)) : (T(!0), N(_e, {key: 1}, ze(e.posts.data, (M, R) => (T(), N(_e, {key: M.slug}, [R !== 0 ? (T(), N("li", v9, [Y(p, {data: M}, null, 8, ["data"])])) : be("", !0)], 64))), 128))]), Y(w, {
        pageSize: e.pagination.pageSize,
        pageTotal: e.pagination.pageTotal,
        page: e.pagination.page,
        onPageChange: e.pageChangeHanlder
    }, null, 8, ["pageSize", "pageTotal", "page", "onPageChange"])]), k("div", null, [Y(v, null, {
        default: Ne(() => [Y(g, {author: "blog-author"}), Y(C), Y(A)]),
        _: 1
    })])])])
}

const y9 = Le(f9, [["render", b9]]), k9 = [{path: "/", name: "home", component: y9}, {
    path: "/404",
    name: "not-found",
    component: () => Vt(() => import("./404-2d38f38c.js"), ["static/js/404-2d38f38c.js", "static/css/404-ed437909.css"]),
    hidden: !0
}, {
    path: "/about",
    name: "about",
    component: () => Vt(() => import("./About-d794c89e.js"), ["static/js/About-d794c89e.js", "static/js/PageContainer-d2f93115.js", "static/js/Toc-ed72d8c4.js", "static/css/PageContainer-13d00495.css", "static/js/Breadcrumbs-8a6db6d6.js", "static/css/Breadcrumbs-e6c35084.css"])
}, {
    path: "/categories",
    name: "categories",
    component: () => Vt(() => import("./Category-71577f4c.js"), ["static/js/Category-71577f4c.js", "static/js/Breadcrumbs-8a6db6d6.js", "static/css/Breadcrumbs-e6c35084.css"])
}, {
    path: "/archives",
    name: "archives",
    component: () => Vt(() => import("./Archives-df0378a6.js"), ["static/js/Archives-df0378a6.js", "static/js/Breadcrumbs-8a6db6d6.js", "static/css/Breadcrumbs-e6c35084.css", "static/css/Archives-d0bac8fa.css"])
}, {
    path: "/tags",
    name: "tags",
    component: () => Vt(() => import("./Tag-f7440b60.js"), ["static/js/Tag-f7440b60.js", "static/js/Breadcrumbs-8a6db6d6.js", "static/css/Breadcrumbs-e6c35084.css"])
}, {
    path: "/tags/search",
    name: "tags-search",
    component: () => Vt(() => import("./Result-6952bb39.js"), ["static/js/Result-6952bb39.js", "static/js/Breadcrumbs-8a6db6d6.js", "static/css/Breadcrumbs-e6c35084.css"])
}, {
    path: "/post/:slug*",
    name: "post",
    component: () => Vt(() => import("./Post-0e3a3636.js"), ["static/js/Post-0e3a3636.js", "static/js/Toc-ed72d8c4.js", "static/js/Comment-63224ad7.js", "static/css/Comment-5dafa7b5.css", "static/css/Post-5242f0fc.css"]),
    props: !0
}, {
    path: "/page/:slug*",
    name: "page",
    component: () => Vt(() => import("./Page-e0cf431b.js"), ["static/js/Page-e0cf431b.js", "static/js/PageContainer-d2f93115.js", "static/js/Toc-ed72d8c4.js", "static/css/PageContainer-13d00495.css", "static/js/Breadcrumbs-8a6db6d6.js", "static/css/Breadcrumbs-e6c35084.css", "static/js/Comment-63224ad7.js", "static/css/Comment-5dafa7b5.css"]),
    props: !0
}, {
    path: "/result",
    name: "result",
    component: () => Vt(() => import("./Result-6952bb39.js"), ["static/js/Result-6952bb39.js", "static/js/Breadcrumbs-8a6db6d6.js", "static/css/Breadcrumbs-e6c35084.css"]),
    props: !0
}, {path: "/:catchAll(.*)", redirect: "/404", hidden: !0}], Hi = f4({history: T3("/"), routes: k9}), G1 = function () {
    return document.ontouchstart !== null ? "click" : "touchstart"
}, po = "__vue_click_away__", Y1 = function (e, t, n) {
    X1(e);
    let s = n.context, o = t.value, r = !1;
    setTimeout(function () {
        r = !0
    }, 0), e[po] = function (i) {
        if ((!e || !e.contains(i.target)) && o && r && typeof o == "function") return o.call(s, i)
    }, document.addEventListener(G1(), e[po], !1)
}, X1 = function (e) {
    document.removeEventListener(G1(), e[po], !1), delete e[po]
}, w9 = function (e, t, n) {
    t.value !== t.oldValue && Y1(e, t, n)
}, C9 = {
    install: function (e) {
        e.directive("click-away", E9)
    }
}, E9 = {mounted: Y1, updated: w9, unmounted: X1};
var Rt = (e => (e.LOADING = "loading", e.LOADED = "loaded", e.ERROR = "error", e))(Rt || {});
const M9 = typeof window < "u" && window !== null, S9 = L9(), T9 = Object.prototype.propertyIsEnumerable,
    ac = Object.getOwnPropertySymbols;

function ks(e) {
    return typeof e == "function" || toString.call(e) === "[object Object]"
}

function O9(e) {
    return typeof e == "object" ? e === null : typeof e != "function"
}

function A9(e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype"
}

function L9() {
    return M9 && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? ("isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get() {
            return this.intersectionRatio > 0
        }
    }), !0) : !1
}

function I9(e, ...t) {
    if (!ks(e)) throw new TypeError("expected the first argument to be an object");
    if (t.length === 0 || typeof Symbol != "function" || typeof ac != "function") return e;
    for (const n of t) {
        const s = ac(n);
        for (const o of s) T9.call(n, o) && (e[o] = n[o])
    }
    return e
}

function J1(e, ...t) {
    let n = 0;
    for (O9(e) && (e = t[n++]), e || (e = {}); n < t.length; n++) if (ks(t[n])) {
        for (const s of Object.keys(t[n])) A9(s) && (ks(e[s]) && ks(t[n][s]) ? J1(e[s], t[n][s]) : e[s] = t[n][s]);
        I9(e, t[n])
    }
    return e
}

const lc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", P9 = "",
    $9 = {rootMargin: "0px", threshold: 0}, Nn = "data-lazy-timeout-id";

class R9 {
    constructor(t) {
        this.options = {
            loading: lc,
            error: P9,
            observerOptions: $9,
            log: !0,
            lifecycle: {}
        }, this._images = new WeakMap, this.config(t)
    }

    config(t = {}) {
        J1(this.options, t)
    }

    mount(t, n) {
        if (!t) return;
        const {
            src: s,
            loading: o,
            error: r,
            lifecycle: i,
            delay: a
        } = this._valueFormatter(typeof n == "string" ? n : n.value);
        this._lifecycle(Rt.LOADING, i, t), t.setAttribute("src", o || lc), S9 || (this.loadImages(t, s, r, i), this._log(() => {
            throw new Error("Not support IntersectionObserver!")
        })), this._initIntersectionObserver(t, s, r, i, a)
    }

    update(t, n) {
        var a;
        if (!t) return;
        (a = this._realObserver(t)) == null || a.unobserve(t);
        const {src: s, error: o, lifecycle: r, delay: i} = this._valueFormatter(typeof n == "string" ? n : n.value);
        this._initIntersectionObserver(t, s, o, r, i)
    }

    unmount(t) {
        var n;
        t && ((n = this._realObserver(t)) == null || n.unobserve(t), this._images.delete(t))
    }

    loadImages(t, n, s, o) {
        this._setImageSrc(t, n, s, o)
    }

    _setImageSrc(t, n, s, o) {
        t.tagName.toLowerCase() === "img" ? (n && t.getAttribute("src") !== n && t.setAttribute("src", n), this._listenImageStatus(t, () => {
            this._lifecycle(Rt.LOADED, o, t)
        }, () => {
            var r;
            t.onload = null, this._lifecycle(Rt.ERROR, o, t), (r = this._realObserver(t)) == null || r.disconnect(), s && t.getAttribute("src") !== s && t.setAttribute("src", s), this._log(() => {
                throw new Error(`Image failed to load!And failed src was: ${n} `)
            })
        })) : t.style.backgroundImage = `url('${n}')`
    }

    _initIntersectionObserver(t, n, s, o, r) {
        var a;
        const i = this.options.observerOptions;
        this._images.set(t, new IntersectionObserver(l => {
            Array.prototype.forEach.call(l, c => {
                r && r > 0 ? this._delayedIntersectionCallback(t, c, r, n, s, o) : this._intersectionCallback(t, c, n, s, o)
            })
        }, i)), (a = this._realObserver(t)) == null || a.observe(t)
    }

    _intersectionCallback(t, n, s, o, r) {
        var i;
        n.isIntersecting && ((i = this._realObserver(t)) == null || i.unobserve(n.target), this._setImageSrc(t, s, o, r))
    }

    _delayedIntersectionCallback(t, n, s, o, r, i) {
        if (n.isIntersecting) {
            if (n.target.hasAttribute(Nn)) return;
            const a = setTimeout(() => {
                this._intersectionCallback(t, n, o, r, i), n.target.removeAttribute(Nn)
            }, s);
            n.target.setAttribute(Nn, String(a))
        } else n.target.hasAttribute(Nn) && (clearTimeout(Number(n.target.getAttribute(Nn))), n.target.removeAttribute(Nn))
    }

    _listenImageStatus(t, n, s) {
        t.onload = n, t.onerror = s
    }

    _valueFormatter(t) {
        let n = t, s = this.options.loading, o = this.options.error, r = this.options.lifecycle, i = this.options.delay;
        return ks(t) && (n = t.src, s = t.loading || this.options.loading, o = t.error || this.options.error, r = t.lifecycle || this.options.lifecycle, i = t.delay || this.options.delay), {
            src: n,
            loading: s,
            error: o,
            lifecycle: r,
            delay: i
        }
    }

    _log(t) {
        this.options.log && t()
    }

    _lifecycle(t, n, s) {
        switch (t) {
            case Rt.LOADING:
                s == null || s.setAttribute("lazy", Rt.LOADING), n != null && n.loading && n.loading(s);
                break;
            case Rt.LOADED:
                s == null || s.setAttribute("lazy", Rt.LOADED), n != null && n.loaded && n.loaded(s);
                break;
            case Rt.ERROR:
                s == null || s.setAttribute("lazy", Rt.ERROR), n != null && n.error && n.error(s);
                break
        }
    }

    _realObserver(t) {
        return this._images.get(t)
    }
}

const N9 = {
    install(e, t) {
        const n = new R9(t);
        e.config.globalProperties.$Lazyload = n, e.provide("Lazyload", n), e.directive("lazy", {
            mounted: n.mount.bind(n),
            updated: n.update.bind(n),
            unmounted: n.unmount.bind(n)
        })
    }
};
Hi.beforeEach(async (e, t, n) => {
    const s = We(), o = Ii();
    s.startLoading();
    const r = An.global.te(`menu.${String(e.name)}`) ? An.global.t(`menu.${String(e.name)}`) : e.name;
    o.setTitle(String(r)), An.global.locale.value = s.locale ? s.locale : "en", n()
});
Hi.afterEach(() => {
    var t;
    We().endLoading(), (t = document.getElementById("App-Container")) == null || t.focus()
});
if (typeof window < "u") {
    let e = function () {
        var t = document.body, n = document.getElementById("__svg__icons__dom__");
        n || (n = document.createElementNS("http://www.w3.org/2000/svg", "svg"), n.style.position = "absolute", n.style.width = "0", n.style.height = "0", n.id = "__svg__icons__dom__", n.setAttribute("xmlns", "http://www.w3.org/2000/svg"), n.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink")), n.innerHTML = '<symbol  viewBox="0 0 24 24" id="icon-arrow-left-circle"><path d="m1.999 12 9-8v5s7.66-.5 9.85 4.3c1.6 3.3 1.1 5.9 1 6.3.03-.12-.5-.67-.58-.78-.22-.28-.46-.55-.7-.82-.48-.52-1-1-1.56-1.43-.81-.62-1.73-1.12-2.72-1.39-1.09-.29-2.21-.18-3.33-.18h-1.96v5l-9-8Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-arrow-left"><path d="M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" clip-rule="evenodd" fill-rule="evenodd" /><path d="M9.707 5.293a1 1 0 0 1 0 1.414L4.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z" clip-rule="evenodd" fill-rule="evenodd" /></symbol><symbol  viewBox="0 0 24 24" id="icon-arrow-right-circle"><path d="m22 12-9-8v5s-7.66-.5-9.85 4.3c-1.6 3.3-1.1 5.9-1 6.3-.03-.12.5-.67.58-.78.22-.28.46-.55.7-.82.48-.52 1-1 1.56-1.43.81-.62 1.73-1.12 2.72-1.39 1.09-.29 2.21-.18 3.33-.18H13v5l9-8Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-arrow-right"><path d="M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" clip-rule="evenodd" fill-rule="evenodd" /><path d="M14.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L19.586 12l-5.293-5.293a1 1 0 0 1 0-1.414Z" clip-rule="evenodd" fill-rule="evenodd" /></symbol><symbol  viewBox="0 0 24 24" id="icon-article"><path d="M18.767 22A2.988 2.988 0 0 1 18 20V2H2v20h16.767Z" clip-rule="evenodd" fill-rule="evenodd" /><path stroke-linejoin="round" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M5 19h10M12 9h3M12 6h3M5 16h10M5 13h10" /><path d="M9 5H5v5h4V5Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M9 5H5v5h4V5Z" /><path d="M21 22c-1.1 0-2-.9-2-2V9h4v11c0 1.1-.9 2-2 2Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-back-to-top"><path d="M17.87 15.5c.08.79.13 1.65.13 2.5 1.5 0 3 2 3 2s-.02-1.27-.3-2c-.44-1.15-1.48-2.31-2.83-2.5ZM6.13 15.5c-1.37.18-2.38 1.32-2.83 2.5-.28.73-.3 2-.3 2s1.5-2 3-2c0-.85.05-1.7.13-2.5Z" /><path d="M18 18H6c0-5.02 1.61-9.13 3.16-11.93.17.14.41.32.77.49.47.21 1.13.39 2.06.39.93 0 1.59-.18 2.07-.39.36-.17.61-.35.78-.49C16.39 8.87 18 12.98 18 18Z" /><path d="M12 16c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1Z" clip-rule="evenodd" fill-rule="evenodd" /><path stroke-width="2" d="M12.12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12.12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M14.84 6.07c-.17.14-.42.32-.78.49-.47.21-1.14.39-2.07.39-.93 0-1.59-.18-2.05-.39-.37-.17-.61-.35-.78-.49" /><path d="M14.84 6.07c-.17.14-.42.32-.78.49-.47.21-1.14.39-2.07.39-.93 0-1.59-.18-2.05-.39-.37-.17-.61-.35-.78-.49C10.61 3.47 12 2 12 2s1.39 1.47 2.84 4.07Z" clip-rule="evenodd" fill-rule="evenodd" /></symbol><symbol  viewBox="0 0 24 24" id="icon-category"><path d="M8 4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4h3c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h3Z" /><path stroke-linejoin="round" stroke-width="2" d="M8 4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4" /><path d="M15 6H9c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M16 10H8M16 18H8M16 14H8" /></symbol><symbol  viewBox="0 0 24 24" id="icon-chevron"><path d="M11.293 12.707a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0-1.414-1.414L12 10.586 4.707 3.293a1 1 0 0 0-1.414 1.414l8 8Z" clip-rule="evenodd" fill-rule="evenodd" /><path d="M11.293 20.707a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0-1.414-1.414L12 18.586l-7.293-7.293a1 1 0 0 0-1.414 1.414l8 8Z" clip-rule="evenodd" fill-rule="evenodd" /></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-clock-outline"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M18.67 2 22 5.33M2 5.33 5.33 2" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M13 13h4M12 7v5M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-clock"><path d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="M17.963 1.293a1 1 0 0 1 1.414 0l3.33 3.33a1 1 0 1 1-1.414 1.414l-3.33-3.33a1 1 0 0 1 0-1.414ZM6.037 1.293a1 1 0 0 1 0 1.414l-3.33 3.33a1 1 0 0 1-1.414-1.414l3.33-3.33a1 1 0 0 1 1.414 0Z" clip-rule="evenodd" fill-rule="evenodd" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M13 13h4M12 7v5" /><path d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-close"><path d="M22.707 1.293a1 1 0 0 1 0 1.414l-20 20a1 1 0 0 1-1.414-1.414l20-20a1 1 0 0 1 1.414 0Z" clip-rule="evenodd" fill-rule="evenodd" /><path d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414Z" clip-rule="evenodd" fill-rule="evenodd" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-csdn"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0zm189.952 752 11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" /></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-date-outline"><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M21 22H3c-.55 0-1-.45-1-1v-9h20v9c0 .55-.45 1-1 1Z" /><path d="M17 5h4c.55 0 1 .45 1 1v6H2V6c0-.55.45-1 1-1h4" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M17 5h4c.55 0 1 .45 1 1v6H2V6c0-.55.45-1 1-1h4M14 5h-4" /><path stroke-miterlimit="10" stroke-width="2" d="M15.5 8c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5ZM8.5 8C7.67 8 7 7.33 7 6.5v-3C7 2.67 7.67 2 8.5 2s1.5.67 1.5 1.5v3C10 7.33 9.33 8 8.5 8Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M17.5 19h1M13.5 19h1M9.5 19h1M5.5 19h1M17.5 15h1M13.5 15h1M9.5 15h1M5.5 15h1" /></symbol><symbol  viewBox="0 0 24 24" id="icon-date"><path d="M21 22H3c-.55 0-1-.45-1-1V11h20v10c0 .55-.45 1-1 1ZM17 5h4c.55 0 1 .45 1 1v5H2V6c0-.55.45-1 1-1h4" /><path stroke-miterlimit="10" stroke-width="2" stroke="currentColor" d="M14 5v1.5c0 .83.67 1.5 1.5 1.5S17 7.33 17 6.5V5M7 5v1.5C7 7.33 7.67 8 8.5 8S10 7.33 10 6.5V5" /><path d="M8.5 8C7.67 8 7 7.33 7 6.5v-3C7 2.67 7.67 2 8.5 2s1.5.67 1.5 1.5v3C10 7.33 9.33 8 8.5 8Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="#221b38" d="M17.5 19h1M13.5 19h1M9.5 19h1M5.5 19h1M17.5 15h1M13.5 15h1M9.5 15h1M5.5 15h1" /><path stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" stroke="#221b38" d="M22 11H2" /><path d="M15.5 8c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-dots"><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></symbol><symbol viewBox="0 0 800 600" fill="none"  id="icon-empty-search"><path d="M183.718 292.003s-13.595 28.135-17.541 22.432c-2.545-3.678-1.164-10.804-1.164-10.804s-17.941 22.245-22.234 18.207c-4.292-4.038-7.703-23.387-2.245-28.635 5.35-5.144 23.504-21.682 29.481-18.908 5.976 2.774 13.703 17.708 13.703 17.708Z" fill="#F2DEB8" /><path fill-rule="evenodd" clip-rule="evenodd" d="M146.389 296.493a.529.529 0 0 1 .661.825l-.33-.412-.331-.413Zm-8.922 8.478c-.272.216-.477.377-.526.409a.528.528 0 0 1-.586-.879l.018-.014.096-.075a406.086 406.086 0 0 0 1.509-1.197c.954-.759 2.206-1.759 3.452-2.755l3.414-2.73 1.545-1.237.331.413.33.412-1.546 1.237-3.414 2.73c-1.247.996-2.5 1.997-3.454 2.756l-1.169.93ZM148.233 301.461a.529.529 0 0 1 .659.826l-.329-.413-.33-.413Zm-11.644 10.632c-.088.069-.172.135-.206.158a.529.529 0 0 1-.586-.879l.025-.02.115-.09.419-.33 1.439-1.143c1.179-.938 2.731-2.176 4.278-3.41l4.24-3.384 1.92-1.534.33.413.329.413-1.92 1.534a21372.466 21372.466 0 0 1-8.519 6.794 1189.056 1189.056 0 0 1-1.864 1.478ZM150.076 306.43a.528.528 0 1 1 .659.825l-.329-.412-.33-.413Zm-11.644 10.632a6.248 6.248 0 0 1-.206.158.53.53 0 0 1-.586-.879l.025-.02.115-.09.419-.331 1.439-1.143c1.179-.937 2.731-2.175 4.278-3.409l4.24-3.384 1.92-1.534.33.413.329.412-1.92 1.534-4.24 3.385c-1.547 1.234-3.1 2.472-4.279 3.41l-1.441 1.145-.423.333Z" fill="#C4B6FF" /><path d="M300.475 569.508a1.684 1.684 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM428.967 572.972a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM221.396 580.832a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM218.025 574.565a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM94.72 575.776a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM442.962 575.097a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM235.218 567.823a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM412.79 571.194a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM458.803 579.571a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM399.5 580.275a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM233.532 577.461a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM262.29 572.202a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM276.467 569.508a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM550.308 575.097a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM209.867 578.589a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM422.533 581.257a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM201.446 572.879a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM191.417 580.832a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM145.618 575.097a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM504.674 574.658a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM289.514 569.508a1.684 1.684 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM254.883 578.302a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM155.364 579.825a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM249.567 569.508a1.684 1.684 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM245.328 579.988a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM467.78 565.081a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM449.955 564.24a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM476.702 573.813a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM484.763 565.081a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM133.467 580.832a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM123.165 575.776a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM281.267 578.302a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM497.689 565.081a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM519.006 565.081a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM535.071 562.554a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM271.288 577.461a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM535.958 572.972a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM168.841 576.783a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM183.952 572.879a1.684 1.684 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM585.378 564.24a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM328.387 580.832a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM57.48 576.783a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM74.664 579.988a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM350.374 579.988a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM492.806 577.461a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM318.544 572.202a1.684 1.684 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM338.414 572.202a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM303.846 577.461a1.684 1.684 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM294.405 577.461a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM599.404 572.972a1.686 1.686 0 1 0-.002-3.372 1.686 1.686 0 0 0 .002 3.372ZM356.24 567.823a1.686 1.686 0 1 0-.002-3.372 1.686 1.686 0 0 0 .002 3.372ZM374.443 570.517a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM365.161 578.302a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM384.243 571.194a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM108.076 580.275a1.685 1.685 0 1 0 .001-3.37 1.685 1.685 0 0 0-.001 3.37ZM556.946 564.24a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM567.681 572.972a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM583.693 573.813a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM388.258 578.302a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM608.475 562.554a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM455.116 63.621a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM583.608 67.085a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM376.037 74.945a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM372.666 68.678a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM249.361 69.889a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM597.603 69.21a1.686 1.686 0 1 0-.001-3.371 1.686 1.686 0 0 0 .001 3.371ZM389.859 61.936a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM567.431 65.307a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM613.444 73.684a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM554.141 74.388a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM388.173 71.574a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM416.93 66.315a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM431.108 63.621a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM704.949 69.21a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM364.508 72.702a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM577.174 75.37a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM356.087 66.992a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM346.058 74.945a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM300.259 69.21a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM659.315 68.77a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM444.155 63.621a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM409.524 72.415a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM310.005 73.938a1.686 1.686 0 1 0-.001-3.371 1.686 1.686 0 0 0 .001 3.371ZM404.208 63.621a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM399.969 74.1a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.372ZM622.421 59.194a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM604.596 58.353a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM631.343 67.925a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM639.404 59.194a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM288.108 74.945a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM277.806 69.889a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM435.908 72.415a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM652.33 59.194a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM673.647 59.194a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM689.712 56.667a1.686 1.686 0 1 0-.001-3.371 1.686 1.686 0 0 0 .001 3.371ZM425.929 71.574a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM690.599 67.085a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM323.482 70.896a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM338.593 66.992a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM740.019 58.353a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM483.028 74.945a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM212.121 70.896a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM229.305 74.1a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.372ZM505.015 74.1a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM647.447 71.574a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM473.185 66.315a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM493.055 66.315a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM458.487 71.574a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM449.046 71.574a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371ZM754.044 67.085a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM510.881 61.936a1.686 1.686 0 1 0-.001-3.372 1.686 1.686 0 0 0 .001 3.372ZM529.084 64.63a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM519.802 72.415a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM538.884 65.307a1.686 1.686 0 1 0 0-3.372 1.686 1.686 0 0 0 0 3.372ZM262.717 74.388a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM711.587 58.353a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM722.322 67.085a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM738.334 67.925a1.685 1.685 0 1 0 0-3.37 1.685 1.685 0 0 0 0 3.37ZM542.899 72.415a1.686 1.686 0 1 0-.001-3.371 1.686 1.686 0 0 0 .001 3.371ZM763.115 56.667a1.686 1.686 0 1 0 0-3.371 1.686 1.686 0 0 0 0 3.371Z" fill="#C4B6FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="m49.352 44.155 45.533-22.198 22.199 45.534L71.55 89.689 49.352 44.155Zm1.412.487 21.273 43.634 43.634-21.272-21.272-43.635-43.635 21.273Z" fill="#C4B6FF" /><path d="m313.519 431.34-13.717 6.688 6.688 13.717 13.717-6.687-6.688-13.718Z" fill="#B5CDFB" /><path d="m741.69 106.963-19.677 9.593 9.593 19.677 19.677-9.593-9.593-19.677ZM742.095 331.582c0 33.019-8.302 64.105-22.942 91.273-.053.095-.095.18-.148.274C686.43 483.39 622.663 524.32 549.357 524.32c-106.44 0-192.738-86.287-192.738-192.738 0-10.795.888-21.389 2.599-31.72.063-.422.137-.834.211-1.257 14.862-86.192 86.973-152.789 175.774-159.233a190.46 190.46 0 0 1 14.154-.517c58.169 0 110.317 25.762 145.65 66.503 29.343 33.822 47.088 77.953 47.088 126.224Z" fill="#C4B6FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M549.353 127.993c-5.034 0-10.021.179-14.951.547h-.003c-93.805 6.806-169.983 77.159-185.683 168.209a204.979 204.979 0 0 0-2.968 34.837c0 112.454 91.163 203.605 203.605 203.605 77.559 0 145-43.37 179.369-107.187 15.465-28.698 24.235-61.535 24.235-96.418 0-50.993-18.745-97.611-49.743-133.34l.798-.692-.798.692c-37.326-43.039-92.413-70.253-153.861-70.253Zm-15.108-1.56a203.05 203.05 0 0 1 15.108-.552c62.086 0 117.747 27.499 155.457 70.981 31.318 36.098 50.26 83.203 50.26 134.724 0 35.241-8.862 68.422-24.488 97.42-34.723 64.474-102.862 108.298-181.229 108.298-113.609 0-205.717-92.098-205.717-205.718 0-11.994 1.025-23.752 2.998-35.196l1.041.18-1.041-.18c15.863-91.997 92.829-163.079 187.611-169.957Z" fill="#C4B6FF" /><path d="M719.005 423.131c-32.575 60.26-96.342 101.19-169.648 101.19-106.44 0-192.738-86.287-192.738-192.737 0-10.796.888-21.39 2.599-31.721.528.106 1.056.243 1.584.412 0 0 43.54-28.276 91.019 13.236 47.48 41.5 37.339 157.511 97.969 137.083 60.62-20.428 72.059-31.044 95.751-29.418 23.682 1.637 45.188 6.539 49.149-6.538 3.359-11.091 19.604 3.591 24.315 8.493Z" fill="#B5CDFB" /><path d="M681.927 331.513c14.27 14.651 8.946 39.093-10.12 46.497-9.506 3.687-18.759 6.708-25.192 7.51-19.414 2.43-38.839 9.718-55.824-28.72-16.995-38.427-40.455-7.679-59.869-26.269-19.425-18.58 34.783-55.845 42.187-127.851 7.405-72.006-23.586-14.566-35.226-16.183-7.521-1.045-5.324-28.086-2.82-47.099.073-.01.137-.021.211-.021 4.573-.348 9.316-.517 14.08-.517a191.612 191.612 0 0 1 144.656 65.921c-12.538 5.968-25.287 10.215-32.829 13.109-18.611 7.13-18.611 48.705-20.924 60.841-1.31 6.866 21.569 32.142 41.67 52.782Z" fill="#B5CDFB" /><path d="M483.528 149.435c.172-1.166.29-2.348.29-3.561 0-13.408-10.869-24.276-24.276-24.276h-9.012c-13.408 0-24.276 10.868-24.276 24.276h-14.453c-13.407 0-24.276 10.869-24.276 24.276s10.869 24.276 24.276 24.276h59.117c13.408 0 24.276-10.869 24.276-24.276 0-8.783-4.68-16.453-11.666-20.715ZM767.782 385.419h-54.104c-12.271 0-22.218-9.948-22.218-22.218s9.947-22.218 22.218-22.218h54.104c12.271 0 22.218 9.948 22.218 22.218s-9.947 22.218-22.218 22.218Z" fill="#7D55FF" /><path d="M749.007 363.201h-8.248c-12.27 0-22.217-9.947-22.217-22.218 0-12.27 9.947-22.217 22.217-22.217h8.248c12.271 0 22.218 9.947 22.218 22.217 0 12.271-9.947 22.218-22.218 22.218ZM593.307 173.054c-6.605 0-11.959 5.354-11.959 11.963 0 4.308 11.959 27.272 11.959 27.272s11.963-23.706 11.963-27.272c0-6.609-5.354-11.963-11.963-11.963Zm0 17.642a6.582 6.582 0 0 1 0-13.164 6.584 6.584 0 0 1 6.587 6.582 6.584 6.584 0 0 1-6.587 6.582ZM593.309 217.21c4.029 0 7.295-.868 7.295-1.939 0-1.07-3.266-1.938-7.295-1.938s-7.295.868-7.295 1.938c0 1.071 3.266 1.939 7.295 1.939ZM390.896 381.897c-6.605 0-11.959 5.353-11.959 11.963 0 4.308 11.959 27.272 11.959 27.272s11.963-23.706 11.963-27.272c0-6.61-5.354-11.963-11.963-11.963Zm0 17.642a6.582 6.582 0 0 1 0-13.164 6.583 6.583 0 1 1 0 13.164ZM390.898 426.053c4.029 0 7.295-.868 7.295-1.939 0-1.071-3.266-1.939-7.295-1.939s-7.295.868-7.295 1.939c0 1.071 3.266 1.939 7.295 1.939ZM470.907 200.075a7.18 7.18 0 0 0-7.18 7.184c0 2.587 7.18 16.376 7.18 16.376s7.184-14.235 7.184-16.376a7.182 7.182 0 0 0-7.184-7.184Zm0 10.594a3.953 3.953 0 1 1 .002-7.906 3.953 3.953 0 0 1-.002 7.906ZM470.909 226.589c2.419 0 4.38-.521 4.38-1.164 0-.643-1.961-1.165-4.38-1.165-2.42 0-4.381.522-4.381 1.165s1.961 1.164 4.381 1.164Z" fill="#7D55FF" /><path d="M344.259 224.019c-.349 2.665-1.716 9.591-3.642 10.909-1.926 1.318-2.16-.862-3.637-.709" fill="#414042" /><path d="M304.058 215.153c-4.32 8.095-13.697 17.8-18.176 26.857-4.48 9.058 8.765 21.757 22.773 19.233 5.058-.911 8.471-10.202 10.55-15.965" fill="#F2DEB8" /><path fill-rule="evenodd" clip-rule="evenodd" d="M304.307 214.687a.527.527 0 0 1 .217.714c-2.032 3.808-5.164 7.958-8.355 12.186l-.717.951c-3.449 4.577-6.882 9.229-9.097 13.706-2.085 4.217-.092 9.41 4.331 13.331 4.398 3.898 11.051 6.378 17.875 5.148 1.119-.201 2.187-.874 3.206-1.918 1.018-1.042 1.957-2.424 2.818-3.981 1.722-3.114 3.081-6.839 4.123-9.725a.528.528 0 1 1 .993.358c-1.037 2.876-2.423 6.679-4.192 9.878-.885 1.601-1.877 3.072-2.986 4.208-1.109 1.135-2.364 1.965-3.775 2.22-7.184 1.294-14.157-1.314-18.763-5.398-4.582-4.062-6.971-9.748-4.577-14.589 2.266-4.58 5.761-9.309 9.2-13.873.234-.312.469-.622.702-.931 3.208-4.252 6.291-8.337 8.282-12.068a.528.528 0 0 1 .715-.217Z" fill="#414042" /><path d="M317.53 244.477c1.895.766 6.731 3.853 9.214 2.831 7.809-3.216 16.436-19.559 19.901-27.712 1.453-3.419 1.356-5.401 2.561-8.529l-23.713-11.928-11.413-3.426-5.844-.45.99 8.885-2.785 1.983-1.362 3.812-.798 3.542" fill="#F2DEB8" /><path fill-rule="evenodd" clip-rule="evenodd" d="m307.641 194.687 6.537.504 11.511 3.456 24.182 12.163-.172.447c-.541 1.403-.812 2.566-1.093 3.772l-.073.314c-.31 1.323-.658 2.708-1.402 4.46-1.742 4.098-4.779 10.25-8.364 15.788-1.793 2.768-3.731 5.395-5.72 7.536-1.982 2.135-4.047 3.823-6.102 4.669-.758.312-1.644.293-2.52.127-.885-.167-1.82-.497-2.714-.873a42.553 42.553 0 0 1-2.528-1.192l-.239-.12c-.664-.334-1.211-.61-1.612-.772a.528.528 0 1 1 .396-.979c.444.18 1.035.477 1.685.804l.244.123c.758.381 1.604.8 2.464 1.162.863.364 1.72.662 2.5.81.788.149 1.437.133 1.921-.067 1.85-.761 3.792-2.322 5.731-4.411 1.934-2.081 3.834-4.654 5.607-7.392 3.546-5.476 6.556-11.572 8.279-15.627.709-1.667 1.04-2.983 1.345-4.287l.075-.318c.251-1.079.507-2.179.967-3.458l-23.249-11.694-11.314-3.396-5.151-.398.953 8.56-2.902 2.067-1.295 3.625-.792 3.511a.528.528 0 0 1-1.03-.232l.805-3.574 1.429-3.998 2.667-1.899-1.026-9.211Z" fill="#414042" /><path d="M326.308 238.391c.022.248.224.43.475.413a.423.423 0 0 0 .396-.474.441.441 0 0 0-.474-.412.422.422 0 0 0-.397.473Z" fill="#231F20" /><path d="m326.738 237.917-.033.001a.422.422 0 0 0-.397.473.443.443 0 0 0 .442.414l.033-.001a.423.423 0 0 0 .396-.474.441.441 0 0 0-.441-.413Z" fill="#414042" /><path d="M328.999 240.642a.443.443 0 0 0 .478.409.424.424 0 0 0 .397-.474.442.442 0 0 0-.478-.409.425.425 0 0 0-.397.474Z" fill="#231F20" /><path d="m329.433 240.167-.037.001a.424.424 0 0 0-.397.474c.022.237.21.41.444.41l.034-.001a.424.424 0 0 0 .397-.474.441.441 0 0 0-.441-.41Z" fill="#414042" /><path d="M331.073 241.827a.442.442 0 0 0 .478.409.422.422 0 0 0 .396-.473.44.44 0 0 0-.477-.409.422.422 0 0 0-.397.473Z" fill="#231F20" /><path d="m331.505 241.352-.035.002a.422.422 0 0 0-.397.473.44.44 0 0 0 .443.41l.035-.001a.422.422 0 0 0 .396-.473.442.442 0 0 0-.442-.411Z" fill="#414042" /><path d="M327.222 244.012a.442.442 0 0 0 .478.409.422.422 0 0 0 .397-.473.442.442 0 0 0-.478-.409.424.424 0 0 0-.397.473Z" fill="#231F20" /><path d="m327.655 243.537-.036.002a.424.424 0 0 0-.397.473c.022.238.21.41.444.41l.034-.001a.422.422 0 0 0 .397-.473.442.442 0 0 0-.442-.411Z" fill="#414042" /><path d="M336.161 231.256c.023.249.23.425.479.408a.423.423 0 0 0 .399-.471.443.443 0 0 0-.48-.408.424.424 0 0 0-.398.471Z" fill="#231F20" /><path d="m336.594 230.785-.035.001a.422.422 0 0 0-.398.47.443.443 0 0 0 .445.409l.034-.001a.423.423 0 0 0 .399-.471.442.442 0 0 0-.445-.408Z" fill="#414042" /><path d="M326.34 233.945c.022.249.23.426.48.408a.421.421 0 0 0 .398-.471.443.443 0 0 0-.48-.408.422.422 0 0 0-.398.471Z" fill="#231F20" /><path d="m326.774 233.473-.036.001a.422.422 0 0 0-.398.471.442.442 0 0 0 .446.409l.034-.001a.421.421 0 0 0 .398-.471.442.442 0 0 0-.444-.409Z" fill="#414042" /><path d="M334.355 234.393a.44.44 0 0 0 .478.409c.25-.02.419-.23.396-.479a.439.439 0 0 0-.477-.408.428.428 0 0 0-.397.478Z" fill="#231F20" /><path d="m334.791 233.914-.039.001a.427.427 0 0 0-.397.478.44.44 0 0 0 .44.41l.038-.002a.427.427 0 0 0 .396-.478.438.438 0 0 0-.438-.409Z" fill="#414042" /><path d="M330.463 231.702a.44.44 0 0 0 .478.407.424.424 0 0 0 .395-.476.44.44 0 0 0-.478-.407.425.425 0 0 0-.395.476Z" fill="#231F20" /><path d="m330.896 231.225-.038.001a.425.425 0 0 0-.395.476.44.44 0 0 0 .441.408l.037-.001a.424.424 0 0 0 .395-.476.439.439 0 0 0-.44-.408Z" fill="#414042" /><path d="M330.021 235.276a.445.445 0 0 0 .479.411.422.422 0 0 0 .398-.472.445.445 0 0 0-.479-.411.422.422 0 0 0-.398.472Z" fill="#231F20" /><path d="m330.453 234.803-.034.001a.422.422 0 0 0-.398.472.444.444 0 0 0 .446.412l.033-.001a.422.422 0 0 0 .398-.472.444.444 0 0 0-.445-.412Z" fill="#414042" /><path d="M332.101 237.552a.44.44 0 0 0 .478.409.428.428 0 0 0 .396-.479.438.438 0 0 0-.477-.408.427.427 0 0 0-.397.478Z" fill="#231F20" /><path d="m332.536 237.072-.038.001a.429.429 0 0 0-.397.479.44.44 0 0 0 .478.408.426.426 0 0 0 .396-.478.44.44 0 0 0-.439-.41Z" fill="#414042" /><path d="M333.113 239.397c.022.25.226.429.477.409a.427.427 0 0 0 .397-.478.44.44 0 0 0-.478-.409.427.427 0 0 0-.396.478Z" fill="#231F20" /><path d="m333.547 238.918-.038.001a.427.427 0 0 0-.396.478.439.439 0 0 0 .477.409.427.427 0 0 0 .397-.478.44.44 0 0 0-.44-.41Z" fill="#414042" /><path d="M324.737 242.267a.44.44 0 0 0 .479.405.422.422 0 0 0 .399-.47.44.44 0 0 0-.479-.406.424.424 0 0 0-.399.471Z" fill="#231F20" /><path d="m325.172 241.795-.036.001a.423.423 0 0 0-.399.471.44.44 0 0 0 .444.407c.012 0 .023 0 .035-.002a.422.422 0 0 0 .399-.47.44.44 0 0 0-.443-.407ZM365.804 204.862c-3.654 3.935-3.586 2.297-6.577 5.106-.54 4.163-1.875 7.449-6.368 7.243-2.213.125-4.105-.129-6.319 0-1.613 1.834-4.618 4.968-6.301 6.635-.785.777-1.703-1.27-1.744-2.074-.147-2.874-.085-10.253-.085-11.983 0-1.729-.016-.487-.039-.565-.672-2.257-6.095-4.151-7.326-4.572-6.027-2.059-13.132-3.654-17.397-7.906-.379-.378-.197-.451-.321-.536-.917-.628-1.54-1.624-2.683-.124-1.143 1.5-2.739 4.879-3.977 6.738-.042 1.23-6.475 9.327-6.397 8.886-.125-4.2 6.916-32.117 10.518-31.554 3.602.564 7.03 2.929 7.857 1.367 3.756-7.088 9.092-6.974 15.725-4.91.89.277 2.441 1.102 3.702 1.458 8.157 2.3 19.404 5.481 27.422 1.124-1.102 3.396-2.22 6.793-3.323 10.182 5.503-.143 9.449-3.394 13.371-6.682-1.569 6.413-6.084 18.232-9.738 22.167Z" fill="#414042" /><path d="M336.422 226.536c.139.856-2.466 1.905-3.244 1.776-5.78-.961-2.954-10.601 1.885-11.069 3.986-.385 5.107 2.805 3.06 5.443-.091.118-.194.217-.271.344" fill="#F2DEB8" /><path fill-rule="evenodd" clip-rule="evenodd" d="M338.38 219.061c-.396-.817-1.414-1.471-3.267-1.292l-.05-.526.05.526c-1.037.1-2.005.696-2.8 1.612-.794.914-1.383 2.113-1.66 3.328-.277 1.221-.229 2.406.182 3.316.399.883 1.156 1.554 2.43 1.765.076.013.292-.001.632-.091a5.906 5.906 0 0 0 1.017-.382c.342-.164.628-.345.813-.514.135-.124.164-.191.17-.207a.528.528 0 0 1 1.046-.145c.081.497-.243.893-.503 1.131-.289.265-.677.498-1.066.687-.395.19-.82.348-1.205.45-.363.097-.765.165-1.077.113l.086-.521-.086.521c-1.617-.268-2.674-1.163-3.22-2.372-.533-1.182-.56-2.617-.249-3.985.313-1.373.976-2.732 1.892-3.787.915-1.053 2.114-1.837 3.497-1.971 2.133-.206 3.669.542 4.318 1.883.636 1.313.317 2.984-.79 4.409l-.415-.322.415.322a3.363 3.363 0 0 1-.154.186.78.78 0 0 0-.081.107.528.528 0 1 1-.905-.545 1.95 1.95 0 0 1 .178-.243l.054-.063a1.74 1.74 0 0 0 .074-.089c.941-1.213 1.084-2.455.674-3.301Z" fill="#414042" /><path d="m336.6 219.075-2.42-.01 2.42.01Z" fill="#fff" /><path fill-rule="evenodd" clip-rule="evenodd" d="M333.784 219.063a.396.396 0 0 1 .398-.394l2.42.01a.396.396 0 0 1-.004.792l-2.42-.01a.396.396 0 0 1-.394-.398Z" fill="#414042" /><path d="M336.981 221.6c-.573-.004-1.146-.005-1.718-.009l1.718.009Z" fill="#fff" /><path fill-rule="evenodd" clip-rule="evenodd" d="M334.867 221.589a.396.396 0 0 1 .398-.394l.899.005.819.004a.396.396 0 1 1-.005.792l-.814-.004-.904-.004a.396.396 0 0 1-.393-.399Z" fill="#414042" /><path d="M304.217 193.861s-11.348 29.678-8.314 34.322c3.034 4.644 16.233 11.364 24.324 6.915 8.091-4.45 9.491-7.41 9.649-11.079.143-3.309 2.605-7.179 6.246-6.808 3.64.371 4.399 5.016 4.399 5.016s6.472-2.831 7.686-8.899c1.214-6.068 2.427-20.961-13.754-18.065-16.181 2.895-30.236-1.402-30.236-1.402ZM316.425 252.273l-2.101-3.468a5.199 5.199 0 0 1 .667-6.264l4.665 2.364-3.231 7.368Z" fill="#414042" /><path d="m142.781 521.392 11.906-11.315 9.863 14.462-11.703 11.734-12.392-2.379-2.427-7.686 4.753-4.816Z" fill="#F2DEB8" /><path fill-rule="evenodd" clip-rule="evenodd" d="M141.752 541.193a2.113 2.113 0 0 1 2.614-1.446c3.375.972 4.796 3.149 5.796 5.026.134.253.26.493.378.72.78 1.494 1.277 2.447 2.417 3.164a2.112 2.112 0 0 1-2.246 3.578c-2.19-1.375-3.234-3.429-3.977-4.891-.106-.208-.206-.405-.302-.586-.793-1.489-1.489-2.448-3.234-2.95a2.113 2.113 0 0 1-1.446-2.615ZM138.619 553.04a2.113 2.113 0 0 1 2.948.489c1.188 1.662 2.399 2.729 3.769 3.724.577.419 1.165.813 1.813 1.248l.458.307c.818.551 1.705 1.16 2.644 1.882a2.113 2.113 0 0 1-2.576 3.349 46.796 46.796 0 0 0-2.428-1.726l-.427-.286c-.651-.438-1.32-.886-1.966-1.355-1.624-1.179-3.201-2.554-4.724-4.685a2.112 2.112 0 0 1 .489-2.947Z" fill="#7D55FF" /><path d="M130.102 582.348c-2.389-.386-3.513-1.496-5.05-2.453 12.563-9.576 12.731-38.717 6.273-49.832-2.615-4.5-3.245-3.305-7.698-5.265 1.212-.396 1.667-.776 3.023-1.14 4.754-1.279 9.906-2.908 14.99-2.554.091.006.243.067.315.052.945-.204 2.048.558 2.342 1.13.294.572-.128-.366.091.205.22.572.554 2.677.543 3.583-.021 1.633-.527 3.952 1.368 6.387 2.232 2.868 3.73 1.447 6.754 3.579.403 5.622-7.75 20.823-8.709 28.09-1.109 8.393-5.195 19.683-14.242 18.218Z" fill="#C4B6FF" /><path d="M125.13 579.881c-.039.029-.075.015-.078.014-.277-.141-2.599-1.455-3.338-2.25-2.231-2.404-5.478-6.807-3.503-12.643 3.007-8.887 5.213-17.98 2.38-27.105-1.944-6.259-1.984-12.045 3.438-13.148 2.84-.578 5.396.398 7.719 5.312 5.507 11.653 5.835 40.197-6.618 49.82Z" fill="#F0F1F1" /><path d="M125.571 562.376c-.014.011.006.023.005.022-.102-.051-.984-.549-1.255-.841-.816-.879-2.005-2.491-1.282-4.627 1.1-3.252 1.908-6.58.871-9.919-.711-2.291-.726-4.409 1.258-4.812 1.04-.212 1.975.145 2.825 1.944 2.016 4.265 2.136 14.711-2.422 18.233Z" fill="#B5CDFB" /><path d="m74.698 493.72 13.601-9.208 7.356 15.884-13.358 9.589-11.945-4.315-1.133-7.98 5.479-3.97Z" fill="#F2DEB8" /><path fill-rule="evenodd" clip-rule="evenodd" d="M70.433 513.082a2.112 2.112 0 0 1 2.816-.997c3.17 1.512 4.215 3.893 4.892 5.908.092.272.176.529.255.773.524 1.602.858 2.623 1.866 3.517a2.113 2.113 0 0 1-2.804 3.161c-1.934-1.715-2.626-3.913-3.12-5.476-.07-.224-.136-.434-.201-.628-.538-1.6-1.068-2.66-2.707-3.442a2.112 2.112 0 0 1-.997-2.816ZM65.399 524.254a2.112 2.112 0 0 1 2.827.967c.899 1.834 1.918 3.085 3.107 4.292.5.507 1.016.993 1.584 1.528l.4.378a50.582 50.582 0 0 1 2.3 2.29 2.113 2.113 0 0 1-3.091 2.881 46.311 46.311 0 0 0-2.112-2.101l-.373-.352a63.938 63.938 0 0 1-1.718-1.659c-1.408-1.43-2.738-3.045-3.891-5.397a2.113 2.113 0 0 1 .967-2.827Z" fill="#7D55FF" /><path d="M52.83 551.462c-2.293-.773-3.092-1.696-5.031-3.014 13.964-7.383 18.721-36.032 14.175-48.056-1.84-4.869-2.658-3.793-6.729-6.457 1.26-.192 1.771-.492 3.169-.629 4.9-.481 10.249-1.243 15.205-.06.09.022.23.107.303.104.966-.046 1.928.886 2.124 1.499.196.612-.066-.383.057.218.123.599.107 2.731-.053 3.622-.289 1.608-1.168 3.812.301 6.525 1.732 3.196 3.442 2.04 6.076 4.64-.526 5.612-11.063 19.268-13.202 26.279-2.47 8.098-7.711 18.258-16.395 15.329Z" fill="#C4B6FF" /><path d="M47.799 548.448c-.043.023.004.065.001.062-.25-.184-2.41-2.003-3.004-2.829-1.916-2.661-4.287-7.613-1.381-13.046 4.425-8.272 8.093-16.88 6.796-26.347-.89-6.492.02-12.207 5.55-12.405 2.895-.104 5.257 1.278 6.742 6.507 3.52 12.399-.841 40.61-14.704 48.058Z" fill="#F0F1F1" /><path d="M50.886 531.808c-.016.009.002.025 0 .024-.095-.071-.925-.769-1.153-1.086-.735-1.022-1.646-2.924-.53-5.01 1.699-3.177 3.108-6.482 2.61-10.117-.342-2.493.007-4.688 2.13-4.764 1.113-.04 2.02.491 2.59 2.499 1.351 4.761-.323 15.594-5.647 18.454Z" fill="#B5CDFB" /><path d="M260.087 233.913s15.029 2.915 27.704 5.611c12.676 2.697 54.512 23.505 61.057 41.506 2.803 7.709-19.554 15.17-19.85 15.608-.297.439-82.486-23.403-82.486-23.403l13.575-39.322ZM656.37 462.908l-7.155-5.582 2.683-.619 4.55 3.815 7.155-5.827 7.156 5.827 7.157-5.827 7.152 5.827 7.156-5.827 7.155 5.827 7.156-5.827 7.079 5.603 7.143-5.603 7.121 5.603 7.444-5.42 5.692 6.226-1.581.681-4.111-4.46-6.863 4.675-7.551-4.751-7.294 5.659-7.157-5.582-7.156 5.582-7.155-5.582-7.155 5.582-7.153-5.582-7.157 5.582-7.156-5.582-7.155 5.582ZM678.476 476.43l-7.155-5.582 2.682-.619 4.55 3.815 7.156-5.827 7.156 5.827 7.157-5.827 7.152 5.827 7.156-5.827 7.155 5.827 7.155-5.827 7.08 5.603 7.142-5.603 7.122 5.603 7.444-5.42 5.692 6.226-1.581.681-4.111-4.46-6.863 4.675-7.551-4.751-7.294 5.659-7.157-5.582-7.156 5.582-7.155-5.582-7.156 5.582-7.152-5.582-7.157 5.582-7.156-5.582-7.155 5.582Z" fill="#C4B6FF" /><path d="M420.35 327.382s27.569-8.4 26.176-2.158c-.899 4.027-6.591 7.552-6.591 7.552s26.299-1.77 26.251 3.666c-.048 5.435-11.022 19.857-17.993 19.444-6.833-.404-29.4-2.351-31.262-8.136-1.862-5.785 3.419-20.368 3.419-20.368Z" fill="#F2DEB8" /><path fill-rule="evenodd" clip-rule="evenodd" d="m162.769 423.719 39.689-67.506 24.585 14.455-42.777 72.756-92.78 66.024-16.536-23.237 87.819-62.492Z" fill="#7D55FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="m206.647 344.315 35.937 15.762 27.287 14.853-13.635 25.049-26.22-14.273-34.824-15.274 11.455-26.117Z" fill="#7D55FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="m264.645 383.323-33.719 78.152-65.9 70.054-20.773-19.541 62.47-66.408 31.736-73.555 26.186 11.298Z" fill="#7D55FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="m251.839 271.104-.099.001a1242.121 1242.121 0 0 0-15.327.269c-4.253.103-8.391.234-11.491.395l-.096.005-41.812 29.768-22.054-30.978 45.964-32.724.135-.092a19.795 19.795 0 0 1 5.733-2.69l.045-.013a23.554 23.554 0 0 1 2.283-.523 36.96 36.96 0 0 1 2.737-.368c1.522-.153 3.319-.268 5.1-.36 3.631-.188 8.186-.329 12.534-.435a1279.184 1279.184 0 0 1 15.804-.277l.871-.01c5.375-.337 9.755.737 13.926 2.589l.64.284 77.215 41.332a35.094 35.094 0 0 1 10.914 9.109l.318.4 19.079 26.866 51.995 5.858-4.257 37.786-68.894-7.761-27.756-39.084-73.507-39.347Z" fill="#C4B6FF" /><path d="M324.73 309.993c-9.601 27.368-40.328 69.281-45.493 74.225-3.898 3.728-23.207-5.694-41.903-16.573a513.763 513.763 0 0 1-22.942-14.207c-6.126-4.035-10.975-7.458-13.478-9.475-11.323-9.147 54.831-87.977 54.831-87.977l23.565 10.805 21.749 9.972 16.985 7.795s10.457 14.704 6.686 25.435Z" fill="#C4B6FF" /><path d="m223.589 355.171 5.393 3.038c14.496 8.164 32.865 3.032 41.03-11.464l26.374-46.826c8.165-14.496 3.032-32.866-11.463-41.031l-5.394-3.037c-6.99-3.938-15.849-1.462-19.787 5.528l-41.682 74.005c-3.937 6.991-1.462 15.85 5.529 19.787Z" fill="#414042" /><path opacity=".46" d="M291.918 272.572c5.651 2.591 7.971 9.525 4.798 14.872l-.062.104-37.011 62.172c-5.144 8.64-13.172 14.777-22.309 17.925a513.763 513.763 0 0 1-22.942-14.207c-6.126-4.036-10.975-7.458-13.478-9.475-11.323-9.147 54.831-87.977 54.831-87.977l23.565 10.805 12.608 5.781Z" fill="#414042" /><path d="m287.919 276.868-39.483 75.207c-3.729 7.109-12.507 9.844-19.615 6.116l-5.472-2.884c-10.298-5.408-16.171-15.939-16.129-26.819a30.105 30.105 0 0 1 3.454-13.858l6.95-13.235 18.031-34.35c5.746-10.943 17.682-17.016 29.47-16.224a29.801 29.801 0 0 1 10.066 2.45c.623.275 1.236.571 1.838.887l5.45 3.032c.56.296 1.099.623 1.595.993a13.166 13.166 0 0 1 4.468 5.535c1.764 4.024 1.606 8.904-.623 13.15Z" fill="#7D55FF" /><path d="M324.709 257.095c-.053.106-.623-.443-1.743-1.003-3.834-1.923-14.185-5.345-33.536 7.056-.296.179-.592.37-.888.57a13.166 13.166 0 0 0-4.468-5.535 41.953 41.953 0 0 1 2.039-1.552c6.802-4.912 16.9-9.106 29.576-5.535 0 0 3.728 1.763 5.788 3.105 1.627 1.056 3.232 2.894 3.232 2.894ZM284.581 238.757c-3.274 3.222-5.978 7.542-8.091 11.778a63.83 63.83 0 0 0-1.299 2.736 29.797 29.797 0 0 0-10.066-2.451 29.897 29.897 0 0 1 1.32-3.232c2.947-6.295 7.119-10.256 8.091-11.144a.612.612 0 0 1 .476-.158c.253.032.739.095 1.658.275 1.732.316 6.19 1.32 7.764 1.668.242.064.327.36.147.528ZM324.727 310.083s-37.806 28.62-56.212 28.319l-3.236 5.97s18.411-1.971 36.359-13.071c17.949-11.1 20.022-12.516 20.881-13.729.737-1.039 2.793-5.476 2.781-7.159-.002-.282-.407-.361-.573-.33Z" fill="#7D55FF" /><path d="m263.763 347.547-.459-.212a2.276 2.276 0 0 1-1.109-3.021l4.207-9.086a2.276 2.276 0 0 1 3.021-1.108l.459.212a2.275 2.275 0 0 1 1.109 3.021l-4.207 9.085a2.275 2.275 0 0 1-3.021 1.109Z" fill="#7D55FF" /><path d="m264.152 277.659-22.703-11.919a1.768 1.768 0 0 1 1.643-3.131l22.704 11.92a1.768 1.768 0 0 1-1.644 3.13ZM248.316 319.114l-9.524 15.597a9.805 9.805 0 0 1-12.924 3.572l-18.651-9.789a30.106 30.106 0 0 1 3.454-13.859l6.95-13.235a1.717 1.717 0 0 1 1.088.169l28.868 15.158a1.772 1.772 0 0 1 .739 2.387Z" fill="#414042" /><path d="M434.979 522.628h-45.65c-11.049 0-20.007-8.957-20.007-20.006 0-11.05 8.958-20.007 20.007-20.007h45.65c11.05 0 20.007 8.957 20.007 20.007 0 11.049-8.957 20.006-20.007 20.006Z" fill="#C4B6FF" /><path d="M415.461 502.622c-11.05 0-20.007-8.957-20.007-20.007 0-11.049 8.957-20.006 20.007-20.006 11.049 0 20.006 8.957 20.006 20.006 0 11.05-8.957 20.007-20.006 20.007Z" fill="#C4B6FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M236.903 139.387h-66.377v-1.056h66.377v1.056ZM236.903 145.466h-66.377v-1.056h66.377v1.056ZM215.778 151.546h-45.252v-1.057h45.252v1.057ZM215.778 157.625h-34.689v-1.056h34.689v1.056ZM215.778 163.704h-34.689v-1.057h34.689v1.057Z" fill="#C4B6FF" /><path d="M580.796 297.849c.538-.052.867.379 1.443 1.079-.817-3.477-2.471-9.481-.882-10.946.352-.325 3.351-1.561 4.286 1.481.592-5.464 2.085-12.697 5.854-12.987 4.882-.376 3.387 11.298 2.605 15.929 1.082-1.656 1.164-2.782 2.09-3.136.984-.376 3.276 1.012 2.833 3.12-.438 2.083-.607 4.791-1.137 7.066 1.028-1.154 1.534-1.991 2.413-1.918 1.267.106 2.028 1.995 2.167 2.34 1.227 3.045-.266 6.959-2.834 9.361-2.408 2.253-5.418 2.854-7.474 2.982v6.505h-2.34v-6.536c-4.882-.406-10.423-3.391-11.358-7.787-.635-2.984.896-6.414 2.334-6.553Z" fill="#7D55FF" /><path d="M576.764 296.897c-.538-.052-.868.379-1.443 1.079.816-3.477 2.47-9.481.882-10.947-.352-.325-3.352-1.56-4.287 1.482-.591-5.464-2.085-12.698-5.854-12.988-4.882-.375-3.386 11.299-2.604 15.93-1.082-1.656-1.165-2.783-2.091-3.136-.984-.376-3.275 1.012-2.832 3.12.437 2.083.606 4.791 1.137 7.066-1.029-1.154-1.535-1.991-2.413-1.918-1.267.106-2.029 1.995-2.168 2.34-1.227 3.045.267 6.959 2.834 9.361 2.409 2.253 5.419 2.854 7.474 2.982v6.505h2.34v-6.536c4.882-.406 10.424-3.391 11.359-7.787.634-2.984-.897-6.414-2.334-6.553Z" fill="#7D55FF" /><path d="M588.128 304.182c-.538-.052-.867.378-1.443 1.078.816-3.477 2.47-9.481.882-10.946-.352-.325-3.351-1.561-4.286 1.481-.592-5.464-2.086-12.697-5.855-12.987-4.881-.375-3.386 11.299-2.604 15.93-1.082-1.656-1.164-2.783-2.091-3.137-.984-.376-3.275 1.012-2.832 3.12.437 2.084.607 4.792 1.137 7.067-1.028-1.154-1.534-1.992-2.413-1.918-1.267.106-2.028 1.995-2.167 2.34-1.228 3.045.266 6.959 2.834 9.361 2.408 2.253 5.418 2.854 7.473 2.982v6.504h2.341v-6.535c4.882-.406 10.423-3.392 11.358-7.788.635-2.983-.896-6.414-2.334-6.552ZM485.381 466.177c.538-.052.867.378 1.443 1.078-.817-3.477-2.471-9.481-.883-10.946.352-.325 3.352-1.561 4.287 1.481.591-5.464 2.085-12.697 5.854-12.987 4.882-.375 3.386 11.299 2.604 15.93 1.083-1.656 1.165-2.783 2.091-3.137.984-.376 3.275 1.012 2.833 3.121-.438 2.083-.607 4.791-1.137 7.066 1.028-1.154 1.534-1.991 2.413-1.918 1.266.106 2.028 1.995 2.167 2.34 1.227 3.045-.266 6.959-2.834 9.361-2.409 2.253-5.419 2.854-7.474 2.982v6.505h-2.34v-6.536c-4.882-.406-10.423-3.392-11.358-7.788-.635-2.983.896-6.414 2.334-6.552ZM458.083 457.793c-.538-.052-.868.378-1.443 1.078.816-3.477 2.47-9.481.882-10.946-.352-.325-3.352-1.561-4.287 1.481-.591-5.464-2.085-12.697-5.854-12.987-4.881-.375-3.386 11.299-2.604 15.93-1.082-1.656-1.165-2.783-2.091-3.137-.984-.376-3.275 1.012-2.832 3.12.437 2.084.606 4.792 1.137 7.067-1.029-1.154-1.535-1.992-2.413-1.918-1.267.105-2.029 1.995-2.168 2.34-1.227 3.045.267 6.959 2.834 9.361 2.409 2.252 5.419 2.854 7.474 2.982v6.504h2.34v-6.535c4.882-.406 10.424-3.392 11.359-7.788.634-2.984-.897-6.414-2.334-6.552Z" fill="#C4B6FF" /><path d="M480.911 447.96c-.538-.051-.867.379-1.443 1.079.817-3.477 2.471-9.481.883-10.946-.353-.325-3.352-1.561-4.287 1.481-.591-5.464-2.085-12.697-5.854-12.987-4.882-.376-3.386 11.299-2.604 15.929-1.083-1.656-1.165-2.782-2.091-3.136-.984-.376-3.275 1.012-2.833 3.12.438 2.083.607 4.791 1.137 7.066-1.028-1.154-1.534-1.991-2.413-1.918-1.266.106-2.028 1.995-2.167 2.34-1.227 3.045.266 6.959 2.834 9.361 2.409 2.253 5.419 2.854 7.474 2.982v6.505h2.34v-6.535c4.882-.407 10.423-3.392 11.358-7.788.635-2.984-.896-6.414-2.334-6.553Z" fill="#C4B6FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M453.463 250.754c0-.292.237-.528.529-.528h44.902a.527.527 0 1 1 0 1.056h-44.902a.528.528 0 0 1-.529-.528ZM428.895 250.754c0-.292.236-.528.528-.528h21.309a.527.527 0 1 1 0 1.056h-21.309a.527.527 0 0 1-.528-.528ZM430.665 255.982c0-.292.236-.529.528-.529h44.903a.529.529 0 0 1 0 1.057h-44.903a.528.528 0 0 1-.528-.528ZM406.096 255.982c0-.292.236-.529.528-.529h21.309a.528.528 0 0 1 0 1.057h-21.309a.528.528 0 0 1-.528-.528Z" fill="#B5CDFB" /><path d="M265.177 276.008s-5.716 2.623-5.341 8.246c.374 5.622 6.747-3.28 5.341-8.246Z" fill="#414042" /><path d="M625.627 185.437h-16.954v30.691h16.954v-30.691Z" fill="#C4B6FF" /><path d="M636.073 199.175H619.12v16.953h16.953v-16.953Z" fill="#C4B6FF" /><g opacity=".7" fill="#fff"><path d="M615.866 187.578h-4.453v8.648h4.453v-8.648ZM622.887 187.578h-4.452v8.648h4.452v-8.648ZM615.866 198.709h-4.453v8.648h4.453v-8.648ZM622.887 198.709h-4.452v8.648h4.452v-8.648Z" /></g><path d="M613.631 422.75h-16.953v54.433h16.953V422.75Z" fill="#7D55FF" /><path d="M624.077 460.23h-16.953v16.953h16.953V460.23ZM599.808 448.804h-16.954v28.379h16.954v-28.379Z" fill="#7D55FF" /><path d="M603.87 448.633h-4.452v8.648h4.452v-8.648ZM610.891 448.633h-4.452v8.648h4.452v-8.648ZM603.87 459.764h-4.452v8.648h4.452v-8.648ZM610.891 459.764h-4.452v8.648h4.452v-8.648ZM603.87 426.087h-4.452v8.648h4.452v-8.648ZM610.891 426.087h-4.452v8.648h4.452v-8.648ZM603.87 437.219h-4.452v8.648h4.452v-8.648ZM610.891 437.219h-4.452v8.648h4.452v-8.648Z" fill="#B5CDFB" /><path d="M439.588 365.741h-16.953v54.434h16.953v-54.434Z" fill="#C4B6FF" /><path d="M450.034 403.22h-16.953v16.954h16.953V403.22ZM425.765 391.795h-16.954v28.379h16.954v-28.379Z" fill="#C4B6FF" /><path d="M429.827 391.624h-4.452v8.648h4.452v-8.648ZM436.848 391.624h-4.452v8.648h4.452v-8.648ZM429.827 402.755h-4.452v8.648h4.452v-8.648ZM436.848 402.755h-4.452v8.648h4.452v-8.648ZM429.827 369.077h-4.452v8.648h4.452v-8.648ZM436.848 369.077h-4.452v8.648h4.452v-8.648ZM429.827 380.208h-4.452v8.648h4.452v-8.648ZM436.848 380.208h-4.452v8.648h4.452v-8.648ZM555.285 365.582c-15.22 0-27.558 12.337-27.558 27.569 0 9.928 27.558 62.848 27.558 62.848s27.569-54.63 27.569-62.848c0-15.232-12.337-27.569-27.569-27.569Zm0 40.656c-8.376 0-15.168-6.792-15.168-15.168s6.792-15.168 15.168-15.168c8.387 0 15.179 6.792 15.179 15.168s-6.792 15.168-15.179 15.168ZM555.291 467.339c9.284 0 16.81-2 16.81-4.468s-7.526-4.468-16.81-4.468c-9.285 0-16.811 2-16.811 4.468s7.526 4.468 16.811 4.468Z" fill="#7D55FF" /><path d="M259.643 502.137a4.76 4.76 0 1 0 0-9.52 4.76 4.76 0 0 0 0 9.52Z" fill="#C4B6FF" /><path d="M764.801 566.469a4.76 4.76 0 1 0 0-9.52 4.76 4.76 0 0 0 0 9.52Z" fill="#F0F1F1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M324.735 151.826a3.703 3.703 0 1 0 .001-7.407 3.703 3.703 0 0 0-.001 7.407Zm4.76-3.703a4.76 4.76 0 1 1-9.52-.001 4.76 4.76 0 0 1 9.52.001Z" fill="#C4B6FF" /><path d="M389.859 26.52a4.76 4.76 0 1 0-.001-9.52 4.76 4.76 0 0 0 .001 9.52Z" fill="#B5CDFB" /><path d="M235.218 193.132a4.76 4.76 0 1 0-.001-9.52 4.76 4.76 0 0 0 .001 9.52Z" fill="#C4B6FF" /><path d="M676.609 546.537a4.76 4.76 0 1 0 0-9.52 4.76 4.76 0 0 0 0 9.52Z" fill="#231F20" /><path fill-rule="evenodd" clip-rule="evenodd" d="M20.84 478.196c5.403 0 9.783-4.38 9.783-9.784 0-5.403-4.38-9.783-9.783-9.783s-9.784 4.38-9.784 9.783c0 5.404 4.38 9.784 9.784 9.784Zm10.84-9.784c0 5.987-4.854 10.84-10.84 10.84-5.987 0-10.84-4.853-10.84-10.84 0-5.986 4.853-10.839 10.84-10.839 5.986 0 10.84 4.853 10.84 10.839ZM761.43 223.116c5.403 0 9.783-4.38 9.783-9.783 0-5.404-4.38-9.784-9.783-9.784s-9.784 4.38-9.784 9.784c0 5.403 4.381 9.783 9.784 9.783Zm10.84-9.783c0 5.986-4.854 10.839-10.84 10.839-5.987 0-10.84-4.853-10.84-10.839 0-5.987 4.853-10.84 10.84-10.84 5.986 0 10.84 4.853 10.84 10.84Z" fill="#C4B6FF" /><path d="M463.13 132.799a.876.876 0 1 0 .002-1.752.876.876 0 0 0-.002 1.752ZM470.378 137.822a.877.877 0 1 0 0-1.753.877.877 0 0 0 0 1.753ZM463.566 140.654a.877.877 0 1 0 0-1.753.877.877 0 0 0 0 1.753ZM486.155 180.264a.876.876 0 1 0 0-1.751.876.876 0 0 0 0 1.751ZM476.729 164.825a.877.877 0 1 0-.001-1.753.877.877 0 0 0 .001 1.753ZM471.785 154.374a.877.877 0 1 0 0-1.753.877.877 0 0 0 0 1.753ZM476.729 175.848a.876.876 0 1 0 0-1.751.876.876 0 0 0 0 1.751ZM481.452 159.364a1.332 1.332 0 1 0 0-2.664 1.332 1.332 0 0 0 0 2.664ZM486.155 169.631a1.332 1.332 0 1 0 0-2.664 1.332 1.332 0 0 0 0 2.664ZM467.749 188.271a1.332 1.332 0 1 0-.002-2.664 1.332 1.332 0 0 0 .002 2.664ZM474.521 145.07a1.331 1.331 0 1 0 0-2.662 1.331 1.331 0 0 0 0 2.662ZM479.497 186.939a1.332 1.332 0 1 0 0-2.664 1.332 1.332 0 0 0 0 2.664ZM753.061 326.313a.877.877 0 1 0 0-1.753.877.877 0 0 0 0 1.753ZM760.309 331.337a.877.877 0 1 0 0-1.755.877.877 0 0 0 0 1.755ZM753.497 334.168a.876.876 0 1 0 0-1.751.876.876 0 0 0 0 1.751ZM782.857 373.779a.877.877 0 1 0 0-1.755.877.877 0 0 0 0 1.755ZM773.431 358.339a.877.877 0 1 0-.001-1.753.877.877 0 0 0 .001 1.753ZM768.488 347.888a.876.876 0 1 0 0-1.751.876.876 0 0 0 0 1.751ZM773.431 369.362a.876.876 0 1 0 0-1.751.876.876 0 0 0 0 1.751ZM778.155 352.878a1.332 1.332 0 1 0-.002-2.664 1.332 1.332 0 0 0 .002 2.664ZM782.857 363.145a1.331 1.331 0 1 0 .001-2.663 1.331 1.331 0 0 0-.001 2.663ZM764.451 381.785a1.332 1.332 0 1 0 0-2.663 1.332 1.332 0 0 0 0 2.663ZM764.451 338.585a1.332 1.332 0 1 0 0-2.664 1.332 1.332 0 0 0 0 2.664ZM776.199 380.453a1.331 1.331 0 1 0 .001-2.663 1.331 1.331 0 0 0-.001 2.663Z" fill="#C4B6FF" /><path d="M420.228 472.443a.702.702 0 1 0 .001-1.405.702.702 0 0 0-.001 1.405ZM426.037 476.469a.703.703 0 1 0 0-1.407.703.703 0 0 0 0 1.407ZM420.578 478.738a.702.702 0 1 0 0-1.403.702.702 0 0 0 0 1.403ZM447.125 510.491a.702.702 0 1 0 .001-1.405.702.702 0 0 0-.001 1.405ZM439.57 498.117a.703.703 0 1 0 0-1.407.703.703 0 0 0 0 1.407ZM435.608 489.741a.702.702 0 1 0 .001-1.405.702.702 0 0 0-.001 1.405ZM439.57 506.952a.703.703 0 1 0 0-1.407.703.703 0 0 0 0 1.407ZM443.356 493.74a1.067 1.067 0 1 0 0-2.133 1.067 1.067 0 0 0 0 2.133ZM447.125 501.969a1.067 1.067 0 1 0 0-2.133 1.067 1.067 0 0 0 0 2.133ZM432.373 516.908a1.067 1.067 0 1 0 0-2.133 1.067 1.067 0 0 0 0 2.133ZM429.357 482.278a1.068 1.068 0 1 0 0-2.135 1.068 1.068 0 0 0 0 2.135ZM441.789 515.841a1.067 1.067 0 1 0 0-2.133 1.067 1.067 0 0 0 0 2.133Z" fill="#B5CDFB" /><path d="M644.739 282.437h-19.182a8.407 8.407 0 0 1 0-16.813h19.182a8.406 8.406 0 1 1 0 16.813Z" fill="#7D55FF" /><path d="M636.537 274.031a8.406 8.406 0 0 1-8.406-8.407 8.407 8.407 0 0 1 16.813 0 8.407 8.407 0 0 1-8.407 8.407Z" fill="#7D55FF" /><path opacity=".4" d="M95.086 392.277H45.314a5.034 5.034 0 0 1-5.034-5.034V267.565a5.034 5.034 0 0 1 5.034-5.034h49.772a5.034 5.034 0 0 1 5.034 5.034v119.678a5.034 5.034 0 0 1-5.034 5.034Z" fill="#B5CDFB" /><path d="M95.086 247.28H45.314a5.034 5.034 0 0 1-5.034-5.034v-51.787a5.033 5.033 0 0 1 5.034-5.033h49.772a5.033 5.033 0 0 1 5.034 5.033v51.787a5.034 5.034 0 0 1-5.034 5.034ZM65.578 365.629H38.653a3.484 3.484 0 0 1-3.484-3.484v-.754a3.483 3.483 0 0 1 3.484-3.483h26.925a3.483 3.483 0 0 1 3.484 3.483v.754a3.484 3.484 0 0 1-3.484 3.484Z" fill="#C4B6FF" /><path d="M102.973 365.629H76.048a3.484 3.484 0 0 1-3.484-3.484v-.754a3.483 3.483 0 0 1 3.484-3.483h26.925a3.483 3.483 0 0 1 3.484 3.483v.754a3.484 3.484 0 0 1-3.484 3.484Z" fill="#B5CDFB" /><path d="M93.542 328.204H50.945a1.987 1.987 0 0 1-1.987-1.987v-.43c0-1.097.89-1.987 1.987-1.987h42.597c1.097 0 1.987.89 1.987 1.987v.43c0 1.097-.89 1.987-1.987 1.987ZM82.228 336.36H50.945a1.987 1.987 0 0 1-1.987-1.987v-.43c0-1.097.89-1.986 1.987-1.986h31.283c1.097 0 1.987.889 1.987 1.986v.43c0 1.098-.89 1.987-1.987 1.987ZM82.228 344.517H50.945a1.987 1.987 0 0 1-1.987-1.987v-.43c0-1.097.89-1.987 1.987-1.987h31.283c1.097 0 1.987.89 1.987 1.987v.43c0 1.097-.89 1.987-1.987 1.987Z" fill="#C4B6FF" /><path d="M85.842 239.864H54.559a1.987 1.987 0 0 1-1.987-1.987v-.43c0-1.097.89-1.987 1.986-1.987h31.284c1.097 0 1.987.89 1.987 1.987v.43c0 1.097-.89 1.987-1.987 1.987Z" fill="#B5CDFB" /><path d="M76.658 383.947H63.743a.91.91 0 0 1-.91-.91v-.197a.91.91 0 0 1 .91-.91h12.915a.91.91 0 0 1 .91.91v.197a.91.91 0 0 1-.91.91Z" fill="#C4B6FF" /><path opacity=".4" d="M96.704 176.797H43.697a3.944 3.944 0 0 1-3.945-3.944V172a3.944 3.944 0 0 1 3.944-3.945h53.008a3.945 3.945 0 0 1 3.944 3.945v.853a3.944 3.944 0 0 1-3.944 3.944Z" fill="#B5CDFB" /><path d="M51.407 154.173h-8.252a1.365 1.365 0 0 1-1.366-1.365v-.295c0-.755.612-1.366 1.366-1.366h8.252c.754 0 1.366.611 1.366 1.366v.295c0 .754-.612 1.365-1.366 1.365ZM97.245 154.173h-8.252a1.365 1.365 0 0 1-1.365-1.365v-.295c0-.755.61-1.366 1.365-1.366h8.252c.754 0 1.366.611 1.366 1.366v.295c0 .754-.612 1.365-1.366 1.365Z" fill="#C4B6FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M95.529 177.325H44.872v-1.056h50.657v1.056ZM95.529 285.656H44.872V284.6h50.657v1.056ZM95.529 255.434H44.872v-1.057h50.657v1.057Z" fill="#C4B6FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M97.249 311.81c.995 0 1.954-.156 2.851-.445l.324 1.006a10.357 10.357 0 0 1-3.175.496H43.15a10.36 10.36 0 0 1-3.025-.449l.308-1.011c.859.262 1.771.403 2.717.403H97.25Z" fill="#BBBDBF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M43.151 149.442a9.308 9.308 0 0 0-9.307 9.308v143.762a9.31 9.31 0 0 0 6.59 8.904l-.308 1.011c-4.247-1.295-7.338-5.243-7.338-9.915V158.75c0-5.724 4.64-10.364 10.363-10.364H97.25c5.724 0 10.364 4.64 10.364 10.364v143.762c0 4.617-3.019 8.527-7.189 9.868l-.324-1.005a9.312 9.312 0 0 0 6.456-8.863V158.75a9.307 9.307 0 0 0-9.307-9.308H43.15Z" fill="#C4B6FF" /><path d="M81.325 154.793h-22.25a3.494 3.494 0 0 1-3.494-3.494v-3.305h29.238v3.305a3.494 3.494 0 0 1-3.494 3.494Z" fill="#C4B6FF" /><path d="M50.932 303.065h-5.83a1.865 1.865 0 0 1-1.866-1.865v-5.831c0-1.03.835-1.865 1.865-1.865h5.83c1.031 0 1.866.835 1.866 1.865v5.831c0 1.03-.835 1.865-1.865 1.865Z" fill="#7D55FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M45.101 293.768c-.884 0-1.601.717-1.601 1.601v5.831c0 .884.717 1.601 1.601 1.601h5.83c.885 0 1.602-.717 1.602-1.601v-5.831c0-.884-.717-1.601-1.601-1.601H45.1Zm-2.13 1.601a2.13 2.13 0 0 1 2.13-2.129h5.83a2.13 2.13 0 0 1 2.13 2.129v5.831a2.13 2.13 0 0 1-2.13 2.129h-5.83a2.13 2.13 0 0 1-2.13-2.129v-5.831Z" fill="#C4B6FF" /><path d="M65.72 303.065h-5.83a1.865 1.865 0 0 1-1.865-1.865v-5.831c0-1.03.835-1.865 1.865-1.865h5.83c1.031 0 1.866.835 1.866 1.865v5.831c0 1.03-.835 1.865-1.865 1.865Z" fill="#7D55FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59.89 293.768c-.884 0-1.601.717-1.601 1.601v5.831c0 .884.717 1.601 1.601 1.601h5.83c.885 0 1.602-.717 1.602-1.601v-5.831c0-.884-.717-1.601-1.601-1.601h-5.83Zm-2.13 1.601a2.13 2.13 0 0 1 2.13-2.129h5.83a2.13 2.13 0 0 1 2.13 2.129v5.831a2.13 2.13 0 0 1-2.13 2.129h-5.83a2.13 2.13 0 0 1-2.13-2.129v-5.831Z" fill="#C4B6FF" /><path d="M80.51 303.065h-5.83a1.865 1.865 0 0 1-1.866-1.865v-5.831c0-1.03.835-1.865 1.865-1.865h5.831c1.03 0 1.865.835 1.865 1.865v5.831c0 1.03-.835 1.865-1.865 1.865Z" fill="#7D55FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M74.68 293.768c-.885 0-1.602.717-1.602 1.601v5.831c0 .884.717 1.601 1.601 1.601h5.83c.885 0 1.602-.717 1.602-1.601v-5.831c0-.884-.717-1.601-1.601-1.601h-5.83Zm-2.13 1.601a2.13 2.13 0 0 1 2.13-2.129h5.83a2.13 2.13 0 0 1 2.13 2.129v5.831a2.13 2.13 0 0 1-2.13 2.129h-5.83a2.13 2.13 0 0 1-2.13-2.129v-5.831Z" fill="#C4B6FF" /><path d="M95.3 303.065h-5.832a1.865 1.865 0 0 1-1.865-1.865v-5.831c0-1.03.835-1.865 1.865-1.865H95.3c1.03 0 1.865.835 1.865 1.865v5.831c0 1.03-.835 1.865-1.865 1.865Z" fill="#7D55FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M89.468 293.768c-.884 0-1.601.717-1.601 1.601v5.831c0 .884.717 1.601 1.601 1.601H95.3c.884 0 1.601-.717 1.601-1.601v-5.831c0-.884-.717-1.601-1.6-1.601h-5.832Zm-2.13 1.601a2.13 2.13 0 0 1 2.13-2.129H95.3a2.13 2.13 0 0 1 2.13 2.129v5.831a2.13 2.13 0 0 1-2.13 2.129h-5.83a2.13 2.13 0 0 1-2.13-2.129v-5.831Z" fill="#C4B6FF" /><path d="M69.217 200.193a8.186 8.186 0 0 0-8.185 8.189c0 2.949 8.185 18.668 8.185 18.668s8.19-16.227 8.19-18.668a8.187 8.187 0 0 0-8.19-8.189Zm0 11.244c-2.488 0-3.993-1.943-3.993-3.673 0-2.297 2.055-3.818 3.993-3.818 1.78 0 3.497 2.028 3.497 3.818 0 1.561-1.005 3.673-3.497 3.673Z" fill="#7D55FF" /><path d="M69.219 230.418c2.758 0 4.993-.594 4.993-1.327s-2.235-1.327-4.993-1.327c-2.758 0-4.993.594-4.993 1.327s2.235 1.327 4.993 1.327Z" fill="#000" fill-opacity=".58" /><path fill-rule="evenodd" clip-rule="evenodd" d="m467.342 342.32-16.645-.837.053-1.055 16.645.837-.053 1.055ZM463.439 347.316l-18.103-.91.053-1.055 18.103.91-.053 1.055ZM458.072 352.24l-14.864-.91.064-1.054 14.865.91-.065 1.054ZM174.065 524.246l-14.361-13.725.73-.764 14.361 13.725-.73.764ZM101.133 504.51l-10.356-16.952.902-.551 10.355 16.952-.901.551Z" fill="#C4B6FF" /><path opacity=".46" d="M275.191 249.923c.444.19.877.402 1.299.613a63.83 63.83 0 0 0-1.299 2.736 29.797 29.797 0 0 0-10.066-2.451 29.98 29.98 0 0 1 1.32-3.232 29.696 29.696 0 0 1 8.746 2.334ZM289.43 263.147c-.296.179-.592.369-.888.57a13.166 13.166 0 0 0-4.468-5.535 41.96 41.96 0 0 1 2.039-1.553 13.291 13.291 0 0 1 2.429 3.74c.391.887.687 1.816.888 2.778Z" fill="#414042" /><path d="M141.418 523.274s2.064-6.124 3.127-5.534c1.062.59 3.408 2.082 2.308 2.921-1.099.84-4.121 3.337-4.121 3.337l-1.314-.724ZM72.912 495.596s2.911-5.769 3.88-5.034c.967.735 3.078 2.544 1.87 3.219-1.207.675-4.552 2.718-4.552 2.718l-1.198-.903Z" fill="#C4B6FF" /></symbol><symbol  viewBox="0 0 24 24" id="icon-eye"><path d="M12 18c-5.52 0-10-6-10-6s4.48-6 10-6 10 6 10 6-4.48 6-10 6Z" /><path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-folder"><path d="M19 10H2l3 10h17l-3-10Z" clip-rule="evenodd" fill-rule="evenodd" /><path d="M22 20V4h-6l-2 2H4v4h15l3 10Z" clip-rule="evenodd" fill-rule="evenodd" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="currentColor" d="M2 10h17l3 10" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-github"><path d="M511.543 14.057C228.914 13.943 0 242.743 0 525.143 0 748.457 143.2 938.286 342.629 1008c26.857 6.743 22.742-12.343 22.742-25.371v-88.572C210.286 912.23 204 809.6 193.6 792.457c-21.029-35.886-70.743-45.028-55.886-62.171 35.315-18.172 71.315 4.571 113.029 66.171 30.171 44.686 89.028 37.143 118.857 29.714 6.514-26.857 20.457-50.857 39.657-69.485C248.571 727.886 181.6 629.829 181.6 513.257c0-56.571 18.629-108.571 55.2-150.514-23.314-69.143 2.171-128.343 5.6-137.143 66.4-5.943 135.429 47.543 140.8 51.771C420.914 267.2 464 261.83 512.229 261.83c48.457 0 91.657 5.6 129.714 15.885 12.914-9.828 76.914-55.771 138.628-50.171 3.315 8.8 28.229 66.628 6.286 134.857 37.029 42.057 55.886 94.514 55.886 151.2 0 116.8-67.429 214.971-228.572 243.314a145.714 145.714 0 0 1 43.543 104v128.572c.915 10.285 0 20.457 17.143 20.457 202.4-68.229 348.114-259.429 348.114-484.686 0-282.514-229.028-511.2-511.428-511.2z" /></symbol><symbol viewBox="0 0 24 24" fill="none"  id="icon-globe"><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" fill="rgba(0,0,0,0)" d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" fill="rgba(0,0,0,0)" d="M12 2c13 11 0 20 0 20-13-11 0-20 0-20Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" d="M2 12h20M5 5s6.1 4 14 0M19 18.8s-6.1-4-14 0" /></symbol><symbol  viewBox="0 0 24 24" id="icon-go-back"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M6 12h12M12 6l-6 6 6 6" /></symbol><symbol  viewBox="0 0 24 24" id="icon-hot"><path d="M12 22c-2.72 0-7.43-2.67-7.95-7.01-.36-3.04 1.46-5.39 1.96-6 .41 2.11 1.52 3.71 2.94 4 .26.05.59.07.98 0-.11-2.32.07-6.66 2.93-9.99.31-.37.8-.7 1.14-1 .24 2.64.98 4.12 1.8 5 1.11 1.19 2.79 2 3.68 4.28.04.09.15.37.24.72.62 2.38.32 5.88-1.96 7.99C15.85 21.76 13.35 22 13 22h-1Z" /><path d="M14 16a4.023 4.023 0 0 1-4 1c1.13 1.09 2.7 1.5 4 1 2.01-.76 2.83-3.46 2-5-.26-.47-.64-.79-1-1 .43 1.41.04 2.96-1 4Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M14 16a4.023 4.023 0 0 1-4 1c1.13 1.09 2.7 1.5 4 1 2.01-.76 2.83-3.46 2-5-.26-.47-.64-.79-1-1 .43 1.41.04 2.96-1 4Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-nav-home"><path d="M21 10H3v12h18V10Z" /><path d="M17 14h-4v8h4v-8ZM2 10h7l6-8H8l-6 8Z" /><path d="M9 10h13l-7-8-6 8Z" /><path stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 22v-8h-4v8" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="m15 2-6 8" /><path stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 22V10" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 10h20" /></symbol><symbol  viewBox="0 0 24 24" id="icon-nav-menu"><path d="M6.515 4.121A2 2 0 0 0 5 6.061v.745a2 2 0 0 1 2.283-1.98L17 6.214V4.062a2 2 0 0 0-2.485-1.94l-8 2Z" clip-rule="evenodd" fill-rule="evenodd" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M5 6.806a2 2 0 0 1 2.283-1.98L17 6.214" /><path d="M5 6.806a2 2 0 0 1 2.283-1.98l10 1.429A2 2 0 0 1 19 8.235v11.959a2 2 0 0 1-2.283 1.98l-10-1.429A2 2 0 0 1 5 18.765V6.806Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="m9 10 6 1M9 14l6 1" /></symbol><symbol  viewBox="0 0 24 24" id="icon-nav-search"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="m16 15.288-.707.707 6.003 6.003.707-.707L16 15.288Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-people"><path d="M12.12 15.47c.5-1.99 2.5-3.47 4.88-3.47 2.76 0 5 1.99 5 4.44-1.97.45-3.69.56-5 .56-1.45 0-2.73-.14-3.8-.32-.29-.45-.65-.86-1.08-1.21ZM17 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /><path d="M14 19.33c-2.36.54-4.43.67-6 .67-2.43 0-4.48-.32-6-.67C2 16.39 4.69 14 8 14s6 2.39 6 5.33ZM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-pin"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" d="M11 11h2v8l-1 3-1-3v-8ZM17 2H7l2.5 2.5v2l-.599.171A4 4 0 0 0 6 10.517V11h12v-.483a4 4 0 0 0-2.901-3.846L14.5 6.5v-2L17 2Z" /></symbol><symbol class="icon" viewBox="0 0 1025 1024"  id="icon-qq"><path d="M879.243 586.81c-16.323-43.266-79.32-141.551-80.064-190.941h-.374c.125-2.628.374-5.254.374-7.877 0-179.445-128.665-324.87-287.365-324.87-158.765 0-287.369 145.425-287.369 324.87 0 2.623.252 5.249.312 7.877h-.312c-.743 49.39-63.677 147.675-80.063 190.941-16.387 43.392-20.484 87.156-12.912 121.922 7.573 34.635 13.779 56.144 20.98 62.896 7.137 6.877 13.964 14.13 35.627-1.125 17.377-14.382 36.368-43.641 36.368-43.641s15.705 45.39 50.77 80.03c-27.497 13.003-67.278 41.89-70.134 60.771-2.73 18.76 41.708 90.159 146.103 91.784 104.396 1.5 139.09-43.642 142.507-47.144 9.742-10.253 18.122-16.504 18.122-16.504s8.44 6.25 18.123 16.504c3.411 3.502 38.106 48.644 142.504 47.144 104.392-1.626 148.832-73.025 146.04-91.784-2.794-18.88-42.639-47.768-70.073-60.77 35.003-34.641 50.771-80.031 50.771-80.031s18.993 29.26 36.372 43.64c21.598 15.256 28.424 8.002 35.623 1.126 7.201-6.752 13.347-28.26 20.979-62.896 7.574-34.766 3.418-78.53-12.909-121.922z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-quote"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10c1.8 0 3.5-.5 5-1.4l5 1.4-1.3-5c.8-1.5 1.3-3.2 1.3-5Z" /><path d="M15.97 11.5h.07c1.08 0 1.96.88 1.96 1.97v.06c0 1.09-.88 1.97-1.97 1.97h-.07c-1.08 0-1.96-.88-1.96-1.97v-.07c0-1.08.88-1.96 1.97-1.96ZM7.97 11.5h.07c1.08 0 1.96.88 1.96 1.97v.06c0 1.09-.88 1.97-1.97 1.97h-.06C6.88 15.5 6 14.62 6 13.53v-.07c0-1.08.88-1.96 1.97-1.96Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M17 8.5c-1.77.47-2.93 2.34-2.99 4.77-.01.06-.01.13-.01.2v.03M9 8.5c-1.77.47-2.93 2.34-2.99 4.77-.01.06-.01.13-.01.2v.03" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M15.97 11.5h.07c1.08 0 1.96.88 1.96 1.97v.06c0 1.09-.88 1.97-1.97 1.97h-.07c-1.08 0-1.96-.88-1.96-1.97v-.07c0-1.08.88-1.96 1.97-1.96ZM7.97 11.5h.07c1.08 0 1.96.88 1.96 1.97v.06c0 1.09-.88 1.97-1.97 1.97h-.06C6.88 15.5 6 14.62 6 13.53v-.07c0-1.08.88-1.96 1.97-1.96Z" /></symbol><symbol viewBox="0 0 24 24"  id="icon-search"><path stroke-linejoin="round" stroke-linecap="round" d="m16 15.288-.707.707 6.003 6.003.707-.707L16 15.288Z" /><path stroke-linejoin="round" stroke-linecap="round" fill="rgba(0,0,0,0)" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-stackoverflow"><path d="M709.4 622 318 539.4 301.6 618 693 700zm102-174-307-256.6-51 61.6 307 256.6zM749 527.4 386.4 358 353 431l362.4 169zM652 64l-64 48 238.6 320.6 64-48zm41 656H293v79.4h400zm79.4 160h-559V640h-80v320h719V640h-80z" /></symbol><symbol  viewBox="0 0 24 24" id="icon-tag"><path d="M21.41 3.5c-.04-.48-.42-.86-.91-.91L14.02 2a.99.99 0 0 0-.8.29l-7.2 7.2 4.05-4.05-7.78 7.78a.996.996 0 0 0 0 1.41l7.07 7.07c.39.39 1.03.39 1.41 0l7.78-7.78-4.05 4.05 7.2-7.2c.21-.21.32-.5.29-.8l-.58-6.47Z" /><path d="M17.414 9.414c.812-.812.838-2.104.057-2.885-.781-.78-2.073-.755-2.885.057-.813.812-.838 2.104-.057 2.885.781.78 2.073.756 2.885-.057Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M17.414 9.414c.812-.812.838-2.104.057-2.885-.781-.78-2.073-.755-2.885.057-.813.812-.838 2.104-.057 2.885.781.78 2.073.756 2.885-.057Z" /></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-text-outline"><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M16 22H8h4V2" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M2 6V2h20v4" /></symbol><symbol  viewBox="0 0 24 24" id="icon-text"><path d="M12 1a1 1 0 0 1 1 1v19h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V2a1 1 0 0 1 1-1Z" clip-rule="evenodd" fill-rule="evenodd" /><path d="M1 2a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V3H3v3a1 1 0 0 1-2 0V2Z" clip-rule="evenodd" fill-rule="evenodd" /></symbol><symbol  viewBox="0 0 24 24" id="icon-toc"><path d="m22 19-10 2V5l10-2v16Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="m15 13 4-1M15 9l4-1" /><path d="m2 19 10 2V5L2 3v16Z" /><path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M12 21V5" /><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="m5 12 4 1M5 8l4 1M5 16l4 1" /></symbol><symbol  viewBox="0 0 24 24" id="icon-twitter"><path d="M22 5.89c-.74.32-1.54.53-2.36.64.85-.5 1.5-1.29 1.8-2.23-.79.47-1.67.79-2.6.98A4.121 4.121 0 0 0 15.85 4c-2.27 0-4.1 1.81-4.1 4.04 0 .32.03.63.09.92-3.4-.17-6.42-1.77-8.45-4.22-.35.6-.56 1.29-.56 2.04 0 1.4.73 2.64 1.82 3.35a3.99 3.99 0 0 1-1.85-.5v.04c0 1.96 1.42 3.59 3.28 3.97-.33.09-.7.13-1.08.13-.26 0-.53-.01-.78-.07.53 1.6 2.04 2.78 3.83 2.81a8.28 8.28 0 0 1-6.06 1.66C3.82 19.34 5.97 20 8.29 20c7.55 0 11.67-6.15 11.67-11.49 0-.18-.01-.35-.02-.52.82-.57 1.5-1.28 2.06-2.1Z" /></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-warning"><path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M17 3H7l-5 9 5 9h10l5-9-5-9ZM12 7v6" /><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M11.99 17h.02" /></symbol><symbol class="icon" viewBox="0 0 1170 1024"  id="icon-wechat"><path d="M331.429 263.429q0-23.429-14.286-37.715t-37.714-14.285q-24.572 0-43.429 14.571t-18.857 37.429q0 22.285 18.857 36.857t43.429 14.571q23.428 0 37.714-14t14.286-37.428zM756 553.143q0-16-14.571-28.572T704 512q-15.429 0-28.286 12.857t-12.857 28.286q0 16 12.857 28.857T704 594.857q22.857 0 37.429-12.571T756 553.143zM621.143 263.429q0-23.429-14-37.715t-37.429-14.285q-24.571 0-43.428 14.571t-18.857 37.429q0 22.285 18.857 36.857t43.428 14.571q23.429 0 37.429-14t14-37.428zM984 553.143q0-16-14.857-28.572T932 512q-15.429 0-28.286 12.857t-12.857 28.286q0 16 12.857 28.857T932 594.857q22.286 0 37.143-12.571T984 553.143zM832 326.286Q814.286 324 792 324q-96.571 0-177.714 44T486.57 487.143 440 651.429q0 44.571 13.143 86.857-20 1.714-38.857 1.714-14.857 0-28.572-.857t-31.428-3.714-25.429-4-31.143-6-28.571-6L124.57 792l41.143-124.571Q0 551.429 0 387.429q0-96.572 55.714-177.715T206.571 82t207.715-46.571q100.571 0 190 37.714T754 177.429t78 148.857zm338.286 320.571q0 66.857-39.143 127.714t-106 110.572l31.428 103.428-113.714-62.285q-85.714 21.143-124.571 21.143-96.572 0-177.715-40.286T512.857 797.714t-46.571-150.857T512.857 496t127.714-109.429 177.715-40.285q92 0 173.143 40.285t130 109.715 48.857 150.571z" /></symbol><symbol class="icon" viewBox="0 0 1025 1024"  id="icon-weibo"><path d="M690.325 102.848c-13.802 2.453-44.629 14.293-44.885 39.808-.256 25.493 27.05 42.133 40.832 43.413 50.88 0 294.208-13.205 249.707 221.568-6.166 25.75-10.88 65.174 19.669 73.472 27.755 6.976 44.885-22.016 52.587-44.096 3.69-25.685 116.224-362.154-317.91-334.165zM753.621 495.787s-51.008 11.029-26.88-26.923c37.888-74.219-23.786-196.01-183.658-115.072-55.083 29.355-55.083 8.555-53.248-28.16 4.949-200.47-366.635-57.536-471.915 203.115C-41.43 686.912 53.632 823.552 200.683 883.2c358.933 128.128 620.266-83.904 664.81-220.95 59.414-205.93-111.872-166.463-111.872-166.463zM409.43 835.797C239.531 859.136 88.94 784.47 73.003 669.12c-15.851-115.413 108.992-227.947 278.89-251.285 169.899-23.36 320.47 51.242 336.406 166.656 15.872 115.392-109.014 227.84-278.87 251.306z" /><path d="M834.624 435.35c17.088 4.266 23.744-9.75 25.621-22.55 1.75-12.8 31.254-186.325-158.25-166.315-14.336 1.579-24 10.155-22.336 22.742 1.578 12.608 12.202 19.669 20.288 18.709 8.085-.939 134.656-23.125 124.288 110.25 1.898 12.14-6.635 32.897 10.389 37.163zM354.07 498.624c-88.555 16.981-149.462 87.744-135.98 158.08 13.483 70.336 96.257 113.536 184.854 96.533 88.576-16.96 149.419-87.744 135.979-158.037-13.547-70.315-96.256-113.557-184.854-96.576zm-10.518 189.76c-30.592 0-55.403-21.013-55.403-47.125 0-26.006 24.811-47.126 55.403-47.126s55.381 21.12 55.381 47.126c0 26.069-24.81 47.125-55.381 47.125zm90.73-63.595c-11.413 0-23.018-13.76-23.018-30.698 0-16.918 11.605-30.635 23.019-30.635s23.061 13.717 23.061 30.635c0 16.96-11.648 30.698-23.061 30.698z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-zhifu"><path d="M572.229 189.829V844.57H640.8l28.8 81.6 121.6-81.6h150.286V189.83H572.229zm283.085 568h-68.457l-85.828 57.6-20.343-57.6h-20.572V279.2H855.2v478.629zm-327.2-274.515H376.343c2.4-51.314 4.914-119.2 7.543-197.6h149.6l-.115-9.257c0-.686-.228-16.8-2.628-33.257-2.4-17.143-7.543-39.886-24-39.886H255.77c5.029-23.543 17.943-79.657 33.6-107.2l7.315-12.8-14.743-.8c-.914 0-22.4-1.028-47.314 12.115-40.8 21.714-59.086 64.457-67.086 96.457-21.029 83.543-50.972 141.6-63.657 166.4-3.772 7.314-6.057 11.657-7.086 14.628-2.057 5.6-.914 11.2 3.2 14.857 12 10.858 43.657-3.314 44-3.428.686-.343 1.486-.686 2.514-1.143 15.886-7.2 62.972-28.571 79.772-96.571h64.8c.8 36.8 3.543 158.171 3.314 197.6H133.257l-2.4 1.714c-26.4 19.314-34.857 72.228-35.2 74.514l-1.6 10.514h190.857c-14.057 89.486-30.285 129.6-38.857 145.6-4.228 8-8.343 16-12.228 23.772-24.343 48.228-49.6 98.057-144.343 175.543-4.115 3.2-8 9.143-5.486 15.657 2.743 7.2 10.629 10.4 28.114 10.4 6.172 0 13.486-.343 22.172-1.143 57.028-5.029 115.2-20.571 154.4-100.114 19.428-40.115 36.228-81.943 50.171-124.457l156 182.857 5.714-13.715c.915-2.171 21.715-52.914 5.829-109.6l-.571-2.057-123.543-140.571-25.143 18.971c7.314-29.828 12.114-57.028 14.286-81.257H552.8v-9.143c0-45.828-21.143-73.028-21.943-74.171l-2.743-3.429z" /></symbol>', t.insertBefore(n, t.lastChild)
    };
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e()
}
const no = "var(--skeleton-bg, #eeeeee)", Q1 = "var(--skeleton-hl, #f5f5f5)", e0 = {
    backgroundColor: no, backgroundImage: `linear-gradient(
    90deg,
    ${no},
    ${Q1},
    ${no}
  )`, animation: "", height: "inherit", width: "inherit", borderRadius: "3px", content: '"&zwnj;"'
}, cc = Ce({
    name: "ObSkeletonTheme",
    props: {
        color: {type: String, default: no},
        highlight: {type: String, default: Q1},
        duration: {type: Number, default: 1.5},
        tag: {type: String, default: "div"},
        loading: Boolean
    },
    provide() {
        return {_themeStyle: this.themeStyle, _skeletonTheme: this}
    },
    setup() {
        return {themeStyle: {...e0}}
    },
    render() {
        const {color: e, highlight: t, duration: n} = this;
        return this.themeStyle.backgroundColor = e, this.themeStyle.backgroundImage = `linear-gradient(
      90deg,
      ${e},
      ${t},
      ${e}
    )`, n ? this.themeStyle.animation = `SkeletonLoading ${n}s ease-in-out infinite` : (this.themeStyle.animation = "", this.themeStyle.backgroundImage = ""), this.tag ? zt(this.tag, this.$slots.default) : this.$slots.default
    }
}), F9 = e => {
    if (!e) return !0;
    const t = e()[0];
    console.log("firstNode", t);
    let n = t.text;
    return n && (n = n.replace(/(\n|\r\n|\s)/g, "")), typeof t.tag > "u" && !n
}, uc = Ce({
    name: "ObSkeleton",
    props: {
        prefix: {type: String, default: "ob"},
        count: {type: Number, default: 1},
        duration: {type: Number, default: 1.5},
        tag: {type: String, default: "span"},
        width: [String, Number],
        height: [String, Number],
        circle: Boolean,
        loading: Boolean,
        class: String
    },
    setup(e, {slots: t}) {
        const n = it("_themeStyle", e0), s = it("_skeletonTheme", {loading: !1});
        let o = ht(e).loading;
        return {
            themeStyle: n,
            theme: s,
            slots: t,
            isLoading: Q(() => typeof o === void 0 ? typeof s.loading !== void 0 ? s.loading : o : F9(t.default))
        }
    },
    render() {
        const {width: e, height: t, duration: n, prefix: s, circle: o, count: r, tag: i, isLoading: a, slots: l} = this,
            c = this.class ? this.class.split(" ") : [], u = [`${s}-skeleton`, ...c], h = [], p = {...this.themeStyle};
        n ? p.animation = `SkeletonLoading ${n}s ease-in-out infinite` : p.backgroundImage = "", e && (p.width = String(e)), t && (p.height = String(t)), o && (p.borderRadius = "50%");
        for (let w = 0; w < r; w += 1) h.push(zt(i, {key: w, class: u, style: p}, ""));
        return i ? a ? h : zt(i, l.default) : a ? zt(i, h) : l.default
    }
});
const x9 = e => {
    e.component(uc.name, uc), e.component(cc.name, cc)
};
var t0 = {exports: {}};
(function (e, t) {
    (function (n, s) {
        e.exports = s()
    })(self, function () {
        return (() => {
            var n = {
                d: (m, P) => {
                    for (var x in P) n.o(P, x) && !n.o(m, x) && Object.defineProperty(m, x, {enumerable: !0, get: P[x]})
                }, o: (m, P) => Object.prototype.hasOwnProperty.call(m, P), r: m => {
                    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(m, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(m, "__esModule", {value: !0})
                }
            }, s = {};

            function o(m, P = null) {
                let x = 0;
                do {
                    isNaN(m.offsetTop) || (x += m.offsetTop);
                    const G = m.offsetParent;
                    if (G === null) break;
                    m = G
                } while (m && m !== P);
                return x
            }

            function r(m) {
                return m.getAttribute("data-scroll-spy-id") || m.getAttribute("scroll-spy-id") || m.getAttribute("id") || "default"
            }

            function i(m) {
                return !!m.getAttribute("data-scroll-spy-id") || !!m.getAttribute("scroll-spy-id")
            }

            function a(m) {
                do {
                    if (i(m)) return r(m);
                    m = m.parentElement
                } while (m);
                return "default"
            }

            n.r(s), n.d(s, {Easing: () => ie, registerScrollSpy: () => se});
            var l, c = {
                    Linear: {
                        None: function (m) {
                            return m
                        }
                    }, Quadratic: {
                        In: function (m) {
                            return m * m
                        }, Out: function (m) {
                            return m * (2 - m)
                        }, InOut: function (m) {
                            return (m *= 2) < 1 ? .5 * m * m : -.5 * (--m * (m - 2) - 1)
                        }
                    }, Cubic: {
                        In: function (m) {
                            return m * m * m
                        }, Out: function (m) {
                            return --m * m * m + 1
                        }, InOut: function (m) {
                            return (m *= 2) < 1 ? .5 * m * m * m : .5 * ((m -= 2) * m * m + 2)
                        }
                    }, Quartic: {
                        In: function (m) {
                            return m * m * m * m
                        }, Out: function (m) {
                            return 1 - --m * m * m * m
                        }, InOut: function (m) {
                            return (m *= 2) < 1 ? .5 * m * m * m * m : -.5 * ((m -= 2) * m * m * m - 2)
                        }
                    }, Quintic: {
                        In: function (m) {
                            return m * m * m * m * m
                        }, Out: function (m) {
                            return --m * m * m * m * m + 1
                        }, InOut: function (m) {
                            return (m *= 2) < 1 ? .5 * m * m * m * m * m : .5 * ((m -= 2) * m * m * m * m + 2)
                        }
                    }, Sinusoidal: {
                        In: function (m) {
                            return 1 - Math.cos(m * Math.PI / 2)
                        }, Out: function (m) {
                            return Math.sin(m * Math.PI / 2)
                        }, InOut: function (m) {
                            return .5 * (1 - Math.cos(Math.PI * m))
                        }
                    }, Exponential: {
                        In: function (m) {
                            return m === 0 ? 0 : Math.pow(1024, m - 1)
                        }, Out: function (m) {
                            return m === 1 ? 1 : 1 - Math.pow(2, -10 * m)
                        }, InOut: function (m) {
                            return m === 0 ? 0 : m === 1 ? 1 : (m *= 2) < 1 ? .5 * Math.pow(1024, m - 1) : .5 * (2 - Math.pow(2, -10 * (m - 1)))
                        }
                    }, Circular: {
                        In: function (m) {
                            return 1 - Math.sqrt(1 - m * m)
                        }, Out: function (m) {
                            return Math.sqrt(1 - --m * m)
                        }, InOut: function (m) {
                            return (m *= 2) < 1 ? -.5 * (Math.sqrt(1 - m * m) - 1) : .5 * (Math.sqrt(1 - (m -= 2) * m) + 1)
                        }
                    }, Elastic: {
                        In: function (m) {
                            return m === 0 ? 0 : m === 1 ? 1 : -Math.pow(2, 10 * (m - 1)) * Math.sin(5 * (m - 1.1) * Math.PI)
                        }, Out: function (m) {
                            return m === 0 ? 0 : m === 1 ? 1 : Math.pow(2, -10 * m) * Math.sin(5 * (m - .1) * Math.PI) + 1
                        }, InOut: function (m) {
                            return m === 0 ? 0 : m === 1 ? 1 : (m *= 2) < 1 ? -.5 * Math.pow(2, 10 * (m - 1)) * Math.sin(5 * (m - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (m - 1)) * Math.sin(5 * (m - 1.1) * Math.PI) + 1
                        }
                    }, Back: {
                        In: function (m) {
                            var P = 1.70158;
                            return m * m * ((P + 1) * m - P)
                        }, Out: function (m) {
                            var P = 1.70158;
                            return --m * m * ((P + 1) * m + P) + 1
                        }, InOut: function (m) {
                            var P = 2.5949095;
                            return (m *= 2) < 1 ? m * m * ((P + 1) * m - P) * .5 : .5 * ((m -= 2) * m * ((P + 1) * m + P) + 2)
                        }
                    }, Bounce: {
                        In: function (m) {
                            return 1 - c.Bounce.Out(1 - m)
                        }, Out: function (m) {
                            return m < 1 / 2.75 ? 7.5625 * m * m : m < 2 / 2.75 ? 7.5625 * (m -= 1.5 / 2.75) * m + .75 : m < 2.5 / 2.75 ? 7.5625 * (m -= 2.25 / 2.75) * m + .9375 : 7.5625 * (m -= 2.625 / 2.75) * m + .984375
                        }, InOut: function (m) {
                            return m < .5 ? .5 * c.Bounce.In(2 * m) : .5 * c.Bounce.Out(2 * m - 1) + .5
                        }
                    }
                }, u = typeof self > "u" && typeof process < "u" && process.hrtime ? function () {
                    var m = process.hrtime();
                    return 1e3 * m[0] + m[1] / 1e6
                } : typeof self < "u" && self.performance !== void 0 && self.performance.now !== void 0 ? self.performance.now.bind(self.performance) : Date.now !== void 0 ? Date.now : function () {
                    return new Date().getTime()
                }, h = function () {
                    function m() {
                        this._tweens = {}, this._tweensAddedDuringUpdate = {}
                    }

                    return m.prototype.getAll = function () {
                        var P = this;
                        return Object.keys(this._tweens).map(function (x) {
                            return P._tweens[x]
                        })
                    }, m.prototype.removeAll = function () {
                        this._tweens = {}
                    }, m.prototype.add = function (P) {
                        this._tweens[P.getId()] = P, this._tweensAddedDuringUpdate[P.getId()] = P
                    }, m.prototype.remove = function (P) {
                        delete this._tweens[P.getId()], delete this._tweensAddedDuringUpdate[P.getId()]
                    }, m.prototype.update = function (P, x) {
                        P === void 0 && (P = u()), x === void 0 && (x = !1);
                        var G = Object.keys(this._tweens);
                        if (G.length === 0) return !1;
                        for (; G.length > 0;) {
                            this._tweensAddedDuringUpdate = {};
                            for (var W = 0; W < G.length; W++) {
                                var te = this._tweens[G[W]], de = !x;
                                te && te.update(P, de) === !1 && !x && delete this._tweens[G[W]]
                            }
                            G = Object.keys(this._tweensAddedDuringUpdate)
                        }
                        return !0
                    }, m
                }(), p = {
                    Linear: function (m, P) {
                        var x = m.length - 1, G = x * P, W = Math.floor(G), te = p.Utils.Linear;
                        return P < 0 ? te(m[0], m[1], G) : P > 1 ? te(m[x], m[x - 1], x - G) : te(m[W], m[W + 1 > x ? x : W + 1], G - W)
                    }, Bezier: function (m, P) {
                        for (var x = 0, G = m.length - 1, W = Math.pow, te = p.Utils.Bernstein, de = 0; de <= G; de++) x += W(1 - P, G - de) * W(P, de) * m[de] * te(G, de);
                        return x
                    }, CatmullRom: function (m, P) {
                        var x = m.length - 1, G = x * P, W = Math.floor(G), te = p.Utils.CatmullRom;
                        return m[0] === m[x] ? (P < 0 && (W = Math.floor(G = x * (1 + P))), te(m[(W - 1 + x) % x], m[W], m[(W + 1) % x], m[(W + 2) % x], G - W)) : P < 0 ? m[0] - (te(m[0], m[0], m[1], m[1], -G) - m[0]) : P > 1 ? m[x] - (te(m[x], m[x], m[x - 1], m[x - 1], G - x) - m[x]) : te(m[W ? W - 1 : 0], m[W], m[x < W + 1 ? x : W + 1], m[x < W + 2 ? x : W + 2], G - W)
                    }, Utils: {
                        Linear: function (m, P, x) {
                            return (P - m) * x + m
                        }, Bernstein: function (m, P) {
                            var x = p.Utils.Factorial;
                            return x(m) / x(P) / x(m - P)
                        }, Factorial: (l = [1], function (m) {
                            var P = 1;
                            if (l[m]) return l[m];
                            for (var x = m; x > 1; x--) P *= x;
                            return l[m] = P, P
                        }), CatmullRom: function (m, P, x, G, W) {
                            var te = .5 * (x - m), de = .5 * (G - P), me = W * W;
                            return (2 * P - 2 * x + te + de) * (W * me) + (-3 * P + 3 * x - 2 * te - de) * me + te * W + P
                        }
                    }
                }, w = function () {
                    function m() {
                    }

                    return m.nextId = function () {
                        return m._nextId++
                    }, m._nextId = 0, m
                }(), g = new h, C = function () {
                    function m(P, x) {
                        x === void 0 && (x = g), this._object = P, this._group = x, this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = c.Linear.None, this._interpolationFunction = p.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._id = w.nextId(), this._isChainStopped = !1, this._goToEnd = !1
                    }

                    return m.prototype.getId = function () {
                        return this._id
                    }, m.prototype.isPlaying = function () {
                        return this._isPlaying
                    }, m.prototype.isPaused = function () {
                        return this._isPaused
                    }, m.prototype.to = function (P, x) {
                        return this._valuesEnd = Object.create(P), x !== void 0 && (this._duration = x), this
                    }, m.prototype.duration = function (P) {
                        return this._duration = P, this
                    }, m.prototype.start = function (P) {
                        if (this._isPlaying) return this;
                        if (this._group && this._group.add(this), this._repeat = this._initialRepeat, this._reversed) for (var x in this._reversed = !1, this._valuesStartRepeat) this._swapEndStartRepeatValues(x), this._valuesStart[x] = this._valuesStartRepeat[x];
                        return this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = P !== void 0 ? typeof P == "string" ? u() + parseFloat(P) : P : u(), this._startTime += this._delayTime, this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat), this
                    }, m.prototype._setupProperties = function (P, x, G, W) {
                        for (var te in G) {
                            var de = P[te], me = Array.isArray(de), $e = me ? "array" : typeof de,
                                Oe = !me && Array.isArray(G[te]);
                            if ($e !== "undefined" && $e !== "function") {
                                if (Oe) {
                                    var Ye = G[te];
                                    if (Ye.length === 0) continue;
                                    Ye = Ye.map(this._handleRelativeValue.bind(this, de)), G[te] = [de].concat(Ye)
                                }
                                if ($e !== "object" && !me || !de || Oe) x[te] === void 0 && (x[te] = de), me || (x[te] *= 1), W[te] = Oe ? G[te].slice().reverse() : x[te] || 0; else {
                                    for (var Xe in x[te] = me ? [] : {}, de) x[te][Xe] = de[Xe];
                                    W[te] = me ? [] : {}, this._setupProperties(de, x[te], G[te], W[te])
                                }
                            }
                        }
                    }, m.prototype.stop = function () {
                        return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._group && this._group.remove(this), this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this
                    }, m.prototype.end = function () {
                        return this._goToEnd = !0, this.update(1 / 0), this
                    }, m.prototype.pause = function (P) {
                        return P === void 0 && (P = u()), this._isPaused || !this._isPlaying || (this._isPaused = !0, this._pauseStart = P, this._group && this._group.remove(this)), this
                    }, m.prototype.resume = function (P) {
                        return P === void 0 && (P = u()), this._isPaused && this._isPlaying ? (this._isPaused = !1, this._startTime += P - this._pauseStart, this._pauseStart = 0, this._group && this._group.add(this), this) : this
                    }, m.prototype.stopChainedTweens = function () {
                        for (var P = 0, x = this._chainedTweens.length; P < x; P++) this._chainedTweens[P].stop();
                        return this
                    }, m.prototype.group = function (P) {
                        return this._group = P, this
                    }, m.prototype.delay = function (P) {
                        return this._delayTime = P, this
                    }, m.prototype.repeat = function (P) {
                        return this._initialRepeat = P, this._repeat = P, this
                    }, m.prototype.repeatDelay = function (P) {
                        return this._repeatDelayTime = P, this
                    }, m.prototype.yoyo = function (P) {
                        return this._yoyo = P, this
                    }, m.prototype.easing = function (P) {
                        return this._easingFunction = P, this
                    }, m.prototype.interpolation = function (P) {
                        return this._interpolationFunction = P, this
                    }, m.prototype.chain = function () {
                        for (var P = [], x = 0; x < arguments.length; x++) P[x] = arguments[x];
                        return this._chainedTweens = P, this
                    }, m.prototype.onStart = function (P) {
                        return this._onStartCallback = P, this
                    }, m.prototype.onUpdate = function (P) {
                        return this._onUpdateCallback = P, this
                    }, m.prototype.onRepeat = function (P) {
                        return this._onRepeatCallback = P, this
                    }, m.prototype.onComplete = function (P) {
                        return this._onCompleteCallback = P, this
                    }, m.prototype.onStop = function (P) {
                        return this._onStopCallback = P, this
                    }, m.prototype.update = function (P, x) {
                        if (P === void 0 && (P = u()), x === void 0 && (x = !0), this._isPaused) return !0;
                        var G, W, te = this._startTime + this._duration;
                        if (!this._goToEnd && !this._isPlaying) {
                            if (P > te) return !1;
                            x && this.start(P)
                        }
                        if (this._goToEnd = !1, P < this._startTime) return !0;
                        this._onStartCallbackFired === !1 && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), W = (P - this._startTime) / this._duration, W = this._duration === 0 || W > 1 ? 1 : W;
                        var de = this._easingFunction(W);
                        if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, de), this._onUpdateCallback && this._onUpdateCallback(this._object, W), W === 1) {
                            if (this._repeat > 0) {
                                for (G in isFinite(this._repeat) && this._repeat--, this._valuesStartRepeat) this._yoyo || typeof this._valuesEnd[G] != "string" || (this._valuesStartRepeat[G] = this._valuesStartRepeat[G] + parseFloat(this._valuesEnd[G])), this._yoyo && this._swapEndStartRepeatValues(G), this._valuesStart[G] = this._valuesStartRepeat[G];
                                return this._yoyo && (this._reversed = !this._reversed), this._repeatDelayTime !== void 0 ? this._startTime = P + this._repeatDelayTime : this._startTime = P + this._delayTime, this._onRepeatCallback && this._onRepeatCallback(this._object), !0
                            }
                            this._onCompleteCallback && this._onCompleteCallback(this._object);
                            for (var me = 0, $e = this._chainedTweens.length; me < $e; me++) this._chainedTweens[me].start(this._startTime + this._duration);
                            return this._isPlaying = !1, !1
                        }
                        return !0
                    }, m.prototype._updateProperties = function (P, x, G, W) {
                        for (var te in G) if (x[te] !== void 0) {
                            var de = x[te] || 0, me = G[te], $e = Array.isArray(P[te]), Oe = Array.isArray(me);
                            !$e && Oe ? P[te] = this._interpolationFunction(me, W) : typeof me == "object" && me ? this._updateProperties(P[te], de, me, W) : typeof (me = this._handleRelativeValue(de, me)) == "number" && (P[te] = de + (me - de) * W)
                        }
                    }, m.prototype._handleRelativeValue = function (P, x) {
                        return typeof x != "string" ? x : x.charAt(0) === "+" || x.charAt(0) === "-" ? P + parseFloat(x) : parseFloat(x)
                    }, m.prototype._swapEndStartRepeatValues = function (P) {
                        var x = this._valuesStartRepeat[P], G = this._valuesEnd[P];
                        this._valuesStartRepeat[P] = typeof G == "string" ? this._valuesStartRepeat[P] + parseFloat(G) : this._valuesEnd[P], this._valuesEnd[P] = x
                    }, m
                }(), A = w.nextId, v = g, M = v.getAll.bind(v), R = v.removeAll.bind(v), S = v.add.bind(v),
                I = v.remove.bind(v), V = v.update.bind(v);
            const K = {
                Easing: c,
                Group: h,
                Interpolation: p,
                now: u,
                Sequence: w,
                nextId: A,
                Tween: C,
                VERSION: "18.6.4",
                getAll: M,
                removeAll: R,
                add: S,
                remove: I,
                update: V
            }, D = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (m) {
                window.setTimeout(m, 1e3 / 60)
            };

            function X() {
                K.update() && D(X)
            }

            D(X);
            const ie = K.Easing, ue = {
                allowNoActive: !1,
                sectionSelector: null,
                offset: 0,
                time: 500,
                steps: 30,
                easing: null,
                active: {selector: null, class: "active"},
                link: {selector: "a"}
            }, se = (m, P) => {
                const x = Object.assign({}, ue, P || {}), G = {};
                Object.defineProperty(G, "scrollTop", {
                    get: () => document.body.scrollTop || document.documentElement.scrollTop,
                    set(Z) {
                        document.body.scrollTop = Z, document.documentElement.scrollTop = Z
                    }
                }), Object.defineProperty(G, "scrollHeight", {get: () => document.body.scrollHeight || document.documentElement.scrollHeight}), Object.defineProperty(G, "offsetHeight", {get: () => window.innerHeight});
                const W = "@@scrollSpyContext", te = {}, de = {}, me = {}, $e = {}, Oe = {};

                function Ye(Z, re, y) {
                    y.preventDefault(), bt(te[re], Z)
                }

                function Xe(Z, re) {
                    const y = r(Z), f = ne(Z, re);
                    for (let d = 0; d < f.length; d++) {
                        const b = f[d], O = Ye.bind(null, d, y);
                        b[W].click || (b.addEventListener("click", O), b[W].click = O)
                    }
                }

                function bt(Z, re) {
                    const y = r(Z), f = de[y], {scrollEl: d, options: b} = Z[W], O = d.scrollTop;
                    if (f[re]) {
                        const $ = o(f[re]) - b.offset;
                        if (b.easing) return void function (B, z, J, H, L) {
                            new K.Tween({postion: z}).to({postion: J}, H).easing(L || ie.Cubic.In).onUpdate(function (F) {
                                B.scrollTop = F.postion
                            }).start(), X()
                        }(d, O, $, b.time, b.easing);
                        if (window.navigator.userAgent.indexOf("MSIE ") > 0) {
                            const B = b.time, z = b.steps, J = parseInt(B) / parseInt(z), H = $ - O;
                            for (let L = 0; L <= z; L++) {
                                const F = O + H / z * L;
                                setTimeout(() => {
                                    d.scrollTop = F
                                }, J * L)
                            }
                            return
                        }
                        window.scrollTo({top: $, behavior: "smooth"})
                    }
                }

                function De(Z, re) {
                    const y = r(Z), f = Object.assign({}, x, {
                        active: {
                            selector: re.value && re.value.selector ? re.value.selector : x.active.selector,
                            class: re.value && re.value.class ? re.value.class : x.active.class
                        }
                    }), d = [...ne(Z, f.active.selector)];
                    $e[y] = d.map(b => (b[W].options = f, b))
                }

                function j(Z, re) {
                    const y = r(Z), f = Z[W], d = ne(Z, re);
                    de[y] = d, d[0] && d[0] instanceof HTMLElement && d[0].offsetParent !== Z && (f.eventEl = window, f.scrollEl = G)
                }

                function ne(Z, re) {
                    if (!re) return [...Z.children].map(d => ee(d));
                    const y = r(Z), f = [];
                    for (const d of Z.querySelectorAll(re)) a(d) === y && f.push(ee(d));
                    return f
                }

                function ee(Z) {
                    return Z[W] = {
                        onScroll: () => {
                        }, options: x, id: "", eventEl: Z, scrollEl: Z
                    }, Z
                }

                m.directive("scroll-spy", {
                    created(Z, re) {
                        const y = r(Z);
                        Z[W] = {
                            onScroll: () => {
                                const f = r(Z), d = de[f], {scrollEl: b, options: O} = Z[W];
                                let $;
                                if (b.offsetHeight + b.scrollTop >= b.scrollHeight - 10) $ = d.length; else for ($ = 0; $ < d.length && !(o(d[$], b) - O.offset > b.scrollTop); $++) ;
                                if ($--, $ < 0) $ = O.allowNoActive ? null : 0; else if (O.allowNoActive && $ >= d.length - 1) {
                                    const B = d[$];
                                    B instanceof HTMLElement && o(d[$]) + B.offsetHeight < b.scrollTop && ($ = null)
                                }
                                if (!O.allowNoActive && $ === 0 || $ !== Oe[f]) {
                                    let B = me[f];
                                    B && (B.classList.remove(B[W].options.active.class), delete me[f]);
                                    const z = Oe[f] = $;
                                    Oe !== void 0 && Object.keys($e).length > 0 && z !== null && (B = $e[f][z], me[f] = B, B && B.classList.add(B[W].options.active.class))
                                }
                            }, options: Object.assign({}, x, re.value), id: r(Z), eventEl: Z, scrollEl: Z
                        }, te[y] = Z, delete Oe[y]
                    }, mounted(Z) {
                        const {options: {sectionSelector: re}} = Z[W];
                        j(Z, re);
                        const {eventEl: y, onScroll: f} = Z[W];
                        y.addEventListener("scroll", f), f()
                    }, updated(Z, re) {
                        Z[W].options = Object.assign({}, x, re.value);
                        const {onScroll: y, options: {sectionSelector: f}} = Z[W];
                        j(Z, f), y()
                    }, unmounted(Z) {
                        const {eventEl: re, onScroll: y} = Z[W];
                        re.removeEventListener("scroll", y)
                    }
                }), m.directive("scroll-spy-active", {
                    created: De,
                    updated: De
                }), m.directive("scroll-spy-link", {
                    mounted: function (Z, re) {
                        Xe(Z, Object.assign({}, x.link, re.value).selector)
                    }, updated: function (Z, re) {
                        Xe(Z, Object.assign({}, x.link, re.value).selector)
                    }, unmounted(Z) {
                        const re = ne(Z, null);
                        for (let y = 0; y < re.length; y++) {
                            const f = re[y], d = r(Z), b = Ye.bind(null, y, d);
                            f[W].click && (f.removeEventListener("click", b), delete f[W].click)
                        }
                    }
                })
            };
            return s
        })()
    })
})(t0);
var D9 = t0.exports;
const Ui = xd(m6).use(Zd()).use(Hi).use(An).use(C9).use(N9, {loading: Ps, error: Ps});
x9(Ui);
D9.registerScrollSpy(Ui);
Ui.mount("#app");
console.log("%c Aurora is developed by TriDiamond%c", "background:#24272A; color:#73ddd7", "", "https://github.com/auroral-ui/hexo-theme-aurora");
export {
    ht as $,
    Gm as A,
    W1 as B,
    We as C,
    $g as D,
    Xg as E,
    _e as F,
    V1 as G,
    z9 as H,
    Ii as I,
    tc as J,
    ft as K,
    pn as L,
    fn as M,
    bi as N,
    o9 as O,
    u9 as P,
    Ln as Q,
    R7 as R,
    Pg as S,
    Dg as T,
    Kc as U,
    ai as V,
    di as W,
    be as X,
    Lt as Y,
    W9 as Z,
    Le as _,
    B9 as a,
    dn as a0,
    q9 as a1,
    K9 as a2,
    G9 as a3,
    qe as a4,
    Ie as a5,
    xs as a6,
    Mt as b,
    N as c,
    Ce as d,
    le as e,
    Y as f,
    k as g,
    Zo as h,
    r9 as i,
    So as j,
    Qn as k,
    Ps as l,
    ze as m,
    ui as n,
    T as o,
    ci as p,
    Ug as q,
    pe as r,
    vt as s,
    q as t,
    nt as u,
    Rg as v,
    Ne as w,
    Q as x,
    ye as y,
    Re as z
};
