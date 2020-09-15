// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input");
message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("play-again")) {
    document.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}`, "red");
  }
  // check of win
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! You Win...`);
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game over. YOU LOST, the correct number is ${winningNum}`
      );
    } else {
      setMessage(`Incorrect, you have ${guessesLeft} guesses left !!`, "red");
      guessInput.value = "";
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  // Play Again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
