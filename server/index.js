const express = require('express');

const router = require('./router');
const config = require('./config');
const app = express();

app.use(express.json());
app.use(router);

app.get('*', (req, res) => {
  res.status(404).send("Sorry! We can't find the thing 😓");
});

app.listen(config.port, (err) => {
  if (err) {
    console.log('Rumble in the Bronx! ' + err);
  } else {
    console.log(`👽 <(Communications active at ${config.port})`);
  }
});
