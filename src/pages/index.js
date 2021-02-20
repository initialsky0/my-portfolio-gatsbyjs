import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { HomeContainer, HomeTextContenter, HomeLinkContainer } from "../styles/pages/index-title-styled";
import { CustomBtn } from "../components/customBtn";

const IndexPage = () => {
  const { navContents } = useSiteMetadata();
  return (
    <Layout>
      <SEO title={navContents[0].navTitle} />
      <HomeContainer>
        <HomeTextContenter>Welcome <br/> to <br/> My Portfolio</HomeTextContenter>
        <HomeLinkContainer>
          {navContents.map((content, index) => (
            index 
            ? (
                <CustomBtn key={`HomeBtn${index}`} path={content.route}>
                  {content.navTitle}
                </CustomBtn> 
              )
            : null
          ))}
        </HomeLinkContainer>
      </HomeContainer>
    </Layout>
  )
};

export default IndexPage;
