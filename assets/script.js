// DEPENDENCIES
var mainEl = document.querySelector("#main-container");
var startButtonEl = document.querySelector("#start-button");
var timerTextEl = document.querySelector("#timer-text");

// VARIABLES
var timeLeft = 100;
var questionObjectList = [
  {
    question: "Inside which HTML element do we put the JavaScript",
    responses: ["<script>", "<scripting>", "<js>", "<javascript>"],
    answer: "<script>",
  },
  {
    question: "How do you create a function in JavaScript?",
    responses: [
      "function:myFunction()",
      "function myFunction()",
      "function = myFunction",
      "function myFunction",
    ],
    answer: "function myFunction()",
  },
  {
    question: "How do you add a comment in JavaScript",
    responses: [
      "<!--This is a comment-->",
      "'This is a comment",
      "//This is a comment",
      "#This is a comment",
    ],
    answer: "//This is a comment",
  },
  {
    question: "How can you open a link in a new browser window",
    responses: ["_blank", "Same", "Target", "Open"],
    answer: "_blank",
  },
  {
    question: "What does HTML stand for?",
    responses: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What property is used to change the background color?",
    responses: ["bgcolor", "color", "background-color", "backgroundcolor"],
    answer: "background-color",
  },
  {
    question: "Which CSS property controls the text size?",
    responses: ["text-style", "text-size", "font-size", "font-style"],
    answer: "font-size",
  },
  {
    question: "How do you select an element with id 'demo'?",
    responses: ["*demo", "#demo", ".demo", "demo"],
    answer: "#demo",
  },
  {
    question: "How do you select all p elements inside a div element?",
    responses: ["div + p", "div.p", "div p", ".div.p"],
    answer: "div p",
  },
  {
    question: "How do you group selectors?",
    responses: [
      "Separate each selector with a space",
      "Separate each selector with a plus sign",
      "Separate each selector with a comma",
      "Separate each selector with a slash",
    ],
    answer: "Separate each selector with a comma",
  },
  {
    question: "What is the default value of the position property?",
    responses: ["relative", "static", "fixed", "absolute"],
    answer: "static",
  },
  {
    question: "What is the default value of the position property?",
    responses: ["relative", "static", "fixed", "absolute"],
    answer: "static",
  },
  {
    question: "What is the default value of the position property?",
    responses: ["relative", "static", "fixed", "absolute"],
    answer: "static",
  },
  {
    question: "What is the default value of the position property?",
    responses: ["relative", "static", "fixed", "absolute"],
    answer: "static",
  },
  {
    question: "What is the default value of the position property?",
    responses: ["relative", "static", "fixed", "absolute"],
    answer: "static",
  },
];

// FUNCTIONS

// This will clear the main tag between start and each question
function clearMainArea() {
  console.log(mainEl);
  while (mainEl.firstElementChild) {
    mainEl.firstChild.remove();
  }
  console.log(mainEl);
}

function startTimer() {
  var timerInterval = setInterval(function () {
    timerTextEl.textContent = "Time: " + timeLeft;

    if (timeLeft > 0) {
      timeLeft--;
    }
  }, 1000);
}

// start-button event to start the game
startButtonEl.addEventListener("click", function () {
  // Clear the current page
  clearMainArea();
  startTimer();
});
// INITAILZATIONS
console.log(questionObjectList);
// Steps
// Event listener on starting button
// Timer starts
// Clear the current page
// Go through list of questions and answers
// Maybe... next button will change question not automatically
// Check if the question is right or wrong and take off time
// iterate and go to the next question after answer is given
// Once timer ends give the current score
// Allow name to be added and save unless reset button is hit
