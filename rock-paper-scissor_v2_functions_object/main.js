const score = {
  wins: 0,
  losses: 0,
  ties: 0
};



function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === computerMove){
    result = 'Tie';
  }else if(computerMove === 'Scissors' && playerMove === 'Paper'){
    result = 'You Lose';
  }else if(computerMove === 'Paper' && playerMove === 'Rock'){
    result = 'You Lose';
  }else if(computerMove === 'Rock' && playerMove === 'Scissors'){
    result = 'You Lose';
  }
  else {
    result = 'You Win';
  }

  if(result === 'You Win'){
    score.wins += 1;
  }else if(result === 'You Lose'){
    score.losses += 1;
  }else if(result === 'Tie'){
    score.ties +=1;
  }
  //display result
  alert(`You picked: ${playerMove}.\nComputer picked: ${computerMove}.\nResult: ${result}\n\nWins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
  
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';
 
  if(randomNumber >= 0 && randomNumber < 1/3){          
    computerMove = 'Rock';
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  }else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissors';
  }
  
  return computerMove;
}

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  alert(`Reset Done....\nWins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`); 
}

const jsonString = JSON.stringify(score);
console.log(JSON.parse(jsonString));
