let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");         //DOM variable
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r' , 'p' , 's'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if(letter === 'r'){
    return "rock";
  }
  else if (letter === 'p') {
    return "paper";
  }
  else {
    return "scissor";
  }
}

function wins(userChoice,computerChoice){
  userScore++;
  const smallUserWorld = "(user)".fontsize(3).sub();
  const smallCompWorld = "(comp)".fontsize(3).sub();
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld} beats ${convertToWord(computerChoice)}${smallCompWorld}.You WIN!!!`;
  console.log("user wins");

}

function lose(userChoice , computerChoice){
  computerScore++;
  const smallUserWorld = "(user)".fontsize(3).sub();
  const smallCompWorld = "(comp)".fontsize(3).sub();
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWorld} loses to ${convertToWord(computerChoice)}${smallCompWorld}.You LOSE...`;
  console.log("user loses");
}

function draw(userChoice, computerChoice){
  console.log("it's a draw");
  const smallUserWorld = "(user)".fontsize(3).sub();
  const smallCompWorld = "(comp)".fontsize(3).sub();
  result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWorld} is equal to ${convertToWord(computerChoice)}${smallCompWorld}.It's a DRAW`;

}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":

      wins(userChoice , computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice , computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}

function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissor_div.addEventListener('click', function(){
    game("s");
  })
}

main();
