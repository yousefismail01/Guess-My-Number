'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    displayMessage('No Number!');

    //when player wins
  } else if (guess === number) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //guess wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game...');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    displayMessage('Start Guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
