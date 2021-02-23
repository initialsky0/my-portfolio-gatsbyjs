import React, { createContext, useState } from 'react';
import { getBackground } from "./provider-utils";

export const GlobalContext = createContext({
   navState: false,
   backgroundSelected: 0,
   currentSection: 0,
   toggleNavState: () => {},
   selectBackground: () => {},
   updateCurrentSection: () => {} 
});

const GlobalProvider = ({ children }) => {
   // Provoder states
   const [ navState, setNavState ] = useState(false);
   const [ backgroundSelected, setbackgroundSelected ] = useState(0);
   const [ currentSection, setCurrentSection ] = useState(0);

   // Use effect if any

   // Provider actions
   const toggleNavState = () => setNavState(!navState);
   const selectBackground = choice => setbackgroundSelected(getBackground(choice));
   // Section identifier is based on navContents index from siteMetadata
   const updateCurrentSection = identifier => setCurrentSection(identifier);

   return (
      <GlobalContext.Provider value={{
         navState,
         backgroundSelected,
         currentSection,
         toggleNavState,
         selectBackground,
         updateCurrentSection
      }}>
         {children}
      </GlobalContext.Provider>
   );
};

export default GlobalProvider;
