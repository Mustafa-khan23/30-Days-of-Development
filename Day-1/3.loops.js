//Loops in JS
let Obj = {
  name: "mustafa",
  age: 19,
  subject: "development",
};

const arr = [1, 2, 3, 4, 5];

//1. for-loop (use when iteration count is known)
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2. while-loop (use when iteration count is unknown)
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

//3. Do-while loop (use when we've to execute the loop at least one time)
do {
  console.log(i);
  i++;
} while (i < 10);

//4. for-of loop (when we've to print or check every value of the array/string)
for (elements of arr) {
  console.log(elements); //prints the array element
}

//5. for-in loop
for (let key in Obj) {
  console.log(key); //when we've to perform task on a object key-values
}
