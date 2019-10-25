import db from '../db';

const Query = {
  ping: () => 'GraphQL server is alive',
  me: () => db.users[0],

  user: (_, args) => {
    if (args.id === '') {
      throw new Error('"id" is not valid');
    }
    return db.users.find((u) => u.id === args.id);
  }
};

export default Query;
