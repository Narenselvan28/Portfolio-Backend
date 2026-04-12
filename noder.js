const https = require("https");

const URL = "https://portfolio-backend-pu94.onrender.com/api/health";

setInterval(() => {
    https.get(URL, (res) => {
        console.log(`Pinged at ${new Date().toLocaleTimeString()} - Status: ${res.statusCode}`);
    }).on("error", (err) => {
        console.error("Error:", err.message);
    });
}, 5 * 60 * 1000); // every 5 minutes