function getSize(width, height, depth) {
  let arr = [];
  arr.push(width * height * 2 + height * depth * 2 + depth * width * 2);
  arr.push(width * height * depth);
  return arr;
}
