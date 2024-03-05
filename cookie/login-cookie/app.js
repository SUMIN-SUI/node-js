const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", function (request, response) {
  if (request.cookies.auth) {
    response.send("<h1>Login Success</h1>");
  } else {
    response.redirect("/login");
  }
});

app.get("/login.html", function (request, response) {
  fs.readFile("login.html", "utf8", function (error, data) {
    if (error) {
      console.log("adadd");
      console.log(__dirname);
      console.log(error);
    } else {
      response.send(data);
    }
  });
});

app.post("/login", function (request, response) {
  const id = request.body.id;
  const password = request.body.pw;
  if (id == "sui" && password == "1234") {
    response.cookie("auth", true);
    response.redirect("/");
  } else {
    response.redirect("/login");
  }
});

app.get("/deleteCookie", function (request, response) {
  response.clearCookie("auth");
  response.send("<h1>쿠키 삭제 완료</h1>");
});

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
