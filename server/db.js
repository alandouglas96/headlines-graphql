const mongoose = require('mongoose');
require('dotenv').config({path: __dirname + '/.env'})

mongoose.Promise = global.Promise;

const url = process.env.URL_DB;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () =>
  console.log(`Connected to mongo at ${url}`)
);

module.exports = mongoose;
