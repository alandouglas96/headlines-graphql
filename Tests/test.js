const { getHeadline } = require('../scraper/fetch-headlines')
const { newspapers } = require('../scraper/newspapers');
const cheerio = require('cheerio');


//for this test to work first serve ./newspaperStatic.html
describe("Test getHeadline", function () {
  const laVanGuardia = newspapers.find(obj => obj.newspaper === 'la-vanguardia');
  it("getHeadline should return the correct", async function () {
    const result = await getHeadline('http://192.168.1.172:5000/newspaperStatic', laVanGuardia.path);
    expect(result).toEqual(`El contagio por coronavirus en centros
                        de mayores provoca cierres`);
  });
});




// test if the headline path is correct

// test if we get a non empty string back as headline

// test if headline is stored in database

// test if headlines are rendered when called

// test search function on client side

// test country filter




