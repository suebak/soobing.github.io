import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from '../components/layout'
// import '../css/blog-post.css';

import styled from "@emotion/styled"

const H1 = styled.h1`
  font-size: 2.8vw !important;
  margin-top: 40px !important;
  margin-bottom: 80px !important;
`
const Wrapper = styled.div`
  * {font-size: 1.2vw; line-height: 1.3; font-family: 'Noto Sans KR', sans-serif;}
  h1 {font-size: 2.5vw;}
  h2 {font-size: 1.8vw; margin-bottom: 20px;}
  h3 {font-size: 1.5vw; margin-bottom: 20px;}
  h4 {font-size: 2.5vw; margin-bottom: 20px;}
  h5 {font-size: 2.5vw; margin-bottom: 20px;}
  h6 {font-size: 2.5vw; margin-bottom: 20px;}
`
export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout className="blog-post-container">
      <Helmet>
        <title>{post.frontmatter.title} :: Soobing's Story</title>
      </Helmet>
      <Wrapper>
        <H1>{post.frontmatter.title}</H1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`