//variable declarations
var startButton = $(".start-button");
var score = $(".score");
var timer = $(".timer");
var paraBox = $(".paraBox");
var highScore = $(".initialForm");
var userInitials = $("#initials");
var answerButtons = $("#qaButtons");
var questionBox = $(".card-question");
var points = 0;

//hide elements that wont be used til later on the initial page load
score.hide();
timer.hide();
highScore.hide();

var secondsLeft = 30;

//set timer interval in variable
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.text(secondsLeft + " seconds left!");
    score.text("Current score: " + points);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    } else if (secondsLeft < 10) {
      timer.css("color", "red");
    }
  }, 1000);
}

//create variables for each of the questions to be asked in the quiz
var question1 = "How do you know if a function is being called?";
var question2 = "What can you do to make an element do something when clicked?";
var question3 = "What does the '.push' operator do?";
var question4 = "What is the strict equality comparison operator?";

//crate answers for each of the questions
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

var correctAnswers = [
  "The function is followed by '()'",
  "You must add an event listener to the element.",
  "It adds an item to the end of an array.",
  "===",
];

function renderQuestionAnswers() {
  // Dynamically create buttons for the answers.
  for (var i = 0; i < answers1.length; i++) {
    // Create button
    var answerBtn = $("<button>");
    // Assign answers to the buttons
    answerBtn.attr("data-answer", answers1[i]);
    // Display the answers
    answerBtn.text(answers1[i]);
    // Attach the buttons
    answerButtons.append(answerBtn);
  }

  //Attach the Question
  var questionh3 = $("<h3>");
  // Assign question to the h3
  questionh3.attr("data-question", question1);
  // Display the question
  questionh3.text(question1);
  // Attach the h3
  questionBox.append(questionh3);
}

//place the scores into local storage
function renderScores() {
  localStorage.getItem("#initials", initials);
  initials.text = userInitials;

  if (userInitials === "") {
    alert("You must add you initials!");
  }

  //save the initials input to the local storage and render it to the highscores
  localStorage.setItem("#initials", userInitials);
}

function endGame() {
  highScore.show();
  renderScores();
}

// answerButtons.on('click', function() {
//     if (answerButtons === correctAnswers) {
//         (score +10);}

//     else {
//         (timer -5);
//     } }

startButton.on("click", function () {
  startButton.hide();
  paraBox.hide();
  score.show();
  timer.show();
  startTimer();
  renderQuestionAnswers();
});
