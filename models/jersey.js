var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var JerseySchema = new Schema(
  {
    number: {type: String, required: true},
    status: {type: String, required: true, enum: ['U upotrebi', 'Slobondo', 'Neupotrebljivo'], default: 'Slobodno'},
    player: {type: Schema.Types.ObjectId, ref: 'Player'},
    description: {type: String, max: 500}
  }
);

// Virtual for player's URL
JerseySchema
.virtual('url')
.get(function () {
  return '/jersey/' + this._id;
});

//Export model
module.exports = mongoose.model('Jersey', JerseySchema);