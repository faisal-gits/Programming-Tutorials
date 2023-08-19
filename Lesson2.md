Lesson 2: "Variables and Data Types," along with an example. In this lesson, you'll learn how to declare variables, work with different data types, and perform basic operations.

## Lesson 2: Variables and Data Types

**Example: Calculating Area of a Rectangle**

In this example, we'll create a program that calculates the area of a rectangle using variables and basic arithmetic operations.

1. **Open Your C++ IDE:**
   Ensure you have your C++ IDE (e.g., Code::Blocks, Visual Studio Code) open and ready.

2. **Create a New Project:**
   - Open a new or existing project in your IDE.
   - Locate the main source file (usually named `main.cpp`).

3. **Write the Program:**
   - Clear any existing code and replace it with the following:

   ```cpp
   #include <iostream>

   int main() {
       // Declare variables for length and width
       float length, width;

       // Prompt the user for input
       std::cout << "Enter the length of the rectangle: ";
       std::cin >> length;

       std::cout << "Enter the width of the rectangle: ";
       std::cin >> width;

       // Calculate the area
       float area = length * width;

       // Display the result
       std::cout << "The area of the rectangle is: " << area << std::endl;

       return 0;
   }
   ```

4. **Build and Run:**
   - Build the program to compile the code.
   - Run the program and follow the prompts to enter the length and width of the rectangle.

5. **Observe the Output:**
   - The program will calculate and display the area of the rectangle based on the provided inputs.

## Explanation

- We declare two `float` variables, `length` and `width`, to store the dimensions of the rectangle.
- Using `std::cout` and `std::cin`, we prompt the user to input the length and width values.
- The area is calculated using the formula `area = length * width`, and the result is stored in the `area` variable.
- Finally, the calculated area is displayed using `std::cout`.

## Conclusion

You've successfully created a C++ program that calculates the area of a rectangle using variables and arithmetic operations. This example demonstrates the usage of variables, input/output, and basic calculations. In the next lesson, we'll explore conditional statements, which allow our programs to make decisions based on conditions.