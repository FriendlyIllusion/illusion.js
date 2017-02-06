function Prefetch() {
    this.hooks();
}

Prefetch.prototype.hooks = function () {
    var links = document.querySelectorAll('a');

    for (var n = 0; n < links.length; n++) {

        links[n].addEventListener('mousedown', function (event) {
            // Left mouse click
            if (event.which == 1) {
                var prefetch = document.createElement('link');

                prefetch.rel = 'prefetch';
                prefetch.href = this.href;

                document.head.appendChild(prefetch);
            }

        }, false);
    }
};