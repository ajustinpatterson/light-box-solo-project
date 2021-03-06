const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const http = require('http');

const router = require('./router');
const config = require('./config');
const db = require('./models/index');

const app = express();

app.use(express.json());
app.use(router);

//Turn on when database is fully connected
// db.sequelize.sync();

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('Rumble in the Bronx! ' + err);
  } else {
    console.log(`👽 <(Communications active at port ${config.port})`);
  }
});
