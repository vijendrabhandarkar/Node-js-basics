//importing user-defined module:'./calculator'
//by default synchronous
const cal=require("./calculator")
const res1=cal.add(10,12)
const res2=cal.product(10,20)
console.log(res1);
console.log(res2);