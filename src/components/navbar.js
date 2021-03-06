import React, { useContext, useLayoutEffect, useState, useCallback } from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { NavbarContainer, 
         NavbarLink, 
         NavbarOverlay } from "../styles/components/navbar-styled";
import { GlobalContext } from "../context/global-provider";
import MenuBtn from "./menuBtn";

const Navbar = ({ headerRef }) => {
   // Query for nav data with useSiteMetadata hook
   const { navContents } = useSiteMetadata();
   const { navState, updateCurrentSection } = useContext(GlobalContext);
   // Set headerHeight State
   const [headerHeight, setHeaderHeight] = useState(null);
   // Get the height of Navbar onload and resize
   const detectHeaderHeight = useCallback(() => {
      if(headerRef?.current?.clientHeight) setHeaderHeight(headerRef.current.clientHeight);
   }, [headerRef, setHeaderHeight]);
   useLayoutEffect(() => {
      if(navState) {
         detectHeaderHeight();
         window.addEventListener('resize', detectHeaderHeight, true);
      } else {
         // Remove eventlistener when navbar is hidden
         window.removeEventListener('resize', detectHeaderHeight, true);
      }
      // Remove eventlistener when unmount
      return () => window.removeEventListener('resize', detectHeaderHeight, true);
    }, [navState, detectHeaderHeight]);
   return (
      <NavbarOverlay headerHeight={headerHeight} navState={navState} >
         <NavbarContainer contents={navContents} navState={navState} >
            {navContents.map((content, index1) => (
               <NavbarLink key={`nav${index1}`} to={content.route} onClick={() => updateCurrentSection(index1)} >
                  {[...content.navTitle].map((letter, index2) => (
                     <span key={`${index1}${index2}`} >{letter === ` ` ? `\u00A0` : letter }</span>
                  ))}
               </NavbarLink>
               )
            )}
            {navState ? <MenuBtn /> : null}
         </NavbarContainer>
      </NavbarOverlay>
   );
};

export default Navbar;