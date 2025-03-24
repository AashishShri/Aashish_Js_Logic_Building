//** Singleton Pattern
// Problem: Ensuring that a class has only one instance and providing a global access point to it.
// Solution: Use a static variable to hold the single instance and ensure the class can only be instantiated once.
//  */

class ProcessManager {
    constructor() {
      this.numProcess = 0;
    }
  
    // Add methods for the process manager if needed
    incrementProcess() {
      this.numProcess++;
    }
  
    getProcessCount() {
      return this.numProcess;
    }
  }
  
  class Singleton {
    // Private static instance to hold the singleton object
    static instance = null;
  
    // Static method to access the instance
    static getProcessManager() {
      if (!Singleton.instance) {
        Singleton.instance = new ProcessManager();
      }
      return Singleton.instance;
    }
  }
  
  // Get the Singleton instance
  const single = Singleton.getProcessManager();
  const single1 = Singleton.getProcessManager();
  
  // Demonstrate both references point to the same instance
  console.log(single);
  console.log(single1);
  console.log(single === single1);  // true
  