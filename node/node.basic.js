const http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Hellow World...!<h1>");
  })
  .listen(3000, function () {
    console.log("Server running at http://127.0.0.1:3000");
  });

console.log("이름 : %s", "정수아");
console.log("생년월일 : %d월 %d일", 8, 20);
console.log("사는곳 : %s", "서울");
console.log("취미 : %s  %s", "피아노", "자전거", "요리");

console.time("alpha");

let output = 1;

for (let i = 1; i <= 10; i++) {
  output *= i;
}
console.log("Result :", output);
console.timeEnd("alpha");

console.log("filename", __filename);
console.log("dirname", __dirname);

process.argv.forEach(function (item, index) {
  console.log(`${index} : ${typeof item} : ${item}`);
  if (item == "--exit") {
    let exitTime = Number(process.argv[index + 1]);
    setTimeout(function () {
      process.exit();
    }, exitTime);
  }
});

console.log(`-process.env : `, process.env);
console.log(`-process.version : `, process.version);
