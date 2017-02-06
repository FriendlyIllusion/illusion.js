// Polyfills
if(MouseEvent === undefined) {
    function MouseEvent(eventType, params) {
        params = params || { bubbles: false, cancelable: false };
        var mouseEvent = document.createEvent('MouseEvent');
        mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

        return mouseEvent;
    }
}

function simulateMouseDown(element) {
    var ev = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    element.dispatchEvent(ev);
}

var prefetch;

describe('Prefetch', function() {
    describe('#hooks()', function() {

        var el = document.createElement("a");
        el.id = "myLink";
        el.href = "localhost";
        el.innerHTML = "Click me";
        document.body.appendChild(el);

        prefetch = new Prefetch();

        it("shouldn't create any link when no hyperlink have been clicked", function(done) {
            var links = document.querySelectorAll("link[rel=prefetch]");

            expect(links.length).to.equal(0);
            done();
        });

        it('should create a link tag when the hyperlink is been clicked', function(done) {
            var myLink = document.getElementById("myLink");

            simulateMouseDown(myLink);

            setTimeout(function() {
                var links = document.querySelectorAll("link[rel=prefetch]");

                expect(links.length).to.equal(1);
                done();

            }, 5);
        });
    });
});