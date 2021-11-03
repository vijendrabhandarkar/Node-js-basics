console.log("Program started");
const fs=require('fs')
console.log(fs);

//create the folder or directory only if the 'demo' directory is not exists
/* if(!fs.existsSync('demo')){
    fs.mkdirSync('demo')
} */
// fs.mkdirSync('demo')
try{
    fs.mkdirSync('demo')
}catch(err){
    console.log('err---------------',err);
}

fs.writeFileSync('demo/test.txt','Hello World.............')

if(fs.existsSync('demo/test.txt')){
    const data=fs.readFileSync("demo/test.txt")
    console.log(data);
    console.log(data.toString());
}


console.log("Program ended");

