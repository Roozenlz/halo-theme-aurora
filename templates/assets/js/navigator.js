let scrollTimer;
document.addEventListener("scroll", () => {
    let navigator_class = document.getElementById('Ob-Navigator').classList;
    navigator_class.remove('Ob-Navigator--open')
    navigator_class.add('Ob-Navigator--scrolling')
    let returnTop = document.getElementById('returnTop')
    let scrollPercent = document.getElementById('scrollPercent')
    let scrollSvg1 = document.getElementById('scrollSvg1')
    let scrollSvg2 = document.getElementById('scrollSvg2')
    scrollSvg2.style.display = 'none'
    let e = document.documentElement.scrollTop || window.pageYOffset
    let t = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight
    let o = Math.round(e / t * 100);
    if (o > 0.16) {
        scrollPercent.style.display = 'block'
        scrollSvg1.style.display = 'none'
        returnTop.style.display = 'block'
        scrollPercent.innerText = o + '%'
    } else {
        returnTop.style.display = 'none'
        scrollPercent.style.display = 'none'
        scrollSvg1.style.display = 'block'
    }
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        navigator_class.remove('Ob-Navigator--scrolling')
    }, 300);
});

function returnTop() {
    scrollToDest(0, 500)
}

function scrollToDest(e, t) {
    if (e < 0 || t < 0)
        return;
    const n = window.scrollY || window.screenTop;
    if (e -= 70,
    "CSS" in window && CSS.supports("scroll-behavior", "smooth"))
        return void window.scrollTo({
            top: e,
            behavior: "smooth"
        });
    let o = null;
    t = t || 500,
        window.requestAnimationFrame((function i(s) {
                if (o = o || s,
                n < e) {
                    const r = s - o;
                    window.scrollTo(0, (e - n) * r / t + n),
                        r < t ? window.requestAnimationFrame(i) : window.scrollTo(0, e)
                } else {
                    const r = s - o;
                    window.scrollTo(0, n - (n - e) * r / t),
                        r < t ? window.requestAnimationFrame(i) : window.scrollTo(0, e)
                }
            }
        ))
}

function navigatorClickHandler() {
    let navigator_class = document.getElementById("Ob-Navigator").classList
    let scrollSvg2 = document.getElementById('scrollSvg2');
    let scrollPercent = document.getElementById('scrollPercent');
    let scrollSvg1 = document.getElementById('scrollSvg1');
    let returnTop = document.getElementById('returnTop');
    if (navigator_class.contains('Ob-Navigator--open')) {
        scrollSvg2.style.display = 'none'
        let e = document.documentElement.scrollTop || window.pageYOffset
        let t = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight
        let o = Math.round(e / t * 100);
        if (o > 0.16) {
            returnTop.style.display = 'block'
            scrollPercent.style.display = 'block'
            scrollPercent.innerText = o + '%'
        } else {
            scrollSvg1.style.display = 'block'
        }
        navigator_class.remove('Ob-Navigator--open')
    } else {
        returnTop.style.display = 'none'
        scrollSvg1.style.display = 'none'
        scrollSvg2.style.display = 'block'
        scrollPercent.style.display = 'none'
        navigator_class.add('Ob-Navigator--open')
    }
}