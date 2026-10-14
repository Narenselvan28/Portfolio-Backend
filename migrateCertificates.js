const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Models
const Certification = require('./models/Certification');
const Participation = require('./models/Participation');

dotenv.config();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (filePath, folder = 'portfolio/certificates') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
      resource_type: 'auto'
    });
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error.message);
    return null;
  }
};

const certificationsDir = path.join(__dirname, '..', 'certifications');

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const certData = [
      {
        file: 'Business Fundamentals for Entrepreneurs (1).pdf',
        title: 'Business Fundamentals for Entrepreneurs',
        issuer: 'NPTEL (IIT Bombay)',
        category: 'Business',
        date: '2025-04-30',
        skills: ['Entrepreneurship', 'Business Strategy'],
        takeaway: 'Learned core principles of starting and managing a business.'
      },
      {
        file: 'Introduction to Large Language Models (LLMs) (5).pdf',
        title: 'Introduction to Large Language Models (LLMs)',
        issuer: 'NPTEL (IIT Madras)',
        category: 'ML',
        date: '2025-10-31',
        skills: ['LLMs', 'NLP', 'Generative AI'],
        takeaway: 'Gained in-depth knowledge of transformer architectures and LLM training.'
      },
      {
        file: 'WhatsApp Image 2026-04-17 at 10.23.52 PM (1).jpeg',
        title: 'Javascript',
        issuer: 'GUVI',
        category: 'Web',
        date: '2026-03-20',
        skills: ['Javascript', 'Frontend Development'],
        takeaway: 'Mastered advanced Javascript concepts and applications.'
      },
      {
        file: 'WhatsApp Image 2026-04-17 at 10.23.53 PM.jpeg',
        title: 'Arduino in Tamil',
        issuer: 'GUVI',
        category: 'IoT',
        date: '2025-04-20',
        skills: ['Arduino', 'IoT', 'Embedded Systems'],
        takeaway: 'Learned micro-controller programming and hardware interfacing.'
      },
      {
        file: 'vsWhatsApp Image 2026-04-17 at 10.23.53 PM.jpeg',
        title: 'HTML & CSS in Tamil',
        issuer: 'GUVI',
        category: 'Web',
        date: '2024-09-21',
        skills: ['HTML5', 'CSS3', 'Web Design'],
        takeaway: 'Solid foundation in semantic HTML and responsive CSS.'
      },
      {
        file: 'fdWhatsApp Image 2026-04-17 at 10.23.54 PM.jpeg',
        title: 'Machine Learning using Python Programming',
        issuer: 'Udemy',
        category: 'ML',
        date: '2025-10-04',
        skills: ['Machine Learning', 'Python', 'Scikit-Learn'],
        takeaway: 'Practical implementation of ML algorithms using Python libraries.'
      },
      {
        file: 'Jul_Firstyear_133.pdf',
        title: 'Linguaskill Business (B2)',
        issuer: 'Cambridge English',
        category: 'Core',
        date: '2025-07-17',
        skills: ['Professional Communication', 'English Proficiency'],
        takeaway: 'Achieved B2 level in business English proficiency.'
      },
      {
        file: 'adsfWhatsApp Image 2026-04-17 at 10.40.11 PM.jpeg',
        title: 'Python Programming',
        issuer: 'Dr. Mahalingam College (Summer Camp 2024)',
        category: 'Languages',
        date: '2024-05-04',
        skills: ['Python Basics', 'Logic Building'],
        takeaway: 'Introduction to programming logic and Python syntax.'
      }
    ];

    const participationData = [
      {
        file: 'Certificate_Naren Selvan T (1).pdf',
        title: 'TN-IMPACT 2026 - Industrial Hackathon',
        organization: 'TANCAM / TN Govt',
        date: '2026-03-14',
        result: 'Participant',
        takeaway: 'Worked on modernization and problem solving for industrial challenges.'
      },
      {
        file: 'NARAN  SELVAN  T.pdf',
        title: 'DigiFest 2K26 - Web Nova',
        organization: 'MCET (Digiflash CSE Association)',
        date: '2026-03-24',
        result: 'I Prize',
        takeaway: 'Secured first prize in the Web Nova competition.'
      },
      {
        file: 'afdsfsaWhatsApp Image 2026-04-17 at 10.42.12 PM.jpeg',
        title: 'Hacksprint 2.0',
        organization: 'Cognizant / StartupTN / Karpagam Academy',
        date: '2026-01-22',
        result: 'Participant',
        takeaway: 'National level 36-hour hackathon focused on rapid prototyping.'
      },
      {
        file: 'fdsaWhatsApp Image 2026-04-17 at 10.40.26 PM.jpeg',
        title: 'Sakthi Hackathon 1.0',
        organization: 'MCET',
        date: '2025-08-14',
        result: 'Participant',
        takeaway: 'Participated in a 24-hour national level hackathon.'
      },
      {
        file: 'afdsWhatsApp Image 2026-04-17 at 10.27.34 PM.jpeg',
        title: 'Inno Blitz Hackathon 1.0',
        organization: 'Sri Ramakrishna Engineering College',
        date: '2024-10-17',
        result: 'Participant',
        takeaway: 'Ideathon participation focused on innovative engineering solutions.'
      },
      {
        file: 'Naren Selvan Certificate - Kallikrates\'24 (1).pdf',
        title: 'Kallikrates\'24 (Paper Presentation)',
        organization: 'KPR Institute',
        date: '2024-10-24',
        result: 'Participant',
        takeaway: 'Presented a technical paper at the national level symposium.'
      },
      {
        file: 'afdssafWhatsApp Image 2026-04-17 at 10.41.32 PM.jpeg',
        title: 'Convergence 2K25 (Paper Presentation)',
        organization: 'Nehru Institute of Technology',
        date: '2025-03-20',
        result: 'Participant',
        takeaway: 'Technical paper presentation on innovative systems.'
      },
      {
        file: 'safdWhatsApp Image 2026-04-17 at 10.41.20 PM.jpeg',
        title: 'Convergence 2K25 (Brain Tech Quiz)',
        organization: 'Nehru Institute of Technology',
        date: '2025-03-20',
        result: 'Participant',
        takeaway: 'Engagement in technical quiz covering diverse engineering domains.'
      },
      {
        file: 'FIESTAA26 Certificate of Participation (1) (1).pdf',
        title: 'FIESTAA\'26 (Webforge)',
        organization: 'KPR Institute',
        date: '2026-02-21',
        result: 'Participant',
        takeaway: 'Web development challenge during the FIESTAA symposium.'
      },
      {
        file: 'FIESTAA26 Certificate of Participation (2).pdf',
        title: 'FIESTAA\'26 (Black Box Challenge)',
        organization: 'KPR Institute',
        date: '2026-02-21',
        result: 'Participant',
        takeaway: 'Logic-based Black Box challenge at FIESTAA.'
      },
      {
        file: 'cafWhatsApp Image 2026-04-17 at 10.39.48 PM.jpeg',
        title: 'State Level Science Exhibition',
        organization: 'TNSCST',
        date: '2025-02-28',
        result: 'Participant',
        takeaway: 'Showcased a technical project at the state-level exhibition.'
      },
      {
        file: 'asdfsfdsWhatsApp Image 2026-04-17 at 10.41.56 PM.jpeg',
        title: 'Talk Fest 3.0',
        organization: 'MCET',
        date: '2024-12-06',
        result: 'Participant',
        takeaway: 'Focused on communication skills and presentation techniques.'
      },
      {
        file: 'asdfsaWhatsApp Image 2026-04-17 at 10.40.57 PM.jpeg',
        title: 'Solar Ambassador Workshop',
        organization: 'Energy Swaraj Foundation (IIT Bombay initiative)',
        date: '2024-10-02',
        result: 'Participant',
        takeaway: 'Hands-on workshop on solar energy and lamp assembly.'
      },
      {
        file: 'dfWfdhatsApp Image 2026-04-17 at 10.39.33 PM.jpeg',
        title: 'Nimbuz Cloud Workshop',
        organization: 'Nimbuz / MCET',
        date: '2026-01-17',
        result: 'Participant',
        takeaway: 'Learned cloud architecture, hosting, and AI model deployment.'
      },
      {
        title: 'UIDAI Hackathon',
        organization: 'UIDAI (Government of India)',
        date: '2025-11-20',
        result: 'Participant',
        takeaway: 'Worked on identity systems, data management, and scalable public infrastructure. Gained exposure to government-level problem solving and secure system design.'
      }
    ];

    console.log('--- Uploading Certifications ---');
    for (const cert of certData) {
      const filePath = path.join(certificationsDir, cert.file);
      console.log(`Uploading ${cert.file}...`);
      const imageUrl = await uploadToCloudinary(filePath);
      if (imageUrl) {
        await Certification.create({
          title: cert.title,
          issuer: cert.issuer,
          category: cert.category,
          date: new Date(cert.date),
          skills: cert.skills,
          takeaway: cert.takeaway,
          certificateImage: imageUrl
        });
        console.log(`Saved ${cert.title}`);
      }
    }

    console.log('--- Uploading Participations ---');
    for (const part of participationData) {
      let imageUrl = null;
      if (part.file) {
        const filePath = path.join(certificationsDir, part.file);
        console.log(`Uploading ${part.file} for ${part.title}...`);
        imageUrl = await uploadToCloudinary(filePath, 'portfolio/participations');
      }

      await Participation.create({
        title: part.title,
        organization: part.organization,
        result: part.result,
        date: new Date(part.date),
        takeaway: part.takeaway,
        certificate: imageUrl
      });
      console.log(`Saved ${part.title}`);
    }

    console.log('Migration complete!');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

run();
