const moment = require('moment');

const getBBCnews = require('./newspapers/UK/bbc-news').getHeadline;
const getDailyMail = require('./newspapers/UK/daily-mail').getHeadline;
const getEveningStandard = require('./newspapers/UK/evening-standard').getHeadline;
const getTheGuardian = require('./newspapers/UK/the-guardian').getHeadline;
const getMorningStar = require('./newspapers/UK/morning-star').getHeadline;

//ADD NEWSPAPERS HERE


async function fetchBritishHeadlines() {
  const BBCnewsHeadline =          await getBBCnews();
  const dailyMailHeadline =        await getDailyMail();
  const eveningStandardHeadline =  await getEveningStandard();
  const theGuardianHeadline =      await getTheGuardian();
  const morningStarHeadline =      await getMorningStar();

  //ADD HEADLINES HERE


  const headlines =
    {
      day: Number(moment(Date.now()).add(1, 'hours').format("DD")),
      month: Number(moment(Date.now()).add(1, 'hours').format("MM")),
      year: Number(moment(Date.now()).add(1, 'hours').format("YYYY")),
      time: moment(Date.now()).add(1, 'hours').format("LT"), //Added 1h to adapt to spanish timezone (UTC +1)
      headlines: {
        BBC:              BBCnewsHeadline,
        dailyMail:        dailyMailHeadline,
        eveningStandard:  eveningStandardHeadline,
        theGuardian:      theGuardianHeadline,
        morningStar:      morningStarHeadline,
        //ADD HEADLINES HERE
      }
    }

  return headlines;
}


module.exports = fetchBritishHeadlines;