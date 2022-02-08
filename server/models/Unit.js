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
    description: {
        type: String
    },
    colorPattern: []
})