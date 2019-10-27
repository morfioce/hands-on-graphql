import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import User from './resolvers/User';
import Comment from './resolvers/Comment';

const server = new ApolloServer({
  typeDefs: importSchema('src/schema.graphql'),
  resolvers: {
    Query,
    Mutation,
    User,
    Comment
  },
  context: {
    db
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
