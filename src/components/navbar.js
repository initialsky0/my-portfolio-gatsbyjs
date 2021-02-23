import React, { useContext } from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { NavbarContainer, 
         NavbarLink, 
         NavbarOverlay } from "../styles/components/navbar-styled";
import { GlobalContext } from "../context/global-provider";
import MenuBtn from "./menuBtn";

const Navbar = ({ headerHeight }) => {
   // Query for nav data with useSiteMetadata hook
   const { navContents } = useSiteMetadata();
   const { navState, updateCurrentSection } = useContext(GlobalContext);
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