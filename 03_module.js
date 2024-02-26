function plus(num1, num2) {
  return console.log(" %d + %d = %d ", num1, num2, num1 + num2);
}

function times(num1, num2) {
  return console.log(" %d * %d = %d ", num1, num2, num1 * num2);
}

module.exports = { plus, times };
