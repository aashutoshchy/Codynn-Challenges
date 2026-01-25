function executeSafe(fn) {
  try {
    console.log(fn());
  } catch (err) {
    console.log("Error occurred");
  }
}
