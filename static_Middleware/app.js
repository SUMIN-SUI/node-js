const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(function (request, response) {
  response.send('<img src="/img/imgg.jpeg" width="100%"/>');
});
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
