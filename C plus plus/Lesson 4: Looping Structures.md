## Lesson 4: Looping Structures

**Example: Printing Multiplication Table**

In this example, we'll create a program that prints the multiplication table of a given number using a `for` loop.

```cpp
#include <iostream>

int main() {
    int number;

    // Prompt the user for input
    std::cout << "Enter a number: ";
    std::cin >> number;

    // Print multiplication table using a for loop
    for (int i = 1; i <= 10; ++i) {
        std::cout << number << " * " << i << " = " << number * i << std::endl;
    }

    return 0;
}
```

## Explanation

- **Lesson 3 Example:** The program checks if the entered number is even or odd using the modulo operator (`%`). If the remainder when dividing by 2 is 0, the number is even; otherwise, it's odd.

- **Lesson 4 Example:** The program prompts the user for a number and then uses a `for` loop to print the multiplication table of that number from 1 to 10.

## Conclusion

In Lesson 3 and 4, you've learned about conditional statements and looping structures in C++. The provided examples showcase how to use `if` statements to make decisions and how to use `for` loops to repeat tasks. These concepts are fundamental for creating more dynamic and interactive programs. In the next lesson, we'll delve into functions, a powerful tool for modularizing code and promoting reusability.