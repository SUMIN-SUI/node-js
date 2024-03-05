const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
  })
);

app.get("/", function (request, response) {
  request.session.now = new Date().toString();
  response.send(request.session);
});

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
