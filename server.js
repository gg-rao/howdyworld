var express = require('express');
var mongoose = require("mongoose");

module.exports = function() {
  var app = express();

  app.get('/', function(req, res) {
    console.log("Made contact with AWS")
    res.send('Hello, world!');
  });

  app.get('/user/:user', function(req, res) {
    mongoose.connect("mongodb://localhost:27017/test");
    res.send('Page for user ' + req.params.user + ' with option ' +
      req.query.option);
  });

  return app;
};
