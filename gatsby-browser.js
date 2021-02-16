/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import GlobalStyle from "./src/styles/GlobalStyle";
import GlobalProvider from "./src/context/global-provider";

export const wrapRootElement = ({ element }) => (
   <>
      <GlobalStyle />
      <GlobalProvider>
         {element}
      </GlobalProvider>
   </>
);