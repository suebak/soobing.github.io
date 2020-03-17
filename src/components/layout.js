/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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
  width: 3px;
  height: 120px;
  position: absolute;
  top: 30px;
  right: 0;
  background: #ff6439;
  @media screen and (max-width: ${SCREEN_WIDTH_BOUND}){
    height: 3px;
    width: 120px;
    top: 250px;
    right: 30px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff6439;
  & > a {
    font-size: 24px;
    color: white;
    text-decoration: none;
    font-family: 'Life Savers', cursive;

  }
 `
const Nav = styled.header`
  margin-top: 30px;
  /* background: #ff6439; */
  width: 0px;
  height: 120px;
  transition: 0.5s;
  & > ${NavH1} {
    display: none;
    height: 55px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  & > ${NavH1} + ${NavH1}{
    margin-top: 10px;
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
      width: 55px;
      border-radius: 0px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

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
      navRef.current.style.width = '120px';
      navRef.current.style.height = '0px';
    } else {
      navRef.current.style.width = '0px';
      navRef.current.style.height = '120px';
    }
    [...navRef.current.children]
      .map(item => !!item ? item.style.display = 'none' : '');
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onResize);
      }
    }
  }, [])

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
      navRef.current.style.height = '120px';
    } else {
      navRef.current.style.width = '120px';
      navRef.current.style.height = '30px';
    }

    [...navRef.current.children]
      .map(item => !!item ? item.style.display = 'flex' : '');
  };
  const hideNav = () => {
    if (navSliderRef.current.offsetWidth < navSliderRef.current.offsetHeight) {
      navRef.current.style.width = '0px';
      navRef.current.style.height = '120px';
    } else {
      navRef.current.style.width = '120px';
      navRef.current.style.height = '0px';
    }

    [...navRef.current.children]
      .map(item => !!item ? item.style.display = 'none' : '');
  };
  return (
    <Wrapper>
      <Title>
        <Mover />
        <div>Soobin Bak</div>
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
