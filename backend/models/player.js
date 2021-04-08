const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String },
  guesses: { type: String },
  time: { type: String },
});
module.exports = mongoose.model("Player", playerSchema);
