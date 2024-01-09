let score = JSON.parse(localStorage.getItem('score')) || { 
  // any true item will execute
  // say if there is no storage we can set new obj
  wins: 0,
  losses: 0,
  ties: 0
};

//checking if score is null
// can check as if score === null or !score same thing
// if(!score){
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   }



console.log();

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  //reset local store
  localStorage.removeItem('score');

  alert(`Reset Done....\nWins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`); 
}

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

  updateResult(playerMove, computerMove, result);
  
}
function updateResult(playerMove, computerMove, result){
  if(result === 'You Win'){
    score.wins += 1;
  }else if(result === 'You Lose'){
    score.losses += 1;
  }else if(result === 'Tie'){
    score.ties +=1;
  } 
  //saving score on localstorage

  localStorage.setItem('score', JSON.stringify(score));

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

// JSON

// const jsonString = JSON.stringify(score);
// console.log(JSON.parse(jsonString));
