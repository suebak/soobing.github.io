/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useEffect } from "react"
import P5Wrapper from 'react-p5-wrapper';

import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SCREEN_WIDTH_BOUND, CONTENTS_WIDTH_BOUND } from '../constants';

import Mover from "../components/mover"
import "./layout.css"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
@media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    flex-direction: column;
  }
`
const TextH2 = styled.h2`
  font-size: 16px;
  margin: 0;
`
const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffeb3b5e;
  width: 300px;
  height: auto;
  min-height: 100vh;

  & > ${TextH2} {
    :nth-of-type(1) {
      margin: 10px 0px 5px 0px;
    }
    :nth-of-type(2) {
      font-family: 'Permanent Marker', cursive;
      font-size: 20px;
    }
  }
  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    margin: 0 auto;
    height: 250px;
    min-height: 250px;
    width: 100%;
  }
`
const Contents = styled.div`
  display: flex;
  width: ${CONTENTS_WIDTH_BOUND};
  margin: 0 auto;
  font-family: 'Noto Sans KR', sans-serif;
  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    width: calc(100% - 30px);
  }
`

const NavH1 = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fd8b66;
  & > a {
    font-size: 14px;
    color: white;
    text-decoration: none;
    font-family: 'Life Savers', cursive;
  }
 `
const Nav = styled.header`
  margin-top: 30px;
  width: 48px;
  & > ${NavH1} {
    height: 30px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  & > ${NavH1} + ${NavH1}{
    margin-top: 5px;
  }

  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    display: flex;
    flex-direction: row;
    margin: 0px 30px 0px auto;
    height: 30px;
    width: 120px;
    & > ${NavH1} {
      display: flex;
      margin-left: auto;
      width: 48px;
      border-radius: 0px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      height: 30px;
      
      & > a {
        font-size: 14px;
      }
    }
    & > ${NavH1} + ${NavH1}{
      margin-top: 0px;
      margin-left: 5px;
    }
  }
`

const Main = styled.main`
  /* background: red; */
  margin: auto;
  width: 100%;
  padding: 60px 40px;
  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    padding: 40px 20px;
  }
  @media screen and (max-width: ${CONTENTS_WIDTH_BOUND}){
    padding: 40px 10px;
  }
`
const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Wrapper>
      <Title>
        {typeof window !== 'undefined' && <P5Wrapper sketch={Mover} />}
        <TextH2 style={{ fontFamily: `'Rock Salt', cursive` }}>Soobin Bak</TextH2>
        <TextH2>Frontend Developer</TextH2>
        {/* <NavSlide /> */}
      </Title>
      <Nav >
        <NavH1> <Link to="/">home</Link></NavH1>
        <NavH1> <Link to="/blog">blog</Link></NavH1>
      </Nav>
      <Contents>
        <Main>{children}</Main>
      </Contents>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
