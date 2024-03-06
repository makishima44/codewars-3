let a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
let b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

const cannonsReady = (gunners) => {
  let allAye = Object.values(gunners).every((value) => value === "aye");
  if (allAye) {
    return "Fire!";
  } else {
    return "Shiver me timbers!";
  }
};

console.log(cannonsReady(b));
