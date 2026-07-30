//Arrays in JS - we can store values of multiple dataTypes

let array = [1, 2, 3, 4, 5, 6]; //declaring an array

//----------------------------------------------------------------------
//array-methods: (modifies original array)

//1. pop()
array.pop(); //removes the last element of the array

//2. push()
array.push(10); //add the element in the last index of the array

//3. shift()
array.shift(); //removes the first element of the array

//4. unshift
array.unshift(5); //add the given element to the fist position of array

//5. splice
array.splice(2, 5, 1, 2, 3); /*removes array elements from 2-5th index 
adds the elements given after the delCount */

//6. sorting an array
array.sort(); //sorts the element in assending order
array.reverse(); //reverse the array!

//----------------------------------------------------------------------
//array methods: (creates a copy of array, dosen't modify original array)

//1. slice()
let slicedArr = array.slice(0, 1); //returns the sliced array

//2. concat()
let concatArr = array + [2, 3, 4]; //concats or add the new array.

//3. map()
let mappedArr = array.map((e) => {
  //used for modifying every element of array
  return e + 10;
});

//4. filter()
let filteredArr = array.filter((e) => {
  //filters the element as per the condition
  if (e < 5) {
    return e;
  } else {
    return;
  }
});

//----------------------------------------------------------------------
//Array methods: (returns value (no new Array and modifications))
let details = [
  {
    id: 1,
    name: "mustafa",
  },
  {
    id: 2,
    name: "user",
  },
  {
    id: 3,
    name: "unnone",
  },
];

//1. includes();
let isInclude = array.includes(5); //true or false

//2. indexOf();
let viewIndex = array.indexOf(5); //returns the index of the element

//3. findIndex();
let findIndexes = details.findIndex((elements) => elements.id === 2);

//4. find();
const user = details.find((u) => u.id === 1); //{ id: 1, name: 'mustafa' }

//5. every();
let strictArr = array.every((element) => element < 15); //true

//6. some(); returns true if only one element satisfies the condition
let someArr = array.some((element) => element < 5);

//7. reduce();
let arrayRed = array.reduce((acc, curr) => acc + curr);

//----------------------------------------------------------------------
