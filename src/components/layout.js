/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { SCREEN_WIDTH_BOUND, CONTENTS_WIDTH_BOUND } from '../constants';

import Mover from "../components/mover"
import Header from "./header"
import "./layout.css"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
@media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    flex-direction: column;
  }
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffeb3b5e;
  width: 300px;
  height: 100vh;
  font-family: 'Permanent Marker', cursive;
  & > div {
    :nth-of-type(1) {
      font-family: 'Rock Salt', cursive;
    }
  }
  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    margin: 0 auto;
    height: 250px;
    width: 100%;
  }
`
const Contents = styled.div({
  width: CONTENTS_WIDTH_BOUND,
  margin: '0 auto',
  fontFamily: `Noto Sans KR', 'sans-serif`
})

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
      <Title>
        <Mover />
        <div>Soobin Bak</div>
        <div>Frontend Developer</div>
      </Title>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Contents>
        <main>{children}</main>
      </Contents>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
