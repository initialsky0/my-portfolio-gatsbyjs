import React, { useContext } from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { GlobalContext } from "../context/global-provider";
import { HomeContainer, 
         HomeTextContainer, 
         HomeLinkContainer,
         AboutMeContainer } from "../styles/pages/index-title-styled";
import { CustomBtn } from "../components/customBtn";

const placeHomeContents = (navContents, updateCurrentSection) => (
  <HomeContainer>
    <HomeTextContainer>Welcome <br/> to <br/> My Portfolio</HomeTextContainer>
    <HomeLinkContainer>
      {navContents.map((content, index) => (
        index 
        ? (
            <CustomBtn key={`HomeBtn${index}`} path={content.route} onClick={() => updateCurrentSection(index)}>
              {content.navTitle}
            </CustomBtn> 
          )
        : null
      ))}
    </HomeLinkContainer>
  </HomeContainer>
);

const placeAboutMeContents = () => (
  <AboutMeContainer>Hello</AboutMeContainer>
);

const IndexPage = () => {
  const { navContents } = useSiteMetadata();
  const { currentSection, updateCurrentSection } = useContext(GlobalContext);

  return (
    <Layout>
      <SEO title={navContents[0].navTitle} />
      { currentSection === 1 
        ? placeAboutMeContents() 
        : placeHomeContents(navContents, updateCurrentSection)
      }
    </Layout>
  )
};

export default IndexPage;
