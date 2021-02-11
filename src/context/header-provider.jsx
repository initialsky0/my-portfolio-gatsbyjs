import React, { createContext, useState } from 'react';

export const HeaderContext = createContext({
   navState: true,
   toggleNavState: () => {}
});

const HeaderProvider = ({ children }) => {
   // Provoder states
   const [ navState, setNavState ] = useState(true);

   // Use effect if any

   // Provider actions
   const toggleNavState = () => setNavState(!navState);

   return (
      <HeaderContext.Provider value={{
         navState,
         toggleNavState
      }}>
         {children}
      </HeaderContext.Provider>
   );
};

export default HeaderProvider;
