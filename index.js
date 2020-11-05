const express = require('express');

const redis = require('redis');
const client = redis.createClient({ host: 'redis'})

const app = express();

app.get('/', (req, res) => {
  // Distributed redis counter
  client.incr('myKey', (err, counter) => {
    res.send(`${counter} Visits to Redis`);
  });
});

app.listen(4000);