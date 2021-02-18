import React from "react";
import { CustomBtnContainer, CustomBtnLink } from "../styles/components/cutomBtn-styled";

export const CustomBtn = ({ href, target, rel, children }) => (
   <CustomBtnContainer>
      <CustomBtnLink href={href} target={target} rel={rel}>
         {children}
      </CustomBtnLink>
   </CustomBtnContainer>
);

