function billboard(name, price = 30) {
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (price) {
      count += price;
    } else {
      count += 30;
    }
  }
  return count;
}
