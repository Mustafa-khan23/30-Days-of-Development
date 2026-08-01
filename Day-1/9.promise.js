//promises are the asynchronous part of JS

//promise program-1 example:
let heading = document.querySelector("h2");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((heading.style.color = color));
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    return changeColor("green", 1000);
  })
  .then(() => {
    return changeColor("blue", 1000);
  })
  .catch((e) => {
    console.log(e);
  });

//promise program-2 example:

function bookCab() {
  return new Promise((resolve, reject) => {
    let distance = Math.floor(Math.random() * 15) + 1;
    if (distance <= 5) {
      resolve(console.log(`Cab is booked! distance: ${distance} KM`));
    } else {
      reject(console.log(`Oops! cab is very far ${distance} KM away!`));
    }
  });
}

bookCab()
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    console.log("rejected!");
  })
  .finally(() => {
    console.log("loading...");
  });
