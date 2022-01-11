const http=require("http")
const fs=require("fs")

http.createServer((req,res)=>{
    //here req.url considers entire pathname as well as query string and the fragment
    if (req.url==='/'&&req.method==="GET") {
        fs.readFile("./asyncview/view.txt",(err,data)=>{
            if (err) {
                res.writeHead(404,{
                    'content-type':'text/plain'
                })
                res.write("File not found")
                res.end()
            } else {
                res.writeHead(200,{
                    'content-type':'text/html'
                })
                res.write(data)
                res.end()
            }
        })
    } else {
        res.writeHead(404,{
            'content-type':'text/plain' 
        })
        res.end("Invalied path or invalied HTTP method")
    }
    
}).listen(2000,()=>{
    console.log("server is listening on port 2000");
})