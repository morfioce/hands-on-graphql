const User = {
  tweets(parent, _, { db }) {
    return db.tweets.filter(t => t.author == parent.id);
  }
}

export default User;