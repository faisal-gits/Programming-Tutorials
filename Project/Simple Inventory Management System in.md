## Simple Inventory Management System in C++

### Program Overview

This program will allow users to manage a simple inventory of products. Users can add new products, update quantities, and view the current inventory.

### Documentation

#### 1. **Header Files and Libraries**

```cpp
#include <iostream>
#include <string>
#include <vector>
```

Explanation: We include necessary header files (`<iostream>` for input/output, `<string>` for string handling, and `<vector>` for dynamic arrays) to use in our program.

#### 2. **Product Structure**

```cpp
struct Product {
    std::string name;
    int quantity;
};
```

Explanation: We define a `Product` structure to hold information about each product, including its name and quantity.

#### 3. **Function Declarations**

```cpp
void addProduct(std::vector<Product>& inventory);
void updateProductQuantity(std::vector<Product>& inventory, const std::string& productName, int newQuantity);
void displayInventory(const std::vector<Product>& inventory);
```

Explanation: We declare functions for adding a product, updating its quantity, and displaying the current inventory. These functions will be defined later.

#### 4. **Main Function**

```cpp
int main() {
    std::vector<Product> inventory;

    char choice;
    do {
        std::cout << "1. Add Product\n2. Update Quantity\n3. Display Inventory\n4. Exit\n";
        std::cout << "Enter your choice: ";
        std::cin >> choice;

        switch (choice) {
            case '1':
                addProduct(inventory);
                break;
            case '2': {
                std::string productName;
                int newQuantity;
                std::cout << "Enter product name: ";
                std::cin.ignore();
                std::getline(std::cin, productName);
                std::cout << "Enter new quantity: ";
                std::cin >> newQuantity;
                updateProductQuantity(inventory, productName, newQuantity);
                break;
            }
            case '3':
                displayInventory(inventory);
                break;
            case '4':
                std::cout << "Exiting program.\n";
                break;
            default:
                std::cout << "Invalid choice. Please try again.\n";
        }
    } while (choice != '4');

    return 0;
}
```

Explanation: The main function displays a menu and allows users to choose options for adding products, updating quantities, displaying the inventory, or exiting the program.

#### 5. **Function Definitions**

```cpp
void addProduct(std::vector<Product>& inventory) {
    Product newProduct;
    std::cout << "Enter product name: ";
    std::cin.ignore();
    std::getline(std::cin, newProduct.name);
    std::cout << "Enter quantity: ";
    std::cin >> newProduct.quantity;
    inventory.push_back(newProduct);
    std::cout << "Product added to inventory.\n";
}

void updateProductQuantity(std::vector<Product>& inventory, const std::string& productName, int newQuantity) {
    for (Product& product : inventory) {
        if (product.name == productName) {
            product.quantity = newQuantity;
            std::cout << "Quantity updated.\n";
            return;
        }
    }
    std::cout << "Product not found in inventory.\n";
}

void displayInventory(const std::vector<Product>& inventory) {
    std::cout << "Current Inventory:\n";
    for (const Product& product : inventory) {
        std::cout << "Product: " << product.name << ", Quantity: " << product.quantity << "\n";
    }
}
```

Explanation: These functions implement the functionality of adding products, updating quantities, and displaying the inventory. The `addProduct` function adds a new product to the inventory, `updateProductQuantity` updates the quantity of a specific product, and `displayInventory` displays the entire inventory.

### Conclusion

Congratulations! You've successfully created a simple inventory management system in C++. Users can add products, update their quantities, and view the current inventory. This program serves as a foundation for more complex inventory management systems with additional features.

Remember that this example is kept minimal for educational purposes. In real-world applications, you might want to incorporate error handling, data persistence (e.g., using files or a database), and a more user-friendly interface.