const Subscription = {
  like: {
    subscribe(_, { userId }, { pubsub }) {
      return pubsub.asyncIterator(`LIKE_${userId}`);
    }
  },

  retweet: {
    subscribe(_, { userId }, { pubsub }) {
      return pubsub.asyncIterator(`RETWEET_${userId}`);
    }
  },

  mention: {
    subscribe(_, { userId }, { pubsub }) {
      return pubsub.asyncIterator(`MENTION_${userId}`);
    }
  },
};

export default Subscription;
