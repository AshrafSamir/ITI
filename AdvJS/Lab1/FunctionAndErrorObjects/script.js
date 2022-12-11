// B.1
function reverse1() {
  let reversed = [].reverse.call(arguments);
  console.log(reversed);
}
function reverse2() {
  let reversed = [].reverse.bind(arguments);
  console.log(reversed());
}
reverse1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
reverse2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// B.2
function twoParamaters(a, b) {
  try {
    if (arguments.length < 2) throw "Not enough arguments";
    if (arguments.length > 2) throw "Too many arguments";
  } catch (err) {
    console.log(err);
    return;
  }
  console.log(a, b);
}

twoParamaters(1);

// B.3

function adding() {
  try {
    if (arguments.length == 0) throw "Not enough arguments";
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== "number")
        throw "Not all arguments are numbers";
    }
  } catch (err) {
    console.log(err);
    return;
  }
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

adding(1, 2, 3, 4, 5, "6", 7, 8, 9, 10);
