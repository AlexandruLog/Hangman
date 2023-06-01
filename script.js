const inputSetWord = document.getElementById("input-set-word");
const inputCheckLetter = document.getElementById("guess-letter");
let userHealth = 7;
let word = [];

function setWord() {
  document.querySelector(".setWord button").disabled = true;
  if (inputSetWord.value) {
    //generating the spaces
    for (let i = 0; i < inputSetWord.value.length; ++i) {
      const newSpace = document.createElement("li");
      newSpace.textContent = "_";
      word[i] = newSpace;
      document.querySelector(".game-status ul").appendChild(word[i]);
    }
    document.getElementById("health-status").textContent = "Life: " + userHealth;
  }
}

let expired = []; // save used letters;
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
          console.log("here");
        }
      }
      if (found == false) {
        --userHealth;
      }
    } else {
      alert(inputCheckLetter.value + " was already used!");
    }
    if (checkIfExpired() === false) {
      expired[expiredIndex++] = inputCheckLetter.value; // add in expired letters;
    }
    document.getElementById("health-status").textContent = "Life: " + userHealth;
    checkGameStatus();
  }
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
