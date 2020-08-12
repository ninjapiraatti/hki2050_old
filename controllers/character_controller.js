const mongoose = require('mongoose');
const character = mongoose.model('character');

exports.create_a_character = (req, res) => {
  const newCharacter = new character(req.body);
  newCharacter.save((err, character) => {
    if (err) res.send(err);
    res.json(character);
  });
};

exports.read_a_character = (req, res) => {
  character.findById(req.params.characterId, (err, character) => {
    if (err) res.send(err);
    res.json(character);
  });
};

exports.update_a_character = (req, res) => {
  character.findOneAndUpdate(
    { _id: req.params.characterId },
    req.body,
    { new: true },
    (err, character) => {
      if (err) res.send(err);
      res.json(character);
    }
  );
};

exports.delete_a_character = (req, res) => {
  character.deleteOne({ _id: req.params.characterId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'character successfully deleted',
     _id: req.params.characterId
    });
  });
};