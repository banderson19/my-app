const { Schema, model } = require('mongoose');

const ClientSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        upperCase: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true, 
        upperCase: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    // main address
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    zip: {
        type: Number
    },
    notes: {
        type: String
    },
    clientAcquired: {
        type: Date,
        default: Date.now
    },
    units: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Unit'
        }
    ],
    services: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Service'
        }
    ]
})


const Client = model('Client', ClientSchema);

module.exports = Client