const express = require('express');
const router = express.Router();
const fs = require('fs');
const data = require('../data/questionnaire.json');

router.get('/', (req, res) => {
    fs.readFile('./data/questionnaire.json', (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log("Success")
        console.log("Data:", data);
        res.send(data);
      }
    });
  });

module.exports = router;