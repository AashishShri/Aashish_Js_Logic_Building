//** Factory Pattern 
// Problem: Creating objects without specifying the exact class of object that will be created.
// Solution: A factory function is used to create different types of objects based on certain conditions.
//  */

// Define the Developer class
class Developer {
  constructor(name) {
    this.name = name;
    this.type = "developer";
  }
}

// Define the Tester class
class Tester {
  constructor(name) {
    this.name = name;
    this.type = "tester";
  }
}

// Define the EmploymentFactory class
class EmploymentFactory {
  create(name, type) {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
      default:
        throw new Error("Invalid type");
    }
  }
}

// Instantiate the EmploymentFactory
const empFact = new EmploymentFactory();

// Create an array to store employee objects
const empArr = [];

// Create and push employee objects into the array using the factory
empArr.push(empFact.create("Aashish1", 1)); // Developer
empArr.push(empFact.create("Aashish2", 1)); // Developer
empArr.push(empFact.create("Aashish3", 2)); // Tester
empArr.push(empFact.create("Aashish4", 2)); // Tester

// Log the array of employees
console.log(empArr);
