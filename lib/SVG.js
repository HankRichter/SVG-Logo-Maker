const { Circle, Square, Triangle } = require("./lib/shapes");

function generateSVG(data) {
  let shape = null
  if (data.shape === 'Triangle') {
    shape = new Triangle(data.shape-color, date.text, data.text-color)
  }else if(data.shape === 'Square'){
    shape = new Square(data.shape-color, date.text, data.text-color)
  }else{
    shape = new Circle(data.shape-color, date.text, data.text-color)
  }
  return shape.render()
}


module.exports = generateSVG;
