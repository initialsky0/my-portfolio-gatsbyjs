import styled from "styled-components";
import { positionAbsOrigin } from "../styled-utils";

export const HeaderStyled = styled.header`
   position: relative;
   margin-bottom: 1.45rem;

   &::before{
      content: '';
      ${positionAbsOrigin}
      width: 100%;
      height: 100%;
      background-color: var(--primary-color);
      opacity: .7;
      z-index: -1;
   }
`;

export const HeaderContainer = styled.div`
   margin: 0 auto;
   max-width: 960px;
   padding: 1.45rem 1.0875rem;
   display: flex;
   justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
   margin: 0;
   user-select: none;
   transition: opacity .5s;
   ${({navState}) => navState 
      ? `opacity: 0;
         z-index: -1;` 
      : `opacity: 1;`
   }
   
   a {
      color: var(--white-cloud);
      text-decoration: none;
   }

   
`;

export const HeaderUtilities = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   & > div:not(:last-child) {
      margin-right: 1.5rem;
   }
`;