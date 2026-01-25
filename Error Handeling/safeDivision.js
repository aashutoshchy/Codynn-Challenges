function safeDivide(a, b) {
  try {
    if (b == 0) {
      throw "Cannot divide by zero";
    }
    div = a / b;
    console.log(div);
  } catch (err) {
    console.log(err);
  }
}
