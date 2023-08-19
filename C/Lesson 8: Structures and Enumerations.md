## Lesson 8: Structures and Enumerations

### Overview

In this lesson, you'll dive into structures and enumerations in C programming. Structures allow you to create complex data types by grouping related variables together. Enumerations provide a way to define named constants for improved code readability.

### Topics Covered

- Defining and using structures to group related data.
- Enumerations and their role in defining named constants.

### Learning Objectives

By the end of this lesson, you should be able to:

1. Understand the concept of structures and how they organize related data.
2. Declare and define structures to create user-defined data types.
3. Use enumerations to define and work with named constants.

### Structures and Enumerations

#### Introduction to Structures

A structure is a composite data type that groups together variables of different data types under a single name. It allows you to create more complex data structures.

```c
struct Student {
    char name[50];
    int age;
    float gpa;
};

struct Student student1;
student1.age = 20;
```

#### Enumerations

Enumerations (enums) are used to define a list of named constants. They improve code readability by assigning names to specific values.

```c
enum Day {
    MON, TUE, WED, THU, FRI, SAT, SUN
};

enum Day today = WED;
```

### Conclusion

In this lesson, you've explored structures and enumerations in C programming. Structures allow you to group related data together, creating more complex and organized data types. Enumerations provide a way to define named constants for improved code readability and understanding. By using structures and enums, you enhance the clarity and organization of your programs. In the next lesson, you'll delve into file input and output, which allows your programs to interact with external files.