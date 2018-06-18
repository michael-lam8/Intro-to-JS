// Michael Lam
// June 17, 2018
// Project 8: Make It Rain - Animation of raindrops, with the ability to add more raindrops by mouse click

// Declaring variables
var xPositions = [], yPositions = [];

function setup() {
  createCanvas(400, 400);
  // Initializes random x coordinates for raindrops
  for (var i = 0; i < 4; i++) {
    var j = random(400);
    xPositions.push(j);
    yPositions.push(0);
  }
}

// Runs animation continuously
function draw() {
  background(204, 247, 255);
  // Draws and animates rain falling down screen
  for (var i = 0; i < xPositions.length; i++) {
    noStroke();
    fill(0, 200, 255);
    ellipse(xPositions[i], yPositions[i], 10, 10);
    yPositions[i] += 5;
    // Resets y coordinate when raindrops reach bottom of screen
    if (yPositions[i] === height) {
      yPositions[i] = 0;
    }
  }
}

// Adds raindrops based on mouseX coordinates
function mouseClicked() {
  xPositions.push(mouseX);
  yPositions.push(0);
};