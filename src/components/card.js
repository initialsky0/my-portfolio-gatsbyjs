import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import { CardContainer, 
         CardTitle, 
         CardBtnContainer } from "../styles/components/card-styled";
import { StyledLinkIcon,
         StyledGithubIcon,
         StyledALink } from "../styles/components/svg-styled";

const Card = ({ fluid, title, linkPaths }) => {
   return (
      <CardContainer>
         <CardTitle>{title}</CardTitle>
         <Img objectFit={`contain`} fluid={fluid} />
         <CardBtnContainer>
            <StyledALink href={linkPaths.github} bgSelected={0} iconSize={40}>
               <StyledGithubIcon />
            </StyledALink>
            <StyledALink href={linkPaths.link} bgSelected={0} iconSize={40}>
               <StyledLinkIcon />
            </StyledALink>
         </CardBtnContainer>
      </CardContainer>
   );
};

export default Card;