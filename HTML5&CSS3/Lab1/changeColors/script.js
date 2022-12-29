var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var txt = document.getElementById("txt");

let redC = 0,
  greenC = 0,
  blueeC = 0;
red.addEventListener("change", function () {
  redC = red.value;
  txt.style.color = `rgb(${redC},${greenC},${blueeC})`;
});
blue.addEventListener("change", function () {
  blueeC = blue.value;
  txt.style.color = `rgb(${redC},${greenC},${blueeC})`;
});
green.addEventListener("change", function () {
  greenC = green.value;
  txt.style.color = `rgb(${redC},${greenC},${blueeC})`;
});
