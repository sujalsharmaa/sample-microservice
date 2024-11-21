import fetch from 'node-fetch';// Ensure this is installed: npm install node-fetch
import express from "express"

const app = express()
const port = 3000;

app.get('/api', async (req, res) => {
    try {
        const pythonServiceURL = 'https://backend-python-service.default.svc.cluster.local:5000/api';
        const localURL = "http://localhost:5000/api"
        const response = await fetch(pythonServiceURL);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch from Python service: ${response.statusText}`);
        }

        const data = await response.json(); // Convert to JSON
        console.log("Python backend response:", data);

        res.json(data); // Send JSON data to frontend
    } catch (error) {
        console.error("Error communicating with Python backend:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Node.js backend listening at http://localhost:${port}`);
});
