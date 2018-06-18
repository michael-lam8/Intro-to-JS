// Michael Lam
// June 17, 2018
// Project 7: Build-a-House - A stunning house that makes all homeowners desire to renovate and new buyers bid high amounts. The Property Brothers are jealous. Kortney and Dave can't compare.

// Declaring variables
var grass, brick, tree;

// Inital setup
function setup() {
  createCanvas(400, 400);
  background(219, 255, 255);
  // Loading images from Khan Academy GitHub repository
  // Source: https://github.com/Khan/live-editor/tree/master/images
  grass = loadImage("https://raw.githubusercontent.com/Khan/live-editor/master/images/cute/GrassBlock.png");
  brick = loadImage("https://raw.githubusercontent.com/Khan/live-editor/master/images/cute/BrownBlock.png");
  tree = loadImage("https://raw.githubusercontent.com/Khan/live-editor/master/images/cute/TreeTall.png");
}

// Draws house and scenery
function draw() {
  // Grass
  for (var x = 0; x < width; x += 47) {
    image(grass, x, height-80, 47, 80);
  }
  // Roof
  fill(174, 180, 214);
  triangle(200, 28, 350, 150, 50, 150);
  // House
  rect(60, 149, 281, 208);
  for (var i = 61; i < 340; i += 40) {
    for (var j = 130; j < 300; j += 40) {
      image(brick, i, j, 40, 68);
    }
  }
  // Door
  fill(120, 80, 19);
  rect(180, 280, 40, 77);
  fill(0);
  ellipse(210, 320, 5, 5);
  // Windows
  fill(158, 250, 255);
  for (var i = 80; i <= 120; i += 40) {
    for (var j = 180; j <= 220; j += 40) {
      rect(i, j, 40, 40);
      rect(i+160, j, 40, 40);
    }
  }
  // Tree
  image(tree, 15, 215, 101, 171);
}