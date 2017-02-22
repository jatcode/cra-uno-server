'use strict';
const mongoose = require('mongoose');
const authentication = require('./authentication');
const user = require('./user');
const enums = require('./enumuser');
const upload = require('./upload');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(enums);
  app.configure(upload);
};
