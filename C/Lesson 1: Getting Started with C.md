## Lesson 1: Getting Started with C

### Overview

In this lesson, you'll be introduced to the fundamental concepts of C programming. You'll learn how to set up your development environment, write a simple C program, and execute it to see the results. This lesson lays the foundation for your journey into the world of programming with C.

### Topics Covered

- Introduction to C programming language
- Setting up a development environment
- Writing and running a basic C program

### Learning Objectives

By the end of this lesson, you should be able to:

1. Understand what C programming is and why it's important.
2. Set up a development environment for C programming.
3. Write a simple "Hello, World!" program in C.
4. Compile and execute the C program to see the output.

### Environment Setup

To start programming in C, you need a text editor and a C compiler. Follow these steps to set up your environment:

1. **Choose a Text Editor:** You can use any text editor to write your C code. Some popular choices are Notepad++, Visual Studio Code, or Sublime Text.

2. **Install a C Compiler:** You'll need a C compiler to translate your C code into machine-readable instructions. Common options are GCC (GNU Compiler Collection) for Unix-like systems and MinGW for Windows.

### Writing Your First C Program: "Hello, World!"

Here's a step-by-step guide to creating and running a simple "Hello, World!" program in C:

1. **Open a Text Editor:** Open your chosen text editor and create a new file.

2. **Write the Code:** Type the following C code into your text editor:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello, World!\n");
       return 0;
   }
   ```

   - The `#include <stdio.h>` line is a preprocessor directive that includes the standard input/output library for basic input/output operations.
   - The `int main()` function is the entry point of your program.
   - Inside the `main()` function, `printf()` is used to display the text "Hello, World!" on the screen.
   - The `return 0;` line indicates that the program has executed successfully.

3. **Save the File:** Save the file with a `.c` extension (e.g., `hello.c`) in a location you can easily find.

4. **Compile the Code:** Open a terminal or command prompt and navigate to the directory where your `.c` file is saved. Run the following command to compile the code:

   ```
   gcc -o hello hello.c
   ```

   This command compiles your code and creates an executable named `hello`.

5. **Run the Program:** After successful compilation, run the program by entering:

   ```
   ./hello
   ```

   You should see the output: "Hello, World!"

### Conclusion

Congratulations! You've successfully written, compiled, and executed your first C program. In this lesson, you learned about the basics of C programming, setting up your environment, and the structure of a simple C program. This is just the beginning of your journey into C programming, and you're now ready to explore more complex concepts in the coming lessons.

In the next lesson, we'll dive deeper into data types, variables, and how to work with them in C programs.