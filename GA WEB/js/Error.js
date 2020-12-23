
function showError() {
  let redScreen = document.getElementById("error");
  // let pressed = document.getElementsByClassName("incorrect-btn");

  if(redScreen.className == "") {
    // show red screen
    redScreen.className = "show";
  }
  else {
    redScreen.className = "";
  }
}
