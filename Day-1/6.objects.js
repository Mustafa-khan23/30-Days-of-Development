//objects in JS
//declaring an Object:

let userDetails = {
  name: "mustafa",
  age: 19,
  subject: "development",
};

//nested Objects
let nestedObj = {
  obj1: {
    name: "mustafa",
  },
  obj2: {
    name: "user",
  },
  obj3: {
    name: "user2",
  },
};

//----------------------------------------------------------------------

//Object methods

//Object.keys
console.log(Object.keys(userDetails));

//Objects.values
console.log(Object.values(userDetails));

//Object.entries
console.log(Object.entries(userDetails));

//Destructuring
const { name } = userDetails; //mustafa

//spread
let newObj = {
  ...userDetails,
  city: "aurangabad",
};
console.log(newObj);

//this keyword with objects
let person = {
  name: "mustafa",
  greet() {
    console.log(this.name);
  },
};

person.greet();
