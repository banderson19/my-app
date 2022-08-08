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
    // billing address
    street: {
        type: String,
        upperCase: true
    },
    city: {
        type: String,
        upperCase: true
    },
    zip: {
        type: Number,
        trim: true
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
    // services: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Service'
    //     }
    // ]
})


const Client = model('Client', ClientSchema);

module.exports = Client

// {
//     "firstName": "",
//     "lastName": "",
//     "phoneNumber": "",
// 		"email": "",
// 		"street": "",
// 		"city": "",
// 		"zip": "",
//     "notes": "",
// 		"clientAcquired": "2018-10-01T00:00:00.864Z"
// }