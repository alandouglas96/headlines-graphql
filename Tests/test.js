const {getHeadline} = require('../scraper/fetch-headlines');
const { newspapers } = require('../scraper/newspapers');
const cheerio = require('cheerio');

// test if the headline location exists

// test if we get a non empty string back as headline
// check if headline is stored in database
// check if headlines are rendered when called

const laVanGuardia = newspapers.find(obj => obj.newspaper === 'la-vanguardia');

'./newspaperStatic.html'.getElementsByTagName('h3')[0].innerHTML


// describe("A suite", function () {
//   it("contains spec with an expectation", async function () {
//     const result = await getHeadline('./newspaperStatic.html', laVanGuardia.path);
//     console.log('result: ', result)
//     expect(true).toBe(true);
//   });
// });

