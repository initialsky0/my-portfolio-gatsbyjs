import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { HomeContainer, HomeTextContenter, HomeLinkContainer } from "../styles/pages/index-title-styled";
import { CustomBtn } from "../components/customBtn";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContainer>
      <HomeTextContenter>Welcome <br/> to <br/> My Portfolio</HomeTextContenter>
      <HomeLinkContainer>
        <CustomBtn href={`https://www.google.com/`} target={`_blank`} rel={`noopener noreferrer`}>
          Google
        </CustomBtn>
        <CustomBtn href={`https://www.github.com/initialsky0`} target={`_blank`} rel={`noopener noreferrer`}>
          Github
        </CustomBtn>
        <CustomBtn href={`https://www.w3schools.com`} target={`_blank`} rel={`noopener noreferrer`}>
          w3schools
        </CustomBtn>
      </HomeLinkContainer>
    </HomeContainer>
  </Layout>
);

export default IndexPage;
