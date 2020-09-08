const find_multiple = (what, where) => {
  const out = {};
  for (const i of what) {
    out[i] = 0;
    for (const s of where) {
      if (s % i === 0) {
        console.log("==>", out[i]);
        out[i] = out[i] + 1;
      }
    }
  }
  0;
  console.log(out);
};

find_multiple(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]
);
