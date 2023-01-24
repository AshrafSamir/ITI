function* fibbGen1(num) {
  let res = 0;
  for (let i = 0; i < num; i++) {
    res = i < 2 ? i : res + i;
    yield res;
  }
}

function* fibbGen2(maxNum) {
  let res = 0;
  let i = 0;
  while (res < maxNum) {
    res = i < 2 ? i : res + i;
    i++;
    yield res;
  }
}

let fibb1 = fibbGen1(10);
for (let i of fibb1) {
  console.log(i);
}

let fibb2 = fibbGen2(10);
for (let i of fibb2) {
  console.log(i);
}
