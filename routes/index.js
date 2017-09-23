var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json('Congrats! API is functional.'
  );
});

router.get('/api/notes', function(req, res, next) {
  res.send('NOTES - API Working!');
});

module.exports = router;
