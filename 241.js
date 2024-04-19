function sumMul(n, m) {
  let str = 0;
  if (n <= 0 || m <= 0) {
    return "INVALID";
  } else {
    for (let i = n; i < m; i += n) {
      str += i;
    }
    return str;
  }
}
