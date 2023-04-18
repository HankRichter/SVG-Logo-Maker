class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
}

class Circle extends Shape {
  render() {
    return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>
    <text fill="${this.textColor}" font-size="75" x="25" y="180">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <rect  y="125" height="200" width="200" fill="${this.color}"/>
    <text fill="${this.textColor}" font-size="75" x="20" y="145">${this.text}</text>
    </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="250,150 100,400 400,400" fill="${this.color}"/>
    <text fill="${this.textColor}" font-size="75" x="175" y="350">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Circle, Square, Triangle };
