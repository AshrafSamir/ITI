let myObj = {
  username: "ali",
  age: 20,
  [Symbol.iterator]: function () {
    let keys = Object.keys(this);
    let index = 0;
    return {
      next: () => {
        return {
          value: this[keys[index++]],
          done: index > keys.length,
        };
      },
    };
  },
};



for (let elem of myObj) {
  console.log(elem);
}

let myObj1 = {
  username: "ahmed",
  age: 30,
  gen: function* () {
    let keys = Object.keys(this);
    for (let key of keys) {
      typeof this[key] === "function" ? null : yield { key, value: this[key] };
    }
  },
};

for (let elem of myObj1.gen()) {
  console.log(elem);
}
