let Score = {};
if (localStorage.getItem("score") === null) {
  score = {
    wins: 0,
    lose: 0,
    tie: 0,
  };
} else {
  score = JSON.parse(localStorage.getItem("score"));
}

function resetScore() {
  score.wins = 0;
  score.lose = 0;
  score.tie = 0;
  alert(`Now, Start the game again!!!`);
  localStorage.removeItem("score");
  document.querySelector(".your-score").innerHTML = "";
  document.querySelector(".computer-score").innerHTML = "";
  document.querySelector(".moves").innerHTML = "";
  document.querySelector(".live-score").innerHTML = "";
}
function checkPossibility(userChoice) {
  const randomNumber = Math.random();
  let computerChoice = "";
  let result = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerChoice = "Scissors";
  }

  switch (userChoice) {
    case "Rock":
      if (computerChoice === "Rock") {
        result = "Tie!!!";
      } else if (computerChoice === "Paper") {
        result = "You Lose.";
      } else {
        result = "You Won!";
      }
      break;
    case "Paper":
      if (computerChoice === "Paper") {
        result = "Tie!!!";
      } else if (computerChoice === "Rock") {
        result = "You Won!";
      } else {
        result = "You Lose.";
      }
      break;
    case "Scissors":
      if (computerChoice === "Scissors") {
        result = "Tie!!!";
      } else if (computerChoice === "Paper") {
        result = "You Won!";
      } else {
        result = "You Lose.";
      }
      break;
  }
  if (result == "You Won!") {
    score.wins += 1;
  } else if (result == "You Lose.") {
    score.lose += 1;
  } else {
    score.tie += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  updateScores(userChoice, computerChoice, result);
  /*
alert(`You picked ${userChoice}, Computer picked ${computerChoice} => ${result}
ScoreBoard:
 Wins: ${score.wins}, Loses: ${score.lose} and Ties: ${score.tie}`);
 */
}
function updateScores(userChoice, computerChoice, result) {
  document.querySelector(".your-score").innerHTML = `Your Score: ${score.wins}`;
  document.querySelector(
    ".computer-score"
  ).innerHTML = `Computer Score: ${score.lose}`;
  document.querySelector(
    ".moves"
  ).innerHTML = `Your move: <img src="images/${userChoice}-emoji.png" class="image-icon"/> & Computer move: <img src="images/${computerChoice}-emoji.png" class="image-icon"/>`;
  document.querySelector(".live-score").innerHTML = `${result}`;
}
let isAutoPlaying = false;
let id;
function autoPlay() {
  if(!isAutoPlaying) {
    id = setInterval(() => {
      let userChoice='';
      const randomNumber = Math.random();
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        userChoice = "Rock";
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        userChoice = "Paper";
      } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        userChoice = "Scissors";
      }
      checkPossibility(userChoice);
    },1000);
    isAutoPlaying = true;
  }else {
     clearInterval(id);
     isAutoPlaying = false;
  }
}
 /*function checkKey(event) {
                if(event.key === 'Enter') {
                    calculate();
                }
            }
            function calculate() {
                let costOfOrders = Number(document.querySelector('.cost').value);
                if(costOfOrders >= 40) {
                    costOfOrders = costOfOrders;
                }else {
                    costOfOrders = costOfOrders + 10;
                }
                document.querySelector('.total-bill').innerHTML = `$${costOfOrders}`;
            }*/

