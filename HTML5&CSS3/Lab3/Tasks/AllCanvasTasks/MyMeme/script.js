var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "newProp.jpg";
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "40px verdana bold";
  ctx.shadowColor = "black";
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 10;
  ctx.lineWidth = 5;
  ctx.fillText("its gonna be ok sweet heart", 0, canvas.height - 10);

  ctx.fill();
};
