import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeContents from "../components/home";
import AboutMeContents from "../components/aboutMe";
import { GlobalContext } from "../context/global-provider";


const IndexPage = ({ data: { allMarkdownRemark: { edges }}}) => {
  const { currentSection } = useContext(GlobalContext);
  const { node } = edges[0];
  return (
    <Layout>
      <SEO title={currentSection === 1 ? `About Me` : `Home`} />
      { currentSection === 1 ? <AboutMeContents node={node} /> : <HomeContents /> }
    </Layout>
  )
};

export const query = graphql`
   query MarkdownQuery {
      allMarkdownRemark(filter: {frontmatter: {title: {regex: "/^About Me$/g"}}}) {
         edges {
            node {
               frontmatter {
                  title
               }
               html
            }
         }
      }
   }
`;

export default IndexPage;
