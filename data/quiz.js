// objects of questions (10) with answers, the correct answer, and explanation
// The correct answer property will have the idx # for single answer questions
// And for Correct (Yes) / Incorrect (No) questions, true = 'Correct', false = 'Incorrect'


// property name
// question: qu, op: op, answer: an, explanation: ex, img for question: qim, img for result: rim

let spellingQuiz = [
  {
    qu: 'Cappuccino',
    op: ['Correct', 'Incorrect'],
    an: 'Correct',
    ex: null,
    qim: 'assets/img/cappuccino.jpg'
  },

  {
    qu: 'Arabicia',
    op: ['Correct', 'Incorrect'],
    an: 'Incorrect',
    ex: 'It\'s Arabica'
  },

  {
    qu: 'Macchiato',
    op: ['Correct', 'Incorrect'],
    an: 'Correct',
    ex: null
  },

  {
    qu: 'Frappacinno',
    op: ['Correct', 'Incorrect'],
    an: 'Incorrect',
    ex: 'It\'s Frappuccino'
  },

  {
    qu: 'Espresso',
    op: ['Correct', 'Incorrect'],
    an: 'Correct',
    ex: null
  },

  {
    qu: 'Ristretto',
    op: ['Correct', 'Incorrect'],
    an: 'Correct',
    ex: null
  },

  {
    qu: 'Caffiene',
    op: ['Correct', 'Incorrect'],
    an: 'Incorrect',
    ex: 'It\'s Caffeine'
  },

  {
    qu: 'Caffé au Laite',
    op: ['Correct', 'Incorrect'],
    an: 'Incorrect',
    ex: 'It\'s Caffé au Lait'
  },

  {
    qu: 'Robusta',
    op: ['Correct', 'Incorrect'],
    an: 'Correct',
    ex: null
  },

  {
    qu: 'Kopi Lawak',
    op: ['Incorrect', 'Correct'],
    an: 'Incorrect',
    ex: 'It\'s Kopi Luwak'
  }
];


// const SnobQuiz = [
//   {
//     qu: 'Cappuccino',
//     op: ['Incorrect', 'Correct'],
//     an: 'Correct',
//     ex: null
//   },

//   {
//     qu: 'Arabicia',
//     op: ['Incorrect', 'Correct'],
//     an: 'Incorrect',
//     ex: 'It\'s Arabica'
//   },

//   {
//     qu: 'Macchiato',
//     op: ['Incorrect', 'Correct'],
//     an: 'Correct',
//     ex: null
//   },

//   {
//     qu: 'Frappacinno',
//     op: ['Incorrect', 'Correct'],
//     an: 'Incorrect',
//     ex: 'It\'s Frappuccino'
//   },

//   {
//     qu: 'Espresso',
//     op: ['Incorrect', 'Correct'],
//     an: 'Correct',
//     ex: null
//   },

//   {
//     qu: 'Ristretto',
//     op: ['Incorrect', 'Correct'],
//     an: 'Correct',
//     ex: null
//   },

//   {
//     qu: 'Caffiene',
//     op: ['Incorrect', 'Correct'],
//     an: 'Incorrect',
//     ex: 'It\'s Caffeine'
//   },

//   {
//     qu: 'Caffé au Laite',
//     op: ['Incorrect', 'Correct'],
//     an: 'Incorrect',
//     ex: 'It\'s Caffé au Lait'
//   },

//   {
//     qu: 'Robusta',
//     op: ['Incorrect', 'Correct'],
//     an: 'Correct',
//     ex: null
//   },

//   {
//     qu: 'Kopi Lawak',
//     op: ['Incorrect', 'Correct'],
//     an: 'Incorrect',
//     ex: 'It\'s Kopi Luwak'
//   }

// ]


// const loverQuiz = [
//   {
//     qu: 'What is this brewing device called?',
//     op: ['French Press', 'AeroPress', 'Moka Pot', 'Chemex'],
//     an: 'French Press',
//     ex: 'French presses use a mesh plunger to push coffee grounds to the bottom of the pot.',
//     qim: 'add french press image',
//     rim: null
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: 
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: 
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: 
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: 
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: 
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: 
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: 
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: 
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: 
//   }
// ]

// const expertQuiz = [
//   {
//     qu: 'According to an Ethiopian origin story, coffee beans were discovered after what animal became energetic after eating the coffee cherries?',
//     op: ['Goats', 'Elephants', 'Birds', 'Horse'],
//     an: 'Goats',
//     ex: 'According to the legend, a goatherd discovered coffee beans after he noticed that his goats became super energetic after eating cherries from a particular tree.',
//     qim: null,
//     rim: 'add ancient goatherd pic',
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: ,
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: ,
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: ,
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: ,
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: ,
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: ,
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: ,
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: ,
//   },

//   {
//     qu: ,
//     op: ,
//     an: ,
//     ex: ,
//     qim: ,
//     rim: ,
//   }
// ]


