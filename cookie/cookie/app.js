const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.get("/getCookie", function (request, response) {
  response.send(request.cookies);
});

app.get("/setCookie", function (request, response) {
  response.cookie("string", "cookie");
  response.cookie("json", {
    name: "cookie",
    property: "delicious",
  });
  response.redirect("/getCookie");
});

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
