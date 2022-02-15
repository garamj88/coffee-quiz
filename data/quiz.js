const spellingQuiz = [
  {
    question: 'Cappuccino',
    answer: 'Correct',
    explanation: null
  },

  {
    question: 'Arabicia',
    answer: 'Incorrect',
    explanation: 'It\'s Arabica'
  },

  {
    question: 'Macchiato',
    answer: 'Correct',
    explanation: null
  },

  {
    question: 'Frappacinno',
    answer: 'Incorrect',
    explanation: 'It\'s Frappuccino'
  },

  {
    question: 'Espresso',
    answer: 'Correct',
    explanation: null
  },

  {
    question: 'Ristretto',
    answer: 'Correct',
    explanation: null
  },

  {
    question: 'Caffiene',
    answer: 'Incorrect',
    explanation: 'It\'s Caffeine'
  },

  {
    question: 'Caffé au Laite',
    answer: 'Incorrect',
    explanation: 'It\'s Caffé au Lait'
  },

  {
    question: 'Robusta',
    answer: 'Correct',
    explanation: null
  },

  {
    question: 'Kopi Lawak',
    answer: 'Incorrect',
    explanation: 'It\'s Kopi Luwak'
  }
];

function getRandomSpelling() {
  return spellingQuiz[Math.floor(Math.random() * spellingQuiz.length)];
}

export {
  getRandomSpelling
}