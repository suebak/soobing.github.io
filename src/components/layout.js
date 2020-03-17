/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import { SCREEN_WIDTH_BOUND, CONTENTS_WIDTH_BOUND } from '../constants';

import Mover from "../components/mover"
import "./layout.css"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
@media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    flex-direction: column;
  }
`
const NavSlide = styled.div`
  width: 30px;
  height: 100vh;
  position: absolute;
  right: 0;
  background: red;
  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    height: 30px;
    width: 100%;
    bottom: 0;
  }
`
const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffeb3b5e;
  width: 300px;
  height: 100vh;
  font-family: 'Permanent Marker', cursive;
  & > div {
    :nth-of-type(2) {
      font-family: 'Rock Salt', cursive;
    }
  }
  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    margin: 0 auto;
    height: 250px;
    width: 100%;
  }
`
const Contents = styled.div`
  width: ${CONTENTS_WIDTH_BOUND};
  margin: 0 auto;
  font-family: 'Noto Sans KR', sans-serif;
  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    width: auto;
  }
`

const NavH1 = styled.h1`
  margin: 0;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > a {
    font-size: 24px;
    color: white;
    text-decoration: none;
    font-family: 'Life Savers', cursive;

  }
 `
const Nav = styled.header`
  background: #ff6439;
  width: 0px;
  height: 100vh;
  transition: 0.5s;
  & > ${NavH1} {
    display: none;
    :first-of-type {
      margin-top: 30px;
    }
  }
  & > ${NavH1} + ${NavH1}{
    margin-top: 1px;
  }

  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    display: flex;
    flex-direction: row;
    margin-right: auto;
    height: 30px;
    width: 100vw;
    & > ${NavH1} {
      display: flex;
      margin-left: auto;
      :first-of-type {
        margin-top: 0px;
      }
      :last-of-type {
        margin-right: 30px;
      }

      height: 30px;
      
      & > a {
        font-size: 16px;
      }
    }
    & > ${NavH1} + ${NavH1}{
      margin-top: 0px;
      margin-left: 18px;
    }
  }
`
const Layout = ({ children }) => {
  const navRef = useRef(null);
  const navSliderRef = useRef(null);
  const onResize = () => {
    if (navSliderRef.current.offsetWidth > navSliderRef.current.offsetHeight) {
      navRef.current.style.width = '100vw';
      navRef.current.style.height = '0px';
    } else {
      navRef.current.style.width = '0px';
      navRef.current.style.height = '100vh';
    }
    [...navRef.current.children]
      .map(item => !!item ? item.style.display = 'none' : '');
  }
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  })

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const showNav = () => {
    if (navSliderRef.current.offsetWidth < navSliderRef.current.offsetHeight) {
      navRef.current.style.width = '40px';
      navRef.current.style.height = '100vh';
    } else {
      navRef.current.style.width = '100vw';
      navRef.current.style.height = '30px';
    }

    [...navRef.current.children]
      .map(item => !!item ? item.style.display = 'flex' : '');
  };
  const hideNav = () => {
    if (navSliderRef.current.offsetWidth < navSliderRef.current.offsetHeight) {
      navRef.current.style.width = '0px';
      navRef.current.style.height = '100vh';
    } else {
      navRef.current.style.width = '100vw';
      navRef.current.style.height = '0px';
    }

    [...navRef.current.children]
      .map(item => !!item ? item.style.display = 'none' : '');
  };
  return (
    <Wrapper>
      <Title>
        <Mover />
        <div onClick={() => navigate("/")} >Soobin Bak</div>
        <div>Frontend Developer</div>
        <NavSlide
          ref={navSliderRef}
          onClick={showNav}
          onMouseOver={showNav}
          onFocus={showNav}
          onMouseOut={hideNav}
          onBlur={hideNav} />
      </Title>
      <Nav ref={navRef}
        onMouseOver={showNav}
        onFocus={showNav}
        onMouseOut={hideNav}
        onBlur={hideNav}>
        <NavH1> <Link to="/">h</Link></NavH1>
        <NavH1> <Link to="/blog">b</Link></NavH1>
      </Nav>
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
