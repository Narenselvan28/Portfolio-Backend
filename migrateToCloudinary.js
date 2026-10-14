const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const Project = require('./models/Project');
const Academic = require('./models/Academic');
const Certification = require('./models/Certification');
const Participation = require('./models/Participation');
const Event = require('./models/Event');

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (filePath, folder = 'portfolio/assets') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, { folder, resource_type: 'auto' });
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error.message);
    return null;
  }
};

const processUrl = async (url) => {
  if (url && url.startsWith('/assets/')) {
    const absolutePath = path.join(__dirname, '../frontend/public', url);
    if (fs.existsSync(absolutePath)) {
      console.log(`Uploading ${url}...`);
      const cloudUrl = await uploadToCloudinary(absolutePath);
      if (cloudUrl) {
        console.log(`Success: ${cloudUrl}`);
        return cloudUrl;
      }
    } else {
      console.log(`File not found: ${absolutePath}`);
    }
  }
  return url;
};

const processArray = async (arr) => {
  if (!arr || !Array.isArray(arr)) return arr;
  const newArr = [];
  for (let url of arr) {
    newArr.push(await processUrl(url));
  }
  return newArr;
};

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    // Projects
    const projects = await Project.find({});
    for (let p of projects) {
      let changed = false;
      if (p.images && p.images.length > 0) {
        const newImages = await processArray(p.images);
        if (JSON.stringify(p.images) !== JSON.stringify(newImages)) {
          p.images = newImages;
          changed = true;
        }
      }
      if (p.coverImage && p.coverImage.startsWith('/assets/')) {
         p.coverImage = await processUrl(p.coverImage);
         changed = true;
      }
      if (changed) await p.save();
    }

    // Participations
    const participations = await Participation.find({});
    for (let p of participations) {
      let changed = false;
      if (p.images && p.images.length > 0) {
        const newImages = await processArray(p.images);
        if (JSON.stringify(p.images) !== JSON.stringify(newImages)) {
          p.images = newImages;
          changed = true;
        }
      }
      if (p.certificate && p.certificate.startsWith('/assets/')) {
         p.certificate = await processUrl(p.certificate);
         changed = true;
      }
      if (changed) await p.save();
    }

    // Certifications
    const certs = await Certification.find({});
    for (let c of certs) {
      let changed = false;
      if (c.certificateImage && c.certificateImage.startsWith('/assets/')) {
         c.certificateImage = await processUrl(c.certificateImage);
         changed = true;
      }
      if (changed) await c.save();
    }

    // Academics
    const academics = await Academic.find({});
    for (let a of academics) {
      let changed = false;
      if (a.documents && a.documents.length > 0) {
        const newDocs = await processArray(a.documents);
        if (JSON.stringify(a.documents) !== JSON.stringify(newDocs)) {
          a.documents = newDocs;
          changed = true;
        }
      }
      if (changed) await a.save();
    }
    
    // Events
    const events = await Event.find({});
    for (let e of events) {
      let changed = false;
      if (e.images && e.images.length > 0) {
        const newImages = await processArray(e.images);
        if (JSON.stringify(e.images) !== JSON.stringify(newImages)) {
          e.images = newImages;
          changed = true;
        }
      }
      if (changed) await e.save();
    }

    console.log('Migration complete!');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
