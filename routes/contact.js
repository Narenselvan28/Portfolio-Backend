const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const { name, email, phone, platformType, message } = req.body;

  try {
    // 1. Save to DB
    const newMessage = new Message({ name, email, phone, platformType, message });
    await newMessage.save();

    // 2. Try SMS
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;

    if (sid && sid.startsWith('AC')) {
      const client = new twilio(sid, token);
      const smsBody = `
🚀 New Collaboration Request!
From: ${name}
Goal: ${platformType}
Contact: ${email}
Phone: ${phone || 'Not provided'}
Note: ${message}
      `.trim();

      await client.messages.create({
        body: smsBody,
        from: process.env.TWILIO_FROM_NUMBER,
        to: process.env.MY_PHONE_NUMBER
      });
    }

    res.json({ message: 'Request recorded and transmitted successfully!' });
  } catch (err) {
    console.error('Contact error:', err.message);
    res.status(500).json({ message: 'Process failed', error: err.message });
  }
});

module.exports = router;
