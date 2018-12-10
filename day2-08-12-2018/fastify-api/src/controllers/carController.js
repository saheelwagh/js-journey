const BOOM = require('boom');

const CAR = require('../models/Car');

//get all cars
exports.getCars = async (req, reply) => {
    try {
        const CARS = await CAR.find();
        return CARS;
    } catch (err) {
        throw BOOM.boomify(err);
    }
}
//Get Single Car by ID
exports.getSingleCar = async (req, reply) => {
    try {
        const ID = req.params.id
        const CAR = await CAR.findById(id);
        return CAR;
    } catch (err) {
        throw BOOM.boomify(err);
    }
}
// Add a new car
exports.addCar = async (req, reply) => {
    try {
        const car = new CAR(req.body);
        return car.save();
    } catch (err) {
        throw BOOM.boomify(err);
    }
}

// update an existing car
exports.updateCar = async (req, reply) => {
    try {
        const ID = req.params.id;
        const car = req.body;
        const { ...updateData
        } = car;
        const update = await Car.findByIdAndUpdate(id, updateData, {
            new: true
        })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}
// Delete a car
exports.deleteCar = async (req, reply) => {
    try {
        const id = req.params.id
        const car = await Car.findByIdAndRemove(id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}