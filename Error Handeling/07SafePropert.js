function propAccess(arr, i) {
  checkName = arr[i];
  if (checkName === undefined) {
    console.log("Invalid Access");
  } else {
    console.log(checkName.name);
  }
}
