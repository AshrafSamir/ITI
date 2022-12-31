var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");
var x = 0,
  y = 0;
ctx.beginPath();
ctx.moveTo(0, 0);
setInterval(function () {
  ctx.lineTo(x, y);
  x += 10;
  y += 10;
  ctx.stroke();
  if ((x || y) == 500) {
    window.alert("Animation ended");
    clearInterval();
  }
}, 100);
ctx.closePath();

ctx.fillStyle = "red";
ctx.fill();
