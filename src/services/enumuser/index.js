'use strict'

module.exports = function() {
  const app = this;
  
  class EnumService {
    find(params) {
      const { service, path } = params.query;
      const values = this.app.service(service).Model.schema.path(path).enumValues;

      return Promise.resolve(values);
    }

    setup(app) {
      this.app = app;
    }
  }

  app.use('/enums', new EnumService());
  
}
// this is how you would actually get theenums 
//this.Model.schema.path('ris').enumValues
