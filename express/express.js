// const express = require("express");

// const app = express();

// app.set("port", 3000);

// app.listen(app.get("port"), function () {
//   console.log("Express 서버가 실행 중 입니다. : " + app.get("port"));
// });

// const express = require("express");

// const app = express();

// app.use(function (request, response, next) {
//   console.log("미들웨어에서 요청을 처리함");
//   response.send("<h1>Express 서버에서 응답한 결과입니다.</h1>");
// });
// app.listen(3000, function () {
//   console.log("Server Running at http://127.0.0.1:3000 ");
// });

// const express = require("express");
// const app = express();

// app.use(function (request, response, next) {
//   console.log("첫 번째 미들웨어");
//   next();
// });

// app.use(function (request, response, next) {
//   console.log("두 번째 미들웨어");
//   next();
// });

// app.use(function (request, response, next) {
//   console.log("세 번째 미들웨어");
// });

// app.listen(3000, function () {
//   console.log("Server Running at http://127.0.0.1:3000 ");
// });

// const express = require("express");
// const app = express();

// app.use(function (request, response, next) {
//   request.number = 2023;
//   response.number = 2024;
//   next();
// });

// app.use(function (request, response, next) {
//   response.send("<h1>" + request.number + ":" + response.number + "</h1>");
// });

// app.listen(3000, function () {
//   console.log("Server Running at http://127.0.0.1:3000 ");
// });

//
// const express = require("express");
// const fs = require("fs");

// const app = express();

// app.use(function (request, response) {
//   fs.readFile("index.html", "utf-8", function (error, data) {
//     response.send(data.toString());
//   });
// });

// app.listen(3000, function () {
//   console.log("Server Running at http://127.0.0.1:3000 ");
// });

//
// const express = require("express");
// const app = express();

// app.use(function (request, response) {
//   const output = [];
//   for (let i = 0; i < 3; i++) {
//     output.push({ count: i, name: "name-" + i });
//   }
//   response.send(output);
// });

// app.listen(3000, function () {
//   console.log("Server Running at http://127.0.0.1:3000 ");
// });

//
// const express = require("express");
// const app = express();
// app.use(function (request, response) {
//   response.status(404).send("<h1>ERROR</h1>");
// });

// app.listen(3000, function () {
//   console.log("Server Running at http://127.0.0.1:3000 ");
// });

//
// const express = require("express");
// const app = express();

// app.use(function (request, response) {
//   response.redirect("http://www.naver.com");
// });

// app.listen(3000, function () {
//   console.log("Server Running at http://127.0.0.1:3000");
// });

//
// const express = require("express");
// const app = express();
// app.use(function (request, response) {
//   const agent = request.header("User-Agent");
//   response.send("<p>User - Agent" + ":" + agent + "</p>");
// });

// app.listen(3000, function () {
//   console.log("Server Running at http://127.0.0.1:3000");
// });

//
const express = require("express");
const app = express();
app.use(function (request, response) {
  let name = request.query.name;
  let region = request.query.region;
  response.send("<h1>" + name + "-" + region + "</h1>");
});

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
