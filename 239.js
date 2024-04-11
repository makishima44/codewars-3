function array(string) {
  let newString = string.split(",");
  if (newString.length <= 2) {
    return null;
  } else {
    return newString
      .filter((el, index) => {
        return index !== 0 && index !== newString.length - 1;
      })
      .join(" ");
  }
}

console.log(array("1,2,3,4,5"));
