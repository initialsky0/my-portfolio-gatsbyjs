import React, { useContext } from "react";
import { NavbarContainer, 
         NavbarLink, 
         NavbarOverlay } from "../styles/navbar-styled";
import { HeaderContext } from "../context/header-provider";
import MenuBtn from "./menuBtn";

const navContent = [
   { route: '/', navTitle: 'Home' },
   { route: '/page-2', navTitle: 'About Me' },
   { route: '/', navTitle: 'My Works' },
   { route: '/', navTitle: 'Contact' }
];

const Navbar = ({ headerHeight }) => {
   const { navState, toggleNavState } = useContext(HeaderContext);
   return (
      <NavbarOverlay headerHeight={headerHeight} >
         <NavbarContainer contents={navContent} >
            {navContent.map((content, index1) => (
               <NavbarLink key={`nav${index1}`} to={content.route} >
                  {[...content.navTitle].map((letter, index2) => (
                     <span key={`${index1}${index2}`} >{letter === ` ` ? `\u00A0` : letter }</span>
                  ))}
               </NavbarLink>
               )
            )}
            <MenuBtn onClick={toggleNavState} navState={navState} />
         </NavbarContainer>
      </NavbarOverlay>
   );
};

export default Navbar;