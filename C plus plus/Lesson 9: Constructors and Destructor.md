## Lesson 9: Constructors and Destructors

**Example: Constructors and Destructors**

In this example, we'll expand the bank account class to include constructors and destructors for proper initialization and cleanup.

```cpp
#include <iostream>

class BankAccount {
private:
    double balance;

public:
    // Constructor
    BankAccount(double initialBalance) : balance(initialBalance) {
        std::cout << "Account created with initial balance: " << balance << std::endl;
    }

    // Destructor
    ~BankAccount() {
        std::cout << "Account destroyed. Final balance: " << balance << std::endl;
    }

    // Methods (same as previous example)
    // ...
};

int main() {
    BankAccount account(1000.0);

    account.deposit(500.0);
    account.withdraw(200.0);

    return 0;
}
```

