## Lesson 1: Getting Started with C++

**Example: Creating a "Hello, World!" Program**

1. **Open an Integrated Development Environment (IDE):**
   Choose an IDE like Code::Blocks, Visual Studio Code, or any other you're comfortable with.

2. **Create a New C++ Project:**
   - Open your IDE and create a new C++ project.
   - Choose a project name and location for your project files.

3. **Write the "Hello, World!" Program:**
   - In your IDE, locate the main source file (often named `main.cpp`).
   - Clear any existing code and add the following:

   ```cpp
   #include <iostream>

   int main() {
       std::cout << "Hello, World!" << std::endl;
       return 0;
   }
   ```

   - The `#include <iostream>` line includes the necessary input/output stream library.
   - The `int main()` function is the entry point of the program.
   - Inside the `main()` function, `std::cout` is used to print "Hello, World!" to the console.
   - The `return 0;` line indicates the successful completion of the program.

4. **Build and Run the Program:**
   - Build the project in your IDE to compile the code.
   - Run the program from within the IDE or through the terminal/command prompt.

5. **Observe the Output:**
   - After running the program, you should see the output "Hello, World!" displayed in the console.

## Conclusion

Congratulations! You've successfully created and run your first C++ program. This simple "Hello, World!" example confirms that your development environment is configured correctly, and you're ready to start your journey into C++ programming.

In the next lesson, we'll explore variables and data types, allowing us to work with different kinds of information in our programs.