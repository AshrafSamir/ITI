let text =
  "Hello World my name is John and I am 25 years old i live in the UK..";
let i = 0;
let inter = setInterval(function () {
  document.write(text[i]);
  i++;
  if (i == text.length) {
    clearInterval(inter);
    setTimeout(function () {
      window.close();
    }, 2000);
  }
}, 200);
