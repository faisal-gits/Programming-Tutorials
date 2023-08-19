## Lesson 10: Inheritance and Polymorphism

**Example: Vehicle Hierarchy**

In this example, we'll create a program that models different types of vehicles using inheritance and polymorphism.

```cpp
#include <iostream>
#include <string>

class Vehicle {
protected:
    std::string type;

public:
    Vehicle(const std::string& vehicleType) : type(vehicleType) {}

    virtual void displayInfo() const {
        std::cout << "Type: " << type << std::endl;
    }
};

class Car : public Vehicle {
public:
    Car() : Vehicle("Car") {}

    void displayInfo() const override {
        Vehicle::displayInfo();
        std::cout << "Number of doors: 4" << std::endl;
    }
};

class Bike : public Vehicle {
public:
    Bike() : Vehicle("Bike") {}

    void displayInfo() const override {
        Vehicle::displayInfo();
        std::cout << "Number of wheels: 2" << std::endl;
    }
};

int main() {
    Vehicle* vehiclePtr;
    Car car;
    Bike bike;

    vehiclePtr = &car;
    vehiclePtr->displayInfo();

    vehiclePtr = &bike;
    vehiclePtr->displayInfo();

    return 0;
}
```