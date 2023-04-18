const { Circle, Square, Triangle } = require("./shapes.js");

function generateSVG(data) {
  let shape = undefined;
  if (data.shape === "Triangle") {
    shape = new Triangle(data.shapeColor, data.text, data.textColor);
  } else if (data.shape === "Square") {
    shape = new Square(data.shapeColor, data.text, data.textColor);
  } else {
    shape = new Circle(data.shapeColor, data.text, data.textColor);
  }
  return shape.render();
}

module.exports = generateSVG;
