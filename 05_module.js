function temAvg(array) {
  // let sum = 0;
  // array.forEach((item) => {
  //   sum += item;
  // });
  // let avg = sum / array.length;

  let sum = array.reduce((accumulator, current) => {
    return accumulator + current;
  });

  let avg = sum / array.length;

  return console.log("평균 온도는 %d입니다.", avg);
}

module.exports = { temAvg };
