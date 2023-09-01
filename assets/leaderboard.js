var olEl = document.querySelector("#ol-selector");
var clearButton = document.querySelector("#clear");

function getLeaderBoard() {
  var leaderBoard = JSON.parse(localStorage.getItem("all-scores")) || [];

  if (leaderBoard.lenght === 0) {
    return;
  }

  for (var i = 0; i < leaderBoard.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = leaderBoard[i].name + " " + leaderBoard[i].score;
    olEl.appendChild(liEl);
  }
}

getLeaderBoard();

clearButton.addEventListener("click", function () {
  localStorage.clear();
  olEl.innerHTML = "";
});
