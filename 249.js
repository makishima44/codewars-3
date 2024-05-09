function cookie(x) {
  let result = "Who ate the last cookie? It was ";
  if (typeof x === "string") {
    result += "Zach!";
  } else if (typeof x === "number") {
    result += "Monica!";
  } else {
    result += "the dog!";
  }
  return result;
}
