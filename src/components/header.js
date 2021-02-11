import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Navbar from './navbar';
import { HeaderStyled,
         HeaderContainer,
         HeaderTitle } from '../styles/header-styled';

const Header = ({ siteTitle }) => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(null);
  useEffect(() => {
    if(headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
  }, [headerRef]);

  return (
    <HeaderStyled ref={headerRef}>
      <Navbar headerHeight={headerHeight} />
      <HeaderContainer>
        <HeaderTitle>
          <Link to="/" >
            {siteTitle}
          </Link>
        </HeaderTitle>
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
