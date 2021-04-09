var colors = [
  "white",
  "black",
  "yellow",
  "blue",
  "beige",
  "grey",
  "gold",
  "orange",
  "brown",
  "silver",
  "pink",
  "purple",
  "green",
  "red",
  "violet",
];

function randomWord() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export { randomWord };
