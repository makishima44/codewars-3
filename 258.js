function mango(quantity, price) {
  if (quantity < 3) {
    return quantity * price;
  } else {
    return (quantity - Math.floor(quantity / 3)) * price;
  }
}
