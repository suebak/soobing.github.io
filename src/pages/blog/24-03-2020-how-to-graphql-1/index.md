---
path: "/blog/how-to-graphQL-1"
date: "2020-03-24T01:19:56.122Z"
categories: graphQL
title: 'graphQL #1 GraphQL 서버'
description: React + Node.js를 사용하여 graphQL을 사용하는 법
---

# 프로젝트 시작
React + Node.js를 사용하여 graphQL을 사용해 보려고 한다. 일단 graphQL 서버를 만들어 보자
## 프로젝트 설정
- 프로젝트를 초기화 하고 src/index.js 파일을 만든다.
  ```
    npm init -y
    mkdir src
    touch src/index.js
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