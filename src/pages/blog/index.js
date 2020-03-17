import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import styled from "@emotion/styled"

// import '../css/index.css'; // add some style if you want!
const Wrapper = styled.div`
  & > * {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0px;
  }
`
const H1 = styled.h1`
  font-size: 1.8vw;
  & > a {
    text-decoration: none;
    color: black;
  }
`
const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 8px;
`

const Keyword = styled.h3`
  background: #e3e3e3;
  border-radius: 2px;
  font-size: 1.2vw;
  font-weight: normal;
  padding: 3px 9px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  font-family: 'Raleway', sans-serif;

`
const KeywordsDiv = styled.div`
  display: flex;
  flex-direction: row;
  & > ${Keyword} + ${Keyword} {
    margin-left: 5px;
  }
`
const H2 = styled.h2`
  font-size: 1.2vw;
  font-weight: normal;
  font-family: 'Raleway', sans-serif;
  margin: 0;
`
const P = styled.p`
  font-size: 1.1vw;
  line-height: 1.5;
`

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  console.log(posts)
  return (
    <Layout>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Wrapper key={post.id} >
              <H1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </H1>
              <InfoDiv>
                <KeywordsDiv>
                  {
                    post.frontmatter.categories.split(' ').map((keyword, index) => <Keyword key={index}>{keyword}</Keyword>)
                  }
                </KeywordsDiv>
                <H2>
                  {post.frontmatter.date}
                </H2>
              </InfoDiv>

              <P>{post.excerpt}</P>
            </Wrapper>
          )
        })}
    </Layout >
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            categories
          }
        }
      }
    }
  }
`