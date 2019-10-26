# Exericse 5
- ## Add a relation between a Tweet node and a Comment node, property field name `comments`
- ## Add a relation between a Comment node and a Tweet node, property field named `tweet`

--- Graph of schema here

## Query example
```js
query {
 user(id: "u2") {
    id
    name
    tweets {
      id
      text
      comments {
        id
        text
        author {
          id
        }
      }
    }
  }
}
```

## Response
```js
{
  "data": {
    "user": {
      "id": "u2",
      "name": "lee",
      "tweets": [
        {
          "id": "t3",
          "text": "REST in peace, welcome GraphQL #graphql",
          "comments": [
            {
              "id": "c1",
              "text": "Where to start learning GraphQL",
              "author": {
                "id": "u1"
              }
            },
            {
              "id": "c2",
              "text": "Go to howtographql.com",
              "author": {
                "id": "u2"
              }
            },
            {
              "id": "c3",
              "text": "Thank you",
              "author": {
                "id": "u1"
              }
            }
          ]
        }
      ]
    }
  }
}
```