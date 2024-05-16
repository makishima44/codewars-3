function isIsogram(str) {
  let lowerStr = str.toLowerCase();
  let setStr = new Set(lowerStr);
  return setStr.size === lowerStr.length;
}
