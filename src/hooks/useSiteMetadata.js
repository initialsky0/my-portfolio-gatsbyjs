import { useStaticQuery, graphql } from "gatsby";
// useStaticQuery is a hook to retrieve data at build time

export const useSiteMetadata = () => {
   const { site } = useStaticQuery(graphql`
      query SiteMetaData {
         site {
            siteMetadata {
               title
               author
               description
               navContents {
                  navTitle
                  route
               }
            }
         }
      }
   `);
   return site.siteMetadata;
};