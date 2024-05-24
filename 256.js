function multiTable(number) {
  let x = "";
  for (let i = 1; i <= 10; i++) {
    x += `${i} * ${number} = ${i * number}\n`;
  }
  return x.trim();
}
