//Callback functions in JS (ES5):

//Callback hell
let heading = document.querySelector("h2");

function changeColor(color, delay, colorChange) {
  setTimeout(() => {
    heading.style.color = color;
    colorChange();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("orange", 1000);
    });
  });
});

//callback functions are used in JS to use as an argument in Higher order function