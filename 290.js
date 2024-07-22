var Ghost = function () {
  let colorArr = ["white", "yellow", "purple", "red"];
  this.color = colorArr[Math.floor(Math.random() * colorArr.length)];
};
