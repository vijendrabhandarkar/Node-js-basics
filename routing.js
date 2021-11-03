const http=require("http")
const handler=require("./handler")

http.createServer(handler.requestHandler).listen(2000,()=>{
    console.log("server is listening on port 2000");
})