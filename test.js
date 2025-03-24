function once(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}


const sayHello = () => {
console.log("Hello, world!");
};

const sayHelloOnce = once(sayHello);

sayHelloOnce();
sayHelloOnce();
sayHelloOnce();
sayHelloOnce();

//The once function ensures that the original function (fn) is called only once, no matter how many times the returned function is invoked
