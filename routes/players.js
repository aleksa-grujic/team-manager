var express = require('express');
var router = express.Router();
var player_controller = require('../controllers/playerController');

/* GET users listing. */
router.get('/', player_controller.player_list);

router.post('/create', player_controller.player_create_post);

module.exports = router;
