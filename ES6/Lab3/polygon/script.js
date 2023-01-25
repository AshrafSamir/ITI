class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  toString() {
    return `Hi, I am a ${this.name} with a height of ${this.height} and a width of ${this.width}.`;
  }
}
class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }
  toString() {
    return super.toString();
  }
  calcArea() {
    return this.height * this.width;
  }
  drawCanvas() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, this.width, this.height);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }
}
class Square extends Polygon {
  constructor(height) {
    super(height, height);
    this.name = "Square";
  }
  toString() {
    return `Hi, I am a ${this.name} with a height of ${this.height}.`;
  }
  calcArea() {
    return this.height * this.width;
  }

  drawCanvas() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(300, 20, this.height, this.width);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }
}
class Circle extends Polygon {
  constructor(raduis) {
    super(raduis, raduis);
    this.name = "circle";
  }
  toString() {
    return `Hi, I am a ${this.name} with a radius of ${this.height}.`;
  }
  calcArea() {
    return Math.PI * this.height * this.width;
  }
  drawCanvas() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 200, this.height, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
class Triangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Triangle";
  }
  toString() {
    return `Hi, I am a ${this.name} with a height of ${this.height} and a width of ${this.width}.`;
  }

  calcArea() {
    return this.height * this.width * 0.5;
  }

  drawCanvas() {
    var canvas = document.getElementById("myCanvas");

    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(this.height, this.height);
    ctx.lineTo(this.height, this.width);
    ctx.lineTo(this.width, this.width);
    ctx.closePath();

    ctx.fillStyle = "green";
    ctx.fill();

    ctx.strokeStyle = "black";
    ctx.stroke();
  }
}

const rectangle = new Rectangle(100, 200);
const square = new Square(100);
const circle = new Circle(70);
const triangle = new Triangle(200, 350);

console.log(rectangle.toString());
console.log(square.toString());
console.log(circle.toString());
console.log(triangle.toString());

console.log(rectangle.calcArea());
console.log(square.calcArea());
console.log(circle.calcArea());
console.log(triangle.calcArea());

rectangle.drawCanvas();
square.drawCanvas();
circle.drawCanvas();
triangle.drawCanvas();
