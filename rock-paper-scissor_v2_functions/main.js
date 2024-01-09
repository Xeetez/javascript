
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

  alert(`You picked: ${playerMove}.\nComputer picked: ${computerMove}.\nResult: ${result}`);


  // if(playerMove === 'Rock'){
  //   if(computerMove === 'Rock'){
  //     result = 'Tie';
  //   }else if(computerMove === 'Paper'){
  //     result = 'You Lose';
  //   }else if(computerMove === 'Scissors'){
  //     result = 'You Win';
  //   }
  //   }else if(playerMove === 'Paper'){
  //     if(computerMove === 'Rock'){
  //       result = 'You Win';
  //     }else if(computerMove === 'Paper'){
  //       result = 'Tie';
  //     }else if(computerMove === 'Scissors'){
  //       result = 'You Lose';
  //     }
  //   }else if(playerMove === 'Scissors'){
  //     if(computerMove === 'Rock'){
  //       result = 'You Lose';
  //     }else if(computerMove === 'Paper'){
  //       result = 'You Win';
  //     }else if(computerMove === 'Scissors'){
  //       result = 'Tie';
  //     }
  //   }

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
