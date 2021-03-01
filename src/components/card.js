import React from "react";
import Img from "gatsby-image";
import { CardContainer, 
         CardTitle, 
         CardBtnContainer,
         StyledALink } from "../styles/components/card-styled";
import { StyledLinkIcon,
         StyledGithubIcon } from "../styles/components/svg-styled";

const Card = ({ fluid, linkPaths }) => {
   return (
      <CardContainer>
         <CardTitle>Title</CardTitle>
         <Img fluid={fluid} />
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