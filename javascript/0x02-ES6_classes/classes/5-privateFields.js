class Car {
    #vin;

    constructor(make, model, vin) {
        this.make = make;
        this.model = model;
        this.#vin = vin;
    }

    getVin() {
        return this.#vin;
    }
}   

const car = new Car('Toyata', 'Corolla', '2334683029');
console.log(car.getVin());
// console.log(car.#vin); // syntax error
