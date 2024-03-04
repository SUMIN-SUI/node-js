const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const date = new Date();
date.setDate(date.getDate() + 30);

app.use(cookieParser());

app.get("/", function (request, response) {
  response.redirect("/study/setUserCookie");
});

app.get("/study/setUserCookie", function (request, response) {
  response.cookie("HELLOCODING", "COOKIE", {
    expires: date,
  });
  response.redirect("/study/showUserCookie");
});

app.get("/study/showUserCookie", function (request, response) {
  response.send(request.cookies);
});

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
