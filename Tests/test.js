const { getHeadline, fetchHeadlines } = require('../scraper/fetch-headlines')
const { newspapers } = require('../scraper/newspapers');
const { storeHeadlines } = require('../scraper/store-headlines');
const mockData = require('./mockData');
const HeadlineSchema = require('../server/models/headlines');


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
    let empty = null;
    for (headline in result.headlines) {
      if (result.headlines[headline].headline === '' || undefined) {
        empty = headline;
      }
    }
    expect(empty).toBe(null);
  });
});

describe("Test for storeHeadLines", function () {
  let inDatabase = false;
  storeHeadlines(mockData);
  console.log(HeadlineSchema.find({ headline: 'test' }));

  it("headline should be stored in the database", async function () {
    expect(inDatabase).toBe(true);
  });
});



// test if headline is stored in database

// test if headlines are rendered when called

// test search function on client side

// test country filter




