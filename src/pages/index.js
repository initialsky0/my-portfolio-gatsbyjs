import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeContents from "../components/home";
import AboutMeContents from "../components/aboutMe";
import { GlobalContext } from "../context/global-provider";


const IndexPage = () => {
  const { currentSection } = useContext(GlobalContext);

  return (
    <Layout>
      <SEO title={currentSection === 1 ? `About Me` : `Home`} />
      { currentSection === 1 ? <AboutMeContents /> : <HomeContents /> }
    </Layout>
  )
};

export default IndexPage;
