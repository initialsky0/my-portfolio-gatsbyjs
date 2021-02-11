import React from "react";
import { NavbarContainer, NavbarLink } from "../styles/navbar-styled";

const navContent = [
   { route: '/', navTitle: 'Home' },
   { route: '/page-2', navTitle: 'About Me' },
   { route: '/', navTitle: 'My Works' },
   { route: '/', navTitle: 'Contact' }
];

const Navbar = ({ headerHeight }) => {
   return (
      <NavbarContainer headerHeight={headerHeight} contents={navContent} >
         {navContent.map((content, index1) => (
            <NavbarLink key={`nav${index1}`} to={content.route}>
               {[...content.navTitle].map((letter, index2) => (
                  <span key={`${index1}${index2}`} >{letter === ` ` ? `\u00A0` : letter }</span>
               ))}
            </NavbarLink>
            )
         )}
      </NavbarContainer>
   );
};

export default Navbar;