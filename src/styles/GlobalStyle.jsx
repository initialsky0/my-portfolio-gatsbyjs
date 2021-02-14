import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html, body, #___gatsby {
      height: 100%;

      & > div{
         height: 100%;
      }
   }
`;

export default GlobalStyle;