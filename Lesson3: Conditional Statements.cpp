## Lesson 3: Conditional Statements

**Example: Checking Even or Odd**

In this example, we'll create a program that checks whether a given number is even or odd using conditional statements.

```cpp
#include <iostream>

int main() {
    int number;

    // Prompt the user for input
    std::cout << "Enter an integer: ";
    std::cin >> number;

    // Check if the number is even or odd
    if (number % 2 == 0) {
        std::cout << number << " is even." << std::endl;
    } else {
        std::cout << number << " is odd." << std::endl;
    }

    return 0;
}
```

