function power(x, y) {
  let result = 1;
  for (let i = 1; i <= y; i++) {
    result *= x;
  }
  return result;
}
