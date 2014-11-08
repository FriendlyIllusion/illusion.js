var illusion = (function () {
    function Illusion () {

    }

    var illusion = {
        setup: function () {
            var obj = new Illusion();
            obj.hooks();
            return obj;
        }
    };


    Illusion.prototype.hooks = function () {
        var links = document.querySelectorAll('a');

        for (n = 0; n < links.length; n++) {
            var link = links[n];

            link.addEventListener('mousedown', function (event) {
                if (event.which == 1) {
                    var preload = document.createElement('link');// TODO: Look if the links are pointing to another domain

                    preload.href = link.href;
                    preload.rel = 'prefetch';

                    //preload.rel = "preload"; // TODO: Add preload support
                }
                document.head.appendChild(preload);
            }, false); // IE9 < :c
        }
    };
    return illusion;
}());