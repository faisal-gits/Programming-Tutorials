## Lesson 7: Pointers and Memory Management

**Example: Dynamic Array Allocation**

In this example, we'll create a program that dynamically allocates memory for an array of user-defined size.

```cpp
#include <iostream>

int main() {
    int size;

    // Prompt the user for array size
    std::cout << "Enter the size of the array: ";
    std::cin >> size;

    // Dynamically allocate memory for the array
    int* dynamicArray = new int[size];

    // Input elements from the user
    std::cout << "Enter " << size << " numbers:" << std::endl;
    for (int i = 0; i < size; ++i) {
        std::cin >> dynamicArray[i];
    }

    // Deallocate memory
    delete[] dynamicArray;

    return 0;
}
```

