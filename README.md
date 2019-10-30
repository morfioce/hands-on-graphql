# Exericse 6

### Create a mutation `follow(followerId: ID!, followeeId: ID!): User!`
### Create a mutation `unfollow(followerId: ID!, followeeId: ID!): User!`

## Query example
```js
mutation {
	follow(input: {
    followerId: "u2"
    followeeId: "u1"
  }) {
    id
    name
    followers {
      id,
      name
    }
  }
}
```

## Response
```js
{
  "data": {
    "follow": {
      "id": "u1",
      "name": "moncef",
      "followers": [
        {
          "id": "u2",
          "name": "lee"
        }
      ]
    }
  }
}
```