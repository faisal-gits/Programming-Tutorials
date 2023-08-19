let's go through a detailed example of a C++ program that calculates the factorial of a number, explaining each step along the way.

```cpp
#include <iostream>

// Function declaration (prototype)
int factorial(int n);

int main() {
    int num;

    // Prompt the user to enter a positive integer
    std::cout << "Enter a positive integer: ";
    std::cin >> num;

    if (num < 0) {
        // Handle negative input
        std::cout << "Factorial is not defined for negative numbers." << std::endl;
    } else {
        // Calculate and display the factorial
        int result = factorial(num);
        std::cout << "Factorial of " << num << " is " << result << std::endl;
    }

    return 0;
}

// Function definition
int factorial(int n) {
    if (n == 0 || n == 1) {
        // Base case: factorial of 0 or 1 is 1
        return 1;
    } else {
        // Recursive case: factorial(n) = n * factorial(n-1)
        return n * factorial(n - 1);
    }
}
```

**Explanation:**

1. **Including the Necessary Library:**
   ```cpp
   #include <iostream>
   ```
   This line includes the standard input/output stream library that enables reading and writing to the console.

2. **Function Declaration (Prototype):**
   ```cpp
   int factorial(int n);
   ```
   This line declares the `factorial` function with a single integer parameter `n` and an integer return type. This tells the compiler about the existence of the function before it's defined. It's essentially a promise that the function will be implemented later.

3. **Main Function: User Input and Display:**
   ```cpp
   int main() {
       int num;
       std::cout << "Enter a positive integer: ";
       std::cin >> num;
   ```
   - `int num;`: Declares an integer variable to store the user's input.
   - `std::cout << ...`: Uses the output stream to display a prompt for the user to enter a positive integer.
   - `std::cin >> num;`: Uses the input stream to read the user's input and store it in the `num` variable.

4. **Handling Negative Input:**
   ```cpp
   if (num < 0) {
       std::cout << "Factorial is not defined for negative numbers." << std::endl;
   }
   ```
   Checks if the input number is negative. If it is, a message is displayed indicating that the factorial is not defined for negative numbers.

5. **Function Definition: Factorial Calculation:**
   ```cpp
   int factorial(int n) {
       if (n == 0 || n == 1) {
           return 1;
       } else {
           return n * factorial(n - 1);
       }
   }
   ```
   - This is the definition of the `factorial` function. It calculates the factorial of a positive integer `n`.
   - The base case is handled with `if (n == 0 || n == 1)`, where the factorial of 0 or 1 is 1.
   - The recursive case is `return n * factorial(n - 1);`, where the factorial of `n` is calculated using the formula `factorial(n) = n * factorial(n-1)`.

6. **Returning the Result and Program Termination:**
   ```cpp
   int result = factorial(num);
   std::cout << "Factorial of " << num << " is " << result << std::endl;
   ```
   - The calculated factorial is stored in the `result` variable.
   - The program displays the calculated factorial along with the entered number.

7. **Returning from the Main Function:**
   ```cpp
   return 0;
   ```
   This line indicates successful completion of the program by returning the value 0.

**Running the Program:**

To compile and run the program:

1. Save the code in a file named something like "factorial.cpp".
2. Open a terminal or command prompt.
3. Navigate to the directory where the file is saved.
4. Compile the code using a C++ compiler (e.g., g++): `g++ factorial.cpp -o factorial`
5. Run the compiled program: `./factorial`

The program will prompt you to enter a positive integer. After entering the number, it will calculate and display the factorial.

This example showcases fundamental concepts such as user input/output, function declaration and definition, recursion, conditional statements, and program flow in C++.