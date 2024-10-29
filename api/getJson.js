const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    const { filename } = req.query;
    const filePath = path.join(process.cwd(), 'api', `${filename}.json`);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${filename}.json: ${err}`);
            return res.status(404).json({ error: 'File not found' });
        }

        res.status(200).json(JSON.parse(data));
    });
}
