## Lesson 8: Introduction to OOP

**Example: Bank Account Class**

In this example, we'll create a basic bank account class with methods to deposit and withdraw funds.

```cpp
#include <iostream>

class BankAccount {
private:
    double balance;

public:
    // Constructor
    BankAccount() : balance(0.0) {}

    // Methods
    void deposit(double amount) {
        balance += amount;
    }

    void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
        } else {
            std::cout << "Insufficient funds." << std::endl;
        }
    }

    double getBalance() const {
        return balance;
    }
};

int main() {
    BankAccount account;

    account.deposit(1000.0);
    std::cout << "Balance: " << account.getBalance() << std::endl;

    account.withdraw(500.0);
    std::cout << "Balance: " << account.getBalance() << std::endl;

    return 0;
}
```

