## Simple Inventory Management System in C

### Overview

In this final project, you'll create a simple inventory management application using C. This application will provide basic functionality to add items to an inventory, display the inventory, and search for specific items.

### Project Requirements

1. **Define a Structure for Inventory Items:** Create a structure to hold information about inventory items, including attributes like name, quantity, and price.

2. **Add Items to Inventory:** Implement a function that allows the user to add items to the inventory. Prompt the user to enter the item's name, quantity, and price.

3. **Display Inventory:** Implement a function to display the entire inventory. List each item's name, quantity, and price.

4. **Search for Items:** Implement a function that enables users to search for items in the inventory. Prompt the user to enter a search keyword and display all matching items.

5. **Menu System:** Create a menu system that presents options to the user: adding items, displaying inventory, searching for items, and exiting the program.

### Example Implementation

```c
#include <stdio.h>
#include <string.h>

struct InventoryItem {
    char name[50];
    int quantity;
    float price;
};

#define MAX_ITEMS 100
struct InventoryItem inventory[MAX_ITEMS];
int itemCount = 0;

void addItem() {
    if (itemCount < MAX_ITEMS) {
        printf("Enter item name: ");
        scanf("%s", inventory[itemCount].name);

        printf("Enter quantity: ");
        scanf("%d", &inventory[itemCount].quantity);

        printf("Enter price: ");
        scanf("%f", &inventory[itemCount].price);

        itemCount++;
        printf("Item added to inventory.\n");
    } else {
        printf("Inventory is full.\n");
    }
}

void displayInventory() {
    printf("Inventory:\n");
    for (int i = 0; i < itemCount; i++) {
        printf("Name: %s | Quantity: %d | Price: %.2f\n",
               inventory[i].name, inventory[i].quantity, inventory[i].price);
    }
}

void searchItem() {
    char keyword[50];
    printf("Enter search keyword: ");
    scanf("%s", keyword);

    printf("Search results:\n");
    for (int i = 0; i < itemCount; i++) {
        if (strstr(inventory[i].name, keyword) != NULL) {
            printf("Name: %s | Quantity: %d | Price: %.2f\n",
                   inventory[i].name, inventory[i].quantity, inventory[i].price);
        }
    }
}

int main() {
    int choice;

    do {
        printf("Inventory Management Application\n");
        printf("1. Add Item\n");
        printf("2. Display Inventory\n");
        printf("3. Search for Item\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                addItem();
                break;
            case 2:
                displayInventory();
                break;
            case 3:
                searchItem();
                break;
            case 4:
                printf("Exiting the program.\n");
                break;
            default:
                printf("Invalid choice.\n");
        }
    } while (choice != 4);

    return 0;
}
```

### Conclusion

Congratulations! You've successfully built a simple inventory management application using C. This project combined the concepts you learned in previous lessons, such as structures, functions, arrays, and user input, to create a practical program. Remember that this is just a starting point – you can continue to enhance and expand the application's functionality as you explore more advanced programming topics.

Happy coding!