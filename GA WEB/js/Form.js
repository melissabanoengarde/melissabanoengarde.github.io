function validation() {
  // alert("working!");

  // Name property
  let name = document.getElementById("name").value;

  // Game property
  let game = document.getElementById("game").value;

  // Text Property
  let text = document.getElementById("text-area").value;

  // Error alert property
  let errorMsg = document.getElementById("error-message");

  // Error text strings
  let nameErrorMsg = `Please enter a pseudonym of at least 3 characters long`;
  let gameErrorMsg = `Please enter your game. Otherwise, type "none".`
  let textErrorMsg = `The length of your submission is too short! Please fill a minimum of 140 characters.`

  // Triggers an error message:
  // Padding is set to 0px in the css stylesheet. Below is
  // triggered when the user has not filled the fields.
  // That is, the padding is increased to 3px and therefor displayed.
  errorMsg.style.padding = "3px";
  // name error
  if(name.length < 4) {
    errorMsg.innerHTML = nameErrorMsg;
    return false;
  }
  // game error
  if(game.length < 1) {
    errorMsg.innerHTML = gameErrorMsg;
    return false;
  }
  // text area error (submission must be longer of equal to 140 characters)
  if(text.length <= 140) {
    errorMsg.innerHTML = textErrorMsg;
    return false;
  }
  alert("Your Submission is Succesfull!")
  return true;
}
