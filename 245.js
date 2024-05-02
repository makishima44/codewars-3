function validateUsr(username) {
  if (username.length < 4 || username.length > 16) {
    return false;
  }
  for (let i = 0; i < username.length; i++) {
    const char = username[i];
    if (
      !(
        (char >= "a" && char <= "z") ||
        (char >= "0" && char <= "9") ||
        char === "_"
      )
    ) {
      return false;
    }
  }
  return true;
}

console.log(validateUsr("Hass"));
