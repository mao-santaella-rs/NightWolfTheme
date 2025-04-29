//! Crate-level documentation comment for the syntax test module.
//! This file showcases various Rust syntax elements. Supports **Markdown**.
#![allow(dead_code)] // Allow unused code for demonstration purposes
#![allow(unused_variables)]
#![allow(unused_mut)]
#![allow(unused_imports)]
#![allow(unreachable_code)]
#![allow(unused_assignments)]
#![warn(unsafe_op_in_unsafe_fn)] // Example warning attribute
// #![feature(type_alias_impl_trait)] // Example feature gate (usually needs nightly)

// --- Imports and Module Structure ---
use std::collections::{HashMap, HashSet}; // Use specific items
use std::fmt::{self, Debug, Display}; // Use nested items and rename
use std::io::{self, Write as IoWrite}; // Rename with 'as'
use std::ops::{Add, Mul}; // Use traits
use std::rc::Rc; // Reference counting pointer
use std::sync::{Arc, Mutex}; // Thread-safe types
// use std::thread::*; // Wildcard import (glob) - generally discouraged

// --- Constants and Static Variables ---
const MAX_POINTS: u32 = 100_000; // Constant (type inferred or explicit)
static PROGRAM_NAME: &str = "Rust Syntax Test"; // Static variable (must have 'static lifetime)
static mut COUNTER: u32 = 0; // Mutable static (requires unsafe to access/modify)

// --- Type Alias ---
type PointId = u64;
type CoordinateMap = HashMap<PointId, (f64, f64)>;
// type ComplexFunction = dyn Fn(i32) -> Result<String, io::Error>; // Using dyn Trait

// --- Struct Definitions ---
/// A struct representing a point in 2D space.
#[derive(Debug, Clone, PartialEq, Default)] // Procedural macro attribute (derive)
struct Point {
    x: f64, // Field
    y: f64,
}

/// A generic struct holding a value.
#[derive(Copy)] // Can only be derived if T is Copy
struct GenericStruct<T: Copy> { // Generic struct with trait bound
    value: T,
}

/// A tuple struct for RGB colors.
struct Color(u8, u8, u8);

/// A unit struct (no fields).
struct EmptyStruct;

// --- Enum Definitions ---
/// An enum representing different message types.
#[derive(Debug)]
enum Message {
    Quit,                       // Unit variant
    Move { x: i32, y: i32 },    // Struct variant
    Write(String),              // Tuple variant
    ChangeColor(u8, u8, u8), // Tuple variant with multiple fields
}

/// A generic Option-like enum.
enum Maybe<T> {
    Something(T),
    Nothing,
}

// --- Union Definition (requires unsafe to access fields) ---
#[repr(C)] // Common representation for FFI
union IntOrFloat {
    i: i32,
    f: f32,
}

// --- Trait Definition ---
/// A trait for objects that can be summarized.
trait Summary {
    // Associated constant
    const SUMMARY_PREFIX: &'static str = "Summary";

    // Associated type
    type Metadata;

    // Required method signature with lifetime 'a
    fn summarize_author<'a>(&'a self) -> &'a str;

    // Required method with default implementation
    fn summarize(&self) -> String where Self: Debug { // Trait bound using 'where' clause
        format!("{}: Read more from {}... Content: {:?}",
                Self::SUMMARY_PREFIX, // Access associated const
                self.summarize_author(),
                self) // Using Debug derived implementation
    }

    // Static method in trait
    fn default_metadata() -> Self::Metadata;
}

// --- Implementation Blocks (impl) ---

// Inherent methods for Point
impl Point {
    // Associated function (static method / constructor pattern)
    fn new(x: f64, y: f64) -> Self { // 'Self' refers to the type 'Point'
        Point { x, y } // Field init shorthand
    }

    // Instance method (takes self)
    fn distance_from_origin(&self) -> f64 { // '&self' is shorthand for 'self: &Self'
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }

    // Mutable instance method
    fn translate(&mut self, dx: f64, dy: f64) { // '&mut self' is shorthand for 'self: &mut Self'
        self.x += dx;
        self.y += dy;
    }
}

// Implementing a trait for Point
impl Summary for Point {
    const SUMMARY_PREFIX: &'static str = "Point Summary"; // Override associated const
    type Metadata = String; // Define associated type

    fn summarize_author<'a>(&'a self) -> &'a str {
        "Geometry Engine" // Return a static string slice
    }

    // Override default method implementation
    fn summarize(&self) -> String {
        format!("Point({}, {}) by {}", self.x, self.y, self.summarize_author())
    }

    fn default_metadata() -> String {
        "2D Coordinate".to_string()
    }
}

// Implementing a standard library trait (Add) for Point
impl Add for Point {
    type Output = Self; // Associated type from Add trait

    fn add(self, other: Self) -> Self::Output { // 'self' takes ownership
        Point {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

// Generic implementation
impl<T: Copy + Debug> GenericStruct<T> {
    fn get_value(&self) -> T {
        println!("Getting value: {:?}", self.value);
        self.value
    }
}

// --- Function Definitions ---

/// The main entry point of the application.
/// Contains various syntax examples.
fn main() -> Result<(), io::Error> { // Return type using Result for error handling
    println!("--- {} Starting (MAX_POINTS={}) ---", PROGRAM_NAME, MAX_POINTS);

    // --- Variables, Mutability, Shadowing ---
    let immutable_var = 10; // Immutable by default
    let mut mutable_var = 20; // Mutable variable
    mutable_var += 5;

    let x = 5;
    let x = x + 1; // Shadowing previous x
    let x = x * 2; // Shadowing again

    let spaces = "   ";
    let spaces = spaces.len(); // Shadowing with different type

    // Type annotation
    let explicit_float: f32 = 3.14;

    // --- Literals ---
    let integer_literal = 1_23_456; // Underscores for readability
    let hex_literal = 0xff;
    let octal_literal = 0o77;
    let binary_literal = 0b1101_0010;
    let byte_literal: u8 = b'A'; // Byte literal (u8)

    let float_literal = 2.0; // f64 by default
    let float_suffix: f32 = 3.0f32;

    let char_literal = '😻'; // Unicode character
    let char_escape = '\n'; // Escape sequence

    let string_literal = "Hello, \"world\"!\n\t Escapes work.";
    let raw_string = r#"This is a raw string. Escapes \n are not processed."#;
    let byte_string = b"This is a byte string literal."; // &[u8; N]
    let raw_byte_string = br#"Raw \ byte \ string"#;

    let boolean_true = true;
    let boolean_false = false;

    // --- Data Structures ---
    let tuple: (i32, f64, char) = (500, 6.4, 'a');
    let (t1, t2, t3) = tuple; // Destructuring tuple
    println!("Tuple element: {}", tuple.1); // Access by index

    let array: [i32; 3] = [1, 2, 3]; // Fixed-size array [Type; Size]
    let first_element = array[0];
    let array_init = [0; 5]; // Initialize array with 5 zeros

    let slice: &[i32] = &array[1..3]; // Slice referencing part of the array

    // --- Operators ---
    let sum = 5 + 10;
    let difference = 9.5 - 4.3;
    let product = 4 * 30;
    let quotient = 56.7 / 32.2;
    let remainder = 43 % 5;

    let logical_and = true && false;
    let logical_or = true || false;
    let logical_not = !true;

    let bitwise_and = 0b1010 & 0b1100;
    let bitwise_or = 0b1010 | 0b1100;
    let bitwise_xor = 0b1010 ^ 0b1100;
    let bitwise_not = !0b1010i32;
    let left_shift = 0b101 << 2;
    let right_shift = 0b1010 >> 1;

    let range = 1..5; // Exclusive range
    let inclusive_range = 1..=5; // Inclusive range

    // --- Control Flow ---

    // If/Else If/Else
    let number = 6;
    if number % 4 == 0 {
        println!("Number is divisible by 4");
    } else if number % 3 == 0 {
        println!("Number is divisible by 3");
    } else {
        println!("Number is not divisible by 4 or 3");
    }

    // If let (destructuring Option)
    let maybe_number = Some(7);
    if let Some(value) = maybe_number {
        println!("Got a value from Option: {}", value);
    } else {
        println!("Got None");
    }

    // If as expression
    let condition = true;
    let result = if condition { 5 } else { 10 }; // Both branches must return same type

    // Loop (infinite loop)
    let mut counter = 0;
    loop {
        println!("Loop iteration {}", counter);
        counter += 1;
        if counter == 3 {
            break; // Exit loop
        }
    }

    // Loop returning a value
    counter = 0;
    let result_from_loop = loop {
        counter += 1;
        if counter == 5 {
            break counter * 2; // Return value from loop
        }
    };
    println!("Result from loop: {}", result_from_loop);

    // While loop
    let mut number = 3;
    while number != 0 {
        println!("While: {}!", number);
        number -= 1;
    }

    // While let
    let mut stack = vec![1, 2, 3];
    while let Some(top) = stack.pop() {
        println!("Popped from stack: {}", top);
    }

    // For loop (iterating over collection)
    let a = [10, 20, 30, 40, 50];
    for element in a.iter() { // Use .iter() for references
        println!("For loop element: {}", element);
    }

    // For loop (iterating over range)
    for num in (1..=4).rev() { // Reverse range
        println!("Countdown: {}!", num);
    }

    // --- Match Statement (Pattern Matching) ---
    let value_to_match = 3;
    match value_to_match {
        1 => println!("One"),
        2 | 3 | 5 | 7 => println!("This is a prime"), // Or pattern
        num @ 13..=19 => println!("A teen: {}", num), // Range and @ binding
        _ => println!("Ain't special"), // Wildcard (matches anything)
    }

    let point = Point { x: 0.0, y: 5.0 };
    match point {
        Point { x: 0.0, y: y_val } => println!("On the y-axis at {}", y_val), // Struct pattern
        Point { x, y: 0.0 } => println!("On the x-axis at {}", x),
        Point { x, y } => println!("Somewhere else: ({}, {})", x, y),
    }

    let msg = Message::Move { x: 10, y: -5 };
    match msg {
        Message::Quit => println!("Quit message"),
        Message::Move { x, y } if y < 0 => println!("Move down-left/right to ({}, {})", x, y), // Match guard
        Message::Move { x, y } => println!("Move to ({}, {})", x, y),
        Message::Write(text) => println!("Text message: {}", text),
        Message::ChangeColor(r, g, b) => println!("Change color to RGB({}, {}, {})", r, g, b),
    }

    // --- Ownership, Borrowing, Lifetimes ---
    let s1 = String::from("hello");
    // let s2 = s1; // Move (s1 is no longer valid)
    // println!("{}, world!", s1); // Compile Error: value borrowed here after move

    let s2 = s1.clone(); // Explicit clone for deep copy
    println!("s1 = {}, s2 = {}", s1, s2);

    take_ownership(s2); // s2 moved into function
    // println!("After take_ownership: {}", s2); // Compile Error

    let x = 5;
    make_copy(x); // i32 is Copy, so x is still valid
    println!("After make_copy: {}", x);

    let s3 = gives_ownership();
    let s4 = takes_and_gives_back(s3); // s3 moved in, ownership transferred to s4

    let len = calculate_length(&s4); // Borrow s4 (immutable reference)
    println!("The length of '{}' is {}.", s4, len);

    let mut s5 = String::from("mutable");
    change_string(&mut s5); // Mutable borrow
    println!("Changed string: {}", s5);

    // Explicit lifetimes
    let string1 = String::from("abcd");
    let string2 = "xyz";
    let result_lifetime = longest(string1.as_str(), string2); // Lifetime elision works here too
    println!("The longest string is '{}'", result_lifetime);

    // --- Structs and Enums Usage ---
    let p1 = Point::new(3.0, 4.0);
    let mut p2 = Point { x: 1.0, ..p1 }; // Struct update syntax (using fields from p1)
    p2.translate(0.5, 0.5);
    println!("Point p2: {:?}, distance: {}", p2, p2.distance_from_origin()); // {:?} uses Debug trait

    let color = Color(255, 165, 0); // Tuple struct instance
    println!("Color: R={}, G={}, B={}", color.0, color.1, color.2);

    let quit_msg = Message::Quit;
    let write_msg = Message::Write(String::from("Hello from enum"));

    // --- Traits Usage ---
    println!("{}", p1.summarize()); // Call trait method
    notify(&p1); // Pass anything implementing Summary
    // let item = returns_summarizable(); // Using 'impl Trait' as return type

    // --- Error Handling ---
    match read_username_from_file() {
        Ok(username) => println!("Username from file: {}", username),
        Err(e) => println!("Error reading username: {}", e),
    }
    // Using '?' operator (requires function to return Result or Option)
    let username_propagated = read_username_propagated()?;
    println!("Propagated username: {}", username_propagated);

    // Panic (unrecoverable error)
    // panic!("Farewell, cruel world!");

    // --- Closures ---
    let intensity = 10;
    // Closure capturing 'intensity' from environment
    let expensive_closure = |num: u32| -> u32 {
        println!("Calculating slowly...");
        // std::thread::sleep(std::time::Duration::from_secs(1)); // Simulate work
        num + intensity // Captures 'intensity' by reference implicitly
    };
    println!("Closure result: {}", expensive_closure(5));

    // 'move' closure forces capturing by value
    let data = vec![1, 2, 3];
    let move_closure = move || println!("Captured data by value: {:?}", data);
    move_closure();
    // println!("Data after move closure: {:?}", data); // Compile Error: data moved

    // Passing closure to function
    let list = vec![1, 2, 3];
    apply_closure(&list, |x| x * x);

    // --- Smart Pointers ---
    let b = Box::new(5); // Allocate on heap
    println!("b = {}", b);

    // --- Macros ---
    println!("This uses the println! macro. PI = {}", PI); // Built-in macro
    let my_vec = vec![1, 2, 3]; // vec! macro
    let formatted = format!("Formatted string: x={}, y={}", p1.x, p1.y); // format! macro
    assert_eq!(p1.x, 3.0); // assert_eq! macro

    // Custom macro usage
    custom_macro!(hello);
    let expr_result = custom_macro!(1 + 2);
    println!("Custom macro expr result: {}", expr_result);

    // --- Async/Await (Syntax only, requires runtime like tokio/async-std to run) ---
    // let async_result = run_async_tasks().await; // '.await' used inside async fn/block
    // println!("Async result: {}", async_result);

    // --- Unsafe Code ---
    let mut num = 5;
    let r1 = &num as *const i32; // Immutable raw pointer
    let r2 = &mut num as *mut i32; // Mutable raw pointer

    unsafe { // Unsafe block required for dereferencing raw pointers and accessing static mut
        println!("r1 is: {}", *r1);
        *r2 = 10; // Modify through mutable raw pointer
        println!("r2 is now: {}", *r2);

        // Accessing mutable static variable
        COUNTER += 1;
        println!("Static COUNTER: {}", COUNTER);

        // Calling unsafe function
        dangerous_function();

        // Accessing union field
        let u = IntOrFloat { i: 42 };
        println!("Union as int: {}", u.i);
        // println!("Union as float: {}", u.f); // Accessing inactive field is UB
    }

    println!("--- {} Finishing ---", PROGRAM_NAME);
    Ok(()) // Return Ok for main function's Result
}

// --- Helper Function Definitions ---

/// Takes ownership of a String.
fn take_ownership(some_string: String) {
    println!("Took ownership of: {}", some_string);
} // `some_string` goes out of scope and `drop` is called.

/// Makes a copy of an integer.
fn make_copy(some_integer: i32) {
    println!("Made copy of: {}", some_integer);
} // `some_integer` goes out of scope. Nothing special happens.

/// Gives ownership of a String.
fn gives_ownership() -> String {
    let some_string = String::from("yours");
    some_string // Returned, ownership moves out
}

/// Takes and returns ownership of a String.
fn takes_and_gives_back(a_string: String) -> String {
    a_string // Returned, ownership moves out
}

/// Calculates length by borrowing a String.
fn calculate_length(s: &String) -> usize { // `s` is a reference (borrow)
    s.len()
} // `s` goes out of scope, but what it refers to is not dropped.

/// Modifies a String through a mutable borrow.
fn change_string(some_string: &mut String) {
    some_string.push_str(", world");
}

/// Function with explicit lifetimes.
/// Returns the longest of two string slices.
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    // The returned reference must be valid for the shorter of 'a from x and y
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
// Example struct using lifetimes (not used in main, just for syntax)
struct ImportantExcerpt<'a> {
    part: &'a str,
}

/// Function demonstrating generic type parameters and trait bounds.
fn notify<T: Summary>(item: &T) { // Accepts any type implementing Summary trait
    println!("Breaking news! {}", item.summarize());
}
// Alternative trait bound syntax with 'where' clause
// fn notify<T>(item: &T) where T: Summary { ... }

/// Function returning a type that implements a trait.
// fn returns_summarizable() -> impl Summary { // `impl Trait` syntax
//     Point { x: 1.0, y: 1.0 } // Can return any concrete type implementing Summary
// }

/// Example function demonstrating error propagation with '?'.
fn read_username_from_file() -> Result<String, io::Error> {
    // Long way
    let f = std::fs::File::open("username.txt");
    let mut f = match f {
        Ok(file) => file,
        Err(e) => return Err(e), // Return error early
    };
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

/// More concise error propagation using '?'.
fn read_username_propagated() -> Result<String, io::Error> {
    let mut s = String::new();
    // '?' operator returns the Err variant early if operation fails
    std::fs::File::open("username.txt")?.read_to_string(&mut s)?;
    // Can be chained further:
    // let mut s = std::fs::read_to_string("username.txt")?;
    Ok(s)
}

/// Function that accepts a closure.
fn apply_closure<F>(data: &[i32], func: F)
    where F: Fn(i32) -> i32 // Closure trait bound
{
    for &item in data {
        println!("Applying closure: {} -> {}", item, func(item));
    }
}

// --- Async Function Example ---
/// Example async function (requires runtime).
async fn async_fetch_data(url: &str) -> Result<String, String> {
    println!("Fetching data from {}...", url);
    // In real code: use reqwest or similar library with .await
    // await reqwest::get(url)?.text().await;
    tokio::time::sleep(std::time::Duration::from_millis(50)).await; // Simulate async work
    Ok(format!("Data from {}", url))
}

/// Example function running multiple async tasks.
async fn run_async_tasks() -> String {
    let task1 = async_fetch_data("http://example.com");
    let task2 = async { // Async block
        println!("Starting short async block");
        tokio::time::sleep(std::time::Duration::from_millis(10)).await;
        "Short task done".to_string()
    };

    // Run tasks concurrently (example using hypothetical join)
    // let (result1, result2) = tokio::join!(task1, task2);
    let result1 = task1.await; // Simple sequential await for syntax demo
    let result2 = task2.await;

    format!("Results: {:?} | {}", result1, result2)
}


// --- Unsafe Function and FFI ---
/// An example of an unsafe function.
unsafe fn dangerous_function() {
    println!("Called an unsafe function!");
    // Must be called within an unsafe block
}

// External C function declaration
extern "C" {
    fn abs(input: i32) -> i32; // Link to C standard library function
}

// Defining a function to be called from C
#[no_mangle] // Preserve function name
pub extern "C" fn rust_callable_function(x: i32) -> i32 {
    println!("Rust function called from C with {}", x);
    x * 2
}


// --- Custom Macro Definition ---
/// A simple declarative macro example.
macro_rules! custom_macro {
    // Matcher for a single identifier 'hello'
    (hello) => {
        println!("Custom macro says hello!");
    };
    // Matcher for an expression
    ($expression:expr) => {
        // Return the value of the expression
        $expression
    };
}

// --- Module for Tests ---
#[cfg(test)] // Only compile when running tests
mod tests {
    use super::*; // Import items from outer module

    #[test] // Test attribute
    fn test_point_addition() {
        let p1 = Point { x: 1.0, y: 2.0 };
        let p2 = Point { x: 3.0, y: 4.0 };
        let expected = Point { x: 4.0, y: 6.0 };
        assert_eq!(p1 + p2, expected); // assert_eq! macro
    }

    #[test]
    #[ignore] // Ignore this test
    fn expensive_test() {
        // assert!(false, "This test failed intentionally"); // assert! macro with message
    }

    #[test]
    #[should_panic(expected = "index out of bounds")] // Test expected panic
    fn test_out_of_bounds() {
        let v = vec![1, 2, 3];
        v[99]; // This will panic
    }
}