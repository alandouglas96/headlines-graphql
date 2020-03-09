const mongoose = require('mongoose');
require('dotenv').config()

mongoose.Promise = global.Promise;

// const url = process.env.URL_DB;
const url = 'mongodb://localhost:27017/newspapers';


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () =>
  console.log(`Connected to mongo at ${url}`)
);

module.exports = mongoose;
