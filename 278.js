function isValid(formula) {
  const hasMaterial = (num) => formula.includes(num);

  if (hasMaterial(1) && hasMaterial(2)) return false; // Правило 1
  if (hasMaterial(3) && hasMaterial(4)) return false; // Правило 2
  if (hasMaterial(5) !== hasMaterial(6)) return false; // Правило 3
  if (!hasMaterial(7) && !hasMaterial(8)) return false; // Правило 4

  return true;
}
