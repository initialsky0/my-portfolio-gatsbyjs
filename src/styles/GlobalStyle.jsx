import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
      --primary-color: #87ceeb;
      --secondary-color: #fd5e53;
      --tertiary-color: #070b34;
      --white-cloud: #f6f6f6;
      --icon-light: #f3f3f3;

      --page-max-width: 960px;
   }

   html, body, #___gatsby {
      height: 100%;
      ${({ bgSelected }) => bgSelected === 2 
         ? `color: hsla(0, 0%, 100%, .9)` 
         : `color: hsla(0, 0%, 0%, 0.8)`
      }
   }

   #___gatsby {
      & > div {
         height: 100%;
      }
   }

   @media only screen and (max-width: 960px) {
      html {
         font-size: 1em;
      }
   }

   @media only screen and (max-width: 480px) {
      html {
         font-size: .8em;
      }
   }
`;

export default GlobalStyle;