function safeEvaluate(expr) {
  let exp = expr.split(" ");
  let firstExp = exp[0];
  let secExp = exp[2];
  let oper = exp[1];

  const validOperators = ["+", "-", "*", "/"];

  if (!firstExp || !secExp || !oper) {
    console.log("Invalid expression");
    return;
  }

  if (isNaN(firstExp) || isNaN(secExp)) {
    console.log("Invalid number");
  } else if (!validOperators.includes(oper)) {
    console.log("Unknown operator");
  } else if (secExp == 0) {
    console.log("Division by zero");
  } else {
    console.log(eval(expr));
  }
}
