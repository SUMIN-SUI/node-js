const express = require("express");

const router = express.Router();

router.get("/", function (request, response) {
  response.send("<h1>User Page</h1>");
});

module.exports = router;
