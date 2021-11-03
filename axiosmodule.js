const axios=require('axios')
//so now installing and using thord-party module

axios.get("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
    console.log("Data",response.data);
})
.catch((err)=>{
    console.log(err.message);
})