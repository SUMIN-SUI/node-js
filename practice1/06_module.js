function bigNum(times) {
  let nums = [];
  let bigone = 0;

  for (let i = 0; i < times; i++) {
    let num = Math.floor(Math.random() * 100 + 1);
    nums.push(num);
    console.log("%d", num);

    bigone = bigone >= nums[i] ? bigone : nums[i];
  }

  // nums.forEach((item) => {
  //   if (bigone < item) {
  //     bigone = item;
  //   }
  // });

  return console.log("제일 큰 수는 %d입니다.", bigone);
}

module.exports = { bigNum };
