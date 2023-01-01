var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var grd1 = ctx.createRadialGradient(250, 250, 50, 300, 280, 250);
grd1.addColorStop(0, "white");
grd1.addColorStop(1, "blue");

ctx.fillStyle = grd1;
ctx.beginPath();
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

var grd2 = ctx.createRadialGradient(410, 300, 10, 300, 350, 200);
grd2.addColorStop(0, "white");
grd2.addColorStop(1, "blue");

ctx.fillStyle = grd2;
ctx.beginPath();
ctx.arc(250, 250, 150, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.font = "300px Arial";
ctx.fillText("A", 155, 340);
ctx.fill();
ctx.closePath();
