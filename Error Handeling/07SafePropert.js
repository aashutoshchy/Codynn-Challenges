function propAccess(arr, i) {
  checkName = arr[i];
  if (checkName !== undefined) {
    console.log(checkName.name);
  } else {
    console.log("Invalid Access");
  }
}
