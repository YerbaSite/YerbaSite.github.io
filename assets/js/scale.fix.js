(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function(e) {
            // Avoid toggling viewport on research roadmap: meta changes feel like zoom/jank on tap.
            if (e.target && e.target.closest && e.target.closest("#research-tree")) {
                return;
            }
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, { capture: false, passive: true });
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);
