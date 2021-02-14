/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import HeaderProvider from "../context/header-provider";
import Header from "./header";
import "../styles/layout.css";

// Sliding Background
import { BackgroundWrapper, SlidingBGContainer } from "../styles/slidingBackground-styled";
import backgroundImage from "../images/blue-sky-texture-seamless.jpg";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <BackgroundWrapper>
        <SlidingBGContainer imgUrl={backgroundImage} />
        <HeaderProvider>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        </HeaderProvider>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
            &nbsp;| Background photo from:&nbsp;
            <a href="http://www.textures4photoshop.com/">textures4photoshop</a>
          </footer>
        </div>
      </BackgroundWrapper>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
