function longest(s1, s2) {
  let uniqSet = new Set(s1 + s2);
  return Array.from(uniqSet).sort().join("");
}
