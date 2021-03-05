import React, { useContext } from "react";
import { GlobalContext } from "../context/global-provider";
import AboutMeImg from "./aboutMe-Img";
import { SectionTitle } from "../styles/styled-utils";
import { parseStringToHtml } from "../utils/utils";
import { AboutMeContainer,
         AboutMeContent,
         AboutMeTextContainer } from "../styles/components/aboutMe-styled";

const AboutMeContents = ({ node }) => {
   const { backgroundSelected } = useContext(GlobalContext)
   return (
      <AboutMeContainer>
         <SectionTitle>{node.frontmatter.title}</SectionTitle>
         <AboutMeContent bgSelected={backgroundSelected}>
            <AboutMeTextContainer>
               {parseStringToHtml(node.html)}
            </AboutMeTextContainer>
            <AboutMeImg />
         </AboutMeContent>
      </AboutMeContainer>
   )
};

export default AboutMeContents;
