# Exericse 8

A user should be able to subscribe to `like` events on his own tweets.
A user send a subscription query with his own `id`.

### Create a subscription `like(userId: ID!): Tweet!`

## Query example
```js
subscription {
  like(userId: "u1") {
    id
    text
    likers {
      id
      name
    }
  }
}
```