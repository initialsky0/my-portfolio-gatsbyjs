import React, {useContext} from "react";
import { HeaderContext } from "../context/header-provider";
import { MenuBtnContainer, MenuBtnStyles } from "../styles/menuBtn-styled";

const MenuBtn = () => {
   const { navState, toggleNavState } = useContext(HeaderContext);
   return (
      <MenuBtnContainer onClick={toggleNavState} >
         <MenuBtnStyles navState={navState} />
      </MenuBtnContainer>
   );
};

export default MenuBtn;