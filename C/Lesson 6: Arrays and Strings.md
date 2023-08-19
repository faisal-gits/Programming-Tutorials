## Lesson 6: Arrays and Strings

### Overview

In this lesson, you'll delve into arrays and strings in C programming. Arrays are powerful data structures that allow you to store and manipulate collections of values. Strings are a specific type of array used to represent textual data.

### Topics Covered

- Understanding arrays and their importance.
- Declaring, initializing, and accessing array elements.
- Working with strings: char arrays and string functions.

### Learning Objectives

By the end of this lesson, you should be able to:

1. Understand the concept of arrays and their role in programming.
2. Declare, initialize, and access elements in arrays.
3. Utilize arrays to store and manipulate collections of data.
4. Work with strings as character arrays and use string functions.

### Arrays and Strings

#### Introduction to Arrays

An array is a collection of elements of the same data type stored in contiguous memory locations. Arrays provide a way to efficiently manage and access multiple values using a single variable name.

#### Declaring and Initializing Arrays

```c
int numbers[5];           // Declaring an array of 5 integers
double prices[10] = {0};  // Declaring and initializing an array of 10 doubles
```

#### Accessing Array Elements

```c
int firstNumber = numbers[0];  // Accessing the first element of the array
numbers[2] = 42;               // Assigning a value to the third element
```

#### Strings as Character Arrays

In C, strings are represented as arrays of characters (char arrays). The last character in a string is always the null terminator `'\0'`.

```c
char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};  // Equivalent to "Hello"
```

#### Using String Functions

C provides string manipulation functions in the `<string.h>` library.

```c
#include <string.h>

char source[] = "Hello";
char destination[20];
strcpy(destination, source);     // Copy "Hello" to "destination"
int length = strlen(source);     // Get the length of the string
```

### Conclusion

In this lesson, you've explored arrays and strings in C programming. Arrays are essential for storing collections of data, and strings are a specific type of array used to represent text. You've learned how to declare, initialize, and access array elements, as well as work with strings using character arrays and string functions. Understanding arrays and strings expands your ability to work with data effectively. In the next lesson, we'll delve into pointers and memory management.