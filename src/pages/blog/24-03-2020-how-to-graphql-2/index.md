---
path: "/blog/how-to-graphQL-1"
date: "2020-03-24T02:19:56.122Z"
categories: graphQL
title: graphQL을 사용해보자 #2
description: GraphQL schemas
---

# GraphQL schemas
GraphQL schemas는 [SDL(Schema Definition Language)](https://www.prisma.io/blog/graphql-sdl-schema-definition-language-6755bcb9ce51) 로 작성되어 있다. SDL은 data structures를 정의할 수 있게 타입시스템이 있다.
## 모든 GraphQL schema는 3개의 root type이 있다.
* `Query`, `Mutation`, `Subscription`
* root type이란 GraphQL API에서 쿼리 시작점이라고 이해하면 편하다. ~~(슈빈피셜)~~ 무슨 말인지 모르겠으면 일단 3가지를 기억하고 아래 예제 2번을 봐보자!
* 그리고 기억할 키워드가 하나 더 있는데, root type(Query or Mutation or Subscription)에서 가장 상단에 위치한 field를 <b>root field</B> 라고 하며 GraphQL API operations을 정의한다.
* `Query`, `Mutation`, `Subscription` 모두 GraphQL API에 전송하면 root field 부터 시작한다.
  - 예제 1
    + root field: 1개(info)
    + API에서 쿼리할 수 있는 것은 info단 한가지 뿐
  ```
    type Query {
      info: String!
    }
  ```

  - 예제 2
    + root field: 3개(users, user, createUser)
    + User 타입은 뭔가? Query, Mutation, Subscription도 아닌 것이 이렇게 정의 될 수 있는가? 싶겠지만! 사용자 정의 타입이라고 보면 된다. Query 내부에서 User 타입이 쓰이고 있는 것을 볼 수 있다.
    + User 타입은 root type이 아니기떄문에(= root type에서 쓰일 타입이란 이야기) root field를 가지고 있지 않다.
  ```
    type Query {
      users: [User!]!
      user(id: ID!): User
    }

    type Mutation {
      createUser(name: String!): User!
    }

    type User {
      id: ID!
      name: String!
    }
  ```
## GraphQL 서버 만들기
- graphql-yoga를 설치한다.
  ```
    graphql-yoga
  ```
- `src/index.js` 에 아래와 같이 코드를 작성하여 graphQL 서버를 만들어 준다.
  ```
    const { GraphQLServer } = require('graphql-yoga')

    // schema: 정의만 하는 곳이라고 생각하면 됨
    const typeDefs = `
    type Query {
      info: String!
    }
    `

    // resolvers: GraphQL schema의 실제 구현체
    const resolvers = {
      Query: {
        info: () => `This is the API of a Hackernews Clone`
      }
    }

    // schema와 resolvers는 graphQL 서버에 전달되서 실행된다.
    const server = new GraphQLServer({
      typeDefs,
      resolvers,
    })
    server.start(() => console.log(`Server is running on http://localhost:4000`))

  ```

  ## GraphQL 서버 실행
  - `node src/index.js` (node.js는 당연히 깔려있다고 가정~)

  # Query 해보기
  ## GraphQL에서 query
    - http://localhost:4000 에서 재생버튼을 누르고 왼쪽 영역에서 info를 쿼리해보자
      ```
      # Write your query or mutation here
      query {
        info
      }
      ```
  ## resolver와 typeDefs와의 관계
    - Typescript 처럼 먼저 타입을 정의해 놓는 곳이 typeDefs이고, 
    resolver는 실제 구현체이다. 그래서 정의해놓은 타입대로 resolver를 구현하지 않으면 에러를 뱉는다.
    - `src/index.js` 에서 resolver를 이렇게 바꿔보자

      ```
        const resolvers = {
          Query: {
            info: () => null
          }
        }
      ```
    - 결과를 확인하려면 서버를 재실행해야한다. (`control + c` 해서 서버를 끈뒤, `node src/index.js` 다시켠다.)
  ## Docs와 Schema
    - 오른쪽에 docs와 schema를 볼 수 있는 기능이 있다.