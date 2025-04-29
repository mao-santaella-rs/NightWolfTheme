/**
 * Java Syntax Highlighting Test File
 *
 * This file includes a variety of Java constructs to test syntax highlighting
 * in code editors and themes. It covers core Java features and some newer additions.
 *
 * Compile with JDK 17+ for full feature compatibility (records, sealed classes, etc.)
 */

// --- Package and Imports ---
package com.example.syntaxtest; // Package declaration

import java.io.*; // Import specific class
import java.util.*; // Import all classes in package
import java.util.function.*; // Import functional interfaces
import java.lang.annotation.*; // Import annotation related classes
import static java.lang.Math.PI; // Static import for constant
import static java.lang.System.out; // Static import for static method

// --- Annotations ---
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD, ElementType.FIELD})
@Documented // Should appear in Javadoc
@Inherited  // Subclasses inherit this annotation (on classes)
@interface CustomAnnotation {
    String value() default "DefaultValue"; // Annotation element with default
    int level();
    String[] tags() default {};
}

// --- Enum Definition ---
enum Signal {
    RED("Stop"), // Enum constants with arguments
    YELLOW("Caution"),
    GREEN("Go"); // Semicolon needed if there are members below

    private final String description; // Enum field

    Signal(String description) { // Enum constructor (implicitly private)
        this.description = description;
    }

    public String getDescription() { // Enum method
        return description;
    }

    // Static method in enum
    public static Signal fromDescription(String desc) {
        for (Signal s : values()) {
            if (s.description.equalsIgnoreCase(desc)) {
                return s;
            }
        }
        return null; // Or throw exception
    }
}

// --- Interface Definition (with default and static methods) ---
@FunctionalInterface // Marks this as intended for lambda expressions
interface Calculable<T extends Number> { // Generic interface with bounded type parameter
    T calculate(T a, T b); // Abstract method

    // Default method (Java 8+)
    default void printResult(T result) {
        out.println("Interface Default Method Result: " + result);
    }

    // Static method (Java 8+)
    static void description() {
        out.println("This is a calculable interface.");
    }

    // Private method (Java 9+) - helper for default methods
    private void log(String message) {
        System.err.println("Log: " + message);
    }
}

// --- Record Definition (Java 14+) ---
record Point(int x, int y) implements Serializable { // Implicitly final, generates constructor, getters, equals, hashCode, toString
    // Compact constructor
    public Point {
        if (x < 0 || y < 0) {
            throw new IllegalArgumentException("Coordinates must be non-negative");
        }
    }
    // Static factory method
    public static Point origin() {
        return new Point(0, 0);
    }
    // Instance method
    public double distanceToOrigin() {
        return Math.sqrt(x*x + y*y);
    }
}

// --- Sealed Class Definition (Java 17+) ---
sealed abstract class Shape permits Circle, Rectangle, Square { // Sealed class restricts subclasses
    abstract double area();

    // Final method in sealed hierarchy
    public final void printShapeType() {
        out.println("Shape type: " + this.getClass().getSimpleName());
    }
}

final class Circle extends Shape { // Final permitted subclass
    private final double radius;
    public Circle(double radius) { this.radius = radius; }
    @Override double area() { return PI * radius * radius; }
}

non-sealed class Rectangle extends Shape { // Non-sealed permitted subclass allows further extension
    protected final double width, height;
    public Rectangle(double width, double height) { this.width = width; this.height = height; }
    @Override double area() { return width * height; }
}

// Square could extend Rectangle (if Rectangle was not final/sealed itself) or Shape directly
final class Square extends Shape { // Final permitted subclass
    private final double side;
    public Square(double side) { this.side = side; }
    @Override double area() { return side * side; }
}
// class Triangle extends Shape {} // COMPILE ERROR: Not permitted by Shape

// --- Main Class Definition ---
@CustomAnnotation(level = 1, tags = {"java", "test"})
public class JavaSyntaxTest extends BaseClass implements Calculable<Integer>, Runnable { // Inheritance and multiple interface implementation

    // --- Fields / Member Variables ---
    public static final String CONSTANT_STRING = "Hello"; // Public static final constant
    private final int instanceId; // Private final instance variable (initialized in constructor)
    protected double value = 10.5; // Protected instance variable with initializer
    volatile boolean flag = false; // Volatile field
    transient Object temporaryData; // Transient field (not serialized)
    Integer wrapperInt = 100; // Autoboxing
    int[] intArray = {1, 2, 3, 4, 5}; // Array declaration and initialization
    String[][] matrix = new String[3][3]; // Multi-dimensional array declaration
    List<String> stringList = new ArrayList<>(); // Generic collection with diamond operator (Java 7+)

    // Static initializer block
    static {
        out.println("Static initializer block running.");
        // CONSTANT_STRING = "Modified?"; // ERROR: final variable
    }

    // Instance initializer block
    {
        out.println("Instance initializer block running.");
        this.stringList.add("Initialized in block");
    }

    // --- Constructors ---
    public JavaSyntaxTest(int id) { // Parameterized constructor
        super("BaseNameFromChild"); // Call to superclass constructor
        this.instanceId = id;
        out.println("JavaSyntaxTest constructor called with id: " + id);
    }

    public JavaSyntaxTest(int id, double initialValue) { // Overloaded constructor
        this(id); // Call to another constructor in the same class
        this.value = initialValue;
    }

    // --- Methods ---
    @Override // Annotation indicating method overrides superclass/interface method
    public Integer calculate(Integer a, Integer b) {
        int result = a + b;
        printResult(result); // Call default interface method
        return result; // Autoboxing int to Integer
    }

    @Override
    public void run() {
        out.println("Runnable run() method executed.");
    }

    /**
     * Javadoc comment for a method.
     * Demonstrates various features like generics, varargs, and exceptions.
     *
     * @param <G> Generic type parameter for the method
     * @param list A list of items of type G.
     * @param prefix Varargs string argument.
     * @return The size of the list processed.
     * @throws IOException If an I/O error occurs (example).
     * @deprecated Use {@link #newProcessingMethod(List)} instead.
     */
    @Deprecated(since = "1.2", forRemoval = true)
    @SuppressWarnings({"unchecked", "deprecation"}) // Suppress compiler warnings
    @CustomAnnotation(level = 2) // Apply custom annotation
    public <G> int processList(List<G> list, String... prefix) throws IOException, NullPointerException {
        Objects.requireNonNull(list, "Input list cannot be null"); // Utility method
        out.printf("Processing list with prefix: %s\n", Arrays.toString(prefix));

        for (G item : list) { // Enhanced for loop (for-each)
            out.println("  Item: " + item.toString());
            if (item instanceof String s) { // Pattern Matching for instanceof (Java 16+)
                out.println("    String item length: " + s.length());
            }
        }

        // Example of throwing an exception
        if (list.isEmpty()) {
            throw new IOException("Simulated I/O Error: List is empty");
        }

        return list.size();
    }

    // Varargs example
    public void printNumbers(int... numbers) {
        out.print("Varargs numbers: ");
        for (int i = 0; i < numbers.length; i++) {
            out.print(numbers[i] + " ");
        }
        out.println();
    }

    // Generic method with bounded wildcard
    public double sumOfList(List<? extends Number> numberList) {
        double sum = 0.0;
        for (Number n : numberList) {
            sum += n.doubleValue();
        }
        return sum;
    }

    // Method reference target
    public static int compareStringsLength(String s1, String s2) {
        return Integer.compare(s1.length(), s2.length());
    }

    // New processing method (target for @deprecated link)
    public <T> void newProcessingMethod(List<T> data) {
        out.println("Using the new processing method for list size: " + data.size());
    }

    // --- Control Flow & Operators ---
    private void controlFlowDemo(int value, String text) {
        // If-Else If-Else
        if (value > 100 || text.equals("special")) {
            out.println("High value or special text");
        } else if (value > 50 && value <= 100) {
            out.println("Medium value");
        } else {
            out.println("Low value");
        }

        // Classic Switch with fall-through and break
        char grade = 'B';
        switch (grade) {
            case 'A':
                out.println("Excellent!");
                break; // Need break to prevent fall-through
            case 'B':
            case 'C': // Fall-through example
                out.println("Well done");
                break;
            case 'D':
                out.println("You passed");
                break;
            case 'F':
                out.println("Better try again");
                break;
            default:
                out.println("Invalid grade");
        }

        // Enhanced Switch Expression (Java 14+) - must be exhaustive or have default
        Signal currentSignal = Signal.YELLOW;
        String action = switch (currentSignal) {
            case RED -> "Stop immediately!";
            case YELLOW -> {
                out.println("Prepare to stop."); // Block for multiple statements
                yield "Slow down"; // Use yield to return value from block
            }
            case GREEN -> "Proceed with caution";
            // No default needed if all enum constants are covered
        };
        out.println("Switch Expression Result: " + action);

        // While loop
        int count = 0;
        while (count < 3) {
            out.println("While count: " + count);
            count++;
        }

        // Do-While loop
        int input;
        // Simulate reading input until 0 is entered
        // Scanner scanner = new Scanner(System.in); // Example input
        // do {
        //     System.out.print("Enter a number (0 to exit): ");
        //     input = scanner.nextInt();
        //     System.out.println("You entered: " + input);
        // } while (input != 0);
        // scanner.close(); // Close scanner

        // Classic For loop with continue and labeled break
        outerLoop: // Label for the outer loop
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (j == 2) {
                    continue; // Skip iteration when j is 2
                }
                if (i == 3 && j == 3) {
                    out.println("Breaking outer loop at i=" + i + ", j=" + j);
                    break outerLoop; // Break out of the labeled loop
                }
                out.print("(" + i + "," + j + ") ");
            }
            out.println(); // Newline after inner loop finishes
        }

        // Ternary operator
        String resultText = (value > 0) ? "Positive" : "Non-positive";
        out.println("Ternary result: " + resultText);

        // Bitwise operators
        int a = 0b1010; // 10
        int b = 0b1100; // 12
        out.println("Bitwise AND: " + (a & b)); // 8 (0b1000)
        out.println("Bitwise OR: " + (a | b)); // 14 (0b1110)
        out.println("Bitwise XOR: " + (a ^ b)); // 6 (0b0110)
        out.println("Bitwise NOT: " + (~a)); // -11
        out.println("Left Shift: " + (a << 1)); // 20 (0b10100)
        out.println("Right Shift: " + (a >> 1)); // 5 (0b101)
        out.println("Unsigned Right Shift: " + (-a >>> 1)); // Large positive number

        // instanceof operator (classic)
        Object obj = "A string object";
        if (obj instanceof String) {
            out.println("Classic instanceof: Object is a String");
        }
    }

    // --- Exception Handling ---
    private void exceptionDemo() {
        // Try-Catch-Finally
        try {
            int result = 10 / 0; // ArithmeticException
            out.println("Result: " + result); // This won't execute
        } catch (ArithmeticException | NullPointerException e) { // Multi-catch block
            out.err.println("Caught specific exception: " + e.getClass().getSimpleName() + " - " + e.getMessage());
            // e.printStackTrace(); // Print stack trace
        } catch (Exception e) { // Catch broader exception
            out.err.println("Caught general exception: " + e.getMessage());
        } finally {
            out.println("Finally block always executes.");
        }

        // Try-with-resources (Java 7+) - automatically closes resources
        File file = new File("test_syntax.txt");
        try (PrintWriter writer = new PrintWriter(new FileWriter(file))) {
             writer.println("Writing line 1 using try-with-resources.");
             writer.println("Writing line 2: " + Math.random());
             // Simulate another exception inside try-with-resources
             // if (true) throw new RuntimeException("Problem during write");
        } catch (IOException e) {
             out.err.println("IOException during file write: " + e.getMessage());
        } finally {
             // Optional finally block still executes after resources are closed
             if (file.exists()) {
                 out.println("File exists after try-with-resources. Deleting: " + file.delete());
             }
        }

        // Assert keyword (requires -ea flag during runtime)
        assert this.instanceId > 0 : "Instance ID should be positive";
    }

    // --- Lambdas and Method References ---
    private void lambdaDemo() {
        // Using functional interface with lambda
        Calculable<Integer> adder = (a, b) -> a + b; // Lambda expression
        Calculable<Integer> subtractor = (Integer a, Integer b) -> { // Lambda with explicit types and block
            out.println("Subtracting " + b + " from " + a);
            return a - b;
        };

        out.println("Lambda Adder Result: " + adder.calculate(10, 5));
        out.println("Lambda Subtractor Result: " + subtractor.calculate(10, 5));

        // Using standard functional interfaces
        Predicate<String> isEmpty = String::isEmpty; // Method reference: Class::instanceMethod
        Function<String, Integer> lengthFinder = String::length; // Method reference: Class::instanceMethod
        Consumer<String> printer = out::println; // Method reference: object::instanceMethod
        Supplier<JavaSyntaxTest> constructorRef = JavaSyntaxTest::new; // Constructor reference (needs matching constructor) - example only
        BiFunction<String, String, Integer> compareRef = JavaSyntaxTest::compareStringsLength; // Method reference: Class::staticMethod

        List<String> names = Arrays.asList("Alice", "Bob", "", "Charlie", "David");

        names.stream()
             .filter(isEmpty.negate()) // Use predicate, negate it
             .map(lengthFinder) // Use function
             .sorted() // Stream intermediate operation
             .forEach(len -> printer.accept("Name Length: " + len)); // Use consumer inside lambda

        // Sorting using method reference
        List<String> mutableNames = new ArrayList<>(names);
        mutableNames.sort(JavaSyntaxTest::compareStringsLength); // Sort by length
        printer.accept("Sorted names by length: " + mutableNames);
    }

    // --- Nested and Inner Classes ---
    // Static nested class
    static class StaticNestedClass {
        void display() {
            out.println("Inside Static Nested Class.");
            // Cannot access non-static members of outer class directly
            // System.out.println(instanceId); // ERROR
            out.println("Accessing static outer member: " + CONSTANT_STRING);
        }
    }

    // Inner class (non-static)
    class InnerClass {
        private int innerValue = 20;
        void display() {
            out.println("Inside Inner Class.");
            // Can access members of the outer class directly
            out.println("Outer instanceId: " + instanceId); // Access outer private member
            out.println("Outer value: " + value);
            out.println("Inner value: " + this.innerValue);
            // Accessing outer instance explicitly
            out.println("Outer this.value: " + JavaSyntaxTest.this.value);
        }
    }

    // Method with local inner class
    public Runnable createRunnable() {
        final int localVar = 100; // Effectively final or final

        class LocalInnerRunnable implements Runnable {
            @Override
            public void run() {
                out.println("Running from Local Inner Class.");
                out.println("Accessing outer instanceId: " + instanceId);
                out.println("Accessing effectively final local var: " + localVar);
            }
        }
        return new LocalInnerRunnable();
    }

    // Method with anonymous inner class
    public Comparator<String> createStringComparator() {
        return new Comparator<>() { // Diamond operator with anonymous class
            @Override
            public int compare(String s1, String s2) {
                // Accessing outer instance field
                out.println("Comparing using comparator tied to instance: " + JavaSyntaxTest.this.instanceId);
                return s1.compareToIgnoreCase(s2);
            }
        };
    }


    // --- Main Method (Entry Point) ---
    public static void main(String[] args) {
        out.println("--- Java Syntax Test Program Starting ---");
        Calculable.description(); // Call static interface method

        // --- Basic Types and Literals ---
        byte byteVar = 127;
        short shortVar = 32_000; // Underscore literal (Java 7+)
        int intVar = 1_000_000;
        long longVar = 9_223_372_036_854_775_807L; // L suffix for long
        float floatVar = 3.14f; // f suffix for float
        double doubleVar = 2.71828_18284; // Underscores in double
        char charVar = 'A';
        char unicodeChar = '\u03A9'; // Greek Omega (Unicode escape)
        boolean boolVar = true;
        String stringVar = "This is a standard String.\n\tWith escapes.";
        // Text Block (Java 15+)
        String textBlock = """
                           This is a multi-line
                           text block. It preserves indentation
                           relative to the closing triple quotes.
                           Variable interpolation is NOT built-in like f-strings. """;
        out.println("Text Block:\n" + textBlock);


        // --- Object Instantiation and Method Calls ---
        JavaSyntaxTest testInstance = new JavaSyntaxTest(1, 99.9);
        testInstance.printNumbers(10, 20, 30); // Varargs call
        int sum = testInstance.calculate(20, 22);
        out.println("Sum calculated: " + sum);
        testInstance.value = 101.1; // Access protected member

        // --- Using var (Java 10+) ---
        var message = "Type inferred as String"; // Inferred type: String
        var numbers = new ArrayList<Integer>(); // Inferred type: ArrayList<Integer>
        // var cannotBeNull = null; // ERROR: Cannot infer type from null
        // var lambda = () -> {}; // ERROR: Cannot infer type for lambda directly

        // --- Demonstrations ---
        testInstance.controlFlowDemo(sum, "test");
        try {
            testInstance.exceptionDemo();
            List<String> data = Arrays.asList("One", "Two");
            testInstance.processList(data, "Item"); // May throw IOException
        } catch (IOException | NullPointerException e) {
            out.err.println("Caught exception in main: " + e.getMessage());
        }

        testInstance.lambdaDemo();

        // --- Enum Usage ---
        Signal sig = Signal.GREEN;
        out.println("Current Signal: " + sig + " (" + sig.getDescription() + ")");

        // --- Record Usage ---
        Point p1 = new Point(3, 4);
        Point p2 = Point.origin();
        out.println("Record Point p1: " + p1); // Uses generated toString()
        out.println("Distance to origin for p1: " + p1.distanceToOrigin());
        out.println("p1.x() = " + p1.x()); // Generated accessor

        // --- Sealed Class Usage ---
        Shape circle = new Circle(5.0);
        Shape rect = new Rectangle(4.0, 6.0);
        Shape square = new Square(3.0);
        List<Shape> shapes = List.of(circle, rect, square);
        for (Shape s : shapes) {
            s.printShapeType();
            out.println("  Area: " + s.area());
            // Switch pattern matching (Java 17 preview, standard later)
            /*
            String description = switch(s) {
                case Circle c -> "Circle radius " + c.radius;
                case Rectangle r -> "Rectangle " + r.width + "x" + r.height;
                case Square sq -> "Square side " + sq.side;
                // no default needed if sealed class covers all permitted types
            };
            out.println("  Description: " + description);
            */
        }

        // --- Nested and Inner Classes Usage ---
        JavaSyntaxTest.StaticNestedClass nested = new JavaSyntaxTest.StaticNestedClass();
        nested.display();

        JavaSyntaxTest.InnerClass inner = testInstance.new InnerClass(); // Instantiating inner class
        inner.display();

        Runnable localRunnable = testInstance.createRunnable();
        localRunnable.run();

        Comparator<String> localComparator = testInstance.createStringComparator();
        out.println("Comparator result: " + localComparator.compare("apple", "Banana"));


        // --- Method References on Instance ---
        Supplier<String> toStringRef = testInstance::toString; // Instance method reference
        out.println("toString via method ref: " + toStringRef.get());

        // --- Streams ---
        List<Integer> intList = List.of(1, 2, 3, 4, 5, 6);
        double average = intList.stream()
                                .mapToInt(Integer::intValue) // Primitive stream
                                .filter(n -> n % 2 == 0)     // Filter even numbers
                                .average()                   // Terminal operation
                                .orElse(0.0);             // Handle empty stream
        out.println("Average of even numbers: " + average);

        // --- Modules Note ---
        // For Java 9+ Modules, you would typically have a module-info.java file
        // in the root of your source directory, e.g.:
        /*
        module com.example.syntaxtest {
            requires java.base; // Implicitly required
            requires java.logging; // Example dependency
            exports com.example.syntaxtest; // Export package for others to use
        }
        */

        out.println("--- Java Syntax Test Program Finished ---");
    }
}

// --- Another Top-Level Class (Base Class for Inheritance) ---
class BaseClass {
    private String baseName;

    public BaseClass(String name) {
        this.baseName = name;
        out.println("BaseClass constructor called with name: " + name);
    }

    protected void baseMethod() {
        out.println("Executing baseMethod in BaseClass. Name: " + this.baseName);
    }

    @Override
    public String toString() {
        return "BaseClass [baseName=" + baseName + "]";
    }
}

// --- Custom Exception Class ---
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }

    public CustomException(String message, Throwable cause) {
        super(message, cause);
    }
}