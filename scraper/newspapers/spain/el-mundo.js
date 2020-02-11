const got = require('got');
const cheerio = require('cheerio');

async function getHeadline() {
  try {
    const response = await got('https://www.elmundo.es/');
    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA-START
    const headline = $('div.ue-l-cover-grid__block div.size6of12 div.ue-l-cover-grid__unit article.ue-c-cover-content div.ue-c-cover-content__body div.ue-c-cover-content__main header.ue-c-cover-content__headline-group a.ue-c-cover-content__link h2.ue-c-cover-content__headline').first().text();
    // DATA-END

    return headline;
  } catch (error) {
    console.log(error.response.body);
  }
};

exports.getHeadline = getHeadline;