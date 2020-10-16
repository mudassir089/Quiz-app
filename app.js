//increament index and score and set question length
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

//set variables using Id
var startBtn = document.getElementById("start");
var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

// display none container
container.style.display = "none";

//Set Start button
function start() {
  container.style.display = "";
  startBtn.style.display = "none";
}

//Set Quiz app using 'loadQuestion' function
function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = questionIndex + 1 + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

//'loadNextQuestion' button using simple if else statements
function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
  }
  var answers = selectedOption.value;
  if (questions[currentQuestion].answer == answers) {
    score += 10;
  }
  selectedOption.checked = false;
  currentQuestion++;

  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
    nextButton.style.backgroundColor = "green";
  }
  if (currentQuestion == totQuestions) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = "Your Score: " + score + "/" + totQuestions * 10;
  } else {
    loadQuestion(currentQuestion);
  }
}
//Run Quiz App using loadQuestion
loadQuestion(currentQuestion);
