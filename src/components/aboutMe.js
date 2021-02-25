import React from "react";
import AboutMeImg from "./aboutMe-Img";
import { SectionTitle } from "../styles/styled-utils";
import { AboutMeContainer,
         AboutMeContent,
         AboutMeTextContainer } from "../styles/components/aboutMe-styled";

const AboutMeContents = () => {
   return (
      <AboutMeContainer>
         <SectionTitle>About Me</SectionTitle>
         <AboutMeContent>
            <AboutMeTextContainer>
               Content
            </AboutMeTextContainer>
            <AboutMeImg />
         </AboutMeContent>
      </AboutMeContainer>
   );
}

export default AboutMeContents;