//const filterInput = document.getElementById("filter");

// filterInput.addEventListener("focus", function (e) {
//     console.log("Naberrr");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.name);
// });

// filterInput.onfocus = function(){
//     console.log("Naber");
// }

// const todoForm = document.getElementById("todo-form");

// todoForm.addEventListener("submit", submitform);

// function submitform(e) {
//   console.log("Submit Event'i");
//   e.preventDefault(); //submitlendiğinde sayfanın yenilenmesini engelliyor!
// }

/***********************************************/
//Klavye Eventleri

//Keypress

//document.addEventListener("keypress" , run)
// function run(e){
//     console.log(e);
//     console.log(e.key);
// }

// keydown

// document.addEventListener("keydown" , run)
// function run(e){
//     console.log(e);
//     console.log(e.key);
// }

// keyup

//document.addEventListener("keyup" , run)
// function run(e){
//     console.log(e);
//     console.log(e.key);
// }
/***************************************************/

// const header = document.querySelector(".card-header")
// const todoInput = document.querySelector("#todo")

// todoInput.addEventListener("keyup", changeText)

// function changeText(e){
//     header.textContent = e.target.value
// }

/**************************************************/

//Mouse Eventleri

// const cardBody = document.querySelector(".card-body")[1];
// const title = document.querySelector("#tasks-title")

//Click Event

// title.addEventListener("click",run) //dblclick --> double click

// function run(e) {
//     console.log(e.type);
// }

// Mouse down
// title.addEventListener("mousedown",run)
// function run(e) {
//     console.log(e.type);
// }

//Mouseover elementin üstüne geldiğinde yapılacakları belirtir
//Mouseout elementin üstünden ayrıldığında yapılacakları belirtir

// Input Event
//const filter = document.getElementById("filter");

//document.addEventListener("DOMContentLoaded",load); //!!! önemli

//function load(e) {
//  console.log("Sayfa yüklendi");
//}

// filter.addEventListener("focus" , run)
// filter.addEventListener("blur" , run)
// function run(e) {
//     console.log(e.type);
// }

// Paste & copy

// filter.addEventListener("paste" , run)
// filter.addEventListener("copy" , run)
// function run(e) {
//     console.log(e.type);
// }

// Cut
// filter.addEventListener("cut" , run)
// function run(e) {
//     console.log(e.type);
// }

// Select
// filter.addEventListener("select" , run)
// function run(e) {
//     console.log(e.type);
// }

// Event Bubbling & Capturing

// Bubbling

// document.querySelector(".container").addEventListener("click",() =>{
//     console.log("Div container");
// });

// document.querySelector(".card.row").addEventListener("click",() =>{
//     console.log("Card Row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",() =>{
//     console.log("Card Body");
// });

// Capturing veya Delegation

// const cardbody = document.querySelectorAll(".card-body")[1];

// cardbody.addEventListener("click" , run)

// function run(e) {
//     if (e.target.class === "fa fa-remove") {
//         console.log("Silme İşlemi");
//     }
//     if (e.target.id === "filter") {
//         console.log("Filtreleme İşlemi");
//     }
//     if (e.target.id === "clear-todos") {
//         console.log("Tüm Taskları Silme İşlemi");
//     }
    
//     console.log(e.target);
// }

