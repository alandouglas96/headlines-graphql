const got = require('got');
const cheerio = require('cheerio');

async function getHeadline() {
  try {
    const response = await got('https://www.standard.co.uk/?CMP=ILC-refresh');
    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA-START
    const headline = $('.hero-top h2').first().text();
    // DATA-END

    return headline;
  } catch (error) {
    console.log(error.response.body);
  }
};

exports.getHeadline = getHeadline;