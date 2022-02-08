const { Schema, model } = require('mongoose');

const ClientSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    notes: {
        type: String
    },
    clientAcquired: {
        type: Date,
        default: Date.now
    }
})

const Client = model('Client', ClientSchema);

module.exports = Client