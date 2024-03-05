const express = require("express");
const app = express();

const indexRouter = require("./routes");
const userRouter = require("./routes/user");

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
