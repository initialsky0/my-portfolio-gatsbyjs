import styled from "styled-components";
import { fadeInTopAnimation } from "../animation-styled";
import { containerOverlayLight, containerOverlayDark, generateTextAnimation } from "../styled-utils";

export const ContactDispContainer = styled.div`
   padding: 2rem;
   transition: all .5s;
   transition-property: background-color, box-shadow;
   ${({ bgSelected }) => bgSelected === 2 ? containerOverlayDark : containerOverlayLight}
`;

export const ContactItemContainer = styled.div`
   display: flex;
   flex-flow: column;
   align-items: center;

   h4 {
      font-style: normal;
      text-transform: uppercase;
   }
`;

export const ContactItemLists = styled.address`
   display: flex;
   justify-content: space-evenly;
   ${fadeInTopAnimation}

   ${({ numOfContact }) => 
      generateTextAnimation(
         numOfContact,
         ContactItemContainer,
         `fade-in-from-top`,
         .5,
         .1,
         `backwards`
   )}
`;