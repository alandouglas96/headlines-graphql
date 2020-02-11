const got = require('got');
const cheerio = require('cheerio');

async function getHeadline() {
  try {
    const response = await got('https://elpais.com/');
    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA
    const headline = $('article.articulo--primero h2.articulo-titulo a').text();
    // DATA-END

    return headline;
  } catch (error) {
    console.log(error.response.body);
  }
};

exports.getHeadline = getHeadline;
