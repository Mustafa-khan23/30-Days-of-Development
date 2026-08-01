//Functions in JS
//1. function declaration ES5

function greet(parameter) {
  console.log("Hello from Mustafa!");
}

//2. function expression
let greetUser = function (parameter) {
  console.log("Hello from ~Mustafa");
};

//3. Callback functions
let greetFunc = (parameter) => {
  console.log("Hello from ~Mustafa!");
};

//function call
greet();
greetFunc();
greetUser();

//-----------------------------------------------------------------------

//Default parameters on function

function greetMexican(parameter = "Hola") {
  console.log(`${parameter} from ~Mustafa`);
}

greetMexican();

//----------------------------------------------------------------------

//rest parameters - It is like input N number of parameters or values

function add(...numbers) {
  console.log(numbers);
}

add(10, 20, 30, 40);

//----------------------------------------------------------------------