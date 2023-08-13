document.addEventListener('DOMContentLoaded', function () {
    /**
     * 网页运行时间
     */
    const addRuntime = () => {
        const $runtimeCount = document.getElementById('runtimeshow');
        if ($runtimeCount) {
            var s1 = $runtimeCount.innerText;;//建站时间
            if (s1) {
                s1 = new Date(s1.replace(/-/g, "/"));
                s2 = new Date();
                var days = s2.getTime() - s1.getTime();
                var number_of_days = parseInt(days / (1000 * 60 * 60 * 24));
                $runtimeCount.innerText = number_of_days + "天";
            }
        }
    }
    window.refreshFn = function () {
        addRuntime();
    }
    refreshFn()
})