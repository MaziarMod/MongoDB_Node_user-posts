const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
//mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://127.0.0.1:27017/users_test');
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //Ready to run the next test
    done();
  });
});
