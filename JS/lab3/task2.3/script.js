let win;

/*function pageScroll() {
  win.scrollBy(0, 100);
  scrolldelay = setTimeout(pageScroll, 10);
}*/

function openWindow() {
  win = window.open("child.html", "", "width=400,height=400");
}
openWindow();
