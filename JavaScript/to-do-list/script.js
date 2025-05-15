const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'take trash out',
  dueDate: '2022-12-22'
}];
renderTodoList()

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo()
})

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

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div> ${name}</div>
      <div>${dueDate}</div>
      <div>
        <button class='delete-todo-button js-delete-todo-button' >Delete</button>
      </div>`;
    todoListHTML += html;
  })

  display.innerHTML = todoListHTML;

  document.querySelectorAll(".js-delete-todo-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1)
      renderTodoList()
    });
  });
}