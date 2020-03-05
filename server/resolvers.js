const HeadlineSchema = require("./models/headlines.js");

const resolvers = {
  Query: {
    headline: async (_, args) => {
      return findData(args, HeadlineSchema);

    },
  }
};

module.exports = resolvers;

async function findData (currentArgs, headlineModel) {

  let query = {};

  for (let key in currentArgs) {
    
    query[key] = currentArgs[key];
  }
  
  if (Object.keys(query).length) {
    return await headlineModel.find(query);
  } else {
    return await headlineModel.find({}).exec();
  }
}


