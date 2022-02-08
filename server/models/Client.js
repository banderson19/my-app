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
    },
    units: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Unit'
        }
    ]
})

const Client = model('Client', ClientSchema);

module.exports = Client