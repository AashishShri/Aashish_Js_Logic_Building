//** Observer Pattern
// Problem: When an object changes state, all dependent objects need to be notified and updated automatically.

// Solution: Maintain a list of subscribers that need to be notified when the state changes.
//  */

class Subject {
    constructor() {
      this.observers = [];
    }
  
    subscribe(sunObserver) {
      this.observers.push(sunObserver);
    }
  
    unsubscribe(unsubObserver) {
      this.observers = this.observers.filter(o => o !== unsubObserver);
    }
  
    notify() {
      this.observers.forEach(observer => observer.update(this));
    }
  }
  
  class Observer {
    update(subject) {
      console.log("Subject state has changed", subject);
    }
  }
  
  const subject = new Subject();
  const observer1 = new Observer();
  const observer2 = new Observer();
  
  subject.subscribe(observer1);
  subject.subscribe(observer2);
  
  subject.notify(); // Both observers are notified
  
  subject.unsubscribe(observer1);
  subject.notify(); // Only observer2 is notified
  