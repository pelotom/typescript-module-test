module Foo {
  export module Flim {
    export var x = 9;
  }
  export module Flam {
    export function pewpew(laser: {fire(numShots: number):void}) {
      console.log('about to fire...');
      laser.fire(Flim.x);
    }
  }
}