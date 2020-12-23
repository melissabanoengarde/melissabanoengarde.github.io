// What makes the images slant per frames throughout the user's scroll

const section = document.querySelector("section");
let currentPixel = window.pageYOffset;

const loop = function() {
  let newPixel = window.pageYOffset;
  let diff = newPixel - currentPixel;
  let speed = diff * 1.5; //speed of slant

  section.style.transform = "skewY("+speed+"deg)";

  currentPixel = newPixel;

  requestAnimationFrame(loop);
}

// running the slanting loop per frame
loop();
