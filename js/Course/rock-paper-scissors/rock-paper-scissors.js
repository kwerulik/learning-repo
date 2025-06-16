let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId 

function autoPlay() {
  const buttonDisplay = document.querySelector('.auto-play-button')
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove()
      playGame(playerMove)
    },1000)
    isAutoPlaying= true
    buttonDisplay.innerHTML = 'Stop Playing'
  } else {
    clearInterval(intervalId)
    isAutoPlaying = false
    buttonDisplay.innerHTML = 'Auto Play'
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock')
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper')
})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors')
})

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('rock')
  } else if(event.key === 'p'){
    playGame('paper')
  } else if (event.key === 's') {
    playGame('scissors')
  } else if (event.key === 'a') {
    autoPlay()
  } else if (event.key === 'Backspace') {
    resetScore()
  }
})

document.querySelector('.auto-play-button').addEventListener('click', () => {
  autoPlay();
})

document.querySelector('.reset-score-button').addEventListener('click', () => {
  resetScore()
})

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "scissors") {
      result = "You lose.";
    } else if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins++;
  } else if (result === "You lose.") {
    score.losses++;
  } else if (result === "Tie.") {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
      <img class="move-icon" src="img/${playerMove}.png">
      <img class="move-icon" src="img/${computerMove}.png">
      Computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function resetScore(){
  const messageContainer = document.querySelector('.confirmation-container')
  messageContainer.classList.remove("hidden");

  document.querySelector('.js-yes-button').addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    updateScoreElement(); 
    messageContainer.classList.add("hidden");
    return
  })
  document.querySelector('.js-no-button').addEventListener('click', () => {
    messageContainer.classList.add('hidden')
    return
  }) 
}

