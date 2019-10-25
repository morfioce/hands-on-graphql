import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import Query from './resolvers/Query';
import User from './resolvers/User';

import db from './db';

const server = new ApolloServer({
  typeDefs: importSchema('src/schema.graphql'),
  resolvers: {
    Query,
    User
  },
  context: {
    db
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
