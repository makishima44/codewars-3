function whoIsPaying(name) {
  let answer = [];
  if (name.length <= 2) {
    answer.push(name);
  } else {
    answer.push(name);
    answer.push(name.slice(0, 2));
  }
  return answer;
}
