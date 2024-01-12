let score = JSON.parse(localStorage.getItem('score')) || { 
  // any true item will execute
  // say if there is no storage we can set new obj
  //checking if score is null
  // can check as if score === null or !score same thing
  // if(!score){
  //   score = {
  //     wins: 0,
  //     losses: 0,
  //     ties: 0
  //   }
  wins: 0,
  losses: 0,
  ties: 0
};


//advaced function for rock button

document.querySelector('.js-rock-button').
  addEventListener('click', ()=>{
      playGame('Rock');
});

document.querySelector('.js-paper-button').
      addEventListener('click', ()=>{
      playGame('Paper');
});
document.querySelector('.js-scissor-button').
    addEventListener('click', ()=>{
      playGame('Scissors');
});

// Displaying and updating the score
updateScoreElement();



function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  //reset local store
  localStorage.removeItem('score');
  updateScoreElement();

}

/*
 =>variable global for storing setIterval and autoplaying status so that we can use them to stop if user want to stop
 => Another reason to put these variables outside is because, setinterval calls the function autoplay function every time so these variable if stored inside cannot be chaged inside
*/
let isAutoPlaying = false;
  let intervalId; 
// autoplays when button autoplay is clicked
// const autoPlay =()=>{};

function autoPlay(){
  // changing auto play button
  //storing button first in variable
  const autoPlayBtn = document.querySelector('.auto-play-js');
  // auto play was off befor, not it is clicked
  //check if clicked autoplay for first time
  if(!isAutoPlaying){
  // storing interval so that we can stop it if user wants to stop
    intervalId = setInterval(()=> {
      let computerMove = pickComputerMove();
      playGame(computerMove);
    },1000);
    //changing button as stop playing
    autoPlayBtn.innerHTML = 'Stop Playing';
    isAutoPlaying = true;
  }else{
    // stop auto play
    clearInterval(intervalId);
    isAutoPlaying = false
    autoPlayBtn.innerHTML = 'Auto Play';
  }

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
  return result;
  
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

  updateScoreElement();
  document.querySelector('.js-result')
    .innerHTML=result;

  document.querySelector('.js-moves')
    .innerHTML = `You 
    <img src="img/${playerMove}-emoji.png" class="move-icon">
    <img src="img/${computerMove}-emoji.png" class="move-icon">
    Computer `;
}

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
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
