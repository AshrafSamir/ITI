setTimeout(function () {
  let ul = document.getElementById("nav");
  ul.style.listStyleType = "circle";

  let header = document.getElementById("header");
  let img1 = header.firstElementChild;
  let img2 = img1.cloneNode(true);
  document.body.appendChild(img2);

  img1.style.marginLeft = "70%";
}, 1000);
