var canvas = document.getElementById("canvas");
canvas.style.border = "1px solid black";
var ctx = canvas.getContext("2d");

var grd1 = ctx.createLinearGradient(125, 0, 125, 250);
grd1.addColorStop(0, "blue");
grd1.addColorStop(0.8, "white");

ctx.fillStyle = grd1;
ctx.strokeStyle = grd1;
ctx.beginPath();
ctx.fillRect(50, 50, 350, 350);
ctx.closePath();

var grd2 = ctx.createLinearGradient(125, 250, 125, 350);
grd2.addColorStop(0, "green");
grd2.addColorStop(0.8, "white");

ctx.fillStyle = grd2;
ctx.strokeStyle = grd2;

ctx.beginPath();
ctx.fillRect(50, 200, 350, 350);
ctx.closePath();

var grd3 = ctx.createLinearGradient(200, 200, 200, 300);
grd3.addColorStop(0, "black");
grd3.addColorStop(0.8, "rgba(255, 255, 250, 0)");
ctx.strokeStyle = grd3;

//draw rectangle with lines
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(300, 150);
ctx.lineTo(300, 250);
ctx.moveTo(150, 150);
ctx.lineTo(150, 250);

ctx.stroke();
ctx.closePath();
