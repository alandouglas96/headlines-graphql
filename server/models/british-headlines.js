const mongoose = require('mongoose');
const { Schema } = mongoose;

const BritishHeadlineSchema = new Schema({
  hash: { type: String, allowNull: false },
  day: { type: Number, allowNull: false},
  month: { type: Number, allowNull: false},
  year: { type: Number, allowNull: false},
  time: { type: String, allowNull: false},
  newspaper: { type: String, allowNull: false},
  headline: { type: String, allowNull: false}
});

module.exports = mongoose.model('britishHeadlines', BritishHeadlineSchema);