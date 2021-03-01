import React from "react";
import WorksDisplay from "../components/worksDisplay";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SectionTitle } from "../styles/styled-utils";

const SecondPage = () => (
  <Layout>
    <SEO title="Works" />
    <SectionTitle>My Works</SectionTitle>
    <WorksDisplay />
  </Layout>
)

export default SecondPage
