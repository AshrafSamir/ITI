var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var bool = true;
var counter = 0;

var interval = setInterval(function () {
  counter++;
  ctx.clearRect(0, 0, 300, 300);
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI, bool);
  ctx.closePath();

  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();
  if (counter == 5) {
    ctx.clearRect(0, 0, 300, 300);
    clearInterval(interval);
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, 2 * Math.PI, !bool);
    ctx.closePath();

    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
  }
  bool = !bool;
}, 1000);
