// packages & dependecies needed for the application
const fs = require('fs');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
// imports the switch for the shapes used in the shape questionof the question variable
const { Circle, Triangle, Square } = require('./lib/shapes.js');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const userPrompt = () => {
    // questions 
    const questions = [
        {
            type: 'maxlength-input',
            name: 'text',
            message: 'Type up to 3 characters for your SVG text',
            maxLength: 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Text color: enter a color word or hexadecimal number starting with a #',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose the shape of your SVG',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Shape color: enter a color word or hexadecimal number starting with a #',
        }
    ];

    inquirer.prompt(questions).then(generateSVG)
};

    const generateSVG = (answers) => {
        let shape;

        switch (answers.shape) {
            case 'circle':
                shape = new Circle();
                break;
            case 'triangle':
                shape = new Triangle();
                break;
            case 'square':
                shape = new Square();
                break;
        }

        shape.setColor(answers.shapeColor);

        const svgString = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}"> ${answers.text}</text> </svg>
            `;

            
            // write SVG file
            fs.writeFile('logo.svg', svgString, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg'))
        };
        
        //  Function call to initalize app
        userPrompt();
        
