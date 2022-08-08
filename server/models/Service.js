const  { Schema,  model } =  require('mongoose');

const ServiceSchema =  new Schema ({
    service: {
        type: String
    },
    serviceDate: {
        type: Date,
        immutable: true,
        default: Date.now
    },
    notes: {
        type: String
    },
    charge: {
        type: Number
    },
    supplyCost: {
        type: Number
    }

})

const Service = model('Service', ServiceSchema);

module.exports = Service