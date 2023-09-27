function animation() {
  // Define the number of squares to create
  const count = 300;
  const squares = document.getElementById("squares");

  var i = 0;
  while (i < count) {
    const square = document.createElement("i");
    const size = 10;

    square.style.top = Math.random() * 100 + "%";
    square.style.left = Math.random() * 100 + "%";
    square.style.height = size + "px";
    square.style.width = size + "px";

    // Generate a random animation duration between 2 and 4 seconds
    const duration = Math.random() * 2;
    square.style.animationDuration = 2 + duration + "s";

    squares.appendChild(square);
    i++;
  }
};

animation();
