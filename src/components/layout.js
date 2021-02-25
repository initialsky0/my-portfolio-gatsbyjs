/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Header from "./header";
import ATag from "./aTag";
import { GlobalContext } from "../context/global-provider";
import "../styles/layout.css";

// Styled components
import { ContentContainer, 
         FooterContainer } from "../styles/components/layout-styled";

// Sliding Background
import { BackgroundWrapper, SlidingBGContainer } from "../styles/components/slidingBackground-styled";
import backgroundImage from "../images/blue-sky-texture-seamless.jpg";

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  const { backgroundSelected, navState, toggleNavState } = useContext(GlobalContext);
  
  // Make sure nav menu is hidden when page load
  const callToggleNav = useCallback(() => {
    if(navState) toggleNavState()
  }, [navState, toggleNavState])

  useEffect(callToggleNav, []);

  return (
    <>
      <BackgroundWrapper>
        <SlidingBGContainer imgUrl={backgroundImage} backgroundNum={backgroundSelected} />
        <Header siteTitle={title || `Title`} />
        <ContentContainer>
          <main>{children}</main>
          <FooterContainer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <ATag href="https://www.gatsbyjs.com">
              Gatsby
            </ATag>
            &nbsp;| Background photo from:&nbsp;
            <ATag href="http://www.textures4photoshop.com/">
              textures4photoshop
            </ATag>
          </FooterContainer>
        </ContentContainer>
      </BackgroundWrapper>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
