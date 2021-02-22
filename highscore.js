var ulScore= document.querySelector(".listScore");


function clearHighScore() {
    localStorage.removeItem("allScores");
  }

// Local Storage
var allScores = localStorage.getItem("allScores");
allScores= JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i <allScores.length; i++) {
        var scoreLi = document.createElement("li");
        scoreLi.setAttribute("id","highScore initials");
        scoreLi.textContent = allScores[i].initials + " " + allScores[i].highScore;
        ulScore.appendChild(scoreLi);
    }
}

