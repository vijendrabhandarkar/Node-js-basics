console.log("Program started");
const validator=require("validator")
//Node: validator is synchronous in nature
let isValid=validator.isEmail('arun')
console.log('Is email Valid',isValid);//false

isValid=validator.isEmail('arun@gmail.com')
console.log('Is email Valid',isValid);//true
console.log("Program ended");