function datingRange(age) {
  if (age <= 14) {
    let minAge = Math.floor(age - 0.1 * age);
    let maxAge = Math.floor(age + 0.1 * age);
    return `${minAge}-${maxAge}`;
  }

  let minAge = Math.floor(age / 2 + 7);
  let maxAge = Math.floor((age - 7) * 2);

  return `${minAge}-${maxAge}`;
}
console.log(datingRange(10));
