# -*- coding: utf-8 -*-
"""
Python Syntax Highlighting Test File

This file includes a variety of Python constructs to test
syntax highlighting in code editors and themes.
"""

# --- Imports ---
import os
import sys
from collections import defaultdict, namedtuple
import asyncio as aio  # Import with alias
from math import * # Wildcard import (generally discouraged but syntactically valid)

# --- Constants and Globals ---
GLOBAL_CONSTANT = "This is a global constant"
DEBUG_MODE: bool = True
MAX_RETRIES = 5
PI = 3.14159
COMPLEX_NUMBER = 2 + 3j
HEX_VALUE = 0xFF
OCT_VALUE = 0o77
BIN_VALUE = 0b1011

# --- Comments ---
# This is a single-line comment.
# TODO: Add more features later.
# FIXME: Fix this bug.
# NOTE: Remember this detail.

"""
This is a multi-line
docstring often used for modules, classes, or functions.
It can span multiple lines.
"""

# --- Basic Data Types and Literals ---
integer_var = 12345
float_var = 123.45
scientific_notation = 1.23e4
string_var_single = 'Hello, World!'
string_var_double = "Python's syntax is flexible."
multi_line_string = """
This string spans
multiple lines using triple quotes.
"""
raw_string = r"C:\Users\Name\Documents"
byte_string = b"This is a byte string"
f_string = f"The value of PI is approximately {PI:.2f}. Hex: {HEX_VALUE:#x}"
boolean_true = True
boolean_false = False
none_value = None

# --- Data Structures ---
my_list: list[int] = [1, 2, 3, 4, 5]
my_tuple: tuple[str, int] = ('a', 1)
my_set: set[float] = {1.0, 2.5, 3.0, 2.5} # Duplicates ignored
my_dict: dict[str, int] = {
    "key1": 100,
    "key2": 200,
    "another key": 300,
}

# Accessing elements
first_item = my_list[0]
dict_value = my_dict["key1"]

# Comprehensions
list_comp = [x * x for x in range(10) if x % 2 == 0]
set_comp = {char for char in "programming"}
dict_comp = {i: chr(65 + i) for i in range(5)}
generator_exp = (x + 1 for x in my_list) # Generator expression

# --- Control Flow ---
if DEBUG_MODE is True and MAX_RETRIES > 0:
    print("Debugging is ON")
elif not DEBUG_MODE:
    print("Debugging is OFF")
else:
    print("Retries exhausted")

# For loop
for i, item in enumerate(my_list):
    if i % 2 == 0:
        print(f"Even index {i}: {item}")
    else:
        continue # Skip odd indices
    if item > 4:
        print("Found item > 4, breaking loop.")
        break
else:
    # Executed if the loop completes without break
    print("Loop finished normally.")

# While loop
count = 0
while count < 3:
    print(f"While loop count: {count}")
    count += 1

# --- Functions ---
def greet(name: str, greeting: str = "Hello") -> str:
    """Greets a person. Demonstrates type hints and default args."""
    message = f"{greeting}, {name}!"
    return message

def process_data(*args: int, **kwargs: str) -> None:
    """Demonstrates *args and **kwargs."""
    print("Positional args:", args)
    print("Keyword args:", kwargs)
    # Using a global variable (use with caution)
    global GLOBAL_CONSTANT
    GLOBAL_CONSTANT = "Modified global"
    # nonlocal example (nested function)
    outer_var = 10
    def inner_func():
        nonlocal outer_var
        outer_var += 5
        print("Inner func outer_var:", outer_var)
    inner_func()


# Function call
greeting_message = greet("Alice")
greet(name="Bob", greeting="Hi") # Keyword arguments
process_data(1, 2, 3, key="value", mode="test")

# Lambda function
adder = lambda x, y: x + y
result = adder(5, 3)

# Generator function
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

counter_gen = count_up_to(3)
for num in counter_gen:
    print(f"Generated: {num}")


# --- Classes ---
class Vehicle:
    """A base class for vehicles."""
    # Class variable
    num_vehicles = 0

    def __init__(self, make: str, model: str, year: int) -> None:
        self.make = make
        self.model = model
        self.year = year
        Vehicle.num_vehicles += 1

    def display_info(self) -> str:
        """Returns basic vehicle info."""
        return f"{self.year} {self.make} {self.model}"

    @classmethod
    def get_vehicle_count(cls) -> int:
        """Returns the total number of vehicles created."""
        return cls.num_vehicles

    @staticmethod
    def is_vintage(year: int) -> bool:
        """Checks if a year is considered vintage."""
        return year < 1990

# Inheritance
class Car(Vehicle):
    """A car class inheriting from Vehicle."""
    def __init__(self, make: str, model: str, year: int, num_doors: int) -> None:
        super().__init__(make, model, year) # Call parent constructor
        self.num_doors = num_doors
        self._protected_attr = "Protected" # Convention for protected
        self.__private_attr = "Private" # Name mangling

    def display_info(self) -> str:
        """Overrides the parent method."""
        base_info = super().display_info()
        return f"{base_info}, {self.num_doors} doors"

    def honk(self) -> None:
        """A car-specific method."""
        print("Beep beep!")

# Instantiation and method calls
my_car = Car("Toyota", "Camry", 2023, 4)
print(my_car.display_info())
my_car.honk()
print(f"Is vintage? {Car.is_vintage(my_car.year)}")
print(f"Total vehicles: {Vehicle.get_vehicle_count()}")
# Accessing protected/private (demonstration, not recommended)
print(my_car._protected_attr)
# print(my_car.__private_attr) # This would cause an AttributeError
print(my_car._Car__private_attr) # Access via name mangling

# --- Decorators ---
def simple_decorator(func):
    """A simple function decorator."""
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}...")
        result = func(*args, **kwargs)
        print(f"{func.__name__} finished.")
        return result
    return wrapper

@simple_decorator
def decorated_function(x):
    print(f"Executing decorated function with arg: {x}")
    return x * 2

decorated_function(10)

# --- Exception Handling ---
try:
    risky_value = my_list[10] # This will raise IndexError
    division_result = 10 / 0 # This will raise ZeroDivisionError
except IndexError as e:
    print(f"Caught an IndexError: {e}")
except ZeroDivisionError:
    print("Caught a ZeroDivisionError: Cannot divide by zero.")
except Exception as e: # Catch any other exceptions
    print(f"Caught unexpected exception: {type(e).__name__} - {e}")
else:
    # Executed if no exceptions were raised in the try block
    print("No exceptions occurred.")
finally:
    # Always executed, regardless of exceptions
    print("Finished exception handling block.")

# Raising an exception
# raise ValueError("This is a custom value error!")

# Assertions
assert DEBUG_MODE is True, "Debug mode should be enabled"
# assert 1 == 2, "This assertion will fail"

# --- Context Managers (with statement) ---
try:
    with open("non_existent_file.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("Caught FileNotFoundError using 'with open'.")

# --- Asynchronous Programming (async/await) ---
# Note: Running this requires an async event loop (e.g., using asyncio.run())
async def async_task(name: str, delay: float) -> str:
    """Simulates an async task."""
    print(f"Task {name}: Starting...")
    await aio.sleep(delay) # Use await for async operations
    print(f"Task {name}: Finished after {delay}s")
    return f"Result from {name}"

async def main_async():
    """Main async function to run tasks."""
    task1 = async_task("A", 1)
    task2 = async_task("B", 0.5)
    results = await aio.gather(task1, task2) # Run tasks concurrently
    print("Async results:", results)

# To run the async part:
# if __name__ == "__main__":
#     aio.run(main_async())
#     print("Finished async execution.")


# --- Operators ---
# Arithmetic
add = 5 + 3
sub = 10 - 4
mul = 6 * 7
div = 10 / 4 # Float division
floor_div = 10 // 4 # Integer division
mod = 10 % 3
power = 2 ** 8

# Comparison
eq = (5 == 5)
neq = (5 != 6)
lt = (4 < 5)
gt = (6 > 5)
lte = (5 <= 5)
gte = (6 >= 5)

# Logical
and_op = (True and False)
or_op = (True or False)
not_op = (not True)

# Bitwise
bit_and = 0b1010 & 0b1100 # 8 (0b1000)
bit_or = 0b1010 | 0b1100 # 14 (0b1110)
bit_xor = 0b1010 ^ 0b1100 # 6 (0b0110)
bit_not = ~0b1010 # -11
left_shift = 0b101 << 1 # 10 (0b1010)
right_shift = 0b1010 >> 1 # 5 (0b101)

# Assignment
x = 10
x += 5 # x is now 15
x -= 3 # x is now 12
x *= 2 # x is now 24
x /= 6 # x is now 4.0
x //= 3 # x is now 1.0
x **= 3 # x is now 1.0
x %= 2 # x is now 1.0 (modulo)

# Identity
a = [1, 2]
b = [1, 2]
c = a
is_op = (a is c) # True
is_not_op = (a is not b) # True (different objects)

# Membership
in_op = (1 in my_list) # True
not_in_op = ('z' not in "hello") # True

# Walrus operator (Assignment Expressions) - Python 3.8+
# if (n := len(my_list)) > 3:
#    print(f"List is long ({n} elements)")

# --- Built-in Functions and Types ---
length = len(my_list)
type_info = type(my_car)
int_conversion = int("123")
str_conversion = str(123.45)
is_instance = isinstance(my_car, Vehicle)
callable_check = callable(greet)

# --- Miscellaneous ---
# Using pass as a placeholder
def placeholder_function():
    pass # Do nothing

# Deleting a variable
temp_var = "delete me"
print(f"Before del: {temp_var}")
del temp_var
# print(temp_var) # NameError: name 'temp_var' is not defined


print("\n--- End of Syntax Test ---")