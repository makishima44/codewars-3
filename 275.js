function elevator(left, right, call) {
  const distanceLeft = Math.abs(left - call);
  const distanceRight = Math.abs(right - call);
  if (distanceLeft < distanceRight) {
    return "left";
  } else {
    return "right";
  }
}
