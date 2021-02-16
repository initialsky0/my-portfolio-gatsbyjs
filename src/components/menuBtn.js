import React, {useContext} from "react";
import { GlobalContext } from "../context/global-provider";
import { MenuBtnContainer, MenuBtnStyles } from "../styles/components/menuBtn-styled";

const MenuBtn = () => {
   const { navState, toggleNavState } = useContext(GlobalContext);
   return (
      <MenuBtnContainer onClick={toggleNavState} >
         <MenuBtnStyles navState={navState} />
      </MenuBtnContainer>
   );
};

export default MenuBtn;