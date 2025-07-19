// types.ts

// 1. Basic Types
let id: number = 123
let name: string = 'Mao'
let isActive: boolean = true
let nothing: null = null
let notDefined: undefined = undefined
let symbolValue: symbol = Symbol('unique')

// 2. Arrays & Tuples
let numbers: number[] = [1, 2, 3]
let strings: Array<string> = ['a', 'b']
let tuple: [string, number, boolean] = ['foo', 42, true]

// 3. Enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let dir: Direction = Direction.Up

// 4. Objects & Type Aliases
type User = {
  id: number
  name: string
  isAdmin?: boolean // optional property
  readonly email: string // readonly property
}
const user: User = { id: 1, name: 'Mao', email: 'mao@example.com' }

// 5. Interfaces
interface Product {
  id: number
  name: string
  price: number
  tags?: string[]
}
const product: Product = { id: 1, name: 'Book', price: 9.99 }

// 6. Functions & Function Types
function add(a: number, b: number): number {
  return a + b
}
type MathOp = (x: number, y: number) => number
const multiply: MathOp = (x, y) => x * y

// 7. Union & Intersection Types
type StringOrNumber = string | number
type Admin = User & { adminLevel: number }
const admin: Admin = {
  id: 2,
  name: 'Admin',
  email: 'admin@example.com',
  adminLevel: 1,
}

// 8. Literal Types
type DirectionLiteral = 'up' | 'down' | 'left' | 'right'
let move: DirectionLiteral = 'up'

// 9. Type Assertions
let someValue: any = 'hello'
let strLength: number = (someValue as string).length

// 10. Unknown & Never
function fail(msg: string): never {
  throw new Error(msg)
}
let input: unknown = 'test'
if (typeof input === 'string') {
  // type guard
  console.log(input.toUpperCase())
}

// 11. Generics
function identity<T>(value: T): T {
  return value
}
let num = identity<number>(123)
let str = identity('abc')

type Pair<T, U> = { first: T; second: U }
const pair: Pair<number, string> = { first: 1, second: 'one' }

// 12. Generic Constraints
function getLength<T extends { length: number }>(item: T): number {
  return item.length
}

// 13. Keyof, typeof, and Indexed Access Types
type UserKeys = keyof User // "id" | "name" | "isAdmin" | "email"
type EmailType = User['email'] // string

const userKeys: UserKeys = 'name'

// 14. Mapped Types
type ReadonlyUser = { readonly [K in keyof User]: User[K] }

// 15. Conditional Types
type IsString<T> = T extends string ? true : false
type Test1 = IsString<string> // true
type Test2 = IsString<number> // false

// 16. Utility Types
type PartialUser = Partial<User>
type RequiredUser = Required<User>
type PickUser = Pick<User, 'id' | 'name'>
type OmitUser = Omit<User, 'email'>
type RecordType = Record<'a' | 'b', number>

// 17. Template Literal Types
type EventName = `on${Capitalize<DirectionLiteral>}` // "onUp" | "onDown" | ...

// 18. Recursive Types
type Json = string | number | boolean | null | Json[] | { [key: string]: Json }

// 19. Discriminated Unions
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'rectangle'; width: number; height: number }

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.size ** 2
    case 'rectangle':
      return shape.width * shape.height
  }
}

// 20. This Types
interface Counter {
  count: number
  inc(this: Counter): void
}
const counter: Counter = {
  count: 0,
  inc() {
    this.count++
  },
}

// 21. Type Guards & Custom Type Predicates
function isString(x: unknown): x is string {
  return typeof x === 'string'
}

// 22. Intersection with Interfaces
interface A {
  a: string
}
interface B {
  b: number
}
type AB = A & B
const ab: AB = { a: 'foo', b: 42 }

// 23. Optional Chaining & Nullish Coalescing
const maybeUser: User | null = null
const userName = maybeUser?.name ?? 'Guest'

// 24. Indexed Signatures
interface Dictionary {
  [key: string]: string | number
}
const dict: Dictionary = { foo: 'bar', baz: 42 }

// 25. Module Augmentation (Advanced)
declare global {
  interface Array<T> {
    first(): T | undefined
  }
}
Array.prototype.first = function () {
  return this.length > 0 ? this[0] : undefined
}

// 26. Symbol as Property Key
const uniqueKey = Symbol('unique')
type WithSymbol = {
  [uniqueKey]: string
}
const obj: WithSymbol = { [uniqueKey]: 'value' }

// 27. Readonly and Const Assertions
const arr = [1, 2, 3] as const
type ArrType = typeof arr // readonly [1, 2, 3]

// 28. Function Overloads
function reverse(str: string): string
function reverse<T>(arr: T[]): T[]
function reverse(arg: any): any {
  if (typeof arg === 'string') {
    return arg.split('').reverse().join('')
  }
  return arg.slice().reverse()
}

// 29. Abstract Classes
abstract class Animal {
  abstract speak(): void
}
class Dog extends Animal {
  speak() {
    console.log('Woof!')
  }
}

// 30. Constructor Types
type Constructor<T = {}> = new (...args: any[]) => T
function withTimestamp<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now()
  }
}

type SlashSplit<T extends string> = T extends ``
  ? []
  : T extends `/${infer TSingle}`
    ? [...SlashSplit<TSingle>]
    : T extends `${infer TDouble1}/${infer TDouble2}`
      ? [TDouble1, ...SlashSplit<TDouble2>]
      : [T]

type PartialRoute<S extends string> = S extends `[[...]]`
  ? { [K in `...`]?: string }
  : S extends `[...]`
    ? { [K in `...`]: string }
    : S extends `[[...${infer OptionalArrayName}]]`
      ? { [K in OptionalArrayName]?: string[] }
      : S extends `[[${infer OptionalStringName}]]`
        ? { [K in OptionalStringName]?: string }
        : S extends `[...${infer ArrayName}]`
          ? { [K in ArrayName]: string[] }
          : S extends `[${infer StringName}]`
            ? { [K in StringName as StringName extends '' ? never : K]: string }
            : {}

type ObjectValue<T> = T[keyof T]

type PathObject<S extends string[], Obj = {}, AddedArrayAndNoString = false> = S extends [
  infer FirstElem extends string,
  ...infer Rest extends string[],
]
  ? string[] extends ObjectValue<PartialRoute<FirstElem>>
    ? // if we have added an array without a string in between then it is invalid
      AddedArrayAndNoString extends true
      ? never
      : PathObject<Rest, PartialRoute<FirstElem> & Obj, true>
    : // no dynamic params case
      ObjectValue<PartialRoute<FirstElem>> extends never
      ? PathObject<Rest, PartialRoute<FirstElem> & Obj, false>
      : PathObject<Rest, PartialRoute<FirstElem> & Obj, AddedArrayAndNoString>
  : Obj

// this type is necessary because apparently { foo: string } & { bar: string }
// is not equivalent to { foo: string, bar: string }, learnt something new
type Mix<Obj> = {
  [K in keyof Obj]: Obj[K]
}

type DynamicRoute<T extends string> = Mix<PathObject<SlashSplit<T>>>

// -*- coding: utf-8 -*-
/**
 * TypeScript Syntax Highlighting Test File
 *
 * This file includes a variety of TypeScript and JavaScript constructs
 * to test syntax highlighting in code editors and themes.
 * Covers types, interfaces, classes, generics, modules, decorators, etc.
 */

// --- Triple Slash Directives ---
/// <reference path="some-other-file.d.ts" />
/// <reference types="node" />

// --- Imports & Exports ---
import * as fs from 'fs' // Namespace import
import { EventEmitter } from 'events' // Named import
import DefaultExport, { HelperClass, helperFunction as renamedHelper } from './my-module' // Default, named, and renamed imports
import type { SomeType, AnotherType } from './my-types' // Type-only import

export const PI = 3.14159 // Exported constant
export default class MainApplication extends EventEmitter {
  // Exported default class
  // ... class body ...
}
export { helperFunction } from './another-module' // Re-export

// --- Comments ---
// This is a single-line comment.
/* This is a
   multi-line comment. */
/**
 * This is a JSDoc comment.
 * @param input Some input parameter.
 * @returns A processed string.
 */
// TODO: Implement feature X
// FIXME: Fix bug Y

// --- Basic Variables & Literals ---
let message: string = 'Hello, TypeScript!'
const count: number = 42
let isDone: boolean = false
const bigIntValue: bigint = 9007199254740991n
let nullableValue: string | null = null
let undefinedValue: number | undefined = undefined
let anyValue: any = 'can be anything' // Avoid 'any' if possible
let unknownValue: unknown = 123 // Safer alternative to 'any'

const templateString = `Count is ${count}, message is: "${message}"`
const regexLiteral: RegExp = /ab+c/i

const list: number[] = [1, 2, 3]
const genericList: Array<string> = ['a', 'b', 'c']
const tupleType: [string, number, boolean?] = ['hello', 10, true] // Optional element

const objectLiteral = {
  key: 'value',
  'another-key': 100,
  nested: {
    flag: true,
  },
}

// --- Enums ---
enum Color {
  Red, // Starts at 0
  Green, // 1
  Blue, // 2
}
enum Status {
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
}

let colorVal: Color = Color.Green
let statusVal: Status = Status.Processing

// --- Interfaces ---
interface Point {
  readonly x: number // Readonly property
  y: number
  z?: number // Optional property
  label?: string
}

interface Movable {
  move(distance: number): void
}

interface Shape extends Movable {
  // Interface inheritance
  getArea: () => number // Function type property
  [propName: string]: any // Index signature
}

// Implementing an interface
class Square implements Shape {
  // Parameter properties (shortcut for declaring and initializing)
  constructor(
    public side: number,
    public label: string = 'Default Square',
  ) {}

  move(distance: number): void {
    console.log(`Square moved ${distance} units.`)
  }

  getArea(): number {
    return this.side * this.side
  }

  // Fulfills the index signature implicitly or explicitly
  customProp: boolean = true
}

// --- Type Aliases ---
type StringOrNumber = string | number
type PointCoords = { x: number; y: number } // Object type alias
type UserID = number
type CallbackFn = (error: Error | null, result?: string) => void // Function type alias
type LiteralType = 'click' | 'hover' | 'focus'
type CombinedType = PointCoords & { z: number } // Intersection type

let userId: UserID = 12345
let eventType: LiteralType = 'click'
let mixedVar: StringOrNumber = 'hello'
mixedVar = 100

// --- Functions ---
function add(x: number, y: number): number {
  return x + y
}

const subtract = (a: number, b: number): number => a - b // Arrow function

function greet(name: string, greeting: string = 'Hello'): string {
  // Default parameter
  return `${greeting}, ${name}!`
}

function processItems(prefix: string, ...items: string[]): void {
  // Rest parameter
  items.forEach((item) => console.log(`${prefix}: ${item}`))
}

// Function Overloads
function formatData(data: string): string
function formatData(data: number, decimals: number): string
function formatData(data: any, decimals?: number): string {
  if (typeof data === 'string') {
    return data.toUpperCase()
  } else if (typeof data === 'number' && decimals !== undefined) {
    return data.toFixed(decimals)
  }
  return String(data)
}

let formattedString = formatData('test')
let formattedNumber = formatData(123.456, 2)

// --- Classes ---
abstract class Animal {
  // Abstract class
  protected name: string // Protected member
  private age: number // Private member

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  abstract makeSound(): void // Abstract method

  public move(distance: number = 0): void {
    // Public method (default)
    console.log(`${this.name} moved ${distance}m.`)
  }

  get animalAge(): number {
    // Getter
    return this.age
  }

  set animalAge(newAge: number) {
    // Setter
    if (newAge > 0) {
      this.age = newAge
    }
  }

  static staticMethod() {
    // Static method
    console.log('This is a static method from Animal')
  }
}

class Dog extends Animal implements Movable {
  // Inheritance and implementation
  constructor(name: string, age: number) {
    super(name, age)
  }

  makeSound(): void {
    // Implementation of abstract method
    console.log('Woof! Woof!')
  }

  // Implementation of Movable interface method is inherited from Animal
}

const dog = new Dog('Buddy', 5)
dog.move(10)
dog.makeSound()
console.log(`Dog's age: ${dog.animalAge}`)
dog.animalAge = 6
Animal.staticMethod()

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

// --- Generics ---
function identity<T>(arg: T): T {
  return arg
}
let output = identity<string>('myString')
let outputNum = identity(123) // Type inference

interface Lengthwise {
  length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // Generic constraint
  console.log(arg.length)
  return arg
}
loggingIdentity({ length: 10, value: 3 })
// loggingIdentity(3); // Error: number doesn't have length property

class GenericContainer<T> {
  private value: T
  constructor(value: T) {
    this.value = value
  }
  getValue(): T {
    return this.value
  }
}
let stringContainer = new GenericContainer<string>('Test')
let numberContainer = new GenericContainer(42) // Type inference

// --- Decorator Definition ---
function Sealed(constructor: Function) {
  console.log(`Sealing the constructor: ${constructor.name}`)
  Object.seal(constructor) // Prevents adding new properties to the constructor itself
  Object.seal(constructor.prototype) // Prevents adding new properties to the prototype (instances)
}

function* generator() {
  yield 1
  yield 2
  yield 3
}

// --- Usage ---
@Sealed
class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
    console.log('Greeter instance created')
  }

  greet() {
    return 'Hello, ' + this.greeting
  }
}

// Test
const g = new Greeter('world')
console.log(g.greet())

// Try to add properties (will fail silently or throw in strict mode if already sealed)
try {
  // (Greeter.prototype as any).newMethod = () => { console.log('new method'); }; // Fails
  // (g as any).newProp = 'test'; // Fails
} catch (e) {
  console.error('Error trying to modify sealed object:', e)
}

console.log('Is Greeter sealed?', Object.isSealed(Greeter))
console.log('Is Greeter.prototype sealed?', Object.isSealed(Greeter.prototype))

// interface GenericPair<K, V> {
//   key: K;
//   value: V;
// }
// let pair: GenericPair<number, string> = { key: 1, value: "one" };

// // --- Type Assertions & Guards ---
// let someValue: unknown = "this is a string";
// let strLength: number = (someValue as string).length; // 'as' syntax
// let strLength2: number = (<string>someValue).length; // '<>' syntax (avoid in JSX/TSX)

// function isNumber(value: any): value is number { // Type predicate
//   return typeof value === 'number';
// }
// if (isNumber(unknownValue)) {
//   console.log(unknownValue.toFixed(2)); // unknownValue is treated as number here
// }

// // Non-null assertion operator
// function processNullable(value: string | null | undefined) {
//     const upper = value!.toUpperCase(); // Asserts 'value' is not null/undefined
//     console.log(upper);
// }
// // processNullable(null); // This would cause a runtime error

// // --- Operators ---
// let sum = 5 + 3;
// let fullName = "John" + " " + "Doe";
// let isGreater = 10 > 5;
// let isAuth = true && isDone;
// let hasAccess = isAuth || colorVal === Color.Red;
// let bitwiseAnd = 5 & 3; // 1
// let bitwiseOr = 5 | 3; // 7

// // Optional Chaining (?.) and Nullish Coalescing (??)
// const user = {
//   id: 1,
//   profile: {
//     name: "Alice",
//     // address: { street: "123 Main St" } // Address might be missing
//   }
// };
// const streetName = user.profile?.address?.street ?? "Address not provided"; // Use ?? for default
// console.log(`Street: ${streetName}`);

// // Spread operator
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];
// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 };

// // --- Control Flow ---
// if (count > 50) {
//   console.log("Count is large");
// } else if (count > 10) {
//   console.log("Count is medium");
// } else {
//   console.log("Count is small");
// }

// switch (colorVal) {
//   case Color.Red:
//     console.log("Color is Red");
//     break;
//   case Color.Green:
//   case Color.Blue:
//     console.log("Color is Green or Blue");
//     break;
//   default:
//     const exhaustiveCheck: never = colorVal; // Exhaustiveness check
//     console.log("Unknown color");
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`For loop: ${i}`);
// }

// for (const key in objectLiteral) {
//   if (objectLiteral.hasOwnProperty(key)) {
//     console.log(`For...in key: ${key}`);
//   }
// }

// for (const item of genericList) {
//   console.log(`For...of item: ${item}`);
// }

// let whileCounter = 0;
// while (whileCounter < 2) {
//   console.log(`While loop: ${whileCounter}`);
//   whileCounter++;
// }

// try {
//   throw new Error("Something went wrong!");
// } catch (error) {
//   if (error instanceof Error) {
//     console.error(`Caught error: ${error.message}`);
//   } else {
//     console.error(`Caught unknown error: ${error}`);
//   }
// } finally {
//   console.log("Finally block executed.");
// }

// // --- Decorators (Requires "experimentalDecorators": true in tsconfig.json) ---
// function sealed(constructor: Function) {
//   console.log("Sealing the constructor");
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// }

// function enumerable(value: boolean) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log(`Setting enumerability of ${propertyKey} to ${value}`);
//     descriptor.enumerable = value;
//   };
// }

// function logParameter(target: any, propertyKey: string, parameterIndex: number) {
//     console.log(`Logging parameter ${parameterIndex} for method ${propertyKey}`);
// }

@sealed
class DecoratedClass {
  private _prop: string = 'test'

  @enumerable(false)
  greet(@logParameter message: string): string {
    return `Hello, ${message}, prop is ${this._prop}`
  }
}

// --- Modules and Namespaces ---
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }
  const lettersRegexp = /^[A-Za-z]+$/
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s)
    }
  }
}
let validator = new Validation.LettersOnlyValidator()
console.log(`Is "Hello" valid? ${validator.isAcceptable('Hello')}`)

// // --- Advanced Types ---
// type Keys = keyof Point; // 'x' | 'y' | 'z' | 'label'
// type PointXType = Point['x']; // number

// // Mapped Types
// type ReadonlyPoint = { readonly [P in keyof Point]: Point[P] };
// type OptionalPoint = { [P in keyof Point]?: Point[P] };
// type NullablePoint = { [P in keyof Point]: Point[P] | null };

// // Conditional Types
// type TypeName<T> =
//   T extends string ? "string" :
//   T extends number ? "number" :
//   T extends boolean ? "boolean" :
//   T extends undefined ? "undefined" :
//   T extends Function ? "function" :
//   "object";

// type T0 = TypeName<string>;  // "string"
// type T1 = TypeName<() => void>; // "function"
// type T2 = TypeName<string[]>; // "object"

// // --- Async/Await ---
// function delay(ms: number): Promise<void> {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function asyncFunctionExample(): Promise<string> {
//   console.log("Async function started...");
//   await delay(100); // Pauses execution
//   console.log("...resumed after delay.");
//   const result = await Promise.resolve("Async result");
//   return result;
// }

// async function runAsync() {
//   try {
//     const data = await asyncFunctionExample();
//     console.log(`Received async data: ${data}`);
//   } catch (error) {
//       console.error("Error in async operation:", error);
//   }
// }

// runAsync(); // Call the async function

// // --- Built-in Objects & Methods ---
// console.log("Logging to console");
const dateNow: Date = new Date()
// const randomNumber: number = Math.random();
// const jsonString: string = JSON.stringify({ a: 1, b: [2, 3] });
// const parsedObject: any = JSON.parse(jsonString);

// // --------------------------------------------------------------------------
// // --- JSX Syntax (Relevant for .tsx files, requires "jsx": "react" or similar in tsconfig) ---
// // --------------------------------------------------------------------------

// /*
// // This section should be placed in a .tsx file to be parsed correctly.
// // You'll also need React types: npm install --save-dev @types/react

// import React from 'react'; // Assuming React environment

// // Functional Component with props type
// interface MyComponentProps {
//   title: string;
//   count?: number; // Optional prop
//   children?: React.ReactNode; // Type for children elements
// }

// const MyComponent: React.FC<MyComponentProps> = ({ title, count = 0, children }) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log('Button clicked!', event.currentTarget);
//   };

//   // JSX Syntax: tags, attributes, embedded expressions, children
//   return (
//     <div className="my-component" data-title={title}>
//       <h1>{title.toUpperCase()}</h1>
//       {count > 0 && <p>Count: {count}</p>}
//       <button onClick={handleClick} disabled={count <= 0}>
//         Click Me
//       </button>
//       <div style={{ border: '1px solid red', padding: 10 }}>
//         {children ? children : <p>No children provided.</p>}
//       </div>
//     </div>
//   );
// };

// // Using the component
// const App = () => (
//   <div>
//     <MyComponent title="Test Component" count={5}>
//       <span>This is a child element</span>
//       <> {/* Fragment shorthand */}
//         <p>Another child</p>
//       </>
//     </MyComponent>
//     <MyComponent title="Another Instance" />
//   </div>
// );
// */

// // --- End of Test File ---
// console.log("\n--- End of TypeScript Syntax Test ---");
