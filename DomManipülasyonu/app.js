// Window Object

// let value;

// value = document;

// value = document.all;
// value = document.all.length;
// value = document.all[0];
// value = document.all[6];
// value = document.all[document.all.length - 1];

// const elements = document.all;

// for(let i = 0 ; i < elements.length; i++){
//     console.log(elements[i]);
// }

// const collections = Array.from(document.all)

// collections.forEach(element => {
//     console.log(element);
// });

// value = document.all;
// value = document.body;
// value = document.head;
// value = document.location;
// value = document.location.hostname;
// value = location.port;

// value = document.URL;
// value = document.characterSet;

// Scriptler

// value = document.scripts;
// value = document.scripts.length;
// value = document.scripts[0];

//Linkler

// value = document.links;
// value = document.links[0];
// value = document.links[document.links.length - 1].getAttribute("class");
// value = document.links[document.links.length - 1].getAttribute("href");
// value = document.links[document.links.length - 1].className;
// value = document.links[document.links.length - 1].classList;

//Formlar

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// value = document.forms["form"];
// value = document.forms[0].id;
// value = document.forms[0].getAttribute("id");
// value = document.forms[0].name;
// value = document.forms[0].getAttribute("name");
// value = document.forms[0].method;

// console.log(value);

//*******************************Element Seçme**************************************** */
//Id'ye göre seçme

//let element;

//element = document.getElementById("todo-form");
//element = document.getElementById("tasks-title");

//Class'a göre seçme

//element = document.getElementsByClassName("list-group-item");
//element = document.getElementsByClassName("card-header");

//Tag'lere göre seçme

//element = document.getElementsByTagName("div");
//element = document.getElementsByTagName("li");

//Query Selector - Css Selector - Tek Bir Element Seçer

// element = document.querySelector("#todo-form");
// element = document.querySelector("#tasks-title");

// element = document.querySelector(".list-group-item");
// element = document.querySelector("li");
// element = document.querySelector("div");

//Query Selector All

// element = document.querySelectorAll(".list-group-item");

// element.forEach(element => {
//     console.log(element)
// });

//console.log(element);

//Element Özellikleri

// const element = document.querySelector("#clear-todos");

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);   //Sadece Yazıyı Gösterme
// console.log(element.innerHTML);
// console.log(element.href);
//console.log(element.style);

// Style ve Element Özellikerini Değiştirme

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr/";
// element.target = "_blank";

// element.textContent = "Silin"
// element.innerHTML = "<span style = 'color: green;'>Silin</span>"

// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(element => {
//     element.style.color = "red"
//     element.style.background = "#eee"
// });

// let element2 = document.querySelector("li:last-child");

// element2 = document.querySelector("li:nth-child(2)");
// element2 = document.querySelector("li:nth-child(3)");
// element2 = document.querySelector("li:nth-child(4)");

// element2 = document.querySelectorAll("li:nth-child(odd)"); //tek sayıdaki çocukları seçer
// element2 = document.querySelectorAll("li:nth-child(even)"); //çift sayıdaki çocukları seçer

// element2.forEach(element => {
//     element.style.color = "green"
//     element.style.background = "gray"
// });

// console.log(element2);

//Dom Elementleri Üzerinde Gezme

// let value;

// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)");
// const cardrow = document.querySelector(".card.row");

// value = todoList;
// value = todo;
// value = cardrow;

//Child Nodes - Atlanan satırlarıda sayıyor

// value = todoList.childNodes;
// value = todoList.childNodes[0];

//Children - Sadece etikettekileri alırs

// value = todoList.children;
// value = todoList.children[0];
// value = todoList.children[2].textContent = "Değişti";

// value = cardrow;
// value = cardrow.children;
// value = cardrow.children[2].children[1].textContent = "Burası da değişti";

// value = todoList;
// value = todoList.children[0];
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;
// value = todoList.children.length;
// value = todoList.childElementCount;

// value = cardrow;
// value = cardrow.parentElement;
// value = cardrow.parentElement.parentElement;

//Element Kardeşlerini Bulma

// value = todo;
// value = todo.previousElementSibling;
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;

// value = todo.previousElementSibling.previousElementSibling

// console.log(value);

// Yeni Bir Element Oluşturma

// const newLink = document.createElement("a");
// const cardBody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com.tr/";
// newLink.target = "_blank";
// newLink.appendChild(document.createTextNode("Farklı Sayfa Git!"));

// cardBody.appendChild(newLink);

// console.log(newLink);

// Dinamik Element Silme

//const todoList = document.querySelector("ul.list-group");
//const todos = document.querySelectorAll("li.list-group-item");

// Remove Metodu

//todos[0].remove();

// Remove Child

//todoList.removeChild(todoList.lastElementChild);

//console.log(todoList);

// Replace

// const cardBody = document.querySelectorAll(".card-body")[1]
// const newElement = document.createElement("h1")

// newElement.textContent = "Yeni Todolar"
// newElement.id = "tasks-title"
// newElement.class = "card-title"

// const oldElement = document.querySelector("#tasks-title")

// cardBody.replaceChild(newElement,oldElement)
// console.log(cardBody);

// Dinamik Attribute Özellikleri

// const todoInput = document.getElementById("todo");
// let element;

// element = todoInput;
// element = todoInput.classList.length;

//todoInput.className = "form-control newClass"
// todoInput.classList.add("newClass")
// todoInput.classList.add("newClass2")

// element = todoInput;
// element = todoInput.placeholder;
// element = todoInput.getAttribute("placeholder");

// todoInput.setAttribute("placeholder","naber!");
// todoInput.setAttribute("title", "baslik")

// todoInput.removeAttribute("name")

// element = todoInput.hasAttribute("name")

// console.log(element);
