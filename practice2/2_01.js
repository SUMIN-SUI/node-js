const os = require("os");

console.log("시스템의 hostname : %s", os.hostname());
console.log("시스템의 총 메모리 : %d", os.totalmem());
console.log("시스템의 사용 가능 메모리 : %d", os.freemem());
console.log("시스템의 CPU 정보");
console.log(os.cpus());
console.log("시스템의 네트워크 인터페이스 정보");
console.log(os.networkInterfaces());
