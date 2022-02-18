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
    ex: 'This is correct',
    qim: '../assets/img/cappuccino.jpg'
    //'https://www.thespruceeats.com/thmb/BzOCAGJIHKcClNckVMXOsYoaT5A=/4413x2482/smart/filters:no_upscale()/how-to-make-cappuccinos-766116-hero-01-a754d567739b4ee0b209305138ecb996.jpg'
    //'https://imgur.com/ehXyq8q'
  },

  {
    qu: 'Arabicia',
    op: ['Correct', 'Incorrect'],
    an: 'Incorrect',
    ex: 'Correct answer is: Arabica'
  },

  {
    qu: 'Macchiato',
    op: ['Correct', 'Incorrect'],
    an: 'Correct',
    ex: 'This is correct'
  },

  {
    qu: 'Frappacinno',
    op: ['Correct', 'Incorrect'],
    an: 'Incorrect',
    ex: 'Correct answer is: Frappuccino'
  },

  {
    qu: 'Espresso',
    op: ['Correct', 'Incorrect'],
    an: 'Correct',
    ex: 'This is correct'
  },

  {
    qu: 'Ristretto',
    op: ['Correct', 'Incorrect'],
    an: 'Correct',
    ex: 'This is correct'
  },

  {
    qu: 'Caffiene',
    op: ['Correct', 'Incorrect'],
    an: 'Incorrect',
    ex: 'Correct answer is: Caffeine'
  },

  {
    qu: 'Caffé au Laite',
    op: ['Correct', 'Incorrect'],
    an: 'Incorrect',
    ex: 'Correct answer is: Caffé au Lait'
  },

  {
    qu: 'Robusta',
    op: ['Correct', 'Incorrect'],
    an: 'Correct',
    ex: 'This is correct'
  },

  {
    qu: 'Kopi Lawak',
    op: ['Correct', 'Incorrect'],
    an: 'Incorrect',
    ex: 'Correct answer is: Kopi Luwak'
  }
];


const SnobQuiz = [
  {
    qu: 'You have a section dedicated only to coffee in your home.',
    op: ['No', 'Yes'],
    an: 'Yes',
    ex: null
  },

  {
    qu: 'Nespresso makes you want to cry.',
    op: ['No', 'Yes'],
    an: 'Yes',
    ex: null
  },

  {
    qu: 'You bring your own coffee supplies when camping or backpacking.',
    op: ['No', 'Yes'],
    an: 'Yes',
    ex: null
  },

  {
    qu: 'You read coffee blogs.',
    op: ['No', 'Yes'],
    an: 'Yes',
    ex: null
  },

  {
    qu: 'You cringe at the thought of putting milk in brewed coffee.',
    op: ['No', 'Yes'],
    an: 'Yes',
    ex: null
  },

  {
    qu: 'You view pre-ground coffee as the frozen pizza of caffeine.',
    op: ['No', 'Yes'],
    an: 'Yes',
    ex: null
  },

  {
    qu: 'You\'d rather go without coffee than go in a Starbucks.',
    op: ['No', 'Yes'],
    an: 'Yes',
    ex: null
  },

  {
    qu: 'You are strict to wait for 2 weeks from the roasting date.',
    op: ['No', 'Yes'],
    an: 'No',
    ex: null
  },

  {
    qu: 'You\'ve spent more than $20 for less than one pound of coffee.',
    op: ['No', 'Yes'],
    an: 'Yes',
    ex: null
  },

  {
    qu: 'You have a favorit water recipe.',
    op: ['No', 'Yes'],
    an: 'No',
    ex: null
  }
]


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


