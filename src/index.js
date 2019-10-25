import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import Query from './resolvers/Query';

const server = new ApolloServer({
  typeDefs: importSchema('src/schema.graphql'),
  resolvers: {
    Query
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
