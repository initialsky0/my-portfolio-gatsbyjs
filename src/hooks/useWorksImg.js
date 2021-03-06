import { useStaticQuery, graphql } from "gatsby";

const useWorksImg = () => {
   const workImgs = useStaticQuery(graphql`
      query WorkFluidImgs {
         imgs: allFile(filter: {relativeDirectory: {eq: "works-imgs"}}) {
            edges {
               node {
                  childImageSharp {
                     fluid(maxWidth: 900) {
                        ...GatsbyImageSharpFluid
                     }
                  }
                  name
               }
            }
         }
      }
   `);

   const workImgsObj = {};
   workImgs.imgs.edges.forEach(({ node: { name, childImageSharp }}) => (
      workImgsObj[name] = childImageSharp.fluid
   ));
   
   return workImgsObj;
};

export default useWorksImg;