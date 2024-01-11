let fs = require("fs");
let readStream = fs.createReadStream("./file1.txt");
let events = require("events");
let eventEmitter = new events.EventEmitter();

// readStream.on("open", () => {
//   console.log("The file is open");
// });

let eventHandler = () => {
  console.log("I hear a scream!");
};

eventEmitter.on("scream", eventHandler);
eventEmitter.emit("scream");
