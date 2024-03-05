const { log } = require("console");
const fs = require("fs");

// const text = fs.readFileSync("textfile.txt", "utf8");
// console.log(text);

// fs.readFile("textfile.txt", "utf8", function (error, data) {
//   console.log(data);
// });

// fs.readFile("./package.json", "utf8", function (err, data) {
//   console.log(data);
// });

// console.log("폴더 안의 package.json 파일을 읽도록 요청했습니다.");

// let data = "Hello World!";

// fs.writeFile("TextFileWrite.txt", data, "utf8", function (error) {
//   console.log("WRITE FILE ASYNC COMPLETE");
// });

// fs.writeFileSync("TextFileWriteSync.txt", data, "utf8");
// console.log("WRITE FILE SYNC COMPLETE");

// try {
//   const data = fs.readFileSync("testfile.txt", "utf8");
//   console.log(data);
// } catch (e) {
//   console.log(e);
// }

// try {
//   fs.writeFileSync("textfile.txt", "HelloWorld", "utf8");
//   console.log("file");
// } catch (e) {
//   console.log(e);
// }

fs.readFile("textfile.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

fs.writeFile("textfile.txt", "Hello World!", "utf8", function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("File write complete");
  }
});
