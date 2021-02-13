import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState, useContext } from "react";
import Navbar from './navbar';
import MenuBtn from './menuBtn';
import { HeaderContext } from "../context/header-provider";
import { HeaderStyled,
         HeaderContainer,
         HeaderTitle } from '../styles/header-styled';

const Header = ({ siteTitle }) => {
  // Get nav state
  const { navState } = useContext(HeaderContext);
  // Obtain header height
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(null);
  useEffect(() => {
    if(headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
  }, [headerRef]);

  return (
    <HeaderStyled ref={headerRef} navState={navState} >
      <Navbar headerHeight={headerHeight} />
      <HeaderContainer >
        <HeaderTitle navState={navState}>
          <Link to="/" >
            {siteTitle}
          </Link>
        </HeaderTitle>
        {navState ? null : <MenuBtn />}
      </HeaderContainer>
    </HeaderStyled>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
