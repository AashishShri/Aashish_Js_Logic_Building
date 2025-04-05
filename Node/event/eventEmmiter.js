import EventEmiiter from "events";

const event = new EventEmiiter();

event.on("HeyMan", (msg) => {
  console.log(`Now able to listen msg and this is msg recived ${msg}`);
});

event.emit("HeyMan", "Hey I m from event");
