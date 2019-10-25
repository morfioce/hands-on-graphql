# Add a relation between a User node and an other User node, property field named `followers`

## Query example
```js
query {
  me {
    id
    name
    email
    followers {
      id
      name
      tweets {
        id
        text
      }
    }
  }
}
```

## Response
```js
{
  "data": {
    "me": {
      "id": "u1",
      "name": "moncef",
      "email": "moncef@example.com",
      "followers": [
        {
          "id": "u2",
          "name": "lee",
          "tweets": [
            {
              "id": "t3",
              "text": "REST in peace, welcome GraphQL #graphql"
            }
          ]
        },
        {
          "id": "u3",
          "name": "seth",
          "tweets": []
        }
      ]
    }
  }
}
```