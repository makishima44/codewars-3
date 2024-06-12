function mergeArrays(a, b) {
  const mergedUniqueArray = [...new Set([...a, ...b])];

  mergedUniqueArray.sort((x, y) => x - y);

  return mergedUniqueArray;
}
