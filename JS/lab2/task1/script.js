let str = prompt("ENTER STRING:");
let char = prompt("ENTER CHARACTER:");
let bol = prompt("CONSIDER LETTER CASSE? (Y/N)");
let count = 0;
let regex;

if (bol == "Y") {
  regex = new RegExp(char, "gi");
  regex.test(str) ? (count = str.match(regex).length) : (count = 0);
  str = str.toLowerCase();
} else {
  regex = new RegExp(char, "g");
  regex.test(str) ? (count = str.match(regex).length) : (count = 0);
}
document.write("Number of " + char + " in " + str + " is " + count);

// check for palindrome
let arrStr = str.split("");
let revStr = arrStr.reverse().join("");
if (str == revStr) {
  document.write("<br>String is Palindrome");
} else {
  document.write("<br>String is not Palindrome");
}

// check for largest word
let arr = str.split(" ");
let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > largest.length) {
    largest = arr[i];
  }
}
document.write("<br>Largest word is " + largest);
