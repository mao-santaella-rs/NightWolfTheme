var globalVar;
let maoma = 324;
const maoma2 = {
    manoA: [2, 'maoma'],
    nanoB: "elmaoma askd",
    nanoC: 2019,
    nmanoD: {
        maoma1: "maskdm",
        maoma2: false,
        maoma3: null,
        maoma4: undefined
    }
}
console.log(maoma2.moms.manoB)

let mao = `fsdlksdf;lksdfl ${5 + (4.1 - 2.2)};`

class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }

}

let user = new User("John");
user.sayHi();
/**
 * Constructor for <code>AjaxRequest</code> class
 * @param url the url for the request<p/>
 */

function AjaxRequest(url) {
    var urls = ["www.cnn.com", 5, globalVar];
    this.request = new XMLHttpRequest();
    url = url.replace(/^\s*(.*)/, "$1"); // skip leading whitespace
    /* check the url to be in urls */
    var a = "\u1111\z\n\u11";
    this.foo = new function () { };
    foo();
    #
    var hello = () => console.log("hello")
}

@decorator()
class NameClass {

}
declare module name {

}

interface MyInterface { }
type FooBarAlias = string;
var x: MyInterface, y: string, z: FooBarAlias;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

if (maoma >= 3) {

}

// Regular expressions:
/abc/
x = /abc/;
function_with_regex_arg(/abc/);
[ /abc/, /def/];
{ regex: /abc/ };
(1 === 0) ? /abc/ : /def/;
/abc/ /* Comment */
/abc/ // Comment
var matches = /abc/.exec('Alphabet ... that should contain abc, right?');

// No regex here: 
a = [thing / thing, thing / thing];
x = a /b/ c / d;

// Character groups with backslashes:
/[ab\\]/ // a, b or backslash
/[ab\]]/ // a, b or ]
/\\[ab]/ // a or b preceded by backslash
/\[ab]/  // Literally "[ab]"

// Escape sequences:
'\b\f\n\r\t\v\0\'\"\\' // Single character escape
"\1\01\001"            // Octal escape
'\xA9'                 // Hexadecimal escape
"\u00a9"               // Unicode escape
'\u{1D306}'            // Unicode code point escape
/\cJ/                  // Control escape

// ES2015 binary and octal numbers:
let binary1 = 0b1010;
let binary2 = 0B00001111;
let octal1 = 0o0123;
let octal2 = 0O4567;

// Template strings
// ----------------
// Template strings are delimited by back-ticks (grave accent) and
// can span multiple lines. They allow for expressions that inside
// of a dollar-sign plus curly-bracket construct (${...}).

console.log(`The sum of 2 and 2 is ${2 + 2}`);

let y = 8;
let my_string = `This is a multiline
string that also contains
a template ${y + (4.1 - 2.2)}`;

export default {
  manoA: [2, 'maoma'],
  nanoB: "elmaoma askd",
  nanoC: 2019,
  nmanoD: {
    maoma1: "maskdm",
    maoma2: false,
    maoma3: null,
    maoma4: undefined
  }
}



( function( global, factory ) {

    "use strict";

    if ( typeof module === "object" && typeof module.exports === "object" ) {

        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }

// Pass this if window is not defined yet
} )


/** Class representing a point. */
class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        // ...
    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        // ...
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */
    static fromString(str) {
        // ...
    }
}




/**
 * Class representing a dot.
 * @extends Point
 */
class Dot extends Point {
    /**
     * Create a dot.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} width - The width of the dot, in pixels.
     */
    constructor(x, y, width) {
        // ...
    }

    /**
     * Get the dot's width.
     * @return {number} The dot's width, in pixels.
     */
    getWidth() {
        // ...
    }
}