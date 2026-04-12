const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Academic = require('./models/Academic');
const Certification = require('./models/Certification');
const Participation = require('./models/Participation');
const Event = require('./models/Event');
const Profile = require('./models/Profile');
const Admin = require('./models/Admin');

dotenv.config();

const data = {
  personalInfo: {
    name: "Naren Selvan",
    role: "ML Enthusiast & IoT Developer",
    location: "Pollachi, India",
    summary: "An enthusiastic engineer focused on building intelligent systems where hardware meets intelligence. Specializing in IoT-ML integration, predictive analytics, and scalable full-stack architectures.",
    socials: {
      linkedin: "https://www.linkedin.com/in/narenselvan28",
      github: "https://github.com/Narenselvan28",
      email: "narenselvan77@gmail.com"
    },
    achievements: [
      "Machine Learning Enthusiast",
      "IoT & Embedded Systems",
      "Full Stack MERN Developer",
      "Hardware-Software Architect",
      "Technical Event Leader",
      "Creative Problem Solver"
    ]
  },
  projects: [
    {
      title: "Machine Health Monitoring System",
      description: "An intelligent monitoring system designed to analyze machine conditions using multi-sensor IoT data and predict failures in real time.",
      longDescription: "The system collects data such as vibration, temperature, and motion, and processes it through machine learning models to detect anomalies and prevent breakdowns. By integrating IoT hardware with ML pipelines, the system enables predictive maintenance, reducing downtime and improving operational efficiency in industrial environments.",
      techStack: ["IoT", "ML", "Vibration Sensors", "Predictive Analytics"],
      domain: "ML + IoT",
      presentedAt: "Industrial IoT Phase",
      images: ["/assets/projects/machine-health/ui.jpg"],
      deploymentPhotos: ["/assets/projects/machine-health/hardware.jpg"],
      testingPhotos: ["/assets/projects/machine-health/ui.jpg"],
      priorityOverride: 110
    },
    {
      title: "Cattle Health Monitoring System",
      description: "Real-time livestock monitoring system tracking vital parameters using IoT sensors and machine learning.",
      longDescription: "Built using ESP32 and Random Forest algorithms, the system enables early disease detection and improves livestock management by tracking temperature, activity levels, and other vitals.",
      techStack: ["ESP32", "Random Forest", "IoT", "ML"],
      domain: "ML + IoT",
      presentedAt: "TNSkills Competition",
      isCompetition: true,
      result: "Finalist",
      images: ["/assets/projects/cattle/ui.png"],
      deploymentPhotos: ["/assets/projects/cattle/esp32-setup.png"],
      testingPhotos: ["/assets/projects/cattle/serial-logs.png"],
      priorityOverride: 105
    },
    {
      title: "Dynamic Developer Portfolio CMS",
      description: "Full-stack MERN-based platform that functions as a personal content management system.",
      longDescription: "Allows dynamic addition and management of projects, certifications, events, and achievements through a secure admin panel. Includes image handling via Cloudinary, priority-based project ranking, and structured content rendering.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
      domain: "Full Stack",
      presentedAt: "Personal Project",
      images: ["/assets/projects/portfolio/ui-dashboard.png"],
      deploymentPhotos: ["/assets/projects/portfolio/server-setup.png"],
      priorityOverride: 100
    },
    {
      title: "Unified Alumni Engagement Platform",
      description: "Scalable platform for Smart India Hackathon to enhance alumni-student interaction.",
      longDescription: "Features AI-driven mentor matching, real-time chat (Firebase), and role-based dashboards to centralize alumni data and improve networking and mentorship.",
      techStack: ["React", "AI Matching", "Firebase", "Real-time Chat"],
      domain: "Full Stack",
      presentedAt: "SIH 2025",
      isCompetition: true,
      result: "Participant",
      images: ["/assets/projects/alumni/ui-main.png"],
      priorityOverride: 95
    },
    {
      title: "PawBridge (Animal Welfare Platform)",
      description: "Platform connecting rescuers, NGOs, and adopters to streamline animal rescue and adoption processes.",
      longDescription: "Allows users to report stray or injured animals, coordinate with NGOs, and manage adoption requests. Enhanced with intelligent features for improved visibility and coordination.",
      techStack: ["Web", "Social Impact", "Rescue Coordination"],
      domain: "ML + IoT",
      presentedAt: "Social Impact Project",
      images: ["/assets/projects/pawbridge/ui.jpg"],
      priorityOverride: 90
    },
    {
      title: "EMS Cocos ERP System",
      description: "Comprehensive ERP system designed to optimize business workflows across multiple modules.",
      longDescription: "Focuses on scalability, modular architecture, and improved UI/UX for efficient data handling and operational management. Integrates both frontend and backend components.",
      techStack: ["ERP", "Modular Architecture", "Scalable Systems"],
      domain: "Full Stack",
      presentedAt: "Jun 2025 - Present",
      images: ["/assets/projects/erp/ui-overview.png"],
      priorityOverride: 85
    },
    {
      title: "ClimCast",
      description: "Real-time weather forecasting web application visualizing live weather data.",
      longDescription: "Fetches and visualizes live weather data using external APIs, providing an interactive interface for users to track weather conditions dynamically.",
      techStack: ["Web", "API Integration", "Data Visualization"],
      domain: "Full Stack",
      presentedAt: "Personal Project",
      images: ["/assets/projects/climcast/ui.png"],
      priorityOverride: 80
    },
    {
      title: "Venture Management Platform",
      description: "Agent-Contractor Management Platform connecting agencies and contractors.",
      longDescription: "Designed responsive UI components and integrated ML-driven features into the interface to support intelligent workflow automation.",
      techStack: ["Frontend", "UX Design", "ML Integration"],
      domain: "Frontend",
      presentedAt: "Frontend Focus",
      images: ["/assets/projects/venture/ui-interface.png"],
      priorityOverride: 75
    },
    {
      title: "Websyra Brand Website",
      description: "Official Websyra website with focus on responsive design, modern UI, and SEO.",
      longDescription: "Designed and deployed with a focus on clean design and performance optimization to strengthen brand presence.",
      techStack: ["Web Design", "SEO", "Branding"],
      domain: "Frontend",
      presentedAt: "Jan 2024 - Feb 2024",
      images: ["/assets/projects/websyra/ui.png"],
      priorityOverride: 70
    },
    {
      title: "Bulk Mail Automation System",
      description: "Automation tool sending 1,000+ personalized emails per day with analytics.",
      longDescription: "Streamlines large-scale communication by automating repetitive tasks and tracking delivery performance with scheduling and analytics.",
      techStack: ["Automation", "Mail Servers", "Analytics"],
      domain: "Tools",
      presentedAt: "Tooling Project",
      images: ["/assets/projects/mail-bot/ui.png"],
      priorityOverride: 65
    },
    {
      title: "Smart Banking RFID System",
      description: "Prototype system using RFID for secure authentication and transaction simulation.",
      longDescription: "Built using ESP32 and MFRC522 modules, demonstrating contactless interaction and embedded system integration.",
      techStack: ["ESP32", "RFID", "Security"],
      domain: "IoT",
      presentedAt: "Embedded Systems Phase",
      deploymentPhotos: ["/assets/projects/banking/hardware.png"],
      priorityOverride: 60
    },
    {
      title: "ESP32 Camera Streaming System",
      description: "Real-time video streaming system using ESP32 camera over WiFi.",
      longDescription: "Demonstrates embedded networking and efficient streaming without external modules.",
      techStack: ["ESP32 Cam", "Networking", "Streaming"],
      domain: "IoT",
      presentedAt: "IoT Lab Phase",
      deploymentPhotos: ["/assets/projects/streaming/hardware.png"],
      priorityOverride: 55
    },
    {
      title: "IoT Health Monitoring Dashboard",
      description: "Web-based dashboard visualizing real-time sensor data collected from IoT devices.",
      longDescription: "Enables monitoring and analysis of environmental conditions through a user-friendly interface.",
      techStack: ["Web Dashboard", "Sensors", "Data Visualization"],
      domain: "IoT",
      presentedAt: "IoT Ecosystem Project",
      images: ["/assets/projects/health-iot/dashboard.png"],
      priorityOverride: 50
    },
    {
      title: "Multi-node IoT Simulation",
      description: "System simulating multiple IoT nodes communicating with a central server.",
      longDescription: "Supports testing of distributed IoT environments and dynamic node interactions.",
      techStack: ["Simulation", "Distributed IoT", "Scalability Testing"],
      domain: "IoT",
      presentedAt: "Distributed Systems Project",
      testingPhotos: ["/assets/projects/multi-node/testing-viz.png"],
      priorityOverride: 45
    },
    {
      title: "Static Portfolio Website (V1)",
      description: "Foundational early version of portfolio built using HTML, CSS, and JS.",
      longDescription: "Focused on UI design and layout, served as the foundation for the current dynamic CMS portfolio.",
      techStack: ["HTML", "CSS", "JavaScript"],
      domain: "Foundational",
      presentedAt: "Early Learning Phase",
      images: ["/assets/projects/v1/ui.png"],
      priorityOverride: 40
    },
    {
      title: "Sensor Integration Systems",
      description: "Worked on integrating multiple sensors (DHT, ADXL, etc.) with ESP32.",
      longDescription: "Focus on collecting and processing real-time environmental and motion data for various health and machine applications.",
      techStack: ["ESP32", "DHT11", "ADXL345", "Sensors"],
      domain: "Foundational",
      presentedAt: "Sensors Lab Phase",
      deploymentPhotos: ["/assets/projects/sensors/hardware.png"],
      priorityOverride: 35
    },
    {
      title: "ESP32 Data Transmission Systems",
      description: "Implemented systems for transmitting sensor data over WiFi using HTTP protocols.",
      longDescription: "Enables real-time communication between devices and servers through structured data transmission.",
      techStack: ["ESP32", "HTTP Protocols", "Networking"],
      domain: "Foundational",
      presentedAt: "Networking Phase",
      testingPhotos: ["/assets/projects/transmission/testing.png"],
      priorityOverride: 30
    }
  ],
  events: [
    {
      title: "Co-Founder — Websyra",
      role: "Co-Founder",
      description: "Contributing to real-world product development, technical execution, and building scalable web solutions.",
      insights: "Transitioned from academic projects to real-world product development and startup experience. Developed frontend systems and helped shape product direction.",
      date: "2024-01-15T00:00:00Z",
      images: ["/assets/events/websyra-launch.png"]
    },
    {
      title: "Office Bearer & Event Coordinator — Spectrum",
      role: "Office Bearer",
      description: "Actively leading and coordinating multiple technical and non-technical events with structured planning.",
      insights: "Built strong leadership, coordination, and execution skills in high-pressure environments. Managed 180+ participants across events.",
      participantCount: 180,
      date: "2025-10-15T00:00:00Z",
      images: ["/assets/events/spectrum-leadership.png"]
    },
    {
      title: "Event Coordination — Spectrum (3 Events)",
      role: "Coordinator",
      description: "Played a key role in organizing and executing 3 Spectrum events, contributing to planning and logistics.",
      insights: "Strengthened teamwork, responsibility, and structured execution skills through logistical management.",
      date: "2025-08-20T00:00:00Z",
      images: ["/assets/events/spectrum-events.png"]
    },
    {
      title: "Class Representative",
      role: "Representative",
      description: "Acted as a communication bridge between students and faculty, ensuring smooth coordination.",
      insights: "Developed communication, accountability, and people management skills by representing student needs effectively.",
      date: "2023-07-01T00:00:00Z"
    }
  ],
  participations: [
    {
      title: "Web Nova Event",
      organization: "Digiflash Association, MCET",
      result: "Winner",
      date: "2025-03-15T00:00:00Z",
      takeaway: "Demonstrated competitive web development skills under time constraints."
    },
    {
      title: "Reverse Engineering Prototype Demonstration",
      result: "Winner",
      date: "2025-02-10T00:00:00Z",
      takeaway: "Successfully analyzed and replicated complex electronic systems."
    },
    {
      title: "Paper Presentation (REP Level)",
      result: "Winner",
      date: "2025-04-05T00:00:00Z",
      takeaway: "Communicated complex technical concepts effectively to a panel of experts."
    },
    {
      title: "VIT Bhopal Hackathon",
      result: "Finalist",
      date: "2025-01-20T00:00:00Z",
      takeaway: "Selected as one of the top teams for the final stage."
    },
    {
      title: "Smart India Hackathon 2025",
      organization: "Government of India",
      result: "Participant",
      date: "2025-12-01T00:00:00Z",
      takeaway: "Collaborated on a national-level platform for real-world governance challenges."
    },
    {
      title: "TNSkills Competition",
      organization: "TNSkills",
      result: "Participant",
      date: "2025-11-10T00:00:00Z",
      takeaway: "Applied industrial IoT and ML standards in a competitive setting."
    }
  ],
  certifications: [
    {
      title: "React.js Development",
      issuer: "Meta / Coursera",
      category: "Web",
      date: "2025-06-15T00:00:00Z",
      skills: ["React", "UI/UX", "State Management"],
      takeaway: "Built strong foundation in architecture.",
      certificateImage: "/assets/certifications/react-meta.png"
    },
    {
      title: "Node.js & Express",
      issuer: "OpenJS Foundation",
      category: "Backend",
      date: "2025-05-10T00:00:00Z",
      skills: ["Node.js", "Express", "API Design"],
      takeaway: "Learned backend architecture.",
      certificateImage: "/assets/certifications/node-openjs.png"
    },
    {
      title: "MongoDB Fundamentals",
      issuer: "MongoDB University",
      category: "Web",
      date: "2025-04-01T00:00:00Z",
      takeaway: "Gained understanding of NoSQL database design.",
      certificateImage: "/assets/certifications/mongodb.png"
    },
    {
      title: "Machine Learning Basics",
      issuer: "Coursera / Stanford",
      category: "ML",
      date: "2024-12-10T00:00:00Z",
      takeaway: "Learned core ML concepts.",
      certificateImage: "/assets/certifications/ml-basics.png"
    },
    {
      title: "Javascript",
      issuer: "GUVI / HCL",
      category: "Web",
      date: "2026-03-20T00:00:00Z",
      takeaway: "Deep dive into modern Javascript.",
      certificateImage: "/assets/certifications/javascript-guvi.jpg"
    },
    {
      title: "Arduino in Tamil",
      issuer: "GUVI / HCL",
      category: "IoT",
      date: "2025-04-20T00:00:00Z",
      takeaway: "Mastered embedded logic.",
      certificateImage: "/assets/certifications/arduino-guvi.jpg"
    },
    {
      title: "HTML & CSS in Tamil",
      issuer: "GUVI / HCL",
      category: "Web",
      date: "2024-09-21T00:00:00Z",
      takeaway: "Strong foundation in semantic structures.",
      certificateImage: "/assets/certifications/html-css-guvi.jpg"
    },
    {
      title: "Machine Learning using Python",
      issuer: "Udemy",
      category: "ML",
      date: "2025-10-04T00:00:00Z",
      takeaway: "Applied Python libraries.",
      certificateImage: "/assets/certifications/ml-python-udemy.jpg"
    }
  ],
  academics: [
    {
      institution: "College of Engineering",
      degree: "Electronics & Communication",
      endYear: 2026,
      grade: "8.5 CGPA",
      description: "Focused on embedded systems and IoT.",
      achievements: ["Dean's List", "Top 5% in technical cohort"],
      documents: ["/assets/academic/transcript.png"]
    }
  ]
};

const populate = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB...');

    await Promise.all([
      Project.deleteMany({}),
      Academic.deleteMany({}),
      Certification.deleteMany({}),
      Participation.deleteMany({}),
      Event.deleteMany({}),
      Profile.deleteMany({}),
      Admin.deleteMany({})
    ]);

    await Promise.all([
      Project.insertMany(data.projects),
      Academic.insertMany(data.academics),
      Certification.insertMany(data.certifications),
      Participation.insertMany(data.participations),
      Event.insertMany(data.events),
      new Profile(data.personalInfo).save(),
      new Admin({
        username: process.env.ADMIN_USERNAME || 'admin',
        password: process.env.ADMIN_PASSWORD || 'adminpass123'
      }).save()
    ]);

    console.log('Full database (including images) seeded successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

populate();
