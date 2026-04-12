const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  category: { type: String, enum: ['Web', 'ML', 'IoT', 'Tools', 'Backend'] },
  date: { type: Date },
  skills: [String],
  takeaway: String,
  certificateImage: String,
  link: String
});

module.exports = mongoose.model('Certification', certificationSchema);
