const {getHeadline} = require('../scraper/fetch-headlines');
const { newspapers } = require('../scraper/newspapers');
const cheerio = require('cheerio');

// test if the headline path is correct

// test if we get a non empty string back as headline

// test if headline is stored in database

// test if headlines are rendered when called

// test search function on client side

// test country filter



const laVanGuardia = newspapers.find(obj => obj.newspaper === 'la-vanguardia');

'./newspaperStatic.html'.getElementsByTagName('h3')[0].innerHTML


// describe("A suite", function () {
//   it("contains spec with an expectation", async function () {
//     const result = await getHeadline('./newspaperStatic.html', laVanGuardia.path);
//     console.log('result: ', result)
//     expect(true).toBe(true);
//   });
// });

