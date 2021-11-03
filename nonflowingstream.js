const fs=require("fs")

const readStream=fs.createReadStream("./asyncview/view.txt")

//nonflowingstream:used to limit the stream flow manually or programatically
setTimeout(()=>{
    const data=readStream.read(1)
    console.log("Data----",data);
},100)