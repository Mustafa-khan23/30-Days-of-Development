//Variable declaration:
//there are 2 types of variables declaration method in JS

//1. var (which is ES5's method)
var name = 'Alpha'

//2. let (which is alternative for var in ES6 module)
let age = 19

//3. const (constant variable which can't be change after the declaration)
const PI = Math.PI;
 
//----------------------------------------------------------------------

//Variable Type converstion:
let explicit = String(age)
console.log(typeof(explicit)); //this return string because we've written Stirng before the variable (explicitly)

let implicit = (name + 23)
console.log(implicit) //this will return a string basically with adding numeric value (implicitly) or behing the scene.

//-----------------------------------------------------------------------