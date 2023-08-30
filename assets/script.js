// DEPENDENCIES
var mainEl = document.querySelector("#main-container");
var startButtonEl = document.querySelector("#start-button");
var timerTextEl = document.querySelector("#timer-text");

// VARIABLES
var timeLeft = 100;
var currentQuestionIndex = 0;
var isCorrect = false;
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
];

// FUNCTIONS

// This function will create a new space with the question
function createQuestion(questionObject) {
  var questionHeader = document.createElement("h2");
  var questionList = document.createElement("ul");
  var answerButton1 = document.createElement("input");
  var answerLi1 = document.createElement("li");
  answerButton1.setAttribute("type", "button");
  var answerButton2 = document.createElement("input");
  var answerLi2 = document.createElement("li");
  answerButton2.setAttribute("type", "button");
  var answerButton3 = document.createElement("input");
  var answerLi3 = document.createElement("li");
  answerButton3.setAttribute("type", "button");
  var answerButton4 = document.createElement("input");
  var answerLi4 = document.createElement("li");
  answerButton4.setAttribute("type", "button");

  questionHeader.textContent = questionObject.question;
  answerButton1.setAttribute("value", questionObject.responses[0]);
  answerButton1.setAttribute("class", "question-button");
  answerButton2.setAttribute("value", questionObject.responses[1]);
  answerButton2.setAttribute("class", "question-button");
  answerButton3.setAttribute("value", questionObject.responses[2]);
  answerButton3.setAttribute("class", "question-button");
  answerButton4.setAttribute("value", questionObject.responses[3]);
  answerButton4.setAttribute("class", "question-button");

  answerLi1.appendChild(answerButton1);
  answerLi2.appendChild(answerButton2);
  answerLi3.appendChild(answerButton3);
  answerLi4.appendChild(answerButton4);

  questionList.setAttribute("class", "question-list");

  questionList.appendChild(answerLi1);
  questionList.appendChild(answerLi2);
  questionList.appendChild(answerLi3);
  questionList.appendChild(answerLi4);

  mainEl.appendChild(questionHeader);
  mainEl.appendChild(questionList);

  answerButton1.addEventListener("click", handleAnswer);
  answerButton2.addEventListener("click", handleAnswer);
  answerButton3.addEventListener("click", handleAnswer);
  answerButton4.addEventListener("click", handleAnswer);
}

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

function handleAnswer(event) {
  console.log(event.target.value);
  if (event.target.value === questionObjectList[currentQuestionIndex].answer) {
    isCorrect = true;
  } else {
    isCorrect = false;
  }

  clearMainArea();
  playTheGame();
}

// After the game is started we will continue to the next iteration of the questions
function playTheGame() {
  if (currentQuestionIndex < questionObjectList.length - 1) {
    currentQuestionIndex += 1;
    createQuestion(questionObjectList[currentQuestionIndex]);
  } else {
    console.log("END OF GAME");
  }
}

// start-button event to start the game
startButtonEl.addEventListener("click", function () {
  // Clear the current page
  clearMainArea();
  startTimer();
  createQuestion(questionObjectList[currentQuestionIndex]);
});

// INITAILZATIONS

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
