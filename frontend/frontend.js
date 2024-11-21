import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3001;

// Define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', async (req, res) => {
    const response = await fetch("https://backend-node-service.default.svc.cluster.local:3000/api");
    const data = await response.json();
    console.log(data)
    res.json(data);
});

app.listen(port, () => {
    console.log(`Frontend listening at http://localhost:${port}`);
});
