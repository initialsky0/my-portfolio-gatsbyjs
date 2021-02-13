import React, { useContext } from "react";
import { NavbarContainer, 
         NavbarLink, 
         NavbarOverlay } from "../styles/navbar-styled";
import { HeaderContext } from "../context/header-provider";
import MenuBtn from "./menuBtn";

const navContent = [
   { route: `/`, navTitle: `Home` },
   { route: `/`, navTitle: `About Me` },
   { route: `/page-2`, navTitle: `My Works` },
   { route: `/`, navTitle: `Contact` }
];

const Navbar = ({ headerHeight }) => {
   const { navState } = useContext(HeaderContext);
   return (
      <NavbarOverlay headerHeight={headerHeight} navState={navState} >
         <NavbarContainer contents={navContent} navState={navState} >
            {navContent.map((content, index1) => (
               <NavbarLink key={`nav${index1}`} to={content.route} >
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