const SpanishHeadlines = require("./models/spanish-headlines.js");
const BritishHeadlines = require("./models/british-headlines");

const resolvers = {
  Query: {
    spain: async (_, args) => {
      return findData(args, SpanishHeadlines);
    },

    uk: async (_, args) => {
      return findData(args, BritishHeadlines);
    }
  }
};

module.exports = resolvers;

async function findData(currentArgs, headlineModel) {

  let query = {};

  for (let key in currentArgs) {
    query[key] = currentArgs[key];
  }

  if (query.keys().length) {
    return await headlineModel.find(query);
  } else {
    return await headlineModel.find({}).exec();
  }
}


