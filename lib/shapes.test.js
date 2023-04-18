const { ShapeClasses } = require('./shapes');
const { Triangle, Circle, Square } = ShapeClasses;

//Triangle test
describe('Triangle', () => {
    test('should generate a triangle', () => {
        const triangle = new Triangle();
        triangle.fill = '#FF0000'; 
        const expectedTriangle= '<polygon points="100,50 200,150 20,150" fill="#FF0000" />';
        const generatedTriangle = triangle.render();
        expect(generatedTriangle).toBe(expectedTriangle);
    });
});

// Square test
describe('Square', () => {
    test('Test the height and width', () => {
      const square = new Square();
      square.fill = '#FF0000';
      const expectedSquare = '<rect x="80" y="30" width="140" height="140" fill="#FF0000" />';
      const generateSquare = square.render();
      expect(generateSquare).toBe(expectedSquare);
    });
  });
  
  // Circle test
  describe('Circle', () => {
    test('Test the height and width', () => {
      const circle = new Circle();
      circle.fill = '#FF0000';
      const expectedCircle = '<circle cx="150" cy="100" r="60" fill="#FF0000" />';
      const generateCircle = circle.render();
      expect(generateCircle).toBe(expectedCircle);
    });
  });
  
