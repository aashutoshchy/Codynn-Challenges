function parseJSONSafe(jsonStr) {
  try {
    let res = JSON.parse(jsonStr);
    console.log(res);
  } catch (err) {
    console.log("Invalid JSON");
  }
}
