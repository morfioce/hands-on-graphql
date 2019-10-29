const Query = {
  me(_, __, { db }) {
    return db.users[0];
  },

  user: (_, args, { db }) => {
    let user = db.users.find((u) => u.id === args.id);
    if (!user) {
      throw new Error('no user with id ', args.id);
    }

    return user;
  }
};

export default Query;
