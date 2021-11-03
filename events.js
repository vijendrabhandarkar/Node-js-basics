console.log("Program started");
const events=require("events");

//return class of event emitter
const EventEmitter=events.EventEmitter;

//Note:EventEmitters are synchronous in nature

//creating an instance/object of event emitter
const eventEmitter=new EventEmitter();

console.log('event emitter',eventEmitter);
console.log('event emitter class',EventEmitter);

//creating an instance of event emitter in single line
const eventEmitter2=new events.EventEmitter()

//listening to an event
eventEmitter.on('test',()=>{
    console.log("test event executed");
})

eventEmitter.on('test',()=>{
    console.log("test 1 event executed");
})

//subscribing the event-->execute event
eventEmitter.emit('test')
eventEmitter.emit('test')


eventEmitter.on('add',(a,b)=>{
    console.log("Sum",(a+b));
})


eventEmitter.emit('add',10,20)

eventEmitter2.on('print',()=>{
    console.log('Printing data');
})

eventEmitter2.emit("print")

//The below code is invalied
//eventEmitter.emit("print")

eventEmitter.once('myEvent',(data)=>{
    console.log('Once - ',data);
})

eventEmitter.emit("myEvent","executed once")
//once it's executed, it will be deleted
eventEmitter.emit("myEvent","executed once")
eventEmitter.emit("myEvent","executed once")

const eventNames=eventEmitter.eventNames()
console.log('eventNames',eventNames);

console.log("Program Ended");