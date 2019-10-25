# Write a query and a resolver to filter `tweets` by user id

## Query example
```js
query {
  tweets(id: "u1") {
    id
    text
  }
}
```

## Response
```js
{
  "data": {
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
```