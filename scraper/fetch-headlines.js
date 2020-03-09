const moment = require('moment');
const got = require('got');
const cheerio = require('cheerio');
const { newspapers } = require('./newspapers.js');

const currentTime = moment(Date.now());

const headlines = {
  day: Number(currentTime.add(1, 'hours').format("DD")),
  month: Number(currentTime.add(1, 'hours').format("MM")),
  year: Number(currentTime.add(1, 'hours').format("YYYY")),
  time: currentTime.add(1, 'hours').format("LT"),
  headlines: {},
};

async function getHeadline (url, path) {
  try {
    const response = await got(url);

    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA-START
    const headline = $(path).first().text();
    // DATA-END
    return headline;
  } catch (error) {
    console.log('error', error.response.body);
  }
};

async function fetchHeadlines () {
  await Promise.all(newspapers.map(async obj => {
    const headline = await getHeadline(obj.url, obj.path);
    headlines.headlines[obj.newspaper] = { headline, country: obj.country, url: obj.url };
    return headline
  }));
  console.log(headlines)
  return headlines;
}

module.exports = {fetchHeadlines, getHeadline};


