//declare variables
var score = 0;
var timeEl = document.querySelector(".time");
var quizBtn = document.querySelector("#quiz");

var allQuestions = [
    {
        question: "What does HTML stand for?" , 
        choices: ["Hometext Markup Language", "Hypertext Markup Language", "Hyperlink Text Markup Language"],
        answer: 1
    },
    {
        question: "The bootstrap grid system is based on how many columns?" , 
        choices: ["9", "6", "12"],
        answer: 2
    },
    {
        question: "What does CSS stand for?" , 
        choices: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        answer: 0
    },
    {
        question: "How do you create a function in JavaScript" , 
        choices: ["function = myFunction()", "function: myFunction()", "function myFunction"],
        answer: 1
    },
    {
        question: "What is the correct way to write an array in JavaScript" , 
        choices: ["var num = '1','2','3';", "var num = ['1','2','3']", "var num =('1','2','3')"],
        answer: 1
    }
    
];
function pageLoad()
{
    $("#divScoreContainer").hide();
}

var mainEl = document.getElementById("main");
var timer = document.getElementById("timer");
var bodyEl = document.createElement("div");

var i = 0;
var timeLeft = 75;

var currentQuestion=0;

function startQuiz() {
  mainEl.append(bodyEl);


  $("#section").hide();
  $("#divScoreContainer").hide();
  $("#divQuizContent").show();
  showQuestion()

  var quizInterval = setInterval(function() {
    if (timeLeft === 0) {
      clearInterval(quizInterval);
      endgame(); 
    } else {
      timeLeft--;
      timer.innerHTML = "Time: " + timeLeft;
    }

  }, 1000);
};

function endgame() {
    clearInterval(timer);
}

//startQuiz();

quizBtn.addEventListener("click", startQuiz);

//function showQuestion() {
  //  $("button").click(function() {
    //    $("div").empty();
    //});
    
    //clear out existing question on page
    //show the question add htmml element to page
    //for every answer create a div with a button and answer adding 4 or more elements to page
    //attach a event listner to all the events similar to quizbtn 
    
//}

function showQuestion() {
    //alert("show question");
    const question = allQuestions[currentQuestion];
    var questionText = "<p>"+question.question+"</p>";
    for (var i in question.choices)
    {
        questionText+= "<button  onClick='answer("+i+")'>"+question.choices[i]+"</button><br/>";
    }
    //alert(questionText);
    $("#divQuizContent").html(questionText);
};
var numCorrect=0;
function answer(idx)
{
    if (idx==allQuestions[currentQuestion].answer)
    {
        alert("correct");
        numCorrect++;
    }else{
        timeLeft -= 10;
        alert("wrong: "+timeLeft);
    }
    allQuestions[currentQuestion].answerGiven = idx;
    currentQuestion++;
    if (currentQuestion===allQuestions.length)
    {
        endQuiz();
    }else{
        showQuestion();
    }
}
var finalScore = 0;
function endQuiz()
{
    finalScore=(numCorrect===0?0:timeLeft);
    endgame();
    $("#divQuizContent").hide();
    $("#finalScore").html ("Score is: "+finalScore);
    $("#section").hide();
    $("#divScoreContainer").show();
    alert("Score is: "+finalScore);
}
function submit()
{
    const initials = $("#initials").val();

    const obj = {initials: initials, highScore: finalScore};
    localStorage.setItem("highscore", JSON.stringify(obj));
    window.location.replace ("highscore.html");
}


/*
function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    
    choiceBtn.addEventListener("click", chooseAnswer);

function chooseAnswer() {
    var selectedChoices = document.querySelector('click');
        
        var answer = selectedChoices.value;
        if(questions[allQuestion].answer === answer){
           //correct 
        } 
        else (questions[allQuestion].answer !== answer); {
            //wrong and minus 10 second
        }
        
        allQuestion++;
        if(currentQuestion === allQuestions - 1){
            nextButton.textContent = 'Finish';
        }
        if(currentQuestion === allQuestions){
            container.style.display = 'none';
            resultCont.style.display = '';
            resultCont.textContent = 'Your Score: ' + score;
            return;
        }
        chooseAnswer(currentQuestion);
    }
    
    chooseAnswer(currentQuestion);
    //get current question
    //get answer that they selected
    //figure out if answer is correct
    //if answer is correct more to next question
    //if incorrect deduct 10 sec 
    //after choose answers and out of questions move to high score page
}

function getScore() {

}
*/