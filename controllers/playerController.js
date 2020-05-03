var Player = require('../models/player');

// Display list of all Players.
exports.player_list = function(req, res, next) {
   var players = Player.find().exec(function (err, list_players) {
    if (err) { return next(err); }
    //Successful, so render
    res.send(list_players);
  });
};

// Display detail page for a specific Player.
exports.player_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Player create form on GET.
exports.player_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Player create on POST.
exports.player_create_post = function(req, res) {
    var player = new Player({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        city: req.body.city
    }).save();
    console.log(player.first_name);
};

// Display Player delete form on GET.
exports.player_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Player delete on POST.
exports.player_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Player update form on GET.
exports.player_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Player update on POST.
exports.player_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};