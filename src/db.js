const users = [
  {
    id: "u1",
    name: "moncef",
    email: "moncef@example.com",
    follow: ['u2']
  },
  {
    id: "u2",
    name: "lee",
    email: "lee@example.com",
    follow: ['u1']
  },
  {
    id: "u3",
    name: "seth",
    email: "seth@example.com",
    follow: ['u2', 'u1']
  },
];

const tweets = [
  {
    id: "t1",
    text: "GraphQL is cool #graphql",
    author: "u1"
  },
  {
    id: "t2",
    text: "Apollo graphql server is awesome #apollo",
    author: "u1"
  },
  {
    id: "t3",
    text: "REST in peace, welcome GraphQL #graphql",
    author: "u2"
  }
];

const comments = [
  {
    id: "c1",
    text: "Where to start learning GraphQL",
    author: "u1",
    tweet: "t3"
  },
  {
    id: "c2",
    text: "Go to howtographql.com",
    author: "u2",
    tweet: "t3"
  },
  {
    id: "c3",
    text: "Thank you",
    author: "u1",
    tweet: "t3"
  },
  {
    id: "c4",
    text: "Where to get started with apollo server?",
    author: "u3",
    tweet: "t1"
  }
];

export default { users, tweets, comments };
