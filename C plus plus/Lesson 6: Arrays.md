## Lesson 6: Arrays

**Example: Finding Maximum and Minimum**

In this example, we'll create a program that finds the maximum and minimum values in an array of integers.

```cpp
#include <iostream>

int main() {
    const int size = 5;
    int numbers[size];

    // Input numbers from the user
    std::cout << "Enter " << size << " numbers:" << std::endl;
    for (int i = 0; i < size; ++i) {
        std::cin >> numbers[i];
    }

    // Find the maximum and minimum
    int max = numbers[0];
    int min = numbers[0];
    for (int i = 1; i < size; ++i) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    // Display the results
    std::cout << "Maximum: " << max << std::endl;
    std::cout << "Minimum: " << min << std::endl;

    return 0;
}
```

