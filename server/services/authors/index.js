const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const schema = buildFederatedSchema([{ typeDefs, resolvers }]);

const server = new ApolloServer({ schema });

server.listen(4001).then(({ url }) => {
  console.log(`🚀 Authors service ready at ${url}`);
});
