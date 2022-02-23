const { Unit, Client } = require('../models');

const unitController = {
    
  // add unit to Client
  addUnit({ params, body }, res) {
    console.log('body', body);
    console.log('id', params.clientId)
    Unit.create(body)
      .then(({ _id }) => {
        return Client.findOneAndUpdate(
          { _id: params.clientId },
          { $push: { units: _id } },
          { new: true }
        );
      })
      .then(dbClientData => {
        if (!dbClientData) {
          res.status(404).json({ message: 'No client found with this id!' });
          return;
        }
        res.json(dbClientData);
      })
      .catch(err => res.json(err));
  },
  // update unit
  updateUnit({ params, body }, res) {
    Unit.findOneAndUpdate({ _id: params.unitId }, body, { new: true })
    .then(dbUnitData => {
      console.log('controller',  body)
      console.log('unit', units)
      if (!dbUnitData) {
                return res.status(404).json({ message: 'No unit found with this id!' });
              }
              return Client.findOneAndUpdate(
                { _id: params.clientId },
                { $set: {units: body}  },
                { new: true }
                )
                
        })
        .then(dbClientData => {
            if (!dbClientData) {
                res.status(404).json({ message: 'No client found with this id'});
                return;
            }
            res.json(dbClientData)
        })
        .catch(err => res.json(err));
    },
  // delete unit
  deleteUnit({ params }, res) {
    Unit.findOneAndDelete({ _id: params.unitId })
      .then(deletedUnit => {
        if (!deletedUnit) {
          return res.status(404).json({ message: 'No unit with this id!' });
        }
        return Client.findOneAndUpdate(
          { _id: params.clientId },
          { $pull: { units: params.unitId } },
          { new: true }
        );
      })
      .then(dbClientData => {
        if (!dbClientData) {
          res.status(404).json({ message: 'No client found with this id!' });
          return;
        }
        res.json(dbClientData);
      })
      .catch(err => res.json(err));
  },
//   // remove reply
//   removeReply({ params }, res) {
//     Comment.findOneAndUpdate(
//       { _id: params.commentId },
//       { $pull: { replies: { replyId: params.replyId } } },
//       { new: true }
//     )
//       .then(dbPizzaData => res.json(dbPizzaData))
//       .catch(err => res.json(err));
//   }
};

module.exports = unitController;