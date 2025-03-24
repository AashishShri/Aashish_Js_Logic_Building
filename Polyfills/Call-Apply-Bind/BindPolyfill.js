let car1 = {
    color: "Black",
    company: "TATA",
    name: "Harrier",
  };
  
  function purchasecar(price) {
    console.log(
      `I have purchase ${this.color} - ${this.company} - ${this.name} in rs - ${price}`
    );
  }
  let newFunc = purchasecar.bind(car1); // I have purchase Black - TATA - Harrier in rs - 3000000
  console.log(newFunc(3000000));
  
  // Polyfill Logic 
  Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error(this + "its not a callable");
    }
    context.fn = this;
    return function (...args1) {
      return context.fn(...args, ...args1);
    };
  };
  let newFunc1 = purchasecar.myBind(car1,); // I have purchase Black - TATA - Harrier in rs - 3000000
  console.log(newFunc1(3000000));