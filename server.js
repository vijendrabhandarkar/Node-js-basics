const http = require("http");

const server = http.createServer((request, response) => {
  //console.log("request",request);
  //Note : Please reload to get the proper response
  console.log("response-------", response);
  response.end("Welcome to Node js");
});

server.listen(2000, () => {
  console.log("server is listening on port 2000");
});
