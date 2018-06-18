// Michael Lam
// June 17, 2018
// Project 6: Magic 8-Ball - Generates an answer to a yes-no question

// Declaring variables
var answer;

// Initial setup
function setup() {
  createCanvas(400, 420);
  answer = floor(random(1, 5)); // Generates random number
  // Sets text properties
  textSize(18);
  textAlign(CENTER, CENTER);
  // Draws ball
  fill(0, 0, 0);
  ellipse(200, 200, 375, 375);
  // Draws button that regenerates response
  fill(38);
  rect(0, 400, width, height);
  fill(255);
  text("Ask again", width/2, 410);
}

// Draws response based on value of answer
function draw() {
  // Draws triangle and changes colour based on answer
  if (answer === 1) {
    fill(3, 128, 19);
  } else if (answer === 2) {
    fill(181, 154, 0);
  } else if (answer === 3) {
    fill(252, 70, 70);
  } else if (answer === 4) {
    fill(181, 154, 0);
  }
  triangle(200, 104, 280, 280, 120, 280);
  // Displays response
  fill(255, 255, 255);
  if (answer === 1) {
    text("It is certain.", 202, 210);
  } else if (answer === 2) {
    text("Ask", 200, 200);
    text("again later.", 200, 220);
  } else if (answer === 3) {
    text("Very", 200, 200);
    text("doubtful.", 200, 220);
  } else if (answer === 4) {
    text("Better not", 200, 200);
    text("tell you now.", 200, 220);
  }
}

// Regenerates random number when "Ask again" is clicked
function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 400 && mouseY < height) {
    answer = floor(random(1, 5));
  }
}