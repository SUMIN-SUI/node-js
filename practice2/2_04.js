const fs = require("fs");

fs.writeFile("output.txt", "내 이름은 최수민입니다.", "utf8", function (error) {
  console.log("output.txt 파일에 데이터 쓰기 완료");
});

fs.readFile("output.txt", "utf8", function (err, data) {
  console.log(data);
});
