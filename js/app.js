// Cached ele refs
const spellbtn = document.getElementById("spelling-btn");
const loverbtn = document.getElementById("lover-btn");
const xprtbtn = document.getElementById("expert-btn");
const snobbtn = document.getElementById("snob-btn");

const spellqz = document.getElementById("spelling-quiz");
const loverqz = document.getElementById("lover-quiz");
const xprtqz = document.getElementById("expert-quiz");
const snobqz = document.getElementById("snob-quiz");



// Consts & Variables

let score = 0;

const passScore = 7;
const failScore = 4;

import { getRandomSpelling } from "../data/quiz.js";

console.log(getRandomSpelling);

// You don't know much about coffee, but you like it!
// You're a true coffee lover!
// You know basics about coffee but you're not an expert. That's enough!
// You know your stuff, you're an expert!
// Be proud to admit you're a coffee snob! 


// Event Listeners



// MAIN PAGE
// Play a background sound by default, add a button to mute
// Add 4 buttons of each category for click event listener to navigate to each quiz html page
// QUIZ PAGES
// Const / Variables / Cached Ele Refs
// objects of questions (10) with answers, the correct answer, and explanation
// The correct answer property will have the idx # for single answer questions
// And for Correct (Yes) / Incorrect (No) questions, true = 1, false = 0
// Assign variables for in its idx

// Create buttons & card containers and add cached ele refs
// Card containers: question, card after clicking answer, result
// Buttons: Each answer, next, go back to main

// Add event listeners to each button (click)
// Functions

// Pick a question in a random order from the questions array

// present the answers buttons in a random order for single selection questions
// Check answer and get a win

// 1) if player chose the correct answer, store 1 to a score variable
// (Lover/Snob quiz will not check if this correct or not, storing 0 for false and 1 for true upon selection)

// 2) let the player know if they chose an correct / incorrect answer and render a card container with the followings:

// correct/incorrect message
// corresponding explanation
// pop the next button to the container
// 3) When iteration for the questions is over, check the score and render the result card container

// if score = 10, render the result container with a message and go back to main button
// else if 4 < score < 10, render the result container with another message and go back to main button
// else, render the result container with the other message and go back to main button
// Add a 45 sec timer for each question for the lover? & expert? category