## Lesson 3: Control Flow and Decision Making

### Overview

In this lesson, you'll learn about control flow and decision-making in C programming. Control flow structures allow you to alter the sequence of execution in your program based on certain conditions. You'll explore how to make decisions using `if`, `else if`, and `else` statements, as well as logical operators for more complex conditions.

### Topics Covered

- Introduction to conditional statements (`if`, `else if`, `else`).
- Using comparison operators (==, <, >, <=, >=, !=).
- Logical operators (`&&`, `||`) for combining conditions.
  
### Learning Objectives

By the end of this lesson, you should be able to:

1. Understand the importance of control flow in programming.
2. Use `if`, `else if`, and `else` statements to make decisions.
3. Employ comparison operators to compare values.
4. Combine conditions using logical operators.

### Control Flow and Decision Making

#### Introduction to Conditional Statements

Conditional statements allow you to execute different blocks of code based on certain conditions. The `if`, `else if`, and `else` statements are the building blocks of decision-making in programming.

#### Comparison Operators

Comparison operators are used to compare values and evaluate conditions. Common comparison operators include:

- `==`: Equal to
- `!=`: Not equal to
- `<`: Less than
- `>`: Greater than
- `<=`: Less than or equal to
- `>=`: Greater than or equal to

#### Logical Operators

Logical operators allow you to combine conditions to make more complex decisions. The logical operators in C are:

- `&&` (AND): Returns `true` if both conditions are `true`.
- `||` (OR): Returns `true` if either condition is `true`.
- `!` (NOT): Inverts the value of a condition.

### Using Conditional Statements

```c
int age;
printf("Enter your age: ");
scanf("%d", &age);

if (age < 18) {
    printf("You are a minor.\n");
} else if (age >= 18 && age < 65) {
    printf("You are an adult.\n");
} else {
    printf("You are a senior citizen.\n");
}
```

In this example, the program checks the user's age and prints an appropriate message based on the condition.

### Conclusion

In this lesson, you've explored how to control the flow of your program using conditional statements. By using `if`, `else if`, and `else` statements along with comparison and logical operators, you can make decisions and execute different code blocks based on specific conditions. This is a crucial aspect of programming that allows your code to respond dynamically to different scenarios. In the next lesson, we'll dive into loops and iteration, which are essential for repeating tasks in your programs.