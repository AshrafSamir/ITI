let input = null;
let array = [];
for (let i = 0; i < 5; i++) {
  input = prompt("Enter a number");
  array.push(parseInt(input));
}
document.write("Normal order: " + array + "<br>");

function compareFnAss(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}
function compareFnDesc(a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }

  return 0;
}

document.write("Ascending order: " + array.sort(compareFnAss) + "<br>");
document.write("Descending order: " + array.sort(compareFnDesc) + "<br>");
