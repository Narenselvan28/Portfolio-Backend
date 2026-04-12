const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  role: String,
  description: { type: String },
  insights: String,
  date: { type: Date },
  location: String,
  participantCount: Number,
  teamSize: Number,
  images: [String]
});

module.exports = mongoose.model('Event', eventSchema);
