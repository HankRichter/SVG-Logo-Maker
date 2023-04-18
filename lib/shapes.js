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
    return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>
    <text fill=${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" height="200" width="200" fill="${this.color}"/>
    <text fill=${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
    </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <polygon height="100%" width="100%" points="0,200,300,200,150,0 fill="${this.color}"/>
    <text fill=${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Circle, Square, Triangle };
