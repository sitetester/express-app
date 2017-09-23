var express = require('express');
var router = express.Router();

const Post = require('../models').Post;


router.get('/', function(req, res, next) {
  resultset = Post
    .findAll({
      order: [
        ['id', 'DESC']
      ],
      attributes: ['id', 'title', 'body']
    })
    .then(posts => res.status(200).send(posts))
    .catch(error => res.status(400).send(error));
});


router.post('/', function(req, res, next) {
  Post
    .create({
      'title': req.body.title,
      'body': req.body.body
    })
    .then(newPost => {
      res.send(newPost);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
