function converter(mpg) {
  return parseFloat(((mpg * 1.609344) / 4.54609188).toFixed(2));
}
