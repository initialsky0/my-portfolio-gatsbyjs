import styled from "styled-components";
import { containerOverlayLight } from "../styled-utils";
import { CardContainer } from "./card-styled";

export const WorksDispContainer = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   width: 100%;
   padding: 1rem;
   border-radius: 10px;
   ${containerOverlayLight}

   ${CardContainer} {
      margin: .5rem;
   }
`;