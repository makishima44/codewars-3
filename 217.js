function flickSwitch(arr) {
  let newArray = [];
  let checkFlick = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "flick") {
      newArray.push(checkFlick);
    } else {
      checkFlick = !checkFlick;
      newArray.push(checkFlick);
    }
  }

  return newArray;
}
