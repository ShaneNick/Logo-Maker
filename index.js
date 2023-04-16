const inquirer = require('inquirer');
const convert = require('color-convert');
const fs = require('fs');
const shapeMap = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logotxt',
            message: 'Choose 3 letters for your logo!',
            validate: (input) => {
                if (input.length !== 3) {
                    return 'Please only enter 3 letters';
                }
                for (let i = 0; i < input.length; i++) {
                    let charCode = input.charCodeAt(i);
                    if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
                        return 'false';
                    }
                }

                return true;
            },
        },
        {
            type: 'input',
            name: 'txtclr',
            message: 'Please choose a color or hexadecimal for your letters',
            validate: (input) => {
                try {
                    if (convert.keyword.hex(input)) {
                        return true;
                    }
                } catch (e) {

                }
                if (/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(input)) {
                    return true;
                }

                return 'Please enter a valid color or a hex value.';
            },
        },
        {
            type: 'list',
            name: 'Shapes',
            message: 'Please choose a shape for your logo',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeclr',
            message: 'Please choose a color or hex for your shape',
            validate: (input) => {
                try {
                    if (convert.keyword.hex(input)) {
                        return true;
                    }
                } catch (e) {

                }
                if (/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(input)) {
                    return true;
                }

                return 'Please enter a valid color or a hexadecimal value.';
            },
        },
    ])

      
      .then((answers) => {
        
        //not finding shapes
        const shapeClass = shapeMap[answers.shape];
        const shape = new shapeClass();
        shape.setColor(answers.Logoclr);
        const svgCode = shape.render();

    
        // write SVG code to file
        fs.writeFileSync('my-logo.svg', svgCode);
      });
