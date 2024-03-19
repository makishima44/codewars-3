function addLength(str) {
  return str.split(" ").map((s) => {
    return s + " " + s.length;
  });
}

console.log(addLength("you will win"));
