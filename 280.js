function isVow(a) {
  return a.map((e) => {
    if (typeof e === "number") {
      const char = String.fromCharCode(e);
      if ("aeiou".includes(char)) {
        return char;
      }
    }
    if (typeof e === "string" && "aeiou".includes(e)) {
      return e.charCodeAt(0);
    }
    return e;
  });
}
