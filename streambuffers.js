console.log("Program started");

const fs=require("fs");

const readStream=fs.createReadStream("./asyncview/view.txt",{
    highWaterMark: 128*10
})

let readData=""
// console.log(readStream);
readStream.on("open",()=>{
    console.log("stream opened.........");
})

readStream.on("data",(chunk)=>{
    console.log("buffer");
    console.log(chunk);
    console.log(chunk.toString());
    readData +=chunk.toString()
})
readStream.on("end",()=>{
    console.log("stream ended.........");
   console.log("readData------",readData);
})

//handling error
readStream.on("error",(err)=>{
    console.log("Error-------",err);
})

console.log("Program ended");