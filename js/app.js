// Cached ele refs

// buttons
const muteBtn = document.getElementById("mute")
const spellBtn = document.getElementById("spelling-btn");
const loverBtn = document.getElementById("lover-btn");
const xprtBtn = document.getElementById("expert-btn");
const snobBtn = document.getElementById("snob-btn");
// const mainBtns = document.querySelectorAll(".btn-main");
const nextBtn = document.getElementById("next");
const toMainBtn = document.getElementById("to-main");
const opt0 = document.getElementById("option0");
const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");

// divs / placeholders

const catBtns = document.getElementById("category-btns");
const optBtns = document.getElementById("options-btns");
const header = document.getElementById("header");
const quizQstn = document.getElementById("question");
const qImg = document.getElementById('question-image')
const quizCont = document.getElementById("quiz-container");
const ansCont = document.getElementById("answer-container");
const xpln = document.getElementById("explain");


// Consts & Variables

let idx = 0;
let score = 0;
let quiz;

const passScore = 7;
const failScore = 4;

// // Pick a question in a random order from the questions array
//   // present the options in a random order
//   // present the answers buttons in a random order for single selection questions

// Event Listeners

// nextBtn.addEventListener('click', getQuestion);
// toMainBtn.addEventListener('click', restoreMain);
// muteBtn.addEventListener('click', soundMute);

// MAIN PAGE
// Play a background sound by default, add a button to mute
// Change to 'Sound On' once clicked


spellBtn.addEventListener('click', () => {
  init()
  quiz = spellingQuiz.sort(() => Math.random() - 0.5);
  renderQues();
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



init = () => {
  header.style.display = 'none';
  spellBtn.style.display = 'none';
  loverBtn.style.display = 'none';
  xprtBtn.style.display = 'none';
  snobBtn.style.display = 'none';
  // mainBtns.style.display = 'none';
  quizCont.style.display = 'block';
};

renderQues = () => {
  if (quiz[idx].op.length === 4) {
    quizQstn.textContent = quiz[idx].qu;
    op = quiz[idx].op.sort(() => Math.random() - 0.5);
    opt0.textContent = quiz[idx].op[0];
    opt1.textContent = quiz[idx].op[1];
    opt2.textContent = quiz[idx].op[2];
    opt3.textContent = quiz[idx].op[3];
  } else {
    quizQstn.textContent = quiz[idx].qu;
    opt0.textContent = quiz[idx].op[0];
    opt1.textContent = quiz[idx].op[1];
    opt2.style.display = 'none'; // remove?
    opt3.style.display = 'none'; // remove?
  };

  if (quiz[idx].qim) {
    qImg.setAttribute('src', quiz[idx].qim) //check back for image crash
  } else {
    qImg.style.display = 'none';
  }
}

getAnswer = () => {
  optBtns.addEventListener('click',(evt) => {
    console.log(evt.target.textContent === quiz[idx].an);
  })

    // 1) if player chose the correct answer, store 1 to a score variable
  // (Lover/Snob quiz will not check if this correct or not, storing 0 for false and 1 for true upon selection)

  // 2) let the player know if they chose an correct / incorrect answer and render a card container with the followings:
  // correct/incorrect message
  // corresponding explanation
  // pop the next button to the container
}


// function getResult() {

// // 3) When iteration for the questions is over, check the score and render the result card container
//   // if score = 10, render the result container with a message and go back to main button
//   // else if 4 < score < 10, render the result container with another message and go back to main button
//   // else, render the result container with the other message and go back to main button
//   // Add a 45 sec timer for each question for the lover? & expert? category

// }

// restoreMain = () => {
//   header.style.display = 'block';
//   spellBtn.style.display = 'block';
//   loverBtn.style.display = 'block';
//   xprtBtn.style.display = 'block';
//   snobBtn.style.display = 'block';
//   quizCont.style.display = 'none';
//   ansCont.style.display = 'none';
// }