import React, { useContext } from "react";
import Img from "gatsby-image/withIEPolyfill";
import { GlobalContext } from "../context/global-provider";
import { CardContainer, 
         CardTitle, 
         CardBtnContainer } from "../styles/components/card-styled";
import { StyledLinkIcon,
         StyledGithubIcon,
         StyledALink } from "../styles/components/svg-styled";

const Card = ({ fluid, title, linkPaths }) => {
   const { backgroundSelected } = useContext(GlobalContext);
   return (
      <CardContainer bgSelected={backgroundSelected}>
         <CardTitle>{title}</CardTitle>
         <Img objectFit={`contain`} fluid={fluid} />
         <CardBtnContainer>
            <StyledALink href={linkPaths.github} bgSelected={backgroundSelected} iconSize={40}>
               <StyledGithubIcon />
            </StyledALink>
            <StyledALink href={linkPaths.link} bgSelected={backgroundSelected} iconSize={40}>
               <StyledLinkIcon />
            </StyledALink>
         </CardBtnContainer>
      </CardContainer>
   );
};

export default Card;