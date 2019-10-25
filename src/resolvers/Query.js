const Query = {
  ping() {
    return 'GraphQL server is alive';
  },

  me(_, __, { db }) {
    return db.users[0];
  },

  user: (_, args, { db }) => {
    if (args.id === '') {
      throw new Error('"id" is not valid');
    }
    return db.users.find((u) => u.id === args.id);
  }
};

export default Query;
