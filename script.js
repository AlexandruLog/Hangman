const inputSetWord = document.getElementById("input-set-word");
const inputCheckLetter = document.getElementById("guess-letter");
let userHealth = 7;
let word = [];

function setWord() {
  if (inputSetWord.value) {
    document.querySelector(".setWord").classList.add("hidden");
    document.querySelector(".guessLetterDiv").classList.remove("hidden");
    userHealth = 7;
    for (let i = 0; i < inputSetWord.value.length; ++i) {
      const newSpace = document.createElement("li");
      newSpace.textContent = "_";
      word[i] = newSpace;
      document.querySelector(".game-status ul").appendChild(word[i]);
    }
    document.getElementById("health-status").textContent = "Life: " + userHealth;
  }
}

let expired = []; // used letters;
let expiredIndex = 0;
let guessedContor = 0;

function checkLetter() {
  if (inputCheckLetter.value) {
    let found = false;
    if (checkIfExpired() === false) {
      for (let i = 0; i < inputSetWord.value.length; ++i) {
        if (inputCheckLetter.value == inputSetWord.value[i]) {
          word[i].textContent = inputCheckLetter.value;
          found = true;
          ++guessedContor;
        }
      }
      if (found == false) {
        --userHealth;
      }
    } else {
      document.getElementById("existance-letter-status").textContent =
        inputCheckLetter.value + " was already used!";
      setTimeout(() => {
        document.getElementById("existance-letter-status").textContent = null;
      }, 3000);
    }
    if (checkIfExpired() === false) {
      expired[expiredIndex++] = inputCheckLetter.value; // add in expired letters;
    }
    document.getElementById("health-status").textContent = "Life: " + userHealth;
    checkGameStatus();
  }
  inputCheckLetter.value = null;
}

function checkGameStatus() {
  if (userHealth == 0) {
    document.write("You Lost &#128542; Try again.");
  } else if (guessedContor == inputSetWord.value.length) {
    document.write("Congrats! You guessed the word &#128521;");
  }
}

function checkIfExpired() {
  let exists = false;
  expired.forEach((element) => {
    if (inputCheckLetter.value === element) {
      exists = true;
    }
  });
  return exists;
}
