const hangmanWord = document.getElementById("set-hangman-word");
let word = [];
let userHealth = 7;

function setHangmanWord() {
  generateWordSpaces();
  healthStatus();
}

function generateWordSpaces() {
  for (let index = 0; index < hangmanWord.value.length; ++index) {
    const newLetter = document.createElement("li");
    word[index] = newLetter;
    newLetter.textContent = "_";
    document.querySelector(".hangman-details ul").appendChild(newLetter);
  }
}

function healthStatus() {
  document.getElementById("user-health").textContent = "Vieti: " + userHealth;
}

const lettersUsed = [];
let usedPos = 0;
let foundedLetter = 0;
let exists = false;

function guessLetter() {
  const userLetter = document.getElementById("guess-hangman-letter");
  let wasUsed = false;
  for (let j = 0; j < lettersUsed.length; ++j) {
    if (lettersUsed[j] === userLetter.value) {
      wasUsed = true;
    }
  }
  if (wasUsed == false) {
    for (let index = 0; index < hangmanWord.value.length; ++index) {
      if (userLetter.value === hangmanWord.value[index]) {
        exists = true;
        ++foundedLetter;
        word[index].textContent = userLetter.value;
      }
    }
  } else {
    alert("Oops! Ai folosit deja aceasta litera.");
    ++userHealth;
  }
  lettersUsed[usedPos++] = userLetter.value;
  console.log(foundedLetter);
  checkLetterExistance();
}

function checkLetterExistance() {
  if (exists === true) {
    if (foundedLetter === word.length) {
      document.write("Felicitari! Ai ghicit cuvantul!");
    }
    exists = false;
  } else if (exists === false) {
    --userHealth;
    if (userHealth === 0) {
      document.write("Ai pierdut! Incearca din nou!");
    } else {
      healthStatus();
    }
  }
}
