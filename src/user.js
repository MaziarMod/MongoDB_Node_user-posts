const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create schema
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.',
    },
    required: [true, 'Name is required.'],
  },
  postCount: Number,
});

// create model
// if there is no user collection, mongoose will create it.
const User = mongoose.model('user', UserSchema);

module.exports = User;
