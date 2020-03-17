import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const H1 = styled.h1`
  margin: 0;
  height: 35px;
  /* background: red; */
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
const StyledHeader = styled.header`
 background: #ff6439;
 border-bottom: 1px solid gray;
 width: ${props => props.show ? '40px' : '0px'};
 transition: 0.5s;
 & > ${H1} {
   display: ${props => props.show ? 'flex' : 'none'};
   :first-of-type {
     margin-top: 30px;
   }
 }
 & > ${H1} + ${H1}{
   margin-top: 1px;
 }
`
const Header = ({ show, onMouseOver, onMouseOut }) => (
  <StyledHeader show={show} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
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
