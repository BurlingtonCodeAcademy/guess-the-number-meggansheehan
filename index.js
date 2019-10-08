const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}


async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  process.exit();
}


const lowerLimit = 1;
const upperLimit = 100;
const tries = 20;
const answer = math.floor(math.random () * (upperLimit - lowerLimit + 1)) + lowerLimit;
const guess = '';
const message = 'Guess a number between ' + lowerLimit + 'and' + upperLimit + ':';

    while (isFinite(guess) && guess != '') {
        guess = +guess;
        if (guess < lowerLimit) {
            alert('Your guess should not be lower than' + lowerLimit + '.');
        }
    else if (guess > upperLimit) {
        alert('Your guess should not be greater than' + upperLimit + '.');
    }
    else if (guess < answer) {
        alert('Too LOW');
    }
    else if (guess > answer) {
        alert('Too HIGH');
    }
    else {
        alert ('Winner Winner Chicken Dinner');
        break;
    }
}  
tries = tries - 1; 

if (tries === 0) {
    alert('You have no more tries');
}