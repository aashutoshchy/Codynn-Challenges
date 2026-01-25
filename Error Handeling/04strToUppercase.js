function toUppercase(str) {
  try {
    if (typeof str != "string") {
      throw "Invalid input";
    } else {
      console.log(str.toUpperCase());
    }
  } catch (err) {
    console.log(err);
  }
}
