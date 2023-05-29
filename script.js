let word = [];
let userHealth = 7;

function setHangmanWord() {
  generateWordSpaces();
  healthStatus();
}

function generateWordSpaces() {
  const hangmanWord = document.getElementById("set-hangman-word");
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

//Check letter function
let foundedLetter = 0;
let exists = false;

function guessLetter() {
  const hangmanWord = document.getElementById("set-hangman-word");
  const userLetter = document.getElementById("guess-hangman-letter");
  for (let index = 0; index < hangmanWord.value.length; ++index) {
    if (userLetter.value === hangmanWord.value[index]) {
      exists = true;
      ++foundedLetter;
      word[index].textContent = userLetter.value;
    }
  }
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
