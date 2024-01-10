

function handleCostKeydown(event){
  if(event.key === 'Enter'){
   calculateTotal();
  }
}

function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
  console.log(typeof cost);
  if(cost < 40){
    cost = cost + 10;
    console.log(cost);
  }else if( isNaN(cost)){
    cost = "Please enter a price ";
  }
  document.querySelector('.js-total-cost')
  .innerHTML = `$${cost}`;
}

function subscribe(){
  const buttonElement = document.querySelector('.js-subscribe-button');

  if(buttonElement.innerText === 'Subscribe'){
    buttonElement.innerHTML = 'Subscribed';
  }else{
    buttonElement.innerHTML = 'Subscribe';
  }
}

