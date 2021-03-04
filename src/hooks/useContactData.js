import {useStaticQuery, graphql} from "gatsby";
const useContactData = () => {
   const contactData = useStaticQuery(graphql`
      query ContactData {
         allMarkdownRemark(filter: {frontmatter: {section: {eq: "contact"}}}) {
            edges {
               node {
                  frontmatter {
                     contents {
                        github
                        linkedin
                        mail
                        phone
                     }
                  }
               }
            }
         }
      }
   `);

   return contactData.allMarkdownRemark.edges[0].node.frontmatter;
};

export default useContactData;