import { Worker } from "worker_threads";

const worker = new Worker("./child.js");

worker.postMessage("Hello from parent JS");

worker.on("message", (msg) => {
  console.log(`Recived msg from child - ${msg}`);
});
