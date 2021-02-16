import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState, useContext } from "react";
import Navbar from './navbar';
import MenuBtn from './menuBtn';
import { GlobalContext } from "../context/global-provider";
import { HeaderStyled,
         HeaderContainer,
         HeaderTitle,
         HeaderUtilities } from '../styles/header-styled';
import BackgroundSelection from "./backgroundSelection";

const Header = ({ siteTitle }) => {
  // Get nav state
  const { navState } = useContext(GlobalContext);
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
        {navState 
          ? null 
          : <HeaderUtilities>
              <BackgroundSelection />
              <MenuBtn />
            </HeaderUtilities>
        }
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
