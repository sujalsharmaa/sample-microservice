const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
    res.send('This is the frontend API');
});

app.listen(port, () => {
    console.log(`Frontend listening at http://localhost:${port}`);
});