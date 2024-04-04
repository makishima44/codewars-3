function sayHello(name, city, state) {
  return (
    "Hello, " + name.join(" ") + "! Welcome to " + city + ", " + state + "!"
  );
}

console.log(
  sayHello(["Franklin", "Delano", "Roosevelt"], "Chicago", "Illinois")
);
