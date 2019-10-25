# Add a relation between a User node and a Tweet node, property field named `tweets`

## Query example
```js
query {
  me {
    id
    name
    email
    tweets {
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
    "me": {
      "id": "u1",
      "name": "moncef",
      "email": "moncef@example.com",
      "tweets": [
        {
          "id": "t1",
          "text": "GraphQL is cool #graphql"
        },
        {
          "id": "t2",
          "text": "Apollo graphql server is awesome #apollo"
        }
      ]
    }
  }
}
```