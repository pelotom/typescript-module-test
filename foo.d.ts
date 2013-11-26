declare module Foo {
    class Bar {
        public fizzle(wozzle: number): number;
    }
}
declare module Foo {
    class Baz {
    }
}
declare module Foo.Biz {
    function fangle(s: string): number;
}
declare module Foo {
    module Flim {
        var x: number;
    }
    module Flam {
        function pewpew(laser: {
            fire(numShots: number): void;
        }): void;
    }
}
