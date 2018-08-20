var textGuess = document.querySelector('.text-guess');
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var lastGuess = document.querySelector('.last-guess');
var number = document.querySelector('.number');
var inputReaction = document.querySelector('.input-reaction');
var minRange = 1;
var maxRange = 100;

var generateNumber = function(){
  return Math.ceil(Math.random() * (maxRange - minRange)) + minRange;
}
var randomNumber = generateNumber()
console.log(randomNumber)

textGuess.addEventListener('keyup', enableButtons);
guessButton.addEventListener('click', submitGuess);
clearButton.addEventListener('click', clearText);
resetButton.addEventListener('click', reset);

function enableButtons() {
  if (textGuess.value === '') {
    guessButton.disabled = true;
    clearButton.disabled = true;
    resetButton.disabled = true;
  }  else {
    guessButton.disabled = false;
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
};

function submitGuess(event) {
  event.preventDefault();
  var parsedInteger = parseInt(textGuess.value);
  number.innerText = parsedInteger;
  if (parsedInteger > randomNumber && parsedInteger < 101) {
    inputReaction.innerText = 'That is too High';
  } else if (parsedInteger < randomNumber && parsedInteger > 0) {
    inputReaction.innerText = 'That is too Low';
  } else if (parsedInteger === randomNumber) {
    inputReaction.innerText = 'WINNER WINNER CHICKEN DINNER!!!!! Press reset to make it harder!';
    minRange -= 10;
    maxRange += 10;
  } else {
    inputReaction.innerText = 'Please Select a Number Between 1-100'
    }
  }
  textGuess.value = '';

function clearText(event) {
  event.preventDefault();
  textGuess.value = '';
  };

function reset(event) {
  event.preventDefault();
  randomNumber = generateNumber()
  console.log(randomNumber)
}




