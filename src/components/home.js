import React, { useContext } from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { GlobalContext } from "../context/global-provider";
import { HomeContainer, 
         HomeTextContainer, 
         HomeLinkContainer } from "../styles/components/home-styled";
import CustomBtn from "./customBtn";

const HomeContents = () => {
   const { navContents } = useSiteMetadata();
   const { updateCurrentSection } = useContext(GlobalContext)
   return (
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
};

 export default HomeContents;