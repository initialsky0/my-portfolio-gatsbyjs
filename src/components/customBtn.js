import React from "react";
import { CustomBtnContainer, CustomBtnLink, CustomBtnHyperLink } from "../styles/components/cutomBtn-styled";

export const CustomBtn = ({ path, aTag, children }) => {
   const dispLink = aTag 
      ? (
         <CustomBtnHyperLink href={path} target={`_blank`} rel={`noopener noreferrer`}>
            {children}
         </CustomBtnHyperLink>
         )
      : (
         <CustomBtnLink to={path}>
            {children}
         </CustomBtnLink>
      )
   return (
      <CustomBtnContainer>
         {dispLink}
      </CustomBtnContainer>
   );
};

