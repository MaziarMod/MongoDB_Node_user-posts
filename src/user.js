const mongoose = require('mongoose');
const PostSchema = require('./post');

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
  posts: [PostSchema],
  likes: Number,
  blogPosts: [{ type: Schema.Types.ObjectId, ref: 'blogPost' }],
});

UserSchema.virtual('postCount').get(function () {
  return this.posts.length;
});

UserSchema.pre('remove', function (next) {
  // pull an another model out of Mongoose that has already been registered.
  const BlogPost = mongoose.model('blogPost');

  // this === joe
  BlogPost.deleteMany({ _id: { $in: this.blogPosts } }).then(() => next());
});

// create model
// if there is no user collection, mongoose will create it.
const User = mongoose.model('user', UserSchema);

module.exports = User;
