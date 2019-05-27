//import mongoose
const mongoose = require("mongoose");
//make a connection with local instance of mongodb
mongoose.connect("mongodb://localhost/test");
// attempt a connection and save it to a variable  ??????????
const db = mongoose.connection;
//check for connection error
db.on(`error`, console.error.bind(console, `connection error`));
//perform the following set of actions once
db.once(`open`, () => {

    console.log(`connected`)
    //define a schema
    const kittySchema = new mongoose.Schema({
        name: String
    })
    //add a method to schema
    kittySchema.methods.speak = function () {
        const greeting = this.name ?
            `meow name is : ${this.name}` : `I don't have a name`;
        console.log(greeting)
    }
    // make a model based on kitty schema
    const Kitten = mongoose.model('Kitten', kittySchema);
    //make a new kitten with name silence
    const Silence = new Kitten({
        name: 'Silence'
    })
    const Fluffy = new Kitten({
        name: "Fluffy"
    })
    //fluffy has all methods given to kittySchema
    Fluffy.speak()
    console.log(`${Silence.name}`);
    Fluffy.speak()
    Silence.speak()
    //save fluffy to mongodb
    Fluffy.save(function (err, name) {
        if (err) return console.log(err);
        Fluffy.speak()
    })
    //save silence, straightforward
    Silence.save()
    //find all kittens in the database under Kitten
    Kitten.find((err, kittens) => {
        if (err) {
            console.log(err)
        } else {
            console.log(kittens);
        }
    })
})