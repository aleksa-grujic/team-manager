var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProtectionSchema = new Schema(
  {
    number: {type: String, required: true},
    status: {type: String, required: true, enum: ['U upotrebi', 'Slobondo', 'Neupotrebljivo'], default: 'Slobodno'},
    player: {type: Schema.Types.ObjectId, ref: 'Player'},
    description: {type: String, max: 500}
  }
);

// Virtual for player's URL
ProtectionSchema
.virtual('url')
.get(function () {
  return '/protection/' + this._id;
});

//Export model
module.exports = mongoose.model('Protection', ProtectionSchema);