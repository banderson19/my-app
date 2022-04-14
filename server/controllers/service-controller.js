const { Service, Client, Unit } = require('../models');

const serviceController = {

    // add service to Client
    addService({params, body}, res) {
        console.log('service body', body);
        console.log('service client id', params.clientId)
        Service.create(body)
            .then(({ _id }) => {
                return Client.findOneAndUpdate(
                    { _id: params.clientId }, 
                    { $push: { services: _id } }, 
                    { new: true }
                );
            })
            .then(dbClientData => {
                if (!dbClientData) {
                    res.status(404).json({ message: "no Client foudn with id"})
                    return;
                }
                res.json(dbClientData);
            })
            .catch(err => res.json(err))
    },
    //update service
    updateService({ params, body }, res) {
        Service.findOneAndUpdate({ _id: params.serviceId }, body, {new: true})
        .then(dbServiceData => {
            console.log('serviceController', body)
            console.log('service', services)
            if(!dbServiceData) {
                return res.status(404).json({ message: 'no service with this id'})
            }
            return Client.findOneAndUpdate(
                { _id: params.clientId },
                { $set: {services: body} },
                { new: true }
            )
        })
        .then(dbClientData => {
            if (!dbClientData) {
                res.status(404).json({ message: 'No client with this id' })
                return;
            }
            res.json(dbClientData)
        })
        .catch(err => res.json(err))
    },

    //deleteService ** not working 
    deleteService({ params }, res) {
        Service.findOneAndUpdate({ _id: params.serviceId })
        .then(deleteService => {
            if (!deleteService) {
                return res.status(404).json({ message: 'no service with is id'})
            }
            return Client.findByIdAndUpdate(
                { _id: params.clientId },
                { $pull: {service: params.serviceId }},
                { new: true }
            );
        })
        .then(dbClientData => {
            if (!dbClientData) {
                res.status(404).json({message: 'no client with this id'})
                return;
            }
            res.json(dbClientData);
        })
        .catch( err => res.json(err))
    }
}

module.exports = serviceController;