// Michael Lam
// June 6, 2018
// Displays an image of pizza and orange juice

// Initial setup
function setup() {
  createCanvas(400, 400);
}

// Draws image
function draw() {
  // Wooden table
  background(186, 145, 20);
  // Plate
  stroke(0);
  fill(255);
  ellipse(200, 200, 350, 350);
  ellipse(200, 200, 300, 300);
  // Orange juice
  fill(153, 204, 255);
  ellipse(35, 0, 100, 100);
  fill(255, 201, 25);
  ellipse(35, 0, 95, 95);
  // Pizza crust
  fill(247, 197, 79);
  triangle(65, 100, 280, 50, 250, 350);
  // Cheese
  noStroke();
  fill(255, 230, 0);
  triangle(78, 115, 276, 70, 250, 350);
  // Pepperoni
  fill(217, 24, 24);
  ellipse(145, 145, 45, 45);
  ellipse(230, 160, 45, 45);
  ellipse(215, 245, 45, 45);
}