const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  role: String,
  location: String,
  summary: String,
  socials: {
    linkedin: String,
    github: String,
    email: String
  },
  achievements: [String]
});

module.exports = mongoose.model('Profile', profileSchema);
