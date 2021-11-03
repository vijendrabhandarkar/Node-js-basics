const events=require("events")
const eventEmitter=new events.EventEmitter()

const add=(a,b)=>{
    console.log("Sum",(a+b));
}

eventEmitter.on("myEvent",add)

console.log('Event names before remove',eventEmitter.eventNames());

eventEmitter.removeListener("myEvent",add)

console.log("Event names after remove",eventEmitter.eventNames());

const eventEmitter2=new events.EventEmitter()

//addListener or on
eventEmitter2.on("myEvent1",add)
eventEmitter2.on("myEvent2",add)

console.log('Event names before remove',eventEmitter2.eventNames());

//off
eventEmitter2.removeAllListeners()

console.log("Event names after remove",eventEmitter2.eventNames());