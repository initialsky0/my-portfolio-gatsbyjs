import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useRef, useContext } from "react";
import Navbar from './navbar';
import MenuBtn from './menuBtn';
import { GlobalContext } from "../context/global-provider";
import { HeaderStyled,
         HeaderContainer,
         HeaderTitle,
         HeaderUtilities } from '../styles/components/header-styled';
import BackgroundSelection from "./backgroundSelection";

const Header = ({ siteTitle }) => {
  // Get nav state
  const { navState, updateCurrentSection } = useContext(GlobalContext);
  // Set headerRef
  const headerRef = useRef(null);

  return (
    <HeaderStyled ref={headerRef} navState={navState} >
      <Navbar headerRef={headerRef} />
      <HeaderContainer >
        <HeaderTitle navState={navState}>
          <Link to="/" onClick={() => updateCurrentSection(0)} >
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
