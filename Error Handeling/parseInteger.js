function parseInteger(str) {
  integer = parseInt(str);
  if (isNaN(integer)) {
    console.log("Invalid input");
  } else {
    console.log(integer);
  }
}
