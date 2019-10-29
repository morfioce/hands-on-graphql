const User = {
  tweets(parent, _, { db }) {
    return db.tweets.filter((t) => t.author == parent.id);
  },

  followers(parent, _, { db }) {
    return db.users.filter((u) => u.follow.includes(parent.id));
  },

  comments(parent, _, { db }) {
    return db.comments.filter((c) => c.author == parent.id);
  },

  likes(parent, _, { db }) {
    return db.tweets.filter((t) => parent.likes.includes(t.id));
  },

  retweets(parent, _, { db }) {
    return db.tweets.filter((t) => parent.retweets.includes(t.id));
  }
};

export default User;
