const express = require('express');

const app = express();
const PORT = 3002;

app.use(express.static(__dirname, + '../client'));

app.get('/api/availabilities/:rest_id', (req, res) => {
  console.log(req.params.rest_id);
  res.status(200).send('YOU MADE A GET REQUEST!!');
  let queryString = 'SELECT * FROM ';
});

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});