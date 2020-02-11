const got = require('got');
const cheerio = require('cheerio');

async function getHeadline() {
  try {
    const response = await got(''); //INSERT NEWSPAPER LINK
    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA-START
    const headline = $('').html(); //INSERT HTML PATH
    // const subtitle = $('').html(); //INSERT HTML PATH
    // const author = $('').html();   //INSERT HTML PATH
    // const place = $('').html();    //INSERT HTML PATH
    // const story = $('').html();    //INSERT HTML PATH
    // DATA-END

    return headline;
  } catch (error) {
    console.log(error.response.body);
    //=> 'Internal server error ...'
  }
};

exports.getHeadline = getHeadline;

