"use strict"

import File from 'File'
import { decorator } from 'decorator'
import * as Vue from 'vue'


var globalVar = 1;
let variable = 324;
const constant = {
  propertyA: [2, 'variable'],
  propertyB: "some string",
  propertyC: 2019,
  propertyD: {
    subPropertyA: true,
    subPropertyB: false,
    subPropertyC: null,
    subPropertyD: undefined,
    subPropertyE: {
      subSubPropertyA: "string"
    },
    methodF: (parameterA, parameterB) => {
      console.log(parameterA, parameterB)
    }
  },
  methodA: (parameterA, parameterB) => {
    console.log(parameterA, parameterB)
  }
}

window.onload = function () {}

window.getElementsByClassName('class')

console.log(constant.propertyD.subPropertyE.subSubPropertyA)
console.log(constant.propertyD.subPropertyE.methodF('par1'))

constant.methodA(25, 35)

const newNumber = new Number('222')

const func = () => {}

const variableN = 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9;

// Comment

let templateLiteral = `some text ${5 + (4.1 - variable)} more text`

class User {
  constructor(name) {
    this.name = name;
    this.text = templateLiteral;
    this.file = File
  }
  sayHi() {
    alert(this.name);
  }
}
const user = new User("John");

class PowerArray extends User {
  isEmpty() {
    return this.length === 0;
  }

  // built-in methods will use this as the constructor
  static get [Symbol.species]() {
    return Array;
  }
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

if (constant.parameterA[0] === 3 && variable <= 550) {

} else {

}

class AdminUser extends User {
  constructor() {
    super()
  }
  storeName() {
    console.log(this.name)
  }
}

let userAdmin = new AdminUser("Mao");

userAdmin.sayHi();

/**
 * Constructor for <code>AjaxRequest</code> class
 * @param url the url for the request<p/>
 */

function AjaxRequest(url) {
  var urls = ["www.cnn.com", 5, globalVar];
  this.request = new XMLHttpRequest();
  url = url.replace(/^\s*(.*)/, "$1"); // skip leading whitespace
  /* check the url to be in urls */
  var a = "aldskfs;ldkfsd;lfksd f;ls";
  this.foo = new function () { };
  foo();
  this.request.open("GET", url, true);
  var hello = () => console.log("hello")
}

@decorator()
class NameClass {

}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

if (constant.parameterA[0] === 3 && variable <= 550) {

} else {

}

switch (labelKey) {
  case 'commissions':
    labelData = Vue.currencyConversion(tooltipItem.yLabel, currency)
    break

  case 'order_conversion_rate':
  case 'items_sold_conversion_rate':
    labelData = Vue.percentConversion(tooltipItem.yLabel)
    break

  default:
    labelData = Vue.decimalConversion(tooltipItem.yLabel)
}

// Regular expressions:
/abc/
x = /abc/;
function_with_regex_arg(/abc/);
[/abc/, /def/];
{ regex: /abc/ };
(1 === 0) ? /abc/ : /def/;
/abc/; /* Comment */
  / abc /; // Comment
var matches = /abc/.exec('Alphabet ... that should contain abc, right?');

// No regex here: 
a = [thing / thing, thing / thing];
x = a / b / c / d;

// // Character groups with backslashes:
// /[ab\\]/ // a, b or backslash
//   / [ab\]]/ / / a, b or ]
// /\\[ab]/ // a or b preceded by backslash
//   /\[ab] /;  // Literally "[ab]"

// // Escape sequences:
//     '\b\f\n\r\t\v\0\'\"\\' // Single character escape
// "\1\01\001"            // Octal escape
// '\xA9'                 // Hexadecimal escape
// "\u00a9"               // Unicode escape
// '\u{1D306}'            // Unicode code point escape
//   /\cJ /;                  // Control escape

    // ES2015 binary and octal numbers:
let binary1 = 0b1010
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

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}
asyncCall();

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
var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
delete person.age

var cars = ["Saab", "Volvo", "BMW"];
"Saab" in cars

var cars = ["Saab", "Volvo", "BMW"];
cars instanceof Array;          // Returns true
cars instanceof Object;         // Returns true
cars instanceof String;         // Returns false
cars instanceof Number;         // Returns false

const form = document.querySelector('.new-item-form')

(function (global, factory) {

  "use strict";

  if (typeof module === "object" && typeof module.exports === "object") {

    module.exports = global.document ?
      factory(global, true) :
      function (w) {
        if (!w.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(w);
      };
  } else {
    factory(global);
  }

  // Pass this if window is not defined yet
})

let maoma = window.length

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

class PointDot extends Point {
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


// A class declaration with a name
class Person {
  // A constructor method that initializes the object properties
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // A public instance method that returns a greeting
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // A public instance getter that returns the birth year
  get birthYear() {
    const date = new Date();
    return date.getFullYear() - this.age;
  }

  // A public instance setter that updates the age
  set age(newAge) {
    if (newAge > 0 && newAge < 120) {
      this.age = newAge;
    } else {
      throw new Error("Invalid age");
    }
  }

  // A public static method that returns the average age of an array of persons
  static averageAge(persons) {
    let sum = 0;
    for (let person of persons) {
      sum += person.age;
    }
    return sum / persons.length;
  }

  // A private instance field that stores the favorite color
  #favoriteColor = "blue";

  // A private instance method that returns the favorite color
  #getFavoriteColor() {
    return this.#favoriteColor;
  }

  // A public instance method that calls the private instance method
  revealFavoriteColor() {
    return `My favorite color is ${this.#getFavoriteColor()}.`;
  }
}

// A class expression that extends the Person class
const Student = class extends Person {
  // A constructor method that calls the super constructor and initializes the student properties
  constructor(name, age, gender, school, major) {
    super(name, age, gender); // Call the parent constructor
    this.school = school;
    this.major = major;
  }

  // A public instance method that overrides the parent method
  greet() {
    return `Hi, I'm ${this.name} and I study ${this.major} at ${this.school}.`;
  }

  // A public instance getter that returns the graduation year
  get graduationYear() {
    const date = new Date();
    return date.getFullYear() + 4 - this.age / 5;
  }

  // A public static method that returns the number of students in an array of students
  static countStudents(students) {
    return students.length;
  }
  // A static initialization block that runs some code when the class is defined
  static {
    console.log("Student class is defined");
  }
};


// Creating some instances of the classes
const alice = new Person("Alice", 25, "female");
const bob = new Student("Bob", 20, "male", "MIT", "Computer Science");
const charlie = new Student("Charlie", 19, "male", "Harvard", "Mathematics");

// Calling some methods and getters on the instances
console.log(alice.greet()); // Hello, my name is Alice and I am 25 years old.
console.log(bob.greet()); // Hi, I'm Bob and I study Computer Science at MIT.
console.log(charlie.graduationYear); // 2028
console.log(alice.revealFavoriteColor()); // My favorite color is blue.

// Calling some static methods on the classes
console.log(Person.averageAge([alice, bob, charlie])); // 21.333333333333332
console.log(Student.countStudents([bob, charlie])); // 2

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

const number = 5 * 3;

with ([1, 2, 3]) {
  console.log(toString()); // 1,2,3
}