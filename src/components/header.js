import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"


const H1 = styled.h1`
  margin: 0;
  height: 50px;
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > a {
    font-size: 30px;
    color: white;
    text-decoration: none;
    font-family: 'Satisfy', cursive;
  }
 `
const StyledHeader = styled.header`
 background: #ff6439;
 border-bottom: 1px solid gray;
 width: 40px;
 & > ${H1} {
   :first-of-type {
     margin-top: 30px;
   }
 }
 & > ${H1} + ${H1}{
   margin-top: 3px;
 }
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <H1> <Link to="/">h</Link></H1>
    <H1> <Link to="/blog">b</Link></H1>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
