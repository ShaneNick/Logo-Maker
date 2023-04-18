class Shape {
  constructor(fill, stroke) {
    this.fill = fill;
    this.stroke = stroke;
  }

  setColor(color) {
    this.color = color;
  }

  toSVG(text, textColor) {
    console.log("Generating SVG code for shape...");
    const shapeSVG = this.render();
    const svgCode = `<svg width="300" height="200">${shapeSVG}<text x="100" y="120" font-size="35" fill="${textColor}">${text}</text></svg>`;
    console.log(`Generated SVG code: ${svgCode}`);
    return svgCode;
}

};

class Triangle extends Shape {
  constructor() {
    super();
    this.points = "100,50 200,150 20,150";
  }

  render() {
    return `<polygon points="${this.points}" fill="${this.fill}"/>`;
  }
 
  }
   module.exports = {
    Triangle,
};

class Circle extends Shape {
  constructor() {
    super();
    this.radius = 60;
  }

  render() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.fill}" />`;
  }
}

class Square extends Shape {
  constructor() {
    super();
    this.width = 140;
    this.height = 140;
  }

  render() {
    return `<rect x="80" y="30" width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
  }
}



// ... all the class implementations ...

const shapeMap = {
  'triangle': Triangle,
  'circle': Circle,
  'square': Square,
};

module.exports.shapeMap = shapeMap;


module.exports.ShapeClasses = { Triangle, Circle, Square };


