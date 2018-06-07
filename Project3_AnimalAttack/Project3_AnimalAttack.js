// Michael Lam
// June 6, 2018
// Displays an animation of a (very nice rubber) duck flying away

// Declaring variables
var bodyX = 200, bodyY = 220, bodySize = 118, faceSize = bodySize / 1.5, eyeSize = bodySize - 103;

// Initial setup
function setup() {
  createCanvas(400, 400);
}

// Draws animation
function draw() {
  background(207, 254, 255); // Sky
  fill(240, 209, 36);
  ellipse(bodyX, bodyY, bodySize, bodySize); // Body
  ellipse(bodyX, bodyY-70, faceSize, faceSize); // Face
  triangle(bodyX - 30, bodyY-25, bodyX-40, bodyY+15, bodyX-110, bodyY-60); // Left wing
  triangle(bodyX + 30, bodyY-25, bodyX+40, bodyY+15, bodyX+110, bodyY-60); // Right wing
  fill(255);
  ellipse(bodyX - 15, bodyY-75, eyeSize, eyeSize); // Left eye
  ellipse(bodyX + 15, bodyY-75, eyeSize, eyeSize); // Right eye
  fill(0);
  ellipse(bodyX-13, bodyY-73, 8/15 * eyeSize, 8/15 * eyeSize); // Left iris
  ellipse(bodyX+13, bodyY-73, 8/15 * eyeSize, 8/15 * eyeSize); // Right iris
  fill(255, 136, 0);
  triangle(bodyX-10, bodyY-60, bodyX+10, bodyY-60, bodyX, bodyY-45); // Beak
  fill(86, 169, 201);
  rect(0, 250, width, height); // Water
  bodyX++;
  bodyY -= 2;
}