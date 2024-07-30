var hotpo = function (n) {
  let count = 0;
  if (n == 0) return 0; //Optional Handler to n = 0

  while (n !== 1) {
    if (n % 2 === 0) {
      count++;
      n = n / 2;
    } else {
      count++;
      n = 3 * n + 1;
    }
  }
  return count;
};
