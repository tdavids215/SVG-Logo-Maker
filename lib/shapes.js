function renderShape(shape) {
    switch (shape) {
        case 'circle':
            return 'circle cx="150" cy="100" r="80"'
            break;
        case 'triangle':
            return 'polygon points="150, 18 244, 182 56, 182"'
            break;
        case 'square':
            return 'rect x="50" y="20" width="200" height="200"'
            break;
    }
}

function generateSVG(data) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${renderShape(data.shape)} fill="${data.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>
    `
}

module.exports = generateSVG;


// class Shape {
//     constructor(shapeData, textLocation) {
//         this.shapeData = shapeData;
//         this.textLocation = textLocation;

//     }
//     // function here to put data is the right spot?
//     //  ex: ${this.shapeData}
// }

// class Circle extends Shape {
//     constructor(shapeData, textLocation) {
//         this.shapeData = 'circle cx="150" cy="100" r="80"';
//         this.textLocation = 'x="150" y="125"';

//     }
// }

