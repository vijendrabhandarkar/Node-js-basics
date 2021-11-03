const http=require("http")
const fs=require("fs")

http.createServer((req,res)=>{
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
            'content-type':'text/html' 
        })
        res.end("Invalied path or invalied HTTP method")
    }
    
}).listen(2000)