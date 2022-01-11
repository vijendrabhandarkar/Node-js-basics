const http=require("http")
const url=require("url")

http.createServer((request,response)=>{
    //parsing the url using url module to seperate path and
    //convert query string(write the dummy query string to check) as an object
    const reqUrl=url.parse(request.url,true)
    console.log("reqUrl",reqUrl);
    console.log("query string----",reqUrl.query);
    response.write("Hello world")
    response.write("Welcome")
    response.write(JSON.stringify(reqUrl.query))
    // response.end("Hello ......")
    // console.log("url :::::!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",request.url);
    response.end()
}).listen(2000,()=>{
    console.log("server is listening on port 2000");
})