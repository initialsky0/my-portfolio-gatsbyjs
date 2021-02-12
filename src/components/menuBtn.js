import React from "react";
import { MenuBtnContainer, MenuBtnStyles } from "../styles/menuBtn-styled";

const MenuBtn = ({ navState, onClick }) => (
      <MenuBtnContainer onClick={onClick}>
         <MenuBtnStyles navState={navState} />
      </MenuBtnContainer>
);

export default MenuBtn;