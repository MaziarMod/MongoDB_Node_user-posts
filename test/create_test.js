// That is the purpose of this test file is to make sure that we can create a new user and save it to our database.
const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    const joe = new User({ name: 'Joe' });

    joe.save().then(() => {
      // Has joe been saved successfully?
      assert(!joe.isNew);
      done();
    });
  });
});
