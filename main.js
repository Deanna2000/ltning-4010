
const CarFactory = (make, model, year) => {
    return Object.create({}, {
        make: {
            enumerable: true,
            value: make
        },
        model: {
            enumerable: true,
            value: model
        },
        yearmanufactured: {
            enumerable: true,
            value: year
        }
       })
    }

const malibu = CarFactory("Chevy", "Malibu", 1987)

console.log(malibu)