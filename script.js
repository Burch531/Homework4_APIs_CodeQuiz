//declare variables
var score = 0;
var timeEl = document.querySelector(".time");
var quizBtn = document.querySelector("#quiz");

var allQuestions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hometext Markup Language", "Hypertext Markup Language", "Hyperlink Text Markup Language"],
        answer: 1
    },
    {
        question: "The bootstrap grid system is based on how many columns?",
        choices: ["9", "6", "12"],
        answer: 2
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        answer: 0
    },
    {
        question: "How do you create a function in JavaScript",
        choices: ["function = myFunction()", "function: myFunction()", "function myFunction"],
        answer: 1
    },
    {
        question: "What is the correct way to write an array in JavaScript",
        choices: ["var num = '1','2','3';", "var num = ['1','2','3']", "var num =('1','2','3')"],
        answer: 1
    }

];

var mainEl = document.getElementById("main");
var timer = document.getElementById("timer");
var bodyEl = document.createElement("div");

var i = 0;
var timeLeft = 75;

var currentQuestion = 0;
//Quiz start
function startQuiz() {
    mainEl.append(bodyEl);


    $("#section").hide();
    $("#divScoreContainer").hide();
    $("#divQuizContent").show();
    showQuestion()

    //set timer
    var quizInterval = setInterval(function () {
        if (timeLeft === 0) {
            clearInterval(quizInterval);
            endgame();
        } else {
            timeLeft--;
            timer.innerHTML = "Time: " + timeLeft;
        }

    }, 1000);
};

//function to end timer
function endgame() {
    clearInterval(timer);
};

//startQuiz();
quizBtn.addEventListener("click", startQuiz);

function showQuestion() {
    //alert("show question");
    var question = allQuestions[currentQuestion];
    var questionText = "<p>" + question.question + "</p>";
    for (var i in question.choices) {
        questionText += "<button  onClick='answer(" + i + ")'>" + question.choices[i] + "</button><br/>";
    }
    //alert(questionText);
    $("#divQuizContent").html(questionText);
};
//as questions are asked determines if correct or wrong and infoms user and if wrong deduct time
var result = document.getElementById("result");
var numCorrect = 0;
function answer(idx) {
    if (idx === allQuestions[currentQuestion].answer) {
        numCorrect++;
        result.innerHTML = "Correct!"   
    } else {
        timeLeft -= 10;
        result.innerHTML = "Wrong!"
    }
    allQuestions[currentQuestion].answerGiven = idx;
    currentQuestion++;
    if (currentQuestion === allQuestions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
};

//end of quiz show final score
var finalScore = 0;
function endQuiz() {
    finalScore = (numCorrect === 0 ? 0 : timeLeft);
    $("#divQuizContent").hide();
    $("#finalScore").html("Score is: " + finalScore);
    $("#section").hide();
    $("#divScoreContainer").show();
         
};

// allow user to enter intials to save highscore and go to highscore page
function submit() {
    var initials = $("#initials").val();

    var obj = { initials: initials, highScore: finalScore };
    localStorage.setItem("highscore", JSON.stringify(obj));
    window.location.replace("highscore.html");
};


/*

function getScore() {

}
*/