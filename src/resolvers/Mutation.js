const Mutation = {
  createUser(_, { name, email }, { db }) {
    if (email == '') {
      throw new Error('email is required');
    }
    const userExists = db.users.find((u) => u.email == email);
    if (userExists) {
      throw new Error('You are already registred');
    }

    if (name == '') {
      throw new Error('name is required');
    }

    let user = {
      id: `u${db.users.length + 1}`,
      name,
      email
    };

    db.users.push(user);
    return user;
  },

  updateUser(_, { id, name, email }, { db }) {
    const userExists = db.users.find((u) => u.id == id);

    if (!userExists) {
      throw new Error('There is no user with id:' + id);
    }

    let user = {
      id,
      name: name || userExists.name,
      email: email || userExists.email
    };

    db.users = db.users.map((u) => {
      if (u.id == id) return user;
      else return u;
    });

    return user;
  },

  createComment(_, { input }, { db }) {
    const { userId, tweetId, text } = input;
    let userExists = db.users.find((u) => u.id == userId);
    if (!userExists) {
      throw new Error('userId is not valid');
    }

    let tweetExists = db.tweets.find((t) => t.id == tweetId);
    if (!tweetExists) {
      throw new Error('tweetId is not valid');
    }

    let comment = {
      id: `c${db.comments.length + 1}`,
      text,
      author: userId,
      tweet: tweetId
    };

    db.comments.push(comment);

    return comment;
  }
};

export default Mutation;
