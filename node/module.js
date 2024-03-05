function abs(number) {
  if (0 < number) {
    return number;
  } else {
    return -number;
  }
}

function circleArea(radius) {
  return radius * radius * Math.PI;
}

module.exports = { abs, circleArea };
