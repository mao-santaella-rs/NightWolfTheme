// C# Syntax Highlighting Test File
// Ensure you have a compatible .NET SDK installed (e.g., .NET 7 or later for full feature set)

#nullable enable // Enable nullable reference types context (C# 8+)

// --- Preprocessor Directives ---
#define DEBUG_MODE
#define FEATURE_X

using System; // Using namespace
using System.Collections;
using System.Collections.Generic; // Using generic namespace
using System.ComponentModel; // For attributes
using System.Data.Common;
using System.Diagnostics;
using System.IO;
using System.Linq; // Using LINQ namespace
using System.Net.Http;
using System.Runtime.CompilerServices; // For CallerMemberName
using System.Runtime.InteropServices; // For DllImport
using System.Text;
using System.Text.RegularExpressions; // For Regex
using System.Threading; // For SynchronizationContext
using System.Threading.Tasks; // Using Task Parallel Library (TPL)
using static System.Math; // Using static class (C# 6+)
using AliasConsole = System.Console; // Using alias

// --- Namespace Declaration ---
namespace CSharpSyntaxTest
{
    #region Attributes and Documentation Comments

    /// <summary>
    /// Custom attribute to demonstrate attribute syntax.
    /// <seealso cref="System.Attribute"/>
    /// </summary>
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = false)]
    public class CustomSyntaxAttribute : Attribute
    {
        public string Description { get; }
        public int Level { get; set; } // Attribute property

        public CustomSyntaxAttribute(string description) // Attribute constructor
        {
            Description = description;
            Level = 1;
        }
    }

    /// <summary>
    /// XML Documentation comment example for an interface.
    /// </summary>
    public interface IDemoInterface<T> where T : struct // Generic interface with constraints
    {
        /// <value>Property documentation using value tag.</value>
        T GenericProperty { get; set; }
        void PerformAction(string actionName);
        event EventHandler ActionPerformed; // Event declaration in interface
    }

    #endregion

    #region Enums and Delegates

    /// <summary>
    /// Example enumeration with underlying type and Flags attribute.
    /// </summary>
    [Flags]
    public enum StatusOptions : byte // Enum with underlying type byte
    {
        None = 0,    // 0000
        Pending = 1, // 0001
        Active = 2,  // 0010
        Inactive = 4,// 0011
        Completed = 8, // 1000
        All = Pending | Active | Inactive | Completed // Bitwise combination
    }

    /// <summary>
    /// Example delegate type.
    /// </summary>
    /// <param name="x">First integer.</param>
    /// <param name="y">Second integer.</param>
    /// <returns>Result of the operation.</returns>
    public delegate int MathOperation(int x, int y); // Delegate declaration

    #endregion

    #region Structs and Records

    /// <summary>
    /// Example struct demonstrating value types.
    /// </summary>
    public struct Point(double x, double y) // Primary constructor (C# 12+) / Regular constructor
    {
        public double X { get; } = x; // Property initializer
        public double Y { get; } = y;

        // Parameterless constructor (allowed since C# 10)
        // public Point() : this(0, 0) { } // If not using primary constructor

        public readonly double Distance => Sqrt(X * X + Y * Y); // Readonly expression-bodied property

        public override readonly string ToString() => $"({X}, {Y})"; // Readonly override method

        // Operator overloading
        public static Point operator +(Point a, Point b) => new Point(a.X + b.X, a.Y + b.Y);
    }

    /// <summary>
    /// Example record (reference type by default) (C# 9+).
    /// Records provide value equality semantics.
    /// </summary>
    /// <param name="FirstName">The first name.</param>
    /// <param name="LastName">The last name.</param>
    public record Person(string FirstName, string LastName) // Positional record
    {
        public string FullName => $"{FirstName} {LastName}"; // Computed property

        // Additional methods can be added
        public void Greet()
        {
            AliasConsole.WriteLine($"Hello, my name is {FullName}");
        }
    }

    /// <summary>
    /// Example record struct (value type) (C# 10+).
    /// </summary>
    public readonly record struct Color(byte R, byte G, byte B); // Readonly record struct

    #endregion

    #region Abstract, Sealed, Static, Partial Classes and Interfaces

    /// <summary>
    /// Abstract base class example.
    /// </summary>
    public abstract class Vehicle
    {
        public abstract int Wheels { get; } // Abstract property
        public virtual string Color { get; set; } = "White"; // Virtual property with initializer

        public abstract void StartEngine(); // Abstract method

        // Virtual method
        public virtual void DisplayInfo()
        {
            AliasConsole.WriteLine($"This vehicle has {Wheels} wheels and is {Color}.");
        }
    }

    /// <summary>
    /// Sealed class inheriting from Vehicle. Cannot be inherited further.
    /// </summary>
    [Serializable] // Built-in attribute
    public sealed class Car : Vehicle, IDemoInterface<int>, IDisposable // Inheritance and multiple interfaces
    {
        public override int Wheels => 4; // Override abstract property
        public string Model { get; init; } // Init-only property (C# 9+)

        // Implementing interface property
        public int GenericProperty { get; set; }

        // Explicit interface implementation
        void IDemoInterface<int>.PerformAction(string actionName)
        {
            AliasConsole.WriteLine($"Interface action explicitly performed: {actionName}");
            ActionPerformed?.Invoke(this, EventArgs.Empty); // Invoke event
        }

        // Implementing interface event
        public event EventHandler? ActionPerformed;

        // Override virtual method
        public sealed override void DisplayInfo() // Sealed override prevents further override
        {
            base.DisplayInfo(); // Call base class method
            AliasConsole.WriteLine($"Model: {Model}");
        }

        // Override abstract method
        public override void StartEngine() => AliasConsole.WriteLine("Car engine started... Vroom!"); // Expression-bodied method

        // Constructor using property initializer
        public Car(string model)
        {
            Model = model ?? throw new ArgumentNullException(nameof(model));
        }

        // Implementing IDisposable
        private bool _disposed = false;
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        // Protected implementation of Dispose pattern
        protected virtual void Dispose(bool disposing)
        {
            if (_disposed) return;
            if (disposing)
            {
                // Dispose managed state (managed objects).
                ActionPerformed = null; // Example: remove event handlers
            }
            // Free unmanaged resources (unmanaged objects) and override finalizer
            _disposed = true;
        }

        // Finalizer (destructor syntax)
        ~Car() => Dispose(false);
    }

    /// <summary>
    /// Static class containing utility methods and constants.
    /// </summary>
    public static class Utilities
    {
        public const double GravitationalConstant = 9.81; // Constant field
        public static readonly DateTime StartupTime = DateTime.UtcNow; // Static readonly field

        // Extension method (C# 3+)
        public static string Reverse(this string input)
        {
            if (string.IsNullOrEmpty(input)) return input;
            char[] chars = input.ToCharArray();
            Array.Reverse(chars);
            return new string(chars);
        }

        // Static method
        public static void LogMessage(string message, [CallerMemberName] string caller = "") // Caller info attribute
        {
            AliasConsole.WriteLine($"[{DateTime.Now:HH:mm:ss}][{caller}] {message}");
        }
    }

    /// <summary>
    /// Partial class definition part 1.
    /// </summary>
    public partial class PartialDataProcessor
    {
        public void ProcessPart1() => AliasConsole.WriteLine("Processing Part 1...");
    }

    #endregion

    // --- Main Program Class ---
    [CustomSyntax("Main application class", Level = 5)]
    class Program
    {
        #region Fields and Properties

        // Fields
        private int _counter = 0; // Private instance field
        private readonly List<string> _logMessages = new List<string>(); // Readonly instance field (can only be assigned in constructor/initializer)
        internal static Guid AppInstanceId = Guid.NewGuid(); // Internal static field

        // Properties
        public string? OptionalMessage { get; set; } // Nullable auto-property (C# 8+)
        public int Counter => _counter; // Readonly property with expression body (C# 6+)

        // Full property with validation
        private string _userName = string.Empty;
        public string UserName
        {
            get => _userName;
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Username cannot be empty.", nameof(value));
                }
                if (!value.Equals(_userName, StringComparison.Ordinal))
                {
                    // Property Changed notification pattern (example)
                    OnPropertyChanged(); // Using CallerMemberName
                    _userName = value;
                }
            }
        }

        // Indexer
        public string this[int index]
        {
            get => _logMessages[index];
            // set => _logMessages[index] = value; // Can have setter too
        }

        // Static property
        public static string AppVersion { get; } = "1.0.0"; // Static readonly auto-property initializer

        #endregion

        #region Events

        // Event using EventHandler delegate
        public event EventHandler? ThresholdReached;

        // Custom event accessors
        private EventHandlerList _eventHandlers = new EventHandlerList();
        private static readonly object CustomEventKey = new object();
        public event EventHandler CustomEvent
        {
            add { _eventHandlers.AddHandler(CustomEventKey, value); }
            remove { _eventHandlers.RemoveHandler(CustomEventKey, value); }
        }

        protected virtual void OnThresholdReached(EventArgs e)
        {
            ThresholdReached?.Invoke(this, e); // Invoke event using null-conditional operator
        }

        #endregion

        #region Methods, Async, Iterators, Local Functions, Generics

        /// <summary>
        /// Basic method demonstrating control flow and operators.
        /// </summary>
        public void RunDemo()
        {
            // --- Variables and Literals ---
            int intVar = 1_234_567; // Digit separator (C# 7+)
            uint uintVar = 0xFF_EC_00u; // Hexadecimal, separator, uint suffix
            long longVar = 0b0011_1010_1100_0101L; // Binary, separator, long suffix
            float floatVar = 1.234e-5f; // Scientific notation, float suffix
            double doubleVar = 3.1415926535;
            decimal decimalVar = 987.654_321m; // Decimal suffix, separator
            char charVar = 'Ω'; // Unicode character literal
            string stringVar = "Standard string with \\t tab and \\u00A9 copyright.";
            string verbatimString = @"C:\Users\Test\Documents\file.txt
This string spans multiple lines."; // Verbatim string literal
            string interpolatedString = $"User: {UserName}, Counter: {Counter:N0}"; // Interpolated string (C# 6+)
            // Raw string literal (C# 11+)
            string rawJson = """
                             {
                               "Name": "Example",
                               "Value": 42
                             }
                             """;
            string multiLineInterpolated = $"""
                                            Log Messages ({_logMessages.Count}):
                                            {string.Join("\n", _logMessages.Select(m => $" - {m}"))}
                                            """; // Raw interpolated string
            bool boolVar = true;
            object? objVar = null; // Nullable reference type
            var inferredVar = new List<int> { 1, 2, 3 }; // Implicitly typed local variable (var)
            dynamic dynamicVar = "Can hold anything at runtime"; // Dynamic type
            int? nullableIntVar = null; // Nullable value type
            (string Name, int Age) tupleVar = ("Alice", 30); // Value tuple (C# 7+)

            _logMessages.Add($"Initialized with counter {_counter}");
            _counter++;

            // --- Operators ---
            int sum = intVar + 100;
            bool isPositive = sum > 0;
            bool logicCheck = isPositive && (boolVar || nullableIntVar.HasValue);
            int bitwise = 0b1100 & 0b1010; // Bitwise AND
            nullableIntVar ??= 10; // Null-coalescing assignment (C# 8+)
            string message = OptionalMessage ?? "Default Message"; // Null-coalescing operator
            var length = OptionalMessage?.Length; // Null-conditional operator
            Type typeInfo = typeof(List<>); // typeof operator
            string nameofVar = nameof(tupleVar.Name); // nameof operator (C# 6+)

            // --- Control Flow ---
            if (length.HasValue && length > 5)
            {
                _logMessages.Add($"OptionalMessage is long: {length.Value}");
            }
            else if (!string.IsNullOrEmpty(OptionalMessage))
            {
                _logMessages.Add("OptionalMessage is short.");
            }
            else
            {
                _logMessages.Add("OptionalMessage is null or empty.");
            }

            // Switch statement with patterns (C# 7+)
            object testObj = 123;
            switch (testObj)
            {
                case int i when i > 100: // Case guard (when)
                    _logMessages.Add($"Switch: Integer > 100: {i}");
                    break;
                case int i:
                    _logMessages.Add($"Switch: Integer <= 100: {i}");
                    break;
                case string s:
                    _logMessages.Add($"Switch: String: {s}");
                    break;
                case null: // Null check
                    _logMessages.Add("Switch: Object is null");
                    break;
                default:
                    _logMessages.Add("Switch: Unknown type");
                    break;
                // case Point p: AliasConsole.WriteLine($"Switch: Point {p}"); break; // Example
            }

            // Switch expression (C# 8+)
            var typeDescription = testObj switch
            {
                int i => $"Integer {i}",
                string s when s.Length > 0 => $"Non-empty String (length {s.Length})", // Pattern with guard
                string _ => "Empty string", // Discard pattern
                Point { X: > 0, Y: > 0 } p => $"Point in first quadrant {p}", // Property pattern (C# 8+)
                (_, _) tuple => $"Tuple like {tuple}", // Positional pattern for tuple
                _ => "Other type" // Default discard pattern
            };
            _logMessages.Add($"Switch expression result: {typeDescription}");

            // Loops
            for (int i = 0; i < 3; i++) { /* Standard for loop */ }

            foreach (var msg in _logMessages) // Foreach loop
            {
                if (msg.Contains("Initialized")) continue; // Continue to next iteration
                // AliasConsole.WriteLine(msg);
                if (_counter > 5) break; // Break out of loop
            }

            int w = 0;
            while (w < 2) { w++; /* While loop */ }
            do { w--; /* Do-while loop */ } while (w > 0);

        // Goto (generally discouraged)
        MyLabel:
            _counter++;
            if (_counter < 10)
            {
                // goto MyLabel; // Jump back to label
            }

        }

        /// <summary>
        /// Generic method with constraints.
        /// </summary>
        public T ProcessGeneric<T>(T input) where T : class, IDemoInterface<int>, new() // Generic constraints
        {
            T instance = new T(); // Constraint 'new()' allows this
            instance.PerformAction("Processing Generic");
            // ... process input ...
            return instance;
        }

        /// <summary>
        /// Async method example (C# 5+).
        /// </summary>
        public async Task PerformAsyncTask()
        {
            _logMessages.Add("Starting async operation...");
            using var client = new HttpClient();
            try
            {
                // ConfigureAwait(false) often used in libraries
                string result = await client.GetStringAsync("https://jsonplaceholder.typicode.com/todos/1").ConfigureAwait(false);
                _logMessages.Add($"Async operation completed. Result length: {result.Length}");
            }
            catch (HttpRequestException ex)
            {
                _logMessages.Add($"Async HTTP Error: {ex.Message}");
            }
            finally
            {
                 _logMessages.Add("Async operation finished attempt.");
            }
        }

        /// <summary>
        /// Iterator method using yield return (C# 2+).
        /// </summary>
        public IEnumerable<int> GetEvenNumbers(int max)
        {
            for (int i = 0; i <= max; i++)
            {
                if (i % 2 == 0)
                {
                    yield return i; // Yield return value
                }
                if (i > 100) yield break; // Exit iterator early
            }
        }

        /// <summary>
        /// Method demonstrating local functions (C# 7+).
        /// </summary>
        public int CalculateWithLocalFunction(int a, int b)
        {
            // Local function definition
            int Add(int x, int y)
            {
                return x + y + _counter; // Can capture outer scope variables
            }

            // Static local function (C# 8+) - cannot capture outer scope instance variables
            static int Multiply(int x, int y)
            {
                 // AliasConsole.WriteLine(_counter); // Error: Cannot access instance member
                 return x * y;
            }

            return Add(a, b) * Multiply(a, b);
        }

        /// <summary>
        /// Required members example (C# 11+).
        /// </summary>
        public required string RequiredProperty { get; set; } // Requires initialization

        // Helper for PropertyChanged pattern
        protected void OnPropertyChanged([CallerMemberName] string propertyName = "")
        {
            // Implementation for INotifyPropertyChanged would go here
            // PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
            Utilities.LogMessage($"Property '{propertyName}' potentially changed.");
        }

        #endregion

        #region LINQ and Lambdas

        /// <summary>
        /// Demonstrates LINQ queries and lambda expressions.
        /// </summary>
        public void LinqDemo()
        {
            var numbers = Enumerable.Range(1, 20).ToList();

            // LINQ Method Syntax with Lambdas
            var evenSquares = numbers
                .Where(n => n % 2 == 0) // Lambda expression
                .Select(n => new { Number = n, Square = n * n }) // Anonymous type projection
                .OrderByDescending(x => x.Square)
                .ToList();

            // LINQ Query Syntax
            var oddNumbersQuery = from num in numbers
                                  where num % 2 != 0
                                  let doubled = num * 2 // 'let' clause
                                  orderby num ascending
                                  select new { Original = num, Doubled = doubled }; // Project to anonymous type

            AliasConsole.WriteLine("\n--- LINQ Method Syntax (Even Squares Descending) ---");
            foreach (var item in evenSquares)
            {
                AliasConsole.WriteLine($"Number: {item.Number}, Square: {item.Square}");
            }

            AliasConsole.WriteLine("\n--- LINQ Query Syntax (Odd Numbers Doubled Ascending) ---");
            foreach (var item in oddNumbersQuery)
            {
                AliasConsole.WriteLine($"Original: {item.Original}, Doubled: {item.Doubled}");
            }

            // Using delegate instances
            MathOperation adder = (x, y) => x + y; // Lambda assigned to delegate
            MathOperation multiplier = delegate (int x, int y) { return x * y; }; // Anonymous method
            AliasConsole.WriteLine($"Delegate Add(5,3): {adder(5, 3)}");
            AliasConsole.WriteLine($"Delegate Multiply(5,3): {multiplier(5, 3)}");
        }

        #endregion

        #region Exception Handling

        /// <summary>
        /// Demonstrates exception handling features.
        /// </summary>
        public void ExceptionHandlingDemo(string? input)
        {
            // Custom Exception
            if (input == "bad") throw new InvalidDataException("Input cannot be 'bad'.");

            try
            {
                int parsed = int.Parse(input ?? throw new ArgumentNullException(nameof(input), "Input cannot be null here."));
                double result = 100.0 / parsed; // Potential DivideByZeroException
                AliasConsole.WriteLine($"Calculation result: {result}");
            }
            catch (ArgumentNullException ex) // Catch specific exception
            {
                Utilities.LogMessage($"Error: Input was null. {ex.Message}");
            }
            catch (FormatException ex)
            {
                Utilities.LogMessage($"Error: Input format invalid. {ex.Message}");
            }
            catch (DivideByZeroException) when (DateTime.Now.DayOfWeek == DayOfWeek.Sunday) // Exception filter (C# 6+)
            {
                Utilities.LogMessage($"Skipping divide by zero error on Sunday!");
            }
            catch (Exception ex) // Catch general exception
            {
                Utilities.LogMessage($"An unexpected error occurred: {ex.GetType().Name} - {ex.Message}");
                throw; // Re-throw preserving stack trace
            }
            finally
            {
                Utilities.LogMessage("Exception handling block finished.");
            }
        }

        #endregion

        #region Unsafe Code (Requires 'Allow unsafe code' project setting)

        /* // Uncomment to test unsafe code highlighting
        public unsafe void UnsafeCodeDemo(int number)
        {
            // Pointer declaration and usage
            int* pointerToInt = &number; // Address-of operator
            AliasConsole.WriteLine($"Value via pointer: {*pointerToInt}"); // Dereference operator
            AliasConsole.WriteLine($"Address: {(long)pointerToInt:X}");

            // Fixed statement for arrays/strings
            int[] numbers = { 10, 20, 30 };
            fixed (int* p = numbers) // Pin array in memory
            {
                for (int i = 0; i < numbers.Length; i++)
                {
                    AliasConsole.WriteLine($"Value at address {((long)(p + i)):X} = {*(p + i)}");
                }
            }

            // Stack allocation
            int* stackAllocated = stackalloc int[5];
            for(int i = 0; i < 5; i++) stackAllocated[i] = i * i;
        }
        */

        #endregion

        #region P/Invoke (Platform Invocation Services)

        // Example of importing a function from a native DLL
        [DllImport("user32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
        private static extern int MessageBox(IntPtr hWnd, String text, String caption, uint type);

        public void ShowWindowsMessageBox()
        {
            // Check OS before calling platform-specific code
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                MessageBox(IntPtr.Zero, "Hello from C#!", "P/Invoke Test", 0);
            }
            else
            {
                 AliasConsole.WriteLine("MessageBox P/Invoke call skipped (not on Windows).");
            }
        }

        #endregion

        // --- Entry Point ---
        static async Task Main(string[] args) // Async Main (C# 7.1+)
        {
            #if DEBUG_MODE
            AliasConsole.WriteLine("--- Running in DEBUG_MODE ---");
            #endif

            // Using static class member directly
            AliasConsole.WriteLine($"App Version: {AppVersion}, Instance ID: {AppInstanceId}");
            AliasConsole.WriteLine($"PI = {PI}"); // From static using System.Math

            Program instance = new Program { UserName = "TestUser", RequiredProperty = "Init Value" };
            instance.OptionalMessage = "Hello World";

            // Subscribe to event using lambda
            instance.ThresholdReached += (sender, eventArgs) => {
                Utilities.LogMessage("Threshold reached event received!");
            };

            instance.RunDemo();
            instance.LinqDemo();

            try
            {
                instance.ExceptionHandlingDemo("10");
                instance.ExceptionHandlingDemo("0"); // DivideByZeroException
                instance.ExceptionHandlingDemo("abc"); // FormatException
                // instance.ExceptionHandlingDemo(null); // ArgumentNullException
            }
            catch (Exception ex)
            {
                 AliasConsole.WriteLine($"Caught re-thrown exception in Main: {ex.Message}");
            }

            // Async call
            await instance.PerformAsyncTask();

            // Iterator usage
            AliasConsole.WriteLine("\n--- Even Numbers (Iterator) ---");
            foreach (int even in instance.GetEvenNumbers(10))
            {
                AliasConsole.Write($"{even} ");
            }
            AliasConsole.WriteLine();

            // Extension method usage
            string reversed = "Syntax Highlighting".Reverse();
            AliasConsole.WriteLine($"Reversed string: '{reversed}'");

            // Local function usage
            int calcResult = instance.CalculateWithLocalFunction(5, 6);
            AliasConsole.WriteLine($"Calculation with local function: {calcResult}");

            // Record usage
            Person person1 = new("John", "Doe");
            Person person2 = new("John", "Doe");
            AliasConsole.WriteLine($"Person: {person1}");
            AliasConsole.WriteLine($"Person Record Equality: {person1 == person2}"); // Value equality
            person1.Greet();

            // P/Invoke call
            // instance.ShowWindowsMessageBox();

            // Unsafe code call (requires enabling unsafe code in project)
            // instance.UnsafeCodeDemo(123);

            AliasConsole.WriteLine("\n--- Press Enter to exit ---");
            AliasConsole.ReadLine(); // Keep console open

            // Use goto label (just for syntax example)
            goto EndOfProgram; // Jump to label

            // This code is unreachable because of goto
            AliasConsole.WriteLine("This won't be printed.");

            EndOfProgram: // Label definition
            AliasConsole.WriteLine("Reached end of program via goto.");
        }
    }

    #region Partial Class Part 2 and Nested Classes

    /// <summary>
    /// Partial class definition part 2.
    /// </summary>
    public partial class PartialDataProcessor
    {
        public void ProcessPart2() => AliasConsole.WriteLine("Processing Part 2...");

        // Nested Class
        private class ProcessingStep
        {
            public string Name { get; set; } = "Default Step";
            public void Execute() => AliasConsole.WriteLine($"Executing step: {Name}");
        }

        public void ExecuteSteps()
        {
            var step1 = new ProcessingStep { Name = "Validation" };
            var step2 = new ProcessingStep { Name = "Transformation" };
            step1.Execute();
            step2.Execute();
        }
    }

    #endregion
} // End namespace CSharpSyntaxTest

#nullable disable // Disable nullable context if needed elsewhere