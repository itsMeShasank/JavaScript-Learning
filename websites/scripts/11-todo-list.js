const todoList = [];

function addTodo() {
    let name = document.querySelector('.todo-input').value;
    let dateValue = document.querySelector('.todo-date').value;
    if(name) {
        todoList.push({name,dateValue});
    }
    document.querySelector('.todo-input').value='';
    document.querySelector('.todo-date').value='';
    loop();
}
function loop() {
    let todoListHTML='';
    for(i=0;i<todoList.length;i++) {
       const item = todoList[i];
       const {name,dateValue} = item;
       todoListHTML +=
       `<div>${name}</div>
       <div>${dateValue}</div>
     <button onClick="remove(${i})">Delete</button>`;
    }
    document.querySelector('.items-show').innerHTML = todoListHTML;
}
function remove(index) {
    todoList.splice(index,1);
    loop();
}