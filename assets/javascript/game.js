//Uriels edits
var computerNumber;
var crystalOneValue;
var crystleTwoValue;
var crystalThreeValue;
var crystalFourValue;
var totalScore;
var wins = 0;
var lose = 0;

//show scores on screen
function updateScrren(id, val) {
    document.getElementById(id).innerHTML = val;
}
$('.crystal').click(function(evt){
    totalScoreUpdate(this.id);
});

//function to update total score
function totalScoreUpdate (theIdofCrystal) {
    if (theIdofCrystal === "crystalOne") {
        totalScore = totalScore + crystalOneValue;
    } else if (theIdofCrystal === "crystalTwo"){
        totalScore = totalScore + crystleTwoValue;
    } else if (theIdofCrystal === "crystalThree"){
        totalScore = totalScore + crystalThreeValue;
    } else {
        totalScore = totalScore + crystalFourValue;
    }
    updateScreen("totalScore", totalScore);

    checkGameStatus();
}

function checkGameStatus() {
     if (totalScore > computerNumber) {
        updateScreen("playerStatus", "You lost the game.");
        lsoe = lose = 1;
        updateScreen("loseCounter", lose);
        startGame();
                                        
    } else if (totalScore === computerNumber) {
    updateScreen("playerStatus", "You won this game!");
    wins = wins + 1;
    updateScreen("winCounter", wins);
    startGame();                
    }
}

//function to generate random number
function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min) + min));
}

function startGame(){
    computerNumber = randomNumber(19, 120);    
    crystalOneValue = randomNumber(1, 12);
    crystleTwoValue = randomNuber(1, 12);
    crystalThreeValue = randomNumber(1, 12);
    crystalFourValue = randomNumber(1, 12);
    totalScore = 0;
    updateScreen("numberToGuess", computerNumber);
    updateScreen("totalScore", totalScore);
}

startGame();