var userScore = 0;
var computerScore = 0;
var move = 5;
var pointer = 0;
var round = [];
var same = 0;
var max = 0;
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
const next = document.getElementById("next-btn");
var firstRound = document.querySelector(".round-result-1");
var SecRound = document.querySelector(".round-result-2");
var ThirdRound = document.querySelector(".round-result-3");
var winner_p = document.querySelector(".winner-result_p");

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
  move--;
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
  move--;
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
  move = 5;
  move_left.innerHTML = 5;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `Paper covers rock. You win!`;
  same = 0;
}
function winnerGame()
{
  round.sort();
  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < round.length; i++) 
  {
    for (var j = i; j < round.length; j++) 
    {
      if (round[i] == round[j]) 
      m++;
      if (mf < m) {
        mf = m;
        item = round[i];
      }
    }
    m = 0;
  }
  winner_p.innerHTML = item;
  same++;
}
function nextBtn() {
  round[pointer] = winner(userScore, computerScore);
  resetBtn();
  if (pointer == 0) {
    firstRound.innerHTML = round[pointer];
  } else if (pointer == 1) {
    SecRound.innerHTML = round[pointer];
    if (round[0] == round[1]) {
      winner_p.innerHTML = round[0];
      same++;
    }
  } else {
    ThirdRound.innerHTML = round[pointer];
    winnerGame();
  }
  pointer++;
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

next.addEventListener("click", function () {
  nextBtn("next-btn");
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
  if (move == 0) {
    whoWin.innerHTML = winner(userScore, computerScore);
  }
}
function main() {
  rock_div.addEventListener("click", function () {
    if (move > 0) {
      if (same == 0) {
        game("r");
        update();
      }
    }
  });
  paper_div.addEventListener("click", function () {
    if (move > 0) {
      if (same == 0) {
        game("p");
        update();
      }
    }
  });
  scissors_div.addEventListener("click", function () {
    if (move > 0) {
      if (same == 0) {
        game("s");
        update();
      }
    }
  });
}
main();
