const mongoose = require('mongoose');

const participationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: String,
  result: String,
  date: { type: Date },
  takeaway: String,
  certificate: String,
  images: [String]
});

module.exports = mongoose.model('Participation', participationSchema);
