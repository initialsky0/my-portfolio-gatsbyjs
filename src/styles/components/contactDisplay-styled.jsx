import styled from "styled-components";
import { fadeInTopAnimation } from "../animation-styled";
import { containerOverlayLight, generateTextAnimation } from "../styled-utils";

export const ContactDispContainer = styled.div`
   ${containerOverlayLight}
   padding: 2rem;
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