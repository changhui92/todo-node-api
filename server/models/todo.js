var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  desc: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  postedAt: {
    type: String,
    default: null
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: String,
    default: null
  }
});

module.exports = {Todo};
