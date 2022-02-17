// Cached ele refs

// buttons
const muteBtn = document.getElementById("mute")
const spellBtn = document.getElementById("spelling-btn");
const loverBtn = document.getElementById("lover-btn");
const xprtBtn = document.getElementById("expert-btn");
const snobBtn = document.getElementById("snob-btn");
// const mainBtns = document.getElementsByClassName("btn-main");
const nextBtn = document.getElementById("next");
const toMainBtn = document.getElementById("to-main");
const opt0 = document.getElementById("option0");
const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");

// divs / placeholders

const catBtns = document.getElementById("category-btns");
const container = document.getElementById("container")
const optBtns = document.getElementById("options-btns");
// console.log(optBtns)

const header = document.getElementById("header");
const quizQstn = document.getElementById("question");
const qImg = document.getElementById('question-image')
const quizCont = document.getElementById("quiz-container");
const ansCont = document.getElementById("answer-container");
const nswr = document.getElementById("answer")
const xpln = document.getElementById("explain");


// Consts & Variables

let idx = 0;
let score = 0;
let quiz;
let answered = false;

const passScore = 7;
const failScore = 4;

// // Pick a question in a random order from the questions array
//   // present the options in a random order
//   // present the answers buttons in a random order for single selection questions

// Event Listeners

nextBtn.addEventListener('click', handleNext);
// muteBtn.addEventListener('click', soundMute);

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

spellBtn.addEventListener('click', () => {
  init()
  score = 0;
  quiz = spellingQuiz.sort(() => Math.random() - 0.5);
  renderQues();
  //getResult();
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

renderQues = () => {
  const question = document.createElement('h2')
  question.textContent = quiz[idx].qu
  quizCont.appendChild(question)

  quiz[idx].op.forEach((o, i) => {
    const button = document.createElement('button')
    button.id = o
    button.classList.add('opt-btn')
    button.textContent = o
    button.addEventListener('click', (evt) => getAnswer(evt, o))
    optBtns.appendChild(button)
  })

  if (quiz[idx].qim) {
    const img = document.createElement('img')
    img.src = quiz[idx].qim
    img.id = "question-image"
    quizCont.appendChild(img)
  }
  // if (quiz[idx].op.length === 4) {
  //   quizQstn.textContent = quiz[idx].qu;
  //   op = quiz[idx].op.sort(() => Math.random() - 0.5);
  //   opt0.textContent = quiz[idx].op[0];
  //   opt1.textContent = quiz[idx].op[1];
  //   opt2.textContent = quiz[idx].op[2];
  //   opt3.textContent = quiz[idx].op[3];
  // } else {
  //   quizQstn.textContent = quiz[idx].qu;
  //   opt0.textContent = quiz[idx].op[0];
  //   opt1.textContent = quiz[idx].op[1];
  //   opt2.remove();
  //   opt3.remove();
  // };

  // if (quiz[idx].qim) {
  //   qImg.setAttribute('src', quiz[idx].qim) //check back for image crash
  // } else {
  //   qImg.style.display = 'none';
  // }
  // ansCont.style.display ='none';
}

// opt0.addEventListener('click', () => getAnswer(0));
// opt1.addEventListener('click', () => getAnswer(1));
// opt2.addEventListener('click', () => getAnswer(2));

// nextBtn.addEventListener('click', () => renderQues())

function handleNext() {
  if (answered === false) return;
  answered = false;
  clearQuestion();
  idx++;
  renderQues()
}

function clearQuestion() {
  ansCont.style.display = 'none';
  nswr.textContent = '';
  xpln.textContent = '';
  quizCont.innerHTML = '';
  optBtns.innerHTML = '';
}

getAnswer = (evt, o) => {
  if (answered === true) return;

  answered = true;
  if (o === quiz[idx].an) {
    ansCont.style.display = 'block';
    nswr.textContent = `C☕️rrect!`;
    xpln.textContent = quiz[idx].ex;
    score++;
  } else {
    ansCont.style.display = 'block';
    nswr.textContent = `Wrong!`;
    xpln.textContent = quiz[idx].ex;
  }
  
  // if (idx < quiz.length - 1) {
  //   if (quiz[idx].op[i] === quiz[idx].an) {
  //     ansCont.style.display = 'block';
  //     nswr.textContent = `C☕️rrect!`;
  //     xpln.textContent = quiz[idx].ex;
  //     score++;
  //     idx++;
  //   } else {
  //     ansCont.style.display = 'block';
  //     nswr.textContent = `Wrong!`;
  //     xpln.textContent = quiz[idx].ex;
  //     idx++;
  //   }
  // } else {
  //   if (quiz[idx].op[i] === quiz[idx].an) {
  //     score++;
  //     ansCont.style.display = 'block';
  //     nswr.textContent = `C☕️rrect!`;
  //   } else {
  //     ansCont.style.display = 'block';
  //     quiz[idx].an;
  //     xpln.textContent = quiz[idx].ex;
  //   }
  // };
}


// function getResult() {

// // 3) When iteration for the questions is over, check the score and render the result card container
//   // if score = 10, render the result container with a message and go back to main button
//   // else if 4 < score < 10, render the result container with another message and go back to main button
//   // else, render the result container with the other message and go back to main button
//   // Add a 45 sec timer for each question for the lover? & expert? category

// }

toMainBtn.addEventListener('click', () => {
  header.style.display = 'block';
  spellBtn.style.display = 'block';
  loverBtn.style.display = 'block';
  xprtBtn.style.display = 'block';
  snobBtn.style.display = 'block';
  quizCont.style.display = 'none';
  ansCont.style.display = 'none';
});