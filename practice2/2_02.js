const myURL = new URL(
  "https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty"
);

console.log(myURL.searchParams);
console.log(myURL.searchParams.get("sm"));
