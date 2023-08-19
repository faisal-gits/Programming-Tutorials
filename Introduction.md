C++ program that calculates the factorial of a number. Let's break it down into smaller parts:

---

**Course: Introduction to C++ Programming**

**Lesson: Calculating Factorials**

Welcome to the course on C++ programming! In this comprehensive lesson, we'll walk you through creating a program that calculates the factorial of a given positive integer. By the end of this lesson, you'll understand key concepts such as functions, recursion, user input/output, and program execution flow.

**Step 1: Setting Up the Basics**

We'll start by setting up a basic C++ program structure. This includes including necessary libraries and creating the `main` function, which is the entry point for our program.

1. Open your preferred code editor and create a new file named `factorial.cpp`.

2. Begin by including the necessary header file for input and output operations:
   
   ```cpp
   #include <iostream>
   ```

3. Create the `main` function, which serves as the starting point of the program. The `main` function is where the program's execution begins and ends. It returns an integer value to indicate the program's status:

   ```cpp
   int main() {
       // Code will go here
       return 0;
   }
   ```

**Step 2: Adding User Input**

In this step, we'll enhance our program to accept input from the user. We'll prompt the user to enter a positive integer, and we'll store that input for later use.

1. Inside the `main` function, declare an integer variable to store the user's input:
   
   ```cpp
   int num;
   ```

2. Use the `std::cout` stream to display a message prompting the user to enter a positive integer:
   
   ```cpp
   std::cout << "Enter a positive integer: ";
   ```

3. Utilize the `std::cin` stream to read the user's input and store it in the `num` variable:
   
   ```cpp
   std::cin >> num;
   ```

4. To provide user feedback, display the entered number:
   
   ```cpp
   std::cout << "You entered: " << num << std::endl;
   ```

**Step 3: Implementing the Factorial Function**

Now, let's create a function named `factorial` to calculate the factorial of a given positive integer using recursion.

1. Define the `factorial` function, which takes an integer parameter `n` and returns an integer result:

   ```cpp
   int factorial(int n) {
       // Code will go here
   }
   ```

2. Inside the `factorial` function, implement a base case that handles the factorial of 0. The factorial of 0 is 1:

   ```cpp
   if (n == 0) {
       return 1;
   }
   ```

3. For cases where `n` is greater than 0, implement a recursive calculation using the formula `factorial(n) = n * factorial(n - 1)`:

   ```cpp
   return n * factorial(n - 1);
   ```

**Step 4: Putting It All Together**

In this final step, we'll integrate all the components we've built so far into a complete program. This program will prompt the user to enter a positive integer, calculate its factorial using the `factorial` function, and display the result.

1. Inside the `main` function, calculate the factorial of the entered number using the `factorial` function:

   ```cpp
   int result = factorial(num);
   ```

2. Display the calculated factorial to the user:

   ```cpp
   std::cout << "Factorial of " << num << " is " << result << std::endl;
   ```

3. Finally, return 0 from the `main` function to indicate successful program execution:

   ```cpp
   return 0;
   ```

**Step 5: Compiling and Running the Program**

With your program complete, it's time to compile and run it to see the result:

1. Open a terminal or command prompt.

2. Navigate to the directory where your `factorial.cpp` file is located.

3. Use the `g++` compiler to compile the program:

   ```
   g++ factorial.cpp -o factorial
   ```

   This command compiles the `factorial.cpp` file and generates an executable named `factorial`.

4. Run the compiled program:

   ```
   ./factorial
   ```

   The program will prompt you to enter a positive integer. After entering the number, it will display the calculated factorial.

**Conclusion**

Congratulations! You've successfully completed the "Calculating Factorials" lesson. You've gained a strong understanding of important C++ concepts, including functions, recursion, user input/output, and program execution. Feel free to experiment with different inputs and explore further on your C++ learning journey.

In the next lesson, we'll delve into more advanced C++ topics, helping you build a solid foundation for your programming skills.