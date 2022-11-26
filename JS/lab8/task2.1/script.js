document.getElementById("input").addEventListener("keydown", function () {
  if (event.keyCode == 16) {
    alert(event.keyCode + " : " + "SHIFT KEY");
  } else if (event.keyCode == 17) {
    alert(event.keyCode + " : " + "CTRL KEY");
  } else if (event.keyCode == 18) {
    alert(event.keyCode + " : " + "ALT KEY");
  } else {
    alert(event.keyCode);
  }
});
