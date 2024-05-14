function accum(s) {
  let str = "";
  if (s.length <= 0) {
    return s;
  } else {
    s.split("").map((el, index) => {
      str += el.toUpperCase() + el.repeat(index).toLowerCase() + "-";
    });
    return str.slice(0, -1);
  }
}
