// api/getRaslan.js
const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'api', 'raslan.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading raslan.json: ${err}`);
            return res.status(500).json({ error: 'Error reading file' });
        }

        res.status(200).json(JSON.parse(data));
    });
}
