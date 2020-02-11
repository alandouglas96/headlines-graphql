const got = require('got');
const cheerio = require('cheerio');

async function getHeadline() {
  try {
    const response = await got('https://www.lavanguardia.com/');
    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA
    const headline = $('section.breakingnews div.col-xs-12 article.tpl-story-first div.story-bottom header.story-header h1.story-header-title a.story-header-title-link').text();
    // DATA-END

    return headline;
  } catch (error) {
    console.log(error.response.body);
  }
};

exports.getHeadline = getHeadline;
