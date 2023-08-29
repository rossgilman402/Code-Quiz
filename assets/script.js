// DEPENDENCIES
var mainEl = document.querySelector("#main-container");
var startButtonEl = document.querySelector("#start-button");

// VARIABLES

// FUNCTIONS
function clearMainArea() {
  var lastChild = mainEl.lastElementChild;

  // If the last child is not null remove and assign to next child
  // keep looping until there are no more last child
  while (lastChild) {
    mainEl.remove(lastChild);
    lastChild = e.lastElementChild;
  }
}

startButtonEl.addEventListener("click", function () {
  // Clear the current page
  clearMainArea();
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
