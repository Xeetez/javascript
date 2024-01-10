
function subscribe(){
  const buttonElement = document.querySelector('.js-subscribe-button');

  if(buttonElement.innerText === 'Subscribe'){
    buttonElement.innerHTML = 'Subscribed';
  }else{
    buttonElement.innerHTML = 'Subscribe';
  }
}