const { Schema, model } = require('mongoose');

const UnitSchema = new Schema({
    street: {
        type: String
    },
    city: {
        type: String
    },
    zip: {
        type: String
    },
    footage: {
        type: String
    },
    unitDescription: {
        type: String
    },
    notes: {
        type: String
    },
    colorPattern: [],
    // services: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Service'
    //     }
    // ]
})

const Unit = model('Unit', UnitSchema);

module.exports = Unit;