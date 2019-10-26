const Tweet = {
  comments(parent, args, { db }) {
    return db.comments.filter((c) => c.tweet == parent.id);
  }
};

export default Tweet;
