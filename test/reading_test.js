const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let joe;

  // before each test, we are creating the record for Joe to be able to test if Joe exists or not
  beforeEach((done) => {
    alex = new User({ name: 'Alex' });
    joe = new User({ name: 'Joe' });
    maria = new User({ name: 'Maria' });
    zach = new User({ name: 'Zach' });

    Promise.all([joe.save(), alex.save(), maria.save(), zach.save()]).then(() =>
      done()
    );
  });

  it('find all users with a name of joe', (done) => {
    User.find({ name: 'Joe' }).then((users) => {
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    });
  });

  it('find a user with a particular id', (done) => {
    User.findOne({ _id: joe._id }).then((user) => {
      assert(user.name === 'Joe');
      done();
    });
  });

  it('can skip and limit the result set', (done) => {
    User.find({})
      .sort({ name: 1 })
      .skip(1)
      .limit(2)
      .then((users) => {
        assert(users.length === 2);
        assert(users[0].name === 'Joe');
        assert(users[1].name === 'Maria');
        done();
      });
  });
});
