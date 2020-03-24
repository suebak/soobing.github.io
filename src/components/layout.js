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
import Wave from "../components/wave"
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
const StickyContents = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  & > ${TextH2} {
    :nth-of-type(1) {
      margin: 10px 0px 5px 0px;
    }
    :nth-of-type(2) {
      font-family: 'Permanent Marker', cursive;
      font-size: 20px;
    }
  }
`
const StickyWrapper = styled.div`
  position: fixed;
  top:0;
  left:0;
  width: 250px;
  height: 100%;
  display: table;
  text-align: center;
  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`
const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: black;
  color: white;
  width: 250px;
  height: auto;
  min-height: 100vh;

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

const NavItem = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  & > a {
    font-size: 14px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    font-family: 'Life Savers', cursive;
  }
 `
const Nav = styled.header`
  margin-top: 30px;
  width: 48px;
  & > ${NavItem} {
    height: 30px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  & > ${NavItem} + ${NavItem}{
    margin-top: 5px;
  }

  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    display: flex;
    flex-direction: row;
    margin: 0px 30px 0px auto;
    height: 30px;
    width: 120px;
    & > ${NavItem} {
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
    & > ${NavItem} + ${NavItem}{
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
        <StickyWrapper>
          <StickyContents>
            {typeof window !== 'undefined' && <P5Wrapper sketch={Wave} />}
            <TextH2 style={{ fontFamily: `'Rock Salt', cursive` }}>Soobin Bak</TextH2>
            <TextH2>Frontend Developer</TextH2>
          </StickyContents>
        </StickyWrapper>


        {/* <NavSlide /> */}
      </Title>
      <Nav >
        <NavItem> <Link to="/">about</Link></NavItem>
        <NavItem> <Link to="/blog">blog</Link></NavItem>
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
