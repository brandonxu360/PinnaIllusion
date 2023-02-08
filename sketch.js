let images = []; // array to store all images
let totalImages = 10; // number of images to be displayed in a circle
let angleStep;
let imageSize = 25; // size to normalize the images to
let numRings = 5; // number of rings to be displayed

function preload() {
  images[0] = loadImage("assets/blacksquare.png"); // preload first image
  images[1] = loadImage("assets/greysquare.png"); // preload second image

  for (let i = 0; i < images.length; i++) {
    images[i].resize(imageSize, imageSize); // normalize the size of each image
  }
}

function setup() {
  createCanvas(600, 600);
  angleStep = 360 / totalImages; // calculate the angle step between each image
}

function draw() {
  background(255);
  translate(width / 2, height / 2); // move the origin to the center of the canvas

  for (let r = 0; r < numRings; r++) {
    let radius = 70 + r * 50; // increase the radius for each ring
    let ringImages = totalImages + r * 9; // increase the number of images in each ring
    let tiltAngle = (r % 2 === 0) ? 15 : -15; // calculate the tilt angle based on the ring number

    for (let i = 0; i < ringImages; i++) {
      let angle = i * 360 / ringImages; // calculate the current angle
      let x = cos(radians(angle)) * radius; // calculate the x position using cosine
      let y = sin(radians(angle)) * radius; // calculate the y position using sine

      push(); // save current state
      translate(x, y); // move to the calculated position
      rotate(radians(tiltAngle)); // rotate the image by the tilt angle
      image(images[i % 2], -imageSize / 2, -imageSize / 2, imageSize, imageSize); // display one of the two images, alternating between them
      pop(); // restore previous state
    }
  }
}
