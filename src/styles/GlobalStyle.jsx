import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
      --primary-color: #87ceeb;
      --secondary-color: #fd5e53;
      --tertiary-color: #070b34;
      --white-cloud: #f6f6f6;
   }

   html, body, #___gatsby {
      height: 100%;
   }

   #___gatsby {
      & > div {
         height: 100%;
      }
   }
`;

export default GlobalStyle;