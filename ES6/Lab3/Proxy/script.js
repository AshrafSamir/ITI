let myObj = {
  name: "John",
  age: 30,
  address: " 123 Main St.",
};

let handler = {
  set(target, property, value) {
    if (property === "name") {
      if (value.length < 7) {
        throw new Error("Name is too short.");
      } else {
        target[property] = value;
      }
    }
    if (property === "address") {
      if (typeof value !== "string") {
        throw new Error("Address is not a string.");
      } else {
        target[property] = value;
      }
    }
    if (property === "age") {
      if (value > 60 || value < 25) {
        throw new Error("Age is not allowed.");
      } else {
        target[property] = value;
      }
    }
  },
  get(target, property) {
    if (target.hasOwnProperty(property)) {
      return target[property];
    } else {
      throw new Error("Property does not exist.");
    }
  },
};

let proxy = new Proxy(myObj, handler);

proxy.name = "John Doedd";
proxy.age = 25;
proxy.address = "123 Main St.";

console.log(proxy.name);
