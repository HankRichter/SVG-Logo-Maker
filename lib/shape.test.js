const { Circle, Square, Triangle } = require("./shapes.js");

describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    var color = undefined;
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>
    <text fill="${this.textColor}" font-size="75" x="25" y="180">${this.text}</text>
    </svg>`
    );
  });
});
// Square Shape
describe("Square", () => {
  test("renders correctly", () => {
    const shape = new Square();
    var color = undefined;
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <rect  y="125" height="200" width="200" fill="${this.color}"/>
    <text fill="${this.textColor}" font-size="75" x="20" y="145">${this.text}</text>
    </svg>`
    );
  });
});
// Triangle Shape
describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    var color = undefined;
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="250,150 100,400 400,400" fill="${this.color}"/>
    <text fill="${this.textColor}" font-size="75" x="175" y="350">${this.text}</text>
    </svg>`
    );
  });
});
