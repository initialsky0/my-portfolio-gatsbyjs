import styled from "styled-components";

export const ContentContainer = styled.div`
   margin: 0 auto;
   max-width: 960px;
   padding: 0 1.0875rem 1.45rem;
   flex-grow: 1;
   display: flex;
   justify-content: space-between;
   flex-direction: column;

   & > main {
      flex-basis: 100%;
   }
`;

export const FooterContainer = styled.footer`
   margin-top: 2rem;
`;