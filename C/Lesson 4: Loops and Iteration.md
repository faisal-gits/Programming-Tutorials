## Lesson 4: Loops and Iteration

### Overview

In this lesson, you'll learn about loops and iteration in C programming. Loops allow you to execute a block of code repeatedly, making it easier to perform tasks such as data processing, calculations, and more.

### Topics Covered

- Using loops for repetitive tasks: `while`, `do-while`, `for`.
- Breaking out of loops with the `break` statement.
- Nesting loops and loop control statements.

### Learning Objectives

By the end of this lesson, you should be able to:

1. Understand the concept of loops and their importance.
2. Use `while`, `do-while`, and `for` loops to repeat tasks.
3. Utilize the `break` statement to exit loops.
4. Implement nested loops and control their behavior.

### Loops and Iteration

#### Introduction to Loops

Loops allow you to repeat a set of instructions multiple times, reducing redundancy in your code and making it more efficient. The three types of loops in C are: `while`, `do-while`, and `for`.

#### `while` Loop

```c
int count = 1;
while (count <= 5) {
    printf("Count: %d\n", count);
    count++;
}
```

#### `do-while` Loop

```c
int count = 1;
do {
    printf("Count: %d\n", count);
    count++;
} while (count <= 5);
```

#### `for` Loop

```c
for (int count = 1; count <= 5; count++) {
    printf("Count: %d\n", count);
}
```

#### Using the `break` Statement

The `break` statement allows you to exit a loop prematurely if a certain condition is met.

```c
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    printf("%d\n", i);
}
```

#### Nested Loops

You can nest loops within each other to perform more complex tasks.

```c
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("%d * %d = %d\n", i, j, i * j);
    }
}
```

### Conclusion

In this lesson, you've learned about loops and iteration in C programming. Loops are essential for performing repetitive tasks efficiently. You've explored the `while`, `do-while`, and `for` loops, as well as the use of the `break` statement to control loop execution. You've also seen how to nest loops for more complex operations. In the next lesson, we'll dive into functions and modularization, which help organize and structure your code.