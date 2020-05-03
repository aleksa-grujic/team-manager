var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100, required: true},
    last_name: {type: String, required: true, max: 100, required: true},
    date_of_birth: {type: Date},
    city: {type: String, required: true, max: 100, required: true},
    status: {type: String, required: true, enum: ['Aktivan', 'Neaktivan'], default: 'Aktivan'},
    helmet: { type: Schema.Types.ObjectId, ref: 'Helmet'},
    pad: { type: Schema.Types.ObjectId, ref: 'Pad'},
    shorts: { type: Schema.Types.ObjectId, ref: 'Shorts'},
    protection: { type: Schema.Types.ObjectId, ref: 'Protection'},
    jersey: { type: Schema.Types.ObjectId, ref: 'Jersey'},
  }
);

// Virtual for author's full name
PlayerSchema
.virtual('name')
.get(function () {

  var fullname = '';
  if (this.first_name && this.last_name) {
    fullname = this.last_name + ', ' + this.first_name
  }
  if (!this.first_name || !this.last_name) {
    fullname = '';
  }

  return fullname;
});

// Virtual for player's URL
PlayerSchema
.virtual('url')
.get(function () {
  return '/player/' + this._id;
});

//Export model
module.exports = mongoose.model('Player', PlayerSchema);