function drawStairs(n) {
  newStr = "";
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(i - 1);
    newStr += spaces + "I\n";
  }
  return newStr.trim();
}
