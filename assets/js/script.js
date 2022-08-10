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
  var question1 = "How do you know if a function is being called?";
  var question2 =
    "What can you do to make an element do something when clicked?";
  var question3 = "What does the '.push' operator do?";
  var question4 = "What is the strict equality comparison operator?";
}

function renderAnswers() {
  var answers1 = [
    "The command '.call' is after the function",
    "You do not need to call a function",
    "The function is folowed by '()'",
    "You yell at the computer to 'DO SOMETHING!!'",
  ];
  var answers2 = [
    "All elements are automatically resonsive.",
    "You must add an event listener to the element",
    "Double click on the element.",
    "Set an interval to the element",
  ];
  var answers3 = [
    "It pushes the code to the web page.",
    "It adds indentation to your web page",
    "It adds an item to the end of an array.",
    "It reminds you to get up and do some push-ups!",
  ];
  var answers4 = ["=", "==", "!=", "==="];
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
