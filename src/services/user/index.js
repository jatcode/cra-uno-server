'use strict';

const service = require('feathers-mongoose');
const user = require('./user-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: user,
    paginate: {
      default: 10,
      max: 25
    },
    lean:true
  };

  // Initialize our service with any options it requires
  app.use('/users', service(options));

  //hooks
  const userService = app.service('/users');
  userService.before(hooks.before);
  userService.after(hooks.after);
};
