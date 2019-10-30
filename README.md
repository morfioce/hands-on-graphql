# Exericse 7

### Create a mutation `like(userId: ID!, tweetId: ID!): User!`
### Create a mutation `retweet(userId: ID!: tweetId: ID!): User!`

## Query example
```js
mutation {
  like(input: {
    tweetId: "t1"
    userId: "u3"
  }) {
    id
    name
    likes {
      id
      text
    }
  }
}
```

## Response
```js
{
  "data": {
    "like": {
      "id": "u3",
      "name": "seth",
      "likes": [
        {
          "id": "t1",
          "text": "GraphQL is cool #graphql"
        }
      ]
    }
  }
}
```