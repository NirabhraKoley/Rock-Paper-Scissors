var userScore = 0;
var computerScore = 0;
var move = 4;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.getElementById(".score-board");
var result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset = document.getElementById("reset-btn");
const move_left = document.getElementById("left");
const whoWin = document.querySelector(".who-win");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter) {
  if (letter === "r") {
    return "ROCK";
  }
  if (letter === "p") {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )} ${smallUserWord} beats ${convertToWord(
    computerChoice
  )} ${smallCompWord} .You WIN!`;
  left.innerHTML = move;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    computerChoice
  )} ${smallCompWord} beats ${convertToWord(
    userChoice
  )} ${smallUserWord} .You LOSE!`;
  left.innerHTML = move;
}
function draw(userChoice, computerChoice) {
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )} ${smallUserWord} equal ${convertToWord(
    computerChoice
  )} ${smallCompWord} .Its a DRAW!`;
  left.innerHTML = move;
}
function resetBtn() {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `Paper covers rock. You win!`;
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
reset.addEventListener("click", function () {
  resetBtn("reset-btn");
});
function winner(userScore, computerScore) {
  if (userScore > computerScore) {
    return `User`;
  }
  if (userScore == computerScore) {
    return "Draw";
  } else {
    return `Computer`;
  }
}
function update() {
  move--;
  if (move < 0) {
    move = 5;
    whoWin.innerHTML = winner(userScore, computerScore);
    userScore = 0;
    computerScore = 0;
  }
}
function main() {
  rock_div.addEventListener("click", function () {
    game("r");
    update();
  });
  paper_div.addEventListener("click", function () {
    game("p");
    update();
  });
  scissors_div.addEventListener("click", function () {
    game("s");
    update();
  });
}
main();
