function Prefetch() {
    this.hooks();
}

Prefetch.prototype.hooks = function () {
    var links = document.querySelectorAll('a');

    var length = links.length;

    for (var n = 0; n < length; n++) {

        var prefetchFunction = function (event) {
            // Left mouse click or Touch
            if (event.constructor.name === 'TouchEvent' || event.which === 1) {
                var prefetch = document.createElement('link');

                prefetch.rel = 'prefetch';
                prefetch.href = this.href;

                document.head.appendChild(prefetch);
            }

        };

        if(links[n].onclick === null && links[n].onmousedown === null && links[n].onmouseup === null) {
            ['touchstart', 'mousedown'].forEach(value => {
                links[n].addEventListener(value, prefetchFunction, false);
            });
        }
    }
};
