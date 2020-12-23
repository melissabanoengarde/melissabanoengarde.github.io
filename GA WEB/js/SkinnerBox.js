// SkinnerBox
// This is the Javascript file that allows the text to change each time the button is clicked

function changeText() {
  // VARIABLES
  // element that will change
  let x = document.getElementById("textDisplay");

  // Paragraphs
  let p1 = "Gamers Anonymous is a platform that aims to provide collective support for those suffering from excessive gaming.";
  let p2 = "It is important to acknowledge that the virtual world is often times a place of comfort, facilitating users to escape from an overwhelming reality. ";
  let p3 = "This section provides a simplified understanding of the universal basics in which developers implement when programming video-games. <br><br> The user is essentially addicted by design.";
  let p4 = "An outstanding percentage has become rather dependent if not addicted to online video games without the purpose of amusement nor entertainment. This dependancy is one of the most prevalent issues affecting populations worldwide—particularly adolescents and young adults.";
  let p5 = "A behavioral approach that has been applied and is familiar to numerous game designs is Burrhus, B.F. Skinner’s Operant Conditioning theory: one’s behaviour is shaped by the consequences of its environment. An important contribution to Behaviourism. ";
  let p6 = "In other words, if the behaviour is rewarded, it is most likely to be repeated. Similarly, if the behaviour is punished, it will be put to a halt. <br><br> This conclusion originates from a series of conducted observations known as the Skinner Box experiment. ";
  let p7 = "This phenomena is known as the reward-system; otherwise defined as positive or negative reinforcements.";
  let p8 = "This concept is heavily applied in the development and design of video games.";
  let p9 = "I guess the main takeaway here is to recognize the intricacies and the play of elements behind a gaming addiction as they are often unapparent at first glance. <br><br> An addiction is frequently orchestrated against the benefit of the user for profit.";
  let p10 = `Gamers Anonymous serves as an outlet for users with gaming addiction to express themselves within a setting that’s understood to be for that sole purpose. <br><br> Since gaming addiction is often times
             heightened by an underlying issue, on this platform, users may find a place to speak anonymously about their reality in contrast to their virtual world. Others may also feel free to submit how they were able to overcome such issues. <br><br> It is important for the user to understand
             that they are not alone.`;

  // Changes paragraph each time the right button is clicked
  if (x.innerHTML === "") {
    // para. 1
    x.innerHTML = p1;
  } else if (x.innerHTML === p1) {
    // para. 2
    x.innerHTML = p2;
  } else if (x.innerHTML === p2) {
    // para. 3
    x.innerHTML = p3;
  } else if (x.innerHTML === p3) {
    // para. 4
    x.innerHTML = p4;
  } else if (x.innerHTML === p4) {
    // para. 5
    x.innerHTML = p5;
  } else if (x.innerHTML === p5) {
    // para. 6
    x.innerHTML = p6;
  } else if (x.innerHTML === p6) {
    // para. 7
    x.innerHTML = p7;
  } else if (x.innerHTML === p7) {
    // para. 8
    x.innerHTML = p8;
  } else if (x.innerHTML === p8) {
    // para. 9
    x.innerHTML = p9;
  } else {
    // para. 13
    x.innerHTML = p10;
  }
}
