const Rectangle = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }
};

const rect = new Rectangle(10,20);
console.log(rect.area);