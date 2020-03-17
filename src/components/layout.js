/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1068px){
    flex-direction: column;
    background: blue;
  }
`
const Title = styled.div`
  background: pink;
  width: 300px;
  height: 100vh;
  @media screen and (max-width: 1068px){
    margin: 0 auto;
    max-height: 90px; /*TODO: 컨텐츠 넣으면 없애기 */
  }
`
const Contents = styled.div`
  width: 768px;
  margin: 0 auto;
  background: yellowgreen;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Title></Title>
      <Contents>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </Contents>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
