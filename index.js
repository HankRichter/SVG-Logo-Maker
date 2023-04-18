const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require("./lib/SVG.js");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter 3 Characters.",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Enter a color keyword or the hexadecimal number for the color of the text.",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose which shape you would like the logo to be.",
    choices: ["Cicle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Enter a color keyword or the hexadecimal number for the color of the shape",
  },
];

function writeToFile(fileName, data) {
  const logo = SVG(data);
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log("ERROR!");
    }
    console.log("Generated SVG File!");
  });
}

function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    const fileName = `logo.svg`;
    writeToFile(fileName, SVG(userInput));
  });
}

init();
