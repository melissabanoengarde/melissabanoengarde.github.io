"use strict";

// VARIABLES
// Background colour
let bgColour = '#16161A';

// Stroke colour
let colour = {
  r: 116,
  g: 201,
  b: 144
};

// Stroke weight
let strkW = 0.5;

// Rotation speeds
let rotSpeed1 = 0.005;
let rotSpeed2 = 0.0005;

// Sphere's radius
let radius = 300;

// Logo's variable
let logo;

// Preloading logo png
function preload() {
  logo = loadImage('assets/images/GA-logo_(colourized).png');
}

// Enabling 3D canvas
function setup() {
  let canvas = createCanvas(900, 900, WEBGL);

  canvas.parent('sketch-holder');
}

// Drawing our globe and logo
function draw() {
  background(bgColour);

  // Globe properties
  push();
  // Makes the globe rotate on the y-axis
  rotateY(frameCount * rotSpeed1);
  rotateY(mouseX * rotSpeed2);

  // Sets the globe 20px upwards from its default position
  translate(0, -15, 0);

  // Display properties
  noFill();
  stroke(colour.r, colour.g, colour.b);
  strokeWeight(strkW);

  // Sphere with a 300px radius
  sphere(radius);

  pop();

  // Logo properties
  push();
  imageMode(CENTER);
  image(logo,0,-20);
  logo.resize(910,0);
  pop();
}
