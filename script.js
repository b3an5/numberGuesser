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
var gif = document.querySelector('.gif');
var minRange = parseInt(userMin.value);
var maxRange = parseInt(userMax.value);
var parsedMin = parseInt(userMin.value);
var parsedMax = parseInt(userMax.value);

var generateNumber = function(){
  return Math.ceil(Math.random() * (parsedMax - parsedMin)) + parsedMin;
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
    resetButton.disabled = false;
  }  else {
    guessButton.disabled = false;
    clearButton.disabled = false;
    resetButton.disabled = false;
  };
};

function enableBottomButtons() {
  if (userMax.value === '') {
    rangeButton.disabled = true;
  } else {
    rangeButton.disabled = false;
  };
};

function submitGuess(event) {
  event.preventDefault();
  var parsedMin = parseInt(userMin.value);
  var parsedMax = parseInt(userMax.value);
  var parsedInteger = parseInt(textGuess.value);
  number.innerText = parsedInteger;
  if (parsedInteger > randomNumber && parsedInteger < (parsedMax + 1) ) {
    inputReaction.innerText = 'That is too High';
    // gif.disabled = true;
    console.log('maxRange', maxRange);
    console.log('if1');
  } else if (parsedInteger < randomNumber && parsedInteger > (parsedMin - 1)) {
    inputReaction.innerText = 'That is too Low';
    // gif.disabled = true
    console.log('if2')
  } else if (parsedInteger === randomNumber) {
    inputReaction.innerText = 'WINNER WINNER CHICKEN DINNER! Press Reset to Increase the Range';
    parsedMax += 10;
    parsedMin -= 10;
    randomNumber = generateNumber();
    console.log('if3')
    console.log('new random number:', randomNumber)
    console.log('New Parsed Max:', parsedMax)
  //   inputReaction.addEventListener('click', function () {
  //   gif.classList.toggle('display');
  // });
  } else {
    console.log('else');
    inputReaction.innerText = 'ERROR!!!Please Select a Number Within the Range'
    };
  textGuess.value = '';
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
};

function userNumberSubmit(event) {
  event.preventDefault();
  console.log('parsed function not broken')
  number.innerText = '--';
  var parsedMin = parseInt(userMin.value);
  var parsedMax = parseInt(userMax.value);
  console.log('parsed min:', parsedMin);
  console.log('parsed max:', parsedMax);
  randomNumber = generateNumber();
  console.log(randomNumber);
};







