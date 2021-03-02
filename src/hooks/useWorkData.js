import { useStaticQuery, graphql } from "gatsby";

const useWorkData = () => {
   const workData = useStaticQuery(graphql`
      query WorkMarkdowns {
         allMarkdownRemark(filter: {frontmatter: {section: {eq: "works"}}}, sort: {fields: frontmatter___order}) {
            nodes {
               frontmatter {
                  imgName
                  title
                  links {
                     github
                     link
                  }
               }
            }
         }
      }
   
   `);

   return workData.allMarkdownRemark.nodes;
};

export default useWorkData;