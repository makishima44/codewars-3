function openOrSenior(data) {
  let newArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      newArray.push("Senior");
    } else {
      newArray.push("Open");
    }
  }
  return newArray;
}
