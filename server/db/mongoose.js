var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // configure mongoose to use promises
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoNode');

module.exports = {mongoose};
