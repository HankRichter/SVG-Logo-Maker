const { Circle, Square, Triangle } = require("./shapes.js");

const color = "black";
const textColor = "yellow";
const text = "SVG";

describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    shape.setText(text);
    shape.setTextColor(textColor);
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="black"/>
    <text fill="yellow" font-size="75" x="25" y="180">SVG</text>
    </svg>`
    );
  });
});
// Square Shape
describe("Square", () => {
  test("renders correctly", () => {
    const shape = new Square();
    shape.setText(text);
    shape.setTextColor(textColor);
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <rect  y="125" height="200" width="200" fill="black"/>
    <text fill="yellow" font-size="75" x="20" y="145">SVG</text>
    </svg>`
    );
  });
});
// Triangle Shape
describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    shape.setText(text);
    shape.setTextColor(textColor);
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="250,150 100,400 400,400" fill="black"/>
    <text fill="yellow" font-size="75" x="175" y="350">SVG</text>
    </svg>`
    );
  });
});
