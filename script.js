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
var quizInterval;

//Quiz start
function startQuiz() {
     mainEl.append(bodyEl);


    $("#section").hide();
    $("#divScoreContainer").hide();
    $("#divQuizContent").show();
    showQuestion()

    //set timer
    quizInterval = setInterval(function () {
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
    clearInterval(quizInterval);
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
    questionText += "<div id='result'></div>"

    $("#divQuizContent").html(questionText);
};

//as questions are asked determines if correct or wrong and infoms user and if wrong deduct time

var numCorrect = 0;

function answer(idx) {
    var isCorrect = idx === allQuestions[currentQuestion].answer
    if (isCorrect) {
        numCorrect++;
    } else {
        timeLeft -= 10;
    }
    allQuestions[currentQuestion].answerGiven = idx;
    currentQuestion++;
    if (currentQuestion === allQuestions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
    var result = document.getElementById("result");
    if (isCorrect) {
        result.innerHTML = "Correct!"
    } else {
        result.innerHTML = "Wrong!"
    }
};


//end of quiz show final score
var finalScore = 0;
function endQuiz() {
    finalScore = (numCorrect === 0 ? 0 : timeLeft);
    endgame();
    $("#divQuizContent").hide();
    $("#finalScore").html("Score is: " + finalScore);
    $("#section").hide();
    $("#divScoreContainer").show();

};

// allow user to enter intials to save highscore and go to highscore page 

   submit.addEventListener("click",function(){     
    var initialName = $("#initials").val();

    if (initialName === "") {
       console.log("It cannot be empty");
    }
    else {
        var user = {
            initials: initialName ,
            highScore: finalScore
        };

       
        var allScores = localStorage.getItem("allScores");
        if (allScores=== null) {
            allScores = [];
        }
        else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(user);
        var scoreNew = JSON.stringify(allScores);
        localStorage.setItem("allScores", scoreNew);
        //redirecting user to highscore page
        window.location.replace("./highscore.html");
        
    }
});
