//declare variables
var score = 0;
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var quizBtn = document.querySelector("#quiz");
var allQuestions = [
    {
        question: "What does HTML stand for?" , 
        choices: ["Hometext Markup Language", "Hypetext Markup Language", "Hyperlink Text Markup Language"],
        answer: "Hypetext Markup Language"
    },
    {
        question: "The bootstrap grid system is based on how many columns?" , 
        choices: ["9", "6", "12"],
        answer: "12"
    },
    {
        question: "What does CSS stand for?" , 
        choices: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "How do you create a function in JavaScript" , 
        choices: ["function = myFunction()", "function: myFunction()", "function myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "What is the correct way to write an array in JavaScript" , 
        choices: ["var num = '1','2','3';", "var num = ['1','2','3']", "var num =('1','2','3')"],
        answer: "var num = ['1','2','3']"
    },
    
]






var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;
var timeLeft = 75;



function startQuiz() {
  mainEl.append(bodyEl);
  showQuestion()

  var quizInterval = setInterval(function() {
    if (timeLeft === 0) {
      clearInterval(quizInterval);
      //TODO redirect to enter high score 
    } else {
      timeLeft--;
      timeEl.textContent = "Time: " + timeEL;
    }

  }, 1000);
}

startQuiz();

quizBtn.addEventListener("click", startQuiz);

function showQuestion() {
    
    //clear out existing question on page
    //show the question add htmml element to page
    //for every answer create a div with a button and answer adding 4 or more elements to page
    //attach a event listner to all the events similar to quizbtn 
    
}

function chooseAnswer() {
    //get current question
    //get answer that they selected
    //figure out if answer is correct
    //if answer is correct more to next question
    //if incorrect deduct 10 sec 
    //after choose answers and out of questions move to high score page
}