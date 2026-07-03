const express = require('express');
const path = require('node:path');

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function serveSpa(_req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, function listen() {
  console.log(`Listening on ${port}`);
});
