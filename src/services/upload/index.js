'use strict';
const hooks = require('./hooks');
const multer = require('multer');
const multipartMiddleware = multer();
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./uploads');

module.exports = function(){
  const app = this;
  // Initialize our service with any options it requires
  app.use('/uploads',
          // multer parses the file named 'uri'.// Without extra params the data is
          // temporarely kept in memory
              //  multipartMiddleware.single('uri'),
          // another middleware, this time to transfer the received file to feathers
  		          // function(req,res,next){
                //   // console.log('Headers ',req.headers)
						    //   //   console.log('this is BODY ',req.body)
						    //   //   console.log('this is request ',req)
								// 	//console.log(req.feathers)
								// 	  req.feathers.file = req.file;
                //     next();
								// },
                blobService({Model: blobStorage})
                // new Service());
  );

  // Get our initialize service to that we can bind hooks
  const uploadService = app.service('/uploads');
  uploadService.before(hooks.before);
  uploadService.after(hooks.after);
};
