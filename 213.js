function arrayMadness(a, b) {
  let sumA = a.reduce((sum, element) => sum + element ** 2, 0);
  let sumB = b.reduce((sum, element) => sum + element ** 3, 0);
  if (sumA > sumB) {
    return true;
  } else {
    return false;
  }
}
