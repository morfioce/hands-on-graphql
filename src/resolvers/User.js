const User = {
  tweets(parent, _, { db }) {
    return db.tweets.filter((t) => t.author == parent.id);
  },

  followers(parent, _, { db }) {
    return db.users.filter((u) => u.follow.includes(parent.id));
  },

  comments(parent, _, { db }) {
    return db.comments.filter((c) => c.author == parent.id);
  }
};

export default User;
