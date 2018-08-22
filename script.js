var textGuess = document.querySelector('.text-guess');
var userMax = document.querySelector('.max')
var userMin = document.querySelector('.min')
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var lastGuess = document.querySelector('.last-guess');
var number = document.querySelector('.number');
var inputReaction = document.querySelector('.input-reaction');
var rangeButton = document.querySelector('.range-button');
var minRange = 1 || userMax;
var maxRange = 100 || userMin;

var generateNumber = function(){
  return Math.ceil(Math.random() * (maxRange - minRange)) + minRange;
}
var randomNumber = generateNumber();
console.log(randomNumber);

textGuess.addEventListener('keyup', enableTopButtons);
userMax.addEventListener('keyup', enableBottomButtons);
guessButton.addEventListener('click', submitGuess);
clearButton.addEventListener('click', clearText);
resetButton.addEventListener('click', reset);
rangeButton.addEventListener('click', userNumberSubmit);

function enableTopButtons() {
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

function enableBottomButtons() {
  if (userMax.value === '') {
    rangeButton.disabled = true;
  } else {
    rangeButton.disabled = false;
  }
};

function submitGuess(event) {
  event.preventDefault();
  var parsedInteger = parseInt(textGuess.value);
  number.innerText = parsedInteger;
  if (parsedInteger > randomNumber && parsedInteger < 101 ) {
    inputReaction.innerText = 'That is too High';
  } else if (parsedInteger < randomNumber && parsedInteger > 0) {
    inputReaction.innerText = 'That is too Low';
  } else if (parsedInteger === randomNumber) {
    inputReaction.innerText = 'WINNER WINNER CHICKEN DINNER!!!!! Press reset to make it harder!';
    minRange -= 10;
    maxRange += 10;
  } else {
    inputReaction.innerText = 'ERROR!!!Please Select a Number Between 1-100'
    }
  }
  textGuess.value = '';

function clearText(event) {
  event.preventDefault();
  textGuess.value = '';
  };

function reset(event) {
  event.preventDefault();
  randomNumber = generateNumber();
  console.log(randomNumber);
  number.innerText = '--';
  textGuess.value = '';
}

function userNumberSubmit(event) {
  event.preventDefault();
  console.log('parsed function not broken')
  number.innerText = '--';
  var parsedMin = parseInt(userMin.value);
  var parsedMax = parseInt(userMax.value);
  console.log('parsed min:', parsedMin);
  console.log('parsed max:', parsedMax);
};







