function Prefetch() {
    this.hooks();
}

Prefetch.prototype.hooks = function () {
    var links = document.querySelectorAll('a');

    for (var n = 0; n < links.length; n++) {
        var link = links[n];

        link.addEventListener('mousedown', function (event) {
            // Left mouse click
            if (event.which == 1) {
                var prefetch = document.createElement('link');

                prefetch.rel = 'prefetch';
                prefetch.href = link.href;

                document.head.appendChild(prefetch);
            }

        }, false);
    }
};