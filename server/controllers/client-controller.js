const { Client } = require('../models');

const clientController = {
    // get all clients
    getAllClient(req, res) {
        Client.find({})
            .populate({
                path: 'units',
                select: '-__v'
            })
            .populate({
                path: 'services',
                select: '-__v'
            })
            .select('-__v')
            .sort({_id:-1})
            .then(dbClientData => res.json(dbClientData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    // get on client by id
    getClientById({ params }, res) {
        Client.findOne({ _id: params.id })
            .populate({
                path: 'units',
                select: '-__v'
            })
            .populate({
                path: 'services',
                select: '-__v'
            })
            .then(dbClientData => {
                // If no pizza is found, send 404
                if (!dbClientData) {
                    res.status(404).json({ message: 'No client found with this id!' });
                    return;
                }
                res.json(dbClientData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // create client
    createClient({ body }, res) {
        Client.create(body)
            .then(dbClientData => res.json(dbClientData))
            .catch(err => res.status(400).json(err));
    },
    // update client by id
    updateClient({ params, body }, res) {
        Client.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbClientData => {
                if (!dbClientData) {
                    res.status(404).json({ message: 'No Client found with this id!' });
                    return;
                }
                res.json(dbClientData);
            })
            .catch(err => res.status(400).json(err));
    },
    // delete client
    deleteClient({ params }, res) {
        Client.findOneAndDelete({ _id: params.id })
            .then(dbClientData => {
                if (!dbClientData) {
                    res.status(404).json({ message: 'No Client found with this id!' });
                    return;
                }
                res.json(dbClientData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = clientController;