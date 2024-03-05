const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use(function (request, response, next) {
  let paramId = request.body.id;
  let paramPw = request.body.password;
  response.send("<h1>ID : " + paramId + "<br>PW : " + paramPw + "</h1>");
});

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
