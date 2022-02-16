// Cached ele refs

  // buttons

const muteBtn = document.getElementById("mute")
const spellBtn = document.getElementById("spelling-btn");
const loverBtn = document.getElementById("lover-btn");
const xprtBtn = document.getElementById("expert-btn");
const snobBtn = document.getElementById("snob-btn");
// const mainBtns = document.querySelectorAll(".btn-main");
const quizQstn = document.getElementById("question");
const nextBtn = document.getElementById("next");
const toMainBtn = document.getElementById("to-main");
const opt0 = document.getElementById("option0");
const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");


  // divs
const header = document.getElementById("header");
const catBtns = document.getElementById("category-btns");
const quizCont = document.getElementById("quiz-container");

// Consts & Variables

let twoOptQz;
let fourOptQz;
let idx = 0;
let score = 0;

const passScore = 7;
const failScore = 4;

// // Pick a question in a random order from the questions array
//   // present the options in a random order
//   // present the answers buttons in a random order for single selection questions

// Event Listeners

//muteBtn.addEventListener('click', soundMute);
spellBtn.addEventListener('click', () => {
  init()
  //getTwoOptQz(spellingQuiz)
});

// loverBtn.addEventListener('click', startLover);
  // You don't know much about coffee, but you like it!
  // You're a true coffee lover!

// xprtBtn.addEventListener('click', startExpert);
  // You know basics about coffee but you're not an expert. That's enough!
  // You know your stuff, you're an expert!

// snobBtn.addEventListener('click', () => {

// });
  // Be proud to admit you're a coffee snob!

// nextBtn.addEventListener('click', getQuestion);
// toMainBtn.addEventListener('click', restoreMain);

// MAIN PAGE
// Play a background sound by default, add a button to mute
// Change to 'Sound On' once clicked


init = () => {
  header.style.display = 'none';
  spellBtn.style.display = 'none';
  loverBtn.style.display = 'none';
  xprtBtn.style.display = 'none';
  snobBtn.style.display = 'none';
  // mainBtns.style.display = 'none';
  quizCont.style.display = 'block';
};

getTwoOptQz = () => {
  let quiz = spellingQuiz[idx];
  console.log(quiz)
}


// // Check answer and get a win

// function getScore() {
//   // 1) if player chose the correct answer, store 1 to a score variable
//   // (Lover/Snob quiz will not check if this correct or not, storing 0 for false and 1 for true upon selection)

// // 2) let the player know if they chose an correct / incorrect answer and render a card container with the followings:
//   // correct/incorrect message
//   // corresponding explanation
//   // pop the next button to the container
// }

// function getResult() {

// // 3) When iteration for the questions is over, check the score and render the result card container
//   // if score = 10, render the result container with a message and go back to main button
//   // else if 4 < score < 10, render the result container with another message and go back to main button
//   // else, render the result container with the other message and go back to main button
//   // Add a 45 sec timer for each question for the lover? & expert? category

// }

// function restoreMain() {
//   header.style.display = 'block';
//   spellBtn.style.display = 'block';
//   loverBtn.style.display = 'block';
//   xprtBtn.style.display = 'block';
//   snobBtn.style.display = 'block';
// }