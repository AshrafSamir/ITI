let linkedListObject = {
  allData: [],
  pushVal: function (value) {
    try {
      if (this.allData.length > 0) {
        if (value < this.allData[this.allData.length - 1].value) {
          throw new Error("Value is less than the last value in the list");
        }
      }
    } catch (e) {
      console.log(e);
      return;
    }
    this.allData.push({ value: value });
  },
  popVal: function () {
    this.allData.pop();
  },
  remove: function (value) {
    for (let i = 0; i < this.allData.length; i++) {
      if (this.allData[i].value === value) {
        this.allData.splice(i, 1);
        console.log(this.allData);
        return;
      }
    }
    try {
      throw new Error("Value not found");
    } catch (e) {
      console.log(e);
    }
  },
  enqueueVal: function (value) {
    try {
      if (this.allData.length > 0) {
        if (value >= this.allData[0].value) {
          throw new Error("no duplicate values allowed");
        }
      }
    } catch (e) {
      console.log(e);
      return;
    }

    this.allData.unshift({ value: value });
  },
  dequeueVal: function () {
    this.allData.shift();
  },
  display: function () {
    console.log(this.allData);
  },
  insertVal: function (value, index) {
    //update the value of the index
    try {
      if (index > this.allData.length) {
        throw new Error("Index is out of bounds");
      }
      if (
        index >= 0 &&
        index < this.allData.length &&
        index <= this.allData.length - 2
      ) {
        if (
          value >= this.allData[index + 1].value ||
          value < this.allData[index - 1].value
        ) {
          throw new Error("inserted value is not in the correct order");
        }
      } else {
        if (value < this.allData[this.allData.length - 1].value) {
          throw new Error("inserted value is not in the correct order");
        }
      }
    } catch (e) {
      console.log(e);
      return;
    }
    if (index === this.allData.length - 1) {
      this.allData.push({ value: value });
    } else this.allData.splice(index, 0, { value: value });
  },
};

linkedListObject.pushVal(1);
linkedListObject.pushVal(2);
linkedListObject.pushVal(3);
//linkedListObject.enqueueVal(0);
linkedListObject.display();
//linkedListObject.popVal();
//linkedListObject.display();
//linkedListObject.remove(2);
//linkedListObject.enqueueVal(4);
//linkedListObject.enqueueVal(5);
//linkedListObject.enqueueVal(6);
//linkedListObject.insertVal(3, 1);
//linkedListObject.dequeueVal();
