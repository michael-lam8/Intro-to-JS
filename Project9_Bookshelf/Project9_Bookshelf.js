// Michael Lam
// June 17, 2018
// Project 9: Bookshelf - A rather accurate description of my bookshelf.

// Declaring variables
var recommendation, starImg, book = [3]

// Inital setup
function setup() {
  createCanvas(400, 400);
  background(245, 185, 108);
  // Loading image from Khan Academy GitHub repository
  // Source: https://github.com/Khan/live-editor/tree/master/images
  starImg = loadImage("https://raw.githubusercontent.com/Khan/live-editor/master/images/cute/Star.png");
  // Creating objects
  book[0] = new Book("The Giver", "Lois Lowry", 4, color(214), true);
  book[1] = new Book("I Don't Read", "Me", 1, color(173, 221, 255), false);
  book[2] = new Book("Nature of Code", "Daniel Shiffman", 5, color(255, 82, 169), true);
}

// Draws bookshelf
function draw() {
  // Draws shelves
  for (var i = 120; i < height; i += 130) {
    fill(173, 117, 33);
    rect(0, i, width, 10);
  }
  // Draws books
  for (var i = 0; i < book.length; i++) {
    fill(book[i].colour);
    rect(i * 110 + 10, 20, 90, 100);
    fill(0, 0, 0);
    text(book[i].title, i * 110 + 15, 30, 100, 100);
    text(book[i].author, i * 110 + 15, 45, 70, 100);
    if (book[i].recommendation === true) {
      text("Excellent read!", i * 110 + 15, 97);
    } else {
      text("Don't bother.", i * 110 + 15, 97);
    }
    for (var j = 0; j < book[i].stars; j++) {
      image(starImg, i * 110 + 12 + j * 15, 90, 20, 30);
    }
  }
}