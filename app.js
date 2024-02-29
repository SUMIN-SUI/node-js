const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (request, response) {
  response.redirect("./login.html");
});

app.post("/login.html", function (request, response) {
  const id = "abc";
  const password = "123";
  let result = "";

  let paramId = request.body.id;
  let paramPw = request.body.password;

  if (paramId === id && paramPw === password) {
    result = "로그인이 되었습니다.";
  } else {
    result = "아이디, 비번 다시 확인하세요.";
  }

  // response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  // response.write("<h1>로그인 페이지에서 응답한 결과</h1>");
  // response.write("<hr>");
  // response.write("<p>ID : " + paramId + "</p>");
  // response.write("<p>PW : " + paramPw + "</p>");
  response.send(`<h1>${result}</h1>`);
});

app.get("/join.html", function (request, response) {
  response.redirect("./join.html");
});

app.post("/join.html", function (request, response) {
  let paramName = request.body.name;
  let paramAddress = request.body.address;
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.write("<h1>회원가입 페이지에서 응답한 결과</h1>");
  response.write("<hr>");
  response.write("<p>NAME : " + paramName + "</p>");
  response.write("<p>ADDRESS : " + paramAddress + "</p>");
  response.send();
});

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
