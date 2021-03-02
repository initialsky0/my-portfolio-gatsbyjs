import styled, { css } from "styled-components";
import ATag from "../../components/aTag";
import { StyledGithubIcon, StyledLinkIcon } from "./svg-styled";

const cardBackgroundType1 = css`
   background-color: var(--primary-color);
   filter: brightness(1.1);
`;

// const cardBackgroundType2 = css`
//    background-color: var(--secondary-color);
//    filter: brightness(1.3);
// `;

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 200px;
   height: 300px;
   border-radius: 8px;
   box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
   backface-visibility: hidden;
   transition: all .35s;
   transition-property: transform, box-shadow;
   ${cardBackgroundType1}

   &:hover {
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
   }

   img {
      padding: 0 .5rem;
   }
`;

export const CardTitle = styled.h4`
   margin: 1rem .5rem .5rem;
   text-align: center;
`;

export const CardBtnContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   height: 20%;
`;

export const StyledALink = styled(ATag)`
   width: 40px;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;

   svg {
      height: 90%;
      transition: all .2s;
      transition-property: height, color;
   }

   &:hover {
      svg {
         height: 100%;
      }

      ${StyledGithubIcon} {
         color: #bd2c00
      }

      ${StyledLinkIcon} {
         color: #0b0080
      }
   }
`;