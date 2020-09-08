//RECURSIVE CALL
const repeate = (a, x, count) => {
  if (count === x) {
    return 1;
  } else {
    if (a % 2 !== 0) {
      console.log(a);
      count++;
    }
    return repeate(a + 1, x, count);
  }
};
//
console.log("First test case");
repeate(1, 1, 0);
console.log("second test case");

repeate(1, 2, 0);
console.log("Third test case");

repeate(1, 3, 0);
console.log("Fourth test case");

repeate(1, 4, 0);
