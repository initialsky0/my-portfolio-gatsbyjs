import React, { useContext } from "react";
import { GlobalContext } from "../context/global-provider";
import { CustomBtnContainer, CustomBtnLink, CustomBtnHyperLink } from "../styles/components/cutomBtn-styled";

const CustomBtn = ({ path, aTag, onClick, children }) => {
   const { backgroundSelected } = useContext(GlobalContext);
   const dispLink = aTag 
      ? (
         <CustomBtnHyperLink 
            href={path}
            onClick={onClick}
         >
            {children}
         </CustomBtnHyperLink>
         )
      : (
         <CustomBtnLink to={path} onClick={onClick}>
            {children}
         </CustomBtnLink>
      )
   return (
      <CustomBtnContainer bgSelected={backgroundSelected}>
         {dispLink}
      </CustomBtnContainer>
   );
};

export default CustomBtn;
