function noBoringZeros(n) {
  let x = String(n).replace(/0+$/g, "");
  return Number(x);
}
