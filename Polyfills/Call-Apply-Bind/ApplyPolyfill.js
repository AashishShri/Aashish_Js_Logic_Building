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
purchasecar.apply(car1, [3000000]); // I have purchase Black - TATA - Harrier in rs - 3000000

//Polyfill Logic
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "its not a callable");
  }
  if (!Array.isArray(args)) {
    throw new Error("argument should be array");
  }
  context.fn = this;
  context.fn(...args);
};
purchasecar.myApply(car1, [3000000]); // I have purchase Black - TATA - Harrier in rs - 3000000
