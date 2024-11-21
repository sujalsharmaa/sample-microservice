const express = require('express');
const https = require('https');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    const pythonServiceURL = 'https://backend-python-service.default.svc.cluster.local:5000/api';
    https.get(pythonServiceURL, (pythonRes) => {
        let data = '';
        pythonRes.on('data', (chunk) => {
            data += chunk;
        });
        pythonRes.on('end', () => {
            const pythonData = JSON.parse(data);
            res.send(`Frontend received: ${pythonData.message}`);
        });
    }).on('error', (e) => {
        res.status(500).send(`Error: ${e.message}`);
    });
});

app.listen(port, () => {
    console.log(`Node.js backend listening at http://localhost:${port}`);
});