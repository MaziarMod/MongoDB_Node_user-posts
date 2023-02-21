const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const UserSchema = new Schema({
  name: String,
});

// create model
// if there is no user collection, mongoose will create it.
const User = mongoose.model('user', UserSchema);

module.exports = User;
