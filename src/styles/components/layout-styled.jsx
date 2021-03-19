import styled from "styled-components";
import {ATagContainer, aTagStyles} from "./aTag-styled";

export const ContentContainer = styled.div`
   margin: 0 auto;
   max-width: var(--page-max-width);
   padding: 0 1.0875rem 1.45rem;
   flex-grow: 1;
   display: flex;
   justify-content: space-between;
   flex-direction: column;

   main {
      flex: 1;
   }
`;

export const FooterContainer = styled.footer`
   margin-top: 2rem;

   ${ATagContainer} {
      ${aTagStyles}
   }

   @media only screen and (max-width: 960px) {
      font-size: .9rem;
   }
`;