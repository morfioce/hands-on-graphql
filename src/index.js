import { ApolloServer, PubSub } from 'apollo-server';
import { importSchema } from 'graphql-import';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Subscription from './resolvers/Subscription';
import User from './resolvers/User';
import Comment from './resolvers/Comment';
import Tweet from './resolvers/Tweet';

const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs: importSchema('src/schema.graphql'),
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Tweet,
    Comment
  },
  context: {
    db,
    pubsub
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
