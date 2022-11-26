let success = new Audio("assets/success-fanfare-trumpets-6185.mp3");
let error = new Audio("assets/beep-beep-6151.mp3");
let moon = "assets/moon.gif";
let imgs = [
  "assets/1.gif",
  "assets/2.gif",
  "assets/3.gif",
  "assets/4.gif",
  "assets/5.gif",
  "assets/6.gif",
  "assets/1.gif",
  "assets/2.gif",
  "assets/3.gif",
  "assets/4.gif",
  "assets/5.gif",
  "assets/6.gif",
];

let shuffledImgs = imgs.sort((a, b) => 0.5 - Math.random());

let main = document.getElementById("main");
let alldivs = document.getElementsByTagName("div");

function drowbox() {
  for (let i = 0; i < imgs.length; i++) {
    main.innerHTML +=
      "<div><img id='" +
      i +
      "'" +
      'src="' +
      moon +
      '"' +
      'onclick="onpress()"' +
      "></div>";
  }
}

let clicksNum = 0;
let arr = [];
let id;

function onpress() {
  id = event.target.id;
  event.target.src = shuffledImgs[id];

  if (clicksNum < 2) {
    arr.push(id);
    clicksNum++;
  }
  if (clicksNum == 2) {
    let first = document.getElementById(`${arr[0]}`);
    let second = document.getElementById(`${arr[1]}`);
    if ((first.src == second.src) & (arr[0] != arr[1])) {
      success.play();
      clicksNum = 0;
      arr = [];
    } else {
      event.target.src = shuffledImgs[id];
      error.play();
      clicksNum = 0;
      arr = [];
      setTimeout(() => {
        first.src = moon;
        second.src = moon;
      }, 200);
    }
  }
}

drowbox();
