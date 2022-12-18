var linkedListObject = function (start, end, step) {
  var allData = [];
  Object.defineProperty(this, "start", {
    value: start,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "end", {
    value: end,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "step", {
    value: step,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  var fillArr = function () {
    for (let i = start; i <= end; i += step) {
      allData.push({ value: i });
    }
  }.bind(this);

  fillArr();

  Object.defineProperty(this, "pushVal", {
    value: function (value) {
      try {
        if (Number.isInteger(value / step) === false) {
          throw new Error("Value is not a multiple of step");
        }
        if (allData.length > 0) {
          if (value <= allData[allData.length - 1].value) {
            throw new Error(
              "Value is less than or equal the last value in the list"
            );
          }
        }
      } catch (e) {
        console.log(e);
        return;
      }
      allData.push({ value: value });
    },
  });
  Object.defineProperty(this, "popVal", {
    value: function () {
      allData.pop();
    },
  });
  Object.defineProperty(this, "remove", {
    value: function (value) {
      for (let i = 0; i < allData.length; i++) {
        if (allData[i].value === value) {
          allData.splice(i, 1);
          console.log(allData);
          return;
        }
      }
      try {
        throw new Error("Value not found");
      } catch (e) {
        console.log(e);
      }
    },
  });
  Object.defineProperty(this, "enqueueVal", {
    value: function (value) {
      try {
        if (Number.isInteger(value / step) === false) {
          throw new Error("Value is not a multiple of step");
        }
        if (allData.length > 0) {
          if (value >= allData[0].value) {
            throw new Error("no duplicate values allowed");
          }
        }
      } catch (e) {
        console.log(e);
        return;
      }

      allData.unshift({ value: value });
    },
  });
  Object.defineProperty(this, "dequeueVal", {
    value: function () {
      allData.shift();
    },
  });
  Object.defineProperty(this, "display", {
    value: function () {
      console.log(allData);
    },
  });

  this.toString = function () {
    return allData;
  };
};

var myList1 = new linkedListObject(0, 10, 2);
var myList2 = new linkedListObject(1, 10, 3);
myList1.display();
myList2.display();
//myList1.pushVal(12);
//myList2.pushVal(13);
//myList1.dequeueVal();
//myList1.enqueueVal(0);
//linkedListObject.pushVal(2);
//linkedListObject.pushVal(3);
//linkedListObject.enqueueVal(0);
//linkedListObject.display();
//linkedListObject.popVal();
//linkedListObject.display();
//linkedListObject.remove(2);
//linkedListObject.enqueueVal(4);
//linkedListObject.enqueueVal(5);
//linkedListObject.enqueueVal(6);
//linkedListObject.insertVal(3, 1);
//linkedListObject.dequeueVal();
