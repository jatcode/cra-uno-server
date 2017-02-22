'use strict';
const hooks = require('./hooks');

const multer = require('multer');
const multipartMiddleware = multer();
const dauria = require('dauria');

// feathers-blob service
const blobService = require('feathers-blob');
// Here we initialize a FileSystem storage, // but you can use feathers-blob with any other
// storage service like AWS or Google Drive.
const fs = require('fs-blob-store');
const blobStorage = fs(__dirname + '/uploads');

// class Service {
//   constructor(options) {
//     this.options = options || {};
//   }
// 
//   find(params) {
//     return Promise.resolve([]);
//   }
// 
//   get(id, params) {
//     return Promise.resolve({
//       id, text: `A new message with ID: ${id}!`
//     });
//   }
// 
//   create(data, params) {
//     if(Array.isArray(data)) {
//       return Promise.all(data.map(current => this.create(current)));
//     }
// 
//     return Promise.resolve(data);
//   }
// 
//   update(id, data, params) {
//     return Promise.resolve(data);
//   }
// 
//   patch(id, data, params) {
//     return Promise.resolve(data);
//   }
// 
//   remove(id, params) {
//     return Promise.resolve({ id });
//   }
// }

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/uploads',
                  // multer parses the file named 'uri'.
                // Without extra params the data is
                // temporarely kept in memory
                multipartMiddleware.single('uri'),
                // another middleware, this time to
                // transfer the received file to feathers
                function(req,res,next){
                    req.feathers.file = req.file;
                    next();
                },
                blobService({Model: blobStorage})
                // new Service());
                );

  // Get our initialize service to that we can bind hooks
  const uploadService = app.service('/uploads');

  // Set up our before hooks
  uploadService.before(hooks.before);

  // Set up our after hooks
  uploadService.after(hooks.after);
};

// module.exports.Service = Service;
