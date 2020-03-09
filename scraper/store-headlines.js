const HeadlineSchema = require("../server/models/headlines");
const fetchHeadLines = require("./fetch-headlines").fetchHeadlines;

const mongoose = require("../server/db");

const _ = require("underscore");

const hashSum = require("hash-sum");

fetchHeadLines().then(data => {
  const dataArr = [];

  _.each(data.headlines, (value, key) => {
    const newHash = hashSum(`${key}${value}`);
    dataArr.push({
      hash: newHash,
      day: data.day,
      month: data.month,
      year: data.year,
      time: data.time,
      newspaper: key,
      headline: value.headline, //not all the scraper headlines work properly, check database. 
      locale: value.country, //we need to add the brittish one
      url: value.url
    });
  });

  async function hashExists (thisHash) {
    return HeadlineSchema.exists({ hash: thisHash }).then(val => {
      if (!val) return true;
      return false;
    });
  }

  function promiseAll (arr) {
    const promises = [];
    for (let i = 0; i < arr.length; i++) {
      promises.push(hashExists(arr[i].hash));
    }
    return Promise.all(promises);
  }

  promiseAll(dataArr).then(arr => {
    const promises = []
    for (let j = 0; j < arr.length; j++) {
      if (arr[j]) {
        const doc = new HeadlineSchema({ ...dataArr[j] });
        const prom = new Promise((res, rej) => {
          doc.save(function (err, item) {
            if (err) rej(err);
            res(item)
          });
        });
        promises.push(prom)
        // promises.push(doc.save())
      } else console.log('Duplicate found')
    }
    return Promise.all(promises)
  }).then(items => {
    console.log(items)
    console.log('==================>>>>>>>>>>  ITEMS INSERTED : ', items.length, '   <<<<<<<<<<==================')
    mongoose.connection.close();
  }).catch(err => console.log(err));
});












