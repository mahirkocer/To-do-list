

let todoList =[];
function addTodo(){

const inputElement =document.querySelector('.js-input-name');

const name =inputElement.value;

todoList.push(name);
inputElement.value ='';
renderTodoList();


}
function renderTodoList(){

let todolistHTML ='';
for(let i =0; i<todoList.length; i++){
  const todo = todoList[i];

const html = `<p>${todo}</p>`;
todolistHTML += html;

}

document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}