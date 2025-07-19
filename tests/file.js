'use strict'

import File from 'File'
import { decorator } from 'decorator'
import * as Vue from 'vue'
import React from 'react'

class MyComponent extends React.Component {
  // <-- 'Component' might get this scope
  render() {
    return <div>Hello</div>
  }
}

class MyCustomElement extends HTMLElement {
  // <-- 'HTMLElement' might get this scope
  constructor() {
    super()
    // ...
  }
}
customElements.define('my-custom-element', MyCustomElement)

// JavaScript Syntax Showcase
// Purpose: Demonstrate various JS syntax elements for editor theme testing.
;('use strict') // 1. Strict Mode Declaration

// --- 2. Comments ---
// This is a single-line comment.

/*
 * This is a multi-line comment block.
 * It can span several lines.
 */

/**
 * JSDoc style comment block.
 * @param {string} param1 Description of parameter 1.
 * @returns {number} Description of the return value.
 */
function jsdocExample(param1) {
  return param1.length
}

// --- 3. Variable Declarations ---
var legacyVar = "I'm using var (function-scoped or global)" // Avoid using var
let blockScopedLet = 10 // Block-scoped, can be reassigned
const constantVar = 'I cannot be reassigned' // Block-scoped, must be initialized, cannot be reassigned

blockScopedLet = 20 // Reassignment is allowed for let
// constantVar = "New value"; // TypeError: Assignment to constant variable.

// --- 4. Data Types ---
const stringType = 'Hello, world!'
const stringTypeAlt = 'Double quotes work too.'
const templateLiteral = `String with ${blockScopedLet} embedded.` // Template literal
const numberType = 42
const floatType = 3.14159
const bigIntType = 9007199254740991n // BigInt literal
const booleanTypeTrue = true
const booleanTypeFalse = false
const nullType = null // Represents the intentional absence of any object value
let undefinedType // Variable declared but not assigned
const symbolType = Symbol('uniqueDescription') // Unique and immutable primitive
// prettier-ignore
const select = "Select this string" // Example of a string variable
const selectB = `Select this string`
const selectC = 'Select this string'

// Objects
const objectLiteral = {
  key1: 'value1',
  'key-with-hyphen': 'value2', // Quoted key
  numericKey: 123,
  booleanKey: true,
  nestedObject: {
    innerKey: 'innerValue',
  },
  method() {
    // Shorthand method definition
    console.log('Method called inside objectLiteral')
  },
  [symbolType]: 'Value for symbol key', // Computed property name using Symbol
}

// Arrays
const arrayLiteral = [1, 'two', true, null, { id: 3 }, [4, 5]]
const emptyArray = []
const multiLineArray = ['apple', 'banana', 'cherry']

// --- 5. Operators ---

// Arithmetic
let sum = 5 + 3 // 8
let difference = 10 - 4 // 6
let product = 6 * 7 // 42
let quotient = 20 / 5 // 4
let remainder = 10 % 3 // 1
let exponent = 2 ** 4 // 16
let increment = 5
increment++ // 6
let decrement = 10
decrement-- // 9

// Assignment
let x = 10
x += 5 // x = x + 5 (15)
x -= 3 // x = x - 3 (12)
x *= 2 // x = x * 2 (24)
x /= 4 // x = x / 4 (6)
x %= 5 // x = x % 5 (1)
x **= 3 // x = x ** 3 (1)

// Comparison
console.log(5 == '5') // true (loose equality, type coercion)
console.log(5 === '5') // false (strict equality, no type coercion)
console.log(5 != '5') // false
console.log(5 !== '5') // true
console.log(10 > 5) // true
console.log(10 < 5) // false
console.log(10 >= 10) // true
console.log(5 <= 4) // false

// Logical
console.log(true && false) // false (AND)
console.log(true || false) // true (OR)
console.log(!true) // false (NOT)

// Bitwise (less common in typical web dev)
console.log(5 & 1) // 1 (0101 & 0001 = 0001)
console.log(5 | 1) // 5 (0101 | 0001 = 0101)
console.log(5 ^ 1) // 4 (0101 ^ 0001 = 0100)
console.log(~5) // -6 (bitwise NOT)
console.log(5 << 1) // 10 (left shift)
console.log(5 >> 1) // 2 (sign-propagating right shift)
console.log(5 >>> 1) // 2 (zero-fill right shift)

// Ternary
const age = 25
const status = age >= 18 ? 'adult' : 'minor' // status = 'adult'

// Typeof
console.log(typeof 'hello') // "string"
console.log(typeof 123) // "number"
console.log(typeof true) // "boolean"
console.log(typeof undefinedType) // "undefined"
console.log(typeof nullType) // "object" (historical quirk)
console.log(typeof symbolType) // "symbol"
console.log(typeof bigIntType) // "bigint"
console.log(typeof {}) // "object"
console.log(typeof []) // "object" (arrays are objects)
console.log(typeof function () {}) // "function"

// Instanceof
console.log(arrayLiteral instanceof Array) // true
console.log(objectLiteral instanceof Object) // true
console.log(new Date() instanceof Date) // true

// Delete (usually for object properties)
const tempObj = { prop: 1 }
delete tempObj.prop
console.log(tempObj.prop) // undefined

// Spread and Rest
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combinedArray = [...arr1, 0, ...arr2] // Spread syntax for arrays
console.log(combinedArray) // [1, 2, 3, 0, 4, 5, 6]

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const combinedObject = { ...obj1, b: 99, ...obj2 } // Spread syntax for objects
console.log(combinedObject) // { a: 1, b: 99, c: 3, d: 4 }

function sumNumbers(...numbers) {
  // Rest parameter
  return numbers.reduce((acc, current) => acc + current, 0)
}
console.log(sumNumbers(1, 2, 3, 4)) // 10

// Optional Chaining (?.) and Nullish Coalescing (??)
const userProfile = {
  id: 1,
  details: {
    name: 'Alice',
    // address: { street: '123 Main St', city: 'Anytown' }
  },
}
const street = userProfile.details?.address?.street // undefined (no error)
console.log(street)
const city = userProfile.details?.address?.city ?? 'City Not Provided' // 'City Not Provided'
console.log(city)
const defaultName = null ?? 'Default Name' // 'Default Name'
console.log(defaultName)

// --- 6. Control Flow ---

// If / Else If / Else
let score = 75
if (score >= 90) {
  console.log('Grade: A')
} else if (score >= 80) {
  console.log('Grade: B')
} else if (score >= 70) {
  console.log('Grade: C')
} else {
  console.log('Grade: D or F')
}

// Switch
const day = new Date().getDay() // 0 = Sunday, 1 = Monday, ...
switch (day) {
  case 0:
    console.log('Sunday')
    break // Important!
  case 6:
    console.log('Saturday')
    break
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('Weekday')
    break // break applies to the grouped cases
  default:
    console.log('Invalid day')
  // no break needed for default if it's the last case
}

// For loop
console.log('For loop:')
for (let i = 0; i < 3; i++) {
  console.log(`Iteration ${i}`)
}

// While loop
console.log('While loop:')
let countWhile = 0
while (countWhile < 3) {
  console.log(`Count is ${countWhile}`)
  countWhile++
}

// Do...While loop (executes at least once)
console.log('Do...While loop:')
let countDo = 3
do {
  console.log(`Do count is ${countDo}`) // Will print "Do count is 3" once
  countDo++
} while (countDo < 3)

// For...in loop (iterates over enumerable property names of an object)
console.log('For...in loop:')
const person = { name: 'Bob', age: 30, city: 'New York' }
for (const key in person) {
  // It's often good practice to check if the property is directly on the object
  if (Object.hasOwnProperty.call(person, key)) {
    console.log(`${key}: ${person[key]}`)
  }
}

// For...of loop (iterates over iterable objects like Arrays, Strings, Maps, Sets)
console.log('For...of loop (Array):')
const colors = ['red', 'green', 'blue']
for (const color of colors) {
  console.log(color)
}

console.log('For...of loop (String):')
const greeting = 'Hi!'
for (const char of greeting) {
  console.log(char)
}

// Break and Continue
console.log('Break and Continue:')
for (let j = 0; j < 10; j++) {
  if (j === 3) {
    continue // Skip iteration 3
  }
  if (j === 7) {
    break // Exit loop when j is 7
  }
  console.log(`j = ${j}`)
}

// --- 7. Functions ---

// Function Declaration (hoisted)
function declaredFunction(param1, param2 = 'default', param3 = () => {}) {
  // Default parameter
  console.log(`Declared function called with: ${param1}, ${param2}`)
  return param1 + param2
}
declaredFunction('Arg1')

// Function Expression (not hoisted)
const functionExpression = function (name) {
  console.log(`Function expression called for ${name}`)
}
functionExpression('Charlie')

// Arrow Functions (lexical `this`)
const arrowFunctionSimple = () => console.log('Simple arrow function')
const arrowFunctionParams = (a, b) => {
  const result = a + b
  console.log(`Arrow function with params: ${a} + ${b} = ${result}`)
  return result // Explicit return needed for block body
}
const arrowFunctionSingleParam = (message) =>
  console.log(`Arrow with one param: ${message}`) // Parentheses optional for single param
const arrowFunctionImplicitReturn = (x, y) => x * y // Implicit return for single expression

arrowFunctionSimple()
arrowFunctionParams(5, 10)
arrowFunctionSingleParam('A message')
console.log(`Implicit return result: ${arrowFunctionImplicitReturn(4, 5)}`)

// Immediately Invoked Function Expression (IIFE)
;(function () {
  const iifeVar = 'This is private to the IIFE scope'
  console.log('IIFE executed!', iifeVar)
})()
// console.log(iifeVar); // ReferenceError: iifeVar is not defined

// Generator Function
function* idGenerator() {
  let id = 1
  while (true) {
    yield id++ // Pauses execution and yields a value
  }
}
const gen = idGenerator()
console.log('Generator:', gen.next().value) // 1
console.log('Generator:', gen.next().value) // 2

// Async/Await (for handling Promises)
async function fetchDataAsync(url) {
  console.log(`Fetching data from ${url}...`)
  try {
    // Simulate network request
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.includes('example')) {
          resolve({ status: 200, data: { message: 'Success!' } })
        } else {
          reject(new Error('Invalid URL for mock fetch'))
        }
      }, 1500)
    })

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = response.data // In real fetch: await response.json();
    console.log('Async Data Received:', data)
    return data
  } catch (error) {
    console.error('Error fetching data async:', error.message)
    throw error // Re-throw or handle as needed
  }
}
// Call the async function (it returns a Promise)
fetchDataAsync('[https://api.example.com/users](https://api.example.com/users)')
  .then((data) => console.log('Async function call successful.'))
  .catch((error) => console.log('Async function call failed.'))

// --- 8. Objects (Advanced) ---

// Object Destructuring
const {
  key1,
  nestedObject: { innerKey },
  nonExistent = 'defaultVal',
} = objectLiteral
console.log(key1, innerKey, nonExistent) // value1 innerValue defaultVal

// Renaming variables during destructuring
const { key1: renamedKey } = objectLiteral
console.log(renamedKey) // value1

// Object Shorthand Properties
const name = 'Alice'
const userAge = 30
const userObject = { name, userAge } // { name: 'Alice', userAge: 30 }
console.log(userObject)

// Getters and Setters
const account = {
  _balance: 1000, // Convention for "private" property
  get balance() {
    console.log('Getter called')
    return this._balance
  },
  set balance(value) {
    if (value < 0) {
      console.error('Balance cannot be negative.')
      return
    }
    console.log('Setter called')
    this._balance = value
  },
}
console.log(account.balance) // Access using getter
account.balance = 1500 // Access using setter
console.log(account.balance)
account.balance = -50 // Setter validation

// --- 9. Arrays (Advanced) ---

// Array Destructuring
const [first, second, , fourth] = arrayLiteral // Skip third element
console.log(first, second, fourth) // 1 'two' null

// Rest element in array destructuring
const [head, ...tail] = colors
console.log(head) // red
console.log(tail) // ['green', 'blue']

// Array Methods
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((n) => n * 2) // [2, 4, 6, 8, 10]
const evens = numbers.filter((n) => n % 2 === 0) // [2, 4]
const sumOfNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0) // 15
console.log('map:', doubled, 'filter:', evens, 'reduce:', sumOfNumbers)

console.log('forEach:')
numbers.forEach((n, index) => console.log(`Index ${index}: ${n}`))

const hasEven = numbers.some((n) => n % 2 === 0) // true
const allPositive = numbers.every((n) => n > 0) // true
const found = numbers.find((n) => n > 3) // 4
const foundIndex = numbers.findIndex((n) => n > 3) // 3

console.log(
  'some:',
  hasEven,
  'every:',
  allPositive,
  'find:',
  found,
  'findIndex:',
  foundIndex,
)

numbers.push(6) // Add to end
console.log('push:', numbers)
const last = numbers.pop() // Remove from end
console.log('pop:', last, numbers)
numbers.unshift(0) // Add to beginning
console.log('unshift:', numbers)
const firstRemoved = numbers.shift() // Remove from beginning
console.log('shift:', firstRemoved, numbers)

// Slice (non-mutating) vs Splice (mutating)
const sliced = numbers.slice(1, 3) // Elements at index 1 and 2
console.log('slice:', sliced, numbers) // Original array unchanged
const spliced = numbers.splice(1, 2, 98, 99) // Remove 2 elements starting at index 1, insert 98, 99
console.log('splice removed:', spliced, 'array after splice:', numbers)

// --- 10. Classes ---
class Vehicle {
  constructor(make, model) {
    this.make = make
    this.model = model
    this._engineStarted = false // "Protected" convention
  }

  // Instance method
  startEngine() {
    if (this._engineStarted) {
      console.log(`${this.make} ${this.model} engine already running.`)
    } else {
      this._engineStarted = true
      console.log(`${this.make} ${this.model} engine started.`)
    }
  }

  // Getter
  get isEngineRunning() {
    return this._engineStarted
  }

  // Static method (called on the class itself)
  static getVehicleInfo() {
    return 'This is a generic vehicle class.'
  }
}

// Inheritance
class Car extends Vehicle {
  constructor(make, model, numDoors) {
    super(make, model) // Call parent constructor
    this.numDoors = numDoors
  }

  // Override parent method
  startEngine() {
    super.startEngine() // Call parent method if needed
    console.log(`Car specific start sequence for ${this.make} ${this.model}.`)
  }

  // Car specific method
  honk() {
    console.log(`${this.make} ${this.model} says: Beep beep!`)
  }
}

const myCar = new Car('Toyota', 'Camry', 4)
myCar.startEngine()
myCar.honk()
console.log(`Is ${myCar.make} engine running?`, myCar.isEngineRunning)
console.log(Car.getVehicleInfo()) // Call static method

// --- 11. Modules (ES Modules Syntax - typically used across multiple files) ---
/*
// --- file: utils.js ---
export const PI = 3.14159;
export function double(n) {
  return n * 2;
}
export default class Logger { // Default export
  log(message) { console.log(message); }
}

// --- file: main.js ---
import Logger, { PI, double as multiplyByTwo } from './utils.js'; // Import default and named exports (renaming)
import * as utils from './utils.js'; // Import all named exports as an object

console.log(PI);
console.log(multiplyByTwo(5)); // Use renamed import
const logger = new Logger();
logger.log('Module system example');
console.log(utils.PI); // Access via namespace import
*/

// --- 12. Regular Expressions ---
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const testEmail1 = 'test@example.com'
const testEmail2 = 'invalid-email'
console.log(`Email "${testEmail1}" valid?`, emailRegex.test(testEmail1)) // true
console.log(`Email "${testEmail2}" valid?`, emailRegex.test(testEmail2)) // false

const text = 'The quick brown fox jumps over the lazy dog.'
const foxMatch = text.match(/brown (fox)/i) // Case-insensitive match, capture group
if (foxMatch) {
  console.log('Regex match found:', foxMatch[0]) // Full match: "brown fox"
  console.log('Captured group:', foxMatch[1]) // Captured group: "fox"
}
const replacedText = text.replace(/lazy/g, 'energetic') // Global replace
console.log('Replaced text:', replacedText)

// --- 13. Promises ---
const myPromise = new Promise((resolve, reject) => {
  console.log('Promise executor running...')
  const success = Math.random() > 0.3 // Simulate success/failure
  setTimeout(() => {
    if (success) {
      resolve({ data: 'Promise resolved successfully!' })
    } else {
      reject(new Error('Promise rejected!'))
    }
  }, 1000)
})

myPromise
  .then((result) => {
    console.log('Promise .then():', result.data)
    return 'Value passed to next then' // Chain promises
  })
  .then((nextResult) => {
    console.log('Second .then():', nextResult)
  })
  .catch((error) => {
    console.error('Promise .catch():', error.message)
  })
  .finally(() => {
    console.log('Promise .finally(): Runs regardless of success or failure.')
  })

// Promise.all, Promise.race etc.
const p1 = Promise.resolve(1)
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 500))
const p3 = Promise.reject('Error in p3')

Promise.all([p1, p2]).then((results) => console.log('Promise.all success:', results)) // [1, 2]
Promise.all([p1, p2, p3]).catch((error) => console.error('Promise.all failure:', error)) // Error in p3

Promise.race([p2, p3])
  .then((result) => console.log('Promise.race success:', result)) // depends on timing
  .catch((error) => console.error('Promise.race failure:', error)) // depends on timing

// --- 14. Error Handling ---
try {
  console.log('Entering try block...')
  // Simulate an error
  if (Math.random() < 0.5) {
    throw new Error('This is a custom thrown error!')
  }
  console.log('No error occurred in try block.')
  // undefinedVariable; // This would cause a ReferenceError
} catch (error) {
  console.error('Caught an error:', error.name, '-', error.message)
  // console.error(error.stack); // Stack trace
} finally {
  console.log('Finally block executed (always runs).')
}

console.log('Script execution continues after try/catch/finally.')

// --- 15. Date Object ---
const now = new Date()
console.log('Current Date/Time:', now)
console.log('Year:', now.getFullYear())
console.log('Month (0-indexed):', now.getMonth())
console.log('ISO String:', now.toISOString())
console.log('Locale String:', now.toLocaleString())

// --- 16. JSON ---
const jsonString = '{"name": "Gadget", "id": 123, "enabled": true}'
const jsonObject = JSON.parse(jsonString) // Parse JSON string to object
console.log('Parsed JSON:', jsonObject.name)

const objectToParse = { type: 'Sensor', values: [10, 20, 15], timestamp: new Date() }
const stringifiedJson = JSON.stringify(objectToParse, null, 2) // Convert object to JSON string (pretty-printed)
console.log('Stringified JSON:\n', stringifiedJson)

// --- End of Showcase ---
console.log('JavaScript Syntax Showcase Complete.')

var globalVar = 1
let variable = 324
const constant = {
  propertyA: [2, 'variable'],
  propertyB: 'some string',
  propertyC: 2019,
  propertyD: {
    subPropertyA: true,
    subPropertyB: false,
    subPropertyC: null,
    subPropertyD: undefined,
    subPropertyE: {
      subSubPropertyA: 'string',
    },
    methodF: (parameterA, parameterB) => {
      console.log(parameterA, parameterB)
    },
  },
  methodA: (parameterA, parameterB) => {
    console.log(parameterA, parameterB)
  },
}

window.onload = function (param1, param2) {}

window.getElementsByClassName('class')

console.log(constant.propertyD.subPropertyE.subSubPropertyA)
console.log(constant.propertyD.subPropertyE.methodF('par1'))

constant.methodA(25, 35)

const newNumber = new Number('222')

const func = () => {}

const variableN = 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9

// Comment

class User {
  constructor(name) {
    this.name = name
    this.text = templateLiteral
    this.file = File
  }
  sayHi() {
    alert(this.name)
  }
}
const user = new User('John')

class PowerArray extends User {
  isEmpty() {
    return this.length === 0
  }

  // built-in methods will use this as the constructor
  static get [Symbol.species]() {
    return Array
  }
}

for (let index = 0; index < array.length; index++) {
  const element = array[index]
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

let userAdmin = new AdminUser('Mao')

userAdmin.sayHi()

// 4. size on Map
const myMap = new Map()
myMap.set('a', 1)
myMap.set('b', 2)
myMap.set('c', 3)
console.log('\nMap:', myMap)
console.log('myMap.size:', myMap.size) // Output: 3 (number of key/value pairs)
// 'size' is read-only

// 5. size on Set
const mySet = new Set()
mySet.add(10)
mySet.add(20)
mySet.add(10) // Duplicate ignored
mySet.add(30)
console.log('\nSet:', mySet)
console.log('mySet.size:', mySet.size) // Output: 3 (number of unique elements)
// 'size' is read-only

/**
 * Constructor for <code>AjaxRequest</code> class
 * @param url the url for the request<p/>
 */

function AjaxRequest(url) {
  var urls = ['www.cnn.com', 5, globalVar]
  this.request = new XMLHttpRequest()
  url = url.replace(/^\s*(.*)/, '$1') // skip leading whitespace
  /* check the url to be in urls */
  var a = 'aldskfs;ldkfsd;lfksd f;ls'
  this.foo = new (function () {})()
  foo()
  this.request.open('GET', url, true)
  var hello = () => console.log('hello')
}

@decorator()
class NameClass {}

for (let index = 0; index < array.length; index++) {
  const element = array[index]
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
// Label for the outer loop
outerLoop: for (let i = 0; i < 3; i++) {
  console.log('Outer loop:', i)
  // Label for the inner loop (optional here)
  innerLoop: for (let j = 0; j < 3; j++) {
    console.log('  Inner loop:', j)
    if (i === 1 && j === 1) {
      console.log('    Breaking outer loop!')
      break outerLoop // Exits BOTH loops
    }
    if (j === 2) {
      // break; // This would only exit the inner loop
    }
  }
}
// Label for the outer loop
outerLoop: for (let i = 0; i < 3; i++) {
  console.log('Outer loop:', i)
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log('    Continuing outer loop!')
      continue outerLoop // Skips the rest of outer loop's current iteration (i=1)
      // and goes directly to the next iteration (i=2)
    }
    console.log(` Inner loop: i=<span class="math-inline">\{i\}, j\=</span>{j}`)
  }
  console.log(' End of outer loop iteration', i) // This line is skipped when continue outerLoop happens
}
console.log('Finished.')

// Regular expressions:
;/abc/
x = /abc/
function_with_regex_arg(/abc/)
;[/abc/, /def/]
{
  regex: /abc/
}
1 === 0 ? /abc/ : /def/
;/abc/ /* Comment */
;/ abc / // Comment
var matches = /abc/.exec('Alphabet ... that should contain abc, right?')

// No regex here:
a = [thing / thing, thing / thing]
x = a / b / c / d

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
let binary2 = 0b00001111
let octal1 = 0o0123
let octal2 = 0o4567

// Template strings
// ----------------
// Template strings are delimited by back-ticks (grave accent) and
// can span multiple lines. They allow for expressions that inside
// of a dollar-sign plus curly-bracket construct (${...}).

console.log(`The sum of 2 and 2 is ${2 + 2}`)

let y = 8
let my_string = `This is a multiline
string that also contains
a template ${y + (4.1 - 2.2)}`

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved')
    }, 2000)
  })
}

async function asyncCall() {
  console.log('calling')
  const result = await resolveAfter2Seconds()
  console.log(result)
  // Expected output: "resolved"
}

try {
  try {
    throw new Error('oops')
  } catch (ex) {
    console.error('inner', ex.message)
  } finally {
    console.log('finally')
  }
} catch (ex) {
  console.error('outer', ex.message)
}
asyncCall()

export default {
  manoA: [2, 'maoma'],
  nanoB: 'elmaoma askd',
  nanoC: 2019,
  nmanoD: {
    maoma1: 'maskdm',
    maoma2: false,
    maoma3: null,
    maoma4: undefined,
  },
}
var pattern =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
delete person.age

var cars = ['Saab', 'Volvo', 'BMW']
'Saab' in cars

var cars = ['Saab', 'Volvo', 'BMW']
cars instanceof Array // Returns true
cars instanceof Object // Returns true
cars instanceof String // Returns false
cars instanceof Number // Returns false

const form = document.querySelector('.new-item-form')(function (global, factory) {
  'use strict'

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = global.document
      ? factory(global, true)
      : function (w) {
          if (!w.document) {
            throw new Error('jQuery requires a window with a document')
          }
          return factory(w)
        }
  } else {
    factory(global)
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
    this.name = name
    this.age = age
    this.gender = gender
  }

  // A public instance method that returns a greeting
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }

  // A public instance getter that returns the birth year
  get birthYear() {
    const date = new Date()
    return date.getFullYear() - this.age
  }

  // A public instance setter that updates the age
  set age(newAge) {
    if (newAge > 0 && newAge < 120) {
      this.age = newAge
    } else {
      throw new Error('Invalid age')
    }
  }

  // A public static method that returns the average age of an array of persons
  static averageAge(persons) {
    let sum = 0
    for (let person of persons) {
      sum += person.age
    }
    return sum / persons.length
  }

  // A private instance field that stores the favorite color
  #favoriteColor = 'blue'

  // A private instance method that returns the favorite color
  #getFavoriteColor() {
    return this.#favoriteColor
  }

  // A public instance method that calls the private instance method
  revealFavoriteColor() {
    return `My favorite color is ${this.#getFavoriteColor()}.`
  }
}

// A class expression that extends the Person class
const Student = class extends Person {
  // A constructor method that calls the super constructor and initializes the student properties
  constructor(name, age, gender, school, major) {
    super(name, age, gender) // Call the parent constructor
    this.school = school
    this.major = major
  }

  // A public instance method that overrides the parent method
  greet() {
    return `Hi, I'm ${this.name} and I study ${this.major} at ${this.school}.`
  }

  // A public instance getter that returns the graduation year
  get graduationYear() {
    const date = new Date()
    return date.getFullYear() + 4 - this.age / 5
  }

  // A public static method that returns the number of students in an array of students
  static countStudents(students) {
    const maoma = Math.random()
    return students.length
  }
  // A static initialization block that runs some code when the class is defined
  static {
    console.log('Student class is defined')
  }
}

// Creating some instances of the classes
const alice = new Person('Alice', 25, 'female')
const bob = new Student('Bob', 20, 'male', 'MIT', 'Computer Science')
const charlie = new Student('Charlie', 19, 'male', 'Harvard', 'Mathematics')

// Calling some methods and getters on the instances
console.log(alice.greet()) // Hello, my name is Alice and I am 25 years old.
console.log(bob.greet()) // Hi, I'm Bob and I study Computer Science at MIT.
console.log(charlie.graduationYear) // 2028
console.log(alice.revealFavoriteColor()) // My favorite color is blue.

// Calling some static methods on the classes
console.log(Person.averageAge([alice, bob, charlie])) // 21.333333333333332
console.log(Student.countStudents([bob, charlie])) // 2

function* generator() {
  yield 1
  yield 2
  yield 3
}

const sym1 = Symbol()
const sym2 = Symbol('foo')
const sym3 = Symbol('foo')

const number = 5 * 3

with ([1, 2, 3]) {
  console.log(toString()) // 1,2,3
}

/**
 * JavaScript Regex Syntax Highlighting Test File
 *
 * This file contains examples of various ways to create and use Regular Expressions
 * in JavaScript. It's intended for testing syntax highlighting in code editors
 * and themes like VS Code.
 */

console.log('--- JavaScript Regex Syntax Test Starting ---')

// --- Section 1: Regex Creation ---

// 1a: Regex Literal Syntax (/pattern/flags)
console.log('\n--- 1a: Regex Literal Creation ---')

const regexLiteralSimple = /abc/ // Simple literal
const regexLiteralFlags = /abc/gi // With global (g) and case-insensitive (i) flags
const regexLiteralCharset = /[a-zA-Z0-9_]/ // Character set
const regexLiteralQuantifier = /a{2,4}b+c*/ // Quantifiers {n,m}, +, *
const regexLiteralGroups = /(group1)(group2)/ // Capturing groups
const regexLiteralNonCapturing = /(?:nonCapture)abc/ // Non-capturing group
const regexLiteralAnchor = /^start|end$/ // Anchors ^ and $
const regexLiteralLookaround = /abc(?=def)/ // Positive lookahead
const regexLiteralNegativeLookahead = /abc(?!def)/ // Negative lookahead
const regexLiteralLookbehind = /(?<=prefix)abc/ // Positive lookbehind (ES2018)
const regexLiteralNegativeLookbehind = /(?<!prefix)abc/ // Negative lookbehind (ES2018)
const regexLiteralCharClasses = /\d\s\w\./ // Character classes (\d digit, \s space, \w word char) and escaped dot
const regexLiteralUnicode = /\p{Script=Greek}/u // Unicode property escapes (u flag required)
const regexLiteralDotAll = /begin.*end/s // Dot matches newline (s flag ES2018)
const regexLiteralSticky = /abc/y // Sticky flag (matches only at lastIndex)
const regexLiteralEmpty = /()/ // Empty group
const regexLiteralEscapedChars = /\/\*\$\^\+/ // Escaped special characters

// Example usage of a literal
let testString1 = 'Find abc and ABC.'
console.log('Literal /abc/gi test:', regexLiteralFlags.test(testString1)) // true

// 1b: RegExp Constructor (new RegExp("pattern", "flags"))
console.log('\n--- 1b: RegExp Constructor Creation ---')

const patternString = 'constructor'
const flagsString = 'i'
const regexConstructorSimple = new RegExp(patternString, flagsString)

// Note: Double escaping is required for special characters within the string pattern
const regexConstructorEscape = new RegExp('word\\d+', 'g') // Matches word1, word23 etc. Needs \\d
const regexConstructorBackslash = new RegExp('\\\\section') // Matches \section. Needs \\\\
const regexConstructorComplex = new RegExp('^(\\w+)-(\\d{4})$', 'm') // Multiline flag

// Building pattern dynamically
let userSearchTerm = 'dynamic term'
// Escape user input for literal use in regex pattern (simple example, robust escaping is complex)
let escapedTerm = userSearchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const regexFromVariable = new RegExp(`^${escapedTerm}$`, 'i')

// Creating from another regex (copies pattern and flags)
const regexCopy = new RegExp(regexLiteralFlags)

// Example usage of a constructor regex
let testString2 = 'Testing word1 and word22.'
console.log('Constructor /word\\d+/g test:', regexConstructorEscape.test(testString2)) // true

// --- Section 2: Using Regex - RegExp Methods ---

// 2a: RegExp.prototype.test() - Checks for a match (returns true/false)
console.log('\n--- 2a: regex.test(string) ---')

const patternExists = /exists/
const stringExists = 'The pattern exists here.'
const stringNotExists = 'The pattern is not here.'
console.log(`/exists/.test("${stringExists}"):`, patternExists.test(stringExists)) // true
console.log(`/exists/.test("${stringNotExists}"):`, patternExists.test(stringNotExists)) // false

// test() with global flag advances lastIndex
const globalTester = /a/g
let testStrGlobal = 'ababa'
console.log(
  `/a/g.test("${testStrGlobal}") iteration 1:`,
  globalTester.test(testStrGlobal),
  `lastIndex: ${globalTester.lastIndex}`,
) // true, lastIndex: 1
console.log(
  `/a/g.test("${testStrGlobal}") iteration 2:`,
  globalTester.test(testStrGlobal),
  `lastIndex: ${globalTester.lastIndex}`,
) // true, lastIndex: 3
console.log(
  `/a/g.test("${testStrGlobal}") iteration 3:`,
  globalTester.test(testStrGlobal),
  `lastIndex: ${globalTester.lastIndex}`,
) // true, lastIndex: 5
console.log(
  `/a/g.test("${testStrGlobal}") iteration 4:`,
  globalTester.test(testStrGlobal),
  `lastIndex: ${globalTester.lastIndex}`,
) // false, lastIndex: 0 (reset)

// 2b: RegExp.prototype.exec() - Finds first match and details (returns array or null)
console.log('\n--- 2b: regex.exec(string) ---')

const findDetails = /q(uick) brown (fox)/i // Capturing groups
const execString = 'The Quick brown Fox jumps'
const execResult = findDetails.exec(execString)
console.log(`/q(uick) brown (fox)/i.exec("${execString}"):`, execResult)
// Output: ["Quick brown Fox", "uick", "Fox", index: 4, input: "The Quick brown Fox jumps", groups: undefined]
if (execResult) {
  console.log('Full match:', execResult[0])
  console.log('Group 1:', execResult[1])
  console.log('Group 2:', execResult[2])
  console.log('Match index:', execResult.index)
}

const noMatchExec = findDetails.exec('Lazy dog')
console.log(`/q(uick) brown (fox)/i.exec("Lazy dog"):`, noMatchExec) // null

// exec() with global flag in a loop to find all matches
const findAllWords = /(\b\w{4}\b)/g // Find all 4-letter words
const wordsString = 'The quick brown fox jumps over the lazy dog'
let matchExec
console.log('Finding all 4-letter words with exec() loop:')
while ((matchExec = findAllWords.exec(wordsString)) !== null) {
  console.log(
    ` - Found '${matchExec[1]}' at index ${matchExec.index}. Next search starts at ${findAllWords.lastIndex}`,
  )
}

// Named capture groups (ES2018)
const namedGroupRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g
const dateString = 'Dates: 2025-04-28, 2026-01-15'
let namedMatch
console.log('Finding dates with named capture groups:')
while ((namedMatch = namedGroupRegex.exec(dateString)) !== null) {
  if (namedMatch.groups) {
    console.log(
      `  - Found: ${namedMatch[0]}, Year: ${namedMatch.groups.year}, Month: ${namedMatch.groups.month}`,
    )
  }
}

// --- Section 3: Using Regex - String Methods ---

// 3a: String.prototype.match() - Finds matches based on global flag
console.log('\n--- 3a: string.match(regex) ---')

const matchText = 'Rain rain go away, come again another day.'
const matchNonGlobal = /rain/i // Non-global, case-insensitive
const matchGlobal = /rain/gi // Global, case-insensitive

const resultMatchNonGlobal = matchText.match(matchNonGlobal)
console.log(`match() non-global (/rain/i):`, resultMatchNonGlobal)
// Output: ["Rain", index: 0, input: "...", groups: undefined] (like exec)

const resultMatchGlobal = matchText.match(matchGlobal)
console.log(`match() global (/rain/gi):`, resultMatchGlobal)
// Output: ["Rain", "rain", "again"] (array of matching strings only)

const resultMatchNone = matchText.match(/sunshine/)
console.log(`match() no match (/sunshine/):`, resultMatchNone) // null

// 3b: String.prototype.matchAll() - Iterator for all detailed matches (ES2020)
console.log('\n--- 3b: string.matchAll(regex) ---')

const matchAllText = 'Event: START Time: 10:30, Event: END Time: 11:45'
// Requires global flag
const matchAllRegex = /Event:\s*(?<event>\w+)\s+Time:\s*(?<time>\d{2}:\d{2})/gi

// Using try/catch because matchAll throws if regex is not global
try {
  const allMatches = matchAllText.matchAll(matchAllRegex)
  console.log('Iterating through matchAll results:')
  for (const match of allMatches) {
    console.log(
      ` - Full: "${match[0]}", Event: ${match.groups.event}, Time: ${match.groups.time}, Index: ${match.index}`,
    )
  }
} catch (e) {
  console.error('matchAll error:', e)
}

// Example showing the error if 'g' flag is missing
const matchAllRegexNoG = /Event:\s*(\w+)/i
try {
  matchAllText.matchAll(matchAllRegexNoG)
} catch (e) {
  console.error('matchAll error without global flag:', e.message) // TypeError expected
}

// 3c: String.prototype.search() - Finds index of first match (returns number or -1)
console.log('\n--- 3c: string.search(regex) ---')

const searchText = 'Can you find the hidden word?'
const searchRegex = /hidden/
const searchRegexNotFound = /missing/

console.log(`search(/hidden/): Index`, searchText.search(searchRegex)) // 18
console.log(`search(/missing/): Index`, searchText.search(searchRegexNotFound)) // -1
console.log(`search(/WORD/i): Index`, searchText.search(/WORD/i)) // 25 (ignores global flag)

// 3d: String.prototype.replace() - Replaces first or all matches
console.log('\n--- 3d: string.replace(regex, replacement) ---')

const replaceText = 'the quick brown fox and the slow fox'
const replaceRegexFirst = /fox/ // Non-global
const replaceRegexAll = /fox/g // Global

console.log('replace() first match:', replaceText.replace(replaceRegexFirst, 'cat'))
// Output: "the quick brown cat and the slow fox"
console.log('replace() all matches:', replaceText.replace(replaceRegexAll, 'cat'))
// Output: "the quick brown cat and the slow cat"

// Using capture groups in replacement ($1, $2, etc.)
const nameSwapText = 'Doe, John'
const nameSwapRegex = /(\w+),\s*(\w+)/
console.log(
  'replace() with capture groups:',
  nameSwapText.replace(nameSwapRegex, '$2 $1'),
)
// Output: "John Doe"

// Using a replacer function
const textWithNumbers = 'Item1, Item2, Item3'
function replacerFunc(match, group1) {
  let num = parseInt(group1)
  return 'Product-' + num * 10
}
console.log(
  'replace() with function:',
  textWithNumbers.replace(/Item(\d)/g, replacerFunc),
)
// Output: "Product-10, Product-20, Product-30"

// Special replacement patterns: $& (entire match), $` (text before), $' (text after), $$ (literal $)
console.log('replace() special patterns:', 'abc'.replace(/b/, "$& ($`) ($') $$"))
// Output: "ab ($a) (c) $c"

// 3e: String.prototype.replaceAll() - Replaces all matches (ES2021)
console.log('\n--- 3e: string.replaceAll(regex | substr, replacement) ---')

const replaceAllText = 'blue car, red car, blue bike'

// Using string replacement
console.log('replaceAll() with string:', replaceAllText.replaceAll('blue', 'green'))
// Output: "green car, red car, green bike"

// Using regex replacement (MUST have global flag 'g')
const replaceAllRegex = /car/g // Must be global
console.log(
  'replaceAll() with regex:',
  replaceAllText.replaceAll(replaceAllRegex, 'truck'),
)
// Output: "blue truck, red truck, blue bike"

// Example showing error if regex is not global
const replaceAllRegexNoG = /car/
try {
  replaceAllText.replaceAll(replaceAllRegexNoG, 'truck')
} catch (e) {
  console.error("replaceAll() regex error without 'g' flag:", e.message) // TypeError expected
}

// 3f: String.prototype.split() - Splits string into an array
console.log('\n--- 3f: string.split(separator | regex, limit) ---')

const csvData = 'apple,banana,orange,grape'
console.log('split() with string separator:', csvData.split(','))
// Output: ["apple", "banana", "orange", "grape"]

const spacedData = 'word1  word2\tword3\nword4'
const whitespaceRegex = /\s+/ // Split on one or more whitespace chars
console.log('split() with regex separator:', spacedData.split(whitespaceRegex))
// Output: ["word1", "word2", "word3", "word4"]

// Using limit
console.log('split() with limit:', csvData.split(',', 2))
// Output: ["apple", "banana"]

// Split with capturing group in regex includes captured results
const dataWithCapturedDelim = 'section1-dataA-section2-dataB'
const splitCaptureRegex = /-(\w+)-/ // Capture the letters between dashes
console.log(
  'split() with captured delimiters:',
  dataWithCapturedDelim.split(splitCaptureRegex),
)
// Output: ["section1", "dataA", "section2", "dataB", ""]

console.log('\n--- JavaScript Regex Syntax Test Finished ---')
