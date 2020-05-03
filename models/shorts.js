var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShortsSchema = new Schema(
  {
    number: {type: String, required: true},
    status: {type: String, required: true, enum: ['U upotrebi', 'Slobondo', 'Neupotrebljivo'], default: 'Slobodno'},
    player: {type: Schema.Types.ObjectId, ref: 'Player'},
    description: {type: String, max: 500}
  }
);

// Virtual for player's URL
ShortsSchema
.virtual('url')
.get(function () {
  return '/shorts/' + this._id;
});

//Export model
module.exports = mongoose.model('Shorts', ShortsSchema);