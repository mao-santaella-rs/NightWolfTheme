<?php 
/**
 * PHP Syntax Highlighting Test File
 *
 * This file includes a variety of PHP constructs to test syntax highlighting
 * in code editors and themes. It covers core PHP features and modern additions.
 * Requires PHP 8.1+ for full compatibility (enums, readonly, intersection types, etc.)
 */

declare(strict_types=1); // Enable strict typing mode

// --- Namespaces and Use Declarations ---
namespace App\SyntaxTest;

namespace Clockwork\Authentication;
use illuminate\name\anothername\module;
use illuminate\name\anothername\othermodule as newmodule;

use DateTime; // Import a single class
use Exception as BaseException; // Import with an alias
use App\Utils\{ HelperClass, UtilityFunction }; // Group use statement
use function App\Utils\some_utility_function as utilFunc; // Import function with alias
use const App\Utils\SOME_CONSTANT; // Import constant

// --- Comments ---
// This is a single-line comment.
# This is also a single-line comment (shell-style).

/*
  This is a
  multi-line comment block.
*/

/**
 * This is a PHPDoc block.
 * Often used for documenting functions, classes, properties, etc.
 * @param string $param1 Description of parameter 1.
 * @param int|null $param2 Description of parameter 2 (union type hint).
 * @return bool|string Returns true on success, or an error string.
 * @throws \InvalidArgumentException If input is invalid.
 * @see https://www.php.net/manual/en/language.basic-syntax.comments.php
 */

// --- Constants ---
define("LEGACY_CONSTANT", "A value defined with define()"); // Legacy define
const GLOBAL_CONST = 1_234_567; // Modern const declaration (integers with underscores PHP 7.4+)
const PI = 3.14159;
const IS_DEBUG_MODE = true;

// --- Variables and Literals ---
$integerVar = 100;
$hexVar = 0xFF; // Hexadecimal
$octalVar = 0o755; // Octal (PHP 8.1+) - previously 0755
$binaryVar = 0b101010; // Binary
$floatVar = 1_234.567_890; // Float with underscores (PHP 7.4+)
$scientificNotation = 1.2e3;
$boolTrue = true; // Boolean (case-insensitive, but lower is standard)
$boolFalse = FALSE;
$nullVar = null; // Null (case-insensitive, but lower is standard)

$singleQuotedString = 'This is a single-quoted string. Variables like $integerVar are not parsed. Escapes like \n are mostly literal.';
$doubleQuotedString = "This is a double-quoted string. Variables are parsed: $integerVar. Escapes work: \n\t\"\\\$";
$heredocString = <<<HEREDOC
This is a Heredoc string.
It behaves like double quotes. Variable: $integerVar.
Newlines are preserved.
HEREDOC;
$nowdocString = <<<'NOWDOC'
This is a Nowdoc string.
It behaves like single quotes. Variable $integerVar is literal.
No parsing happens inside.
NOWDOC;

$shortArray = [1, 2, 'key' => 'value', 3 => true, &$integerVar]; // Short array syntax, key/value pairs, reference
$legacyArray = array(
    "foo" => "bar",
    "bar" => "foo",
    100   => -100,
    -100  => 100,
);
$nestedArray = ['a', ['b', 'c']];

$variableVariable = 'dynamicName';
$dynamicName = 'Value of dynamic variable';
echo $$variableVariable; // Accessing variable variable

// Predefined Variables (Examples)
$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'Unknown'; // Using null coalescing operator
$userId = $_GET['user_id'] ?? null;

// --- Operators ---
// Arithmetic
$sum = 5 + 3;
$difference = 10 - 4.5;
$product = $integerVar * 2;
$quotient = 10 / 3;
$remainder = 10 % 3;
$exponentiation = 2 ** 8; // Exponentiation

// Assignment
$counter = 0;
$counter += 1;
$message = "Hello";
$message .= " World"; // String concatenation assignment
$result = null;
$result ??= "Default Value"; // Null coalescing assignment (PHP 7.4+)

// Bitwise
$bits1 = 0b1010;
$bits2 = 0b1100;
$bitwiseAnd = $bits1 & $bits2;
$bitwiseOr = $bits1 | $bits2;
$bitwiseXor = $bits1 ^ $bits2;
$bitwiseNot = ~$bits1;
$leftShift = $bits1 << 1;
$rightShift = $bits1 >> 1;

// Comparison
$isEqual = ($sum == 8); // Loose comparison
$isIdentical = ($sum === 8); // Strict comparison
$isNotEqual = ($sum != 9); // or <>
$isNotIdentical = ($sum !== '8');
$isGreater = $sum > 5;
$spaceship = $sum <=> 10; // Spaceship operator (-1, 0, or 1) (PHP 7.0+)

// Error Control
$fileContent = @file_get_contents('non_existent_file.txt'); // Suppress errors with @

// Execution (use with extreme caution - often disabled)
// $output = `ls -la`;

// Increment/Decrement
$preIncrement = ++$counter;
$postIncrement = $counter++;
$preDecrement = --$counter;
$postDecrement = $counter--;

// Logical
$logicalAndWord = $boolTrue and $boolFalse; // Lower precedence
$logicalOrWord = $boolTrue or $boolFalse; // Lower precedence
$logicalXorWord = $boolTrue xor $boolFalse;
$logicalAndSymbol = $boolTrue && $boolFalse; // Higher precedence
$logicalOrSymbol = $boolTrue || $boolFalse; // Higher precedence
$logicalNot = !$boolTrue;

// String Concatenation
$fullName = 'John' . ' ' . 'Doe';

// Ternary, Elvis, Null Coalescing
$ternaryResult = ($sum > 10) ? 'Greater than 10' : '10 or less';
$elvisResult = $userId ?: 0; // Elvis operator (returns first operand if truthy, else second)
$nullCoalesceResult = $nonExistentVar ?? $anotherVar ?? 'Default'; // Null coalescing operator

// Type & Object Operators
$isDateTime = $legacyArray instanceof DateTime; // instanceof
$now = new DateTime(); // new
$cloneNow = clone $now; // clone
echo $now->format('Y-m-d H:i:s'); // Object access ->
echo $now?->timezone?->getName() ?? 'Timezone N/A'; // Nullsafe operator (PHP 8.0+)
echo DateTime::RFC3339; // Scope resolution :: (accessing constant)
echo App\SyntaxTest\SomeClass::staticMethod(); // Accessing static method

// --- Control Structures ---
// If / Elseif / Else
if ($integerVar > 100) {
    echo "Integer is large.";
} elseif ($integerVar > 50) {
    echo "Integer is medium.";
} else {
    echo "Integer is small.";
}

// Alternative syntax
if ($integerVar === 100):
    echo "Integer is exactly 100 (alt syntax).";
    echo "Another line.";
elseif ($integerVar < 0):
    echo "Integer is negative (alt syntax).";
else:
    echo "Integer is positive and not 100 (alt syntax).";
endif;

// Switch
$grade = 'B';
switch ($grade) {
    case 'A':
        echo "Excellent!";
        break; // Important!
    case 'B':
    case 'C':
        echo "Well done.";
        break;
    case 'D':
        echo "You passed.";
        break;
    default:
        echo "Invalid grade.";
}

// Match expression (PHP 8.0+) - strict comparison, returns a value, no fall-through
$httpStatusCode = 200;
$statusMessage = match ($httpStatusCode) {
    200, 201, 204 => 'Success',
    400 => 'Bad Request',
    404 => 'Not Found',
    500 => 'Server Error',
    default => 'Unknown status code', // Must be exhaustive or have default
};
echo "Match result: $statusMessage";

// While loop
$i = 0;
while ($i < 3) {
    echo "While loop iteration: $i";
    $i++;
}

// Do-While loop
$j = 5;
do {
    echo "Do-while loop iteration: $j";
    $j--;
} while ($j > 0);

// For loop
for ($k = 0; $k < 5; $k++) {
    if ($k === 1) continue; // Skip iteration 1
    if ($k === 3) break; // Exit loop at iteration 3
    echo "For loop iteration: $k";
}

// Foreach loop
echo "Iterating array values:";
foreach ($shortArray as $item) {
    // Handle potential reference
    if (is_array($item)) {
         echo " Nested Array ";
         continue;
    }
     echo " Item: $item ";
}

echo "Iterating array key/value pairs:";
foreach ($legacyArray as $key => $value) {
    echo " Key: $key => Value: $value ";
}

// Goto (use sparingly!)
goto end_section;
echo "This line will be skipped.";
end_section:
echo "Reached the end_section label.";


// --- Functions ---

/**
 * Example function with various parameter types and return type hints.
 * @param string $name Default parameter value.
 * @param int|float $value Union type hint (PHP 8.0+).
 * @param string ...$options Variadic parameter (PHP 5.6+).
 * @return void No return value.
 */
function greet(string $name = "Guest", int|float $value, ?DateTime $date = null, string ...$options): void // Return type void (PHP 7.1+)
{
    $dateString = $date?->format('Y-m-d') ?? 'No date'; // Nullsafe operator
    echo "Hello, $name! Value: $value, Date: $dateString.";
    if (!empty($options)) {
        echo " Options: " . implode(', ', $options);
    }
    // Cannot return a value here due to 'void' return type
}

// Function with reference parameter
function addSuffix(string &$strRef): void // Pass by reference
{
    $strRef .= " Suffix";
}

// Function with intersection type hint (PHP 8.1+) and static return type (PHP 8.0+)
// function processObject(Countable & Traversable $collection): static {
//     echo "Processing collection with " . count($collection) . " items.";
//     // return $this; // 'static' only makes sense in class context
// }

// Function returning 'never' (PHP 8.1+) - indicates script termination
function terminate(string $message): never
{
    die("Terminated: " . $message);
}

// Arrow function (PHP 7.4+) - concise syntax for simple closures
$multiplier = 5;
$multiply = fn($number): int => $number * $multiplier; // Implicitly captures $multiplier
echo "Arrow function result: " . $multiply(10);

// Anonymous function (Closure)
$messagePrefix = "Log";
$logger = function(string $logMessage) use ($messagePrefix): void { // 'use' keyword to inherit variable
    $timestamp = (new DateTime())->format('H:i:s');
    echo "[$timestamp] $messagePrefix: $logMessage\n";
    // Cannot modify $messagePrefix here unless passed by reference: use (&$messagePrefix)
};
$logger("Application started.");

// Generator function
function count_to(int $limit): \Generator
{
    for ($i = 1; $i <= $limit; $i++) {
        // Some calculation...
        yield $i; // Yield a value
    }
    yield from ['a', 'b']; // Yield from another iterable (PHP 7.0+)
}

echo "Generator output: ";
foreach (count_to(3) as $value) {
    echo "$value ";
}

// First-class callable syntax (PHP 8.1+)
$greeter = greet(...); // Creates a closure from the greet function
// $greeter('Alice', 100, null, 'opt1'); // Call the closure

// --- Object Oriented Programming (OOP) ---

// Interface
interface Loggable
{
    public const LOG_LEVEL_INFO = 'INFO'; // Interface constant
    public function log(string $message, string $level = self::LOG_LEVEL_INFO): void;
}

// Trait
trait Timestampable
{
    protected ?DateTime $createdAt = null;

    public function getCreatedAt(): ?DateTime
    {
        return $this->createdAt;
    }

    // Trait method using property promotion (PHP 8.0+) requires class context
    // public function __construct(private string $traitName = "Timestampable") {}

    // Method from trait
    protected function initializeTimestamp(): void
    {
        if ($this->createdAt === null) {
            $this->createdAt = new DateTime();
        }
    }
}

// Trait with conflict
trait MessageSender
{
    public function sendMessage(string $msg): void { echo "Sending message via Sender: $msg"; }
    public function commonMethod(): void { echo "Common method from Sender"; }
}

trait Mailer
{
    public function sendMessage(string $msg): void { echo "Sending mail via Mailer: $msg"; }
    public function commonMethod(): void { echo "Common method from Mailer"; }
}


// Attribute definition (PHP 8.0+)
#[Attribute(Attribute::TARGET_CLASS | Attribute::TARGET_METHOD | Attribute::TARGET_PROPERTY)]
class Route
{
    public function __construct(
        public string $path,
        public array $methods = ['GET']
    ) {}
}

// Enum definition (PHP 8.1+)
enum Status: string // Backed enum
{
    case Pending = 'pending';
    case Processing = 'processing';
    case Completed = 'completed';
    case Failed = 'failed';

    // Method in enum
    public function label(): string
    {
        return match($this) {
            self::Pending => 'Waiting',
            self::Processing => 'In Progress',
            self::Completed => 'Done',
            self::Failed => 'Error',
        };
    }
}

// Abstract class
#[Route('/base')] // Using attribute
abstract class BaseEntity implements Loggable
{
    use Timestampable; // Using a trait

    protected int $id;
    // Readonly property (PHP 8.1+)
    public readonly string $uuid;

    // Constructor Property Promotion (PHP 8.0+)
    public function __construct(
        protected string $entityName,
        #[Route('/id')] // Attribute on parameter (promoted property)
        public int $tempId = 0
    ) {
        $this->initializeTimestamp(); // Call trait method
        $this->uuid = uniqid(); // Initialize readonly property
        $this->id = rand(1, 1000); // Simulate setting ID
        $this->log("BaseEntity created: {$this->entityName}");
    }

    // Abstract method - must be implemented by child classes
    abstract public function getDescription(): string;

    // Implementation of interface method
    public function log(string $message, string $level = self::LOG_LEVEL_INFO): void
    {
        echo "[$level] ({$this->entityName} #{$this->id}): $message\n";
    }

    // Final method - cannot be overridden by child classes
    final public function getEntityId(): int
    {
        return $this->id;
    }

    // Static property and method
    public static string $defaultType = 'Generic';
    public static function getDefaultType(): string
    {
        return static::$defaultType; // Late static binding
    }

    // Magic methods
    public function __toString(): string
    {
        return "Entity: {$this->entityName} (#{$this->id})";
    }

    public function __destruct()
    {
        // echo "Destroying {$this->entityName} #{$this->id}\n";
    }

    public function __get(string $name): mixed
    {
        echo "Attempting to get inaccessible property '$name'\n";
        return null;
    }

     public function __set(string $name, mixed $value): void
    {
        echo "Attempting to set inaccessible property '$name' to '$value'\n";
    }

     public function __call(string $name, array $arguments): void
    {
         echo "Attempting to call inaccessible method '$name' with args: " . implode(', ', $arguments) . "\n";
    }

    public static function __callStatic(string $name, array $arguments): void
    {
        echo "Attempting to call inaccessible static method '$name'\n";
    }

}

// Final class extending BaseEntity
#[Route('/user', methods: ['GET', 'POST'])] // Attribute with arguments
final class User extends BaseEntity
{
    use MessageSender, Mailer { // Using multiple traits with conflict resolution
        MessageSender::sendMessage insteadof Mailer; // Choose sendMessage from MessageSender
        Mailer::commonMethod as mailerCommon; // Alias commonMethod from Mailer
        MessageSender::commonMethod as senderCommon; // Alias commonMethod from Sender
    }

    private string $email;
    // Typed property (PHP 7.4+)
    private ?array $permissions = null;
    public static string $defaultType = 'User'; // Override static property


    public function __construct(string $name, private string $userEmail) // Using property promotion for email
    {
        parent::__construct($name); // Call parent constructor
        $this->email = $userEmail;
    }

    // Implementation of abstract method
    public function getDescription(): string
    {
        return "User: {$this->entityName} <{$this->email}>";
    }

    #[Route('/user/email')] // Attribute on method
    public function getEmail(): string
    {
        return $this->email;
    }

    // Example of using resolved trait methods
    public function notifyUser(string $message): void
    {
        $this->sendMessage($message); // Uses MessageSender::sendMessage
        $this->mailerCommon(); // Uses Mailer::commonMethod
        $this->senderCommon(); // Uses MessageSender::commonMethod
    }
}

// Instantiation and usage
$user = new User("Alice Smith", "alice@example.com");
echo $user->getDescription() . "\n";
echo $user->getEmail() . "\n";
echo $user->getEntityId() . "\n"; // Final method from parent
echo $user; // Uses __toString()
$user->log("User logged in");
$user->nonExistentMethod('arg1'); // Calls __call
User::nonExistentStaticMethod(); // Calls __callStatic

// Access static properties/methods
echo User::getDefaultType() . "\n"; // Uses late static binding
echo BaseEntity::getDefaultType() . "\n";

// Enum usage
$currentStatus = Status::Processing;
echo "Status: " . $currentStatus->name . ", Value: " . $currentStatus->value . ", Label: " . $currentStatus->label() . "\n";


// --- Error Handling ---
try {
    // Code that might throw an exception
    if ($user->getEmail() === 'invalid') {
         throw new \InvalidArgumentException("Invalid email detected.", 400);
    }
    // Example of throwing a custom exception
    // throw new CustomAppException("Something specific went wrong.");

    $result = 10 / 0; // Throws DivisionByZeroError (subclass of Error)

} catch (\InvalidArgumentException $e) { // Catch specific exception type
    echo "Caught Invalid Argument Exception: " . $e->getMessage() . " (Code: " . $e->getCode() . ")\n";
} catch (\DivisionByZeroError | \TypeError $e) { // Catch multiple types (PHP 7.1+)
     echo "Caught Arithmetic/Type Error: " . get_class($e) . " - " . $e->getMessage() . "\n";
} catch (BaseException $e) { // Catch using alias
    echo "Caught Base Exception: " . $e->getMessage() . "\n";
} catch (\Throwable $t) { // Catch any remaining errors or exceptions (PHP 7.0+)
     echo "Caught Throwable: " . get_class($t) . " - " . $t->getMessage() . "\n";
} finally {
    // This block always executes, regardless of exceptions
    echo "Finally block executed.\n";
}

// --- Includes and Requires ---
// include 'another_file.php'; // Include - generates warning if file not found
// include_once 'another_file.php'; // Include only if not already included
// require 'required_file.php'; // Require - generates fatal error if file not found
// require_once 'required_file.php'; // Require only if not already included


// --- Magic Constants ---
echo "Line number: " . __LINE__ . "\n";
echo "File path: " . __FILE__ . "\n";
echo "Directory path: " . __DIR__ . "\n";
function testFunctionMagic() { echo "Function name: " . __FUNCTION__ . "\n"; }
testFunctionMagic();
// Other magic constants: __CLASS__, __TRAIT__, __METHOD__, __NAMESPACE__ are context-dependent


// --- End of Pure PHP Block / Embedding HTML ---
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Test Output - <?= htmlspecialchars($pageTitle ?? 'Default Title') // Short echo tag with null coalesce and escaping ?></title>
    <style>
        body { font-family: sans-serif; background-color: #f4f4f4; padding: 20px; }
        .output { background-color: white; border: 1px solid #ccc; padding: 15px; margin-top: 15px; }
        code { background-color: #eee; padding: 2px 4px; border-radius: 3px; }
    </style>
</head>
<body>

    <h1>HTML Section with Embedded PHP</h1>

    <div class="output">
        <p>Embedding PHP variables directly:</p>
        <p>User Name: <strong><?php echo htmlspecialchars($user->entityName ?? 'N/A'); ?></strong></p>
        <p>Current Status Value: <code><?= htmlspecialchars($currentStatus->value) ?></code></p>

        <p>Looping within HTML:</p>
        <ul>
            <?php foreach ($items as $item): ?>
                <li>List Item: <?= htmlspecialchars((string)$item) ?></li>
            <?php endforeach; ?>
        </ul>

        <p>Conditional HTML rendering:</p>
        <?php if ($user->isAdmin ?? false): ?>
            <p style="color: green; font-weight: bold;">Admin controls would appear here.</p>
        <?php else: ?>
            <p style="color: orange;">Standard user view.</p>
        <?php endif; ?>
    </div>

    <div class="output">
        <?php
            echo "<p>Calling greet function from HTML context:</p>";
            greet("HTML User", 99.9, new DateTime(), "Option A", "Option B");
        ?>
    </div>

</body>
</html>

<?php // Re-opening PHP tag is possible, though often discouraged at end of file
    // Final PHP code if needed
    echo "\n--- PHP Syntax Test Script Finished ---\n";
// No closing ?> is needed if it's the absolute end of the file