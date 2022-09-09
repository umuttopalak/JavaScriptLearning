/*
Session Storage sayfa açık kaldığı sürece verilerin depolandığı yer
Local Storage ise browserda depolanan sayfa kapatılıp açılsada verilerin saklandığı yerdir
*/
//                                 Session Storage
// Butonları Seçmek

// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear = document.querySelector("#clear");

// // Inputlar

// const addKey = document.querySelector("#addkey");
// const addValue = document.querySelector("#addvalue");
// const deleteKey = document.querySelector("#deletekey");

// add.addEventListener("click", addItem);
// del.addEventListener("click", deleteItem);
// clear.addEventListener("click", clearItems);

// function addItem(e) {
//   sessionStorage.setItem(addKey.value, addValue.value);
// }

// function deleteItem(e) {
//   sessionStorage.removeItem(deleteKey.value);
// }

// function clearItems(e) {
//   sessionStorage.clear();
// }

// //                                 Local Storage
// // Set Item
// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", 50);

// // Get Item

// const value = localStorage.getItem("tekrar")
// console.log(value);

// // Clear Local Storage

// localStorage.clear()

// Local Storage - Array Yazma

// const todos = ["Todo1" , "Todo2" , "Todo3"]
// localStorage.setItem("todos" , JSON.stringify(todos))

// const value = JSON.parse(localStorage.getItem("todos"))
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
  const value = todoInput.value;
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(value)
  localStorage.setItem("todos" , JSON.stringify(todos))
  e.preventDefault();
}
