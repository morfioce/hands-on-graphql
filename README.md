# Exericse 4
- ## Add a Comment Node to the schema that have properties `id`, `text` 
- ## Add a relation between a User node and a Comment node, property field name `comments`
- ## Add a relation between a Comment node and a User node, property field named `author`

--- Graph of schema here

## Query example
```js
query {
 me {
    id
    name
    comments {
      id,
      text
      author {
        id
        name
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
      "comments": [
        {
          "id": "c1",
          "text": "Where to start learning GraphQL",
          "author": {
            "id": "u1",
            "name": "moncef"
          }
        },
        {
          "id": "c3",
          "text": "Thank you",
          "author": {
            "id": "u1",
            "name": "moncef"
          }
        }
      ]
    }
  }
}
```