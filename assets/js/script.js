//variable declarations
var startButton = $(".start-button");
var score = $(".score");
var timer = $(".timer");
var paraBox = $(".paraBox");
var highScore = $(".initialForm");

//hide the scoreboard and timer on intial load
score.hide();
timer.hide();
highScore.hide();

var secondsLeft = 30;

//set timer interval in variable
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.text(secondsLeft + " seconds left!");

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    } else if (secondsLeft < 10) {
      timer.css("color", "red");
    }
  }, 1000);
}

function renderQuestion() {
  var question1 = "test";
}

function renderAnswers() {
  var answers = "test";
}

startButton.on("click", function () {
  startButton.hide();
  paraBox.hide();
  score.show();
  timer.show();
  renderQuestion();
  renderAnswers();
  startTimer();
});
