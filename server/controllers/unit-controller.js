const { Unit, Client } = require('../models');

const unitController = {
  // add unit to Client
  addUnit({ params, body }, res) {
    console.log(body);
    Unit.create(body)
      .then(({ _id }) => {
        return Client.findOneAndUpdate(
          { _id: params.clientId },
          { $push: { units: _id } },
          { new: true }
        );
      })
      .sort({_id:-1})
      .then(dbClientData => {
        if (!dbClientData) {
          res.status(404).json({ message: 'No client found with this id!' });
          return;
        }
        res.json(dbClientData);
      })
      .catch(err => res.json(err));
  },

//   // add reply to comment
//   addReply({ params, body }, res) {
//     Comment.findOneAndUpdate({ _id: params.commentId }, { $push: { replies: body } }, { new: true })
//       .then(dbPizzaData => {
//         if (!dbPizzaData) {
//           res.status(404).json({ message: 'No pizza found with this id!' });
//           return;
//         }
//         res.json(dbPizzaData);
//       })
//       .catch(err => res.json(err));
//   },

//   // remove comment
//   removeComment({ params }, res) {
//     Comment.findOneAndDelete({ _id: params.commentId })
//       .then(deletedComment => {
//         if (!deletedComment) {
//           return res.status(404).json({ message: 'No comment with this id!' });
//         }
//         return Pizza.findOneAndUpdate(
//           { _id: params.pizzaId },
//           { $pull: { comments: params.commentId } },
//           { new: true }
//         );
//       })
//       .then(dbPizzaData => {
//         if (!dbPizzaData) {
//           res.status(404).json({ message: 'No pizza found with this id!' });
//           return;
//         }
//         res.json(dbPizzaData);
//       })
//       .catch(err => res.json(err));
//   },
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