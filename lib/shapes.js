class Shape {
    constructor(fill,stroke) {
        this.fill = fill;
        this.stroke = stroke;
    }

    setColor (color) {
        this.color = color;
    }

    render () {
    }
};

class Triangle extends Shape {
    constructor() {
      super();
      this.points = "150,18 244,182 56,182";
    }
  
    render() {
      return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
  }
  class Circle extends Shape {
    constructor() {
      super();
      this.radius = 50;
    }
  
    render() {
      return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor() {
      super();
      this.width = 100;
      this.height = 100;
    }
  
    render() {
      return `<rect x="0" y="0" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
  }
   

  const shapeMap = {
    'triangle': Triangle,
    'circle': Circle,
    'square': Square,
  };

  module.exports = shapeMap;