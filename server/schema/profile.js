const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  email: String,
  password: String,
  userType: String,
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
