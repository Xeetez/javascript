console.log("Javascript running");

const player = ['X', 'O'];
let currentPlayer = player[0];

// decalring winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [7, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

//adding event listner on squars
//get square variable
const square = document.querySelectorAll('.square');
console.log(square);

square.forEach((value, index)=>{
  square[index].addEventListener('click', ()=>{
    
    //validate for user that they cannot select the box which has already been selected
    // let clicked = false;
    console.log(square[index].innerHTML);
    if(square[index].innerHTML !== ''){
      return;
    }

    // check if square is clicked? // if there is X or 0
      // switching players
      if(currentPlayer == player[0]){
        square[index].innerHTML = player[0];
        currentPlayer = player[1]
      }else{
        square[index].innerHTML = player[1];
        currentPlayer = player[0]
      }

    // check result
      


      
      
      // if(square[index].innerHTML !== ''){
      //   console.log("Not emplty");
      // } else{
      //   console.log('already selected');
      // }
    
    
  });
}
);