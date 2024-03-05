// const http = require("http");

// const server = http.createServer();

// const port = 3000;

// server.on("request", function (req, res) {
//   console.log("Request On");

//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   res.write(
//     "<DOCTYPE html> <html> <head> <title>응답 페이지 </title> </head> <body> <h1>Node.js로 부터의 응답페이지</h1> </body> </html>"
//   );
//   res.end();
// });

//
// server.listen(port, function () {
//   console.log("웹 서버가 시작되었습니다 : %d", port);
// });

// require("http")
//   .createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     response.end("<h1>Hello World</h1>");
//   })
//   .listen(3000, function () {
//     console.log("Server Running at http://127.0.0.1:3000");
//   });

//
// const { log } = require("console");
// const http = require("http");
// http
//   .createServer(function (request, response) {
//     response.writeHead(302, { Location: "http://www.naver.com" });
//     response.end();
//   })
//   .listen(3000, function () {
//     console.log("Server Running at http://127.0.0.1:3000 ");
//   });

//
const http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(404);
    response.end();
  })
  .listen(3000, function () {
    console.log("Server Running at http://127.0.0.1:3000");
  });
