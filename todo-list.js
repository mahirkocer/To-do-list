function addTodo(){

const todolist =[];
const inputElement =document.querySelector('.js-input-name');

const name =inputElement.value;

todolist.push(name);
inputElement.value ='';


}