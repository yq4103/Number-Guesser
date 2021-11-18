let prompt = require("prompt-sync")();

let randomNum = Math.floor(Math.random() * 101);

let answer = prompt("Guess a number, choose from 0 to 100: ");

const guess = function() {
  
  let attempts = 0;
  let previousAnswers = [];

  do {
    if (!Number.isInteger(Number(answer)) || parseInt(answer) < 0 || parseInt(answer) > 100) {
      console.log("Please enter an interger from 0 to 100.");
      answer = prompt("Guess a number, choose from 0 to 100: ");
    } else if (previousAnswers.includes(answer)) {
      console.log("You have already guessed this number.");
      answer = prompt("Guess a number, choose from 0 to 100: ");
    } else if (parseInt(answer) < randomNum) {
      attempts++;
      previousAnswers.push(answer);
      console.log("Guess higher.");
      answer = prompt("Guess a number, choose from 0 to 100: ");
    } else if (parseInt(answer) > randomNum) {
      attempts++;
      previousAnswers.push(answer);
      console.log("Guess lower.");
      answer = prompt("Guess a number, choose from 0 to 100: ");
    } else if (parseInt(answer) === randomNum) {
      attempts++;
      console.log(`You got it in ${attempts} attempts.`);
      break;
    }
  } while (answer !== randomNum);
};

guess();

