'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const dauria = require('dauria');

exports.before = {
  all: [
    // auth.verifyToken(),
    // auth.populateUser(),
    // auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [
		function(hook) {
						// console.log('THE hook', hook);
						// console.log('keys', Object.keys(hook));
            console.log('hook.params.file', hook.params.file);
            console.log('hook.data.uri', hook.data.uri);
            console.log('hook.data', hook.data);
						// console.log('data', Object.keys(hook.data));
						// console.log('params ', hook.params);
            
			/* if (!hook.data.uri && hook.params.file){
          const file = hook.params.file;
          const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
          hook.data = {uri: uri};
			}*/
		}
  ],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
