const todoList = [
  {
  name: 'Make Dinner', 
  dueDate:'2021-03-22'
  },
  {
    name: 'Wash Dishes', 
    dueDate:'2021-03-22'
  }
];


console.log(todoList);

function setDefaultDate(){
  const date = new Date();
  const month = date.getMonth() < 10? '0'+(date.getMonth()+1)                               
  : date.getMonth()+1;
  let setDate = `${date.getFullYear()}-${month}-${date.getDate()}`;
  const dateInput = document.querySelector('.js-due-date-input');
  let defaultDate = setDate;
  return defaultDate;
}


renderTodoList();

function renderTodoList(){
  let todoListHTML = ''
  let index = 0;
 
  // trying for each loop for object
  
  todoList.forEach((value, index) => {
    
    const {name, dueDate} = value;
  
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-todo-btn" onclick = "
        todoList.splice(${index}, 1);
        renderTodoList();
      ">Delete</button>
      `;
    todoListHTML += html;

  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  console.log(todoList);
}


//   for(let index = 0; index<todoList.length; index++){
//     const todoObject = todoList[index];
//     // const name = todoObject.name;
//     // const dueDate = todoObject.dueDate;
//     const {name, dueDate} = todoObject;
  
//     const html = `
//       <div>${name}</div>
//       <div>
//       ${dueDate}
//       </div> 
//         <button class="delete-todo-btn" onclick = "
//           todoList.splice(${index}, 1);
//           renderTodoList();
//         ">Delete</button>
//       `;
//     todoListHTML += html;

//   }
//   document.querySelector('.js-todo-list').innerHTML = todoListHTML;
//   console.log(todoList);
// }

function addTodo(){

  validate();

  
}

function validate(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');let date = dateInputElement.value;
  console.log(setDefaultDate());
  if(name == ''){
    alert("Enter the List/Date");
  }else if(date == ''){
    alert("You havent selected due date");
    
  }else
  runAdding(inputElement,name, date);
 
  

}

function runAdding(inputElement,name, dueDate){
  const dateInputElement = document.querySelector('.js-due-date-input');
  // const dueDate = dateInputElement.value;
  
  // dueDate!=null ? setDefaultDate() : dueDate;
  todoList.push({
    // name: name,
    // dueDate: dueDate
    //shorthand property syntax
    name,
    dueDate
  });
  inputElement.value = "";
  renderTodoList();
}