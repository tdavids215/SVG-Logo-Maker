// packages & dependecies needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
// imports the switch for the shapes used in the shape questionof the question variable
const generateSVG = require('./lib/shapes');

// questions 
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Type up to 3 characters for your SVG',
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
]
// function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg'))
}


// initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const svgFile = generateSVG(answers);
        writeToFile('logo.svg', svgFile);
    })
}

//  Function call to initalize app
init();