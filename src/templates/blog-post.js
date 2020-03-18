import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from '../components/layout'
// import '../css/blog-post.css';

import styled from "@emotion/styled"
import { CONTENTS_WIDTH_BOUND } from '../constants';

const H1 = styled.h1`
  font-size: 30px !important;
  margin-top: 40px !important;
  margin-bottom: 80px !important;
  @media screen and (max-width: ${CONTENTS_WIDTH_BOUND}){
    font-size: 22px !important;
    margin-top: 10px !important;
    margin-bottom: 40px !important;
  }
`
const Wrapper = styled.div`
  * {font-size: 13.5px; line-height: 1.3; font-family: 'Noto Sans KR', sans-serif;}
    h1 {font-size: 23px}
    h2 {font-size: 20px; margin-bottom: 20px;}
    h3 {font-size: 18px; margin-bottom: 20px;}
    h4 {font-size: 16px; margin-bottom: 20px;}
    h5 {font-size: 14px; margin-bottom: 20px;}
    h6 {font-size: 13.8px; margin-bottom: 20px;}
  @media screen and (max-width: ${CONTENTS_WIDTH_BOUND}){ 
    * {font-size: 13px; line-height: 1.3; font-family: 'Noto Sans KR', sans-serif;}
    h1 {font-size: 18px}
    h2 {font-size: 16px; margin-bottom: 20px;}
    h3 {font-size: 14px; margin-bottom: 20px;}
    h4 {font-size: 13.8px; margin-bottom: 20px;}
    h5 {font-size: 13.5px; margin-bottom: 20px;}
    h6 {font-size: 13px; margin-bottom: 20px;}
  }
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