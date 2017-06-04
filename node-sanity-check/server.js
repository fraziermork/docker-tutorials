const fs = require('fs');
const express = require('express');

const index = fs.readFileSync(`${__dirname}/index.html`, 'utf8');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send(index).end();
});

app.listen(8080);
