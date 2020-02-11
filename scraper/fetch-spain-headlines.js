const moment = require('moment');

const getLaVanguardia = require('./newspapers/spain/la-vanguardia').getHeadline;
const getElPais = require('./newspapers/spain/el-pais').getHeadline;
const getElMundo = require('./newspapers/spain/el-mundo').getHeadline;
const getVeinteMinutos = require('./newspapers/spain/20-minutos').getHeadline;
const getElPeriodico = require('./newspapers/spain/el-periodico').getHeadline;
const getElConfidencial = require('./newspapers/spain/el-confidencial').getHeadline;
const getExpansion =  require('./newspapers/spain/expansion').getHeadline;
const getElMundoToday = require('./newspapers/spain/el-mundo-today').getHeadline;

//ADD NEWSPAPERS HERE

async function fetchHeadlines() {
  const laVanguardiaHeadline =   await getLaVanguardia();
  const elPaisHeadline =         await getElPais();
  const elMundoHeadline =        await getElMundo();
  const veinteMinutosHeadline =  await getVeinteMinutos();
  const elPeriodicoHeadline =    await getElPeriodico();
  const elConfidencialHeadline = await getElConfidencial();
  const expansionHeadline =      await getExpansion();
  const elMundoTodayHeadline =   await getElMundoToday();
  //ADD HEADLINES HERE


  const headlines =
    {
      day: Number(moment(Date.now()).add(1, 'hours').format("DD")),
      month: Number(moment(Date.now()).add(1, 'hours').format("MM")),
      year: Number(moment(Date.now()).add(1, 'hours').format("YYYY")),
      time: moment(Date.now()).add(1, 'hours').format("LT"), //Added 1h to adapt to spanish timezone (UTC +1)
      headlines: {
        laVanguardia:   laVanguardiaHeadline,
        elPais:         elPaisHeadline,
        elMundo:        elMundoHeadline,
        veinteMinutos:  veinteMinutosHeadline,
        elPeriodico:    elPeriodicoHeadline,
        elConfidencial: elConfidencialHeadline,
        expansion:      expansionHeadline,
        elMundoToday:   elMundoTodayHeadline,
        //ADD HEADLINES HERE
      }
    }

  return headlines;
}

module.exports = fetchHeadlines;
