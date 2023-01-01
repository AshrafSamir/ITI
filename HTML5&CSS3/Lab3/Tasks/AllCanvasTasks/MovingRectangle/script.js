var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(135, 206, 235, 0.5)";

ctx.beginPath();
ctx.fillRect(250, 225, 200, 50);
ctx.stroke();
ctx.closePath();

// ctx.beginPath();
// ctx.arc(250, 225, 5, 0, 2 * Math.PI);
// ctx.fillStyle = "blue";
// ctx.fill();

ctx.closePath();

let counter = 0;
let value = 0.6;

var inter = setInterval(function () {
  counter++;

  if (counter == 10) {
    value = -0.6;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.beginPath();
    ctx.translate(250, 225);
    ctx.rotate(value);
    ctx.translate(-250, -225);
    ctx.fillStyle = "rgba(135, 206, 235, 0.5)";
    ctx.fillRect(250, 225, 200, 50);
    ctx.stroke();
    ctx.closePath();
  }
  if (counter >= 20) {
    clearInterval(inter);
  }
}, 500);
