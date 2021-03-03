import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactDisplay from "../components/contactDisplay";
import { SectionTitle } from "../styles/styled-utils";

const ContactPage = () => (
   <Layout>
      <SEO title="Contact" />
      <SectionTitle>Contact</SectionTitle>
      <ContactDisplay />
  </Layout>
);

export default ContactPage;