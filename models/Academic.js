const mongoose = require('mongoose');

const academicSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  field: String,
  startYear: Number,
  endYear: Number,
  grade: String,
  description: String,
  achievements: [String],
  documents: [String]
});

module.exports = mongoose.model('Academic', academicSchema);
