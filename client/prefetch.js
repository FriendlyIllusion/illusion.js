function Prefetch() {
    this.hooks();
}

Prefetch.prototype.hooks = function () {
    var links = document.querySelectorAll('a');

    for (n = 0; n < links.length; n++) {
        var link = links[n];

        var eventTypes = ['mousedown', 'touchstart'];

        eventTypes.forEach(function(eventType) {
            link.addEventListener(eventType, function (event) {
                event = (typeof event === "undefined") ? 1 : event; // Optional arg

                if (event.which == 1) {
                    var prefetch = document.createElement('link');

                    prefetch.rel = 'prefetch';
                    prefetch.href = link.href;

                    document.head.appendChild(prefetch);
                }
            }, false);
        });
    }
};