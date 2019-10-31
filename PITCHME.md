Hands on GraphQL

---

## AGENDA

@ol[](false)
- Introduction to Graphql
- Demo: GraphQL twitter API 
- GraphQL Basics:
  - Schema
  - Query / Practice
  - Mutation / Practice
  - Subscription / Practice
- Possible GraphQL API Architectures 
- Learn by doing: GraphQL over REST 
@ulend
  
---
@snap[north span-100]
### What is *GraphQL*?
@snapend

@ul
- A new open source API standard (invented and released by facebook in 2015)
- A **query language** for API
- Enables **declarative** data fetching
@ulend

---

@snap[north span-100]
### The year 2000 when REST was developed
@snapend

@ul
- Mobile development still in its enfacy.
- Client side application was fairly simple.
- Application development speed does not compare to 2015.
@ulend

---

@snap[north span-100]
### Why GraphQL?
@snapend

@ul
- Increased mobile usage created the need for efficient data loading.
- Variatey of plateforms on the client side: Phone, Tablet, Smart watch, etc.
- Fast development speed and expectation for rapid feature development.
@ulend

---

#### Data fetching with REST Vs GraphQL

---
@snap[north span-100]
### A blogging app with a REST API
![IMAGE](./assets/blog-app-screen.jpg)
@snapend

---
@snap[north span-100]
### A blogging app with a REST API
![IMAGE](./assets/blog-app-back.jpg)
@snapend

---?image=assets/blog-app.png&size=auto 50%
---?image=assets/blog-app-1.png&size=auto 50%
---?image=assets/blog-app-2.jpg&size=auto 50%
---?image=assets/blog-app-3.png&size=auto 50%
---?image=assets/blog-app-4.jpg&size=auto 50%
---?image=assets/blog-app-5.png&size=auto 50%
---?image=assets/blog-app-6.jpg&size=auto 50%

---
@snap[north span-100]
### A blogging app with a GraphQL API
![IMAGE](./assets/blog-app-gql-api.jpg)
@snapend

---?image=assets/blog-app-gql.jpg&size=auto 95%
---?image=assets/blog-app-gql-1.jpg&size=auto 95%
---?image=assets/blog-app-gql-2.jpg&size=auto 95%

---

@snap[north span-100]
### GraphQL is a better RESt
@snapend

@ul
- No more overfetching
- No more underfetching
- Rapid product ieteratons on the frontend
- Insightful analytics on the backend
- Benefits of schema and a type system
@ulend

---

@snap[north span-100]
### GraphQL execution
@snapend

@snap[west span-50]
```js
type Query {
  user(id: ID!): User
}

type User {
  id: ID!
  name: String!
  email: String!
}
```
@snapend

@snap[east span-50]
```js
query {
  user(id: "abc") {
    id
    name
    email
  }
}
```
@snapend

---

@snap[north span-100]
### GraphQL execution
@snapend

@snap[west span-50]
```js
type Query {
  user(id: ID!): User
}

type User {
  tweets: [Tweet]
}

type Tweet {
  id: ID!
  content: String
}
```
@snapend

@snap[east span-50]
```js
query {
  user(id: "abc") {
    tweets {
      id
      content
    }
  }
}
```
@snapend

---

@snap[north span-100]
### GraphQL execution
@snapend

@snap[west span-50]
```js
type Query {
  user: [User]
}

type User {
  tweets: [Tweet]
}

type Tweet {
  id: ID!
  content: String
}
```
@snapend

@snap[east span-50]
```js
query {
  user {
    tweets {
      id
      content
    }
  }
}
```
@snapend

---

@snap[north span-100]
### Possible GraphQL API architectures
@snapend

@ul
- GraphQL server with a connected database.
- GraphQL server to integrate existing services.
- GraphQL server with a connected database and integrated services.
@ulend

---?image=assets/gql-database.jpg&size=auto 100%

---
@snap[north span-100]
### GraphQL server with a connected database
@snapend

@ul
- Often, used for new projects.
- A single web server that implements GraphQL.
- Server resolves requests and build reponse with data that it fetches from the database.
@ulend

---

@snap[north span-100]
### GraphQL server to integrate existing services
@snapend

@ul
- Often, used for companies with legacy services and APIs.
- The GraphQL server hides the complexity of data fetching logic.
- The GraphQL server doesn't care about the data sources.
@ulend
