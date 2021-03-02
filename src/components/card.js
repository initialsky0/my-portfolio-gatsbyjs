import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import { CardContainer, 
         CardTitle, 
         CardBtnContainer,
         StyledALink } from "../styles/components/card-styled";
import { StyledLinkIcon,
         StyledGithubIcon } from "../styles/components/svg-styled";

const Card = ({ fluid, title, linkPaths }) => {
   return (
      <CardContainer>
         <CardTitle>{title}</CardTitle>
         <Img objectFit={`contain`} fluid={fluid} />
         <CardBtnContainer>
            <StyledALink href={linkPaths.github}>
               <StyledGithubIcon />
            </StyledALink>
            <StyledALink href={linkPaths.link}>
               <StyledLinkIcon />
            </StyledALink>
         </CardBtnContainer>
      </CardContainer>
   );
};

export default Card;