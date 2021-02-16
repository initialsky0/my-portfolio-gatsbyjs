import React, { createContext, useState } from 'react';
import { getBackground } from "./provider-utils";

export const GlobalContext = createContext({
   navState: false,
   backgroundSelected: 0,
   toggleNavState: () => {},
   selectBackground: () => {}
});

const GlobalProvider = ({ children }) => {
   // Provoder states
   const [ navState, setNavState ] = useState(false);
   const [ backgroundSelected, setbackgroundSelected ] = useState(0)

   // Use effect if any

   // Provider actions
   const toggleNavState = () => setNavState(!navState);
   const selectBackground = choice => setbackgroundSelected(getBackground(choice));

   return (
      <GlobalContext.Provider value={{
         navState,
         backgroundSelected,
         toggleNavState,
         selectBackground
      }}>
         {children}
      </GlobalContext.Provider>
   );
};

export default GlobalProvider;
