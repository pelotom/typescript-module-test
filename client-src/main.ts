/// <reference path='../foo'/>

declare module 'foo' { export = Foo; }

import Foo = require('foo');
import Meh = require('./secondary');

console.log(new Foo.Bar().fizzle(Foo.Flim.x + 9));

console.log(Foo.Biz.fangle("hello world!"));

Foo.Flam.pewpew({
  fire: function(n: number) {
    console.log('fired', n, 'shots!');
  }
});