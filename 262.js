function splitAndMerge(string, separator) {
  const words = string.split(" ");
  const mergedWords = words.map((word) => word.split("").join(separator));
  return mergedWords.join(" ");
}
