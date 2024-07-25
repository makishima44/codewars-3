function bigToSmall(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr = resultArr.concat(arr[i]);
  }
  return resultArr.sort((a, b) => b - a).join(">");
}
