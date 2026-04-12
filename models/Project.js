const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String },
  techStack: [String],
  domain: { type: String, default: 'Other' },
  presentedAt: String,
  isCompetition: { type: Boolean, default: false },
  result: String,
  outcome: String,
  githubLink: String,
  liveLink: String,
  images: [String],
  deploymentPhotos: [String],
  testingPhotos: [String],
  priorityOverride: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
