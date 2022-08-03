// init new date object with value jan 1 1800
const START = new Date(1800, 0, 1);
const END = new Date(2099, 12, 31);
let CORRECT = 0;
let TOTAL = 0;

let currentDateToGuess = generateRandomDate();
const dateSpan = document.getElementById('date-span');
dateSpan.innerHTML = dateToString();
const answerSpan = document.getElementById('answer-span');

function generateRandomDate(){
    let randomDate = new Date(START.getTime() + Math.random() * (END.getTime() - START.getTime()));
   return randomDate;
}

function dateToString(){
    return `${currentDateToGuess.getMonth() + 1}/${currentDateToGuess.getDate()}/${currentDateToGuess.getFullYear()}`;
}

function getDayOfWeekFromDate(date){
    let day = date.getDay();
    return day;
}

function newDate(){
    currentDateToGuess = generateRandomDate();
    dateSpan.innerHTML = dateToString();
}

function updateStats(){
    document.getElementById('correct-span').innerHTML = `Correct: ${CORRECT}`;
    document.getElementById('total-span').innerHTML = `Total: ${TOTAL}`;
    document.getElementById('percent-span').innerHTML = `Percent: ${Math.round((CORRECT / TOTAL) * 100)}%`;
}

function checkGuess(){
    let guess = document.getElementById('guess').value;
    let actual = getDayOfWeekFromDate(currentDateToGuess);
    answerSpan.innerHTML = guess == actual ? `Correct!` : `Incorrect! Actual was ${actual}`;
    document.getElementById('guess').value = '';
    CORRECT = (guess == actual) ? CORRECT + 1 : CORRECT;
    TOTAL++;
    updateStats();
    newDate();
}