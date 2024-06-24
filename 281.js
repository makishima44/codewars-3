function calculateTip(amount, rating) {
  let Newrating = rating.toUpperCase();
  let tips = 0;
  switch (Newrating) {
    case "TERRIBLE": {
      tips = 0;
      break;
    }
    case "POOR": {
      tips = amount * (5 / 100);
      break;
    }
    case "GOOD": {
      tips = amount * (10 / 100);
      break;
    }
    case "GREAT": {
      tips = amount * (15 / 100);
      break;
    }
    case "EXCELLENT": {
      tips = amount * (20 / 100);
      break;
    }
    default: {
      return "Rating not recognised";
    }
  }
  return Math.ceil(tips);
}
