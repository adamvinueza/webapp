const express = require('express');
const app = express();
const sample = require('./sample/send-json');
const PORT = 3000;

app.get('/', async (req, res) => {
  res.send('Hello, World!');
});

app.use('/sample', sample);

const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

module.exports = server;
