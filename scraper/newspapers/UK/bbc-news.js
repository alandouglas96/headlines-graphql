const got = require('got');
const cheerio = require('cheerio');

async function getHeadline() {
  try {
    const response = await got('https://www.bbc.com/');
    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA-START
    const headline = $('li.media-list__item--1 a.media__link').first().text();
    // DATA-END

    return headline.trim();
  } catch (error) {
    console.log(error.response.body);
  }
};

exports.getHeadline = getHeadline;