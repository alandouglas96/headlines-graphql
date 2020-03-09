const { getHeadline, fetchHeadlines } = require('../scraper/fetch-headlines')
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

describe("Test if all headlines return a headline", function () {
  var originalTimeout;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("all headline should contain a non-empty string", async function () {
    const result = await fetchHeadlines();
    let empty = false;
    for (headline in result.headlines) {
      if (result.headlines[headline].headline === '' || undefined)
        empty = true;
    }
    expect(empty).toBe(false);
  });
});



// test if the headline path is correct

// test if we get a non empty string back as headline

// test if headline is stored in database

// test if headlines are rendered when called

// test search function on client side

// test country filter




