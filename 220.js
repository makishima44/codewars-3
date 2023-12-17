function htmlspecialchars(formData) {
  let answer = "";
  for (let i = 0; i < formData.length; i++) {
    if (formData[i] === "<") {
      answer += "&lt;";
    } else if (formData[i] === ">") {
      answer += "&gt;";
    } else if (formData[i] === '"') {
      answer += "&quot;";
    } else if (formData[i] === "&") {
      answer += "&amp;";
    } else {
      answer += formData[i];
    }
  }
  return answer;
}
