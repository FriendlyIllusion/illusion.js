function Illusion() {

}

Illusion.prototype.hooks = function () {
    var links = document.querySelectorAll('a');


    for (n = 0; n < links.length; n++) {
        var link = links[n];

        var eventTypes = ['mousedown', 'touchstart'];

        eventTypes.forEach(function(eventType) {
            link.addEventListener(eventType, function (event) {
                event = (typeof event === "undefined") ? 1 : event; // Optional arg

                if (event.which == 1) {
                    var preload = document.createElement('link');

                    preload.rel = 'prefetch';
                    preload.href = link.href;

                    //preload.rel = "preload"; // TODO: Add preload support

                    document.head.appendChild(preload);
                }
            }, false);
        });
    }
};