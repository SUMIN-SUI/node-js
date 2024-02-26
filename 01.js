/*
1. 1부터 1000까지 숫자를 더한 결과를 출력하고, 실행 시간을 측정하세요.
* for문을 이용
duration_sum: 0.818ms
1부터 1000까지 더한 값 : 500500
*/

console.time("duration_sum");

let sum = 0;

for (let i = 1; i <= 1000; i++) {
  sum += i;
}

console.log("1부터 1000까지 더한 값 : %d", sum);

console.timeEnd("duration_sum");
