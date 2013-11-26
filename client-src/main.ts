/// <reference path='reference'/>

import Foo = require('foo');
import Meh = require('./secondary');

console.log(new Foo.Bar().fizzle(Foo.Flim.x + Meh.blargh));

console.log(Foo.Biz.fangle("hello world!"));

Foo.Flam.pewpew({
  fire: function(n: number) {
    console.log('fired', n, 'shots!');
  }
});