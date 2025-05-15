const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'take trash out',
  dueDate: '2022-12-22'
}];
renderTodoList()
function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value

  const dateINputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateINputElement.value

  if(name === '' || dueDate === ''){
    return 
  }
  todoList.push({
    name,
    dueDate
  })
  inputElement.value = ''
  
  renderTodoList();
}

function renderTodoList() {
  const display = document.querySelector(".js-display-todo");

  let todoListHTML = "";

  for (i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject
    const html = `
      <div> ${name}</div>
      <div>${dueDate}</div>
      <div>
        <button class='delete-todo-button' onclick="
          todoList.splice(${i}, 1)
          renderTodoList()
        ">Delete</button>
      </div>`;
    todoListHTML += html;
  }
  display.innerHTML = todoListHTML;
}