import styled from "styled-components";
import { containerOverlayLight } from "../styled-utils";
import { CardContainer } from "./card-styled";
import { flipAnimation } from "../animation-styled";
import { generateTextAnimation } from "../styled-utils";

export const WorksDispContainer = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   width: 100%;
   padding: 1rem;
   ${containerOverlayLight}
   ${flipAnimation}

   ${CardContainer} {
      margin: 1rem;
   }
   
   ${({ numOfCards }) => 
      generateTextAnimation(
         numOfCards,
         CardContainer,
         `flip`,
         .5,
         .1,
         `ease-in-out backwards`,
   )}
`;