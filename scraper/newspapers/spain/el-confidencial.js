const got = require('got');
const cheerio = require('cheerio');

async function getHeadline() {
  try {
    const response = await got('https://www.elconfidencial.com/');
    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA-START
    const headline = $('section.opening-1-top h3.fs-60 a').first().text();
    // DATA-END
    return headline;
  } catch (error) {
    console.log(error.response.body);
  }
};

exports.getHeadline = getHeadline;