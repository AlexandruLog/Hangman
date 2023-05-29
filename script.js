const hangmanWord = document.getElementById("set-hangman-word");
let userHealth = 7;
let word = [];

function setHangmanWord() {
  generateWordSpaces();
  healthStatus();
}

function generateWordSpaces() {
  for (let index = 0; index < hangmanWord.value.length; ++index) {
    const newSpace = document.createElement("li");
    word[index] = newSpace;
    newSpace.textContent = "_";
    document.querySelector(".hangman-details ul").appendChild(newSpace);
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
  if (userLetter.value == "") {
    alert("Introduceti o litera.");
  } else {
    for (let j = 0; j < lettersUsed.length; ++j) {
      if (lettersUsed[j] == userLetter.value) {
        wasUsed = true;
      }
    }
    if (wasUsed == false) {
      for (let index = 0; index < hangmanWord.value.length; ++index) {
        if (userLetter.value == hangmanWord.value[index]) {
          word[index].textContent = userLetter.value;
          ++foundedLetter;
          exists = true;
        }
      }
    } else if (wasUsed == true) {
      alert("Oops! Ai folosit deja aceasta litera.");
      ++userHealth;
    }
    lettersUsed[usedPos++] = userLetter.value;
    console.log(foundedLetter);
    checkLetterExistance();
  }
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
