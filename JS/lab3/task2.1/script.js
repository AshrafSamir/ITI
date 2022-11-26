var win;
function openWin() {
  win = window.open("child.html", "test", "width=300, height=300");
  win.focus();
  moveWin();
}
function stopWin() {
  win.focus();
  clearTimeout(mo);
}

function closeWin() {
  win.close();
}



let x = 10,
y = 10;
let flag = 0;
var mo;
function moveWin() {
  
  win.moveTo(x, y);
  if (y == 670) flag = 1;
  if (y == 10) flag = 0;
  if (flag == 1) {
    y -= 10;
    x -= 10;
  } else {
    y += 10;
    x += 10;
  }

  console.log(x, y);
  mo =  setTimeout(moveWin, 100);
}
