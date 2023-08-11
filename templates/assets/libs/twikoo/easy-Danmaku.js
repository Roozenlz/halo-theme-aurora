class EasyDanmaku {
    constructor(t) {
        this.container = this.checkParams(t), this.wrapperStyle = t.wrapperStyle || null, this.line = t.line || 10, this.speed = t.speed || 5, this.runtime = t.runtime || 10, this.colourful = t.colourful || !1, this.loop = t.loop || !1, this.hover = t.hover || !1, this.coefficient = t.coefficient || 1.38, this.originIndex = 0, this.originList = null, this.offsetValue = this.container.offsetHeight / this.line, this.vipIndex = 0, this.overflowArr = [], this.clearIng = !1, this.cleartimer = null, this.init(), this.handleEvents(t)
    }
    handleEvents(t) {
        this.onComplete = t.onComplete || null, this.onHover = t.onHover || null
    }
    init() {
        this.runstatus = 1, this.aisle = [], this.container.style.overflow = "hidden", this.hover && this.handleMouseHover(), "relative" !== Utils.getStyle(this.container, "position") && "fixed" !== Utils.getStyle(this.container, "position") && (this.container.style.position = "relative");
        for (let t = 0; t < this.line; t++) this.aisle.push({
            normalRow: !0,
            vipRow: !0
        })
    }
    checkParams(t) {
        if (!document.querySelector(t.el)) throw `Could not find the ${t.el} element`;
        if (t.wrapperStyle && "string" != typeof t.wrapperStyle) throw "The type accepted by the wrapperStyle parameter is string";
        if (t.line && "number" != typeof t.line) throw "The type accepted by the line parameter is number";
        if (t.speed && "number" != typeof t.speed) throw "The type accepted by the speed parameter is number";
        if (t.colourful && "boolean" != typeof t.colourful) throw "The type accepted by the colourful parameter is boolean";
        if (t.runtime && "number" != typeof t.runtime) throw "The type accepted by the runtime parameter is number";
        if (t.loop && "boolean" != typeof t.loop) throw "The type accepted by the loop parameter is boolean";
        if (t.coefficient && "number" != typeof t.coefficient) throw "The type accepted by the coefficient parameter is number";
        if (t.hover && "boolean" != typeof t.hover) throw "The type accepted by the hover parameter is boolean";
        if (t.onComplete && "function" != typeof t.onComplete) throw "The type accepted by the onComplete parameter is function";
        if (t.onHover && "function" != typeof t.onHover) throw "The type accepted by the onHover parameter is function";
        return document.querySelector(t.el)
    }
    send(t, e = null, i = null) {
        if (0 == this.runstatus) return void this.overflowArr.push({
            content: t,
            normalClass: e
        });
        if (t.length < 1) return;
        let n = document.createElement("div"),
            r = 0,
            s = this.speed,
            o = null,
            l = 0;
        n.innerHTML = t, n.style.display = "inline-block", n.classList.add("default-style"), (e || this.wrapperStyle) && n.classList.add(e || this.wrapperStyle),
            function a() {
                if (r = Math.round(Math.random() * (this.line - 1)), this.aisle[r].normalRow) {
                    this.aisle[r].normalRow = !1, this.container.appendChild(n), s += n.offsetWidth / n.parentNode.offsetWidth * 2, n.style.cssText = `\n                    text-align:center;\n                    min-width:130px;\n                    will-change: transform;\n                    position:absolute;\n                    right: -${n.offsetWidth+130}px;\n                    transition: transform ${s}s linear;\n                    transform: translateX(-${n.parentNode.offsetWidth+n.offsetWidth+130}px);\n                    top: ${r*this.offsetValue}px;\n                    line-height:${this.offsetValue}px;\n                    color:${this.colourful?"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6):void 0}\n                `;
                    let t = (n.parentNode.offsetWidth + n.offsetWidth) / s / 60;
                    o = setInterval((() => {
                        l += t, l > n.offsetWidth * this.coefficient && (this.aisle[r].normalRow = !0, clearInterval(o))
                    }), 16.66), setTimeout((() => {
                        1 != n.getAttribute("relieveDel") && (i && i({
                            runtime: s,
                            target: n,
                            width: n.offsetWidth
                        }), n.remove())
                    }), 1e3 * s)
                } else {
                    this.aisle.some((t => !0 === t.normalRow)) ? a.call(this) : (() => {
                        this.overflowArr.push({
                            content: t,
                            normalClass: e
                        }), this.clearIng || this.clearOverflowDanmakuArray()
                    })()
                }
            }.call(this)
    }
    batchSend(t, e = !1, i = null) {
        let n = this.runtime || 1.23 * t.length;
        this.originList = t, this.hasAvatar = e, this.normalClass = i;
        let r = setInterval((() => {
            this.originIndex > t.length - 1 ? (clearInterval(r), this.originIndex = 0, this.onComplete && this.onComplete(), this.loop && this.batchSend(this.originList, e, i)) : (e ? this.send(`<img src=${t[this.originIndex].avatar}>\n                     <a  href=${t[this.originIndex].href} target='_blank'>   <p>${t[this.originIndex].content}</p> </a>\n                    `, i || this.wrapperStyle) : this.send(t[this.originIndex], i || this.wrapperStyle), this.originIndex++)
        }), n / t.length * 1e3)
    }
    centeredSend(t, e, i = 3e3, n = null) {
        let r = document.createElement("div"),
            s = 0;
        r.innerHTML = t, (e || this.wrapperStyle) && r.classList.add(e || this.wrapperStyle),
            function t() {
                if (this.aisle[s].vipRow) this.container.appendChild(r), r.style.cssText = `\n                    position:absolute;\n                    left:50%;\n                    transform:translateX(-50%);\n                    top: ${s*this.offsetValue}px;\n                `, this.aisle[s].vipRow = !1, setTimeout((() => {
                    n && n({
                        duration: i,
                        target: r,
                        width: r.offsetWidth
                    }), r.remove(), this.aisle[s].vipRow = !0
                }), i);
                else {
                    if (s++, s > this.line - 1) return;
                    t.call(this)
                }
            }.call(this)
    }
    play() {
        const t = this.container.children;
        for (let e = 0; e < t.length; e++) this.controlDanmakurunStatus(t[e], 1);
        this.runstatus = 1, 0 !== this.overflowArr.length && this.clearOverflowDanmakuArray()
    }
    pause() {
        const t = this.container.children;
        for (let e = 0; e < t.length; e++) this.controlDanmakurunStatus(t[e], 0);
        this.runstatus = 0
    }
    controlDanmakurunStatus(t, e) {
        const i = 0,
            n = /-(\S*),/;
        if (e === 1) {
            clearTimeout(t.timer);
            const e = Utils.getStyle(t, "transform").match(n)[1];
            t.style.transition = `transform ${this.speed}s linear`, t.style.transform = `translateX(-${t.parentNode.offsetWidth+parseInt(e)+t.offsetWidth+130}px)`, t.timer = setTimeout((() => {
                t.remove()
            }), 1e3 * this.speed)
        } else if (e === i) {
            clearTimeout(t.timer);
            const e = Utils.getStyle(t, "transform").match(n)[1];
            t.style.transition = "transform 0s linear", t.style.transform = `translateX(-${e}px)`, t.setAttribute("relieveDel", 1)
        }
    }
    handleMouseHover() {
        Utils.eventDelegation(this.container, "default-style", "mouseover", (t => {
            t.style["z-index"] = 1e3, this.controlDanmakurunStatus(t, 0), this.onHover && this.onHover(t)
        })), Utils.eventDelegation(this.container, "default-style", "mouseout", (t => {
            t.style.zIndex = 1, 1 == this.runstatus && this.controlDanmakurunStatus(t, 1)
        }))
    }
    clearOverflowDanmakuArray() {
        clearInterval(this.cleartimer), this.clearIng = !0;
        let t = 0;
        this.cleartimer = setInterval((() => {
            0 === this.overflowArr.length ? (t++, t > 20 && (clearInterval(this.cleartimer), this.clearIng = !1)) : (this.send(this.overflowArr[0].content, this.overflowArr[0].normalClass || this.wrapperStyle), this.overflowArr.shift())
        }), 500)
    }
}
class Utils {
    static getStyle(t, e) {
        return window.getComputedStyle(t, null)[e]
    }
    static eventDelegation(t, e, i, n) {
        t.addEventListener(i, (t => {
            try {
                t.target.className.includes(e) && n(t.target)
            } catch (t) {}
        }))
    }
}