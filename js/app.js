// Cached ele refs

// buttons
const muteBtn = document.getElementById("mute");
const spellBtn = document.getElementById("spelling-btn");
const loverBtn = document.getElementById("lover-btn");
const xprtBtn = document.getElementById("expert-btn");
const snobBtn = document.getElementById("snob-btn");
const nextBtn = document.getElementById("next");
const toMainBtn = document.getElementById("to-main");

const catBtns = document.getElementById("category-btns");
const container = document.getElementById("container");
const optBtns = document.getElementById("options-btns");
const proBtns = document.getElementById("proceed-btns");
const song = new Audio('../assets/sound/894835456_231634354_1205527727.mp3');
const header = document.getElementById("header");
const quizQstn = document.getElementById("question");
const qImg = document.getElementById('question-image');
const quizCont = document.getElementById("quiz-container");
const ansCont = document.getElementById("answer-container");
const catName = document.getElementById("category")
const nswr = document.getElementById("answer");
const xpln = document.getElementById("explain");
const countdown = document.getElementById('countdown');

// Consts & Variables
let idx = 0;
let score = 0;
let quiz;
let answered = false;
let timeLeft;
let timer;
let playing = false;

const passScore = 7;


muteBtn.addEventListener('click', () => {
if (playing) {
  song.pause();
  muteBtn.style.backgroundColor = 'white';
} else {
  song.play();
  muteBtn.style.backgroundColor = '#9999999f';
}
playing = !playing;
});


init = () => {
  header.style.display = 'none';
  spellBtn.style.display = 'none';
  loverBtn.style.display = 'none';
  xprtBtn.style.display = 'none';
  snobBtn.style.display = 'none';
  quizCont.style.display = 'block';
  countdown.textContent = `120 sec left`;
  container.style.display = 'block';

};

spellBtn.addEventListener('click', () => {
  clearQuestion();
  init();
  timeLeft = 119;
  startTimer();
  idx = 0;
  score = 0;
  quiz = spellingQuiz.sort(() => Math.random() - 0.5);
  renderQues();
  return;
});

loverBtn.addEventListener('click', () => {
  clearQuestion();
  init();
  timeLeft = 119;
  startTimer();
  idx = 0;
  score = 0;
  quiz = loverQuiz.sort(() => Math.random() - 0.5);
  renderQues();
  return;
});

xprtBtn.addEventListener('click', () => {
  clearQuestion();
  init();
  timeLeft = 119;
  startTimer();
  idx = 0;
  score = 0;
  quiz = expertQuiz.sort(() => Math.random() - 0.5);
  renderQues();
  return;
});

snobBtn.addEventListener('click', () => {
  clearQuestion();
  init();
  timeLeft = 119;
  startTimer();
  idx = 0;
  score = 0;
  quiz = snobQuiz.sort(() => Math.random() - 0.5);
  renderQues();
  return;
});

renderQues = () => {
  const question = document.createElement('h2');
  question.textContent = quiz[idx].qu;
  quizCont.appendChild(question);

  quiz[idx].op.forEach((o, i) => {
    const button = document.createElement('button');
    button.id = o;
    button.classList.add('opt-btn');
    button.textContent = o;
    button.addEventListener('click', (evt) => getAnswer(evt, o));
    optBtns.appendChild(button);
  });

  if (quiz[idx].qim) {
    const img = document.createElement('img');
    img.src = `${quiz[idx].qim}`;
    img.id = "question-image";
    quizCont.appendChild(img);
  };
};

nextBtn.addEventListener('click', handleNext);

function handleNext() {
  if (answered === false) return;
  answered = false;
  clearQuestion();
  idx++;
  if (checkEndGame() === true) return;
  proBtns.style.display = 'none';
  renderQues();
};

function checkEndGame() {
  if (idx > 9 || timeLeft < 0) {
    if (score >= passScore) {
      quizCont.textContent = `Your score is ${score}/10! Congrats, you passed!`
    } else {
      quizCont.textContent = `Your score is ${score}/10... Try again next time`
    }
    clearInterval(timer)
    return true;
  } else {
    return false;
  }
}

function startTimer() {
  clearInterval(timer)
  timer = setInterval(() => {
    countdown.textContent = `${timeLeft} sec left`;
    timeLeft--;
    if(timeLeft < 0) {
      clearInterval(timer)
      clearQuestion()
      checkEndGame()
      proBtns.style.display = 'block';
    }
  }, 1000)
}

function clearQuestion() {
  ansCont.style.display = 'none';
  quizCont.innerHTML = '';
  optBtns.innerHTML = '';
}

getAnswer = (evt, o) => {
  proBtns.style.display = 'block';
  ansCont.style.display = 'block';
  xpln.innerHTML = '';
  
  if (answered === true) return;
  answered = true;

  if (o === quiz[idx].an) {
    ansCont.style.display = 'block';
    //nswr.textContent = `Correct!`;
    evt.target.style.backgroundColor = 'green'
    evt.target.style.opacity = 0.5;
    xpln.textContent = quiz[idx].ex;
    score++;
  } else {
    ansCont.style.display = 'block';
    //nswr.textContent = `Wrong!`;
    evt.target.style.backgroundColor = '#ff0000'
    evt.target.style.opacity = 0.5;
    nswr.textContent = `Correct answer is: ${quiz[idx].an}`;
    xpln.textContent = quiz[idx].ex;
  }
}

toMainBtn.addEventListener('click', () => {
  header.style.display = 'block';
  spellBtn.style.display = 'block';
  loverBtn.style.display = 'block';
  xprtBtn.style.display = 'block';
  snobBtn.style.display = 'block';
  container.style.display = 'none';
  countdown.textContent = '';
  quizCont.textContent = '';
  proBtns.style.display = 'none';
  ansCont.textContent = '';
  clearQuestion()
  clearInterval(timer)
});