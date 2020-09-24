const express = require('express');
const fs = require('fs');
const http = require('http');

const router = require('./router');
const config = require('./config');

const app = express();
const httpServer = http.createServer(app);
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

httpServer.listen(config.httpPORT, (err) => {
  if (err) {
    console.log(`👾 <(Data streaming into http server at ${config.httpPORT})`);
  } else {
    console.log('No dice: ' + err);
  }
});
