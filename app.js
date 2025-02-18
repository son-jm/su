const http = require("http");
const url = require("url");
const fs = require("fs");
// const qs = require("querystring");

const app = http.createServer(function (request, response) {
  const data = fs.readFileSync("index.html");
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(data);
  }
  if (request.url === "/a") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(fs.writeFileSync("index2.html"));
  }
});
app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
});
