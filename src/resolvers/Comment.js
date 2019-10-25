const Comment = {
  author(parent, _, { db }) {
    return db.users.find((u) => u.id == parent.author);
  }
};

export default Comment;
