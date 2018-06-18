// Michael Lam
// June 6, 2018
// Project 2: Shooting Star: Displays an animation of shooting stars

// Declaring variables
var xPos = 45, xPos2 = 350, yPos = 355; // Integers
var runOnce = false; // Booleans
var starX = new Array(49), starY = new Array(49); // Arrays

// Initial setup
function setup() {
  createCanvas(400, 400);
}

// Loops code and draws animation
function draw() {
  if (runOnce === false) { // Generates 50 random coordinates once for stars in background
    for (var i = 0; i < starX.length; i++) {
      starX[i] = Math.floor((Math.random() * 401));
      starY[i] = Math.floor((Math.random() * 401));
    }
    runOnce = true;
  } else { // Animates shooting stars
    background(29, 40, 115);
    fill(255, 242, 0);
    if (xPos < 200) {
      ellipse(xPos, yPos, 10, 10);
      ellipse(xPos2, yPos, 10, 10);
    } else { // Changes stars into a square when xPos passes 200px
      rect(xPos, yPos, 10, 10);
      rect(xPos2, yPos, 10, 10);
    }
    xPos += 3;
    xPos2 -= 3;
    yPos -= 2;
    for (var i = 0; i < starX.length; i++) {
      fill(255);
      ellipse(starX[i], starY[i], 3, 3);
    }
  }
}