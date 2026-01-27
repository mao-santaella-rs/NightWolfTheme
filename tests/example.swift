// Swift example: comprehensive small program
import Foundation

protocol Describable {
    func describe() -> String
}

struct Person: Describable {
    let name: String
    var age: Int

    func describe() -> String {
        return "Person(name: \(name), age: \(age))"
    }

    mutating func haveBirthday() {
        age += 1
    }
}

enum CalculationError: Error {
    case divisionByZero
}

func divide(_ a: Double, by b: Double) throws -> Double {
    guard b != 0 else { throw CalculationError.divisionByZero }
    return a / b
}

// Async example (requires Swift 5.5+)
@available(macOS 12, *)
func fetchGreeting() async -> String {
    // simulate async work
    try? await Task.sleep(nanoseconds: 100_000_000)
    return "Hello from async Swift!"
}

// Main usage
func main() async {
    var p = Person(name: "Ava", age: 29)
    print(p.describe())
    p.haveBirthday()
    print("After birthday: \(p.describe())")

    do {
        let result = try divide(10, by: 2)
        print("10 / 2 = \(result)")
    } catch {
        print("Divide error: \(error)")
    }

    if #available(macOS 12, *) {
        let greeting = await fetchGreeting()
        print(greeting)
    } else {
        print("Async not available on this platform")
    }
}

// Entry point
if #available(macOS 12, *) {
    Task { await main() }
    // keep the program alive briefly for the async Task when run as script
    Thread.sleep(forTimeInterval: 0.3)
} else {
    // Fallback to synchronous parts
    var p = Person(name: "Ava", age: 29)
    print(p.describe())
}
