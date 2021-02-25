import React from "react";
import { CustomBtnContainer, CustomBtnLink, CustomBtnHyperLink } from "../styles/components/cutomBtn-styled";

const CustomBtn = ({ path, aTag, onClick, children }) => {
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
      <CustomBtnContainer>
         {dispLink}
      </CustomBtnContainer>
   );
};

export default CustomBtn;
