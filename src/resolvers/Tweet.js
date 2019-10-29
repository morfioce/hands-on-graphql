const Tweet = {
  author(parent, _, { db }) {
    return db.users.find((u) => u.id == parent.author);
  },

  likers(parent, _, { db }) {
    return db.users.filter((u) => {
      return u.likes && u.likes.includes(parent.id);
    });
  },

  retweeters(parent, _, { db }) {
    return db.users.filter((u) => {
      return u.retweets && u.retweets.includes(parent.id);
    });
  }
};

export default Tweet;
