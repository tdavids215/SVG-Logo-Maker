const { Circle, Triangle, Square } = require('./shapes.js');

describe('Shapes', () => {

    describe('circle', () => {
        it('produces a circle with a blue background', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80"  fill="blue" />');
        });
    });
    describe('triangle', () => {
        it('produces a triangle with a blue background', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    describe('square', () => {
        it('produces a square with a blue background', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="50" y="20" width="200" height="200" fill="blue" />');
        });
    });
});




