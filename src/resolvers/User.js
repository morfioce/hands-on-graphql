const User = {
  tweets(parent, _, { db }) {
    return db.tweets.filter((t) => t.author == parent.id);
  },

  followers(parent, _, { db }) {
    return db.users.filter((u) => u.follow.includes(parent.id));
  }
};

export default User;
