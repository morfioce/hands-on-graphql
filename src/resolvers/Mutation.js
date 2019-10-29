const Mutation = {
  createUser(_, { input }, { db }) {
    const { name, email } = input;
    const userExists = db.users.find((u) => u.email == email);
    if (userExists) {
      throw new Error('You are already registred');
    }

    let user = {
      id: `u${db.users.length + 1}`,
      name,
      email
    };

    db.users.push(user);

    return user;
  },

  updateUser(_, { input }, { db }) {
    const { id, name, email } = input;
    const userExists = db.users.find((u) => u.id == id);

    if (!userExists) {
      throw new Error('There is no user with id:' + id);
    }

    let user = {
      id,
      name: name || userExists.name,
      email: email || userExists.email
    };

    db.users = db.users.map((u) => {
      if (u.id == id) return user;
      else return u;
    });

    return user;
  },

  createTweet(_, { input }, { db, pubsub }) {
    const { userId, text } = input;
    const user = db.users.find((u) => u.id == userId);
    if (!user) {
      throw new Error('No user with id ' + userId);
    }

    const tweet = {
      id: `t${db.tweets.length + 1}`,
      text,
      author: userId
    };

    db.tweets.push(tweet);

    db.users.forEach(({ id, name }) => {
      if (text.includes(`@${name}`)) {
        pubsub.publish(`MENTION_${id}`, { mention: tweet });
      }
    });

    return tweet;
  },

  like(_, { input }, { db, pubsub }) {
    const { tweetId, userId } = input;
    const user = db.users.find((u) => u.id == userId);
    if (!user) {
      throw new Error('No user with id ' + userId);
    }

    const tweet = db.tweets.find((u) => u.id == tweetId);
    if (!tweet) {
      throw new Error('No tweet with id ' + tweetId);
    }

    if (!user.likes.includes(tweetId)) {
      user.likes.push(tweetId);
      pubsub.publish(`LIKE_${tweet.author}`, { like: tweet });
    }

    return user;
  },

  retweet(_, { input }, { db, pubsub }) {
    const { tweetId, userId } = input;
    const user = db.users.find((u) => u.id == userId);
    if (!user) {
      throw new Error('No user with id ' + userId);
    }

    const tweet = db.tweets.find((u) => u.id == tweetId);
    if (!tweet) {
      throw new Error('No tweet with id ' + tweetId);
    }

    if (!user.retweets.includes(tweetId)) {
      user.retweets.push(tweetId);
      pubsub.publish(`RETWEET_${tweet.author}`, { retweet: tweet });
    }

    return user;
  },

  createComment(_, { input }, { db }) {
    const { userId, tweetId, text } = input;
    let userExists = db.users.find((u) => u.id == userId);
    if (!userExists) {
      throw new Error('userId is not valid');
    }

    let tweetExists = db.tweets.find((t) => t.id == tweetId);
    if (!tweetExists) {
      throw new Error('tweetId is not valid');
    }

    let comment = {
      id: `c${db.comments.length + 1}`,
      text,
      author: userId,
      tweet: tweetId
    };

    db.comments.push(comment);

    return comment;
  },

  follow(_, { input }, { db }) {
    const { followerId, followeeId } = input;
    let follower = db.users.find((u) => u.id == followerId);
    if (!follower) {
      throw new Error('No user with id ', followerId);
    }

    let followee = db.users.find((u) => u.id == followeeId);
    if (!followee) {
      throw new Error('No user with id ', followeeId);
    }

    if (!follower.follow.includes(followeeId)) {
      follower.follow.push(followeeId);
    }

    return follower;
  },

  unfollow(_, { input }, { db }) {
    const { followerId, followeeId } = input;
    let follower = db.users.find((u) => u.id == followerId);
    if (!follower) {
      throw new Error('No user with id ', followerId);
    }

    let followee = db.users.find((u) => u.id == followeeId);
    if (!followee) {
      throw new Error('No user with id ', followeeId);
    }

    const i = follower.follow.findIndex(id => id == followeeId);
    if (i > -1) {
      follower.follow.splice(i, 1);
    }

    return follower;
  }
};

export default Mutation;
