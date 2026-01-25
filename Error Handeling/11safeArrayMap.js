function mapSquareSafe(arr) {
  let newArr = [];
  for (let num of arr) {
    if (typeof num == "number") {
      newArr.push(num * num);
    }
  }
  console.log(newArr);
}
