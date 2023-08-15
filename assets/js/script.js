var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var scoreEl = document.querySelector(".score");
var mainEl = document.querySelector(".quizEl")
var formEl = document.querySelector(".form-group");
var headEl = document.querySelector(".headEl");
var submitButton = document.querySelector(".submit");
var scoreButton =document.querySelector(".score-btn");
var scorelist = document.querySelector("#highscores");
var endScore = document.querySelector("#scorelist");
var hs1 = document.querySelector(".high1");
var hs2 = document.querySelector(".high2");
var hs3 = document.querySelector(".high3");
var button1 = document.querySelector(".answer1");
var button2 = document.querySelector(".answer2");
var button3 = document.querySelector(".answer3");
var button4 = document.querySelector(".answer4");
//sets up a bunch of queryselector variables for various things in the program


var isWin = false;
var timer;
var timerCount;
var highscoreSaver =JSON.parse(localStorage.getItem("Scores")) || [];
//the highscore will either parse and pull the scores from local storage or make itself as an empty array.



var questions = ["Which of these is a binary variable, having two possible values called true and false.", "Which of these is not a programming language?", "What loop must go through at least once?", "What does CSS stand for?"];
var answers1 = ["Array", "Truthify", "isValid", "Boolean"];
var a1 = true;
var answers2 = ["HTML", "Python", "Ruby", "CSS6"];
var a2 =  true;
var answers3 = ["While", "If", "Do-While","else"];
var a3 =  true;
var answers4 = ["Collapsing Style Sheets", "Cascading Style Sheets", "Cascading System Sheet", "Collective Style Sheet"];
var a4 =  true;
var a = [true, true, true, true];
//these variables are containing the questions, the answers, and sets a boolean to check if a question is answered


var correct = [3, 3, 2, 1];
var answered = 0;
var score = 4;
//correct contains the correct answers to each question, answered checks how many questions have been answered, and the score is set to a base of 4, allowing score to range from 0-8


// The init function is called when the page loads 
function init() {
  
}


// The startGame function is called when the start button is clicked
function startGame() {
  a = [true, true, true, true];
  mainEl.style.display = "flex";
  headEl.style.display = "flex";
  resetButton.style.display = "none";
  endScore.style.display = "none";
  score = 4;
  isWin = false;
  answered = 0;
  timerCount = 15;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  setQuestion()
  startTimer()
}


// The winGame function is called when the win condition is met, and then hides or displays various elements from the page
function winGame() {

   mainEl.style.display = 'none';
   headEl.style.display = 'none';
   formEl.style.display = 'block';
  wordBlank.textContent = "Pencils Down! you scored a " + score;
  startButton.disabled = false;
}


// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "Pencils Down! you scored a " + score;
  startButton.disabled = false;
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    if(timerCount < 0){
      timerCount = 0;
    }
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
      winGame();
    }
  }, 1000);
}

// Creates the questions and answers on the screen
function setQuestion() {
  //picks word from words array
  var currentAnswers = answers1;
  button1.textContent = answers1[0];
  button2.textContent = answers1[1];
  button3.textContent = answers1[2];
  button4.textContent = answers1[3];
  if(!a[1]){
    currentAnswers = answers2;
    button1.textContent = answers2[0];
    button2.textContent = answers2[1];
    button3.textContent = answers2[2];
    button4.textContent = answers2[3];
    console.log("in second set");
    a[2] = false;
    a[1] = true;
  }else if(!a[2]){
    currentAnswers = answers3;
    button1.textContent = answers3[0];
    button2.textContent = answers3[1];
    button3.textContent = answers3[2];
    button4.textContent = answers3[3];
    console.log("in third set");
    a[2] = true;
    a[3] = false;
  }else if(!a[3]){
    currentAnswers = answers4;
    button1.textContent = answers4[0];
    button2.textContent = answers4[1];
    button3.textContent = answers4[2];
    button4.textContent = answers4[3];
    console.log("in final set");
    a[3] = true;
    a[4] = false;
  } else if(answered === 0){
    a[1] = false;
  }
  else{
    endGame()
  }
  wordBlank.textContent = questions[answered]; 
}


//function is called once the game is won, and then hides/displays various elements of the page
function endGame(){
  isWin = true;
  mainEl.style.display = "none";
  formEl.style.display = "block";
  var update = document.querySelector(".score2");
  update.textContent = score;
}


//sets up a function and event listener for the first answer button, and then checks for answer validity, finally changing the question and updating the score
function checkB1(){
  console.log(correct[answered]);
  if(correct[answered] === 0){
    score++;
  }else{
    score--;
    timerCount--;
  }
  answered++;
  setQuestion();
  scoreEl.textContent =  score;
}
button1.addEventListener("click", checkB1)


//sets up a function and event listener for the 2nd answer button, and then checks for answer validity, finally changing the question and updating the score
function checkB2(){
  if(correct[answered] === 1){
    score++;
  }else{
    score--;
    timerCount--;
  }
  answered++;
  setQuestion();
  scoreEl.textContent =  score;
}
button2.addEventListener("click", checkB2)


//sets up a function and event listener for the 3rd answer button, and then checks for answer validity, finally changing the question and updating the score
function checkB3(){
  if(correct[answered] === 2){
    score++;
  }else{
    score--;
    timerCount--;
  }
  answered++;
  setQuestion();
  scoreEl.textContent =  score;
}
button3.addEventListener("click", checkB3)


//sets up a function and event listener for the 4th answer button, and then checks for answer validity, finally changing the question and updating the score
function checkB4(){
  if(correct[answered] === 3){
    score++;
  }else{
    score--;
    timerCount--;
  }
  answered++;
  setQuestion();
  scoreEl.textContent =  score;
}
button4.addEventListener("click", checkB4)



function setScore() {
  localStorage.setItem("HighScore", score);
  sessionStorage.setItem("HighScore", score);
  scoreEl.textContent = score;
}

// These functions are used by init
function getScore() {
  var storedWins = localStorage.getItem("HighScore");
  if (storedWins === null) {
    score = 4;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    score = storedWins;
  }
  //Render win count to page
}



// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  // score = 0;
  score = localStorage.setItem("HighScore", score); 
  var tempName = "";
  localStorage.setItem("PlayerName", tempName);
  setScore()
}


function submitInfo(event){
  console.log(score +"score");
  event.preventDefault();
  
  var g1 = document.getElementById("exampleFormControlSelect1");
  var g2 = document.getElementById("exampleFormControlSelect2");
  var g3 = document.getElementById("exampleFormControlSelect3");
  console.log(g1.value);
  console.log(g3.value);
  console.log(g2.value);
  // localStorage.setItem("PlayerName", PlayerName);
  var userscore = { 
    initials: g1.value + g2.value + g3.value,
    score: score,
    used: false
  }
  highscoreSaver.push(userscore);
  console.log(highscoreSaver);
  localStorage.setItem("Scores", JSON.stringify(highscoreSaver))
  formEl.style.display = "none";
  resetButton.style.display = "block";
}
//pulls info from the submit info form and uses that to save a score for player, then sets it into a local storage variable


//sets up event listeners for the start, reset, and highscore buttons
resetButton.addEventListener("click", startGame);
submitButton.addEventListener("click", submitInfo);
scoreButton.addEventListener("click", function(){
  formEl.style.display = "none";
  headEl.style.display = "none";
  mainEl.style.display = "none";
  scorelist.style.display = "flex";
  endScore.style.display = "block";
  var pullscores = JSON.parse(localStorage.getItem("Scores"));
  var higher = -5;
  var highest = 0
  for(i=0; i < pullscores.length; i++){
    if(pullscores[i].score>higher){
      highest = i;
      higher = pullscores[i].score;
      console.log("found a highest");
    }
  }
  //finds the highest score and sets it as the first display of the highscore sheet

var name = pullscores[highest].initials;
var tscore = pullscores[highest].score;
console.log(name);
console.log(tscore);
console.log(pullscores[highest]);
hs1.textContent = pullscores[highest].initials + "  " + pullscores[highest].score;
higher = -5;
var newhigh = 0
if(pullscores.length>1){
for(i=0; i<pullscores.length; i++){
  if(pullscores[i].score>higher && i !== highest)
  {
    newhigh = i;
    higher = pullscores[i].score;
  }
}
 //finds the 2nd highest score and sets it as the 2nd display of the highscore sheet
hs2.textContent = pullscores[newhigh].initials + "  " + pullscores[newhigh].score;
}
});