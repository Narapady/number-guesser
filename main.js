let min = 1,
  max = 10,
  winningNum = 3,
  guessesLeft = 3;

const guessBtn = document.getElementById("guess-btn"),
  guessInput = document.getElementById("guess-input"),
  message = document.querySelector(".message"),
  game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num");

// Assign UI numbers
minNum.innerText = min;
maxNum.innerText = max;

game.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("play-again")) {
    document.location.reload();
  }
});

guessBtn.addEventListener("click", (e) => {
  // turn the input into integer
  const guess = parseInt(guessInput.value);
  // check if number is less than min, greater than max, or NaN
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}.`, "red");
  }
  // if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! You Win!`);
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      gameOver(false, `You Lost! Correct number is ${winningNum}`);
    } else {
      setMessage(`Incorrect. You have ${guessesLeft} guesses left`, "red");
    }
  }
  guessInput.value = "";
  guessInput.focus();
  e.preventDefault();
});

function setMessage(msg, color) {
  message.innerText = msg;
  message.style.color = color;
  guessInput.style.borderColor = color;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  setMessage(msg, color);

  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}
