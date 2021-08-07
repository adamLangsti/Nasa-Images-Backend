const express = require('express');
const photos = require('./data');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT;

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Localhost running on port 5000...');
});

app.get('/api', (req, res) => {
    const newImages = photos.map((images) => {
        const { id, img_src, earth_date, camera: name } = images;
        return { id, img_src, earth_date, name };
    });
    res.json(newImages);
});

app.listen(5000, () => {
    console.log(`Server is listening on port: ${port}`);
});
