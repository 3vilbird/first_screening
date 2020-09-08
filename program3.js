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

// CHECK FOR EVEN OR ODD
const check = (x) => {
  //
  if (x % 2 === 0) {
    repeate(1, x - 1, 0);
  } else {
    repeate(1, x, 0);
  }
};

console.log("first test");
check(1);
console.log("second test");
check(2);
console.log("third test");
check(3);
console.log("fourth test");
check(4);
console.log("fifth test");
check(5);
console.log("sixth test");
check(6);
