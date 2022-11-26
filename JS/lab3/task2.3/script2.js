let scrolldelay;
function pageScroll() {
  window.scrollBy(0, 1);
  scrolldelay = setTimeout(pageScroll, 10);
}
pageScroll();

setTimeout(function () {
  clearTimeout(scrolldelay);
  window.close();
}, 7000);
