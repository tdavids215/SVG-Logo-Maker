// packages & dependecies needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
// imports the switch for the shapes used in the shape questionof the question variable
const shapes = require('./lib/shapes');

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