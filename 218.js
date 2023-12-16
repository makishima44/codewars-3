function neutralise(s1, s2) {
  let controlArr = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      controlArr.push(s1[i]);
    } else {
      controlArr.push("0");
    }
  }
  return controlArr.join("");
}
