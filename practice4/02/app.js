const express = require("express");
const session = require("express-session");
const app = express();

const date = new Date();
date.setDate(date.getDate() + 13);

app.use(
  session({
    name: "sumin",
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: date,
    },
  })
);

app.get("/", function (request, response) {
  response.send(request.session);
});

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
