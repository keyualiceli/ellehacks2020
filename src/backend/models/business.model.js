const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const businessSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  values: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  give: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
},
{
  timestamps: true,
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
