const http=require("http")
const fs=require("fs")

http.createServer((req,res)=>{
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
}).listen(2000)