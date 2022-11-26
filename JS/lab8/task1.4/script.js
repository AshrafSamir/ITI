let inerval1;
let inerval2;
let interval3;
let flag1 = 0;
let flag2 = 0;
let btn1 = document.getElementById("btn1");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

function toggle() {
  if (btn1.innerText == "Go") {
    btn1.innerText = "Stop";

    interval1 = setInterval(function () {
      document.getElementById(
        "p1"
      ).innerText = ` <img src="icon1.gif" alt="image" id="img1" style="position: absolute; ${img1.style.left} top: 170px"/>`;
      if (parseInt(img1.style.left) <= 0 && flag1 == 1) {
        flag1 = 0;
        console.log("3");
      }
      if (parseInt(img1.style.left) >= 250 && flag1 == 0) {
        flag1 = 1;
        console.log("4");
      }
      if (!flag1) {
        img1.style.left = parseInt(img1.style.left) + 5 + "px";
        console.log("1");
      } else if (flag1) {
        img1.style.left = parseInt(img1.style.left) - 5 + "px";

        console.log("2");
      }
    }, 50);

    interval2 = setInterval(function () {
      document.getElementById(
        "p2"
      ).innerText = ` <img src="icon2.gif" alt="image" id="img2" style="position: absolute; ${img2.style.right} top: 170px"/>`;

      if (parseInt(img2.style.right) <= 0 && flag1 == 1) {
        flag1 = 0;
        console.log("3");
      }
      if (parseInt(img2.style.right) >= 250 && flag1 == 0) {
        flag1 = 1;
        console.log("4");
      }
      if (!flag1) {
        img2.style.right = parseInt(img2.style.right) + 5 + "px";
        console.log("1");
      } else if (flag1) {
        img2.style.right = parseInt(img2.style.right) - 5 + "px";

        console.log("2");
      }
    }, 50);

    interval3 = setInterval(function () {
      if (parseInt(img3.style.top) <= 0 && flag2 == 1) {
        flag2 = 0;
        console.log("3");
      }
      if (parseInt(img3.style.top) >= 350 && flag2 == 0) {
        flag2 = 1;
        console.log("4");
      }
      if (!flag2) {
        img3.style.top = parseInt(img3.style.top) + 5 + "px";
        console.log("1");
      } else if (flag2) {
        img3.style.top = parseInt(img3.style.top) - 5 + "px";

        console.log("2");
      }
    }, 50);
  } else if (btn1.innerText == "Stop") {
    btn1.innerText = "Go";
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
  }
}

function reset() {
  img1.style.left = 0;
  img2.style.right = 0;
  img3.style.top = 0;
}

document.getElementById(
  "p1"
).innerText = ` <img src="icon1.gif" alt="image" id="img1" style="position: absolute; left: ${img1.style.left} top: 170px"/>`;
document.getElementById(
  "p2"
).innerText = ` <img src="icon2.gif" alt="image" id="img2" style="position: absolute; right: ${img2.style.right} top: 170px"/>`;
