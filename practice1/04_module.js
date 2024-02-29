function bigOne(num1, num2) {
  if (num1 < num2) {
    return console.log("큰 수는 %d 입니다.", num2);
  } else {
    return console.log("큰 수는 %d 입니다.", num1);
  }

  // return n1 >= n2 ? n1 : n2;
}

module.exports = { bigOne };
