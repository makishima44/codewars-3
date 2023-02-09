function contamination(text, char) {
  if (text.length <= 0 || char.length <= 0) {
    return "";
  } else {
    return char.repeat(text.length);
  }
}
