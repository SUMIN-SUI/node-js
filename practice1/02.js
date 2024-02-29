/*
2. process 객체의 argv 속성을 이용하여 다음과 같은 결과를 출력하세요.
* 파라미터로 본인의 이름, 생일 추가
* 파라미터 개수 : argv.length
* 배열의 각 아이템 값 및 인덱스 : forEach() 이용
argv 속성의 파라미터 수 : 4
0 : /usr/local/bin/node
1 : /Users/sophia/Desktop/prac02.js
2 : sooa
3 : 0820
*/

console.log("argv 속성의 파라미터 수 : %d", process.argv.length);

process.argv.forEach((item, index) => {
  console.log(`${index} : ${item}`);
});
