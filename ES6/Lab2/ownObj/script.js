let myObj = {
  [Symbol.replace]: (str) => {
    return str.length > 15 ? str.substring(0, 15) + "..." : str;
  },
};


let result = "hello22 world".replace(myObj);
console.log(result);
