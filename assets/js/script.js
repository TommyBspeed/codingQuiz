//variable declarations
var startButton = $("#start-button");
var submitButton = $("#submitScore");
var resetButton = $("#reset");
var hsButton = $("#hs-button");
var score = $(".score");
var timer = $(".timer");
var paraBox = $(".paraBox");
var scoreArea = $("#scoreArea");
var questionsText = $("#questions");
var answers = $("#answers");
var questionBox = $("#questionBox");
var userInitials = $("#userInitials");
var currentQuestionIndex;

var points = 0;
var secondsLeft = 30;

//hide elements that wont be used til later on the initial page load
score.hide();
timer.hide();
scoreArea.hide();
questionsText.hide();
questionBox.hide();

//set timer interval in variable
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.text(secondsLeft + " seconds left!");
    score.text("Current score: " + points);

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    } else if (secondsLeft < 10) {
      timer.css("color", "red");
    }
  }, 1000);
}

//create arrays for each of the questions to be asked in the quiz along with their answers

const questions = [
  {
    question: "How do you know if a function is being called?",
    answers: [
      { text: "The command '.call' is after the function", correct: false },
      { text: "You do not need to call a function", correct: false },
      { text: "The function is folowed by '()'", correct: true },
      { text: "You yell at the computer to 'DO SOMETHING!!'", correct: false },
    ],
  },
  {
    question: "What can you do to make an element do something when clicked?",
    answers: [
      { text: "All elements are automatically resonsive.", correct: false },
      { text: "You must add an event listener to the element", correct: true },
      { text: "Double click on the element.", correct: false },
      { text: "Set an interval to the element", correct: false },
    ],
  },

  {
    question: "What does the '.push' operator do?",
    answers: [
      { text: "It pushes the code to the web page.", correct: false },
      { text: "It adds indentation to your web page", correct: false },
      {
        text: "It reminds you to get up and do some push-ups!",
        correct: false,
      },
      { text: "It adds an item to the end of an array.", correct: true },
    ],
  },

  {
    question: "What is the strict inequality comparison operator?",
    answers: [
      { text: "=!", correct: false },
      { text: "!==", correct: true },
      { text: "!=", correct: false },
      { text: "!!!", correct: false },
    ],
  },
  {
    question: "What is the strict equality comparison operator?",
    answers: [
      { text: "=", correct: false },
      { text: "==", correct: false },
      { text: "!=", correct: false },
      { text: "===", correct: true },
    ],
  },
  {
    question: "How can you recognize an array?",
    answers: [
      { text: "The items are contained within '[]'", correct: true },
      { text: "The items are contained within '()'", correct: false },
      { text: "The items are contained within '{}' ", correct: false },
      { text: "The items are contained within '<>'", correct: false },
    ],
  },
  {
    question: "How can you recognize that a string?",
    answers: [
      { text: "The items are contained within brackets.", correct: false },
      { text: "The items are contained within parentheses.", correct: false },
      { text: "The items are contained within curly braces.", correct: false },
      { text: "The items are contained within quotes.", correct: true },
    ],
  },
  {
    question: "What does 'JS' stand for?",
    answers: [
      { text: "JavaScript", correct: true },
      { text: "JumboScript", correct: false },
      { text: "Just Saying", correct: false },
      { text: "Jesus' Scribes", correct: false },
    ],
  },
  {
    question: "How fun is coding?",
    answers: [
      { text: "Fun", correct: true },
      { text: "Super fun", correct: true },
      { text: "The most fun", correct: true },
      { text: "Not fun at all", correct: false },
    ],
  },
];

//create function to render the question and corresponding answers
function renderQuestion(newCurrentQuestion) {
  currentQuestionIndex = newCurrentQuestion;
  answers.empty();
  questionsText.text(questions[newCurrentQuestion].question);
  questions[newCurrentQuestion].answers.forEach((answer, i) => {
    answers.append(
      `<button id=${i} class="answerButtons">${answer.text}</button>`
    );
  });
  var answerButtons = $(".answerButtons");
  //create event listener for the answerButtons
  answerButtons.on("click", function (event) {
    const chosenButtonIndex = event.target.id;

    //look up the correct value for chosenButtonIndex
    const isCorrect =
      questions[newCurrentQuestion].answers[chosenButtonIndex].correct;

    //if correct fire correctAnswer() else fire incorrectAnswer()
    if (isCorrect) {
      correctAnswer();
    } else {
      incorrectAnswer();
    }
  });
}
function correctAnswer() {
  points = points + 10;
  var newIndex = currentQuestionIndex + 1;
  renderQuestion(newIndex);
  console.log("woo!");
}
function incorrectAnswer() {
  var newIndex = currentQuestionIndex + 1;
  renderQuestion(newIndex);
  secondsLeft = secondsLeft - 5;
  console.log("boo!");
}

//place the scores into local storage
function renderScores() {
  localStorage.getItem("#initials", userInitials);
  localStorage.getItem("score", points);
  initials.text = userInitials;

  if (userInitials === "") {
    alert("You must add you initials!");
  }
  var scoreNames = $(
    '<li class="flex-row justify-space-between align-center p-2 ">'
  );
  scoreNames.text(userInitials);
  scoreNames.append(initials, score);

  //save the initials input to the local storage and render it to the highscores
  localStorage.setItem("#initials", userInitials);
  localStorage.setItem("score", score);
}

function endGame() {
  scoreArea.show();
  questionBox.hide();
  timer.text("GAME OVER");
}

//assign function to the see high scores button
hsButton.on("click", function () {
  alert("HIGH SCORES:");
});
//assign function to the submit score button
submitButton.on("click", function () {
  renderScores();
});
//assign function to the try again button
resetButton.on("click", function () {
  startButton.show();
  hsButton.show();
  paraBox.show();
  score.hide();
  timer.hide();
  scoreArea.hide();
  questionsText.hide();
  questionBox.hide();
});
//start the game on the click of start button
startButton.on("click", function () {
  startButton.hide();
  hsButton.hide();
  paraBox.hide();
  score.show();
  timer.show();
  questionsText.show();
  questionBox.show();
  qNum = 0;
  renderQuestion(0);
  startTimer();
});
