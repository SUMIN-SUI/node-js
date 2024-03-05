// process.on("exit", function () {
//   console.log("안녕히 가세요");
// });

// process.on("uncaughtException", function (error) {
//   console.log("예외가 발생했습니다");
// });

// let count = 0;

// function test() {
//   count = count + 1;
//   if (count > 3) {
//     return;
//   }
//   setTimeout(test, 2000);
//   error.error.error();
// }

// setTimeout(test, 2000);

//
// process.setMaxListeners(15);

// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});

//
// process.on("uncaughtException", function (error) {
//   console.log("예외발생");
//   process.removeListener("uncaughtException", onUncaughtException);
// });

// function test() {
//   setTimeout(test, 2000);
//   error.error.error();
// }

// setTimeout(test, 2000);

//
// process.on("exit", function () {
//   console.log("안녕히 계세요");
// });
// process.emit("exit");
// process.emit("exit");
// process.exit();
// process.emit("exit");
// process.emit("exit");

// console.log("프로그램 실행 중");

//
// const http = require("http");
// const server = http.createServer();
// const port = 3000;
// server.listen(port, function () {
//   console.log("웹서버가 시작되었습니다 : %d", port);
// });

//
const http = require("http");
const server = http.createServer();
const port = 3000;
server.listen(port, function () {
  console.log("웹 서버가 시작되었습니다. : %d", port);
});

function sclose() {
  server.close();
}

setTimeout(sclose, 10000);
