## Lesson 5: Functions and Modularization

**Example: Celsius to Fahrenheit Conversion**

In this example, we'll create a program that converts temperature from Celsius to Fahrenheit using a function.

```cpp
#include <iostream>

// Function to convert Celsius to Fahrenheit
double celsiusToFahrenheit(double celsius) {
    return (celsius * 9.0 / 5.0) + 32;
}

int main() {
    double celsius;

    // Prompt the user for input
    std::cout << "Enter temperature in Celsius: ";
    std::cin >> celsius;

    // Convert and display the result
    double fahrenheit = celsiusToFahrenheit(celsius);
    std::cout << "Temperature in Fahrenheit: " << fahrenheit << std::endl;

    return 0;
}
```