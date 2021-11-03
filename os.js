const os=require("os")

//Archirecture of os
console.log("Archirecture",os.arch());

//Os platform
console.log("Platform",os.platform());

//free memory in bytes
console.log("Free memory",os.freemem());

//total memory in bytes
console.log("Total memory",os.totalmem());

//to get cpu info
console.log("Cpu info ",os.cpus());

const memInBytes=os.freemem()
const memInKB=memInBytes/1024
const memInMB=memInKB/1024
const memInGB=memInMB/1024

console.log('Mem in kb',Math.floor(memInKB));
console.log('Mem in mb',Math.floor(memInMB));
console.log('Mem in gb',Math.floor(memInGB));