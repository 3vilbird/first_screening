const calculate = (a, b, operator) => {
  //
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      if (a > b) {
        console.log(a - b);
      } else {
        console.log(b - a);
      }
      break;

    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;

    default:
      console.log("Please do check the input!");
      break;
  }
};

calculate(2, 2, "+");
calculate(2, 2, "-");
calculate(2, 2, "*");
calculate(2, 2, "/");
