const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter 3 Characters.",
  },
  {
    type: "input",
    name: "text-color",
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
    name: "shape-color",
    message:
      "Enter a color keyword or the hexadecimal number for the color of the shape",
  },
];