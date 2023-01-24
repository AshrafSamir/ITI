function* fibbGen1(num) {
  let res = 1;
  let lastRes = 0;
  for (let i = 0; i < num; i++) {
    if (i < 2) yield i;
    else {
      [res, lastRes] = [res + lastRes, res];
      yield res;
    }
  }
}

function* fibbGen2(maxNum) {
  let res = 1;
  let lastRes = 0,
    i = 0;
  while (res < maxNum) {
    if (i < 2) yield i;
    else {
      [res, lastRes] = [res + lastRes, res];
      res < maxNum ? yield res : null;
    }
    i++;
  }
}

// let fibb1 = fibbGen1(13);
// for (let i of fibb1) {
//   console.log(i);
// }

let fibb2 = fibbGen2(90);
for (let i of fibb2) {
  console.log(i);
}
