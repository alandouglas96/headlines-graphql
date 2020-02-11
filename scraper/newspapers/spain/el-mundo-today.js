const got = require('got');
const cheerio = require('cheerio');

async function getHeadline() {
  try {
    const response = await got('https://www.elmundotoday.com/');
    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA-START
    const headline = $('h3.entry-title  a').first().text();
    // DATA-END

    return headline;
  } catch (error) {
    console.log(error.response.body);
  }
};

exports.getHeadline = getHeadline;