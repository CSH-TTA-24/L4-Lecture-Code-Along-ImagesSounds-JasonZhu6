let xPos = 25;
let direction = 1;
let charmanderImg; 
let charmanderSound; 

function preload() {
  charmanderImg = loadImage("images/charmander.png")
  charmanderSound = loadSound("sounds/charmander.mp3")
}

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0);

  imageMode(CENTER)
  image(charmanderImg, xPos, 250, 50, 50)
  
  xPos += 3 * direction;
  if (xPos > 475 || xPos < 25) {
    direction *= -1;
    charmanderSound.play()
  }
}
