import { parentPort } from "worker_threads";

parentPort.on("message", (msg) => {
  console.log(`Recived msg from parent - ${msg}`);
});

parentPort.postMessage("Hello i m from child js");
