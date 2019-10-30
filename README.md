# Exericse 10

A user should be able to subscribe to `mention` events.  
A user send a subscription query with his own `id`.

### Create a subscription `mention(userId: ID!): Tweet!`

## Query example
```js
subscription {
  mentions: mention(userId: "u2") {
    id
    text
  }
}
```