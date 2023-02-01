function sumArray(array) {
  if (array && array.length > 1) {
    let newArray = array.sort((a, b) => a - b).slice(1, -1);
    return newArray.reduce((acc, cur) => acc + cur, 0);
  } else {
    return 0;
  }
}
