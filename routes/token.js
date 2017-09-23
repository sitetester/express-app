var express = require('express');
var router = express.Router();

const User = require('../models').User;

router.post('/', function(req, res, next) {

  if (req.body.grant_type === 'password') {
    User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(function(user) {
      if (user) {
        res.status(200).send({
          // get secure token from DB, should be already saved during user sign up process
          "access_token": "123ABC"
        });
      } else {
        res.status(400).send({
          "error": "Invalid username/password."
        });
      }
    });
  } else {
    res.status(400).send({
      "error": "unsupported_grant_type"
    });
  }

});


module.exports = router;
