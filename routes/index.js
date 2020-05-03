var express = require('express');
var router = express.Router();
var player_controller = require('../controllers/playerController');

/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', player_controller.player_list);
});

module.exports = router;
