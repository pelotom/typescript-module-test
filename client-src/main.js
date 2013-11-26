/// <reference path='../foo-amd'/>
define(["require", "exports", 'foo'], function(require, exports, __Foo__) {
    var Foo = 'foo';

    console.log(new Foo.Bar().fizzle(Foo.Flim.x + 9));

    console.log(Foo.Biz.fangle("hello world!"));

    Foo.Flam.pewpew({
        fire: function (n) {
            console.log('fired', n, 'shots!');
        }
    });
});
