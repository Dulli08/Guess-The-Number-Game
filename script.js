'use strict';
// Lecture 078

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// The trunc function rounds off the number to a decimal
// Math.random generates a number. THe 20 being multiplied will set the limit, that
// The number should not exceed 20
document.querySelector('.number').textContent = '?';

let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // We have to use this function since all data retrieved is stored as a string
  console.log(guess, typeof guess);

  if (!guess) {
    // We use a NOT operator here, because if the value is zero,
    // It is treated as a false and this statement wont be loaded
    // and by NOT we convert it to TRUE and load it here
    displayMessage('No number.');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!!!');
    // This is the winning scenario
    document.querySelector('body').style.backgroundColor = '#60b347';
    // This will change the background color when the correct colour is guessed
    document.querySelector('.number').style.width = '30rem';
    // You have to always specify the number as a string
    // These styles are saved as inline styles, and we are not changing the css file
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      console.log(`The highscore is ${highScore}.`);
      console.log(`${score} is the score`);
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'The number is too high'
          : 'The number is too low';
      document.querySelector('.guess').value = 0;
    } else {
      displayMessage('You lost the game.');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').value = 0;
    }
  }
});
// We can use a function as the value of another function
// We used a function expression here

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  score = 20;
  displayMessage('Start guessing.');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
