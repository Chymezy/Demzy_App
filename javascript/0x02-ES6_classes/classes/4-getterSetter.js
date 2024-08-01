class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._heigth = height;
    }

    get area() {
        return this._width * this._heigth;
    }

    set width(newWidth) {
        this._width = newWidth;
    }
}

const react = new Rectangle(10, 20);
console.log(react.area);
react.width = 15;
console.log(react.area);