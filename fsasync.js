const fs = require("fs");

console.log("Program started");

const writeData = () => {
  fs.writeFile("asyncview/view.txt", "Welcome to node js!!!!!!!!!!!", (fileErr) => {
    if (fileErr) {
      console.log("File err", fileErr);
    } else {
      console.log("Data written successfully");
      fs.readFile("asyncview/view.txt", (err, data) => {
        if (err) {
          console.log("err", err);
        } else {
          console.log(data.toString());
        }
      });
    }
  });
};

fs.exists("asyncview", (exists) => {
  if (!exists) {
    //if file doesnot exist, then we need to create or make directory and then write the data into it
    fs.mkdir("asyncview", (err) => {
      if (err) {
        console.log("the folder is not created", err);
      } else {
        console.log("the folder is created successfully");
        writeData();
      }
    });
  } else {
    //if file exists, then we need to write the data into it
    writeData();
  }
});

/* fs.mkdir('view',(err)=>{
    if(err){
        console.log('the folder is not created',err);
    }else{
        console.log('the folder is created successfully');
    }
})
 */

//this will not work as we are simultaneously trying to write and read the data
/* fs.readFile("async/view.txt",(err,data)=>{
    if(err){
        console.log("err",err);
    }else{
        console.log(data.toString());
    }
}) */

console.log("Program ended");
