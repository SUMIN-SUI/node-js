/* 
const os = require("os");

console.log("hostname:", os.hostname());
console.log("type :", os.type());
*/

// const crypto = require("crypto");
// const shaHash = crypto.createHash("sha256");
// shaHash.update("crypto_hash");

// let output = shaHash.digest("hex");

// console.log("crypto_hash:", output);

// const crypto = require("crypto");

// const algorithm = "aes-256-cbc";
// const key = "abcdefghijklmnopqrstuvwxyz123456";
// const iv = "1234567890123456";
// const input = "암호화할 문장";

// const cipher = crypto.createCipheriv(algorithm, key, iv);
// let cipheredOutput = cipher.update(input, "utf8", "base64");
// cipheredOutput += cipher.final("base64");

// const decipher = crypto.createDecipheriv(algorithm, key, iv);
// let decipheredOutput = decipher.update(cipheredOutput, "base64", "utf8");
// decipheredOutput += decipher.final("utf8");

// console.log("원래 문자열 : " + input);
// console.log("암호화 : " + cipheredOutput);
// console.log("암호화 해제 : " + decipheredOutput);

// const myURL = new URL("http://sub.example.com:8080/p/a/t/h?query=string#hash");
// console.log(myURL);

// console.log(myURL.hostname);
// console.log(myURL.port);
// console.log(myURL.pathname);
// console.log(myURL.search);
// console.log(myURL.hash);

const myURL = new URL(
  "https://example.org/?bcode=B4250257160&page=300&category=javascript&category=nodejs"
);

console.log(myURL.searchParams);

console.log(myURL.searchParams.getAll("category"));
console.log(myURL.searchParams.get("page"));
