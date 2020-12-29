//declare variables
var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");
var questionThree = document.getElementById("questionThree");
var questionFour = document.getElementById("questionFour");
var questionFive = document.getElementById("questionFive");
var score = 0;
var timeEl = document.querySelector(".time");
var quizBtn = document.querySelector("#quiz");

var allQuestions = [
    {
        question: "What does HTML stand for?" , 
        choices: ["Hometext Markup Language", "Hypetext Markup Language", "Hyperlink Text Markup Language"],
        answer: "Hometext Markup Language"
    },
    {
        question: "The bootstrap grid system is based on how many columns?" , 
        choices: ["9", "6", "12"],
        answer: 2
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
    
];

var mainEl = document.getElementById("main");
var timer;
var bodyEl = document.createElement("div");

var i = 0;
var timeLeft = 75;



function startQuiz() {
 // mainEl.append(bodyEl);
  showQuestion()

  var quizInterval = setInterval(function() {
    if (timeLeft === 0) {
      clearInterval(quizInterval);
      endgame(); 
    } else {
      timeLeft--;
      timer.textContent = "Time: " + timeLeft;
    }

  }, 1000);
};

function endgame() {
    clearInterval(timer);


}

startQuiz();

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
    $("button").click(function() {
        $("div").empty();

    document.getElementById("startButton");
    if (i === allQuestions.length) {
        getscore();
    }
   
});

}
function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    
    choiceBtn.addEventListener("click", chooseAnswer);
}
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


function getScore() {

}