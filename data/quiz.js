// objects of questions (10) with answers, the correct answer, and explanation
// The correct answer property will have the idx # for single answer questions
// And for Correct (Yes) / Incorrect (No) questions, true = 'Correct', false = 'Incorrect'


// property name
// question: qu, op: op, answer: an, explanation: ex, img for question: qim, img for result: rim

const spellingQuiz = [
  {
    qu: 'Cappuccino',
    op: ['Correct', 'Incorrect'],
    an: 'Correct',
    ex: 'This is correct',
    qim: '../assets/img/cappuccino.jpg'
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
    qu: 'Cortada',
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


const snobQuiz = [
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


const loverQuiz = [
  {
    qu: 'What is this brewing device called?',
    op: ['French Press', 'AeroPress', 'Moka Pot', 'Chemex'],
    an: 'French Press',
    ex: 'French presses use a mesh plunger to push coffee grounds to the bottom of the pot.',
    qim: '../assets/img/frenchpress.jpg',
    rim: null
  },

  {
    qu: '"Robusta" and "Arabica" are both types of what?',
    op: ['Coffee Bean', 'Brewing Technique', 'Roast Method', 'Instant Coffee'],
    an: 'Coffee Bean',
    ex: null,
    qim: null,
    rim: null 
  },

  {
    qu: 'Kopi Luwak coffee is some of the most expensive coffee in the world, but what other fact can you tell your customer about it?',
    op: ['It\'s made from poop', 'It\'s banned in US', 'The beans are bright red', 'It\'s not actually coffee at all'],
    an: 'It\'s made from cat\'s poop',
    ex: 'Kopi Luwak coffee beans are partially digested and pooped out by a catlike creature called the civet. One cup costs around $80 in the US.',
    qim: null,
    rim: '../assets/img/kopiLuwak.jpg'
  },

  {
    qu: 'What is a latte?',
    op: ['A drink made with espresso and steamed milk.', 'A drink made with only espresso.', 'A drink made with espresso and milk foam only.', 'A drink made with espresso and whipped cream only.'],
    an: 'A drink made with espresso and steamed milk.',
    ex: null,
    qim: null,
    rim: null,
  },

  {
    qu: 'What is the difference between a cappuccino and a latte?',
    op: ['lattes contain more milk', 'lattes contain less milk', 'There is no difference', 'lattes contain more milk foam'],
    an: 'lattes contain more milk',
    ex: null,
    qim: null,
    rim: null,
  },

  {
    qu: 'What beverage is made by adding hot water to espresso?',
    op: ['Americano', 'Coartado', 'Doppio', 'Affogato'],
    an: 'Americano',
    ex: null,
    qim: null,
    rim: null
  },

  {
    qu: 'What is this brewing device called?',
    op: ['Moka Pot', 'French Press', 'AeroPress', 'Chemex'],
    an: 'Moka Pot',
    ex: null,
    qim: '../assets/img/mokapot.jpg',
    rim: null
  },

  {
    qu: 'Where was coffee first discovered?',
    op: ['Ethiopia', 'Vietnam', 'Colombia', 'Brazil'],
    an: 'Ethiopia',
    ex: 'The coffee plant is first recorded as being discovered in Ethiopia.',
    qim: null,
    rim: null
  },

  {
    qu: 'Which of these are the names of the most common types of coffee bean?',
    op: ['Arabica and Robusta', 'Ristretto and Tactera', 'Liberica and Acaisa', 'Laurina and Topponta '],
    an: 'Arabica and Robusta',
    ex: 'Arabica makes up about 70% of the world coffee bean market, robusta makes up about 27%.',
    qim: null,
    rim: null
  }
]

const expertQuiz = [
  {
    qu: 'According to an Ethiopian origin story, coffee beans were discovered after what animal became energetic after eating the coffee cherries?',
    op: ['Goats', 'Elephants', 'Birds', 'Horse'],
    an: 'Goats',
    ex: 'According to the legend, a goatherd discovered coffee beans after he noticed that his goats became super energetic after eating cherries from a particular tree.',
    qim: null,
    rim: '../assets/img/Gothard.jpg'
  },

  {
    qu: 'How large is a shot of espresso?',
    op: ['25ml', '35ml', '15ml', '40ml'],
    an: '25ml',
    ex: 'According to the Italian Espresso National Institute, a single shot should be approximately 25ml.',
    qim: null,
    rim: null,
  },

  {
    qu: 'What is the biggest difference between Arabica and Robusta?',
    op: ['Growing Condition', 'Brewing Method', 'Cherry Size', 'Picking Method'],
    an: 'Arabica coffee is grown anywhere upwards of 600+m on mountain tops and tropical environments. Whereas Robusta coffee is grown anywhere from sea level to around 600m.',
    ex: null,
    qim: null,
    rim: null,
  },

  {
    qu: 'If a customer asks for something high in caffeine, which bean would you recommend?',
    op: ['Light Roast', 'Dark Roast'],
    an: 'Light Roast',
    ex: 'The lighter the bean, the more caffeine it contains.',
    qim: null,
    rim: null,
  },

  {
    qu: 'Which of these statements is true?',
    op: ['Light roast beans are more acidic than medium and dark roast beans.', 'Light roast beans are more acidic than medium roast beans, but less acidic than dark roast beans.', 'Light roast beans are less acidic than medium roast beans, but more acidic than dark roast beans.', 'Light roast beans are less acidic than medium and dark roast beans.'],
    an: 'Light roast beans are more acidic than medium and dark roast beans.',
    ex: 'Light roast beans contain more moisture because they are roasted for a shorter period of time. Beans with more moisture are more acidic.',
    qim: null,
    rim: null,
  },

  {
    qu: "What is this dripper name?",
    op: ['V60', 'Kalita Wave', 'Origami', 'Chemex'],
    an: 'V60',
    ex: null,
    qim: '../assets/img/v60 jpg.jpeg',
    rim: null,
  },

  {
    qu: 'How long will a coffee plant typically produce coffee if it is well cared for?',
    op: ['Over 25 years', 'Over 5 years', 'Over 10 years', 'Over 50 years'],
    an: 'Over 25 years',
    ex: 'Both Arabica and Robusta coffee plants will produce coffee beans for more than 25 years if they are well taken care of.',
    qim: null,
    rim: null
  },

  {
    qu: 'Which European country consumes the most coffee?',
    op: ['Finland', 'Italy', 'Norway', 'France'],
    an: 'Finland',
    ex: 'Finland is the top coffee consumer per capita.',
    qim: null,
    rim: null,
  },

  {
    qu: 'What is the recommended water to coffee ratio for pour over coffee?',
    op: ['16:1', '10:1', '20:1', '30:1'],
    an: '16:1',
    ex: '15:1-17:1 is the most commonly recommended ratio.',
    qim: null,
    rim: null,
  },

  {
    qu: 'Which of these statements is NOT true about washed beans?',
    op: ['They are dried with the cherry', 'They are fermented in water', 'They are de-pupled', 'They are washed prior to drying'],
    an: 'They are dried with the cherry',
    ex: 'Natural beans are dried in the cherry',
    qim: null,
    rim: null,
  },

  {
    qu: 'In what country Gesha coffee originated?',
    op: ['Ethiopia', 'Congo', 'Brazil', 'Panama'],
    an: 'Ethiopia',
    ex: 'Gesha coffee is a variety of coffee tree that originated in the Gori Gesha forest, Ethiopia.',
    qim: null,
    rim: null,
  }
]

// // export {
//   spellingQuiz, SnobQuiz, loverQuiz, expertQuiz
// }
