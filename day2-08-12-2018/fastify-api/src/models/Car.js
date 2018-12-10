const MONGOOSE = require('mongoose');
const carSchema = new MONGOOSE.Schema({
    title: String,
    brand: String,
    price: String,
    age: Number,
    services: {
        type: Map,
        of: String
    }
})
module.exports = MONGOOSE.model('Car', carSchema);