const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Security Hardening
app.use(helmet()); 
app.disable('x-powered-by');

// Rate Limiting: 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { message: 'Too many requests from this IP, please try again after 15 minutes' }
});
app.use('/api/', limiter);

// Middleware
app.use(cors());
app.use(express.json());

// Routes Placeholder
app.get('/', (req, res) => res.send('Portfolio API Running'));

// Import Routes
const projectRoutes = require('./routes/projects');
const academicRoutes = require('./routes/academics');
const certRoutes = require('./routes/certifications');
const participationRoutes = require('./routes/participations');
const eventRoutes = require('./routes/events');
const profileRoutes = require('./routes/profile');
const adminRoutes = require('./routes/admin');
const uploadRoutes = require('./routes/upload');

app.use('/api/projects', projectRoutes);
app.use('/api/academics', academicRoutes);
app.use('/api/certifications', certRoutes);
app.use('/api/participations', participationRoutes);
app.use('/api/health', (req, res) => {
  const memoryUsage = process.memoryUsage();
  res.status(200).json({ 
    status: 'up', 
    uptime: process.uptime(),
    timestamp: new Date(),
    serviceInfo: {
      nodeVersion: process.version,
      platform: process.platform,
      memory: {
        rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
        heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
        heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
      }
    },
    systemStats: {
      cpuLoad: require('os').loadavg(),
      totalMemory: `${Math.round(require('os').totalmem() / 1024 / 1024)} MB`,
      freeMemory: `${Math.round(require('os').freemem() / 1024 / 1024)} MB`,
    },
    database: {
      connected: mongoose.connection.readyState === 1 ? 'Yes' : 'No',
      name: mongoose.connection.name
    }
  });
});
app.use('/api/events', eventRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/contact', require('./routes/contact'));

// MongoDB Connection
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Cloudinary Status Check
    const { cloudinary } = require('./config/cloudinary');
    if (cloudinary.config().cloud_name) {
      console.log('Cloudinary Configured:', cloudinary.config().cloud_name);
    } else {
      console.log('Cloudinary: NOT CONFIGURED');
    }

    // twilio check
const twilio = require('twilio');
const sid = process.env.TWILIO_ACCOUNT_SID;
const token = process.env.TWILIO_AUTH_TOKEN;

if (sid && sid.startsWith('AC')) {
  const client = new twilio(sid, token);
  client.api.accounts(sid).fetch()
    .then(account => console.log(`Connected to Twilio: Account ${account.friendlyName}`))
    .catch(err => console.error(`Twilio Error: ${err.message}`));
} else {
  console.log('Twilio: Disconnected (Missing or Invalid Credentials)');
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    console.log('Retrying with a simpler connection if atlas fails...');
  });