function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] === "wolf") {
        let sheep = queue.length - (i + 1);
        return (
          "Oi! Sheep number " + sheep + "! You are about to be eaten by a wolf!"
        );
      }
    }
  }
}
