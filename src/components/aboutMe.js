import React from "react";
import AboutMeImg from "./aboutMe-Img";
import { SectionTitle } from "../styles/styled-utils";
import { parseStringToHtml } from "../utils/utils";
import { AboutMeContainer,
         AboutMeContent,
         AboutMeTextContainer } from "../styles/components/aboutMe-styled";

const AboutMeContents = ({ node }) => {
   return (
      <AboutMeContainer>
         <SectionTitle>{node.frontmatter.title}</SectionTitle>
         <AboutMeContent>
            <AboutMeTextContainer>
               {parseStringToHtml(node.html)}
            </AboutMeTextContainer>
            <AboutMeImg />
         </AboutMeContent>
      </AboutMeContainer>
   );
};

export default AboutMeContents;
