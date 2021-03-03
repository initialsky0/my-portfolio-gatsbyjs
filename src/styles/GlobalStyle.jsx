import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
      --primary-color: #87ceeb;
      --secondary-color: #fd5e53;
      --tertiary-color: #070b34;
      --white-cloud: #f6f6f6;

      --icon-light: #f3f3f3;

      --link-blue: #0645ad;
      --github-black: #030303;
      --linkedin-cyan: #0e76a8;
      --phone-green: #28cc07;

      --page-max-width: 960px;
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