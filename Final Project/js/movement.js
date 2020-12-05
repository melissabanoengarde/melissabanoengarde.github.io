// js file allowing 3D movement

document.addEventListener("mousemove", function(event) {

  const x = event.pageX
  const y = event.pageY

  const target = document.querySelector(".logo")
  const targetCoords = target.getBoundingClientRect() //top, left, bottom. and right

  const targetX = targetCoords.left + (target.offsetWidth / 2)
  const targetY = targetCoords.top + (target.offetHeight / 2)

  const angleX = (targetY - y) / 25
  const angleY = (targetX - x) / -25

  // turning target
  target.style.transform = "rotateX(" + angleX + " deg) rotateY( "+ angleY +" deg)"

})
