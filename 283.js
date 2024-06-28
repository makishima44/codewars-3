var Ball = function (ballType) {
  this.ballType = ballType ? ballType : "regular";
};

let x = new Ball("regular");
console.log(x.ballType);
