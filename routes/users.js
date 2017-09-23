var express = require('express');
var router = express.Router();

var models = require('../models');
var User = models.User;


router.get('/', function(req, res, next) {
  User.findAll().then(users => {
    res.json({
      "Users": users
    });
  })
});


router.post('/', function(req, res, next) {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(422).send({
        "errors": [{
          "detail": "email already taken.",
          "source": {
            "pointer": "data/attributes/email"
          }
        }]
      });
    } else {
      User.create({
          'username': req.body.username,
          'password': req.body.password, // store hash
          'email': req.body.email,
          'name': req.body.name,
          'age': req.body.age
        })
        .then(newUser => {
          res.send(newUser);
        })
        .catch(err => {
          res.send(err);
        });
    }
  });
});

module.exports = router;
