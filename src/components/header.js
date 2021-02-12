import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Navbar from './navbar';
import HeaderProvider from "../context/header-provider";
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
    <HeaderProvider>
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
    </HeaderProvider>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
