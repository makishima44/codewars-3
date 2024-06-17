function nearestSq(n) {
  const root = Math.sqrt(n);
  const lower = Math.floor(root) ** 2;
  const upper = (Math.floor(root) + 1) ** 2;
  return n - lower < upper - n ? lower : upper;
}
