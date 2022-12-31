var vid = document.getElementById("myVideo");
var voluemRange = document.getElementById("voluemRange");
var timeSlider = document.getElementById("timeSlider");
var section = document.getElementsByTagName("section")[0];
var paragraph = document.getElementsByTagName("p")[0];

console.log(vid.duration);
// style
section.style.width = "20%";
vid.style.display = "block";
timeSlider.style.width = "60%";
paragraph.style.display = "inline";
// time slider value
var interval = setInterval(updateTimeSlider, 1000);

function updateTimeSlider() {
  timeSlider.value = vid.currentTime;
  paragraph.innerHTML = `${parseInt(vid.currentTime / 60)}:${
    Math.floor(vid.currentTime) % 60
  }/ ${parseInt(vid.duration / 60)}:${Math.floor(vid.duration) % 60}`;
  if (timeSlider.value == vid.duration) {
    clearInterval(interval);
  }
}

function play() {
  vid.play();
}
function stop() {
  vid.pause();
}

function start() {
  vid.currentTime = 0;
  vid.play();
}

function end() {
  vid.currentTime = vid.duration;
}

function backwordFiveSec() {
  vid.currentTime -= 5;
}

function forwordFiveSec() {
  vid.currentTime += 5;
}

function mute() {
  if (vid.muted) vid.muted = false;
  else vid.muted = true;
}

function volumeRange(amount) {
  vid.volume = amount;
}

function changeCurrentTimeValue() {
  vid.currentTime = timeSlider.value;
}

function speedRange(amount) {
  vid.playbackRate = amount;
}
