class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new TypeError("Cannot construct shape instance directly");
        }
    }

    area() {
        throw new Error('Method "area()" must be implemented');
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

const square = new Square(10);
console.log(square.area());

// const shape = new Shape(); // Throws TypeError