'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  firsName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {type: String, required: true, unique: true},
  picture: { type: String, default: 'picture.jpeg'},
  options:{
  	geoLocation: {
    	latitude:{ type: Number,default:0},
    	longitude:{ type: Number,default:0}
    },
    racis:{type: String, default: 'R', enum:['R', 'A', 'C', 'I', 'S']}
  },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;