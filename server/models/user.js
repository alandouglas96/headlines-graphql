const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: { type: Number, allowNull: false},
  displayName: { type: String, allowNull: false},
})



 

module.exports = mongoose.model('userSchema', userSchema);