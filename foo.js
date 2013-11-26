var Foo;
(function (Foo) {
    var Bar = (function () {
        function Bar() {
        }
        Bar.prototype.fizzle = function (wozzle) {
            return wozzle + 1;
        };
        return Bar;
    })();
    Foo.Bar = Bar;
})(Foo || (Foo = {}));
var Foo;
(function (Foo) {
    var Baz = (function () {
        function Baz() {
        }
        return Baz;
    })();
    Foo.Baz = Baz;
})(Foo || (Foo = {}));
var Foo;
(function (Foo) {
    (function (Biz) {
        function fangle(s) {
            return s.length;
        }
        Biz.fangle = fangle;
    })(Foo.Biz || (Foo.Biz = {}));
    var Biz = Foo.Biz;
})(Foo || (Foo = {}));
var Foo;
(function (Foo) {
    (function (Flim) {
        Flim.x = 9;
    })(Foo.Flim || (Foo.Flim = {}));
    var Flim = Foo.Flim;
    (function (Flam) {
        function pewpew(laser) {
            console.log('about to fire...');
            laser.fire(Flim.x);
        }
        Flam.pewpew = pewpew;
    })(Foo.Flam || (Foo.Flam = {}));
    var Flam = Foo.Flam;
})(Foo || (Foo = {}));
//# sourceMappingURL=foo.js.map
