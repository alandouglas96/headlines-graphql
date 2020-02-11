const got = require('got');
const cheerio = require('cheerio');

async function getHeadline() {
  try {
    const response = await got('https://www.theguardian.com/international');
    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA-START
    const headline = $('.fc-item__container a.js-headline-text').first().text();
    // DATA-END

    return headline;
  } catch (error) {
    console.log(error.response.body);
  }
};

exports.getHeadline = getHeadline;