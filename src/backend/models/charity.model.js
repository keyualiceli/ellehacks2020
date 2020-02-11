const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charitySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  mission: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  needs: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
},
{
  timestamps: true,
});

const Charity = mongoose.model('Charity', charitySchema);

module.exports = Charity;
