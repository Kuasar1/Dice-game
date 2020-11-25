// Тоглогчийн ээлжийг хадгалдаг хувьсагч
var activePlayer = 1;
// Тоглогчийн цуглуулсан оноог хадгалдаг хувьсагч
var score = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалдаг хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалдаг хувьсагч (value 1-6 random)
var dice = Math.floor(Math.random()*6)+1;
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";