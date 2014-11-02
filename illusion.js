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
        $('a').each(function (index, link) {
            var $link = $(link); // TODO: Look if the links are pointing to another domain

            $link.on("mousedown", function (event) {
                if (event.which == 1) {
                    var preload = document.createElement('link');
                    var asdf = $(preload);
                    //preload.href = $link.href;
                    //preload.preload = "prefetch";

                    asdf.attr('href', $link.attr('href'));
                    asdf.attr('rel', 'prefetch');

                    //asdf.attr('href', $link.attr('href'));
                    //asdf.attr('rel', 'prerender');

                    document.head.appendChild(preload);
                }
            });
        });
    };
    return illusion;
}());