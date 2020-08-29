const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  key: {
    type: String
  },
  createdAt: {
    type: Date
  },
  counts: {
    type: [Number]
  }
})

module.exports = mongoose.model('Record', recordSchema);