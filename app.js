var events = require("events"); 
var myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function (mesg) {
    console.log(mesg);
})
myEmitter.emit("someEvent", "Thats an event");
