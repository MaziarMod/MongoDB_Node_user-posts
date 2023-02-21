const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/users_test');
mongoose.connection
  .once('open', () => {
    console.log('Good to go!');
  })
  .on('error', (error) => {
    console.warn('Warning', error);
  });
