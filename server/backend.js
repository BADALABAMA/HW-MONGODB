const Users = require('./schema/Profile');

const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  'mongodb+srv://Admin:DxEExbFlqNdYti3Z@dbstep.8knmch5.mongodb.net/?retryWrites=true&w=majority',
  {
    dbName: 'DB',
  },
  {
    collection: 'Users',
  }
);

app.get('/api/get-users', (req, res) => {
  Users.find({}).then((user) => {
    res.json(user);
  });
});

app.post('/api/submit-profile', (req, res) => {
  const newUser = new Users({
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save();
});

app.listen(3000, () => {
  console.log('Server was successfuly loaded on the 3000 port.');
});
