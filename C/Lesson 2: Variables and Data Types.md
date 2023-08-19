## Lesson 2: Variables and Data Types

### Overview

In this lesson, you'll learn about variables and data types in C programming. Variables allow you to store and manipulate data in your programs, while data types define the kind of data that can be stored in a variable. Understanding variables and data types is crucial for writing effective and efficient C programs.

### Topics Covered

- Introduction to variables and their significance.
- Common data types in C: int, float, char, etc.
- Declaring variables, assigning values, and basic operations.

### Learning Objectives

By the end of this lesson, you should be able to:

1. Understand the concept of variables and their role in programming.
2. Identify and use common data types in C.
3. Declare variables, assign values to them, and perform basic operations.
4. Convert between different data types as needed.

### Variables and Data Types

#### What are Variables?

A variable is a named storage location in a computer's memory that holds a value. It allows you to store and manipulate data during the execution of a program. Think of variables as labeled containers that can hold different types of information.

#### Common Data Types

C provides several basic data types that represent different kinds of data. Some common data types include:

- `int`: Represents integer values (e.g., 5, -10).
- `float`: Represents floating-point values (e.g., 3.14, -0.5).
- `char`: Represents single characters (e.g., 'A', '5').
- `double`: Represents double-precision floating-point values.
- `bool`: Represents Boolean values (`true` or `false`).

### Declaring Variables

To declare a variable, you need to specify its data type and a name. For example:

```c
int age;         // Declares an integer variable named "age"
float salary;    // Declares a floating-point variable named "salary"
char initial;    // Declares a character variable named "initial"
```

### Assigning Values to Variables

You can assign values to variables using the assignment operator `=`. For example:

```c
age = 25;          // Assigns the value 25 to the "age" variable
salary = 5000.75;  // Assigns the value 5000.75 to the "salary" variable
initial = 'J';     // Assigns the character 'J' to the "initial" variable
```

### Basic Operations

You can perform various operations on variables, such as arithmetic operations (+, -, *, /) and logical operations (&&, ||, !).

```c
int x = 10, y = 20;
int sum = x + y;    // Adds x and y, stores result in "sum"
int product = x * y;  // Multiplies x and y, stores result in "product"
bool isTrue = x < y;  // Checks if x is less than y, stores result in "isTrue"
```

### Type Conversion

Sometimes, you need to convert between different data types. C provides explicit and implicit type conversion methods.

```c
float temperature = 98.6;
int tempInt = (int)temperature;  // Explicit conversion (casting)

int num = 10;
float result = num / 3.0;       // Implicit conversion (promotion)
```

### Conclusion

In this lesson, you've learned about variables, data types, declaring variables, assigning values, and performing basic operations. Variables are essential for storing and manipulating data in your programs, and understanding data types is crucial for ensuring your data is interpreted correctly by the compiler. In the next lesson, we'll explore decision-making and control structures using conditional statements.