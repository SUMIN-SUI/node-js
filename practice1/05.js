/*
5. 다음 조건에 맞는 프로그램을 작성하세요.
* 모듈을 이용하여 온도의 평균을 구하는 함수를 만드세요.
* 평균을 구할 때는 배열을 이용하세요.
* 온도 : 15.1, 15.4, 16.1, 17.5, 19.2
* 실행 결과
평균 온도는 16.66입니다.
 */

let temAvg = require("./05_module.js");

const tems = [15.1, 15.4, 16.1, 17.5, 19.2];

temAvg.temAvg(tems);