function Prefetch() {
    this.hooks();
}

Prefetch.prototype.hooks = function () {
    let links = document.querySelectorAll('a');

    let trigger = false;

    let length = links.length;

    for (let n = 0; n < length; n++) {

        let prefetchFunction = function (event) {
            // Left mouse click or Touch
            if (!trigger && (event.constructor.name === 'TouchEvent' || event.which === 1)) {
                let prefetch = document.createElement('link');

                prefetch.rel = 'prefetch';
                prefetch.href = this.href;

                document.head.appendChild(prefetch);

                trigger = true;
            }

        };

        if(links[n].onclick === null && links[n].onmousedown === null && links[n].onmouseup === null) {
            ['touchstart', 'mousedown'].forEach(value => {
                links[n].addEventListener(value, prefetchFunction, false);
            });
        }
    }
};
