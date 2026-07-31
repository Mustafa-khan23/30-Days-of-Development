//DOM-Document Object model helps us to manipulate the html elements and styling

//1. getElementByID
let heading = document.getElementById("head");

//2. getElementByClassName
let heading2 = document.getElementsByClassName("container");

//3. querySelector
let container = document.querySelector("div");

//4. querySelectorAll
let heading3 = document.querySelectorAll("h2");

//5. getElementsByName
let heading4 = document.getElementsByName("h2");

//creating Elements through DOM
let unOrderedList = document.querySelector("ul");
let listItem = document.createElement("li");
unOrderedList.appendChild(listItem);

//classList methods
heading2.classList.add("className");
heading2.classList.remove("className");
heading2.classList.toggle("classname", "className");
heading2.classList.replace("className", "withClassName");
heading2.classList.contains("className") // true/fale