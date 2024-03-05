const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "secret key",
  })
);

app.get("/", function (request, response) {
  if (request.session.visit) {
    request.session.visit++;
    response.send(`<h1>${request.session.visit}번째 방문입니다!</h1>`);
  } else {
    request.session.visit = 1;
    response.send(`<h1>${request.session.visit}번째 방문입니다!</h1>`);
  }
});

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
