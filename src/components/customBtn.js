import React from "react";
import { CustomBtnContainer, CustomBtnLink, CustomBtnHyperLink } from "../styles/components/cutomBtn-styled";

export const CustomBtn = ({ path, aTag, onClick, children }) => {
   const dispLink = aTag 
      ? (
         <CustomBtnHyperLink 
            href={path} 
            target={`_blank`} 
            rel={`noopener noreferrer`}
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

