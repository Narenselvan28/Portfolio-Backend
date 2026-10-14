const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const Participation = require('./models/Participation');

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (filePath, folder = 'portfolio/participations') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, { folder, resource_type: 'auto' });
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error.message);
    return null;
  }
};

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const certificationsDir = path.join(__dirname, '..', 'certifications');

    const missing = {
      file: 'dasffsWhatsApp Image 2026-04-17 at 10.40.41 PM.jpeg',
      title: 'IGNITE - Paper Presentation',
      organization: 'ISTE Student Chapter / MCET',
      date: '2024-11-22',
      result: 'Participant',
      takeaway: 'Technical paper presentation at the IGNITE association event.'
    };

    const filePath = path.join(certificationsDir, missing.file);
    const imageUrl = await uploadToCloudinary(filePath);

    if (imageUrl) {
      await Participation.create({
        title: missing.title,
        organization: missing.organization,
        result: missing.result,
        date: new Date(missing.date),
        takeaway: missing.takeaway,
        certificate: imageUrl
      });
      console.log(`Saved ${missing.title}`);
    }

    console.log('Supplement complete!');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
