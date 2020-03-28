---
path: "/blog/how-to-graphQL-2"
date: "2020-03-24T02:19:56.122Z"
categories: graphQL
title: 'graphQL #2 용어정리'
description: GraphQL schemas
---
# Type
GraphQL은 어느 언어에서도 사용할 수 있도록하기 위해 자체적으로 query 언어를 만들었다.
자체적으로 언어를 만들었으니 타입이 있겠지? 
타입은 크게 3가지가 있다.
1) Object types 2) Scalars 3) Enums 
## Object types
- Object type은 Query, Mutation, Input 타입들 까지 포함하고, 직접 Object 타입을 만들 수 도 있다.
- Object typee들은 모두 Arguments(매개변수)들을 받을 수 있다. 안받아도 상관없고~
### Query Type
### Mutation Type
### Input type

## Scalars
## Enums

# Type modifier
## !
## []

# Interfaces
# Union types


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
