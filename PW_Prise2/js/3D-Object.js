// 3D Object
// JavaScript file of the website's "centerpiece"

// Variables
// Edges of canvas to prevent unecessary window scrollbars
let windowEdgeX = -10;
let windowEdgeY = -50;

// Background colour
let bgFill = {
  r: 245,
  g: 243,
  b: 235
};

// Object's rotation speeds
let rotationSpeed1 = 0.003;
let rotationSpeed2 = 0.0007;

// Object's colour
let sphereFill = {
  r: 245,
  g: 243,
  b: 235,
  a: 20
};

// Object's stroke properties
let strokeFill = 100;
let strokeWght = 0.4;

// Object's dimensions
let objectSpecs = {
  r: 300,
  x: 10,
  y: 3
};

// Initiating 3D canvas
function setup() {
  createCanvas(windowWidth + windowEdgeX, windowHeight + windowEdgeY, WEBGL);
}

// Establishing the interactive object
function draw() {
  // Background colour
  background(bgFill.r, bgFill.g, bgFill.b);

  // Rotation and mouse interaction
  rotateY(frameCount * rotationSpeed1);
  rotateY(mouseX * rotationSpeed2);
  rotateZ(frameCount * rotationSpeed1);
  rotateZ(mouseY * rotationSpeed2);

  // 3D object's properties: colour, stroke specs, and dimensions
  fill(sphereFill.r, sphereFill.g, sphereFill.b, sphereFill.a);
  stroke(strokeFill);
  strokeWeight(strokeWght);
  sphere(objectSpecs.r, objectSpecs.x , objectSpecs.y);
}
