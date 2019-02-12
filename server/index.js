const express = require('express');
const connection = require('../dbConnect');

const app = express();
const PORT = 3002;

app.use(express.static(__dirname + '/../client'));

app.get('/api/avail/:rest_id', (req, res) => {
  connection.query(`SELECT * FROM availabilities WHERE rest_id = ${req.params.rest_id}`, (err, results, fields) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
});

app.get('/api/capacity/:rest_id', (req, res) => {
  connection.query(`SELECT * FROM restaurants WHERE id = ${req.params.rest_id}`, (err, results, fields) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});