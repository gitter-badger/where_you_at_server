﻿// here is where mongoose gets the models wired up
var mongoose = require('mongoose');
var userModel = require('../models/User');
    //contractModel = require('../models/Contract'),
    //companyModel = require('../models/Company'),
    //customerModel = require('../models/Customer'),
    //bidModel = require('../models/Bid');

module.exports = function (config) {

    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('whereyouat2 db opened');
    });

    //create the mock data here.
    userModel.createDefaultUsers();
    




};

