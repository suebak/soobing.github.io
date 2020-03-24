import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import styled from "@emotion/styled"
import SEO from '../../components/seo';
// import '../css/index.css'; // add some style if you want!
const Post = styled.div``
const Wrapper = styled.div`
  & > * {
    font-family: 'Noto Sans KR', sans-serif;
  }
  & > ${Post} + ${Post} {
    margin-top: 60px;
  }
`
const H1 = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  & > a {
    text-decoration: none;
    color: black;
  }
`
const H2 = styled.h2`
  font-size: 13px;
  font-weight: normal;
  font-family: 'Raleway', sans-serif;
  margin: 0;
`
const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 8px;
  & > ${H2} {
    min-width: max-content;
  }
`

const Keyword = styled.h3`
  background: #e3e3e3;
  border-radius: 2px;
  font-size: 13px;
  font-weight: normal;
  padding: 3px 9px;
  margin: 0px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  font-family: 'Raleway', sans-serif;

`
const KeywordsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > ${Keyword} + ${Keyword} {
    margin-left: 5px;
  }
`

const P = styled.p`
  font-size: 12px;
  line-height: 1.5;
`

export default function Index({ data, location }) {
  const { edges: posts } = data.allMarkdownRemark
  console.log(posts)
  return (
    <Layout>
      <SEO title="Blog :: Soobing's Story"
        description="개발(React, Gatsby, Next.js, and so on...)과 여행에 관한 이야기들:: Soobing's Story"
        pathname={location.pathname} />
      <Wrapper>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Post key={post.id} >
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
              </Post>
            )
          })}
      </Wrapper>
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