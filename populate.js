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
      title: "Portfolio Website",
      description: "A personal portfolio crafted to present my work, skills, and journey in a clean and interactive way. Designed with a focus on minimal UI, smooth navigation, and real project storytelling, it serves as my digital identity and central hub for everything I build.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
      domain: "Full Stack",
      images: ["/assets/proofs/1000131321 (1)_page-0007.jpg"],
      priorityOverride: 110
    },
    {
      title: "SpectraLabs",
      description: "A self-initiated tech brand where I design and develop scalable digital solutions, including web platforms, ERP systems, and user-focused applications. SpectraLabs reflects my approach to building real-world products with both technical depth and business perspective.",
      techStack: ["Full Stack", "Scalable Solutions", "Brand Development"],
      domain: "Full Stack",
      images: ["/assets/proofs/1000131321 (1)_page-0012.jpg"],
      priorityOverride: 105
    },
    {
      title: "Cattle Health Monitoring System",
      description: "An IoT-based solution designed to monitor livestock health in real time using sensor data such as temperature and activity levels. The system enables early detection of health issues and provides actionable insights, aiming to support farmers with smarter and more efficient livestock management.",
      techStack: ["ESP32", "Random Forest", "IoT", "ML"],
      domain: "ML + IoT",
      images: ["/assets/proofs/1000131321 (1)_page-0005.jpg"],
      priorityOverride: 100
    },
    {
      title: "Alumni Management Platform (SIH 2025)",
      description: "A centralized digital platform built to connect alumni, students, and coordinators through a unified ecosystem. Features include mentor matching, real-time chat, event management, and a social feed, all designed to strengthen engagement and career guidance within institutions.",
      techStack: ["React", "AI Matching", "Firebase", "Real-time Chat"],
      domain: "Full Stack",
      priorityOverride: 95
    },
    {
      title: "EMS Cocos ERP",
      description: "A comprehensive ERP system focused on streamlining business operations through modular and scalable architecture. It includes features for workflow management, user roles, and an improved UI/UX, designed to enhance efficiency and adaptability for growing organizations.",
      techStack: ["ERP", "Modular Architecture", "Scalable Systems"],
      domain: "Full Stack",
      images: ["/assets/proofs/1000131321 (1)_page-0006.jpg"],
      priorityOverride: 90
    },
    {
      title: "Flower Distribution Billing Platform",
      description: "Worked as an Individual Freelance Full-Stack Developer by developing a billing platform for a flower distribution business, focused on invoice generation, sales management, and streamlined business operations.",
      techStack: ["Full Stack", "Invoicing", "Sales Management"],
      domain: "Full Stack",
      priorityOverride: 88
    },
    {
      title: "PaaS-based Temporary Hosting Platform",
      description: "Currently developing a PaaS-based Temporary Hosting Platform utilizing Cloudflare Tunnel technology to simplify secure deployment and remote accessibility for developers and testing environments.",
      techStack: ["Cloudflare", "PaaS", "Infrastructure"],
      domain: "DevOps",
      priorityOverride: 86
    },
    {
      title: "PawBridge",
      description: "A platform aimed at connecting pets with potential adopters, creating a bridge between animals and caring homes. Designed with a user-friendly interface, it focuses on accessibility, emotional engagement, and simplifying the adoption process.",
      techStack: ["Web", "Social Impact", "Rescue Coordination"],
      domain: "Full Stack",
      images: ["/assets/proofs/1000131321 (1)_page-0010.jpg"],
      priorityOverride: 80
    },
    {
      title: "Line Follower Robot",
      description: "An autonomous robot built using IR sensors to detect and follow a predefined path. The project demonstrates foundational concepts in embedded systems, real-time control, and hardware-software integration.",
      techStack: ["Arduino", "IR Sensors", "Embedded C"],
      domain: "IoT",
      priorityOverride: 55
    },
    {
      title: "Obstacle Avoidance Robot",
      description: "A robotic system capable of detecting obstacles using ultrasonic sensors and navigating around them autonomously, showcasing dynamic decision-making and sensor integration.",
      techStack: ["Arduino", "Ultrasonic Sensor", "Robotics"],
      domain: "IoT",
      priorityOverride: 50
    },
    {
      title: "ReArm One — AI-Powered Modular Occupational Prosthetic",
      description: "ReArm One is an AI-powered modular occupational prosthetic platform concept developed under ReArm Technologies. The proposed control architecture combines electroencephalography (EEG) for higher-level intent recognition with surface electromyography (sEMG) for muscle-driven control and movement estimation. Envisioned as a modular platform, interchangeable attachments could support specific tasks such as precision gripping, tool operation, or industrial component handling. The long-term goal is to explore an adaptable assistive platform combining signal processing, embedded intelligence, mechanical design, and modular end-effectors for rehabilitation and industrial assistance.",
      techStack: ["EEG", "sEMG", "Signal Processing", "Machine Learning", "Embedded Systems", "Robotics", "Mechanical Design"],
      domain: "Assistive Robotics",
      priorityOverride: 83
    },
    {
      title: "VITAL SYNC — AI-Powered Multimodal Health Monitoring",
      description: "VITAL SYNC is an AI-powered multimodal health-monitoring system designed to identify potentially abnormal patterns by analysing physiological measurements, activity data, and environmental conditions. Its ML architecture incorporates domain-specific XGBoost classifiers alongside an Isolation Forest anomaly-detection model across seven risk-detection domains: heart-rate anomalies, oxygenation anomalies, respiratory risk, heat stress, environmental exposure, activity-related strain, and general physiological anomalies. The system emphasises lightweight inference and edge deployment, with the Raspberry Pi 4 as the target platform, reducing dependence on continuous internet connectivity.",
      techStack: ["Python", "XGBoost", "Scikit-learn", "Isolation Forest", "NumPy", "Raspberry Pi 4", "IoT Sensors"],
      domain: "Edge AI + Health Analytics",
      priorityOverride: 79
    },
    {
      title: "Assessment Intelligence System — AI-Assisted Evaluation",
      description: "The Assessment Intelligence System is an AI-assisted assignment evaluation solution designed to improve the efficiency, consistency, and transparency of evaluating descriptive student answers. The system follows a hybrid rubric-first approach combining semantic understanding with deterministic scoring rules. A sentence-embedding model (all-MiniLM-L6-v2) compares the meaning of student responses with expected answers or rubric evidence, while a separate scoring layer applies predefined criteria and partial-credit rules. The architecture is designed to provide explainable evaluation by associating scoring decisions with relevant evidence, supporting human review rather than treating AI judgement as unquestionable. Developed for HackWithAMYPO — Finalist.",
      techStack: ["Python", "Sentence Transformers", "all-MiniLM-L6-v2", "PyTorch", "Scikit-learn", "PostgreSQL"],
      domain: "Educational AI + NLP",
      priorityOverride: 77
    },
    {
      title: "DealFlow360 — ML-Powered Business Intelligence",
      description: "DealFlow360 is a machine learning-powered business intelligence solution designed to transform raw business data into actionable insights. The project analyses historical data, identifies meaningful patterns, and applies predictive models to support business decision-making. The ML component supports classification and regression tasks, while a FastAPI layer provides application access to model predictions. A MySQL-based search demonstration supports structured data retrieval for relevant business information. Developed for the Odoo Hackathon, Gujarat.",
      techStack: ["Python", "Scikit-learn", "FastAPI", "MySQL", "Pandas", "NumPy"],
      domain: "Machine Learning + Business Intelligence",
      priorityOverride: 75
    },
    {
      title: "ReFlow — Intelligent Production Scheduling",
      description: "ReFlow is an intelligent production scheduling system designed to optimise manufacturing operations under uncertain and changing conditions. The system considers machine availability, processing times, setup times, order priorities, delivery deadlines, workforce availability, material constraints, downtime, and production costs. Its architecture combines a React-based frontend, a Python Flask backend, and MongoDB for data management. Machine learning approaches including XGBoost and Temporal Fusion Transformer (TFT) were explored for predictive components supporting the scheduling workflow. Developed for the KPR College Hackathon.",
      techStack: ["React.js", "Python", "Flask", "MongoDB Atlas", "XGBoost", "Temporal Fusion Transformer"],
      domain: "Industrial AI + Operations Research",
      priorityOverride: 73
    },
    {
      title: "Research Paper Alignment System — Local AI Document Analysis",
      description: "The Research Paper Alignment System is an AI-assisted document analysis concept designed to evaluate how closely a research paper aligns with predefined requirements, research objectives, or evaluation criteria. The system explores local language models and semantic analysis to understand document content, compare relevant passages against evaluation criteria, and organise findings into a structured review. A local-inference approach reduces reliance on external AI APIs and keeps document processing within the user's own computing environment. Developed for the HackAce Online Hackathon.",
      techStack: ["Python", "Natural Language Processing", "Local LLMs", "Semantic Search", "Document Processing"],
      domain: "NLP + Document Intelligence",
      priorityOverride: 71
    },
    {
      title: "Medical Vending Kiosk — Assisted Healthcare Access",
      description: "The Medical Vending Kiosk is an assisted healthcare kiosk concept designed to make basic health measurements and health-related guidance more accessible through an integrated electronic system. The project combines embedded hardware, sensors, a user interface, and automated control into a kiosk that guides users through a basic health-information workflow. Following a doctor-in-the-loop approach, the system provides basic measurements and general guidance while escalating potentially concerning situations to a healthcare professional. Features include RFID-based user identification, web-based monitoring, and controlled dispensing mechanisms. Developed for the Nehru College Hackathon.",
      techStack: ["ESP32", "ESP8266", "ESP32-CAM", "IoT Sensors", "RFID", "Embedded C/C++", "Web Dashboard"],
      domain: "Healthcare IoT + Embedded Systems",
      priorityOverride: 69
    },
    {
      title: "Certify — Bulk Certificate Generator",
      description: "Certify is a minimal, client-side bulk certificate generator designed to simplify the creation of participation and achievement certificates for college events. Built for SPECTRUM Association, it allows users to work with certificate templates and structured recipient data directly in the browser — no backend server required. The client-side architecture enables deployment as a static website including on GitHub Pages. Key features include bulk certificate generation, CSV-based recipient data, personalised fields, PDF generation, and bulk ZIP export.",
      techStack: ["JavaScript", "HTML", "CSS", "Client-Side Processing", "PDF Generation", "CSV Processing"],
      domain: "Frontend Engineering + Workflow Automation",
      priorityOverride: 66
    }
  ],
  events: [
    {
      title: "Co-Founder — Websyra",
      role: "Founder Member",
      description: "Founder Member of 'Websyra', a self-initiated web development brand, where I contributed as a Frontend Developer for the EMS COCOS project by building responsive and user-focused web interfaces.",
      insights: "Transitioned from academic projects to real-world product development and startup experience.",
      date: "2024-01-15T00:00:00Z"
    },
    {
      title: "Student Class Representative",
      role: "Representative",
      description: "Served as Student Class Representative during the first year, acting as a communication bridge between students and faculty while demonstrating leadership and coordination skills.",
      insights: "Demonstrated strong leadership and communication skills.",
      date: "2023-08-01T00:00:00Z"
    },
    {
      title: "Logic Heist at Helix’26",
      role: "Developer",
      description: "Received a Certificate of Appreciation and Appreciation Medal for developing 'Spectra Labs,' a custom-built competitive coding platform, officially launched during Logic Heist at Helix’26.",
      insights: "Recognized during the Spectrum Valediction for technical contribution, innovation, and successful project execution.",
      date: "2026-02-01T00:00:00Z",
      images: ["/assets/proofs/1000131321 (1)_page-0016.jpg"]
    },
    {
      title: "SPECTRUM Association Secretary",
      role: "Secretary",
      description: "Assumed the role of Secretary of SPECTRUM, a college technical association, with responsibilities spanning student engagement, technical activities, event coordination, and association operations. The position provides experience in organising technical initiatives, coordinating with student teams, communicating with faculty and participants, and supporting a collaborative technical community.",
      insights: "Developing leadership, event coordination, team communication, planning, and technical community development skills at an institutional level.",
      date: "2026-08-01T00:00:00Z"
    }
  ],
  participations: [
    {
      title: "KPR Kallikrates’24 Paper Presentation",
      organization: "KPR Institute",
      result: "Participant",
      date: "2024-03-01T00:00:00Z",
      takeaway: "Presented a PPT on Sustainable Power Consumption focusing on energy efficiency and future-oriented sustainable solutions.",
      certificate: "/assets/proofs/ilovepdf_merged_page-0005.jpg",
      images: ["/assets/proofs/ilovepdf_merged_page-0005.jpg"]
    },
    {
      title: "Python Summer Camp (Dr. MCET)",
      organization: "Dr. MCET",
      result: "1st Prize",
      date: "2024-06-01T00:00:00Z",
      takeaway: "Secured 1st place among 70+ participants, demonstrating strong programming and problem-solving skills.",
      certificate: "/assets/proofs/1000131321 (1)_page-0021.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0021.jpg"]
    },
    {
      title: "Inno Blitz’24 Ideathon",
      organization: "Ramakrishna College",
      result: "Participant",
      date: "2024-12-01T00:00:00Z",
      takeaway: "Presented an innovative app idea for AI-based plant disease identification and smart agricultural support.",
      certificate: "/assets/proofs/1000131321 (1)_page-0026.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0026.jpg"]
    },
    {
      title: "TalkFest (Dr. MCET)",
      organization: "Dr. MCET",
      result: "Participant",
      date: "2025-05-01T00:00:00Z",
      takeaway: "Showcased public speaking and communication skills through a topic-based speech presentation.",
      certificate: "/assets/proofs/1000131321 (1)_page-0014.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0014.jpg"]
    },
    {
      title: "Solar Ambassador Workshop",
      organization: "Energy Swaraj Foundation",
      result: "Participant",
      date: "2025-07-01T00:00:00Z",
      takeaway: "Gained hands-on experience by building a solar-powered lamp and learning sustainable energy concepts.",
      certificate: "/assets/proofs/1000131321 (1)_page-0019.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0019.jpg"]
    },
    {
      title: "IGNITE Paper Presentation",
      organization: "IGNITE (Dr. MCET)",
      result: "1st Prize",
      date: "2025-08-01T00:00:00Z",
      takeaway: "Presented on the topic 'Self-Healing Circuits' and their role in improving electronic system reliability.",
      certificate: "/assets/proofs/1000131321 (1)_page-0020.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0020.jpg"]
    },
    {
      title: "TNSCST Project Expo",
      organization: "TNSCST",
      result: "Participant",
      date: "2025-10-01T00:00:00Z",
      takeaway: "Presented a Line Follower Robot, showcasing innovation in robotics, sensor-based automation, and efficient path navigation.",
      certificate: "/assets/proofs/1000131321 (1)_page-0024.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0024.jpg"]
    },
    {
      title: "Technofete’25",
      organization: "Technofete",
      result: "Participant",
      date: "2025-03-01T00:00:00Z",
      takeaway: "Participated in an Algorithm Designing Contest, Paper Presentation on 'Self-Healing Circuits,' and a technical Quiz event.",
      certificate: "/assets/proofs/1000131321 (1)_page-0013.jpg",
      images: [
        "/assets/proofs/1000131321 (1)_page-0008.jpg",
        "/assets/proofs/1000131321 (1)_page-0009.jpg",
        "/assets/proofs/1000131321 (1)_page-0013.jpg"
      ]
    },
    {
      title: "Nehru Institute – Paper Presentation",
      organization: "Nehru Institute",
      result: "Participant",
      date: "2025-06-01T00:00:00Z",
      takeaway: "Presented the concept of 'Self-Healing Circuits' with innovative prototype-based ideation and technical insights.",
      certificate: "/assets/proofs/1000131321 (1)_page-0017.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0017.jpg"]
    },
    {
      title: "Nehru Institute – Technical Quiz Challenge",
      organization: "Nehru Institute",
      result: "Participant",
      date: "2025-06-02T00:00:00Z",
      takeaway: "Demonstrated analytical thinking and domain-based technical knowledge.",
      certificate: "/assets/proofs/1000131321 (1)_page-0018.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0018.jpg"]
    },
    {
      title: "Shakthi Hackathon",
      organization: "Shakthi Hackathon",
      result: "Finalist",
      date: "2025-09-01T00:00:00Z",
      takeaway: "Led the development of an intelligent surveillance system integrating robotics, face recognition, and smart monitoring. Secured position in Top 70 teams among 2000+.",
      certificate: "/assets/proofs/1000131321 (1)_page-0022.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0022.jpg"]
    },
    {
      title: "Smart India Hackathon (SIH)",
      organization: "SIH",
      result: "Top 46",
      date: "2025-10-01T00:00:00Z",
      takeaway: "Led the development of a LinkedIn-style Alumni Management Platform. Secured position in Top 46 shortlisted teams."
    },
    {
      title: "SRC Project Expo",
      organization: "SRC",
      result: "Participant",
      date: "2025-07-01T00:00:00Z",
      takeaway: "Presented 'PawBridge,' an innovative ML-based project designed to support animal welfare through technology-driven solutions."
    },
    {
      title: "Java Placement Training–I",
      organization: "Academic",
      result: "Top-1 Performing",
      date: "2025-09-15T00:00:00Z",
      takeaway: "Secured Top-1 Performance, showcasing strong logical thinking, problem-solving ability, and programming proficiency."
    },
    {
      title: "TN Impact",
      organization: "TN Impact",
      result: "Top Performer",
      date: "2025-08-01T00:00:00Z",
      takeaway: "Led the development of a Machine Health Monitoring System integrating ML, IoT, and a MERN-stack dashboard.",
      certificate: "/assets/proofs/1000131321 (1)_page-0023.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0023.jpg"]
    },
    {
      title: "HackSprint 2.0",
      organization: "Karpagam Academy",
      result: "Finalist",
      date: "2026-01-01T00:00:00Z",
      takeaway: "Developed an Agent Contractor Portal for streamlined workforce and contract management. Contributed to frontend development and ML-assisted functionalities.",
      certificate: "/assets/proofs/1000131321 (1)_page-0015.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0015.jpg"]
    },
    {
      title: "TN Entrepreneurship Hackathon (Nimirndhu Nill)",
      organization: "TN Entrepreneurship",
      result: "Participant",
      date: "2025-11-01T00:00:00Z",
      takeaway: "Presented an ML-powered health vending/kiosk machine infrastructure business model focused on smart healthcare accessibility."
    },
    {
      title: "TANCAM Special Expert Session Workshop",
      organization: "TANCAM",
      result: "Participant",
      date: "2026-08-01T00:00:00Z",
      takeaway: "Gained industry insights and practical knowledge from experienced industrial experts and professionals.",
      certificate: "/assets/proofs/ilovepdf_merged_page-0006.jpg",
      images: ["/assets/proofs/ilovepdf_merged_page-0006.jpg"]
    },
    {
      title: "Nimbuz Cloud Workshop",
      organization: "Nimbuz",
      result: "Participant",
      date: "2025-11-01T00:00:00Z",
      takeaway: "Gained practical exposure to cloud computing concepts, deployment workflows, and modern cloud-based technologies.",
      certificate: "/assets/proofs/1000131321 (1)_page-0025.jpg",
      images: ["/assets/proofs/1000131321 (1)_page-0025.jpg"]
    },
    {
      title: "KPR Fiesta (Web Fusion & Black Box AI)",
      organization: "KPR Institute",
      result: "Top 10",
      date: "2026-02-01T00:00:00Z",
      takeaway: "Securing a Top 10 position among 80+ participants with a performance close to victory in both events.",
      certificate: "/assets/proofs/ilovepdf_merged_page-0009.jpg",
      images: [
        "/assets/proofs/ilovepdf_merged_page-0009.jpg",
        "/assets/proofs/ilovepdf_merged_page-0010.jpg"
      ]
    },
    {
      title: "Digiflash Web Nova Event",
      organization: "Digiflash Association",
      result: "1st Prize",
      date: "2026-03-15T00:00:00Z",
      takeaway: "Won 1st Prize, showcasing excellence in web development, creativity, and technical implementation.",
      certificate: "/assets/proofs/ilovepdf_merged_page-0004.jpg",
      images: ["/assets/proofs/ilovepdf_merged_page-0004.jpg"]
    },
    {
      title: "Reverse Engineering Prototype Demonstration",
      organization: "Dr. MCET",
      result: "2nd Prize",
      date: "2025-02-10T00:00:00Z",
      takeaway: "Presented a Cattle Health Monitoring System integrating 4 ML models for smart health analysis and monitoring."
    },
    {
      title: "Microcontroller Mini Project",
      organization: "Academic",
      result: "Top Performer",
      date: "2024-11-01T00:00:00Z",
      takeaway: "Developed a secure and efficient RFID-based access solution aimed at replacing QR-based ID cards."
    },
    {
      title: "NH Hackathon",
      organization: "Central Government",
      result: "Finalist",
      date: "2025-04-01T00:00:00Z",
      takeaway: "Presented a sustainable energy solution using Piezoelectric Mats for highways to generate electricity from vehicle movement."
    },
    {
      title: "VIT Bhopal Hackathon",
      organization: "VIT Bhopal",
      result: "Finalist",
      date: "2026-05-01T00:00:00Z",
      takeaway: "Cleared 2 competitive rounds among 4000+ teams, presenting a smart Health Vending/Kiosk System.",
      certificate: "/assets/proofs/ilovepdf_merged_page-0001.jpg",
      images: ["/assets/proofs/ilovepdf_merged_page-0001.jpg"]
    },
    {
      title: "Digiflash Coding Event",
      organization: "Digiflash",
      result: "Participant",
      date: "2025-04-15T00:00:00Z",
      takeaway: "Demonstrated programming, logical thinking, and competitive problem-solving skills."
    },
    {
      title: "UIDAI Hackathon",
      organization: "Central Government",
      result: "Participant",
      date: "2025-12-15T00:00:00Z",
      takeaway: "Served as System Lead, developing a real-time Aadhaar data management solution using data analytics and machine learning technologies."
    },
    {
      title: "Odoo Hackathon — Gujarat (DealFlow360)",
      organization: "Odoo Hackathon",
      result: "Participant",
      date: "2026-06-01T00:00:00Z",
      takeaway: "Participated in a software innovation challenge with DealFlow360, a data-driven opportunity discovery and decision-support platform. Explored how structured business data and ML can help users identify promising opportunities. Built an ML API using the Olist e-commerce dataset with a search demonstration backed by MySQL."
    },
    {
      title: "KPR College Hackathon (ReFlow)",
      organization: "KPR College",
      result: "Participant",
      date: "2026-07-01T00:00:00Z",
      takeaway: "Developed ReFlow, an intelligent production-scheduling system concept designed to help manufacturing environments adapt to dynamic operational conditions — accounting for machine availability, processing times, order priorities, workforce availability, and material constraints. Technical stack: React.js, Python Flask, MongoDB Atlas, with XGBoost and Temporal Fusion Transformer (TFT) explored for predictive modelling."
    },
    {
      title: "HackAce — Online Hackathon (Local LLM Document Alignment)",
      organization: "HackAce",
      result: "Participant",
      date: "2026-08-01T00:00:00Z",
      takeaway: "Worked on a system concept for aligning research-paper documents using a locally running large language model. The goal: compare academic documents, identify corresponding sections or passages, and understand structural or content-level alignment without depending on paid, externally hosted AI APIs. Focused on privacy-conscious AI for academic document analysis."
    },
    {
      title: "Nehru College Hackathon (Medical Vending Kiosk)",
      organization: "Nehru College",
      result: "Participant",
      date: "2026-09-01T00:00:00Z",
      takeaway: "Worked on an assisted health kiosk concept combining embedded hardware, sensors, a user interface, and a doctor-in-the-loop approach for basic health screening and OTC healthcare guidance. Hardware explorations included ESP32-based integration, health sensors, RFID-based user access, and a web dashboard for displaying measurements."
    },
    {
      title: "Smart India Hackathon — Internal Selection (Health-Monitoring Wearable)",
      organization: "SIH",
      result: "Internal Selection",
      date: "2026-09-15T00:00:00Z",
      takeaway: "Achieved internal selection in SIH with a wearable health-monitoring concept to collect physiological and environmental measurements and support health-risk awareness. Proposed hardware ecosystem includes ESP32/Raspberry Pi, MAX30102 pulse oximetry, temperature sensing, IMU, and environmental sensors with edge-AI processing for offline intelligence."
    },
    {
      title: "HackWithAMYPO — Finalist (Assessment Evaluation & Hallucination Prediction)",
      organization: "HackWithAMYPO",
      result: "Finalist",
      date: "2026-10-01T00:00:00Z",
      takeaway: "Reached the finalist stage with a project focused on lightweight, AI-assisted assignment evaluation and hallucination prediction. The rubric-first, hybrid architecture uses Sentence-Transformers' all-MiniLM-L6-v2, TF-IDF and cosine-similarity baseline, evidence-quote extraction, and locally executed inference for explainable and consistent scoring. Awaiting final results."
    }
  ],
  certifications: [
    {
      title: "HTML & CSS",
      issuer: "GUVI",
      category: "Web",
      takeaway: "Learned the basics of responsive web design and frontend development.",
      certificateImage: "/assets/proofs/1000131321 (1)_page-0028.jpg"
    },
    {
      title: "JavaScript",
      issuer: "GUVI",
      category: "Web",
      takeaway: "Gained knowledge in interactive web development and scripting concepts.",
      certificateImage: "/assets/proofs/1000131321 (1)_page-0031.jpg"
    },
    {
      title: "React JS Hands-on Application Development",
      issuer: "Infosys Springboard",
      category: "Web",
      takeaway: "Learned modern frontend application development using React.",
      certificateImage: "/assets/proofs/1000131321 (1)_page-0002.jpg"
    },
    {
      title: "Arduino - Fundamentals",
      issuer: "GUVI",
      category: "IoT",
      takeaway: "Learned the basics of embedded systems, sensors, and hardware-based project development.",
      certificateImage: "/assets/proofs/1000131321 (1)_page-0029.jpg"
    },
    {
      title: "Business Fundamentals For Entrepreneurs",
      issuer: "NPTEL",
      category: "Business",
      takeaway: "Understanding business concepts useful for freelancing, client handling, and building ventures.",
      certificateImage: "/assets/proofs/ilovepdf_merged_page-0002.jpg"
    },
    {
      title: "Introduction to Large Language Models (LLMs)",
      issuer: "NPTEL",
      category: "ML",
      takeaway: "Gained basic knowledge of generative AI, language models, and modern AI applications.",
      certificateImage: "/assets/proofs/ilovepdf_merged_page-0003.jpg"
    },
    {
      title: "Python Application Development",
      issuer: "Udemy",
      category: "Languages",
      takeaway: "Learning Flask, Kivy Framework, and the basics of building desktop and web-based Python applications.",
      certificateImage: "/assets/proofs/1000131321 (1)_page-0003.jpg"
    },
    {
      title: "Machine Learning in Python",
      issuer: "Udemy",
      category: "ML",
      takeaway: "Gained practical knowledge in ML concepts, model building, and data-based problem solving.",
      certificateImage: "/assets/proofs/1000131321 (1)_page-0027.jpg"
    },
    {
      title: "Data Structures and Algorithms using C",
      issuer: "Udemy",
      category: "Core",
      takeaway: "Strengthening programming logic and problem-solving skills.",
      certificateImage: "/assets/proofs/1000131321 (1)_page-0001.jpg"
    },
    {
      title: "SQL",
      issuer: "Udemy",
      category: "Core",
      takeaway: "Learned database management, queries, and relational database concepts.",
      certificateImage: "/assets/proofs/1000131321 (1)_page-0004.jpg"
    },
    {
      title: "Data Analytics",
      issuer: "NPTEL",
      category: "ML",
      takeaway: "Gained knowledge in data analysis, visualization, and analytical thinking. (Result Awaited)",
      certificateImage: ""
    },
    {
      title: "100-Hour Data Science and AI Masterclass",
      issuer: "Udemy",
      category: "ML",
      takeaway: "Currently pursuing. Focused on machine learning, AI concepts, data analysis, and practical implementation.",
      certificateImage: ""
    },
    {
      title: "Backend & Firebase Mastery",
      issuer: "Udemy",
      category: "Backend",
      takeaway: "Completed 95%. Gaining practical experience in backend development, Firebase services, and authentication.",
      certificateImage: ""
    },
    {
      title: "Node.js & REST API Mastery",
      issuer: "Udemy",
      category: "Backend",
      takeaway: "Completed 95%. Learning server-side development, API creation, routing, middleware, and scalable backend.",
      certificateImage: ""
    },
    {
      title: "RAG Model Development",
      issuer: "Infosys Springboard",
      category: "ML",
      takeaway: "Currently pursuing. Learning the fundamentals of Retrieval-Augmented Generation (RAG) and LLM integration.",
      certificateImage: ""
    },
    {
      title: "Linguaskill Business B2 Certification",
      issuer: "University of Cambridge",
      category: "Core",
      takeaway: "Demonstrating professional English communication skills in listening, reading, speaking, and writing.",
      certificateImage: "/assets/proofs/ilovepdf_merged_page-0007.jpg"
    },
    {
      title: "Git & GitHub",
      issuer: "Infosys Springboard",
      category: "Tools",
      takeaway: "Gaining knowledge in version control, repository management, collaboration workflows, and project tracking.",
      certificateImage: ""
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

    console.log('Full comprehensive database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

populate();
