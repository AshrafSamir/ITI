var win;
let imgVal;
let imgEl;
function handleClick() {
  win = window.open("child.html", "", "width=400px,height=400px");

  imgEl = win.document.createElement("img");
  imgVal = document.querySelector('input[name="name"]:checked').value;
  imgEl.src = imgVal;
  imgEl.style.width = "80%";
  imgEl.style.height = "80%";

  setTimeout(function () {
    let textEl = win.document.createElement("p");
    let textVal = document.getElementById("txt").value;
    textEl.textContent = textVal;

    win.document.body.appendChild(imgEl);
    win.document.body.appendChild(textEl);

    console.log(win.document);
  }, 200);
}

function handleClose() {
  window.close();
}
