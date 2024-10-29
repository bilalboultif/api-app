const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    const { filename } = req.query;

    console.log(`Requested filename: ${filename}`); // Log the requested filename

    if (!filename) {
        return res.status(400).json({ error: 'Filename parameter is required' });
    }

    const filePath = path.join(process.cwd(), 'api', `${filename}.json`);
    console.log(`Looking for file at: ${filePath}`); // Log the file path

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${filename}.json: ${err}`);
            return res.status(404).json({ error: 'File not found' });
        }

        res.status(200).json(JSON.parse(data));
    });
}
