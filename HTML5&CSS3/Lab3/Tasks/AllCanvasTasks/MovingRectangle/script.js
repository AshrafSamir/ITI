var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(135, 206, 235, 1)";



ctx.beginPath();
ctx.fillRect(150, 125, 200, 50);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 125, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

ctx.closePath();



ctx.beginPath();
ctx.translate(150, 125);
context.rotate(0.1);

ctx.fillStyle = "rgba(135, 206, 235, 1)";
ctx.fillRect(150, 125, 200, 50);
ctx.stroke();
ctx.closePath();












