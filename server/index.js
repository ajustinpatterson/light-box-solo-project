const express = require('express');
const fs = require('fs');

const router = require('./router');
const config = require('./config');
const db = require('./models/index');
const { createServer } = require('https');

const app = express();

const key = fs.readFileSync(__dirname + '/selfsigned.key');
const cert = fs.readFileSync(__dirname + '/selfsigned.crt');

const credentials = {
  key: key,
  cert: cert,
};

const httpsServer = createServer(credentials, app);

app.use(express.json());
app.use(router);

//Turn on when database is fully connected
// db.sequelize.sync();

httpsServer.listen(config.port, (err) => {
  if (err) {
    console.log('Rumble in the Bronx! ' + err);
  } else {
    console.log(`👽 <(Communications active at port ${config.port})`);
  }
});
