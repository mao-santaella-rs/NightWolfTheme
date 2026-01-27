// Rust example: comprehensive small program
use std::sync::mpsc;
use std::thread;
use std::time::Duration;

trait Describable {
    fn describe(&self) -> String;
}

#[derive(Debug, Clone)]
struct Person {
    name: String,
    age: u32,
}

impl Describable for Person {
    fn describe(&self) -> String {
        format!("Person(name={}, age={})", self.name, self.age)
    }
}

impl Person {
    fn new(name: &str, age: u32) -> Self {
        Self { name: name.to_string(), age }
    }

    fn have_birthday(&mut self) {
        self.age += 1;
    }
}

#[derive(Debug)]
enum CalculationError {
    DivisionByZero,
}

fn divide(a: f64, b: f64) -> Result<f64, CalculationError> {
    if b == 0.0 {
        Err(CalculationError::DivisionByZero)
    } else {
        Ok(a / b)
    }
}

// Generic function
fn max_of<T: Ord + Copy>(a: T, b: T) -> T {
    if a >= b { a } else { b }
}

fn main() {
    // Structs, traits, and mutation
    let mut p = Person::new("Iris", 27);
    println!("{}", p.describe());
    p.have_birthday();
    println!("After birthday: {}", p.describe());

    // Result and error handling
    match divide(10.0, 2.0) {
        Ok(r) => println!("10 / 2 = {}", r),
        Err(e) => println!("Divide error: {:?}", e),
    }

    match divide(1.0, 0.0) {
        Ok(r) => println!("1 / 0 = {}", r),
        Err(_) => println!("Handled division by zero")
    }

    // Generics and iterators
    let a = 10;
    let b = 20;
    println!("max({}, {}) = {}", a, b, max_of(a, b));

    let nums: Vec<i32> = (1..=5).collect();
    let doubled: Vec<i32> = nums.iter().map(|n| n * 2).collect();
    println!("nums = {:?}, doubled = {:?}", nums, doubled);

    // Concurrency: threads + channel
    let (tx, rx) = mpsc::channel();
    let handle = thread::spawn(move || {
        let vals = vec![1, 2, 3, 4, 5];
        for v in vals {
            tx.send(v).unwrap();
            thread::sleep(Duration::from_millis(50));
        }
    });

    let mut sum = 0;
    for received in rx {
        println!("Got: {}", received);
        sum += received;
    }
    handle.join().unwrap();
    println!("Sum from thread = {}", sum);
}

// Small unit test section
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_divide_ok() {
        assert_eq!(divide(6.0, 3.0).unwrap(), 2.0);
    }

    #[test]
    fn test_divide_err() {
        assert!(divide(1.0, 0.0).is_err());
    }

    #[test]
    fn test_max_of() {
        assert_eq!(max_of(3, 7), 7);
    }
}
