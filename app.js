var isGameOver;
function initGame() {
isGameOver = false;
activePlayer = 0;
score = [0, 0];
roundScore = 0;
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
document.querySelector(".dice").style.display = "none";
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";
document.querySelector(".player-0-panel").classList.remove('winner');
document.querySelector(".player-1-panel").classList.remove('winner');
};
initGame();

// Тоглогчийн ээлжийг хадгалдаг хувьсагч
var activePlayer;
// Тоглогчийн цуглуулсан оноог хадгалдаг хувьсагч
var score;
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалдаг хувьсагч
var roundScore;
// Шооны аль талаараа буусныг хадгалдаг хувьсагч (value 1-6 random)
var diceNumber = Math.floor(Math.random() * 6) + 1;
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
if(isGameOver !== true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "d-" + diceNumber + ".png";
    if (diceNumber !== 1) {
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else {
        switchToNextPlayer();
    }
}
else {
    alert("Game is over. Please click NEW GAME to play again")
}
});

document.querySelector(".btn-hold").addEventListener("click", function () {
if(isGameOver !== true) {
    score[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = score[activePlayer]; 
    if(score[activePlayer] >= 100) {
    isGameOver = true;
    document.getElementById('name-' + activePlayer).textContent = "WINNER!!!"
    document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove('active');
    }
    else {
        switchToNextPlayer(); 
    }
 
}
else {
    alert("Game is over. Please click NEW GAME to play again")
}
})

function switchToNextPlayer() {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", initGame);
